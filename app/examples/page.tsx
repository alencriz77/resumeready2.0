"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Briefcase, FileText, ChevronRight, CheckCircle2 } from 'lucide-react';

const EXAMPLES = [
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    category: 'Technology',
    skills: ['React', 'Node.js', 'TypeScript', 'System Design', 'AWS'],
    bullets: [
      'Spearheaded the migration of a legacy monolithic application to microservices, improving system uptime by 99.9%.',
      'Mentored a team of 4 junior developers, reducing onboarding time by 30%.',
    ],
    atsTip: 'Include specific technologies and frameworks matching the job description perfectly.'
  },
  {
    id: 'registered-nurse',
    title: 'Registered Nurse',
    category: 'Healthcare',
    skills: ['Patient Care', 'Electronic Health Records (EHR)', 'Triage', 'BLS/ACLS', 'Medication Administration'],
    bullets: [
      'Managed care for up to 6 high-acuity patients per shift in a fast-paced Med-Surg unit.',
      'Recognized for achieving a 98% patient satisfaction score over 12 consecutive months.',
    ],
    atsTip: 'Spell out certifications (e.g., Basic Life Support) in addition to acronyms.'
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    category: 'Business',
    skills: ['Agile/Scrum', 'Risk Management', 'Stakeholder Communication', 'Jira', 'Budgeting'],
    bullets: [
      'Delivered a $2M enterprise software implementation 2 weeks ahead of schedule and 10% under budget.',
      'Facilitated daily stand-ups and sprint planning for cross-functional teams of 15+ members.',
    ],
    atsTip: 'Quantify your impact using budgets, timelines, and team sizes.'
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst',
    category: 'Finance',
    skills: ['Financial Modeling', 'Data Visualization', 'Forecasting', 'Excel (Advanced)', 'SQL'],
    bullets: [
      'Identified cost-saving opportunities that reduced operational expenses by $150k annually.',
      'Developed automated financial dashboards reducing monthly reporting time by 40%.',
    ],
    atsTip: 'Highlight tools used (e.g., Tableau, Excel) and exact monetary figures saved/managed.'
  },
  {
    id: 'marketing-manager',
    title: 'Marketing Manager',
    category: 'Marketing',
    skills: ['SEO/SEM', 'Content Strategy', 'Campaign Management', 'Google Analytics', 'CRM'],
    bullets: [
      'Directed a cross-channel marketing campaign that generated a 25% increase in Q3 lead generation.',
      'Grew organic social media following by 50k+ across all platforms in under 6 months.',
    ],
    atsTip: 'Focus on ROI, conversion rates, and specific metrics showing campaign success.'
  },
  {
    id: 'teacher',
    title: 'Teacher',
    category: 'Education',
    skills: ['Curriculum Development', 'Classroom Management', 'Special Education', 'EdTech', 'Differentiated Instruction'],
    bullets: [
      'Improved average standardized test scores in reading by 15% for a class of 30 students.',
      'Designed and implemented an interactive STEM curriculum adopted by the entire department.',
    ],
    atsTip: 'Mention specific age groups/grades and educational standards utilized.'
  },
  {
    id: 'sales-executive',
    title: 'Sales Executive',
    category: 'Sales',
    skills: ['B2B Sales', 'Negotiation', 'Lead Generation', 'Salesforce', 'Account Management'],
    bullets: [
      'Exceeded annual sales quota by 120%, generating $1.2M in new revenue in 2023.',
      'Successfully negotiated and closed a multi-year contract with a Fortune 500 client.',
    ],
    atsTip: 'Use strong action verbs like "Closed", "Negotiated", and "Exceeded".'
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Technology',
    skills: ['Python', 'Machine Learning', 'Statistical Analysis', 'TensorFlow', 'Data Mining'],
    bullets: [
      'Built a predictive churn model with 85% accuracy, allowing targeted retention strategies that saved $500k.',
      'Processed and analyzed datasets exceeding 10TB to identify consumer purchasing trends.',
    ],
    atsTip: 'Detail both the business problem solved and the specific algorithms used.'
  }
];

export default function ExamplesPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredExamples = EXAMPLES.filter((ex) =>
    ex.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ex.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Resume Examples by Industry
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">
            Get inspired by real-world resume examples for top roles. See exactly what skills and phrasing get candidates hired.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search by job title or industry (e.g., Software, Healthcare)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-4 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-600 transition-colors shadow-sm text-lg"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredExamples.length > 0 ? (
            filteredExamples.map((example) => (
              <div key={example.id} className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">{example.title}</h2>
                    <div className="flex items-center text-blue-600 text-sm font-medium gap-1">
                      <Briefcase className="w-4 h-4" />
                      {example.category}
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Top Skills to Include</h3>
                  <div className="flex flex-wrap gap-2">
                    {example.skills.map((skill, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-lg text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">Example Bullet Points</h3>
                  <ul className="space-y-3">
                    {example.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1 flex items-center gap-2">
                    <FileText className="w-4 h-4" /> ATS Tip
                  </h4>
                  <p className="text-sm text-blue-800">{example.atsTip}</p>
                </div>

                <Link
                  href={`/builder?example=${example.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-semibold transition-colors"
                >
                  Use This Example in Builder <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="text-slate-400 mb-4 flex justify-center">
                <Search className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No examples found</h3>
              <p className="text-slate-500">We couldn't find any roles matching "{searchQuery}". Try a different term.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
