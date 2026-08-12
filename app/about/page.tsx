import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Printer, Flame, CheckCircle, Scale } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - The Master Money Printer | Australian Prop Money',
  description: 'Pioneering the next generation of cinematic currency replication. Driven by precision engineering, tactile perfection, and unwavering fidelity.',
  alternates: {
    canonical: '/about',
  }
};

export default function AboutPage() {
  return (
    <div id="about-page" className="bg-slate-50 min-h-screen text-slate-800">
      {/* Hero Header */}
      <section className="relative bg-slate-950 text-white py-24 px-6 md:px-10 overflow-hidden select-none">
        <div className="absolute inset-0 z-0 opacity-20">
          <Image
            src="/heero.jpg"
            alt="Master Printer Workshop"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
        
        <div className="relative max-w-4xl mx-auto text-center z-20">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Certified Master Craftsmanship
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 uppercase italic text-white">
            The Master Money Printer
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Pioneering the next generation of cinematic currency replication. Driven by precision engineering, tactile perfection, and unwavering fidelity.
          </p>
        </div>
      </section>

      {/* Legacy and Craft Section */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6 uppercase italic">
              A Legacy of Certified Replication
            </h2>
            <div className="w-16 h-1 bg-amber-500 mb-8 rounded-full"></div>
            <div className="text-slate-600 space-y-6 text-sm leading-relaxed">
              <p>
                Aus Prop Money is a world-class specialized press facility certified in the production of high-fidelity theatrical currency. We operate under a dedicated standard of visual and tactile engineering, supplying premier film studios, television networks, stage plays, commercial productions, and financial training institutions across Australia and globally.
              </p>
              <p>
                Unlike generic novelty prints that are easily spotted on high-definition cameras, our banknotes are meticulously created by professional money printing specialists. We have re-engineered the tactile feel, color accuracy, and micro-embossing found in modern Australian polymer notes, delivering products that perform seamlessly under scrutiny.
              </p>
              <p>
                Every stack, bundle, and note that leaves our facility is individually inspected by master printsmiths. We balance the finest raw materials with state-of-the-art lithographic machinery to guarantee a premium product that satisfies the rigorous demands of 8K cinematic capture.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
            <h3 className="font-extrabold text-xl mb-6 text-amber-500 uppercase tracking-tight italic">
              Our Core Guarantees
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">1:1 Exact Size Replication</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Every prop banknote features the exact physical dimensions of genuine currency, ensuring authentic handling in-hand and on camera.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">Pen & Machine Test Compliance</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Incorporates specialized material markings and holograms designed to satisfy standard detector pens and automatic count machines.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-100">8K Cinematic Texture</h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Printed using premium offset lithography on high-grade custom substrate mimicking next-gen Australian polymer weight and rigidity.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Production & Printing Technology */}
      <section className="bg-slate-900 text-white py-20 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
              The Technology
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase italic text-white">
              Advanced Press Engineering
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm mt-6 leading-relaxed">
              We employ professional commercial printing equipment and custom-formulated inks to achieve unparalleled replication quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6 border border-amber-500/20">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg mb-3 uppercase tracking-tight">Offset Lithography</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Utilizing high-end chemical plates rather than digital spray printing. This process ensures deep ink absorption, razor-sharp edge transitions, and rich color accuracy.
              </p>
            </div>

            <div className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg mb-3 uppercase tracking-tight">Prismatic Holograms</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Recreating the intricate, light-shifting visual elements of modern bills. Our notes feature high-fidelity holographic strips that shimmer under camera lights, passing visual inspection effortlessly.
              </p>
            </div>

            <div className="bg-slate-950/50 p-8 rounded-2xl border border-slate-800">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 border border-blue-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-extrabold text-lg mb-3 uppercase tracking-tight">Tactile Rigidity</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                Our secret paper-polymer blend replicates the strict snap, flex, and structural weight of genuine banknotes, creating satisfying kinetic feedback for actors during scenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Compliance CTA */}
      <section className="py-20 bg-slate-50 text-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Scale className="w-12 h-12 text-slate-900 mx-auto mb-6" />
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase italic tracking-tight mb-4">
            Professional & Lawful Operation
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto leading-relaxed mb-8">
            As a certified printer, we pride ourselves on delivering standard-setting cinema replicas that serve artists while maintaining strict alignment with federal statutes and currency reproduction guidelines.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/#shop" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-colors border border-emerald-700 shadow-md"
            >
              Explore Shop
            </Link>
            <Link 
              href="/contact" 
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-colors border border-slate-950"
            >
              Contact Press Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
