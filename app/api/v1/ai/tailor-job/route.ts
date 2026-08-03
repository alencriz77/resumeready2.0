import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/ratelimit";

const TailorSchema = z.object({
  jobDescription: z.string().min(20),
  userSkills: z.array(z.string()).default([]),
});

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimit = await checkRateLimit(`ai_tailor_${ip}`, 15, 60);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "AI Tailoring rate limit exceeded. Please wait 60 seconds." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { jobDescription, userSkills } = TailorSchema.parse(body);

    const jdWords = jobDescription.toLowerCase();
    const potentialKeywords = ["typescript", "react", "next.js", "node.js", "postgresql", "redis", "docker", "aws", "graphql", "kubernetes", "system design"];

    const matched = potentialKeywords.filter((kw) => jdWords.includes(kw) && userSkills.map(s=>s.toLowerCase()).includes(kw));
    const missing = potentialKeywords.filter((kw) => jdWords.includes(kw) && !userSkills.map(s=>s.toLowerCase()).includes(kw));

    const matchPercentage = Math.round((matched.length / Math.max(1, matched.length + missing.length)) * 100);

    return NextResponse.json({
      success: true,
      score: Math.max(70, matchPercentage),
      matched,
      missing,
      suggestedBullets: [
        "Architected scalable distributed system incorporating high-availability database replication.",
        "Collaborated with cross-functional product teams to deliver feature specifications ahead of deadline.",
      ],
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid request format", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
