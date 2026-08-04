"use client";

import React, { useState } from 'react';
import { Sparkles, Copy, Download, Loader2, FileText, Check } from 'lucide-react';

export default function CoverLetterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    jobTitle: '',
    company: '',
    jobDescription: '',
    tone: 'Professional'
  });
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    if (!formData.fullName || !formData.jobTitle || !formData.company) return;
    
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      const date = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
      const letter = `${formData.fullName}
[Your Address]
[Your Email] | [Your Phone]

${date}

Hiring Manager
${formData.company}

Dear Hiring Manager,

I am writing to express my strong interest in the ${formData.jobTitle} position at ${formData.company}. With a proven track record of success and a deep commitment to excellence, I am confident in my ability to make an immediate impact on your team.

${formData.jobDescription ? `Having reviewed the job description, I was particularly drawn to your focus on specific industry challenges. ` : ''}Throughout my career, I have consistently demonstrated an ability to navigate complex projects and deliver results that align with overarching business goals. My approach is characterized by a ${formData.tone.toLowerCase()} demeanor, enabling me to build strong relationships with stakeholders and foster a collaborative environment.

At my previous organization, I successfully spearheaded initiatives that resulted in measurable improvements in efficiency and performance. I am eager to bring this same level of dedication and strategic thinking to ${formData.company}. I admire your company's innovative approach and am excited about the opportunity to contribute to your continued success.

Thank you for considering my application. I have attached my resume for your review and look forward to the possibility of discussing how my skills and experiences align with the needs of ${formData.company}.

Sincerely,

${formData.fullName}`;

      setGeneratedLetter(letter);
      setIsGenerating(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLetter);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    // Basic implementation for downloading as text/simulated PDF
    const blob = new Blob([generatedLetter], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${formData.fullName.replace(/\s+/g, '_')}_Cover_Letter.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            AI Cover Letter Generator
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Create a highly tailored, professional cover letter in seconds. Just fill in the details below and let our AI do the heavy lifting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Job Details
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Job Title *</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Product Manager"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Tone</label>
                <select
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all bg-white"
                >
                  <option>Professional</option>
                  <option>Enthusiastic</option>
                  <option>Executive</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Job Description (Optional)</label>
                <textarea
                  name="jobDescription"
                  value={formData.jobDescription}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                  placeholder="Paste the job description here for a more tailored result..."
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating || !formData.fullName || !formData.jobTitle || !formData.company}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-medium py-3 rounded-xl transition-colors flex items-center justify-center gap-2 mt-4"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Cover Letter
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Preview Column */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <div className="bg-white rounded-t-2xl border border-slate-200 border-b-0 p-4 flex justify-between items-center bg-slate-100/50">
              <span className="font-medium text-slate-700">Preview</span>
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  disabled={!generatedLetter}
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5" />}
                </button>
                <button
                  onClick={handleDownload}
                  disabled={!generatedLetter}
                  className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors disabled:opacity-50"
                  title="Download"
                >
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-b-2xl border border-slate-200 flex-1 p-8 shadow-inner overflow-y-auto max-h-[800px]">
              {generatedLetter ? (
                <textarea
                  value={generatedLetter}
                  onChange={(e) => setGeneratedLetter(e.target.value)}
                  className="w-full h-full min-h-[500px] outline-none text-slate-800 leading-relaxed font-serif resize-none"
                />
              ) : (
                <div className="h-full min-h-[500px] flex flex-col items-center justify-center text-slate-400">
                  <FileText className="w-16 h-16 mb-4 opacity-20" />
                  <p>Your generated cover letter will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
