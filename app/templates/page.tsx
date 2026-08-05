"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Star, Users, ArrowRight, Sparkles, TrendingUp, ShieldCheck, Flame } from 'lucide-react';

interface Template {
  id: string;
  name: string; // City name
  subtitle: string; // Role-based description
  category: string; // Design style
  industry: string; // Target industry
  score: number; // ATS score
  users: string; // User count
  salary: string; // Salary range for target role
  growth: string; // YoY growth percentage
  description: string;
  features: string[];
  trending: boolean;
  badge: 'popular' | 'trending' | 'new' | null;
  accentColors: string[]; // 4 Tailwind color classes for accent switcher
  mockupStyle: 'modern-sidebar' | 'executive-classic' | 'ats-single' | 'creative-bold' | 'corporate-structured' | 'tech-terminal' | 'clinical-clean' | 'metrics-focused' | 'academic-research' | 'legal-formal' | 'startup-lean' | 'hybrid-transition';
}

const templates: Template[] = [
  {
    id: 'stockholm',
    name: 'Stockholm',
    subtitle: 'Modern Tech Resume',
    category: 'Modern',
    industry: 'Tech & AI',
    score: 98,
    users: '2.5M+',
    salary: '$140K-$206K',
    growth: '+38.5%',
    description: 'Clean sidebar layout with skills tags and GitHub links. Engineered for AI, ML, and full-stack engineering roles.',
    features: ['Two-column sidebar layout', 'Skills tag cloud', 'GitHub & portfolio links'],
    trending: true,
    badge: 'trending',
    accentColors: ['bg-blue-500', 'bg-indigo-500', 'bg-cyan-500', 'bg-violet-500'],
    mockupStyle: 'modern-sidebar'
  },
  {
    id: 'london',
    name: 'London',
    subtitle: 'Executive Serif Resume',
    category: 'Executive',
    industry: 'Business',
    score: 96,
    users: '1.2M+',
    salary: '$123K-$158K',
    growth: '+12%',
    description: 'Traditional serif typography with achievement metrics. Designed for C-suite, finance directors, and senior consultants.',
    features: ['Serif typography', 'Achievement metrics section', 'Board & advisory blocks'],
    trending: false,
    badge: 'popular',
    accentColors: ['bg-slate-700', 'bg-amber-700', 'bg-stone-600', 'bg-zinc-700'],
    mockupStyle: 'executive-classic'
  },
  {
    id: 'new-york',
    name: 'New York',
    subtitle: 'ATS-Safe Universal',
    category: 'ATS',
    industry: 'Universal',
    score: 99,
    users: '3.1M+',
    salary: '$85K-$155K',
    growth: '+15%',
    description: 'Single-column, zero-graphics layout that passes 100% of ATS parsers. Universal fit for any industry.',
    features: ['Single-column layout', 'Standard fonts only', '100% parser safe'],
    trending: false,
    badge: 'popular',
    accentColors: ['bg-slate-800', 'bg-blue-700', 'bg-emerald-700', 'bg-gray-700'],
    mockupStyle: 'ats-single'
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    subtitle: 'Creative Portfolio Resume',
    category: 'Creative',
    industry: 'Creative',
    score: 94,
    users: '1.5M+',
    salary: '$88K-$125K',
    growth: '+18%',
    description: 'Bold visual hierarchy with portfolio section for UX designers, graphic designers, and creative directors.',
    features: ['Portfolio showcase section', 'Color accent bands', 'Visual hierarchy focus'],
    trending: false,
    badge: null,
    accentColors: ['bg-pink-500', 'bg-amber-500', 'bg-teal-500', 'bg-purple-500'],
    mockupStyle: 'creative-bold'
  },
  {
    id: 'geneva',
    name: 'Geneva',
    subtitle: 'Corporate Professional',
    category: 'Executive',
    industry: 'Business',
    score: 97,
    users: '980K+',
    salary: '$97K-$135K',
    growth: '+10%',
    description: 'Structured corporate layout with certification blocks and KPI sections for project managers and operations leads.',
    features: ['Certification blocks', 'KPI metrics section', 'Clean grid structure'],
    trending: false,
    badge: null,
    accentColors: ['bg-blue-600', 'bg-slate-600', 'bg-teal-600', 'bg-indigo-600'],
    mockupStyle: 'corporate-structured'
  },
  {
    id: 'berlin',
    name: 'Berlin',
    subtitle: 'DevOps & Cloud Resume',
    category: 'Modern',
    industry: 'Tech & AI',
    score: 98,
    users: '890K+',
    salary: '$118K-$152K',
    growth: '+28.5%',
    description: 'Technical stack grid with terminal-inspired aesthetic. Built for DevOps engineers, SREs, and cloud architects.',
    features: ['Tech stack grid layout', 'Terminal-style sections', 'Infrastructure diagrams'],
    trending: true,
    badge: 'trending',
    accentColors: ['bg-emerald-500', 'bg-lime-500', 'bg-green-500', 'bg-teal-500'],
    mockupStyle: 'tech-terminal'
  },
  {
    id: 'toronto',
    name: 'Toronto',
    subtitle: 'Healthcare & Clinical',
    category: 'Minimal',
    industry: 'Healthcare',
    score: 97,
    users: '2.1M+',
    salary: '$80K-$145K',
    growth: '+40.1%',
    description: 'Clean clinical layout with license headers and rotation sections. Optimized for RNs, NPs, and medical professionals.',
    features: ['License & certification header', 'Clinical rotation sections', 'HIPAA-compliant structure'],
    trending: true,
    badge: 'trending',
    accentColors: ['bg-sky-500', 'bg-teal-500', 'bg-blue-500', 'bg-cyan-500'],
    mockupStyle: 'clinical-clean'
  },
  {
    id: 'dublin',
    name: 'Dublin',
    subtitle: 'Sales & Growth Resume',
    category: 'Modern',
    industry: 'Sales & Marketing',
    score: 95,
    users: '750K+',
    salary: '$82K-$118K',
    growth: '+22%',
    description: 'Revenue metrics header with campaign results and conversion data. Perfect for sales executives and growth marketers.',
    features: ['Revenue metrics header', 'Campaign results blocks', 'Conversion data focus'],
    trending: false,
    badge: 'new',
    accentColors: ['bg-orange-500', 'bg-red-500', 'bg-amber-500', 'bg-rose-500'],
    mockupStyle: 'metrics-focused'
  },
  {
    id: 'sydney',
    name: 'Sydney',
    subtitle: 'Academic & Research',
    category: 'Minimal',
    industry: 'Education',
    score: 96,
    users: '620K+',
    salary: '$75K-$120K',
    growth: '+8%',
    description: 'Publications-first layout with teaching philosophy and grant history sections for educators and researchers.',
    features: ['Publications section', 'Teaching philosophy block', 'Grant & funding history'],
    trending: false,
    badge: null,
    accentColors: ['bg-indigo-500', 'bg-blue-600', 'bg-violet-500', 'bg-slate-600'],
    mockupStyle: 'academic-research'
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    subtitle: 'Legal & Compliance',
    category: 'Executive',
    industry: 'Legal',
    score: 97,
    users: '540K+',
    salary: '$95K-$156K',
    growth: '+21%',
    description: 'Bar admission section with case summary blocks. Designed for paralegals, compliance officers, and attorneys.',
    features: ['Bar admission section', 'Case summary blocks', 'Regulatory framework list'],
    trending: false,
    badge: 'new',
    accentColors: ['bg-slate-700', 'bg-blue-800', 'bg-gray-700', 'bg-zinc-700'],
    mockupStyle: 'legal-formal'
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    subtitle: 'Product & Startup Resume',
    category: 'Modern',
    industry: 'Business',
    score: 95,
    users: '680K+',
    salary: '$123K-$158K',
    growth: '+16%',
    description: 'OKR-formatted achievements with roadmap visualization. Built for product managers and startup leaders.',
    features: ['OKR achievement format', 'Product roadmap section', 'Stakeholder matrix'],
    trending: false,
    badge: null,
    accentColors: ['bg-violet-500', 'bg-fuchsia-500', 'bg-purple-500', 'bg-indigo-500'],
    mockupStyle: 'startup-lean'
  },
  {
    id: 'vienna',
    name: 'Vienna',
    subtitle: 'Career Changer Hybrid',
    category: 'ATS',
    industry: 'Universal',
    score: 98,
    users: '1.8M+',
    salary: '$85K-$135K',
    growth: '+25%',
    description: 'Transferable skills matrix with combined format. Optimized for career transitions and employment gaps.',
    features: ['Transferable skills matrix', 'Combined chronological-functional', 'Gap-friendly date format'],
    trending: true,
    badge: 'trending',
    accentColors: ['bg-teal-500', 'bg-blue-500', 'bg-emerald-500', 'bg-cyan-500'],
    mockupStyle: 'hybrid-transition'
  }
];

