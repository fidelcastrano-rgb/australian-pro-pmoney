import React from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero-section" className="relative bg-slate-900 text-white overflow-hidden py-24 md:py-32">
      {/* Background Image / Gradient */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Image
          src="/heero.jpg"
          alt="Premium Prop Money Hero"
          fill
          priority
          className="object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-10 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full mb-6 inline-block">
            Professional Cinema Prop Banknotes
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 uppercase tracking-tight">
            Premium Replica <br />
            <span className="text-emerald-500 italic">Australian Money</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            High-fidelity, camera-optimized Australian prop banknote reproductions designed exclusively for motion pictures, television, theatrical productions, and commercial training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#shop"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-lg text-sm transition-colors text-center shadow-lg uppercase tracking-wider"
            >
              Shop Collections
            </Link>
            <Link 
              href="/categories"
              className="bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-3.5 rounded-lg text-sm transition-colors text-center uppercase tracking-wider"
            >
              Browse Categories
            </Link>
          </div>
        </div>

        {/* Legal and compliance mini card */}
        <div className="bg-slate-950/85 border border-slate-800 rounded-2xl p-8 backdrop-blur-md max-w-md mx-auto lg:ml-auto">
          <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
            Strict Legal Compliance
          </h3>
          <ul className="text-sm text-slate-400 flex flex-col gap-3.5">
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-500 mt-0.5">&bull;</span>
              <span>Replicas feature the exact size of genuine tender, complete markings, and premium holograms.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-500 mt-0.5">&bull;</span>
              <span>Offset lithography printing to ensure banknotes pass standard pen and machine tests effortlessly.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-emerald-500 mt-0.5">&bull;</span>
              <span>Optimized color grading and print density to ensure flawless realism on standard 8K digital cinema sensors.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
