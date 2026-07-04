import React from "react";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ShieldCheck, Scale, Award, Eye } from "lucide-react";

export default function Home() {
  return (
    <div id="homepage">
      <Hero />
      <ProductGrid />

      {/* Compliance / Legal section */}
      <section id="compliance" className="py-20 bg-white border-t border-b border-slate-100 select-none">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight uppercase italic">
              Legal Compliance & Specifications
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
              We operate under strict guidelines to ensure that our products can be safely used in media production without ever violating federal currency replication policies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div id="legal-feature-1" className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase mb-2">Legal Specifications</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Replicas feature the exact size of the genuine tender and all markings and holograms to pass pen test and machine test.
              </p>
            </div>

            {/* Feature 2 */}
            <div id="legal-feature-2" className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase mb-2">Camera Optimizations</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Color-graded to balance realism on screen. Specially adjusted contrast profiles ensure banknote details are fully legible under professional studio keylights and high-definition sensors.
              </p>
            </div>

            {/* Feature 3 */}
            <div id="legal-feature-3" className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase mb-2">Strict Disclaimers</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Our notes are printed on high-grade paper using offset lithography, mimicking the structural feel and visual fidelity required for 8K cinematic cameras.
              </p>
            </div>

            {/* Feature 4 */}
            <div id="legal-feature-4" className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm uppercase mb-2">Theatrical Quality</h3>
              <p className="text-slate-500 text-xs leading-relaxed">
                Crafted using high-resolution offset printing on commercial paper stacks, providing the ideal paper weight, rigidity, and tactile feedback required by professional performance actors.
              </p>
            </div>
          </div>

          <div id="legal-warnings-card" className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 text-center max-w-3xl mx-auto">
            <h4 className="font-bold text-amber-800 text-sm mb-2 uppercase">⚠️ IMPORTANT LEGAL WARNING ⚠️</h4>
            <p className="text-amber-950 text-xs leading-relaxed">
              These products are sold strictly for theatrical, promotional, educational, and safety training demonstrations. Attempting to deposit, spend, or exchange prop banknotes for real-world goods or services is a serious federal crime carrying substantial criminal penalties and jail time. Always handle prop money responsibly and in full compliance with the law.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
