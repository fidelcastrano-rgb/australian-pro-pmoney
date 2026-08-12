import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="app-footer" className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-800 flex items-center justify-center bg-slate-900 shrink-0">
              <Image
                src="/logoo.webp"
                alt="Aus Prop Money Logo"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h4 className="text-white font-extrabold tracking-tight text-lg uppercase italic">AUS PROP MONEY</h4>
          </div>
          <p className="text-sm leading-relaxed max-w-sm text-slate-400">
            Providing high-fidelity, cinema-compliant Australian prop banknotes to movie productions, commercials, television studios, and safety instructors nationwide.
          </p>
        </div>
        <div>
          <h4 className="text-white font-extrabold tracking-tight text-sm uppercase mb-4">Quick Links</h4>
          <ul className="text-sm flex flex-col gap-2.5">
            <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
            <li><Link href="/#shop" className="hover:text-emerald-400 transition-colors">Prop Shop</Link></li>
            <li><Link href="/categories" className="hover:text-emerald-400 transition-colors">Categories</Link></li>
            <li><Link href="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold tracking-tight text-sm uppercase mb-4">Resources</h4>
          <ul className="text-sm flex flex-col gap-2.5">
            <li><Link href="/faq" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
            <li><Link href="/blog" className="hover:text-emerald-400 transition-colors">Blog</Link></li>
            <li><Link href="/gallery" className="hover:text-emerald-400 transition-colors">Video Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-extrabold tracking-tight text-sm uppercase mb-4 text-amber-500">Legal Disclaimer</h4>
          <p className="text-xs leading-relaxed text-slate-400">
            All prop items are strictly designed for cinema, media, and training purposes. It is a severe federal offense to attempt to pass prop banknotes as legal tender.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-10 border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Aus Prop Money. All Rights Reserved. Built for Cinematic Excellence.</p>
        <p className="mt-4 sm:mt-0">Compliance Code: APM-AUS-SPECIMEN-2026</p>
      </div>
    </footer>
  );
}
