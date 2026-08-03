import ResumeCraftBuilder from "@/components/builder/ResumeCraftBuilder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResumeCraft AI Builder — 3-Step Recruiter-Approved Resume Creator",
  description: "Select recruiter-tested templates, edit content with AI bullet enhancement, and export 100% ATS-compliant resumes for free.",
};

export default function BuilderPage() {
  return <ResumeCraftBuilder />;
}
