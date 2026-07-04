import React from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { categories } from "@/lib/products";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shop All Categories | Australian Prop Money',
  description: 'Browse our complete collection of industry-standard Australian Prop Money, categorized by historical paper prints and modern polymer banknote series.',
  alternates: {
    canonical: '/categories',
  }
};

export default function CategoriesPage() {
  return (
    <div id="categories-overview-page" className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-10 text-center mb-12 animate-in fade-in duration-300">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Shop All Categories</h1>
        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
          Browse our complete collection of industry-standard Australian Prop Money, categorized by historical paper prints and modern polymer banknote series.
        </p>
      </div>

      {/* Category Selection Cards */}
      <div id="category-cards-grid" className="max-w-4xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((cat) => (
          <Link 
            id={`category-card-link-${cat.id}`}
            key={cat.id} 
            href={`/categories/${cat.id}`}
            className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all group flex flex-col justify-between cursor-pointer"
          >
            <div>
              <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest mb-3 block">
                {cat.id === "new-notes" ? "Next-Gen Series" : "Classic Series"}
              </span>
              <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {cat.name}
              </h2>
              <p className="text-slate-500 leading-relaxed text-xs">
                {cat.description}
              </p>
            </div>
            <div className="mt-6 flex items-center text-xs font-bold text-emerald-600 gap-1 group-hover:translate-x-1 transition-transform">
              Explore Collection &rarr;
            </div>
          </Link>
        ))}
      </div>

      <ProductGrid />
    </div>
  );
}
