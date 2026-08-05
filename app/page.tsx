"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Star,
  Sparkles,
  ChevronDown,
  Plus,
  Zap,
  ShieldCheck,
  TrendingUp,
  Target,
  FileText,
  ArrowRight,
} from "lucide-react";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import { PricingMatrix } from "@/components/pricing/PricingMatrix";

export default function Home() {
  // --- Section 1: Hero Typing Animation State ---
  const typingWords = ["an interview", "hired faster", "noticed", "a callback"];
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingIndex((prev) => (prev + 1) % typingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // --- Section 4: Carousel State ---
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // --- Section 6: FAQ State ---
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Is ResumeReady really free?",
      a: "Yes! Build, edit, and export ATS-compliant PDF resumes with zero hidden costs.",
    },
    {
      q: "What makes a resume ATS-compatible?",
      a: "Single-column layouts, standard section headers, no tables/graphics, parseable fonts.",
    },
    {
      q: "How does the AI content assistant work?",
      a: "Our AI analyzes your job title to generate quantified accomplishment bullets.",
    },
    {
      q: "Can I download my resume as PDF?",
      a: "Absolutely. Export pixel-perfect PDF, DOCX, or plain text formats.",
    },
    {
      q: "Is my data secure?",
      a: "Your data is encrypted and never sold. We follow industry-standard security.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans overflow-x-hidden">
      {/* Inline styles for custom animations to avoid needing tailwind config changes */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes progressRing {
          0% { stroke-dashoffset: 63; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-progress-ring {
          animation: progressRing 5s linear forwards;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(1deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
        
        {/* ================= SECTION 1: HERO ================= */}
        <section className="rounded-[2.5rem] bg-[#f4f7fa] p-8 sm:p-14 border border-slate-200/60 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                This resume builder gets you{" "}
                <br className="hidden sm:block" />
                <span className="text-blue-600 underline decoration-blue-400/40 decoration-4 transition-all duration-300">
                  {typingWords[typingIndex]}
                </span>
                <span className="animate-pulse text-blue-600 font-light">|</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-xl">
                Only 2% of resumes win. Yours will be one of them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/builder"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-blue-600 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-blue-700 hover:shadow-blue-600/40 transition-all duration-300"
                >
                  Create my resume
                </Link>
                <Link
                  href="/builder"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-blue-600 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-all duration-300"
                >
                  Upload my resume
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-4 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-sm font-medium text-slate-700">39% more likely to land the job</span>
                </div>
                <div className="hidden sm:block w-px h-8 bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-green-500 fill-green-500" />
                  <div className="text-sm">
                    <span className="font-bold text-slate-900">Trustpilot</span>
                    <span className="text-slate-600 ml-1">4.5 out of 5 | 12,400 reviews</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-md animate-float hover:rotate-0 transition-transform duration-500">
                
                {/* Floating Badges */}
                <div className="absolute -top-6 -left-6 z-20 bg-white p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                  <div className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded-lg text-sm">81%</div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-tight">Resume Score</span>
                    <span className="text-[10px] text-slate-500 font-medium">Recruiter Verified</span>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 z-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                  AH
                </div>

                <div className="absolute top-1/2 -right-8 z-20 bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-xs font-bold -translate-y-1/2">
                  <Sparkles className="w-4 h-4" />
                  ATS Perfect
                </div>

                {/* Resume Card Mockup */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-slate-100 relative overflow-hidden">
                  {/* Decorative Header */}
                  <div className="w-full h-2 bg-blue-600 absolute top-0 left-0"></div>
                  
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="text-center pb-4 border-b border-slate-100">
                      <h3 className="text-2xl font-bold text-slate-900">Alice Hart</h3>
                      <p className="text-blue-600 text-sm font-medium uppercase tracking-wider">Math Teacher</p>
                      <div className="flex justify-center gap-3 text-[10px] text-slate-500 mt-2">
                        <span>New York, NY</span>
                        <span>•</span>
                        <span>alice@example.com</span>
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-800 uppercase">Professional Summary</div>
                      <div className="h-2 bg-slate-100 rounded w-full"></div>
                      <div className="h-2 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-2 bg-slate-100 rounded w-4/6"></div>
                    </div>

                    {/* AI Coach Loading Bar */}
                    <div className="bg-blue-50 border border-blue-100 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 space-y-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-bold text-blue-900">AI Coach Optimization</span>
                          <span className="text-[10px] font-bold text-blue-600">Generating bullets...</span>
                        </div>
                        <div className="h-1.5 bg-blue-200 rounded-full overflow-hidden w-full">
                          <div className="h-full bg-blue-600 w-2/3 rounded-full relative">
                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Employment */}
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-slate-800 uppercase">Employment History</div>
                      <div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-slate-700">Senior Math Teacher</span>
                          <span className="text-slate-400">2019 - Present</span>
                        </div>
                        <span className="text-[10px] text-slate-500">Lincoln High School</span>
                        <div className="mt-2 space-y-1.5">
                          <div className="flex gap-2 items-center">
                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="h-1.5 bg-slate-100 rounded w-full"></div>
                          </div>
                          <div className="flex gap-2 items-center">
                            <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                            <div className="h-1.5 bg-slate-100 rounded w-11/12"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-800 uppercase">Skills</div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-md">Curriculum Design</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-md">Algebra & Geometry</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] rounded-md">EdTech Tools</span>
                        <button className="px-2 py-1 border border-dashed border-blue-300 text-blue-600 text-[10px] rounded-md flex items-center gap-1 hover:bg-blue-50">
                          <Plus className="w-3 h-3" /> Add skill
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: COUNTER BANNER ================= */}
        <section className="flex flex-col sm:flex-row items-center justify-center gap-3 py-6 px-4">
          <div className="flex items-center gap-3 text-slate-600 font-medium text-lg sm:text-xl">
            <TrendingUp className="w-6 h-6 text-blue-600" />
            <div className="text-blue-600 font-bold text-2xl sm:text-3xl tracking-tight">
              <NumberTicker value={142000} />+
            </div>
            resumes created today
          </div>
        </section>

        {/* ================= SECTION 3: FEATURE GRID ================= */}
        <section className="space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why job seekers love ResumeReady</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">A draft in 5 minutes</h3>
              <p className="text-slate-600 text-sm">AI writes your bullet points. You just review.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero formatting errors</h3>
              <p className="text-slate-600 text-sm">ATS-tested layouts pass every parser.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Score 94+ on ATS</h3>
              <p className="text-slate-600 text-sm">Built for Greenhouse, Lever, Workday & iCIMS.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6 text-violet-500" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Negotiate 12% more</h3>
              <p className="text-slate-600 text-sm">Quantified metrics make salary talks easier.</p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: TOOLS CAROUSEL ================= */}
        <section className="bg-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 border border-slate-200 shadow-sm space-y-12">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Every tool you need is here...</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {[
                { title: "1. Build Your Resume", icon: FileText },
                { title: "2. Check ATS Score", icon: ShieldCheck },
                { title: "3. Match Any Job", icon: Target }
              ].map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex-1 relative overflow-hidden ${
                    activeTab === idx 
                      ? "bg-slate-900 text-white shadow-xl" 
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                  }`}
                >
                  <tab.icon className={`w-5 h-5 ${activeTab === idx ? "text-blue-400" : ""}`} />
                  {tab.title}
                  
                  {/* Progress Ring */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 -rotate-90 transform" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" className="opacity-20" />
                      {activeTab === idx && (
                        <circle
                          key={activeTab} // Forces re-render of animation
                          cx="12" cy="12" r="10"
                          stroke="currentColor" strokeWidth="2.5" fill="none"
                          strokeDasharray="63"
                          strokeDashoffset="63"
                          className="text-blue-400 animate-progress-ring"
                        />
                      )}
                    </svg>
                  </div>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 min-h-[400px] flex items-center relative overflow-hidden">
              
              {/* Tab 1 Content */}
              <div className={`w-full grid lg:grid-cols-2 gap-10 items-center absolute inset-0 p-6 sm:p-10 transition-all duration-700 ${activeTab === 0 ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Create a standout resume in minutes.</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Pick a template. Fill in your details. Download a pixel-perfect PDF in minutes. No struggling with Word margins ever again.
                  </p>
                  <Link href="/builder" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                    Try it free <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-slate-200 h-full w-full p-4 relative overflow-hidden">
                  <div className="flex h-full gap-4">
                    {/* Form Mockup */}
                    <div className="w-1/2 space-y-3 pt-2">
                      <div className="h-4 bg-slate-200 rounded w-1/3 mb-4"></div>
                      <div className="h-8 bg-slate-50 border border-slate-200 rounded-md"></div>
                      <div className="h-8 bg-slate-50 border border-slate-200 rounded-md w-3/4"></div>
                      <div className="h-24 bg-slate-50 border border-slate-200 rounded-md mt-6"></div>
                    </div>
                    {/* PDF Mockup */}
                    <div className="w-1/2 bg-slate-100 rounded-lg border border-slate-200 p-4 space-y-3">
                      <div className="h-3 bg-blue-200 rounded w-1/2 mx-auto"></div>
                      <div className="h-2 bg-slate-300 rounded w-1/3 mx-auto mt-1 mb-4"></div>
                      <div className="h-1 bg-slate-300 rounded w-full"></div>
                      <div className="h-1 bg-slate-200 rounded w-full"></div>
                      <div className="h-1 bg-slate-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 2 Content */}
              <div className={`w-full grid lg:grid-cols-2 gap-10 items-center absolute inset-0 p-6 sm:p-10 transition-all duration-700 ${activeTab === 1 ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Beat the Applicant Tracking Systems.</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Upload your resume. Get instant ATS compatibility score. Fix issues before you apply and ensure humans actually read it.
                  </p>
                  <Link href="/ats-checker" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                    Try it free <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="hidden lg:flex bg-white rounded-2xl shadow-xl border border-slate-200 h-full w-full p-6 items-center justify-center flex-col gap-6 relative">
                  {/* Gauge Mockup */}
                  <div className="relative w-40 h-20 overflow-hidden">
                    <div className="w-40 h-40 rounded-full border-[12px] border-slate-100 absolute top-0 left-0"></div>
                    <div className="w-40 h-40 rounded-full border-[12px] border-emerald-500 absolute top-0 left-0" style={{ clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)", transform: "rotate(45deg)" }}></div>
                  </div>
                  <div className="absolute top-16 text-4xl font-extrabold text-slate-900">94</div>
                  
                  <div className="w-full space-y-3 mt-4">
                    <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Standard Headings
                      </div>
                      <span className="text-emerald-600 font-bold text-xs">Pass</span>
                    </div>
                    <div className="flex items-center justify-between bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                      <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Clean Formatting
                      </div>
                      <span className="text-emerald-600 font-bold text-xs">Pass</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tab 3 Content */}
              <div className={`w-full grid lg:grid-cols-2 gap-10 items-center absolute inset-0 p-6 sm:p-10 transition-all duration-700 ${activeTab === 2 ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 -translate-x-12 pointer-events-none"}`}>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900">Tailor for the perfect match.</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">
                    Paste any job description. See matched skills, missing keywords, and your match score. Customize instantly for a higher callback rate.
                  </p>
                  <Link href="/tailor" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700">
                    Try it free <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="hidden lg:block bg-white rounded-2xl shadow-xl border border-slate-200 h-full w-full p-5 relative">
                  <div className="h-16 bg-slate-50 border border-slate-200 rounded-lg mb-4 flex items-center px-4 gap-3">
                     <div className="w-8 h-8 rounded bg-blue-100"></div>
                     <div>
                       <div className="h-3 w-32 bg-slate-300 rounded mb-1"></div>
                       <div className="h-2 w-20 bg-slate-200 rounded"></div>
                     </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold text-slate-800">Keywords matched (8/12)</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold">Python</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold">React</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold">TypeScript</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-slate-800">Missing keywords (add these)</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-red-50 text-red-600 border border-red-100 rounded text-[10px] font-bold flex items-center gap-1"><Plus className="w-3 h-3"/> AWS</span>
                      <span className="px-2 py-1 bg-red-50 text-red-600 border border-red-100 rounded text-[10px] font-bold flex items-center gap-1"><Plus className="w-3 h-3"/> GraphQL</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: TEMPLATE SHOWCASE ================= */}
        <section className="space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-4 py-1.5 text-sm font-medium">
              <span>🔥</span> Trending templates for 2025
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Templates Matched to Today&apos;s Hottest Roles
            </h2>
            <p className="text-slate-500 text-lg">
              Data-driven designs based on the jobs getting the most traction right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Trending Template 1: Stockholm - AI & Tech */}
            <Link href="/builder?template=stockholm" className="group block">
              <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 overflow-hidden flex flex-col">
                {/* Mini Resume Mockup */}
                <div className="aspect-[3/4] bg-slate-50 p-4 relative">
                  {/* Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    🔥 +38.5% YoY
                  </div>
                  {/* ATS Score */}
                  <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-md px-2 py-1 shadow-sm">
                    <span className="text-emerald-600 font-bold text-xs">98</span>
                    <span className="text-slate-400 text-[10px]">/100</span>
                  </div>
                  {/* Modern Sidebar Mockup */}
                  <div className="w-full h-full bg-white rounded-lg border border-slate-100 shadow-sm flex overflow-hidden">
                    <div className="w-[35%] bg-blue-600 p-2 flex flex-col gap-1">
                      <div className="w-6 h-6 rounded-full bg-white/30 mx-auto mb-1"></div>
                      <div className="text-[5px] text-white font-bold text-center">Alice Hart</div>
                      <div className="text-[4px] text-blue-200 text-center">AI/ML Engineer</div>
                      <div className="mt-2 space-y-1">
                        <div className="text-[4px] text-white/70 font-bold">SKILLS</div>
                        <div className="flex flex-wrap gap-0.5">
                          <span className="bg-white/20 text-white text-[3px] px-1 rounded">PyTorch</span>
                          <span className="bg-white/20 text-white text-[3px] px-1 rounded">LLMs</span>
                          <span className="bg-white/20 text-white text-[3px] px-1 rounded">Python</span>
                          <span className="bg-white/20 text-white text-[3px] px-1 rounded">MLOps</span>
                        </div>
                      </div>
                    </div>
                    <div className="w-[65%] p-2 space-y-1.5">
                      <div className="text-[4px] text-slate-800 font-bold">EXPERIENCE</div>
                      <div className="text-[4px] text-slate-600 font-medium">Senior ML Engineer</div>
                      <div className="text-[3px] text-slate-400">DeepMind · 2022–Present</div>
                      <div className="text-[3px] text-slate-500">• Built RAG pipeline reducing latency 40%</div>
                      <div className="text-[3px] text-slate-500">• Deployed LLM serving 10M+ daily</div>
                    </div>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Use Stockholm
                    </span>
                  </div>
                </div>
                {/* Card Info */}
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Stockholm</h3>
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">Tech & AI</span>
                  </div>
                  <p className="text-xs text-slate-500">$140K–$206K avg salary range</p>
                </div>
              </div>
            </Link>

            {/* Trending Template 2: Berlin - DevOps/Cloud */}
            <Link href="/builder?template=berlin" className="group block">
              <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-[3/4] bg-slate-50 p-4 relative">
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    🔥 +28.5% YoY
                  </div>
                  <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-md px-2 py-1 shadow-sm">
                    <span className="text-emerald-600 font-bold text-xs">98</span>
                    <span className="text-slate-400 text-[10px]">/100</span>
                  </div>
                  {/* Tech Terminal Mockup */}
                  <div className="w-full h-full bg-slate-900 rounded-lg border border-slate-700 shadow-sm p-2.5 overflow-hidden">
                    <div className="flex gap-1 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-[5px] text-emerald-400 font-mono font-bold">Alice Hart</div>
                    <div className="text-[4px] text-emerald-300/60 font-mono">Cloud Architect & SRE</div>
                    <div className="mt-1.5 text-[4px] text-slate-500 font-mono">$ cat experience.yml</div>
                    <div className="text-[3.5px] text-emerald-300/80 font-mono mt-0.5">  role: Lead DevOps Engineer</div>
                    <div className="text-[3.5px] text-emerald-300/80 font-mono">  company: AWS · 2021-Present</div>
                    <div className="text-[3.5px] text-slate-400 font-mono">  &gt; Managed 200+ K8s clusters</div>
                    <div className="text-[3.5px] text-slate-400 font-mono">  &gt; Reduced deploy time by 65%</div>
                    <div className="mt-1.5 text-[4px] text-slate-500 font-mono">$ echo $STACK</div>
                    <div className="flex flex-wrap gap-0.5 mt-0.5">
                      <span className="bg-emerald-500/20 text-emerald-400 text-[3px] px-1 rounded font-mono">Terraform</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[3px] px-1 rounded font-mono">K8s</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[3px] px-1 rounded font-mono">AWS</span>
                      <span className="bg-emerald-500/20 text-emerald-400 text-[3px] px-1 rounded font-mono">Docker</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Use Berlin
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Berlin</h3>
                    <span className="text-[10px] bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full">DevOps & Cloud</span>
                  </div>
                  <p className="text-xs text-slate-500">$118K–$152K avg salary range</p>
                </div>
              </div>
            </Link>

            {/* Trending Template 3: Toronto - Healthcare */}
            <Link href="/builder?template=toronto" className="group block">
              <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-sky-200 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-[3/4] bg-slate-50 p-4 relative">
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    🔥 +40.1% YoY
                  </div>
                  <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-md px-2 py-1 shadow-sm">
                    <span className="text-emerald-600 font-bold text-xs">97</span>
                    <span className="text-slate-400 text-[10px]">/100</span>
                  </div>
                  {/* Clinical Clean Mockup */}
                  <div className="w-full h-full bg-white rounded-lg border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                    <div className="h-2 bg-sky-500 w-full"></div>
                    <div className="p-2 text-center border-b border-slate-100">
                      <div className="text-[5px] font-bold text-slate-800">Alice Hart, BSN, RN</div>
                      <div className="text-[4px] text-sky-600">Registered Nurse · ICU Specialist</div>
                      <div className="flex justify-center gap-1 mt-0.5">
                        <span className="bg-sky-50 text-sky-700 text-[3px] px-1 rounded">BLS</span>
                        <span className="bg-sky-50 text-sky-700 text-[3px] px-1 rounded">ACLS</span>
                        <span className="bg-sky-50 text-sky-700 text-[3px] px-1 rounded">PALS</span>
                      </div>
                    </div>
                    <div className="p-2 space-y-1.5 flex-1">
                      <div className="bg-sky-50/60 rounded px-1 py-0.5">
                        <div className="text-[4px] text-sky-800 font-bold">CLINICAL EXPERIENCE</div>
                      </div>
                      <div className="text-[4px] text-slate-600 font-medium">ICU Nurse</div>
                      <div className="text-[3px] text-slate-400">Mount Sinai Hospital · 2020–Present</div>
                      <div className="text-[3px] text-slate-500">• Managed 12-bed ICU critical care unit</div>
                      <div className="text-[3px] text-slate-500">• Reduced patient readmission by 18%</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Use Toronto
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Toronto</h3>
                    <span className="text-[10px] bg-sky-50 text-sky-600 px-2 py-0.5 rounded-full">Healthcare</span>
                  </div>
                  <p className="text-xs text-slate-500">$80K–$145K avg salary range</p>
                </div>
              </div>
            </Link>

            {/* Trending Template 4: Vienna - Career Changer */}
            <Link href="/builder?template=vienna" className="group block">
              <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-xl hover:border-teal-200 transition-all duration-300 overflow-hidden flex flex-col">
                <div className="aspect-[3/4] bg-slate-50 p-4 relative">
                  <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                    🔥 +25% YoY
                  </div>
                  <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm border border-slate-100 rounded-md px-2 py-1 shadow-sm">
                    <span className="text-emerald-600 font-bold text-xs">98</span>
                    <span className="text-slate-400 text-[10px]">/100</span>
                  </div>
                  {/* Hybrid Transition Mockup */}
                  <div className="w-full h-full bg-white rounded-lg border border-slate-100 shadow-sm flex flex-col overflow-hidden">
                    <div className="p-2 border-b border-teal-100">
                      <div className="text-[5px] font-bold text-slate-800">Alice Hart</div>
                      <div className="text-[4px] text-teal-600">Marketing → Product Management</div>
                    </div>
                    <div className="p-2 space-y-1.5 flex-1">
                      <div className="text-[4px] text-teal-700 font-bold">CORE COMPETENCIES</div>
                      <div className="grid grid-cols-2 gap-0.5">
                        <div className="bg-teal-50 text-[3px] text-teal-700 px-1 py-0.5 rounded text-center">Strategy</div>
                        <div className="bg-teal-50 text-[3px] text-teal-700 px-1 py-0.5 rounded text-center">Analytics</div>
                        <div className="bg-teal-50 text-[3px] text-teal-700 px-1 py-0.5 rounded text-center">Leadership</div>
                        <div className="bg-teal-50 text-[3px] text-teal-700 px-1 py-0.5 rounded text-center">Agile</div>
                      </div>
                      <div className="text-[4px] text-slate-700 font-bold mt-1">EXPERIENCE</div>
                      <div className="text-[4px] text-slate-600 font-medium">Marketing Director</div>
                      <div className="text-[3px] text-slate-400">Shopify · 2019–2024</div>
                      <div className="text-[3px] text-slate-500">• Led cross-functional team of 12</div>
                      <div className="text-[3px] text-slate-500">• Drove $8M pipeline growth via PLG</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <span className="bg-white text-slate-900 font-bold text-sm px-5 py-2.5 rounded-full shadow-xl transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      Use Vienna
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900">Vienna</h3>
                    <span className="text-[10px] bg-teal-50 text-teal-600 px-2 py-0.5 rounded-full">Career Change</span>
                  </div>
                  <p className="text-xs text-slate-500">Skills-based hiring trend +25%</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/templates" className="inline-flex items-center gap-2 bg-slate-900 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
              View all 12 templates <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ================= SECTION 6: PRICING ================= */}
        <PricingMatrix />

        {/* ================= SECTION 7: FAQ ACCORDION ================= */}
        <section id="faq" className="max-w-3xl mx-auto space-y-8 scroll-mt-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold text-slate-900 text-lg">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </button>
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                    openFaq === index ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 8: BOTTOM CTA ================= */}
        <section className="rounded-[2.5rem] bg-blue-600 p-12 sm:p-16 text-center text-white relative overflow-hidden shadow-xl shadow-blue-600/20">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

          <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Ready to step up your career?</h2>
            <p className="text-blue-100 text-lg sm:text-xl">
              Join 4.2 million job seekers who landed interviews with ResumeReady.
            </p>
            <Link
              href="/builder"
              className="inline-block px-10 py-5 text-lg font-bold text-blue-600 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:bg-slate-50 hover:scale-105 transition-all duration-300"
            >
              Create my resume free
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}
