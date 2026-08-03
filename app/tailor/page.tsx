"use client";

import { useState } from "react";
import Link from "next/link";
import { Zap, BrainCircuit, CheckCircle2, AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import { BorderBeam } from "@/components/magicui/BorderBeam";

export default function JobTailorPage() {
  const [jobDescription, setJobDescription] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    matched: string[];
    missing: string[];
  } | null>(null);

  const handleTailor = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResult({
        score: 86,
        matched: ["TypeScript", "Next.js", "PostgreSQL", "REST APIs", "CI/CD"],
        missing: ["Kubernetes", "GraphQL", "System Design Metrics", "Kafka"],
      });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#030712] py-16 text-slate-100">
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/10 border border-amber-500/20 px-4 py-1 text-xs font-semibold text-amber-400">
            <BrainCircuit className="h-4 w-4" /> 1-Click Job Matcher & Keyword Alignment
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
            Tailor Your Resume to Any <span className="gradient-text">Job Posting</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Paste the target job description text below to extract required technical competencies and missing keyword gaps instantly.
          </p>
        </div>

        {/* Input Card */}
        <div className="relative rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-4 shadow-2xl backdrop-blur-xl mb-10">
          <BorderBeam size={250} duration={15} colorFrom="#f59e0b" colorTo="#ec4899" />

          <div>
            <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2">
              Paste Target Job Description (LinkedIn / Indeed / Lever)
            </label>
            <textarea
              rows={6}
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="e.g. We are looking for a Senior Full-Stack Engineer with strong TypeScript, Next.js, PostgreSQL, and Kubernetes experience to scale our cloud infrastructure..."
              className="w-full rounded-xl bg-slate-900 border border-slate-800 p-4 text-xs text-white leading-relaxed focus:border-amber-500 focus:outline-none"
            />
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleTailor}
              disabled={analyzing || !jobDescription}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 text-xs font-semibold text-white shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
            >
              {analyzing ? (
                <span className="flex items-center gap-2">
                  <Zap className="h-4 w-4 animate-spin" /> Matching Competencies...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" /> Run Job Match Analysis
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Output */}
        {result && (
          <div className="rounded-2xl border border-slate-800 bg-slate-950 p-8 space-y-6 animate-in fade-in duration-500">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h3 className="text-xl font-bold text-white">Job Alignment Result</h3>
                <p className="text-xs text-slate-400 mt-0.5">Competency Match Analysis</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-amber-400">{result.score}%</div>
                <div className="text-[11px] text-slate-400">Match Score</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs">
                  <CheckCircle2 className="h-4 w-4" /> Matched Required Skills ({result.matched.length})
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {result.matched.map((skill, idx) => (
                    <span key={idx} className="bg-emerald-500/20 text-emerald-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-xs">
                  <AlertCircle className="h-4 w-4" /> Missing Key Competencies ({result.missing.length})
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {result.missing.map((skill, idx) => (
                    <span key={idx} className="bg-red-500/20 text-red-300 text-[11px] font-semibold px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <Link
                href="/builder/demo"
                className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors"
              >
                Auto-Inject Missing Keywords in Editor <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
