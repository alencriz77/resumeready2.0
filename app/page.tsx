"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Star, 
  Sparkles, 
  ArrowRight, 
  ChevronDown, 
  Plus, 
  Zap, 
  ShieldCheck, 
  Download, 
  FileText, 
  HelpCircle,
  TrendingUp,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is this resume builder completely free to use?",
      a: "Yes! You can build, edit, and export high-resolution ATS-compliant PDF resumes with zero hidden subscriptions or paywall traps.",
    },
    {
      q: "Are the templates ATS (Applicant Tracking System) friendly?",
      a: "All templates are tested against raw text extractors used by Greenhouse, Lever, Workday, and Taleo to ensure 100% clean parsing.",
    },
    {
      q: "How does the AI Assistant help write bullets?",
      a: "Our AI Assistant analyzes your target job title to generate recruiter-approved bullet points with quantified metric impact.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 pb-20">
      
      {/* HERO SECTION CONTAINER - EXACT RESUME.IO MATCH */}
      <section className="container mx-auto px-4 pt-6 pb-12 sm:px-8">
        <div className="rounded-[2.5rem] bg-[#f4f7fa] p-8 sm:p-14 border border-slate-200/60 shadow-sm relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT COLUMN: HEADLINE & CTAS */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
                This resume builder gets you <br />
                <span className="text-blue-600 font-extrabold underline decoration-blue-400/40 decoration-4">an interview|</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 font-medium max-w-lg leading-relaxed">
                Only 2% of resumes win. Yours will be one of them.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link href="/builder">
                  <button className="w-full sm:w-auto rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base px-8 py-4 shadow-lg shadow-blue-500/25 active:scale-95 transition-all">
                    Create my resume
                  </button>
                </Link>

                <Link href="/builder">
                  <button className="w-full sm:w-auto rounded-xl bg-blue-50 hover:bg-blue-100/80 text-blue-600 font-bold text-base px-8 py-4 border border-blue-200/60 transition-all">
                    Upload my resume
                  </button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="space-y-2 pt-4 text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-2 text-slate-700">
                  <div className="flex items-center justify-center h-5 w-5 rounded-full bg-emerald-500 text-white">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                  <span><strong className="text-slate-900 font-bold">39%</strong> more likely to land the job</span>
                </div>

                <div className="flex items-center gap-2 text-slate-600">
                  <div className="flex items-center text-emerald-500 font-extrabold gap-0.5">
                    <Star className="h-4 w-4 fill-emerald-500 text-emerald-500" />
                    <span className="text-slate-900 font-bold ml-1">Trustpilot</span>
                  </div>
                  <span><strong className="text-slate-900 font-bold">4.2</strong> out of 5 | 55,907 reviews</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: FLOATING MOCKUP CARDS MATCHING IMAGE */}
            <div className="lg:col-span-6 relative flex justify-center py-6">
              
              {/* Outer halo background circle */}
              <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-blue-400/10 blur-2xl" />

              {/* Floating Resume Preview Canvas */}
              <div className="relative w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 text-xs text-slate-800 space-y-4 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                
                {/* Score badge chip */}
                <div className="absolute -left-6 top-8 bg-white rounded-2xl p-2.5 shadow-xl border border-slate-200 flex items-center gap-2">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500 text-white font-extrabold flex items-center justify-center text-xs">
                    81%
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Resume Score</div>
                    <div className="text-[10px] text-slate-500">Recruiter Verified</div>
                  </div>
                </div>

                {/* Profile Avatar circle */}
                <div className="absolute -right-4 -top-6">
                  <div className="h-20 w-20 rounded-full bg-blue-500/20 p-1 flex items-center justify-center shadow-lg">
                    <div className="h-full w-full rounded-full bg-gradient-to-tr from-blue-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                      AH
                    </div>
                  </div>
                </div>

                {/* ATS Perfect Badge */}
                <div className="absolute -right-6 top-24 bg-indigo-500 text-white font-bold text-[11px] px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5" /> ATS Perfect
                </div>

                {/* Resume Header mockup */}
                <div className="border-b border-slate-200 pb-3 pr-16">
                  <h3 className="text-base font-extrabold text-slate-950">Alice Hart</h3>
                  <div className="text-amber-600 font-bold text-[11px]">Math Teacher</div>
                </div>

                {/* Summary snippet */}
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  Enthusiastic math teacher with over 8 years experience cultivating a nurturing learning environment...
                </p>

                {/* Employment history */}
                <div className="space-y-1">
                  <div className="font-bold text-amber-600 text-[11px]">Employment History</div>
                  <div className="font-bold text-slate-900">Tuscaloosa County High School</div>
                  <div className="text-[10px] text-slate-500">September 2017 - Present</div>
                </div>

                {/* Ask AI coach floating bar */}
                <div className="bg-slate-50 rounded-xl p-2.5 border border-slate-200 flex items-center gap-2 text-slate-600 font-medium">
                  <div className="h-4 w-4 rounded-full border-2 border-amber-500 border-t-transparent animate-spin" />
                  <span>Ask AI coach anything...</span>
                </div>

                {/* Skills tags card overlay */}
                <div className="bg-white rounded-xl p-3 shadow-lg border border-slate-200 space-y-2">
                  <div className="font-bold text-slate-900 text-[11px]">Skills</div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md text-[10px]">
                      Management Skills
                    </span>
                    <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md text-[10px]">
                      Analytical Thinking
                    </span>
                    <span className="bg-slate-100 text-slate-800 font-semibold px-2.5 py-1 rounded-md text-[10px]">
                      Leadership
                    </span>
                    <span className="bg-blue-50 text-blue-600 font-bold px-2.5 py-1 rounded-md text-[10px] flex items-center gap-1">
                      <Plus className="h-3 w-3" /> Add skill
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER BANNER MATCHING IMAGE */}
      <section className="py-8 text-center border-b border-slate-200/80">
        <div className="container mx-auto px-4 flex items-center justify-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <TrendingUp className="h-6 w-6" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="text-blue-600">142,000</span> resumes created today
          </h2>
        </div>
      </section>

      {/* TEMPLATES PREVIEW SHOWCASE */}
      <section className="container mx-auto px-4 py-16 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Recruiter-Tested Templates for Every Profession
          </h2>
          <p className="text-slate-600 text-base font-medium">
            Designed to pass ATS screening algorithms and impress hiring managers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Template 1 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="aspect-[3/4] rounded-xl bg-slate-50 border border-slate-200 p-4 font-sans text-[8px] leading-tight space-y-2">
              <div className="border-b border-blue-600 pb-1 font-bold text-blue-900 text-[10px]">ALEX MERCER</div>
              <div className="text-blue-600 font-bold">Senior Software Engineer</div>
              <div className="text-slate-600">• Architected Next.js micro-frontend platform</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Modern Minimalist</span>
              <span className="text-xs font-semibold text-blue-600">Use Template →</span>
            </div>
          </div>

          {/* Template 2 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="aspect-[3/4] rounded-xl bg-slate-900 text-white p-4 font-serif text-[8px] leading-tight space-y-2">
              <div className="border-b border-slate-700 pb-1 font-bold text-[10px]">ALEX MERCER</div>
              <div className="text-slate-300 font-bold">Executive Technical Leader</div>
              <div className="text-slate-300">• Scaled cloud systems to 2.5M active users</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Executive Serif</span>
              <span className="text-xs font-semibold text-blue-600">Use Template →</span>
            </div>
          </div>

          {/* Template 3 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="aspect-[3/4] rounded-xl bg-white border border-slate-200 p-4 font-mono text-[8px] leading-tight space-y-2">
              <div className="border-b border-slate-300 pb-1 font-bold text-[10px]">ALEX MERCER | alex@dev.io</div>
              <div className="font-bold text-slate-800">100% ATS GOLD STANDARD</div>
              <div className="text-slate-600">• Single-column stream preferred by Workday</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Minimal ATS Standard</span>
              <span className="text-xs font-semibold text-blue-600">Use Template →</span>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="container mx-auto px-4 py-16 sm:px-8 max-w-4xl">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left font-bold text-base text-slate-900 flex items-center justify-between hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="p-5 text-sm text-slate-600 leading-relaxed border-t border-slate-200 bg-slate-50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL BOTTOM CONVERSION BANNER */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="rounded-[2.5rem] bg-blue-600 p-12 sm:p-16 text-white space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to step up your career?
          </h2>
          <p className="text-blue-100 text-lg max-w-xl mx-auto font-medium">
            Build your professional resume today and land 3x more recruiter interview calls.
          </p>
          <div>
            <Link href="/builder">
              <button className="rounded-xl bg-white text-blue-600 font-extrabold text-base px-8 py-4 shadow-xl hover:bg-slate-100 active:scale-95 transition-all">
                Create my resume free
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
