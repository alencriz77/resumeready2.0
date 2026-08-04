"use client";

import Link from "next/link";
import { FileText, ArrowRight, Github, Mail, ShieldCheck } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <Link href="/" className="inline-flex items-center gap-2 text-2xl font-extrabold text-slate-900 tracking-tight">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
            <FileText className="h-5 w-5" />
          </div>
          <span>
            resume<span className="text-blue-600 font-extrabold">.org</span>
          </span>
        </Link>

        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Sign in to your account
        </h2>
        <p className="text-sm text-slate-600">
          Or{" "}
          <Link href="/builder" className="font-bold text-blue-600 hover:text-blue-500">
            start building your free resume →
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl border border-slate-200 sm:rounded-2xl sm:px-10 space-y-6">
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-600 font-medium cursor-pointer">
                <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                Remember me
              </label>
              <a href="#" className="font-bold text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <Link href="/builder">
              <button className="w-full mt-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 shadow-md shadow-blue-500/20 active:scale-95 transition-all">
                Sign In
              </button>
            </Link>
          </div>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400 font-semibold">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => alert("Google Login Simulation")}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <Mail className="h-4 w-4 text-red-500" /> Google
            </button>
            <button
              onClick={() => alert("GitHub Login Simulation")}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100"
            >
              <Github className="h-4 w-4 text-slate-900" /> GitHub
            </button>
          </div>

          <div className="text-center pt-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 font-semibold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
              <ShieldCheck className="h-3.5 w-3.5" /> 100% Free Resume Builder Guarantee
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
