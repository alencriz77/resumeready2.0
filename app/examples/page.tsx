"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function ExamplesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl space-y-8">
        <div className="text-center space-y-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Resume <span className="text-blue-600">Examples & Samples</span>
          </h1>
          <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
            Explore field-tested resume bullet examples and sample profiles across top industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Software Engineer", desc: "Full-Stack, Frontend, Backend, and DevOps accomplishment bullet examples." },
            { title: "Product Manager", desc: "Roadmap execution, metric growth, and stakeholder alignment bullet samples." },
            { title: "Marketing Specialist", desc: "Campaign ROI, digital acquisition, and SEO strategy bullet points." },
            { title: "Data Analyst", desc: "SQL queries, business intelligence dashboards, and statistical models." },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              <Link href="/builder" className="inline-flex items-center text-xs font-bold text-blue-600 hover:underline pt-2">
                Customize This Profile in Builder →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
