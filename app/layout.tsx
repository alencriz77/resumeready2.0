import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { FileText } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ResumeReady.org — Free ATS Resume Builder",
  description: "Build job-worthy resumes fast. Free, ATS-tested, recruiter-approved.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-slate-50 text-slate-900`}>
        <Navigation />
        
        <main className="flex-1">
          {children}
        </main>

        {/* Multi-Column Footer */}
        <footer className="bg-white border-t border-slate-200 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Column 1 (Brand) */}
              <div className="space-y-4">
                <Link href="/" className="flex items-center gap-2 group">
                  <div className="bg-blue-600 p-1.5 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl text-slate-900 tracking-tight">
                    resume<span className="text-blue-600">.org</span>
                  </span>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Build job-worthy resumes fast. Free, ATS-tested, recruiter-approved.
                </p>
              </div>

              {/* Column 2 (Resume Tools) */}
              <div>
                <h4 className="font-bold text-slate-900 mb-6">Resume Tools</h4>
                <ul className="space-y-4">
                  <li><Link href="/builder" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Resume Builder</Link></li>
                  <li><Link href="/ats-checker" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">ATS Scanner</Link></li>
                  <li><Link href="/tailor" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Job Matcher</Link></li>
                  <li><Link href="/builder" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">AI Resume Coach</Link></li>
                </ul>
              </div>

              {/* Column 3 (Templates) */}
              <div>
                <h4 className="font-bold text-slate-900 mb-6">Templates</h4>
                <ul className="space-y-4">
                  <li><Link href="/builder?template=modern" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Modern</Link></li>
                  <li><Link href="/builder?template=executive" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Executive</Link></li>
                  <li><Link href="/builder?template=creative" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Creative</Link></li>
                  <li><Link href="/builder?template=ats" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">ATS</Link></li>
                  <li><Link href="/templates" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">All Templates</Link></li>
                </ul>
              </div>

              {/* Column 4 (Company) */}
              <div>
                <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                <ul className="space-y-4">
                  <li><Link href="/resources" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Blog & Resources</Link></li>
                  <li><Link href="/resources" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Career Advice</Link></li>
                  <li><Link href="/examples" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Resume Examples</Link></li>
                  <li><Link href="/#faq" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">FAQ</Link></li>
                  <li><Link href="#" className="text-slate-500 hover:text-blue-600 text-sm transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2024 ResumeReady.org. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-slate-400 hover:text-slate-600 text-sm transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
