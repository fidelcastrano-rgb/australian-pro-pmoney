"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, ShoppingCart, CheckCircle, ShieldAlert, FileText } from "lucide-react";

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = products.find((p) => p.id === resolvedParams.id);

  if (!product) {
    notFound();
  }

  const { addItem } = useCart();
  const [selectedVariation, setSelectedVariation] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  const currentVariation = product.variations[selectedVariation];
  const totalPrice = currentVariation.price * quantity;

  const handleAddToCart = () => {
    addItem(product, currentVariation, quantity);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
  };

  return (
    <div id="product-detail-page" className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Breadcrumb / Back button */}
        <div className="mb-8 flex items-center justify-between">
          <Link 
            href="/#shop"
            className="flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Shop
          </Link>
          <div className="text-xs text-slate-400">
            Category: <span className="font-semibold text-slate-600 capitalize">{product.categoryId.replace("-", " ")}</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-2xl border border-slate-200 p-6 md:p-10 shadow-sm">
          
          {/* Left Column: Image Asset */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative aspect-[3/2] rounded-xl border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center font-extrabold text-slate-300 text-lg select-none uppercase tracking-widest">
                {product.name.includes("Polymer") ? "NEXT-GEN DESIGN" : "CLASSIC PRINT"}
              </div>
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                className="object-cover z-10"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Quality assurance box */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3 text-xs text-slate-500 leading-relaxed select-none">
              <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-700 block mb-1">PROMOTION & THEATRICAL SAFETY MARKS</span>
                Our banknotes feature legal alterations to ensure safe cinema production. They are completely legal to own, purchase, transport, and use in qualified performances.
              </div>
            </div>
          </div>

          {/* Right Column: Configurations */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {product.tag && (
                <span className="bg-amber-100 border border-amber-200 text-amber-800 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-sm mb-4 inline-block">
                  {product.tag}
                </span>
              )}
              <h1 id="product-title" className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight uppercase">
                {product.name}
              </h1>
              <p className="text-slate-500 text-xs mt-2 font-medium leading-relaxed">
                Cinema-grade Australian currency prop bundle. Hand-wrapped with premium legal currency wrappers.
              </p>

              {/* Price Indicator */}
              <div className="my-6 p-4 bg-emerald-50/50 border border-emerald-100 rounded-xl flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 uppercase">Selected Bundle Price</span>
                <span className="text-2xl font-black text-emerald-600">
                  ${currentVariation.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase mb-2">Description</h4>
                <p id="product-description" className="text-slate-600 text-xs leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Variation Selection */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase mb-3">Select Bundle Size</h4>
                <div className="grid grid-cols-1 gap-2">
                  {product.variations.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedVariation(i)}
                      className={`text-left p-3 rounded-lg border text-xs font-semibold flex justify-between items-center transition-all ${
                        selectedVariation === i
                          ? "border-emerald-600 bg-emerald-50 text-emerald-800 ring-2 ring-emerald-600/10"
                          : "border-slate-200 hover:border-slate-300 bg-white text-slate-700"
                      }`}
                    >
                      <span>{v.name}</span>
                      <span className="font-extrabold text-emerald-600">${v.price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-700 uppercase mb-3">Order Quantity</h4>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-slate-200 rounded-lg bg-white overflow-hidden text-slate-700">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-slate-50 hover:text-emerald-600 transition-colors border-r border-slate-200 text-sm font-bold"
                    >
                      &minus;
                    </button>
                    <span className="px-6 font-bold text-sm select-none">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-slate-50 hover:text-emerald-600 transition-colors border-l border-slate-200 text-sm font-bold"
                    >
                      &#43;
                    </button>
                  </div>
                  <div className="text-xs text-slate-400">
                    {currentVariation.name.toLowerCase().includes("stack") ? "Total stacks in order:" : "Total notes in order:"} <span className="font-bold text-slate-600">{quantity * Number(currentVariation.name.match(/\d+/)?.[0] || 1)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action & checkout links */}
            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-600 uppercase">Subtotal Price</span>
                <span className="text-xl font-black text-slate-900">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  id="add-to-cart-btn"
                  onClick={handleAddToCart}
                  className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/10 cursor-pointer"
                >
                  <ShoppingCart className="w-4.5 h-4.5" />
                  Add to Prop Cart
                </button>
                <Link
                  id="quick-checkout-btn"
                  href="/checkout"
                  onClick={() => addItem(product, currentVariation, quantity)}
                  className="flex-1 bg-slate-950 hover:bg-slate-900 text-white font-bold py-3.5 px-6 rounded-lg text-xs uppercase tracking-wider transition-colors text-center flex items-center justify-center"
                >
                  Quick Checkout
                </Link>
              </div>

              {/* Legal confirmation */}
              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 select-none">
                <FileText className="w-3.5 h-3.5" />
                <span>Standard compliance certification included in package.</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Success Notification Toast */}
      {showSuccessToast && (
        <div id="success-toast" className="fixed bottom-6 right-6 z-50 bg-slate-950 text-white border border-slate-800 rounded-xl px-5 py-4 shadow-2xl flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
          <div>
            <p className="text-xs font-bold">Successfully Added to Cart!</p>
            <p className="text-[10px] text-slate-400 mt-0.5">{quantity}x {product.name} ({currentVariation.name})</p>
          </div>
        </div>
      )}

    </div>
  );
}
