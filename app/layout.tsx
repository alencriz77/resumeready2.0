import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { FileText, ChevronDown, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "ResumeReady.org — Free ATS Resume Builder",
  description: "Create professional ATS-friendly resumes in minutes with recruiter-tested templates and AI assistance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-900 antialiased selection:bg-blue-500 selection:text-white">
        
        {/* RESUME.IO STYLE CLEAN HEADER */}
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
          <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-8">
            
            {/* Left: Brand Logo */}
            <Link href="/" className="flex items-center gap-2.5 font-extrabold text-xl text-slate-900 tracking-tight">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <FileText className="h-5 w-5" />
              </div>
              <span className="flex items-baseline font-bold text-slate-900">
                resume<span className="text-blue-600 font-extrabold">.org</span>
              </span>
            </Link>

            {/* Center: Navigation Links with Dropdown Chevrons */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 py-2">
                <span>Resume Templates</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700" />
              </div>

              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 py-2">
                <span>Resume Examples</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700" />
              </div>

              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 py-2">
                <span>Cover Letter</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700" />
              </div>

              <Link href="/ats-checker" className="hover:text-slate-900">
                FAQ
              </Link>

              <div className="group relative flex items-center gap-1 cursor-pointer hover:text-slate-900 py-2">
                <span>Resources</span>
                <ChevronDown className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-700" />
              </div>
            </nav>

            {/* Right: Auth Action Buttons */}
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm font-semibold text-blue-600 hover:text-blue-700 px-3 py-2">
                Sign in
              </Link>

              <Link
                href="/builder"
                className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-blue-500/20 hover:bg-blue-500 active:scale-95 transition-all"
              >
                Create my resume
              </Link>
            </div>

          </div>
        </header>

        {/* Main Body */}
        <main className="flex-1">{children}</main>

        {/* Clean Footer */}
        <footer className="border-t border-slate-200 bg-white py-12 text-slate-600 text-sm">
          <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900">
                <FileText className="h-5 w-5 text-blue-600" />
                ResumeReady.org
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect with recruiters using 100% ATS-friendly resume templates. Fast, free, and recruiter-tested.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Resume Tools</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/builder" className="hover:text-slate-900">Resume Builder</Link></li>
                <li><Link href="/ats-checker" className="hover:text-slate-900">ATS Resume Checker</Link></li>
                <li><Link href="/tailor" className="hover:text-slate-900">Job Description Matcher</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Templates</h4>
              <ul className="space-y-2 text-xs">
                <li><Link href="/builder" className="hover:text-slate-900">Modern Templates</Link></li>
                <li><Link href="/builder" className="hover:text-slate-900">Executive Templates</Link></li>
                <li><Link href="/builder" className="hover:text-slate-900">Creative Templates</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-3 text-sm">Legal & Privacy</h4>
              <p className="text-xs text-slate-500 mb-2">
                Your data is secure and never sold to third parties.
              </p>
              <div className="text-xs text-slate-400">
                © {new Date().getFullYear()} ResumeReady.org. All rights reserved.
              </div>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
