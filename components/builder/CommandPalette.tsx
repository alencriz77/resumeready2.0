"use client";

import React, { useState, useEffect } from "react";
import { Search, Sparkles, FileText, LayoutTemplate, Briefcase, Download, Zap, X } from "lucide-react";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onAction: (action: string) => void;
}

export default function CommandPalette({ isOpen, onClose, onAction }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onAction("open-palette"); // We might need to handle this via parent
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onAction]);

  if (!isOpen) return null;

  const actions = [
    { id: "ai-enhance", title: "AI Enhance Active Bullet", icon: <Sparkles className="h-4 w-4 text-purple-500" /> },
    { id: "ats-check", title: "Run ATS Score Check", icon: <FileText className="h-4 w-4 text-emerald-500" /> },
    { id: "switch-modern", title: "Switch to Modern Template", icon: <LayoutTemplate className="h-4 w-4 text-blue-500" /> },
    { id: "switch-executive", title: "Switch to Executive Template", icon: <Briefcase className="h-4 w-4 text-slate-700" /> },
    { id: "export-pdf", title: "Export ATS PDF", icon: <Download className="h-4 w-4 text-red-500" /> },
    { id: "load-demo", title: "Load Demo Data", icon: <Zap className="h-4 w-4 text-amber-500" /> },
  ];

  const filteredActions = actions.filter(a => a.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-slate-900/20 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden flex flex-col text-slate-900 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center px-4 py-3 border-b border-slate-100">
          <Search className="h-5 w-5 text-slate-400 mr-3" />
          <input
            autoFocus
            type="text"
            className="flex-1 bg-transparent border-none outline-none text-sm placeholder:text-slate-400"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-100 text-slate-400">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        <div className="max-h-[300px] overflow-y-auto p-2">
          {filteredActions.length === 0 ? (
            <div className="py-6 text-center text-sm text-slate-500">
              No results found.
            </div>
          ) : (
            filteredActions.map((action, i) => (
              <button
                key={action.id}
                onClick={() => {
                  onAction(action.id);
                  onClose();
                }}
                className="w-full flex items-center px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors text-left text-sm font-medium"
              >
                <div className="mr-3 h-6 w-6 rounded-md bg-white border border-slate-100 shadow-sm flex items-center justify-center">
                  {action.icon}
                </div>
                {action.title}
              </button>
            ))
          )}
        </div>
        
        <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-medium text-slate-500">
          <div>Use <kbd className="font-mono bg-white border border-slate-200 rounded px-1 py-0.5 mx-1 shadow-sm">↑</kbd> <kbd className="font-mono bg-white border border-slate-200 rounded px-1 py-0.5 shadow-sm">↓</kbd> to navigate</div>
          <div><kbd className="font-mono bg-white border border-slate-200 rounded px-1 py-0.5 shadow-sm">Enter</kbd> to select</div>
        </div>
      </div>
    </div>
  );
}
