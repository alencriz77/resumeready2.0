import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/ratelimit";

const CreateResumeSchema = z.object({
  title: z.string().min(1).max(100),
  targetRole: z.string().optional(),
  summary: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    // 1. Rate Limiting Check (20 requests / 60 seconds)
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const rateLimit = await checkRateLimit(`resumes_create_${ip}`, 20, 60);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a few minutes." },
        { status: 429 }
      );
    }

    // 2. Validate Payload
    const body = await request.json();
    const validatedData = CreateResumeSchema.parse(body);

    // 3. Mock Database Creation Response
    const newResume = {
      id: `res_${Math.random().toString(36).substring(2, 9)}`,
      title: validatedData.title,
      targetRole: validatedData.targetRole || "Software Engineer",
      summary: validatedData.summary || "",
      createdAt: new Date().toISOString(),
    };

    return NextResponse.json({ success: true, resume: newResume }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid request payload", details: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
