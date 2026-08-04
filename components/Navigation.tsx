"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { FileText, ChevronDown, Menu, X, LayoutTemplate, Briefcase, FileSignature, BookOpen, GraduationCap, Building2, ShoppingBag, Landmark } from "lucide-react";

type DropdownState = "templates" | "examples" | "cover-letter" | "resources" | null;

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<DropdownState>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: DropdownState) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <header 
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-slate-200 shadow-sm"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-blue-600 p-1.5 rounded-xl text-white group-hover:bg-blue-700 transition-colors">
              <FileText className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">
              resume<span className="text-blue-600">.org</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <div 
              className="relative py-5"
              onMouseEnter={() => handleMouseEnter("templates")}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Resume Templates
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "templates" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
            </div>

            <div 
              className="relative py-5"
              onMouseEnter={() => handleMouseEnter("examples")}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Resume Examples
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "examples" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
            </div>

            <div 
              className="relative py-5"
              onMouseEnter={() => handleMouseEnter("cover-letter")}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Cover Letter
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "cover-letter" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
            </div>

            <Link href="/#faq" className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-5" onMouseEnter={() => setActiveDropdown(null)}>
              FAQ
            </Link>

            <div 
              className="relative py-5"
              onMouseEnter={() => handleMouseEnter("resources")}
            >
              <button className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition-colors">
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "resources" ? "rotate-180 text-blue-600" : ""}`} />
              </button>
            </div>
          </nav>

          {/* Auth & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/login" className="text-slate-600 hover:text-slate-900 font-medium transition-colors">
              Sign in
            </Link>
            <Link 
              href="/builder" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition-all shadow-sm shadow-blue-200 hover:shadow-blue-300 active:scale-95"
            >
              Create my resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mega Dropdown Panels */}
      <div 
        className={`absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 origin-top overflow-hidden ${
          activeDropdown ? "opacity-100 scale-y-100 h-auto visible" : "opacity-0 scale-y-95 h-0 invisible"
        }`}
        onMouseEnter={() => {
          if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* TEMPLATES DROPDOWN */}
          {activeDropdown === "templates" && (
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Popular Templates</h3>
                <div className="grid grid-cols-2 gap-6">
                  <Link href="/builder?template=ats" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="bg-blue-50 text-blue-600 p-2.5 rounded-lg group-hover:bg-blue-100 transition-colors">
                      <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">ATS-Friendly</h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Optimized to pass Applicant Tracking Systems with flying colors.</p>
                    </div>
                  </Link>
                  <Link href="/builder?template=modern" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="bg-purple-50 text-purple-600 p-2.5 rounded-lg group-hover:bg-purple-100 transition-colors">
                      <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">Modern</h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Sleek designs perfect for tech, design, and forward-thinking roles.</p>
                    </div>
                  </Link>
                  <Link href="/builder?template=executive" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="bg-emerald-50 text-emerald-600 p-2.5 rounded-lg group-hover:bg-emerald-100 transition-colors">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">Professional</h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Traditional formatting tailored for corporate and executive positions.</p>
                    </div>
                  </Link>
                  <Link href="/builder?template=ats" className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors group">
                    <div className="bg-amber-50 text-amber-600 p-2.5 rounded-lg group-hover:bg-amber-100 transition-colors">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">Simple</h4>
                      <p className="text-sm text-slate-500 line-clamp-2">Clean, minimalist layouts that let your achievements shine.</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="mb-4 text-blue-600">
                  <LayoutTemplate className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Resume Builder</h3>
                <p className="text-slate-600 mb-6 text-sm">Create a professional resume in minutes. Choose a template, follow expert prompts, and download your finished resume.</p>
                <Link href="/builder" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Get started now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          )}

          {/* EXAMPLES DROPDOWN */}
          {activeDropdown === "examples" && (
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">By Industry</h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="/examples" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors group">
                          <GraduationCap className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" /> Education
                        </Link>
                      </li>
                      <li>
                        <Link href="/examples" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors group">
                          <Building2 className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" /> Engineering
                        </Link>
                      </li>
                      <li>
                        <Link href="/examples" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors group">
                          <ShoppingBag className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" /> Retail
                        </Link>
                      </li>
                      <li>
                        <Link href="/examples" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 font-medium transition-colors group">
                          <Landmark className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" /> Government
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Most Popular</h3>
                    <ul className="space-y-3">
                      <li><Link href="/examples" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Nurse</Link></li>
                      <li><Link href="/examples" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Student</Link></li>
                      <li><Link href="/examples" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Internship</Link></li>
                      <li><Link href="/examples" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Accountant</Link></li>
                      <li><Link href="/examples" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Software Engineer</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-xl text-slate-900 mb-2">500+ Free Resume Examples</h3>
                <p className="text-slate-600 mb-6 text-sm">Browse our extensive library of resume examples by industry and job title for inspiration and guidance.</p>
                <Link href="/examples" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  View all examples <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          )}

          {/* COVER LETTER DROPDOWN */}
          {activeDropdown === "cover-letter" && (
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Templates</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/cover-letter" className="group flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <FileSignature className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Professional</div>
                            <div className="text-xs text-slate-500">Traditional and formal</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/cover-letter" className="group flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <FileSignature className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Simple</div>
                            <div className="text-xs text-slate-500">Clean and straightforward</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Examples</h3>
                    <ul className="space-y-3">
                      <li><Link href="/cover-letter" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Management Cover Letters</Link></li>
                      <li><Link href="/cover-letter" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Entry-Level Cover Letters</Link></li>
                      <li><Link href="/cover-letter" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Career Change Letters</Link></li>
                      <li><Link href="/cover-letter" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Browse all examples</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="mb-4 text-blue-600">
                  <FileSignature className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-2">Cover Letter Builder</h3>
                <p className="text-slate-600 mb-6 text-sm">Write a convincing cover letter in minutes with our AI-powered suggestions and professional templates.</p>
                <Link href="/cover-letter" className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Create cover letter <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          )}

          {/* RESOURCES DROPDOWN */}
          {activeDropdown === "resources" && (
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-8">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Blog Categories</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link href="/resources" className="group flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <BookOpen className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Job Interview</div>
                            <div className="text-xs text-slate-500">Tips to ace your next interview</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" className="group flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <Briefcase className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Career Advice</div>
                            <div className="text-xs text-slate-500">Navigate your career path</div>
                          </div>
                        </Link>
                      </li>
                      <li>
                        <Link href="/resources" className="group flex items-start gap-3">
                          <div className="bg-slate-100 p-2 rounded-lg group-hover:bg-blue-50 transition-colors">
                            <FileText className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                          </div>
                          <div>
                            <div className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Resume Help</div>
                            <div className="text-xs text-slate-500">Expert writing guides</div>
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">More Resources</h3>
                    <ul className="space-y-3">
                      <li><Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Video Guides</Link></li>
                      <li><Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Podcasts</Link></li>
                      <li><Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Downloadable Checklists</Link></li>
                      <li><Link href="/resources" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Salary Calculator</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Career Hub</h3>
                <p className="text-slate-600 mb-6 text-sm">Join 100,000+ subscribers getting weekly career advice and resume tips straight to their inbox.</p>
                <div className="flex">
                  <input type="email" placeholder="Email address" className="w-full px-3 py-2 rounded-l-lg border border-slate-200 focus:outline-none focus:border-blue-500" />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg font-medium transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden overflow-y-auto">
          <div className="flex justify-between items-center p-4 border-b border-slate-200">
            <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
              <div className="bg-blue-600 p-1.5 rounded-xl text-white">
                <FileText className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-slate-900 tracking-tight">
                resume<span className="text-blue-600">.org</span>
              </span>
            </Link>
            <button 
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="p-4 space-y-2">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-4 font-semibold text-slate-900 cursor-pointer bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                Resume Templates
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="p-4 space-y-4">
                <Link href="/builder?template=ats" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">ATS-Friendly</Link>
                <Link href="/builder?template=modern" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Modern</Link>
                <Link href="/builder?template=executive" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Professional</Link>
                <Link href="/builder?template=ats" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Simple</Link>
              </div>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-4 font-semibold text-slate-900 cursor-pointer bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                Resume Examples
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="p-4 space-y-4">
                <Link href="/examples" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Education</Link>
                <Link href="/examples" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Engineering</Link>
                <Link href="/examples" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Retail</Link>
                <Link href="/examples" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Government</Link>
              </div>
            </details>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-4 font-semibold text-slate-900 cursor-pointer bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                Cover Letter
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="p-4 space-y-4">
                <Link href="/cover-letter" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Professional Templates</Link>
                <Link href="/cover-letter" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Simple Templates</Link>
                <Link href="/cover-letter" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Examples</Link>
              </div>
            </details>

            <Link href="/#faq" onClick={() => setIsMobileMenuOpen(false)} className="block p-4 font-semibold text-slate-900 hover:bg-slate-50 rounded-xl transition-colors">
              FAQ
            </Link>

            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between p-4 font-semibold text-slate-900 cursor-pointer bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                Resources
                <ChevronDown className="w-5 h-5 text-slate-500 transition-transform group-open:-rotate-180" />
              </summary>
              <div className="p-4 space-y-4">
                <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Blog</Link>
                <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Video Guides</Link>
                <Link href="/resources" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-600 hover:text-blue-600">Podcasts</Link>
              </div>
            </details>
          </div>
          
          <div className="p-4 mt-auto border-t border-slate-200 bg-slate-50">
            <Link 
              href="/login" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 px-4 text-center font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 mb-3 transition-colors"
            >
              Sign in
            </Link>
            <Link 
              href="/builder" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full py-3 px-4 text-center font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              Create my resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
