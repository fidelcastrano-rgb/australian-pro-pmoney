import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, Clock, Calendar, ShieldCheck, Landmark, RefreshCw, 
  Eye, CornerDownRight, TableProperties, AlertTriangle, ShieldAlert,
  Search, ScanLine, HelpCircle, CheckCircle2, History, Award, BookOpen
} from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fake Australian Money: Security, Verification & Reporting Guide | APM Blog',
  description: 'Understand the security features of Australian polymer banknotes, how to spot a fake fifty dollar note, and legal rules for replica play money in Australia.',
  alternates: {
    canonical: '/blog/fake-australian-money',
  }
};

export default function FakeAustralianMoneyPage() {
  return (
    <div id="fake-australian-money-guide-article" className="bg-slate-50 min-h-screen text-slate-800 pb-20">
      
      {/* Article Navigation / Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-6 pt-8">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-emerald-600 transition-colors uppercase tracking-wider group"
          id="back-to-blog-btn"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Blog Press</span>
        </Link>
      </div>

      {/* Main Content Area */}
      <article className="max-w-4xl mx-auto px-6 mt-6">
        
        {/* Editorial Header */}
        <header className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-200 rounded text-[10px] font-black uppercase tracking-widest select-none">
              Australian Currency Standards
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400 font-mono text-xs font-bold">Regulatory Bulletin</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 uppercase italic leading-tight mb-6">
            Fake Australian Money: Detection, Legal Replicas & RBA/AFP Compliance
          </h1>

          <div className="flex flex-wrap items-center gap-6 border-y border-slate-200 py-4 text-xs font-bold text-slate-500 font-mono">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-300 font-black text-xs">
                AU
              </div>
              <div>
                <p className="text-slate-800">APM Compliance Team</p>
                <p className="text-slate-400 text-[10px]">Currency & Legal Operations</p>
              </div>
            </div>
            
            <div className="hidden sm:block h-6 w-px bg-slate-200"></div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>Published: July 5, 2026</span>
            </div>

            <div className="hidden sm:block h-6 w-px bg-slate-200"></div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span>Read Time: 9 min read</span>
            </div>
          </div>
        </header>

        {/* Hero Banner (Generated Image 1) */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-10 shadow-lg border border-slate-200" id="hero-banner-polymer">
          <Image
            src="/australian_polymer_note.jpg"
            alt="Stylized modern Australian polymer currency notes showing advanced security features"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 sm:p-6 text-white">
            <span className="text-[10px] sm:text-xs font-bold text-emerald-300 uppercase tracking-widest bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-800 inline-block mb-1.5">
              Visual Reference
            </span>
            <p className="text-xs sm:text-sm font-medium text-slate-100">
              Modern Australian banknotes feature advanced optical effects, clear windows, and polymer substrates designed to maximize public security.
            </p>
          </div>
        </div>

        {/* Editorial Body */}
        <div className="prose prose-slate max-w-none text-slate-600 text-sm sm:text-base leading-relaxed space-y-6">
          
          <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <strong>Fake Australian money</strong> is a real risk for communities and businesses, as counterfeiters try to exploit the trust people place in cash and the advanced design of the Australian polymer banknotes. To protect yourself and your business, you need to understand the security features of the Next Generation Banknote series, how to spot a fake fifty-dollar note, what the law says about replica play money, and exactly how to report suspicious currency to police in Australia.
          </p>

          {/* Quick Jump Index Card */}
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-5 my-6 select-none" id="table-of-contents-box">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <TableProperties className="w-4 h-4 text-emerald-600" />
              Inside This Guide
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-600">
              <li className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <a href="#polymer-series">Understanding the Next Generation polymer Banknotes</a>
              </li>
              <li className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <a href="#spotting-fifty">How to Spot a Fake Fifty Dollar Note</a>
              </li>
              <li className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <a href="#legal-replica">Legal Rules for Replica & Play Money in Australia</a>
              </li>
              <li className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <a href="#reporting-guide">Guide for Business Owners Reporting Suspicious Currency</a>
              </li>
              <li className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                <span className="text-emerald-500 font-bold">&bull;</span>
                <a href="#prevention-tips">Community-Focused Prevention and Everyday Tips</a>
              </li>
            </ul>
          </div>

          {/* Section 1: Next Gen Polymer */}
          <h2 id="polymer-series" className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight pt-6 border-t border-slate-100 uppercase italic flex items-center gap-2">
            <History className="w-5 h-5 text-emerald-600" />
            Understanding The Next Generation Polymer Banknotes
          </h2>
          <p>
            The Reserve Bank of Australia developed the Next Generation Banknote series to keep Australian money secure while retaining familiar colours, people, portraits, and denominations, so everyday users can still recognise their notes easily. The series introduces more advanced security features built into a polymer substrate that is harder to counterfeit than traditional paper.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 uppercase flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Core Design Principles
          </h3>
          <p>
            The Next Generation Banknote upgrade program had two main goals:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>
              <strong>Maintain public confidence:</strong> Ensure Australian banknotes remain a secure, reliable method of payment and an unquestionable store of wealth.
            </li>
            <li>
              <strong>Cultural representation:</strong> Integrate complex security features into banknote designs that reflect Australian cultural identity and environment.
            </li>
          </ul>
          <p>
            The result is a series of notes that feel different to ordinary paper but remain intuitive to use with consistent colours, sizes, and prominent portraits across denominations.
          </p>

          {/* Callout box for simple rule */}
          <div className="bg-emerald-55 border-l-4 border-emerald-500 p-5 rounded-r-xl my-6">
            <h4 className="font-extrabold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              Simple rule for the public
            </h4>
            <ul className="text-xs sm:text-sm font-semibold text-slate-700 space-y-1">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">&bull;</span> Feel the note's texture and thickness.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">&bull;</span> Look at it against a bright light source.
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">&bull;</span> Tilt it and inspect the dynamic holographic windows.
              </li>
            </ul>
            <p className="text-[11px] text-slate-500 mt-2 font-mono italic">
              If anything feels wrong, treat the note as highly suspicious and follow reporting steps immediately.
            </p>
          </div>

          {/* Structured Table: Security Features */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm my-8 select-none" id="polymer-features-table">
            <div className="bg-slate-900 text-white p-4">
              <h3 className="font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                <TableProperties className="w-4 h-4" />
                Key Security Features Across Next Generation Series
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                    <th className="p-3 uppercase w-[25%]">Security Feature</th>
                    <th className="p-3 uppercase w-[45%]">What you should check</th>
                    <th className="p-3 uppercase w-[30%]">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600 bg-white">
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Polymer substrate</td>
                    <td className="p-3">Note feels like plastic (not normal paper) and springs back to shape after being scrunched.</td>
                    <td className="p-3 text-slate-500">Allows advanced security printing and is extremely hard to tear.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Clear top-to-bottom window</td>
                    <td className="p-3">Window passes from one edge of note to the other and is fully integrated (not glued on).</td>
                    <td className="p-3 text-slate-500">Extremely difficult for amateur counterfeiters using paper or simple plastics.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Rolling colour effect</td>
                    <td className="p-3">Tilting the note reveals color that rolls or shifts across a patch and within a native bird image.</td>
                    <td className="p-3 text-slate-500">Optically variable inks produce movement and colour changes hard to duplicate.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Three-dimensional image</td>
                    <td className="p-3">Tilt to see a 3D building image with a colourful border that appears raised or recessed.</td>
                    <td className="p-3 text-slate-500">Complex optical designs are technically demanding for counterfeiters.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Flying bird and colourful bird</td>
                    <td className="p-3">Bird in the window moves its wings and changes colour when you tilt the note.</td>
                    <td className="p-3 text-slate-500">Animated elements are very difficult to reproduce with domestic printers.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Intaglio raised print</td>
                    <td className="p-3">Dark printing on portraits, numerals, and key elements feels raised under your fingertips.</td>
                    <td className="p-3 text-slate-500">Gives a distinct tactile feel that is a hallmark of genuine notes.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-slate-900">Microprinting</td>
                    <td className="p-3">Tiny words near portraits and borders appear exceptionally sharp and clear under magnification.</td>
                    <td className="p-3 text-slate-500">Low-quality counterfeits display blurry, illegible lines or solid dark blobs.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 2: Spotting Fake $50 */}
          <h2 id="spotting-fifty" className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight pt-6 border-t border-slate-100 uppercase italic flex items-center gap-2">
            <Search className="w-5 h-5 text-emerald-600" />
            How To Spot A Fake Fifty Dollar Note
          </h2>
          <p>
            The fifty-dollar note is one of the most commonly used Australian denominations and has historically been a frequent target for counterfeiters. Knowing its specific security cues helps you spot fake Australian money quickly.
          </p>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 uppercase">Visual Profile of the Genuine Fifty</h3>
          <p>
            A genuine Next Generation fifty note has a clear polymer feel with a yellow dominant colour, portrait of David Unaipon on one side and Edith Cowan on the other, plus recognisable Australian imagery and the top-to-bottom window.
          </p>

          {/* Detail Image (Generated Image 2) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 my-6 items-center">
            <div className="md:col-span-2 relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200">
              <Image
                src="/security_feature_check.jpg"
                alt="Checking security features of high-security currency under backlight inspection"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-extrabold text-slate-900 text-sm uppercase">Verification Checklist for a $50 Note:</h4>
              <ul className="text-xs text-slate-600 space-y-2 list-none pl-0">
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Feel the polymer:</strong> Real polymer fifties are crisp and return to flat when scrunched, whereas fakes remain bent or crumpled.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Examine the Embossed Window:</strong> Look for the small window containing an embossed number "50" with light and dark effects that does not scratch off easily.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Observe the Bird:</strong> In the central window, the Australian bird (Black Swan) should move its wings and change colours fluidly.</span>
                </li>
                <li className="flex gap-2 items-start">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Backlight Features:</strong> Look for the see-through star registration device (diamonds aligning to form a 7-pointed star) and the shadow image of the Australian Coat of Arms.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 3: Legal Rules */}
          <h2 id="legal-replica" className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight pt-6 border-t border-slate-100 uppercase italic flex items-center gap-2">
            <Landmark className="w-5 h-5 text-emerald-600" />
            Legal Rules For Replica And Play Money In Australia
          </h2>
          <p>
            In Australia, the law takes a strict approach to anything that imitates Australian currency, even when marketed as replica or play money. The Australian Federal Police (AFP) explains that banknotes and coinage imitating Australian currency from any other source are considered counterfeit, including replicas and products made to resemble genuine currency.
          </p>

          <blockquote className="bg-slate-100 border-l-4 border-amber-500 p-6 rounded-r-xl italic my-6 select-none" id="afp-quote">
            <p className="text-slate-700 font-medium text-sm sm:text-base leading-relaxed mb-2">
              &ldquo;Banknotes and coinage imitating Australian currency from any other source are counterfeit. This includes replicas and other products that are made to resemble genuine Australian currency.&rdquo;
            </p>
            <cite className="text-xs font-bold text-slate-500 uppercase not-italic block mt-1">
              &mdash; Australian Federal Police (AFP) Currency Guidelines
            </cite>
          </blockquote>

          <p>
            For community members, filmmakers, and business owners, the legal position has critical practical implications:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm">
            <li>
              <strong>High Risk of Possession:</strong> Possessing or creating replica banknotes that look too similar to real notes can expose you to heavy criminal liability under the <em>Crimes (Currency) Act 1981</em>, even if used for film, theatre, or harmless novelty play.
            </li>
            <li>
              <strong>Design Requirements:</strong> Authentic prop money manufacturers must implement dramatic, non-reversible changes, such as modifying colors, sizes, using fictional portraits, or printing giant "SPECIMEN" or "PLAY MONEY" headers to avoid legal issues.
            </li>
          </ul>

          {/* Section 4: Reporting Guide */}
          <h2 id="reporting-guide" className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight pt-6 border-t border-slate-100 uppercase italic flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-emerald-600 animate-pulse" />
            Step-By-Step Guide For Business Owners Reporting Suspicious Currency
          </h2>
          <p>
            As a business owner, you are on the front line of counterfeit detection, and you have a clear responsibility to handle suspect banknotes correctly. The Reserve Bank of Australia and the AFP outline a clear national guidelines summarized as: 
          </p>
          <div className="text-center py-6 px-4 bg-slate-900 text-emerald-400 rounded-xl my-6 border border-slate-800" id="store-note-report-banner">
            <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-1">Official Protocol</p>
            <p className="text-2xl sm:text-3xl font-black uppercase tracking-wider italic">
              "STORE IT • NOTE IT • REPORT IT"
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4 items-start bg-white p-5 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase">Refuse or Accept Safely</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  If you suspect a note during a transaction, and it is safe to do so, you have the legal right to refuse it. Explain calmly to the customer that the note looks suspicious and ask for alternative payment. Do not escalate or create confrontation.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-5 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase">Store the Note Securely</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Handle the suspicious note as little as possible. Place it immediately in an envelope or transparent protective sleeve to protect any forensic fingerprints or physical evidence. Do not write, fold, or staple the banknote.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-5 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase">Note Transaction Details</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Record all key transaction information: date, exact time, denomination, register ID, physical descriptions of the presenter, and any vehicle details if visible. Use the AFP's official <em>Suspect Banknote Submission Form</em>.
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start bg-white p-5 rounded-xl border border-slate-200">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">4</div>
              <div>
                <h4 className="font-bold text-slate-900 text-sm sm:text-base uppercase">Report Immediately to Police</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Contact your local state or territory police station and hand over the envelope containing the suspicious notes along with the completed submission form. Police will determine if it requires specialized forensic investigation.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Community-Focused Prevention */}
          <h2 id="prevention-tips" className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight pt-6 border-t border-slate-100 uppercase italic flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            Community-Focused Prevention And Everyday Tips
          </h2>
          <p>
            Australian communities, hospitality staff, and retail cash workers all play a role in preventing the circulation of fake currency. Simple habits like taking an extra second to inspect the transparent bird or feeling the texture when accepting high-value $50 and $100 notes are incredibly effective.
          </p>
          <p>
            Additionally, the Next Generation series has robust tactile markers (raised dots) specifically designed to help vision-impaired users distinguish between different banknotes, ensuring security is inclusive and reliable for all citizens.
          </p>

          <div className="bg-amber-50 border border-amber-200 text-amber-950 rounded-xl p-4 flex gap-3 text-xs leading-relaxed">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5 animate-pulse" />
            <span>
              <strong>Warning:</strong> Never attempt to spend or pass on a note once you suspect it is fake. Handing fake currency to another business is a criminal offense under federal law. Take it to a bank or police officer as soon as possible.
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-4 uppercase">Conclusion</h3>
          <p>
            Protecting the integrity of the Australian dollar is a collective responsibility. By combining advanced polymer banknote engineering with public vigilance and proper business reporting protocols, we can significantly reduce the risk of financial loss and maintain high trust in our economic transactions.
          </p>

        </div>

        {/* CTA Section connecting to the Ecommerce packs */}
        <section className="bg-slate-900 text-white rounded-2xl border border-slate-800 p-8 mt-16 text-center relative overflow-hidden shadow-xl select-none" id="fake-australian-money-cta">
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full inline-block mb-3">
              Official Media Prop Guidelines
            </span>
            <h3 className="text-2xl font-black uppercase italic tracking-tight text-white mb-3">
              Need Cinema-Approved Australian Play Money?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed mb-6">
              Our professional-grade film props satisfy all federal rules while capturing stunning visual fidelity under 8K. Buy safely directly from Australia's leading press shop.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/#shop" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded-lg transition-colors border border-emerald-700 shadow-md"
                id="cta-browse-btn"
              >
                Browse Banknote Packs
              </Link>
              <Link 
                href="/blog/can-you-buy-prop-money" 
                className="bg-slate-950 hover:bg-slate-850 text-white font-bold text-xs tracking-widest uppercase py-3.5 px-8 rounded-lg transition-colors border border-slate-800"
                id="cta-legal-btn"
              >
                Legal Compliance Guide
              </Link>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}
