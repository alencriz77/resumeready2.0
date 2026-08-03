import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/ratelimit";

const ATSAnalyzeSchema = z.object({
  resumeContent: z.string().min(10),
  targetRole: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimit = await checkRateLimit(`ats_analyze_${ip}`, 30, 60);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many ATS analysis requests. Please wait." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { resumeContent, targetRole } = ATSAnalyzeSchema.parse(body);

    // Run Raw Text Parsing Simulation & Issue Detection
    const hasColumns = resumeContent.includes("\t") || resumeContent.includes("||");
    const hasNumbers = /\d+%|\$\d+|\d+M|\d+k/gi.test(resumeContent);

    const issues = [];
    let score = 95;

    if (hasColumns) {
      issues.push({
        type: "warning",
        title: "Table or Multi-Column Layout Detected",
        desc: "Side-by-side text blocks may garble date order in ATS systems like Workday.",
      });
      score -= 10;
    }

    if (!hasNumbers) {
      issues.push({
        type: "warning",
        title: "Low Metric Density",
        desc: "Fewer than 2 quantified percentage or monetary impact metrics found in accomplishments.",
      });
      score -= 10;
    }

    return NextResponse.json({
      success: true,
      score,
      targetRole: targetRole || "General Candidate",
      issues,
      parsedRawStream: resumeContent.substring(0, 500) + "...",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid payload", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
