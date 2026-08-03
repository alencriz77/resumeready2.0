"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertTriangle, FileUp, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { BorderBeam } from "@/components/magicui/BorderBeam";

export default function ATSCheckerPage() {
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<{
    score: number;
    issues: { type: "error" | "warning"; title: string; desc: string }[];
  } | null>(null);

  const handleUploadSim = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setReport({
        score: 94,
        issues: [
          {
            type: "warning",
            title: "Multi-Column Table Layout Detected",
            desc: "Some ATS parsers like Workday compress side-by-side columns into a single line, causing dates to align with wrong job titles.",
          },
          {
            type: "warning",
            title: "Missing Quantified Impact Metrics in Recent Experience",
            desc: "Bullets mention general tasks without percentage improvements or dollar metrics.",
          },
        ],
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#030712] py-16 text-slate-100">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1 text-xs font-semibold text-emerald-400">
            <CheckCircle2 className="h-4 w-4" /> Live ATS Parser Diagnostic
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Test Your Resume Against <span className="gradient-text">ATS Scanners</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Upload your existing PDF or Word resume to see how Greenhouse, Lever, and Workday extract raw text.
          </p>
        </div>

        {/* Upload Box */}
        <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-10 text-center shadow-2xl backdrop-blur-xl mb-10">
          <BorderBeam size={250} duration={15} colorFrom="#10b981" colorTo="#3b82f6" />
          
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <FileUp className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Upload Existing PDF or DOCX Resume</h3>
              <p className="text-xs text-slate-400 mt-1">Drag and drop your file or click to select</p>
            </div>
            <button
              onClick={handleUploadSim}
              disabled={analyzing}
              className="mt-4 flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {analyzing ? (
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 animate-spin" /> Parsing Raw Stream...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Analyze ATS Score
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Report Output */}
        {report && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">ATS Parsing Diagnostic Report</h3>
                <p className="text-xs text-slate-400 mt-0.5">Parsed against Greenhouse & Lever standard schemas</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-emerald-400">{report.score}/100</div>
                <div className="text-[11px] text-slate-400">Overall ATS Score</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Identified Formatting Issues</h4>
              {report.issues.map((issue, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3 text-xs">
                  <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-amber-200">{issue.title}</div>
                    <div className="text-slate-300 mt-1 leading-relaxed">{issue.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <Link
                href="/builder/demo"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
              >
                Fix Issues in Free Resume Builder <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
