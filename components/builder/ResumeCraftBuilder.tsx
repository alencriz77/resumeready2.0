"use client";

import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Download, 
  ArrowRight, 
  ArrowLeft, 
  Eye, 
  Wand2, 
  Plus, 
  Trash2, 
  Layout, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Palette, 
  ZoomIn, 
  ZoomOut, 
  Smartphone, 
  Monitor, 
  Share2, 
  Copy, 
  FileCode,
  ShieldCheck,
  Zap,
  ChevronDown,
  Upload,
  X,
  Link as LinkIcon,
  Globe,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export default function ResumeCraftBuilder() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedTemplate, setSelectedTemplate] = useState<"modern" | "executive" | "creative" | "ats">("modern");
  const [templateFilter, setTemplateFilter] = useState("All");

  // Customizer state
  const [accentColor, setAccentColor] = useState("#2563eb");
  const [fontFamily, setFontFamily] = useState<"sans" | "serif" | "mono">("sans");
  const [lineSpacing, setLineSpacing] = useState(1.4);
  const [marginPadding, setMarginPadding] = useState(24);

  // Resume Content State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Alice Hart",
    jobTitle: "Senior Mathematics Specialist",
    email: "a.hart@gmail.com",
    phone: "(773) 489-3264",
    location: "Tuscaloosa, AL",
    linkedin: "linkedin.com/in/alicehart",
    github: "github.com/alicehart",
    website: "alicehart.edu",
  });

  const [summary, setSummary] = useState(
    "Enthusiastic math specialist with over 8 years experience cultivating a nurturing and encouraging learning environment. Adept at designing engaging lesson plans tailored to different learning styles, encouraging students to appreciate the world of mathematics."
  );

  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    {
      id: "exp-1",
      company: "Tuscaloosa County High School",
      position: "Senior Mathematics Instructor",
      startDate: "2017",
      endDate: "Present",
      bullets: [
        "Provided skilled, engaging instruction to high school students across Advanced Algebra and Calculus.",
        "Interface with faculty and staff to plan and schedule courses, boosting AP pass rate by 28%.",
        "Developed differentiated learning techniques for 120+ students annually.",
      ],
    },
    {
      id: "exp-2",
      company: "Liberty Middle School",
      position: "Mathematics Teacher",
      startDate: "2014",
      endDate: "2017",
      bullets: [
        "Collaborated with colleagues to integrate cross-curricular elements into youth STEM curriculum.",
        "Organized annual Math Olympiad competition with over 300 regional participants.",
      ],
    },
  ]);

  const [education, setEducation] = useState<EducationItem[]>([
    {
      id: "edu-1",
      institution: "University of Alabama, Tuscaloosa",
      degree: "B.S. in Mathematics & Secondary Education",
      startDate: "2010",
      endDate: "2014",
    },
  ]);

  const [skills, setSkills] = useState<string[]>([
    "Curriculum Development", "Analytical Thinking", "Classroom Leadership", "Differentiated Instruction", "Educational Philosophy", "Lesson Planning"
  ]);

  const [newSkillInput, setNewSkillInput] = useState("");

  // Accordion active state in Step 2
  const [activeAccordion, setActiveAccordion] = useState<string>("personal");

  // AI Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiModalType, setAiModalType] = useState<"summary" | "bullet">("summary");
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const [aiTone, setAiTone] = useState<"professional" | "executive" | "creative" | "impact">("impact");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Upload Modal State
  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  // Canvas View Mode State
  const [zoomLevel, setZoomLevel] = useState(100);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  const [copiedText, setCopiedText] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Read URL query params on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const templateParam = params.get("template");
      const exampleParam = params.get("example");

      if (templateParam && ["modern", "executive", "creative", "ats"].includes(templateParam)) {
        setSelectedTemplate(templateParam as any);
        setCurrentStep(2);
      }

      if (exampleParam) {
        if (exampleParam.includes("software") || exampleParam.includes("engineer")) {
          setPersonalInfo(prev => ({ ...prev, fullName: "Alex Mercer", jobTitle: "Senior Software Engineer" }));
          setExperiences([
            {
              id: "exp-ex-1",
              company: "TechCorp Systems",
              position: "Senior Full Stack Engineer",
              startDate: "2020",
              endDate: "Present",
              bullets: [
                "Spearheaded microservices architecture migration using Next.js & Node.js, reducing latency by 45%.",
                "Mentored team of 6 engineers and established CI/CD pipeline pipelines with 99.9% uptime."
              ]
            }
          ]);
          setCurrentStep(2);
        }
      }
    }
  }, []);

  // Popular Quick Skills Suggestions
  const popularSkillSuggestions = ["Management Skills", "Analytical Thinking", "Leadership", "Lesson Planning", "Curriculum Design", "STEM Education"];

  // Add Skill Handler
  const handleAddSkill = (skillName: string) => {
    const trimmed = skillName.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setNewSkillInput("");
    }
  };

  // Remove Skill Handler
  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  // Add Work Experience Handler
  const handleAddExperience = () => {
    const newExp: ExperienceItem = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "Present",
      bullets: ["Achievement bullet point..."],
    };
    setExperiences([...experiences, newExp]);
  };

  // Add Education Handler
  const handleAddEducation = () => {
    const newEdu: EducationItem = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
    setEducation([...education, newEdu]);
  };

  // Trigger AI Bullet Generation Modal
  const openAiModal = (type: "summary" | "bullet", expId?: string) => {
    setAiModalType(type);
    if (expId) setActiveExpId(expId);
    setAiModalOpen(true);
    generateAiSuggestions(type, aiTone);
  };

  // Mock AI Generation Engine
  const generateAiSuggestions = (type: "summary" | "bullet", tone: string) => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      setIsGeneratingAi(false);
      if (type === "summary") {
        setAiSuggestions([
          `Accomplished ${personalInfo.jobTitle} with 8+ years developing rigorous STEM curricula and elevating student performance indicators by 30%.`,
          `Dedicated ${personalInfo.jobTitle} adept at integrating analytical frameworks and differentiated learning tools into classroom environments.`,
          `Results-focused ${personalInfo.jobTitle} recognized for leading regional academic teams and implementing innovative student assessment methods.`,
        ]);
      } else {
        setAiSuggestions([
          `Designed and executed custom interactive learning modules, increasing student exam mastery rates by 34%.`,
          `Spearheaded faculty development workshops on digital assessment tools, adopted by 40+ staff members.`,
          `Mentored student academic teams to 1st place standing in state-wide competitions across 3 consecutive years.`,
        ]);
      }
    }, 600);
  };

  // Apply AI Suggestion
  const handleApplyAiSuggestion = (suggestion: string) => {
    if (aiModalType === "summary") {
      setSummary(suggestion);
    } else if (aiModalType === "bullet" && activeExpId) {
      setExperiences((prev) =>
        prev.map((exp) =>
          exp.id === activeExpId
            ? { ...exp, bullets: [...exp.bullets, suggestion] }
            : exp
        )
      );
    }
    setAiModalOpen(false);
  };

  // PDF Export Trigger
  const handleDownloadPdf = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  // Copy Plain Text Handler
  const handleCopyText = () => {
    const rawText = `${personalInfo.fullName}\n${personalInfo.jobTitle}\n${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}\n\nSUMMARY:\n${summary}\n\nSKILLS:\n${skills.join(", ")}\n\nEXPERIENCE:\n` + 
      experiences.map(e => `${e.position} at ${e.company} (${e.startDate} - ${e.endDate})\n` + e.bullets.map(b => `• ${b}`).join("\n")).join("\n\n");
    
    navigator.clipboard.writeText(rawText);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  // Pre-fill demo data for upload modal
  const handlePreFillDemoData = () => {
    setPersonalInfo({
      fullName: "Marcus Vance",
      jobTitle: "Principal Product Designer",
      email: "marcus.vance@design.io",
      phone: "(415) 892-0193",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/marcusvance",
      github: "github.com/marcusvance",
      website: "marcusvance.design"
    });
    setSummary("Lead Product Designer with 10+ years scaling SaaS design systems and consumer web platforms. Recognized for bridging user research with high-converting visual UI.");
    setUploadModalOpen(false);
  };

  // Template List for Step 1 Filtering
  const allTemplatesList = [
    {
      id: "modern",
      name: "Modern Minimalist",
      category: "Modern",
      tag: "Popular",
      score: "98/100 ATS Score",
      description: "Clean single-column header layout with subtle accent borders."
    },
    {
      id: "executive",
      name: "Executive Serif",
      category: "Executive",
      tag: "Serif",
      score: "96/100 ATS Score",
      description: "Traditional corporate header banner with formal serif typography."
    },
    {
      id: "creative",
      name: "Creative Accent",
      category: "Creative",
      tag: "Vibrant",
      score: "95/100 ATS Score",
      description: "2-column split layout with left sidebar for skills and contact info."
    },
    {
      id: "ats",
      name: "Minimal Single-Column",
      category: "Minimal ATS",
      tag: "100% ATS",
      score: "100/100 Gold Standard",
      description: "Ultra-clean plain text format optimized for raw ATS parsers."
    }
  ];

  const filteredTemplates = allTemplatesList.filter(t => templateFilter === "All" || t.category === templateFilter);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans pb-20">
      
      {/* STEP PROGRESS NAVIGATION BAR */}
      <div className="sticky top-20 z-40 bg-white/95 border-b border-slate-200 backdrop-blur-md py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-between">
            {/* Step 1 */}
            <button
              onClick={() => setCurrentStep(1)}
              className={`flex items-center gap-3 transition-all ${
                currentStep === 1
                  ? "text-blue-600 font-bold"
                  : currentStep > 1
                  ? "text-emerald-600 font-semibold"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-extrabold border transition-all ${
                  currentStep === 1
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : currentStep > 1
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-slate-100 border-slate-300 text-slate-500"
                }`}
              >
                {currentStep > 1 ? <CheckCircle2 className="h-4 w-4" /> : "1"}
              </div>
              <span className="hidden sm:inline text-sm">1. Select Template</span>
            </button>

            <div className={`flex-1 h-0.5 mx-4 transition-all ${currentStep > 1 ? "bg-emerald-500" : "bg-slate-200"}`} />

            {/* Step 2 */}
            <button
              onClick={() => setCurrentStep(2)}
              className={`flex items-center gap-3 transition-all ${
                currentStep === 2
                  ? "text-blue-600 font-bold"
                  : currentStep > 2
                  ? "text-emerald-600 font-semibold"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-extrabold border transition-all ${
                  currentStep === 2
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : currentStep > 2
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-slate-100 border-slate-300 text-slate-500"
                }`}
              >
                {currentStep > 2 ? <CheckCircle2 className="h-4 w-4" /> : "2"}
              </div>
              <span className="hidden sm:inline text-sm">2. Fill Details & AI Assist</span>
            </button>

            <div className={`flex-1 h-0.5 mx-4 transition-all ${currentStep > 2 ? "bg-emerald-500" : "bg-slate-200"}`} />

            {/* Step 3 */}
            <button
              onClick={() => setCurrentStep(3)}
              className={`flex items-center gap-3 transition-all ${
                currentStep === 3
                  ? "text-blue-600 font-bold"
                  : "text-slate-400 hover:text-slate-600"
              }`}
            >
              <div
                className={`h-8 w-8 rounded-full flex items-center justify-center text-xs font-extrabold border transition-all ${
                  currentStep === 3
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                    : "bg-slate-100 border-slate-300 text-slate-500"
                }`}
              >
                3
              </div>
              <span className="hidden sm:inline text-sm">3. Review & Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* STEP 1: TEMPLATE SELECTION */}
      {currentStep === 1 && (
        <div className="container mx-auto px-4 py-12 max-w-6xl space-y-8 animate-in fade-in duration-300">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Select Your Recruiter-Tested <span className="text-blue-600">Template</span>
            </h2>
            <p className="text-slate-600 text-base max-w-xl mx-auto font-medium">
              All templates are engineered to parse cleanly through Greenhouse, Lever, and Workday ATS raw text streams.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {["All", "Modern", "Executive", "Creative", "Minimal ATS"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setTemplateFilter(filter)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    templateFilter === filter
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTemplates.map((t) => (
              <div
                key={t.id}
                onClick={() => {
                  setSelectedTemplate(t.id as any);
                  setCurrentStep(2);
                }}
                className={`group relative rounded-2xl border bg-white p-4 transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl ${
                  selectedTemplate === t.id
                    ? "border-blue-600 ring-2 ring-blue-500/20 shadow-xl"
                    : "border-slate-200"
                }`}
              >
                <div className="aspect-[3/4] rounded-xl bg-slate-50 border border-slate-200 p-4 text-slate-900 font-sans text-[8px] leading-tight relative overflow-hidden">
                  <div className="border-b-2 border-blue-600 pb-2 mb-2">
                    <div className="font-bold text-[10px] text-slate-950 uppercase">{personalInfo.fullName}</div>
                    <div className="text-blue-600 font-semibold text-[7px]">{personalInfo.jobTitle}</div>
                  </div>
                  <div className="space-y-1.5 text-slate-700">
                    <div className="font-bold border-b border-slate-200 text-slate-900">SUMMARY</div>
                    <div>{summary.substring(0, 70)}...</div>
                    <div className="font-bold border-b border-slate-200 text-slate-900 pt-1">EXPERIENCE</div>
                    <div className="font-bold text-slate-900">Senior Instructor</div>
                    <div>• Boosted student outcomes by 28%</div>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center space-y-3 text-white">
                    <Badge variant="success" className="bg-emerald-500 text-white">{t.score}</Badge>
                    <button className="w-full rounded-xl bg-blue-600 py-2 text-xs font-bold text-white shadow">
                      Use {t.name}
                    </button>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-sm text-slate-900">{t.name}</span>
                  <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{t.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STEP 2: SPLIT-SCREEN EDITOR */}
      {currentStep === 2 && (
        <div className="container mx-auto px-4 py-6 max-w-7xl animate-in fade-in duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* LEFT COLUMN: FORM ACCORDIONS */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-600" /> Content & Style Editor
                </h3>
                <button
                  onClick={() => setUploadModalOpen(true)}
                  className="text-xs font-bold text-blue-600 border border-blue-200 bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100"
                >
                  <Upload className="h-3.5 w-3.5 inline mr-1" /> Import Draft
                </button>
              </div>

              {/* Accordions */}
              <div className="space-y-3">
                
                {/* Personal Info */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "personal" ? "" : "personal")}
                    className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-blue-600" /> Personal Contact Details
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeAccordion === "personal" ? "rotate-180" : ""}`} />
                  </button>

                  {activeAccordion === "personal" && (
                    <div className="p-4 space-y-3 text-xs border-t border-slate-200">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Full Name</label>
                          <input
                            type="text"
                            value={personalInfo.fullName}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Job Title</label>
                          <input
                            type="text"
                            value={personalInfo.jobTitle}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, jobTitle: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Email</label>
                          <input
                            type="email"
                            value={personalInfo.email}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Phone</label>
                          <input
                            type="text"
                            value={personalInfo.phone}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Location</label>
                          <input
                            type="text"
                            value={personalInfo.location}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">LinkedIn</label>
                          <input
                            type="text"
                            value={personalInfo.linkedin}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, linkedin: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">GitHub</label>
                          <input
                            type="text"
                            value={personalInfo.github}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, github: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-semibold text-slate-600 mb-1 block">Website</label>
                          <input
                            type="text"
                            value={personalInfo.website}
                            onChange={(e) => setPersonalInfo({ ...personalInfo, website: e.target.value })}
                            className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Professional Summary */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "summary" ? "" : "summary")}
                    className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-purple-600" /> Professional Summary
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeAccordion === "summary" ? "rotate-180" : ""}`} />
                  </button>

                  {activeAccordion === "summary" && (
                    <div className="p-4 space-y-3 text-xs border-t border-slate-200">
                      <div className="flex items-center justify-between">
                        <label className="text-[11px] font-semibold text-slate-600">Summary Statement</label>
                        <button
                          onClick={() => openAiModal("summary")}
                          className="text-[11px] font-bold text-blue-600 flex items-center gap-1 hover:underline"
                        >
                          <Wand2 className="h-3 w-3" /> ✨ AI Assistant
                        </button>
                      </div>
                      <textarea
                        rows={4}
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full rounded-lg bg-slate-50 border border-slate-200 p-3 text-xs text-slate-900 leading-relaxed focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  )}
                </div>

                {/* Work Experience Accordion */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "exp" ? "" : "exp")}
                    className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-emerald-600" /> Work Experience ({experiences.length})
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeAccordion === "exp" ? "rotate-180" : ""}`} />
                  </button>

                  {activeAccordion === "exp" && (
                    <div className="p-4 space-y-4 text-xs border-t border-slate-200">
                      {experiences.map((exp) => (
                        <div key={exp.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-3 relative">
                          <button
                            onClick={() => setExperiences(experiences.filter(item => item.id !== exp.id))}
                            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                            title="Delete Experience"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>

                          <div className="grid grid-cols-2 gap-2 pr-6">
                            <input
                              type="text"
                              value={exp.company}
                              onChange={(e) => {
                                const val = e.target.value;
                                setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, company: val } : item));
                              }}
                              className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 font-semibold"
                              placeholder="Company Name"
                            />
                            <input
                              type="text"
                              value={exp.position}
                              onChange={(e) => {
                                const val = e.target.value;
                                setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, position: val } : item));
                              }}
                              className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                              placeholder="Position / Title"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <input
                              type="text"
                              value={exp.startDate}
                              onChange={(e) => {
                                const val = e.target.value;
                                setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, startDate: val } : item));
                              }}
                              className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                              placeholder="Start Date (e.g. 2017)"
                            />
                            <input
                              type="text"
                              value={exp.endDate}
                              onChange={(e) => {
                                const val = e.target.value;
                                setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, endDate: val } : item));
                              }}
                              className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                              placeholder="End Date (e.g. Present)"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="text-[11px] font-semibold text-slate-600">Bullets</span>
                              <button
                                onClick={() => openAiModal("bullet", exp.id)}
                                className="text-[11px] font-bold text-blue-600 flex items-center gap-1 hover:underline"
                              >
                                <Wand2 className="h-3 w-3" /> ✨ AI Bullets
                              </button>
                            </div>
                            {exp.bullets.map((b, bi) => (
                              <div key={bi} className="flex gap-2">
                                <textarea
                                  rows={2}
                                  value={b}
                                  onChange={(e) => {
                                    const val = e.target.value;
                                    setExperiences((prev) => prev.map((item) => {
                                      if (item.id === exp.id) {
                                        const newB = [...item.bullets];
                                        newB[bi] = val;
                                        return { ...item, bullets: newB };
                                      }
                                      return item;
                                    }));
                                  }}
                                  className="flex-1 rounded bg-white border border-slate-200 p-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                                />
                                <button
                                  onClick={() => {
                                    setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, bullets: item.bullets.filter((_, i) => i !== bi) } : item));
                                  }}
                                  className="p-2 rounded bg-red-50 text-red-500 border border-red-200 hover:bg-red-100 shrink-0"
                                >
                                  <Trash2 className="h-3.5 w-3.5" />
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={handleAddExperience}
                        className="w-full py-2.5 rounded-xl border border-dashed border-slate-300 text-blue-600 font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-1.5 text-xs"
                      >
                        <Plus className="h-4 w-4" /> Add Work Experience
                      </button>
                    </div>
                  )}
                </div>

                {/* Education Accordion */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "edu" ? "" : "edu")}
                    className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-indigo-600" /> Education ({education.length})
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeAccordion === "edu" ? "rotate-180" : ""}`} />
                  </button>

                  {activeAccordion === "edu" && (
                    <div className="p-4 space-y-4 text-xs border-t border-slate-200">
                      {education.map((edu) => (
                        <div key={edu.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2 relative">
                          <button
                            onClick={() => setEducation(education.filter(item => item.id !== edu.id))}
                            className="absolute top-3 right-3 text-red-500 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>

                          <div className="pr-6 space-y-2">
                            <input
                              type="text"
                              value={edu.institution}
                              onChange={(e) => {
                                const val = e.target.value;
                                setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, institution: val } : item));
                              }}
                              placeholder="School / Institution"
                              className="w-full rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900 font-semibold"
                            />
                            <input
                              type="text"
                              value={edu.degree}
                              onChange={(e) => {
                                const val = e.target.value;
                                setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, degree: val } : item));
                              }}
                              placeholder="Degree / Field of Study"
                              className="w-full rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                            />
                            <div className="grid grid-cols-2 gap-2">
                              <input
                                type="text"
                                value={edu.startDate}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, startDate: val } : item));
                                }}
                                placeholder="Start Year"
                                className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                              />
                              <input
                                type="text"
                                value={edu.endDate}
                                onChange={(e) => {
                                  const val = e.target.value;
                                  setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, endDate: val } : item));
                                }}
                                placeholder="End Year"
                                className="rounded bg-white border border-slate-200 px-2.5 py-1.5 text-xs text-slate-900"
                              />
                            </div>
                          </div>
                        </div>
                      ))}

                      <button
                        onClick={handleAddEducation}
                        className="w-full py-2.5 rounded-xl border border-dashed border-slate-300 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors flex items-center justify-center gap-1.5 text-xs"
                      >
                        <Plus className="h-4 w-4" /> Add Education
                      </button>
                    </div>
                  )}
                </div>

                {/* Skills Tag Input */}
                <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === "skills" ? "" : "skills")}
                    className="w-full p-4 flex items-center justify-between font-bold text-sm text-slate-900 bg-slate-50 hover:bg-slate-100/80 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Wrench className="h-4 w-4 text-amber-600" /> Skills & Core Competencies
                    </span>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${activeAccordion === "skills" ? "rotate-180" : ""}`} />
                  </button>

                  {activeAccordion === "skills" && (
                    <div className="p-4 space-y-3 text-xs border-t border-slate-200">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={newSkillInput}
                          onChange={(e) => setNewSkillInput(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") handleAddSkill(newSkillInput);
                          }}
                          placeholder="Add skill tag..."
                          className="flex-1 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-xs text-slate-900 focus:border-blue-600 focus:outline-none"
                        />
                        <button
                          onClick={() => handleAddSkill(newSkillInput)}
                          className="rounded-lg bg-blue-600 text-white font-bold px-4 text-xs"
                        >
                          Add
                        </button>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-blue-50 border border-blue-200 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full flex items-center gap-1.5"
                          >
                            {skill}
                            <button onClick={() => handleRemoveSkill(skill)} className="hover:text-red-500">
                              <X className="h-3 w-3" />
                            </button>
                          </span>
                        ))}
                      </div>

                      {/* Suggestions */}
                      <div className="pt-2">
                        <span className="text-[11px] font-semibold text-slate-600 block mb-1.5">Quick Suggestions:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {popularSkillSuggestions.map((sug, i) => (
                            <button
                              key={i}
                              onClick={() => handleAddSkill(sug)}
                              className="text-[10px] font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 px-2 py-0.5 rounded-md flex items-center gap-1"
                            >
                              <Plus className="h-2.5 w-2.5" /> {sug}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Style Controls */}
                <div className="rounded-xl border border-slate-200 bg-white p-4 space-y-4 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Palette className="h-4 w-4 text-blue-600" /> Color, Font & Layout Controls
                  </h4>

                  {/* Accent Color */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">Accent Color</label>
                    <div className="flex items-center gap-3">
                      {["#2563eb", "#10b981", "#7c3aed", "#e11d48", "#0284c7", "#334155"].map((color) => (
                        <button
                          key={color}
                          onClick={() => setAccentColor(color)}
                          style={{ backgroundColor: color }}
                          className={`h-7 w-7 rounded-full border-2 transition-transform ${
                            accentColor === color ? "border-slate-900 scale-110 ring-2 ring-slate-900/20" : "border-transparent"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Font Family */}
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1.5">Font Family</label>
                    <div className="flex gap-2">
                      {[
                        { id: "sans", label: "Sans-Serif" },
                        { id: "serif", label: "Serif" },
                        { id: "mono", label: "Monospace" }
                      ].map((f) => (
                        <button
                          key={f.id}
                          onClick={() => setFontFamily(f.id as any)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                            fontFamily === f.id ? "bg-slate-900 text-white border-slate-900" : "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {f.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Line Spacing Slider */}
                  <div>
                    <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                      <span>Line Spacing</span>
                      <span>{lineSpacing}x</span>
                    </div>
                    <input
                      type="range"
                      min="1.1"
                      max="2.0"
                      step="0.1"
                      value={lineSpacing}
                      onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
                      className="w-full accent-blue-600 cursor-pointer"
                    />
                  </div>
                </div>

              </div>

              <button
                onClick={() => setCurrentStep(3)}
                className="w-full rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 text-sm shadow-md"
              >
                Proceed to Step 3: Review & Export →
              </button>

            </div>

            {/* RIGHT COLUMN: LIVE CANVAS */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Sticky Bar */}
              <div className="sticky top-36 z-30 rounded-xl border border-slate-200 bg-white p-3 shadow-sm flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 text-white font-extrabold flex items-center justify-center text-xs">
                    98
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{selectedTemplate.toUpperCase()} Template</div>
                    <div className="text-[10px] text-slate-500">Greenhouse Verified</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Device toggle */}
                  <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                    <button
                      onClick={() => setPreviewDevice("desktop")}
                      className={`p-1.5 rounded-md ${previewDevice === "desktop" ? "bg-white text-blue-600 shadow-xs" : "text-slate-500"}`}
                      title="Desktop Width (650px)"
                    >
                      <Monitor className="h-3.5 w-3.5" />
                    </button>
                    <button
                      onClick={() => setPreviewDevice("mobile")}
                      className={`p-1.5 rounded-md ${previewDevice === "mobile" ? "bg-white text-blue-600 shadow-xs" : "text-slate-500"}`}
                      title="Mobile Width (375px)"
                    >
                      <Smartphone className="h-3.5 w-3.5" />
                    </button>
                  </div>

                  {/* Zoom controls */}
                  <div className="flex items-center gap-1.5">
                    <button onClick={() => setZoomLevel(Math.max(70, zoomLevel - 10))} className="p-1 rounded bg-slate-100 hover:bg-slate-200">
                      <ZoomOut className="h-3.5 w-3.5" />
                    </button>
                    <span className="font-mono text-slate-600 text-[11px]">{zoomLevel}%</span>
                    <button onClick={() => setZoomLevel(Math.min(130, zoomLevel + 10))} className="p-1 rounded bg-slate-100 hover:bg-slate-200">
                      <ZoomIn className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* RENDERED CANVAS CONTAINER */}
              <div className="flex justify-center overflow-x-auto p-4 bg-slate-200/60 rounded-2xl border border-slate-300 min-h-[800px]">
                <div
                  style={{
                    transform: `scale(${zoomLevel / 100})`,
                    transformOrigin: "top center",
                    padding: `${marginPadding}px`,
                    lineHeight: lineSpacing,
                  }}
                  className={`bg-white text-slate-900 shadow-2xl rounded-sm transition-all duration-300 min-h-[850px] ${
                    previewDevice === "mobile" ? "w-[375px]" : "w-[650px]"
                  } ${
                    fontFamily === "serif" ? "font-serif" : fontFamily === "mono" ? "font-mono" : "font-sans"
                  }`}
                >
                  
                  {/* CANVAS LAYOUT 1: MODERN */}
                  {selectedTemplate === "modern" && (
                    <div className="space-y-4">
                      <div className="border-b-2 pb-3 mb-4" style={{ borderColor: accentColor }}>
                        <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-950">{personalInfo.fullName}</h1>
                        <div className="text-sm font-semibold mt-0.5" style={{ color: accentColor }}>
                          {personalInfo.jobTitle}
                        </div>
                        <div className="text-[11px] text-slate-600 mt-1 flex flex-wrap gap-2 font-medium">
                          <span>{personalInfo.email}</span> • <span>{personalInfo.phone}</span> • <span>{personalInfo.location}</span>
                          {personalInfo.linkedin && <span>• {personalInfo.linkedin}</span>}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                          Professional Summary
                        </h2>
                        <p className="text-slate-700 leading-relaxed text-[11px]">{summary}</p>
                      </div>

                      <div className="mb-4">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                          Skills & Competencies
                        </h2>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {skills.map((s, i) => (
                            <span key={i} className="bg-slate-100 text-slate-800 font-semibold px-2 py-0.5 rounded text-[10px]">
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4 space-y-3">
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                          Work Experience
                        </h2>
                        {experiences.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between items-baseline font-bold">
                              <span className="text-slate-950 text-xs">{exp.position}</span>
                              <span className="text-slate-500 text-[10px]">{exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="font-semibold text-[11px]" style={{ color: accentColor }}>
                              {exp.company}
                            </div>
                            <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px] pt-0.5">
                              {exp.bullets.map((b, bi) => (
                                <li key={bi}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 mb-1.5">
                          Education
                        </h2>
                        {education.map((edu) => (
                          <div key={edu.id} className="flex justify-between text-[11px]">
                            <div>
                              <div className="font-bold text-slate-950">{edu.degree}</div>
                              <div className="text-slate-600">{edu.institution}</div>
                            </div>
                            <div className="text-slate-500">{edu.startDate} - {edu.endDate}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CANVAS LAYOUT 2: EXECUTIVE (Serif, Header Banner) */}
                  {selectedTemplate === "executive" && (
                    <div className="space-y-4 font-serif">
                      <div className="bg-slate-900 text-white p-5 -mx-6 -mt-6 mb-4">
                        <h1 className="text-2xl font-bold tracking-wide uppercase">{personalInfo.fullName}</h1>
                        <div className="text-amber-400 font-medium text-xs mt-1">{personalInfo.jobTitle}</div>
                        <div className="text-[10px] text-slate-300 mt-2 flex flex-wrap gap-3">
                          <span>{personalInfo.email}</span> • <span>{personalInfo.phone}</span> • <span>{personalInfo.location}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
                          Executive Profile
                        </h2>
                        <p className="text-slate-800 text-[11px] leading-relaxed italic">{summary}</p>
                      </div>

                      <div className="mb-4 space-y-3">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
                          Leadership & Experience
                        </h2>
                        {experiences.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="flex justify-between items-baseline font-bold text-xs">
                              <span>{exp.position}</span>
                              <span className="text-slate-500 text-[10px]">{exp.startDate} – {exp.endDate}</span>
                            </div>
                            <div className="font-bold text-slate-700 text-[11px]">{exp.company}</div>
                            <ul className="list-disc list-inside space-y-1 text-slate-700 text-[11px]">
                              {exp.bullets.map((b, bi) => (
                                <li key={bi}>{b}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>

                      <div>
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-900 border-b-2 border-slate-900 pb-1 mb-2">
                          Education & Credentials
                        </h2>
                        {education.map((edu) => (
                          <div key={edu.id} className="flex justify-between text-[11px]">
                            <span className="font-bold text-slate-900">{edu.degree} — {edu.institution}</span>
                            <span className="text-slate-500">{edu.startDate} – {edu.endDate}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CANVAS LAYOUT 3: CREATIVE (2-Column Sidebar Layout) */}
                  {selectedTemplate === "creative" && (
                    <div className="grid grid-cols-12 gap-4 min-h-[750px] -m-6 p-6">
                      {/* Left Sidebar */}
                      <div className="col-span-4 bg-slate-900 text-white p-4 -my-6 -ml-6 space-y-5 rounded-l-sm text-[10px]">
                        <div>
                          <h1 className="text-lg font-extrabold uppercase leading-tight">{personalInfo.fullName}</h1>
                          <div className="text-blue-400 font-semibold mt-1">{personalInfo.jobTitle}</div>
                        </div>

                        <div className="space-y-2 border-t border-slate-700 pt-3">
                          <div className="font-bold text-slate-300 uppercase tracking-wider text-[9px]">Contact</div>
                          <div className="text-slate-400 break-words">{personalInfo.email}</div>
                          <div className="text-slate-400">{personalInfo.phone}</div>
                          <div className="text-slate-400">{personalInfo.location}</div>
                        </div>

                        <div className="space-y-2 border-t border-slate-700 pt-3">
                          <div className="font-bold text-slate-300 uppercase tracking-wider text-[9px]">Core Skills</div>
                          <div className="flex flex-wrap gap-1">
                            {skills.map((s, i) => (
                              <span key={i} className="bg-slate-800 text-blue-300 px-2 py-0.5 rounded text-[9px]">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Main Column */}
                      <div className="col-span-8 space-y-4 pl-2 text-[11px]">
                        <div>
                          <h2 className="font-bold text-xs uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-1.5">
                            About Me
                          </h2>
                          <p className="text-slate-700 leading-relaxed">{summary}</p>
                        </div>

                        <div className="space-y-3">
                          <h2 className="font-bold text-xs uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-1.5">
                            Experience
                          </h2>
                          {experiences.map((exp) => (
                            <div key={exp.id} className="space-y-1">
                              <div className="flex justify-between font-bold">
                                <span>{exp.position}</span>
                                <span className="text-slate-400 text-[10px]">{exp.startDate} - {exp.endDate}</span>
                              </div>
                              <div className="text-blue-600 font-semibold">{exp.company}</div>
                              <ul className="list-disc list-inside space-y-1 text-slate-600">
                                {exp.bullets.map((b, bi) => (
                                  <li key={bi}>{b}</li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>

                        <div>
                          <h2 className="font-bold text-xs uppercase tracking-wider text-blue-600 border-b border-blue-200 pb-1 mb-1.5">
                            Education
                          </h2>
                          {education.map((edu) => (
                            <div key={edu.id}>
                              <div className="font-bold text-slate-900">{edu.degree}</div>
                              <div className="text-slate-500">{edu.institution} ({edu.startDate} - {edu.endDate})</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* CANVAS LAYOUT 4: ATS GOLD STANDARD (Single column, plain text stream) */}
                  {selectedTemplate === "ats" && (
                    <div className="space-y-4 font-mono text-[10.5px] leading-snug">
                      <div className="text-center border-b border-slate-400 pb-2 mb-3">
                        <h1 className="text-xl font-bold uppercase tracking-widest text-slate-950">{personalInfo.fullName}</h1>
                        <div className="text-slate-800 font-bold">{personalInfo.jobTitle}</div>
                        <div className="text-slate-600 text-[9.5px] mt-1">
                          {personalInfo.email} | {personalInfo.phone} | {personalInfo.location}
                        </div>
                      </div>

                      <div>
                        <div className="font-bold uppercase tracking-wider border-b border-slate-300 mb-1">SECTION: PROFESSIONAL SUMMARY</div>
                        <p className="text-slate-800">{summary}</p>
                      </div>

                      <div>
                        <div className="font-bold uppercase tracking-wider border-b border-slate-300 mb-1">SECTION: CORE SKILLS</div>
                        <p className="text-slate-800">{skills.join(" • ")}</p>
                      </div>

                      <div className="space-y-3">
                        <div className="font-bold uppercase tracking-wider border-b border-slate-300 mb-1">SECTION: WORK EXPERIENCE</div>
                        {experiences.map((exp) => (
                          <div key={exp.id} className="space-y-1">
                            <div className="font-bold flex justify-between">
                              <span>JOB TITLE: {exp.position}</span>
                              <span>DATES: {exp.startDate} - {exp.endDate}</span>
                            </div>
                            <div className="font-semibold text-slate-800">EMPLOYER: {exp.company}</div>
                            {exp.bullets.map((b, bi) => (
                              <div key={bi} className="text-slate-700 pl-2">• {b}</div>
                            ))}
                          </div>
                        ))}
                      </div>

                      <div>
                        <div className="font-bold uppercase tracking-wider border-b border-slate-300 mb-1">SECTION: EDUCATION</div>
                        {education.map((edu) => (
                          <div key={edu.id}>
                            <div className="font-bold">{edu.degree}</div>
                            <div className="text-slate-600">{edu.institution} ({edu.startDate} - {edu.endDate})</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* STEP 3: REVIEW & EXPORT */}
      {currentStep === 3 && (
        <div className="container mx-auto px-4 py-12 max-w-5xl animate-in fade-in duration-300 space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Review & Export Your <span className="text-blue-600">Resume</span>
            </h2>
            <p className="text-slate-600 text-base font-medium">
              100% free high-resolution PDF download with zero auto-recurring subscriptions.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-slate-200 bg-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Export Center</h3>
              <p className="text-xs text-slate-500">Choose your preferred download format</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 text-sm shadow-md"
              >
                <Download className="h-4 w-4 inline mr-2" /> Download PDF (Free)
              </button>

              <button
                onClick={() => alert("Exporting as DOCX...")}
                className="rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold px-5 py-3 text-sm hover:bg-slate-200"
              >
                DOCX Export
              </button>

              <button
                onClick={handleCopyText}
                className="rounded-xl bg-slate-100 border border-slate-200 text-slate-800 font-bold px-5 py-3 text-sm hover:bg-slate-200"
              >
                {copiedText ? "Copied!" : "Copy Plain Text"}
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-4 rounded-xl bg-emerald-500 text-white font-bold text-center">
              🎉 PDF Export Initiated Successfully! 100% Free Guarantee.
            </div>
          )}
        </div>
      )}

      {/* UPLOAD MODAL */}
      {uploadModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Upload className="h-5 w-5 text-blue-600" /> Upload Existing Resume
              </h3>
              <button onClick={() => setUploadModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center space-y-3 bg-slate-50 hover:bg-slate-100/50 cursor-pointer">
              <div className="h-12 w-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                <FileText className="h-6 w-6" />
              </div>
              <div className="font-bold text-slate-900 text-sm">Drag & drop your PDF or DOCX file</div>
              <div className="text-xs text-slate-500">Supports PDF, DOCX up to 10MB</div>
            </div>

            <button
              onClick={handlePreFillDemoData}
              className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md"
            >
              ✨ Pre-fill Demo Candidate Profile
            </button>
          </div>
        </div>
      )}

      {/* AI MODAL */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-blue-600" /> ✨ AI Assistant
              </h3>
              <button onClick={() => setAiModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-semibold text-slate-600 block">Select output to insert:</span>
              {aiSuggestions.map((sug, idx) => (
                <div
                  key={idx}
                  onClick={() => handleApplyAiSuggestion(sug)}
                  className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 hover:border-blue-600 cursor-pointer font-medium"
                >
                  {sug}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
