import React from "react";
import { ProductGrid } from "@/components/ProductGrid";
import { categories } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const category = categories.find((c) => c.id === resolvedParams.slug);

  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: `${category.name} | Australian Prop Money`,
    description: category.description,
    alternates: {
      canonical: `/categories/${category.id}`,
    }
  };
}

export function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.id,
  }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.id === resolvedParams.slug);

  if (!category) {
    notFound();
  }

  return (
    <div id="category-detail-page" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-8 animate-in fade-in duration-300">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <span>&rarr;</span>
          <Link href="/categories" className="hover:text-emerald-600 transition-colors">Categories</Link>
          <span>&rarr;</span>
          <span className="text-slate-900 font-semibold">{category.name}</span>
        </div>
        <div className="text-center">
          <h1 id="category-title" className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">{category.name}</h1>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mb-4 rounded-full"></div>
          <p id="category-description" className="text-slate-500 max-w-2xl mx-auto text-sm leading-relaxed">{category.description}</p>
        </div>
      </div>
      <ProductGrid initialCategory={category.id} />
    </div>
  );
}
