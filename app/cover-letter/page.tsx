"use client";

import Link from "next/link";
import { Sparkles, FileText, Download } from "lucide-react";

export default function CoverLetterPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Matching Cover Letters
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            AI Cover Letter <span className="text-blue-600">Generator</span>
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
            Generate customized cover letters that match your resume style and target job requirements.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-8 space-y-4 shadow-sm">
          <textarea
            rows={5}
            placeholder="Paste target job description to match your cover letter..."
            className="w-full rounded-xl bg-slate-50 border border-slate-200 p-4 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
          />
          <div className="flex justify-end">
            <Link href="/builder">
              <button className="rounded-xl bg-blue-600 text-white font-bold px-6 py-3 text-xs shadow-md">
                ✨ Generate Matching Cover Letter
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
