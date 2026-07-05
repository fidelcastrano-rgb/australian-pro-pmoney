import React from "react";
import Link from "next/link";
import { ArrowLeft, Film, AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div id="not-found-view" className="py-20 bg-slate-50 min-h-[70vh] flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 md:p-10 shadow-lg text-center animate-in fade-in zoom-in-95 duration-300">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Film className="w-8 h-8 text-amber-600 animate-pulse" />
        </div>
        
        <span className="text-amber-600 font-bold text-xs uppercase tracking-widest mb-2 block">
          404 - Page Missing
        </span>
        
        <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase mb-4">
          Scene Not Found
        </h1>
        
        <p className="text-slate-500 text-xs leading-relaxed mb-6">
          The cinematic or compliance resource you are looking for does not exist, has been archived, or is undergoing federal replication standards audit.
        </p>

        {/* Advisory Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-8 text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <AlertTriangle className="w-4 h-4 text-slate-400" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Legal Compliance Advisory</span>
          </div>
          <span className="text-[10px] text-slate-500 block leading-relaxed">
            Please ensure you have entered the correct catalog URL. All movie prop orders must follow strict verification.
          </span>
        </div>

        {/* Action Button */}
        <Link
          href="/"
          className="w-full bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Catalogue
        </Link>
      </div>
    </div>
  );
}

