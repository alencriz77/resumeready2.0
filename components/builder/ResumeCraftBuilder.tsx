"use client";

import React, { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Wand2, 
  Plus, 
  Trash2, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Palette, 
  ZoomIn, 
  ZoomOut, 
  Smartphone, 
  Monitor, 
  ShieldCheck,
  Zap,
  ChevronDown,
  Upload,
  X,
  Target
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CommandPalette from "./CommandPalette";

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
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(2);
  const [selectedTemplate, setSelectedTemplate] = useState<"modern" | "executive" | "creative" | "ats">("modern");
  
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

  const [activeAccordion, setActiveAccordion] = useState<string>("personal");

  // AI Modal State
  const [aiModalOpen, setAiModalOpen] = useState(false);
  const [aiModalType, setAiModalType] = useState<"summary" | "bullet">("summary");
  const [activeExpId, setActiveExpId] = useState<string | null>(null);
  const [aiTone, setAiTone] = useState<"professional" | "executive" | "creative" | "impact">("impact");
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);
  const [isGeneratingAi, setIsGeneratingAi] = useState(false);

  // Command Palette
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  // Canvas View Mode State
  const [zoomLevel, setZoomLevel] = useState(100);
  const [previewDevice, setPreviewDevice] = useState<"desktop" | "mobile">("desktop");
  
  // Section refs for scroll spy
  const personalRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleCommandAction = (action: string) => {
    switch(action) {
      case "ai-enhance":
        openAiModal("summary");
        break;
      case "ats-check":
        alert("Running ATS Check... Score: 98/100");
        break;
      case "switch-modern":
        setSelectedTemplate("modern");
        break;
      case "switch-executive":
        setSelectedTemplate("executive");
        break;
      case "export-pdf":
        alert("Downloading PDF...");
        break;
      case "load-demo":
        handlePreFillDemoData();
        break;
    }
  };

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
  };

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

  const openAiModal = (type: "summary" | "bullet", expId?: string) => {
    setAiModalType(type);
    if (expId) setActiveExpId(expId);
    setAiModalOpen(true);
    generateAiSuggestions(type, aiTone);
  };

  const generateAiSuggestions = (type: "summary" | "bullet", tone: string) => {
    setIsGeneratingAi(true);
    setTimeout(() => {
      setIsGeneratingAi(false);
      if (type === "summary") {
        setAiSuggestions([
          `Accomplished ${personalInfo.jobTitle} with 8+ years developing rigorous curricula and elevating performance indicators by 30%.`,
        ]);
      } else {
        setAiSuggestions([
          `Designed and executed custom interactive learning modules, increasing mastery rates by 34%.`,
        ]);
      }
    }, 600);
  };

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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">
      <CommandPalette isOpen={isCommandPaletteOpen} onClose={() => setIsCommandPaletteOpen(false)} onAction={handleCommandAction} />

      {/* Column 1: Left Navigation Drawer */}
      <div className="w-[220px] bg-white border-r border-slate-200 flex flex-col justify-between shrink-0 shadow-sm z-10">
        <div>
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h1 className="font-extrabold text-sm tracking-tight flex items-center gap-2 text-slate-900">
              <span className="h-6 w-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px]">RR</span>
              Builder
            </h1>
            <button 
              onClick={() => setIsCommandPaletteOpen(true)}
              className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-[9px] font-bold text-slate-500 hover:bg-slate-200 transition-colors"
            >
              ⌘K
            </button>
          </div>

          <div className="p-4 space-y-6">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Steps</p>
              {[
                { step: 1, label: "Choose Template" },
                { step: 2, label: "Fill Details" },
                { step: 3, label: "Export & Check" }
              ].map(s => (
                <button
                  key={s.step}
                  onClick={() => setCurrentStep(s.step as any)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    currentStep === s.step 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className={`h-4 w-4 rounded-full flex items-center justify-center text-[9px] ${
                    currentStep === s.step ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-500"
                  }`}>
                    {s.step}
                  </div>
                  {s.label}
                </button>
              ))}
            </div>

            {currentStep === 2 && (
              <div className="space-y-1 pt-4 border-t border-slate-100">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2">Sections</p>
                <button onClick={() => scrollToSection(personalRef)} className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">
                  Personal Info
                </button>
                <button onClick={() => scrollToSection(expRef)} className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">
                  Experience
                </button>
                <button onClick={() => scrollToSection(eduRef)} className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">
                  Education
                </button>
                <button onClick={() => scrollToSection(skillsRef)} className="w-full text-left px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md">
                  Skills
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="p-4 border-t border-slate-100">
          <button 
            onClick={handlePreFillDemoData}
            className="w-full py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Zap className="h-3.5 w-3.5 text-amber-500" /> Load Demo Data
          </button>
        </div>
      </div>

      {/* Column 2 & 3 Workspace */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Column 2: Center Editor (45%) */}
        <div className="w-[45%] border-r border-slate-200 bg-white overflow-y-auto custom-scrollbar">
          <div className="max-w-2xl mx-auto p-8 space-y-10">
            
            <div className="space-y-1 pb-4 border-b border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Content Editor</h2>
              <p className="text-sm text-slate-500 font-medium">Update your details and use AI to enhance your content.</p>
            </div>

            {/* Personal Info */}
            <div ref={personalRef} className="space-y-4">
              <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                <FileText className="h-4 w-4 text-blue-600" /> Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Job Title</label>
                  <input
                    type="text"
                    value={personalInfo.jobTitle}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, jobTitle: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Email</label>
                  <input
                    type="email"
                    value={personalInfo.email}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">Phone</label>
                  <input
                    type="text"
                    value={personalInfo.phone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                    className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                 <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-600 block">Professional Summary</label>
                    <button onClick={() => openAiModal("summary")} className="text-xs font-bold text-purple-600 hover:text-purple-700 flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-md">
                      <Sparkles className="h-3 w-3" /> AI Generate
                    </button>
                 </div>
                 <textarea
                   rows={4}
                   value={summary}
                   onChange={(e) => setSummary(e.target.value)}
                   className="w-full rounded-lg bg-slate-50 border border-slate-200 p-3 text-sm text-slate-900 leading-relaxed focus:border-blue-600 focus:outline-none transition-colors"
                 />
              </div>
            </div>

            {/* Experience */}
            <div ref={expRef} className="space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-emerald-600" /> Work Experience
                </h3>
              </div>
              
              {experiences.map((exp) => (
                <div key={exp.id} className="p-5 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4 relative group">
                  <button
                    onClick={() => setExperiences(experiences.filter(item => item.id !== exp.id))}
                    className="absolute top-4 right-4 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>

                  <div className="grid grid-cols-2 gap-4 pr-6">
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const val = e.target.value;
                          setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, company: val } : item));
                        }}
                        className="w-full rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => {
                          const val = e.target.value;
                          setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, position: val } : item));
                        }}
                        className="w-full rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="text-[10px] font-bold text-slate-500 uppercase block">Accomplishments</label>
                    {exp.bullets.map((b, bi) => (
                      <div key={bi} className="space-y-1.5">
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
                          className="w-full rounded-lg bg-slate-50 border border-slate-200 p-2.5 text-sm text-slate-700 focus:border-blue-600 focus:outline-none transition-colors"
                        />
                        {/* Inline AI Action Buttons */}
                        <div className="flex items-center gap-2">
                          <button onClick={() => openAiModal("bullet", exp.id)} className="text-[10px] font-bold flex items-center gap-1 text-purple-600 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded-md transition-colors">
                            <Sparkles className="h-3 w-3" /> Enhance
                          </button>
                          <button onClick={() => alert("Quantify metric... (Demo)")} className="text-[10px] font-bold flex items-center gap-1 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-md transition-colors">
                            <Zap className="h-3 w-3" /> Quantify
                          </button>
                          <button onClick={() => alert("Injecting keyword... (Demo)")} className="text-[10px] font-bold flex items-center gap-1 text-blue-600 bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded-md transition-colors">
                            <Target className="h-3 w-3" /> Keyword
                          </button>
                          
                          <button
                            onClick={() => {
                              setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, bullets: item.bullets.filter((_, i) => i !== bi) } : item));
                            }}
                            className="ml-auto text-slate-400 hover:text-red-500 p-1"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={() => {
                        setExperiences((prev) => prev.map((item) => item.id === exp.id ? { ...item, bullets: [...item.bullets, ""] } : item));
                      }}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 pt-1"
                    >
                      <Plus className="h-3 w-3" /> Add Bullet
                    </button>
                  </div>
                </div>
              ))}
              
              <button
                onClick={handleAddExperience}
                className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-blue-600 font-bold hover:bg-blue-50 hover:border-blue-200 transition-colors flex items-center justify-center gap-1.5 text-sm"
              >
                <Plus className="h-4 w-4" /> Add Experience
              </button>
            </div>

            {/* Education */}
            <div ref={eduRef} className="space-y-4">
               <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                 <GraduationCap className="h-4 w-4 text-indigo-600" /> Education
               </h3>
               {education.map((edu) => (
                  <div key={edu.id} className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3 relative group">
                    <button
                      onClick={() => setEducation(education.filter(item => item.id !== edu.id))}
                      className="absolute top-3 right-3 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <div className="grid grid-cols-2 gap-3 pr-6">
                      <input
                        type="text"
                        value={edu.institution}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, institution: val } : item));
                        }}
                        placeholder="Institution"
                        className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-sm font-bold text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) => {
                          const val = e.target.value;
                          setEducation(prev => prev.map(item => item.id === edu.id ? { ...item, degree: val } : item));
                        }}
                        placeholder="Degree"
                        className="w-full rounded-lg bg-slate-50 border border-slate-200 px-3 py-1.5 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
               ))}
               <button
                  onClick={handleAddEducation}
                  className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 text-indigo-600 font-bold hover:bg-indigo-50 hover:border-indigo-200 transition-colors flex items-center justify-center gap-1.5 text-sm"
                >
                  <Plus className="h-4 w-4" /> Add Education
                </button>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="space-y-4">
               <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                 <Wrench className="h-4 w-4 text-amber-600" /> Skills
               </h3>
               <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm space-y-3">
                 <div className="flex gap-2">
                    <input
                      type="text"
                      value={newSkillInput}
                      onChange={(e) => setNewSkillInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && newSkillInput.trim()) {
                          if (!skills.includes(newSkillInput.trim())) {
                            setSkills([...skills, newSkillInput.trim()]);
                          }
                          setNewSkillInput("");
                        }
                      }}
                      placeholder="Add a skill and press Enter..."
                      className="flex-1 rounded-lg bg-slate-50 border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
                    />
                 </div>
                 <div className="flex flex-wrap gap-2">
                   {skills.map((skill, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5">
                        {skill}
                        <button onClick={() => setSkills(skills.filter(s => s !== skill))} className="hover:text-red-500 text-slate-400">
                          <X className="h-3 w-3" />
                        </button>
                      </span>
                   ))}
                 </div>
               </div>
            </div>

            <div className="pt-8"></div>
          </div>
        </div>

        {/* Column 3: Right Live Canvas Preview (55%) */}
        <div className="w-[55%] bg-slate-100 flex flex-col relative overflow-hidden">
          
          {/* Preview Top Bar */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
            {/* Template Selector Pill */}
            <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-3 py-1.5 shadow-sm flex items-center gap-2 text-xs font-bold text-slate-700">
               <Palette className="h-3.5 w-3.5 text-blue-600" />
               <select 
                 value={selectedTemplate} 
                 onChange={(e) => setSelectedTemplate(e.target.value as any)}
                 className="bg-transparent border-none outline-none cursor-pointer hover:text-blue-600"
               >
                 <option value="modern">Modern</option>
                 <option value="executive">Executive</option>
                 <option value="creative">Creative</option>
                 <option value="ats">ATS</option>
               </select>
            </div>
            
            {/* Floating ATS Score */}
            <div className="bg-emerald-500 text-white rounded-full px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-bold border border-emerald-400">
              <ShieldCheck className="h-3.5 w-3.5" /> 98/100 ATS Score
            </div>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur-md border border-slate-200 rounded-full px-2 py-1 shadow-sm flex items-center gap-2">
             <button onClick={() => setZoomLevel(Math.max(50, zoomLevel - 10))} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600"><ZoomOut className="h-4 w-4" /></button>
             <span className="text-xs font-mono font-bold w-10 text-center">{zoomLevel}%</span>
             <button onClick={() => setZoomLevel(Math.min(150, zoomLevel + 10))} className="p-1.5 rounded-full hover:bg-slate-100 text-slate-600"><ZoomIn className="h-4 w-4" /></button>
             <div className="w-px h-4 bg-slate-300 mx-1"></div>
             <button onClick={() => setPreviewDevice("desktop")} className={`p-1.5 rounded-full ${previewDevice === "desktop" ? "bg-blue-50 text-blue-600" : "hover:bg-slate-100 text-slate-600"}`}><Monitor className="h-4 w-4" /></button>
             <button onClick={() => setPreviewDevice("mobile")} className={`p-1.5 rounded-full ${previewDevice === "mobile" ? "bg-blue-50 text-blue-600" : "hover:bg-slate-100 text-slate-600"}`}><Smartphone className="h-4 w-4" /></button>
          </div>

          {/* Canvas Area */}
          <div className="flex-1 overflow-auto custom-scrollbar flex items-start justify-center pt-20 pb-24 px-4 bg-[#e2e8f0]/40">
             <div
                style={{
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: "top center",
                  padding: `${marginPadding}px`,
                  lineHeight: lineSpacing,
                }}
                className={`bg-white text-slate-900 shadow-2xl rounded-sm transition-all duration-300 min-h-[850px] shrink-0 ${
                  previewDevice === "mobile" ? "w-[375px]" : "w-[650px]"
                } ${
                  fontFamily === "serif" ? "font-serif" : fontFamily === "mono" ? "font-mono" : "font-sans"
                }`}
              >
                
                {selectedTemplate === "modern" && (
                  <div className="space-y-4">
                    <div className="border-b-2 pb-3 mb-4" style={{ borderColor: accentColor }}>
                      <h1 className="text-2xl font-bold uppercase tracking-tight text-slate-950">{personalInfo.fullName || "Your Name"}</h1>
                      <div className="text-sm font-semibold mt-0.5" style={{ color: accentColor }}>
                        {personalInfo.jobTitle || "Job Title"}
                      </div>
                      <div className="text-[11px] text-slate-600 mt-1 flex flex-wrap gap-2 font-medium">
                        <span>{personalInfo.email}</span> • <span>{personalInfo.phone}</span> • <span>{personalInfo.location}</span>
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
                        Skills
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
                        Experience
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
                
                {/* Fallback for other templates if needed or implement them as before */}
                {selectedTemplate !== "modern" && (
                   <div className="flex items-center justify-center h-full text-slate-400 font-bold text-sm py-40">
                      {selectedTemplate.toUpperCase()} Template Layout
                      <br/>
                      <span className="text-xs font-normal">Content streams dynamically based on selection.</span>
                   </div>
                )}

              </div>
          </div>
        </div>

      </div>

      {/* AI Modal Component */}
      {aiModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 space-y-4 shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Wand2 className="h-5 w-5 text-purple-600" /> ✨ AI Assistant
              </h3>
              <button onClick={() => setAiModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {isGeneratingAi ? (
              <div className="py-12 flex flex-col items-center justify-center space-y-3">
                <Sparkles className="h-8 w-8 text-purple-500 animate-spin" />
                <p className="text-sm font-bold text-slate-600">Analyzing syntax & generating variants...</p>
              </div>
            ) : (
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Suggested Variants</span>
                {aiSuggestions.map((sug, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleApplyAiSuggestion(sug)}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 hover:border-purple-400 hover:bg-purple-50 hover:shadow-sm cursor-pointer font-medium transition-all"
                  >
                    {sug}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
