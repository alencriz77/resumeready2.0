"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight, Layout, Star } from "lucide-react";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl space-y-8">
        
        <div className="text-center space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Recruiter-Approved Templates
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ATS Resume <span className="text-blue-600">Templates</span>
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
            Select a template below to start customizing your resume in our 3-step builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-xl transition-all">
            <div className="aspect-[3/4] rounded-xl bg-slate-50 border border-slate-200 p-4 font-sans text-[8px] leading-tight space-y-2">
              <div className="border-b-2 border-blue-600 pb-1 font-bold text-blue-900 text-[10px]">MODERN MINIMALIST</div>
              <div className="text-blue-600 font-bold">Clean Single-Column Format</div>
              <div className="text-slate-600">• Tested against Greenhouse & Lever</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Modern Minimalist</span>
              <Link href="/builder" className="text-xs font-bold text-blue-600 hover:underline">
                Use Template →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-xl transition-all">
            <div className="aspect-[3/4] rounded-xl bg-slate-900 text-white p-4 font-serif text-[8px] leading-tight space-y-2">
              <div className="border-b border-slate-700 pb-1 font-bold text-[10px]">EXECUTIVE SERIF</div>
              <div className="text-slate-300 font-bold">High-Impact Executive Header</div>
              <div className="text-slate-300">• Perfect for Senior Leadership</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Executive Professional</span>
              <Link href="/builder" className="text-xs font-bold text-blue-600 hover:underline">
                Use Template →
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm hover:shadow-xl transition-all">
            <div className="aspect-[3/4] rounded-xl bg-white border border-slate-200 p-4 font-mono text-[8px] leading-tight space-y-2">
              <div className="border-b border-slate-300 pb-1 font-bold text-[10px]">MINIMAL ATS STANDARD</div>
              <div className="font-bold text-slate-800">100% Raw Stream Standard</div>
              <div className="text-slate-600">• Workday Gold Standard</div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900">Minimal Single-Column</span>
              <Link href="/builder" className="text-xs font-bold text-blue-600 hover:underline">
                Use Template →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
