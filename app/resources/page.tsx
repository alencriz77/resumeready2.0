"use client";

import React, { useState } from 'react';
import { Search, Clock, BookOpen, X, ChevronRight, Tag } from 'lucide-react';

const CATEGORIES = ['All', 'Resume Guides', 'Interview Tips', 'Salary Negotiation', 'ATS Secrets'];

const ARTICLES = [
  {
    id: 1,
    title: 'How to Write a Resume That Beats the ATS',
    category: 'ATS Secrets',
    readTime: '5 min read',
    snippet: 'Applicant Tracking Systems reject 75% of resumes before a human ever sees them. Learn the exact formatting rules to pass the filters.',
    content: 'Full article content would go here. We discuss standard fonts, avoiding tables, exact keyword matching, and more in-depth strategies to ensure your resume parses correctly in Workday, Greenhouse, and Lever.',
    imageColor: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    id: 2,
    title: 'The STAR Method: Ace Your Behavioral Interview',
    category: 'Interview Tips',
    readTime: '8 min read',
    snippet: 'Master the Situation, Task, Action, Result framework to provide compelling, structured answers to behavioral questions.',
    content: 'Behavioral interviews require structured storytelling. The STAR method gives you a repeatable framework. Start by setting the scene (Situation), describe your responsibility (Task), explain exactly what YOU did (Action), and quantify the outcome (Result).',
    imageColor: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'How to Negotiate a 20% Higher Starting Salary',
    category: 'Salary Negotiation',
    readTime: '6 min read',
    snippet: 'Never accept the first offer. Discover the exact scripts and timing needed to negotiate your total compensation package effectively.',
    content: 'Negotiation is expected in professional roles. Delay salary talk until you have an offer. Research market rates on Levels.fyi or Glassdoor. When the offer comes, express enthusiasm but ask for time to review. Counter with a well-researched number 10-20% higher, focusing on the value you bring.',
    imageColor: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 4,
    title: 'Resume Summary vs. Objective: Which Do You Need?',
    category: 'Resume Guides',
    readTime: '4 min read',
    snippet: 'Resume objectives are outdated. Learn how to write a powerful professional summary that hooks the recruiter in 6 seconds.',
    content: 'An objective tells the company what YOU want. A summary tells the company what YOU CAN DO for them. Replace your objective with a 3-line summary highlighting your years of experience, top 2 achievements, and key skills relevant to the role.',
    imageColor: 'bg-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    id: 5,
    title: 'Tailoring Your Resume for Career Changers',
    category: 'Resume Guides',
    readTime: '7 min read',
    snippet: 'Switching industries? Learn how to highlight transferable skills and use a hybrid resume format to bridge the gap.',
    content: 'When changing careers, chronological resumes can highlight gaps in relevant experience. Use a hybrid format that groups achievements by skill (e.g., Project Management, Data Analysis) rather than strictly by job title. Focus heavily on transferable skills.',
    imageColor: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    id: 6,
    title: 'Top 10 Questions to Ask at the End of an Interview',
    category: 'Interview Tips',
    readTime: '5 min read',
    snippet: 'When the interviewer asks "Do you have any questions for me?", never say no. Here are the best questions to ask to show engagement.',
    content: 'Always have 3-5 questions prepared. Good examples: "What does success look like in this role in the first 90 days?", "How would you describe the team dynamic?", or "What is the biggest challenge the team is currently facing?". This shows you are actively evaluating if the company is a good fit for you.',
    imageColor: 'bg-cyan-100',
    iconColor: 'text-cyan-600',
  }
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES[0] | null>(null);

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Career Resource Hub
          </h1>
          <p className="text-xl text-slate-600 mb-10">
            Expert advice, guides, and insider tips to help you land your dream job faster.
          </p>

          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-11 pr-4 py-3.5 border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-0 focus:border-blue-600 transition-colors shadow-sm"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-slate-800 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Article Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div 
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col h-full"
              >
                <div className={`${article.imageColor} h-48 w-full flex items-center justify-center p-6 relative overflow-hidden`}>
                  <BookOpen className={`w-16 h-16 ${article.iconColor} opacity-50 group-hover:scale-110 transition-transform duration-500`} />
                </div>
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {article.category}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 flex-1 line-clamp-3">
                    {article.snippet}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm mt-auto">
                    Read Article <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-500">
            No articles found matching your criteria.
          </div>
        )}
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className={`${selectedArticle.imageColor} h-64 w-full flex items-center justify-center`}>
               <BookOpen className={`w-24 h-24 ${selectedArticle.iconColor} opacity-50`} />
            </div>

            <div className="p-8 sm:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {selectedArticle.readTime}
                </span>
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {selectedArticle.title}
              </h2>
              
              <div className="prose prose-slate max-w-none text-lg">
                <p className="lead text-slate-600 font-medium mb-6">
                  {selectedArticle.snippet}
                </p>
                <div className="text-slate-800 space-y-4">
                  <p>{selectedArticle.content}</p>
                  <p>Check back later for more in-depth content on this topic. In the meantime, use our builder to implement these strategies directly into your resume.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
