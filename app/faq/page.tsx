import React from "react";
import Link from "next/link";
import { HelpCircle, ArrowRight, MessageSquare, ShieldCheck, Landmark, Printer, Truck } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Australian Prop Money',
  description: 'Find technical details regarding compliance, printing quality, testing capabilities, and active production delivery options.',
  alternates: {
    canonical: '/faq',
  }
};

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Legality & Compliance",
      icon: <Landmark className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          q: "Are these replica banknotes legal to buy and own?",
          a: "Yes. Our high-fidelity replica prop banknotes are completely legal to buy, own, and use for theatrical performances, cinema production, marketing, training, and educational demonstrations. It is only illegal if you attempt to spend, deposit, or exchange them as real currency, which is a severe federal offense."
        },
        {
          q: "How do your notes remain lawful while being so realistic?",
          a: "We operate as a professional prop printing service. While our replicas maintain the exact 1:1 size of genuine bills and replicate all markings and holograms perfectly, they are printed on high-grade commercial prop paper that is distinct under microscopic lab testing. This ensures full artistic expression while remaining clearly classified as production-ready props."
        }
      ]
    },
    {
      title: "Quality & Testing Capabilities",
      icon: <Printer className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          q: "Do these notes pass detector pen tests?",
          a: "Yes. Our notes are manufactured using specialized, starch-free offset lithography paper-polymer substrate. Because of this, they pass standard iodine-based counterfeit detector pen tests, registering a golden pass color instead of turning black like low-quality printer paper."
        },
        {
          q: "Do they pass currency counting machine tests?",
          a: "Yes. Because our banknotes share the exact dimensions (1:1), correct weight distribution, and tactile rigidity of real notes, they flow smoothly through standard commercial currency counters and automatic banknote tellers without jamming or raising weight triggers."
        },
        {
          q: "What printing technology is used to print the money?",
          a: "We use professional offset lithography presses, industrial grade plates, and specialized micro-embossed holographic foil overlays. This is the same chemical-plate standard utilized in official currency presses, which prevents pixelation and produces perfect 8K resolution prints."
        }
      ]
    },
    {
      title: "Ordering & Logistics",
      icon: <Truck className="w-5 h-5 text-emerald-600" />,
      questions: [
        {
          q: "Is shipping discrete?",
          a: "Yes. We understand the confidentiality required in high-budget film sets and private events. All orders are packed in heavy-duty, unmarked weatherproof security mailers with zero external markings indicating the contents. The return name is simply listed under our parent logistics name."
        },
        {
          q: "Can I place custom requests (e.g., specific serial numbers, weathered bills)?",
          a: "Yes, we can perform custom press runs for large productions requiring specific sequences, blood stains, bullet holes, or realistic heavy weathering. Please contact our press office directly via the Contact page with your production specifications."
        },
        {
          q: "How fast can you ship for active production sets?",
          a: "We offer express overnight shipping within Australia and fast priority air-freight internationally. Orders placed before 1:00 PM AEST are processed and shipped the same business day."
        }
      ]
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(c => c.questions.map(q => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.a
      }
    })))
  };

  return (
    <div id="faq-page" className="bg-slate-50 min-h-screen text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16 px-6 md:px-10 text-center select-none">
        <div className="max-w-4xl mx-auto">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase italic">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            Find technical details regarding compliance, printing quality, testing capabilities, and active production delivery options below.
          </p>
        </div>
      </section>

      {/* Accordion / Content Area */}
      <section className="py-16 max-w-4xl mx-auto px-6 md:px-10">
        <div className="space-y-12">
          {faqCategories.map((category, index) => (
            <div key={index} id={`faq-category-${index}`} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center gap-3">
                {category.icon}
                <h2 className="font-extrabold text-base uppercase text-slate-900 tracking-tight">
                  {category.title}
                </h2>
              </div>
              <div className="divide-y divide-slate-100">
                {category.questions.map((item, qIdx) => (
                  <div key={qIdx} className="p-6">
                    <h3 className="font-bold text-sm text-slate-900 mb-2 flex items-start gap-2.5">
                      <span className="text-amber-500 font-bold">Q:</span>
                      <span>{item.q}</span>
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed pl-5">
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 text-center select-none">
          <HelpCircle className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h3 className="font-extrabold text-xl mb-2 uppercase tracking-tight italic">
            Still Have Technical Inquiries?
          </h3>
          <p className="text-slate-400 text-xs max-w-md mx-auto leading-relaxed mb-6">
            If you represent an institutional buyer, safety trainer, or media director with custom requirements, our master printers are here to assist.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs tracking-wider uppercase py-3 px-6 rounded-lg transition-colors border border-emerald-700"
          >
            <span>Message the Press Team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
