"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Plus, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  Download, 
  ArrowLeft, 
  Wand2, 
  Eye, 
  FileText,
  Building,
  Briefcase,
  GraduationCap,
  Wrench,
  ShieldCheck
} from "lucide-react";
import { BorderBeam } from "@/components/magicui/BorderBeam";

interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export default function ResumeBuilderPage() {
  const [activeTab, setActiveTab] = useState<"edit" | "ats">("edit");
  const [targetRole, setTargetRole] = useState("Senior Full-Stack Engineer");
  
  const [contactInfo, setContactInfo] = useState({
    fullName: "Alex Mercer",
    email: "alex.mercer@dev.io",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/alexmercer-dev",
    github: "github.com/alexmercer",
    website: "alexmercer.dev"
  });

  const [summary, setSummary] = useState(
    "Results-driven Senior Full-Stack Engineer with 6+ years of experience designing and scaling distributed web applications using Next.js, TypeScript, PostgreSQL, and AWS. Proven track record in optimizing web performance, reducing cloud infrastructure cost by 35%, and leading agile software engineering teams."
  );

  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    {
      id: "exp-1",
      company: "Apex Cloud Labs",
      position: "Senior Full-Stack Engineer",
      startDate: "2022",
      endDate: "Present",
      bullets: [
        "Architected micro-frontend architecture using Next.js 14 App Router, cutting page load time (LCP) by 45% across 2.5M monthly active users.",
        "Built resilient database query pipeline with PostgreSQL and Prisma, reducing P99 API latency from 420ms to 85ms.",
        "Implemented Redis rate-limiting middleware and JWT authentication safeguarding system against DDoS attempts.",
      ],
    },
    {
      id: "exp-2",
      company: "Velocity Tech",
      position: "Frontend Software Engineer",
      startDate: "2019",
      endDate: "2022",
      bullets: [
        "Developed responsive design system components in React and Tailwind CSS adopted across 8 core product engineering squads.",
        "Integrated CI/CD test automation pipelines reducing release regression bugs by 60%.",
      ],
    },
  ]);

  const [skills, setSkills] = useState("TypeScript, React, Next.js, Node.js, PostgreSQL, Prisma, Redis, Docker, AWS, Tailwind CSS, GraphQL, REST APIs");

  // AI Bullet Enhancement Handler Simulation
  const handleEnhanceBullet = (expId: string, bulletIndex: number) => {
    const current = experiences.find((e) => e.id === expId)?.bullets[bulletIndex];
    if (!current) return;

    const enhanced = `Engineered and deployed scalable optimization for "${current.toLowerCase()}", resulting in a 38% increase in operational throughput and zero downtime.`;

    setExperiences((prev) =>
      prev.map((exp) => {
        if (exp.id === expId) {
          const newBullets = [...exp.bullets];
          newBullets[bulletIndex] = enhanced;
          return { ...exp, bullets: newBullets };
        }
        return exp;
      })
    );
  };

  // Add bullet
  const handleAddBullet = (expId: string) => {
    setExperiences((prev) =>
      prev.map((exp) => {
        if (exp.id === expId) {
          return { ...exp, bullets: [...exp.bullets, "Spearheaded initiative delivering key business metrics."] };
        }
        return exp;
      })
    );
  };

  // Remove bullet
  const handleRemoveBullet = (expId: string, index: number) => {
    setExperiences((prev) =>
      prev.map((exp) => {
        if (exp.id === expId) {
          return { ...exp, bullets: exp.bullets.filter((_, i) => i !== index) };
        }
        return exp;
      })
    );
  };

  return (
    <div className="min-h-screen bg-[#030712] py-8 text-slate-100">
      <div className="container mx-auto px-4 sm:px-8">
        
        {/* Top Action Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-colors">
              <ArrowLeft className="h-4 w-4 text-slate-400" />
            </Link>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white tracking-tight">Interactive Resume Editor</h1>
                <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  ATS Standard
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Target Role: <span className="text-slate-200 font-semibold">{targetRole}</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab(activeTab === "edit" ? "ats" : "edit")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-all ${
                activeTab === "ats" 
                  ? "bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/20" 
                  : "bg-slate-900 text-slate-300 border-slate-800 hover:bg-slate-800"
              }`}
            >
              <Eye className="h-3.5 w-3.5" />
              {activeTab === "ats" ? "Back to Editor" : "View ATS Raw Parser Stream"}
            </button>

            <button
              onClick={() => alert("Downloading ATS-Compliant PDF Resume... 100% Free Guarantee!")}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Download className="h-3.5 w-3.5" />
              Export ATS PDF (Free)
            </button>
          </div>
        </div>

        {/* Main Grid: Form Inputs vs Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT FORM COLUMN */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Target Role & Positioning */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-blue-400" /> Target Role & Story Positioning
                </h3>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Target Position Title</label>
                <input
                  type="text"
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white focus:border-blue-500 focus:outline-none"
                  placeholder="e.g. Senior Full-Stack Engineer"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1 block">Professional Summary Statement</label>
                <textarea
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white leading-relaxed focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Personal Contact Details */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <FileText className="h-4 w-4 text-purple-400" /> Personal Contact Info
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Full Name</label>
                  <input
                    type="text"
                    value={contactInfo.fullName}
                    onChange={(e) => setContactInfo({ ...contactInfo, fullName: e.target.value })}
                    className="w-full rounded bg-slate-900 border border-slate-800 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Email Address</label>
                  <input
                    type="email"
                    value={contactInfo.email}
                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                    className="w-full rounded bg-slate-900 border border-slate-800 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Phone</label>
                  <input
                    type="text"
                    value={contactInfo.phone}
                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                    className="w-full rounded bg-slate-900 border border-slate-800 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold text-slate-400 mb-1 block">Location</label>
                  <input
                    type="text"
                    value={contactInfo.location}
                    onChange={(e) => setContactInfo({ ...contactInfo, location: e.target.value })}
                    className="w-full rounded bg-slate-900 border border-slate-800 px-2.5 py-1.5 text-xs text-white focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Work Experience Section */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <Building className="h-4 w-4 text-emerald-400" /> Work Experience & AI Bullet Tuning
              </h3>

              {experiences.map((exp) => (
                <div key={exp.id} className="p-4 rounded-lg bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => {
                        const val = e.target.value;
                        setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, company: val } : item));
                      }}
                      className="rounded bg-slate-950 border border-slate-800 px-2.5 py-1 text-xs text-white font-semibold"
                      placeholder="Company"
                    />
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => {
                        const val = e.target.value;
                        setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, position: val } : item));
                      }}
                      className="rounded bg-slate-950 border border-slate-800 px-2.5 py-1 text-xs text-white"
                      placeholder="Position"
                    />
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-semibold text-slate-400 block">Accomplishment Bullets</label>
                    {exp.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex gap-2 items-start">
                        <textarea
                          rows={2}
                          value={bullet}
                          onChange={(e) => {
                            const val = e.target.value;
                            setExperiences((prev) => prev.map((item) => {
                              if (item.id === exp.id) {
                                const newB = [...item.bullets];
                                newB[idx] = val;
                                return { ...item, bullets: newB };
                              }
                              return item;
                            }));
                          }}
                          className="flex-1 rounded bg-slate-950 border border-slate-800 p-2 text-xs text-slate-200 leading-relaxed focus:border-blue-500 focus:outline-none"
                        />
                        <button
                          onClick={() => handleEnhanceBullet(exp.id, idx)}
                          title="Enhance with Quantified Metrics (AI)"
                          className="p-1.5 rounded bg-blue-500/10 border border-blue-500/30 text-blue-400 hover:bg-blue-500/20 transition-colors shrink-0"
                        >
                          <Wand2 className="h-3.5 w-3.5" />
                        </button>
                        <button
                          onClick={() => handleRemoveBullet(exp.id, idx)}
                          title="Remove Bullet"
                          className="p-1.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors shrink-0"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                    <button
                      onClick={() => handleAddBullet(exp.id)}
                      className="text-xs font-semibold text-blue-400 flex items-center gap-1 hover:underline pt-1"
                    >
                      <Plus className="h-3 w-3" /> Add Accomplishment Bullet
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800/80 pb-3">
                <Wrench className="h-4 w-4 text-amber-400" /> Skills & Technical Competencies
              </h3>
              <textarea
                rows={3}
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full rounded-lg bg-slate-900 border border-slate-800 px-3 py-2 text-xs text-white leading-relaxed focus:border-blue-500 focus:outline-none"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: LIVE PREVIEW & ATS DIAGNOSTIC */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* ATS Metric Bar */}
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-4 flex items-center justify-between backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-extrabold text-sm">
                  98%
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" /> ATS Compatibility Score
                  </div>
                  <div className="text-[11px] text-slate-400">0 table format collisions • Clean single column format</div>
                </div>
              </div>

              <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                <ShieldCheck className="h-3.5 w-3.5" /> Free PDF Guarantee
              </div>
            </div>

            {/* TAB CONTENT: PREVIEW OR ATS RAW STREAM */}
            {activeTab === "edit" ? (
              /* REAL-TIME RESUME PREVIEW (CLEAN ATS RESUME DOCUMENT) */
              <div className="relative rounded-xl border border-slate-300 bg-white p-8 text-slate-900 shadow-2xl min-h-[750px] font-sans text-xs">
                <BorderBeam size={200} duration={20} colorFrom="#3b82f6" colorTo="#6366f1" />

                {/* Header Info */}
                <div className="text-center border-b border-slate-300 pb-4 mb-4 space-y-1">
                  <h2 className="text-2xl font-bold uppercase tracking-wide text-slate-950">{contactInfo.fullName}</h2>
                  <p className="text-slate-600 font-medium text-[11px]">
                    {contactInfo.location} | {contactInfo.phone} | {contactInfo.email}
                  </p>
                  <p className="text-blue-700 text-[11px] font-medium">
                    {contactInfo.linkedin} | {contactInfo.github} | {contactInfo.website}
                  </p>
                </div>

                {/* Professional Summary */}
                <div className="mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Professional Summary
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{summary}</p>
                </div>

                {/* Technical Skills */}
                <div className="mb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Skills & Technical Competencies
                  </h3>
                  <p className="text-slate-800 font-medium leading-relaxed">{skills}</p>
                </div>

                {/* Professional Experience */}
                <div className="mb-5 space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Professional Experience
                  </h3>
                  {experiences.map((exp) => (
                    <div key={exp.id} className="space-y-1">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-slate-950 text-xs">{exp.position}</span>
                        <span className="text-slate-600 font-semibold text-[11px]">{exp.startDate} - {exp.endDate}</span>
                      </div>
                      <div className="text-blue-800 font-semibold text-[11px]">{exp.company}</div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 pt-1 leading-relaxed">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                    Education & Credentials
                  </h3>
                  <div className="flex justify-between">
                    <span className="font-bold text-slate-900">B.S. in Computer Science</span>
                    <span className="text-slate-600">2015 - 2019</span>
                  </div>
                  <div className="text-slate-600">University of California, Berkeley</div>
                </div>
              </div>
            ) : (
              /* ATS RAW TEXT STREAM DIAGNOSTIC PARSER */
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 font-mono text-xs text-slate-300 space-y-4 min-h-[600px]">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-blue-400 font-bold">// ATS RAW STREAM SIMULATION (Greenhouse / Lever)</span>
                  <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded">Parsed Cleanly</span>
                </div>

                <div className="space-y-2 text-slate-400 leading-relaxed text-[11px]">
                  <div>[SECTION DETECTED]: HEADER</div>
                  <div>- CANDIDATE_NAME: {contactInfo.fullName}</div>
                  <div>- EMAIL: {contactInfo.email}</div>
                  <div>- PHONE: {contactInfo.phone}</div>
                  <div>- LOCATION: {contactInfo.location}</div>
                  <br />
                  <div>[SECTION DETECTED]: SUMMARY</div>
                  <div className="text-slate-300 pl-2">"{summary}"</div>
                  <br />
                  <div>[SECTION DETECTED]: TECHNICAL_SKILLS</div>
                  <div className="text-slate-300 pl-2">[{skills.split(",").map(s => s.trim()).join(" | ")}]</div>
                  <br />
                  <div>[SECTION DETECTED]: WORK_HISTORY</div>
                  {experiences.map((exp, idx) => (
                    <div key={idx} className="pl-2 space-y-1 mb-2">
                      <div className="text-blue-300">COMPANY: {exp.company} | TITLE: {exp.position} ({exp.startDate}-{exp.endDate})</div>
                      {exp.bullets.map((b, bi) => (
                        <div key={bi} className="text-slate-400 pl-4">• {b}</div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
