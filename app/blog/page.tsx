import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Clock, ArrowRight, ShieldCheck, Scale, AlertTriangle, Calendar } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Cinema Industry Guides | Australian Prop Money Blog',
  description: 'Read legal, technical, and practical guidelines for purchasing and utilizing movie prop banknotes safely on film sets and commercial media in Australia.',
  alternates: {
    canonical: '/blog',
  }
};

const blogPosts = [
  {
    slug: "can-you-buy-prop-money",
    title: "Can You Buy Prop Money? A Complete Legal and Practical Guide",
    excerpt: "Understand the strict federal regulations, legal boundaries, size requirements, and safety protocols for purchasing movie cash safely and legally for your production.",
    date: "July 5, 2026",
    readTime: "6 min read",
    category: "Legal & Compliance",
    categoryColor: "bg-amber-100 text-amber-800 border-amber-200",
    image: "/heero.jpg", // reuse existing hero image
  },
  {
    slug: "buy-australian-dollar",
    title: "Buy Australian Dollar: A Complete Exchange and Practical Travel Guide",
    excerpt: "Buying Australian dollars is a key step in preparing for travel, business, or investment in Australia. Learn how exchange rates work, role of RBA, and how to get the best deals.",
    date: "July 5, 2026",
    readTime: "8 min read",
    category: "Financial Strategy",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "/heero.jpg",
  },
  {
    slug: "fake-money",
    title: "Fake Money: History, Universal Security Checks & Global Prevention",
    excerpt: "Understand the historical evolution of fake money, universal currency detection security features, business training protocols, and international counterfeiting laws.",
    date: "July 5, 2026",
    readTime: "10 min read",
    category: "Security & History",
    categoryColor: "bg-rose-100 text-rose-800 border-rose-200",
    image: "/heero.jpg",
  },
  {
    slug: "counterfeit-money-australia",
    title: "Counterfeit Money Australia: Enterprise Risk, Polymer Science & Detection Equipment",
    excerpt: "Manage counterfeit money risk in Australia. Explore modern currency fraud trends, scientific polymer banknote engineering, and advanced UV detection equipment.",
    date: "July 5, 2026",
    readTime: "9 min read",
    category: "Corporate Risk & Strategy",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "/uv_counterfeit_detector.jpg",
  },
  {
    slug: "fake-australian-money",
    title: "Fake Australian Money: Detection, Legal Replicas & RBA/AFP Compliance",
    excerpt: "Understand the security features of Australian polymer banknotes, how to spot a fake fifty-dollar note, and the legal rules for play money in Australia.",
    date: "July 5, 2026",
    readTime: "9 min read",
    category: "Australian Currency Standards",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "/australian_polymer_note.jpg",
  },
  {
    slug: "tips-handling-prop-money-on-set",
    title: "5 Critical Protocols for Handling Fake Cash on Active Film Sets",
    excerpt: "Protect your cast, crew, and production company from legal liabilities and alarm. Learn how to secure, audit, and log prop currency during high-volume shoots.",
    date: "June 28, 2026",
    readTime: "4 min read",
    category: "On-Set Safety",
    categoryColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
    image: "/heero.jpg",
    isComingSoon: true,
  },
  {
    slug: "manufacturing-standards-high-fidelity-cash",
    title: "How High-Fidelity Theatrical Banknotes Pass the 8K Camera Test",
    excerpt: "An inside look at lithographic plate manufacturing, holographic shimmer strip alignment, and tactile substrate blending used to simulate real currency.",
    date: "June 15, 2026",
    readTime: "5 min read",
    category: "Production Design",
    categoryColor: "bg-blue-100 text-blue-800 border-blue-200",
    image: "/heero.jpg",
    isComingSoon: true,
  }
];

