"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products, categories } from "@/lib/products";
import { useCart } from "@/context/CartContext";

function ProductCard({ product }: { product: typeof products[0] }) {
  const [selectedVariation, setSelectedVariation] = useState(0);
  const { addItem } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product, product.variations[selectedVariation], 1);
    setIsAdded(true);
    // Dispatch custom event to trigger the sliding cart drawer on Navbar
    window.dispatchEvent(new CustomEvent("open-cart"));
    setTimeout(() => setIsAdded(false), 1500);
  };

  return (
    <div id={`product-card-${product.id}`} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-slate-200 overflow-hidden flex flex-col">
      <Link href={`/product/${product.id}`} className="relative aspect-[3/2] overflow-hidden bg-slate-100 shrink-0 block">
        {product.tag && (
          <div className="absolute top-4 right-4 z-10 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-sm">
            {product.tag}
          </div>
        )}
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-sm select-none">
            {product.name.includes("Polymer") ? "NEXT-GEN" : "CLASSIC"}
          </div>
          {/* We try to load the product image, but if it's missing, Next.js fallback displays or image is shown */}
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 z-10"
            referrerPolicy="no-referrer"
          />
        </div>
      </Link>
      
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div className="mb-4">
          <h3 className="font-bold text-slate-800 text-base mb-2 group-hover:text-emerald-600 transition-colors line-clamp-1">
            <Link href={`/product/${product.id}`} className="hover:underline">
              {product.name}
            </Link>
          </h3>
          <p className="text-slate-500 text-xs line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>
        
        <div className="mt-auto">
          {/* Variation Price Selection */}
          <div className="mb-4">
            <select 
              value={selectedVariation} 
              onChange={(e) => setSelectedVariation(Number(e.target.value))}
              className="w-full bg-slate-50 border border-slate-200 text-slate-700 text-xs rounded p-2 focus:outline-none focus:border-emerald-500 cursor-pointer font-semibold"
            >
              {product.variations.map((v, i) => (
                <option key={i} value={i}>{v.name} - ${v.price.toFixed(2)}</option>
              ))}
            </select>
          </div>
          
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex justify-between items-center">
              <span className="text-emerald-600 font-extrabold text-lg">
                ${product.variations[selectedVariation].price.toFixed(2)}
              </span>
              <Link 
                href={`/product/${product.id}`}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-1.5 px-3 rounded transition-all"
              >
                Configure
              </Link>
            </div>
            
            <button
              onClick={handleAddToCart}
              className={`w-full text-xs font-bold py-2.5 px-4 rounded transition-all flex items-center justify-center gap-1 cursor-pointer shadow-sm ${
                isAdded 
                  ? "bg-emerald-600 text-white shadow-emerald-950/10" 
                  : "bg-slate-950 hover:bg-emerald-600 text-white shadow-slate-950/10"
              }`}
            >
              {isAdded ? "Added to Prop Cart ✓" : "Add to Prop Cart 🛒"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductGrid({ initialCategory = "all" }: { initialCategory?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter((p) => p.categoryId === selectedCategory);

  return (
    <section id="shop" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-slate-900 font-extrabold mb-4 tracking-tight">Cinema Prop Banknotes</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm leading-relaxed">
            All banknote stacks meet strict legal disclaimers. Hand-packaged prop money bundles ready for production use.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div id="category-selector-tabs" className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            id="tab-all-notes"
            onClick={() => setSelectedCategory("all")}
            className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
              selectedCategory === "all"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-800"
            }`}
          >
            All Notes
          </button>
          {categories.map((cat) => (
            <button
              id={`tab-${cat.id}`}
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-900/20"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-800"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-in fade-in duration-300">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