const designStyles = ['All', 'Modern', 'Executive', 'Creative', 'Minimal', 'ATS'];
const industries = [
  { label: 'All Trending', icon: '🔥', value: 'All' },
  { label: 'Tech & AI', icon: '💻', value: 'Tech & AI' },
  { label: 'Healthcare', icon: '🏥', value: 'Healthcare' },
  { label: 'Business', icon: '📊', value: 'Business' },
  { label: 'Creative', icon: '🎨', value: 'Creative' },
  { label: 'Sales & Marketing', icon: '📈', value: 'Sales & Marketing' },
  { label: 'Legal', icon: '⚖️', value: 'Legal' },
  { label: 'Education', icon: '🎓', value: 'Education' },
  { label: 'Universal', icon: '🔄', value: 'Universal' },
];

export default function TemplatesGallery() {
  const [activeDesign, setActiveDesign] = useState('All');
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [activeColors, setActiveColors] = useState<Record<string, string>>(
    templates.reduce((acc, t) => ({ ...acc, [t.id]: t.accentColors[0] }), {})
  );

  const filteredTemplates = templates.filter((template) => {
    const matchDesign = activeDesign === 'All' || template.category === activeDesign;
    const matchIndustry = activeIndustry === 'All' || template.industry === activeIndustry;
    return matchDesign && matchIndustry;
  });

  const handleColorChange = (templateId: string, colorClass: string) => {
    setActiveColors((prev) => ({ ...prev, [templateId]: colorClass }));
  };

  const renderMockup = (style: string, activeColor: string) => {
    const colorCode = activeColor.replace('bg-', '');
    // Helper to get text color variation based on active bg color (rough approximation for CSS)
    const textColor = `text-${colorCode}`;

    switch (style) {
      case 'modern-sidebar':
        return (
          <div className="flex w-full h-full text-[6px] leading-[8px]">
            <div className={`w-1/3 ${activeColor} text-white p-2 flex flex-col gap-2`}>
              <div>
                <div className="font-bold text-[8px]">Alice Hart</div>
                <div className="text-[5px] opacity-80">Software Engineer</div>
              </div>
              <div>
                <div className="font-bold border-b border-white/20 pb-0.5 mb-1 text-[5px]">SKILLS</div>
                <div className="flex flex-wrap gap-0.5">
                  <span className="bg-white/20 px-1 py-0.5 rounded-sm text-[4px]">React</span>
                  <span className="bg-white/20 px-1 py-0.5 rounded-sm text-[4px]">Node.js</span>
                  <span className="bg-white/20 px-1 py-0.5 rounded-sm text-[4px]">AWS</span>
                  <span className="bg-white/20 px-1 py-0.5 rounded-sm text-[4px]">Python</span>
                </div>
              </div>
            </div>
            <div className="w-2/3 bg-white p-2 flex flex-col gap-2 text-slate-800">
              <div>
                <div className={`font-bold ${textColor} border-b border-slate-200 pb-0.5 mb-1 text-[5px]`}>SUMMARY</div>
                <div>Full-stack engineer with 5+ years building scalable web applications.</div>
              </div>
              <div>
                <div className={`font-bold ${textColor} border-b border-slate-200 pb-0.5 mb-1 text-[5px]`}>EXPERIENCE</div>
                <div className="font-bold text-[5px]">TechCorp Inc.</div>
                <div className="text-[4px] text-slate-500 mb-0.5">2020 - Present</div>
                <ul className="list-disc pl-2 flex flex-col gap-0.5">
                  <li>Developed microservices in Node.js.</li>
                  <li>Reduced load time by 40% with React optimization.</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'executive-classic':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-2 text-[6px] leading-[8px] font-serif text-slate-800">
            <div className="text-center border-b-[0.5px] border-slate-800 pb-1">
              <div className="font-bold text-[9px] uppercase tracking-wide">Alice Hart</div>
              <div className="text-[5px] uppercase tracking-widest text-slate-500">Chief Financial Officer</div>
            </div>
            <div className="text-center text-[5px] italic mb-1">
              Visionary finance executive driving revenue growth and operational efficiency.
            </div>
            <div>
              <div className="font-bold uppercase border-b-[0.5px] border-slate-300 pb-0.5 mb-1 text-[5px]">Professional Experience</div>
              <div className="flex justify-between font-bold text-[5px]">
                <span>Global Finance Ltd.</span>
                <span>2018 - Present</span>
              </div>
              <div className="italic text-[4px] mb-0.5">VP of Finance</div>
              <ul className="list-disc pl-2 flex flex-col gap-0.5">
                <li>Managed $500M+ annual budget across 12 departments.</li>
                <li>Led successful Series C funding round securing $50M.</li>
              </ul>
            </div>
            <div>
              <div className="font-bold uppercase border-b-[0.5px] border-slate-300 pb-0.5 mb-1 mt-1 text-[5px]">Core Competencies</div>
              <div className="grid grid-cols-2 gap-1 text-[4px]">
                <span>• Financial Modeling</span>
                <span>• Mergers & Acquisitions</span>
                <span>• Risk Management</span>
                <span>• Strategic Planning</span>
              </div>
            </div>
          </div>
        );
      case 'ats-single':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-1.5 text-[6px] leading-[8px] text-black">
            <div>
              <div className="font-bold text-[8px]">Alice Hart</div>
              <div className="text-[5px]">alice.hart@email.com | (555) 123-4567 | linkedin.com/in/alicehart</div>
            </div>
            <div>
              <div className="font-bold border-b border-black pb-0.5 mb-0.5 text-[5px] uppercase">Summary</div>
              <div className="text-[5px]">Results-driven professional with proven track record in project management and team leadership.</div>
            </div>
            <div>
              <div className="font-bold border-b border-black pb-0.5 mb-0.5 text-[5px] uppercase">Experience</div>
              <div>
                <div className="flex justify-between font-bold text-[5px]">
                  <span>Senior Project Manager, Acme Corp</span>
                  <span>Jan 2020 - Present</span>
                </div>
                <ul className="list-disc pl-2 flex flex-col gap-0.5 mt-0.5">
                  <li>Directed cross-functional teams of 20+ members to deliver enterprise solutions.</li>
                  <li>Delivered 15 major projects on time and 10% under budget.</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="font-bold border-b border-black pb-0.5 mb-0.5 text-[5px] uppercase">Skills</div>
              <div className="text-[5px]">Agile, Scrum, Jira, Confluence, Stakeholder Management, Budgeting</div>
            </div>
          </div>
        );
      case 'creative-bold':
        return (
          <div className="w-full h-full bg-slate-50 flex flex-col text-[6px] leading-[8px] text-slate-800">
            <div className={`w-full h-10 ${activeColor} flex flex-col justify-center items-center text-white`}>
              <div className="font-bold text-[10px] tracking-wide">ALICE HART</div>
              <div className="text-[5px] uppercase tracking-widest opacity-90">Creative Director</div>
            </div>
            <div className="p-3 flex flex-col gap-2">
              <div className="text-center text-[5px]">
                Award-winning designer with a passion for building cohesive brand identities and digital experiences.
              </div>
              <div>
                <div className={`font-bold ${textColor} text-[5px] uppercase mb-1`}>Experience</div>
                <div className="border-l-2 border-slate-200 pl-2 ml-1">
                  <div className="font-bold text-[5px]">Design Studio X</div>
                  <div className="text-[4px] text-slate-500 mb-0.5">2019 - Present</div>
                  <div className="text-[4px] leading-tight">Led complete rebranding for 5 Fortune 500 companies. Increased user engagement by 45%.</div>
                </div>
              </div>
              <div>
                <div className={`font-bold ${textColor} text-[5px] uppercase mb-1 mt-1`}>Expertise</div>
                <div className="flex flex-wrap gap-1">
                  <span className={`${activeColor} text-white px-1.5 py-0.5 rounded-full text-[4px]`}>UI/UX Design</span>
                  <span className={`${activeColor} text-white px-1.5 py-0.5 rounded-full text-[4px]`}>Branding</span>
                  <span className={`${activeColor} text-white px-1.5 py-0.5 rounded-full text-[4px]`}>Figma</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 'corporate-structured':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-2 text-[6px] leading-[8px] text-slate-800">
            <div className="text-center">
              <div className="font-bold text-[9px] uppercase tracking-wide">Alice Hart</div>
              <div className="text-[5px] text-slate-500 uppercase">Operations Manager</div>
            </div>
            <div className="w-full border-t border-b border-slate-300 py-0.5 text-center text-[4px] flex justify-center gap-2">
              <span>alice@example.com</span>
              <span>555-0192</span>
              <span>New York, NY</span>
            </div>
            <div className="flex gap-2 h-full">
              <div className="w-1/2 flex flex-col gap-2">
                <div>
                  <div className={`font-bold ${activeColor} text-white px-1 py-0.5 mb-1 text-[4px] uppercase`}>Experience</div>
                  <div className="font-bold text-[5px]">Corp Solutions</div>
                  <div className="text-[4px] text-slate-500">2018 - Present</div>
                  <ul className="list-disc pl-2 text-[4px] mt-0.5 flex flex-col gap-0.5">
                    <li>Optimized supply chain reducing costs by 15%.</li>
                    <li>Managed team of 45 employees.</li>
                  </ul>
                </div>
              </div>
              <div className="w-1/2 flex flex-col gap-2">
                <div>
                  <div className={`font-bold ${activeColor} text-white px-1 py-0.5 mb-1 text-[4px] uppercase`}>Certifications</div>
                  <div className="bg-slate-50 p-1 border border-slate-200 rounded text-[4px] mb-1">
                    <span className="font-bold block">PMP Certified</span>
                    <span className="text-slate-500">Project Management Institute</span>
                  </div>
                  <div className="bg-slate-50 p-1 border border-slate-200 rounded text-[4px]">
                    <span className="font-bold block">Six Sigma Green Belt</span>
                    <span className="text-slate-500">ASQ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'tech-terminal':
        return (
          <div className="w-full h-full bg-slate-900 p-3 flex flex-col gap-1.5 text-[6px] leading-[8px] font-mono text-emerald-400">
            <div>
              <span className="text-emerald-500">{'>'}</span> <span className="font-bold text-[8px] text-white">alice_hart.sh</span>
            </div>
            <div className="text-slate-400 text-[5px] mb-1">Role: Cloud Architect / DevOps Engineer</div>
            
            <div>
              <div className="text-white text-[5px] border-b border-slate-700 border-dashed pb-0.5 mb-0.5">~/skills $ ls -la</div>
              <div className="grid grid-cols-2 gap-1 text-[4px]">
                <span className="bg-slate-800 px-1 py-0.5 rounded">kubernetes</span>
                <span className="bg-slate-800 px-1 py-0.5 rounded">terraform</span>
                <span className="bg-slate-800 px-1 py-0.5 rounded">aws_cdk</span>
                <span className="bg-slate-800 px-1 py-0.5 rounded">docker</span>
              </div>
            </div>

            <div className="mt-1">
              <div className="text-white text-[5px] border-b border-slate-700 border-dashed pb-0.5 mb-0.5">~/experience $ cat latest.log</div>
              <div className="text-[5px] text-white">CloudNative Inc [2021-NOW]</div>
              <div className="text-[4px] text-slate-300 mt-0.5 pl-2 border-l border-emerald-500/30">
                [SUCCESS] Migrated legacy monolith to EKS.<br/>
                [INFO] Reduced infrastructure costs by 32%.<br/>
                [SUCCESS] Implemented zero-downtime CI/CD.
              </div>
            </div>
          </div>
        );
      case 'clinical-clean':
        return (
          <div className="w-full h-full bg-white flex flex-col text-[6px] leading-[8px] text-slate-800">
            <div className={`w-full ${activeColor} h-1.5`}></div>
            <div className="p-3 flex flex-col gap-1.5">
              <div className="flex justify-between items-end border-b-2 border-slate-100 pb-1">
                <div>
                  <div className="font-bold text-[9px]">Alice Hart, BSN, RN</div>
                  <div className="text-[5px] text-slate-500">Registered Nurse - ICU</div>
                </div>
                <div className={`${activeColor} text-white px-1.5 py-0.5 rounded-md text-[4px] font-bold`}>
                  LICENSE: RN-123456
                </div>
              </div>
              
              <div className="mt-1">
                <div className={`font-bold ${textColor} bg-slate-50 px-1 py-0.5 mb-1 text-[5px] uppercase rounded-sm`}>Clinical Experience</div>
                <div className="font-bold text-[5px]">General Hospital - Intensive Care Unit</div>
                <div className="text-[4px] text-slate-500 mb-0.5">2019 - Present</div>
                <ul className="list-disc pl-2 flex flex-col gap-0.5">
                  <li>Provide direct patient care in a 24-bed medical-surgical ICU.</li>
                  <li>Proficient in ventilator management, hemodynamic monitoring.</li>
                </ul>
              </div>

              <div className="mt-1">
                <div className={`font-bold ${textColor} bg-slate-50 px-1 py-0.5 mb-1 text-[5px] uppercase rounded-sm`}>Certifications</div>
                <div className="flex flex-col gap-0.5 text-[4px]">
                  <div className="flex justify-between"><span>Basic Life Support (BLS)</span><span>Exp: 2026</span></div>
                  <div className="flex justify-between"><span>Advanced Cardiac Life Support (ACLS)</span><span>Exp: 2026</span></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'metrics-focused':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-2 text-[6px] leading-[8px] text-slate-800">
            <div>
              <div className={`font-bold text-[10px] ${textColor}`}>Alice Hart</div>
              <div className="text-[5px] font-medium text-slate-600 uppercase tracking-wider">VP of Sales & Growth</div>
            </div>
            
            <div className="flex gap-1">
              <div className="bg-slate-50 border border-slate-100 rounded p-1 flex-1 text-center">
                <div className={`font-bold ${textColor} text-[6px]`}>$2.4M</div>
                <div className="text-[3px] text-slate-500 uppercase">Revenue Gen</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded p-1 flex-1 text-center">
                <div className={`font-bold ${textColor} text-[6px]`}>150+</div>
                <div className="text-[3px] text-slate-500 uppercase">Enterprise Clients</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 rounded p-1 flex-1 text-center">
                <div className={`font-bold ${textColor} text-[6px]`}>34%</div>
                <div className="text-[3px] text-slate-500 uppercase">YoY Growth</div>
              </div>
            </div>

            <div>
              <div className={`font-bold border-b border-slate-200 pb-0.5 mb-1 text-[5px] uppercase ${textColor}`}>Professional Experience</div>
              <div className="font-bold text-[5px]">TechSolutions Global</div>
              <div className="text-[4px] text-slate-500 italic mb-0.5">Director of Sales | 2020 - Present</div>
              <ul className="list-disc pl-2 flex flex-col gap-0.5 mt-0.5">
                <li>Scaled outbound sales team from 5 to 25 reps, driving 200% pipeline growth.</li>
                <li>Closed 3 of the top 10 largest deals in company history.</li>
              </ul>
            </div>
          </div>
        );
      case 'academic-research':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-1.5 text-[6px] leading-[8px] font-serif text-slate-800">
            <div className="text-center mb-1">
              <div className="font-bold text-[9px]">Alice Hart, Ph.D.</div>
              <div className="text-[5px] text-slate-600">Department of Biological Sciences | University of State</div>
            </div>
            
            <div>
              <div className={`font-bold border-b-[0.5px] border-slate-800 pb-0.5 mb-1 text-[5px] uppercase ${textColor}`}>Education</div>
              <div className="flex justify-between font-bold text-[5px]">
                <span>Ph.D. in Molecular Biology</span>
                <span>2019</span>
              </div>
              <div className="text-[4px] italic">Ivy League University</div>
              <div className="text-[4px] mt-0.5">Dissertation: "Cellular Mechanisms in Early Stage Development"</div>
            </div>

            <div>
              <div className={`font-bold border-b-[0.5px] border-slate-800 pb-0.5 mb-1 text-[5px] uppercase ${textColor}`}>Selected Publications</div>
              <ol className="list-decimal pl-2 flex flex-col gap-1 text-[4px]">
                <li><strong>Hart, A.</strong>, Smith, J. (2022). "Novel pathways in cellular regeneration." <em>Journal of Biological Research</em>, 45(2), 112-125.</li>
                <li>Doe, J., <strong>Hart, A.</strong> (2021). "Genetic markers in standard models." <em>Science Today</em>, 12(4), 89-102.</li>
              </ol>
            </div>
          </div>
        );
      case 'legal-formal':
        return (
          <div className="w-full h-full bg-stone-50 p-3 flex flex-col gap-1.5 text-[6px] leading-[8px] font-serif text-slate-900">
            <div className="text-center border-b-[1px] border-slate-900 pb-1 mb-1">
              <div className="font-bold text-[9px] uppercase tracking-[0.2em]">Alice Hart, Esq.</div>
              <div className="text-[4px] text-slate-600 mt-0.5">123 Legal Ave, Suite 400, New York, NY 10001 | (212) 555-0199</div>
            </div>
            
            <div>
              <div className="font-bold border-b-[0.5px] border-slate-400 pb-0.5 mb-0.5 text-[5px] uppercase tracking-wider text-center">Bar Admissions</div>
              <div className="text-[5px] text-center">New York (2015) | California (2017) | U.S. Supreme Court (2021)</div>
            </div>

            <div className="mt-1">
              <div className="font-bold border-b-[0.5px] border-slate-400 pb-0.5 mb-1 text-[5px] uppercase tracking-wider">Experience</div>
              <div className="flex justify-between font-bold text-[5px]">
                <span>Hart & Associates LLP</span>
                <span>2018 - Present</span>
              </div>
              <div className="text-[4px] italic mb-0.5">Partner</div>
              <p className="text-[4px] text-justify mb-0.5">
                Lead counsel in complex commercial litigation, focusing on intellectual property and corporate disputes.
              </p>
              <ul className="list-disc pl-2 flex flex-col gap-0.5 text-[4px]">
                <li>Successfully defended Fortune 500 tech company in $100M patent infringement suit.</li>
                <li>Drafted and negotiated 50+ enterprise SaaS agreements and licensing contracts.</li>
              </ul>
            </div>
          </div>
        );
      case 'startup-lean':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-2 text-[6px] leading-[8px] text-slate-800">
            <div className="flex justify-between items-end">
              <div>
                <div className="font-bold text-[10px] tracking-tight">Alice Hart</div>
                <div className={`text-[5px] font-medium uppercase ${textColor}`}>Senior Product Manager</div>
              </div>
              <div className="text-right text-[4px] text-slate-500">
                alice@startup.io<br/>github.com/alicehart
              </div>
            </div>
            
            <div>
              <div className="font-bold border-b-2 border-slate-100 pb-0.5 mb-1 text-[5px] uppercase">Key Results</div>
              
              <div className="mb-1.5">
                <div className="font-bold text-[5px]">Product: User Onboarding Flow</div>
                <div className="pl-1 border-l border-slate-200 mt-0.5">
                  <div className="text-[4px]"><strong>Objective:</strong> Increase user activation rate within first 7 days.</div>
                  <div className="text-[4px] text-slate-600"><strong>Key Result 1:</strong> Redesigned FTUE, improving conversion by 45%.</div>
                  <div className="text-[4px] text-slate-600"><strong>Key Result 2:</strong> Reduced time-to-value from 12 mins to 3 mins.</div>
                </div>
              </div>

              <div>
                <div className="font-bold text-[5px]">Product: Enterprise Dashboard</div>
                <div className="pl-1 border-l border-slate-200 mt-0.5">
                  <div className="text-[4px]"><strong>Objective:</strong> Launch B2B analytics portal for enterprise tier.</div>
                  <div className="text-[4px] text-slate-600"><strong>Key Result 1:</strong> Delivered MVP in 6 weeks, securing $500k ARR.</div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'hybrid-transition':
        return (
          <div className="w-full h-full bg-white p-3 flex flex-col gap-2 text-[6px] leading-[8px] text-slate-800">
            <div className="text-center">
              <div className="font-bold text-[10px]">Alice Hart</div>
              <div className="text-[5px] text-slate-500">Project Manager / Agile Coach</div>
            </div>
            
            <div>
              <div className={`font-bold border-b border-slate-200 pb-0.5 mb-1 text-[5px] uppercase ${textColor}`}>Core Competencies</div>
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-slate-50 p-1 rounded-sm border border-slate-100">
                  <div className="font-bold text-[4px]">Agile Methodologies</div>
                  <div className="text-[3.5px] text-slate-500">Scrum, Kanban, SAFe</div>
                </div>
                <div className="bg-slate-50 p-1 rounded-sm border border-slate-100">
                  <div className="font-bold text-[4px]">Team Leadership</div>
                  <div className="text-[3.5px] text-slate-500">Coaching, Mentoring, Conflict Res</div>
                </div>
                <div className="bg-slate-50 p-1 rounded-sm border border-slate-100">
                  <div className="font-bold text-[4px]">Stakeholder Mgmt</div>
                  <div className="text-[3.5px] text-slate-500">C-Suite comms, Reporting</div>
                </div>
                <div className="bg-slate-50 p-1 rounded-sm border border-slate-100">
                  <div className="font-bold text-[4px]">Process Optimization</div>
                  <div className="text-[3.5px] text-slate-500">Workflow mapping, Bottleneck ID</div>
                </div>
              </div>
            </div>

            <div>
              <div className={`font-bold border-b border-slate-200 pb-0.5 mb-1 text-[5px] uppercase ${textColor}`}>Employment History</div>
              <div className="font-bold text-[5px]">Transitioned to Project Management</div>
              <div className="text-[4px] text-slate-500 mb-0.5">2021 - Present</div>
              <ul className="list-disc pl-2 flex flex-col gap-0.5 text-[4px]">
                <li>Applied leadership skills gained in military service to civilian corporate projects.</li>
                <li>Certified as Scrum Master (CSM) and led 3 successful software launches.</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20 px-4 border-b border-slate-100">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <div className="bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium mb-6 flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Engineered for Greenhouse, Lever, Workday & iCIMS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Recruiter-Tested Templates for Every Career
          </h1>
          <p className="text-xl text-slate-500 mb-8">
            All templates pass enterprise ATS parsers. Picked by 4.8M+ job seekers. Updated for 2025 hiring trends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm">
              <span className="font-bold text-slate-900">142,000+</span> <span className="text-slate-500">resumes today</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm">
              <span className="font-bold text-slate-900">97%</span> <span className="text-slate-500">avg ATS score</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm">
              <span className="font-bold text-slate-900">2.5×</span> <span className="text-slate-500">faster callbacks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Now Section */}
      <section className="py-12 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              Trending Now
            </h2>
            <span className="text-sm text-slate-400">Based on 2025 hiring data</span>
          </div>
          
          <div className="flex overflow-x-auto gap-6 pb-4 snap-x hide-scrollbar">
            {templates.filter(t => t.trending).map((template) => (
              <Link key={template.id} href={`/builder?template=${template.id}`} className="snap-start min-w-[300px] bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 flex-shrink-0 hover:scale-[1.02] transition-transform cursor-pointer shadow-lg">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-white/10 rounded-full px-3 py-1 text-xs flex items-center gap-1.5">
                    <Flame className="w-3 h-3 text-orange-400" />
                    {template.industry}
                  </span>
                  <span className="bg-emerald-500/20 text-emerald-400 rounded-full px-3 py-1 text-xs font-bold flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    {template.growth}
                  </span>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">{template.name}</h3>
                  <p className="text-slate-400 text-sm">{template.subtitle}</p>
                </div>
                <div className="flex justify-between items-end border-t border-white/10 pt-4 mt-auto">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Target Salary</div>
                    <div className="text-slate-200 text-sm font-medium">{template.salary}</div>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                    <Users className="w-3.5 h-3.5" />
                    {template.users}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-6">
          {/* Row 1 - Design Style */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 hide-scrollbar md:flex-wrap">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2 shrink-0">Style</span>
            {designStyles.map(style => (
              <button
                key={style}
                onClick={() => setActiveDesign(style)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeDesign === style
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {style}
              </button>
            ))}
          </div>

          {/* Row 2 - Trending Industry */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mr-2 shrink-0">Industry</span>
            {industries.map(ind => (
              <button
                key={ind.value}
                onClick={() => setActiveIndustry(ind.value)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeIndustry === ind.value
                    ? 'bg-blue-50 text-blue-700 border-blue-200 border shadow-sm'
                    : 'bg-white text-slate-500 border border-slate-100 hover:border-blue-200 hover:bg-slate-50'
                }`}
              >
                <span>{ind.icon}</span>
                {ind.label}
              </button>
            ))}
          </div>
          
          <div className="text-sm text-slate-500 font-medium">
            Showing {filteredTemplates.length} templates
          </div>
        </div>
      </section>

      {/* Template Grid Section */}
      <section className="pb-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-2xl hover:border-slate-300 transition-all duration-500 flex flex-col">
              
              {/* Card Preview Area */}
              <div className="aspect-[3/4] relative overflow-hidden bg-slate-100 flex items-center justify-center p-6">
                {/* Mockup Container with shadow and rounded corners to look like a paper */}
                <div className="w-full h-full bg-white shadow-lg overflow-hidden border border-slate-200 relative select-none">
                  {renderMockup(template.mockupStyle, activeColors[template.id])}
                </div>

                {/* Badge Overlay */}
                {template.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    {template.badge === 'trending' && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Flame className="w-3 h-3" /> Trending
                      </span>
                    )}
                    {template.badge === 'popular' && (
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-current" /> Popular
                      </span>
                    )}
                    {template.badge === 'new' && (
                      <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                        <Sparkles className="w-3 h-3" /> New
                      </span>
                    )}
                  </div>
                )}

                {/* ATS Score Badge */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm border border-slate-100 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 font-bold text-sm">{template.score}</span>
                  <span className="text-slate-400 text-xs font-medium">/100 ATS</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                  <Link href={`/builder?template=${template.id}`} className="bg-white text-slate-900 font-bold px-6 py-3 rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                    Use This Template <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Card Info */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Color Switcher */}
                <div className="flex gap-2 mb-4">
                  {template.accentColors.map(color => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(template.id, color)}
                      className={`w-4 h-4 rounded-full ${color} ${activeColors[template.id] === color ? 'ring-2 ring-offset-2 ring-slate-400' : 'opacity-80 hover:opacity-100'}`}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{template.name}</h3>
                  <p className="text-sm text-slate-500 font-medium">{template.subtitle}</p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs bg-slate-100 text-slate-600 rounded-full px-2.5 py-1 font-medium">
                    {template.industry}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    {template.users}
                  </span>
                </div>

                <p className="text-sm text-slate-500 mb-6 line-clamp-2 h-10">
                  {template.description}
                </p>

                <div className="mb-6 flex flex-col gap-2 flex-grow">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href={`/builder?template=${template.id}`} className="w-full text-center py-3 bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-700 rounded-xl font-medium border border-slate-200 hover:border-blue-200 transition-all flex justify-center items-center gap-2 mt-auto">
                  Preview & Use Template
                </Link>
              </div>

            </div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No templates match the selected filters.
          </div>
        )}
      </section>

      {/* Bottom CTA Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-8 pb-24">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Can't decide? Let AI pick for you.</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Tell us your target job title and we'll recommend the best template tailored to your specific industry and role requirements.
          </p>
          <Link href="/builder" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            Start with AI Recommendation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