export default function BlogIndexPage() {
  return (
    <div id="blog-index-page" className="bg-slate-50 min-h-screen text-slate-800">
      {/* Blog Hero Header */}
      <section className="relative bg-slate-950 text-white py-20 px-6 md:px-10 overflow-hidden select-none">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image
            src="/heero.jpg"
            alt="Cinematic production studio lighting"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent z-10" />
        
        <div className="relative max-w-4xl mx-auto text-center z-20">
          <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1.5 rounded-full inline-block mb-4">
            Production & Compliance Resources
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-5 uppercase italic text-white">
            The Prop Press Blog
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Essential industry insights, legal guidelines, and mastercraft techniques for film directors, producers, and creators using prop currency in Australia.
          </p>
        </div>
      </section>

      {/* Featured Post Card */}
      <section className="py-12 max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-8 flex items-center justify-between border-b border-slate-200 pb-4">
          <h2 className="text-lg font-black uppercase italic tracking-wider text-slate-900 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Featured Article
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all hover:shadow-md">
          <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-auto min-h-[300px] bg-slate-100">
            <Image
              src="/heero.jpg"
              alt="Movie camera shooting a pile of currency"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-amber-500 text-slate-950 font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border border-amber-600/20 shadow-sm select-none">
              Highly Recommended Guide
            </div>
          </div>
          <div className="lg:col-span-5 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs text-slate-400 font-bold mb-4 font-mono select-none">
                <span className="px-2.5 py-0.5 rounded border text-[10px] bg-amber-50 text-amber-800 border-amber-200 uppercase">
                  Legal & Compliance
                </span>
                <span>•</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> July 5, 2026</span>
                <span>•</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6 min read</span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-950 leading-tight uppercase italic mb-4 hover:text-emerald-600 transition-colors">
                <Link href="/blog/can-you-buy-prop-money">
                  Can You Buy Prop Money? A Complete Legal and Practical Guide
                </Link>
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                The sight of flying cash, overflowing briefcases, and massive stacks of hundred dollar bills is a staple of modern media. But is it legally safe to purchase? Understand the exact guidelines laid out by the Secret Service and Counterfeit Detection Act.
              </p>
            </div>

            <div>
              <Link 
                href="/blog/can-you-buy-prop-money" 
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-lg transition-colors border-0"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Articles */}
      <section className="py-8 max-w-7xl mx-auto px-6 md:px-10 pb-24">
        <div className="mb-8 border-b border-slate-200 pb-4">
          <h2 className="text-lg font-black uppercase italic tracking-wider text-slate-900">
            More Articles & Updates
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            if (post.slug === "can-you-buy-prop-money") return null; // already featured
            
            return (
              <div 
                key={post.slug} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm transition-all hover:shadow-md"
              >
                <div>
                  <div className="relative h-48 bg-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {post.isComingSoon && (
                      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="bg-slate-900 border border-slate-800 text-amber-500 font-bold text-xs uppercase tracking-widest px-4 py-2 rounded-lg shadow-lg">
                          Coming Soon
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-bold mb-3 font-mono">
                      <span className={`px-2.5 py-0.5 rounded border text-[10px] uppercase ${post.categoryColor}`}>
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className={`font-black text-slate-900 leading-snug uppercase italic mb-3 text-base ${post.isComingSoon ? "opacity-70" : "hover:text-emerald-600 transition-colors"}`}>
                      {post.isComingSoon ? (
                        <span>{post.title}</span>
                      ) : (
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      )}
                    </h3>
                    
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                
                {!post.isComingSoon && (
                  <div className="px-6 pb-6 pt-0">
                    <Link 
                      href={`/blog/${post.slug}`} 
                      className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1.5"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Compliance Warning Footer Section */}
      <section className="bg-slate-900 text-white py-16 px-6 border-t border-slate-800 select-none">
        <div className="max-w-4xl mx-auto text-center">
          <Scale className="w-10 h-10 text-amber-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold uppercase italic tracking-tight text-slate-100 mb-2">
            Strict Legal Compliance Advisory
          </h3>
          <p className="text-slate-400 text-xs max-w-2xl mx-auto leading-relaxed">
            Australian currency reproduction is governed aggressively by federal statutes. All articles are for educational, media production, and training reference only. Ensure your film or television project remains compliant by ordering exclusively from certified theatrical banknote presses.
          </p>
        </div>
      </section>
    </div>
  );
}
