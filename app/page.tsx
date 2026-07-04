import React from "react";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { ShieldCheck, Scale, Award, Eye, Film, Sparkles, CheckCircle2, Truck, Video, BookOpen, Music, Theater } from "lucide-react";

export default function Home() {
  return (
    <div id="homepage" className="bg-slate-50">
      <Hero />
      <ProductGrid />

      {/* Brand Overview & Introduction */}
      <section id="brand-overview" className="py-20 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full inline-block mb-4">
                High-Quality Prop Money Australia Supplier
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 uppercase italic">
                Australian Prop Money
              </h2>
              <div className="w-16 h-1 bg-amber-500 mb-8 rounded-full"></div>
              <div className="text-slate-600 space-y-5 text-sm leading-relaxed">
                <p>
                  Looking for Australian prop money that looks realistic, professional, and perfect for film, photography, training, or entertainment use? We provide premium-grade prop money Australia customers trust for high-quality visual production and creative projects.
                </p>
                <p>
                  Our AU prop money is designed to closely resemble real currency while remaining clearly marked as a prop, making it ideal for safe and legal use in productions, educational demonstrations, and stage performances.
                </p>
                <p>
                  Whether you need bulk orders or small sets, we are your reliable source for prop money designed for realism, consistency, and professional presentation. We make it easy to order, with fast processing and secure packaging to ensure your items arrive safely.
                </p>
              </div>
            </div>
            
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <h3 className="font-extrabold text-xl mb-6 text-amber-500 uppercase tracking-tight italic">
                Trusted Source for Prop Money
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                We are a trusted supplier of prop money for creators, studios, photographers, and production teams. Our goal is to provide realistic-looking currency props that help bring your creative vision to life.
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                From small creative projects to large-scale productions, our prop money is used across Australia and internationally by professionals who demand quality and uncompromising compliance standards.
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center text-emerald-500 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-100 text-xs">Fast & Secure Delivery</h4>
                  <p className="text-slate-400 text-[10px] mt-0.5">Discrete weatherproof shipping direct to your production site.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Prop Money Australia for Professional Use */}
      <section id="professional-use" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
              Versatile Production Applications
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase italic text-slate-900">
              Premium Prop Money Australia for Professional Use
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-600 max-w-2xl mx-auto text-sm mt-6 leading-relaxed">
              We specialize in supplying prop money Australia creators and industry professionals rely on for diverse high-fidelity media, performance, and training needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Film className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Film & TV Scenes</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Authentic-looking currency prop layers for high-definition dramatic captures and scene staging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Music & Photos</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Enhance visual storytelling and production value in music videos, photoshoots, and editorial content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Theater className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Stage & Theatre</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Durable props designed to handle and throw smoothly during live theatrical performances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Training Demo</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Ideal for educational demonstrations, banking machine calibrations, and professional training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-xs uppercase mb-2">Social Creation</h4>
              <p className="text-slate-500 text-[11px] leading-relaxed">
                Aesthetic prop currency layers perfectly optimized to look convincing for standard online content creators.
              </p>
            </div>
          </div>
          
          <p className="text-center text-slate-500 text-xs mt-10 max-w-2xl mx-auto leading-relaxed">
            Every note is crafted with attention to detail, ensuring your production looks authentic on camera while still being safe and fully authorized for use as prop material.
          </p>
        </div>
      </section>

      {/* Why Choose Our AU Prop Money */}
      <section id="why-choose-us" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
              Unrivaled Quality
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight uppercase italic text-white">
              Why Choose Our AU Prop Money?
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm mt-6 leading-relaxed">
              Our AU prop money stands out because of its realistic design and production quality. We focus on delivering props that enhance visual storytelling without compromising safety or compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="font-bold text-slate-100 text-xs uppercase mb-2">High Resolution</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Stunning high-resolution offset print quality that holds up beautifully on standard 8K cinematic lenses.
              </p>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="font-bold text-slate-100 text-xs uppercase mb-2">Realistic Texture</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Tactile weight, rigidity, and color accuracy formulated to mimic physical polymer and paper bills.
              </p>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="font-bold text-slate-100 text-xs uppercase mb-2">Denominations</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Multiple denominations available spanning next-generation series and classical historical prints.
              </p>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="font-bold text-slate-100 text-xs uppercase mb-2">Durable Material</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Durable material suitable for repeated handling, theatrical throws, and multiple shoot schedules.
              </p>
            </div>

            <div className="bg-slate-950/60 p-6 rounded-xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-500 mb-4" />
              <h4 className="font-bold text-slate-100 text-xs uppercase mb-2">Legal Compliance</h4>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Clearly marked as a copy or cinematic prop to remain in strict alignment with federal reproduction policies.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-300 text-xs italic">
              When you need convincing prop money, quality matters—and we make sure every detail counts.
            </p>
          </div>
        </div>
      </section>

      {/* Order Prop Money Australia Today Call to Action */}
      <section id="order-today-cta" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-emerald-600 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
            Get Started
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 uppercase italic tracking-tight mb-4">
            Order Prop Money Australia Today
          </h2>
          <p className="text-slate-600 text-xs max-w-xl mx-auto leading-relaxed mb-8">
            If you are searching for reliable prop money Australia, you are in the right place. Select the perfect denominations, bundle sizes, and series of replica banknotes below to elevate the realism of your next creative endeavor.
          </p>
          <a
            href="#shop"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase py-3.5 px-8 rounded-lg transition-colors border border-emerald-700 shadow-md"
          >
            Explore Banknote Shop
          </a>
        </div>
      </section>

      {/* Compliance / Legal section */}
      <section id="compliance" className="py-20 bg-white select-none">
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
