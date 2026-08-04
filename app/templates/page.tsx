"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Check, Star, Users, ArrowRight } from 'lucide-react';

const CATEGORIES = ['All', 'Modern', 'Executive', 'Creative', 'ATS'];

const TEMPLATES = [
  {
    id: 'modern',
    name: 'Stockholm',
    category: 'Modern',
    score: 98,
    users: '2.5M+',
    description: 'Clean, professional design perfect for tech and modern industries.',
    features: ['Two-column layout', 'Icon support', 'Skills progress bars'],
    color: 'bg-blue-50',
    accent: 'text-blue-600',
  },
  {
    id: 'executive',
    name: 'London',
    category: 'Executive',
    score: 95,
    users: '1.2M+',
    description: 'Traditional, elegant format favored by corporate recruiters.',
    features: ['Classic typography', 'Emphasis on experience', 'Subtle dividers'],
    color: 'bg-slate-50',
    accent: 'text-slate-700',
  },
  {
    id: 'creative',
    name: 'Berlin',
    category: 'Creative',
    score: 92,
    users: '800K+',
    description: 'Bold headers and unique layouts for creative roles.',
    features: ['Large typography', 'Custom color themes', 'Portfolio section'],
    color: 'bg-pink-50',
    accent: 'text-pink-600',
  },
  {
    id: 'ats',
    name: 'New York',
    category: 'ATS',
    score: 99,
    users: '3.1M+',
    description: 'Strictly optimized for Applicant Tracking Systems.',
    features: ['Single-column', 'Standard fonts', 'High parse rate'],
    color: 'bg-emerald-50',
    accent: 'text-emerald-600',
  },
  {
    id: 'modern-2',
    name: 'Toronto',
    category: 'Modern',
    score: 94,
    users: '950K+',
    description: 'Sleek and minimal with a focus on white space.',
    features: ['Minimalist design', 'Easy readability', 'Compact header'],
    color: 'bg-indigo-50',
    accent: 'text-indigo-600',
  },
  {
    id: 'creative-2',
    name: 'Tokyo',
    category: 'Creative',
    score: 96,
    users: '1.5M+',
    description: 'Vibrant and structured for standing out from the crowd.',
    features: ['Geometric elements', 'Timeline view', 'Skill tags'],
    color: 'bg-amber-50',
    accent: 'text-amber-600',
  }
];

export default function TemplatesPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTemplates = TEMPLATES.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Job-winning resume templates
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Each template is expertly designed and follows the exact "resume rules" hiring managers look for. Stand out and get hired faster.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Mockup Preview Area */}
              <div className={`${template.color} h-64 p-6 relative flex items-center justify-center border-b border-slate-100`}>
                <div className="w-3/4 h-5/6 bg-white shadow-sm rounded border border-black/5 p-4 flex flex-col gap-2 opacity-80 group-hover:opacity-100 transition-opacity">
                   <div className="w-1/2 h-3 bg-slate-200 rounded mb-2"></div>
                   <div className="w-1/3 h-2 bg-slate-100 rounded mb-4"></div>
                   <div className="w-full h-1 bg-slate-100 rounded"></div>
                   <div className="w-full h-1 bg-slate-100 rounded"></div>
                   <div className="w-4/5 h-1 bg-slate-100 rounded"></div>
                </div>
                
                {/* Hover Action */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Link
                    href={`/builder?template=${template.id}`}
                    className="bg-white text-slate-900 px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                  >
                    Use Template <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Template Details */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{template.name}</h3>
                    <span className={`text-sm font-medium ${template.accent}`}>
                      {template.category}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-bold mb-1">
                      <Star className="w-3 h-3 fill-current" />
                      {template.score}
                    </div>
                    <div className="flex items-center gap-1 text-slate-500 text-xs">
                      <Users className="w-3 h-3" />
                      {template.users}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-6 flex-1">
                  {template.description}
                </p>

                <div className="space-y-2 mb-6">
                  {template.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/builder?template=${template.id}`}
                  className="w-full text-center py-3 px-4 border border-slate-200 rounded-xl text-slate-700 font-medium hover:border-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Preview Template
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
