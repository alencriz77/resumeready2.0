"use client";

import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Download, CreditCard, Sparkles } from "lucide-react";

export function PricingMatrix() {
  return (
    <section className="py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-4 py-1.5 text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          ✨ Transparent Pricing • Zero Auto-Renewal Traps
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
          Invest in Your Next Career Move
        </h2>
        <p className="text-slate-600 text-lg">
          No hidden subscriptions. Pay once for the exact time you need.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {/* Tier 1: Job Hunter Pass */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Job Hunter Pass</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-slate-900">$29</span>
              <span className="text-slate-500 font-medium">/ 30 days</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">Non-recurring</p>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            {["1 Full ATS Resume", "Unlimited PDF Exports", "All 12 Premium Templates", "Standard ATS Check"].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/checkout?tier=hunter" className="block w-full py-3 px-6 text-center rounded-xl font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors">
            Get 30-Day Access
          </Link>
        </div>

        {/* Tier 2: Pro Career Pass */}
        <div className="bg-white rounded-2xl border-2 border-blue-600 p-8 shadow-xl relative flex flex-col transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Popular
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Pro Career Pass</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-slate-900">$49</span>
              <span className="text-slate-500 font-medium">/ 90 days</span>
            </div>
            <p className="text-sm text-slate-500 font-medium">Non-recurring</p>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            {["Unlimited Resumes", "Real-Time Job Description Tailoring", "Unlimited AI Bullet Generator", "Recruiter Heatmap", "Matching Cover Letters"].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/checkout?tier=pro" className="block w-full py-3 px-6 text-center rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
            Get 90-Day Pro Access
          </Link>
        </div>

        {/* Tier 3: Lifetime Pass */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Lifetime Pass</h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-4xl font-extrabold text-slate-900">$99</span>
              <span className="text-slate-500 font-medium">one-time</span>
            </div>
          </div>
          
          <ul className="space-y-4 mb-8 flex-1">
            {["Lifetime Unlimited Access", "Personal Portfolio Website", "All Future Features"].map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>

          <Link href="/checkout?tier=lifetime" className="block w-full py-3 px-6 text-center rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors">
            Get Lifetime Access
          </Link>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-500 text-sm font-medium pt-8">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-slate-400" />
          14-Day Money-Back Guarantee
        </div>
        <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
        <div className="flex items-center gap-2">
          <Download className="w-5 h-5 text-slate-400" />
          Instant PDF Download
        </div>
        <div className="hidden sm:block w-1 h-1 bg-slate-300 rounded-full"></div>
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-slate-400" />
          No Credit Card Auto-Renew
        </div>
      </div>
    </section>
  );
}
