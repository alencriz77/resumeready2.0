"use client";

import Link from "next/link";
import { BookOpen, FileText } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Career Advice & <span className="text-blue-600">Resources</span>
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
            Guides, ATS tips, and recruiter insights to help you land more interview calls.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "How to Pass Greenhouse & Lever ATS Scanners", desc: "Learn how raw text parsing works and why multi-column tables break applicant scanners." },
            { title: "10 Quantified Accomplishment Bullet Formulas", desc: "Transform duty descriptions into high-impact metric bullets." },
            { title: "Positioning vs Formatting in 2026", desc: "Why recruiter story positioning matters more than font choices." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-base font-bold text-slate-900 leading-snug">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
