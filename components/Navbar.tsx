"use client";

import React, { useState, useEffect } from "react";
import { ShoppingCart, Menu, Search, X, Trash2, Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { items, cartCount, cartSubtotal, updateQuantity, removeItem } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener("open-cart", handleOpenCart);
    return () => window.removeEventListener("open-cart", handleOpenCart);
  }, []);

  return (
    <>
      <nav id="app-navbar" className="bg-white border-b border-slate-200 text-slate-900 px-6 md:px-10 h-16 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 flex items-center justify-center bg-white shrink-0">
              <Image
                src="/logoo.webp"
                alt="Aus Prop Money Logo"
                fill
                priority
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800 uppercase italic">
              AUS PROP MONEY
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/#shop" className="hover:text-emerald-600 transition-colors">Shop</Link>
          <Link href="/categories" className="hover:text-emerald-600 transition-colors">Categories</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About Us</Link>
          <Link href="/faq" className="hover:text-emerald-600 transition-colors">FAQs</Link>
          <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
          <Link href="/gallery" className="hover:text-emerald-600 transition-colors">Videos</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6 text-slate-600">
          <button 
            id="cart-toggle-btn"
            onClick={() => setIsCartOpen(true)}
            className="hover:text-emerald-600 transition-colors flex items-center gap-2 group relative"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="hidden sm:inline text-sm font-semibold group-hover:text-emerald-600">
              Cart ({cartCount})
            </span>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-emerald-600 text-white text-[10px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:text-emerald-600 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col gap-4 text-sm font-semibold text-slate-600 animate-in slide-in-from-top duration-200">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Home</Link>
          <Link href="/#shop" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Shop</Link>
          <Link href="/categories" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Categories</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">About Us</Link>
          <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">FAQs</Link>
          <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Blog</Link>
          <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Videos</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-emerald-600 py-1">Contact</Link>
        </div>
      )}

      {/* Cart Drawer Backdrop */}
      {isCartOpen && (
        <div 
          onClick={() => setIsCartOpen(false)} 
          className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Cart Drawer Sidebar */}
      <div 
        id="cart-sidebar"
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-emerald-600" />
            <h2 className="font-bold text-lg text-slate-800">Your Shopping Cart</h2>
          </div>
          <button 
            id="close-cart-btn"
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-slate-600 transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-12">
              <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100">
                <ShoppingCart className="w-8 h-8 text-slate-300" />
              </div>
              <div>
                <p className="font-semibold text-slate-700 text-sm">Your cart is empty</p>
                <p className="text-slate-400 text-xs mt-1">Add some high-quality prop banknote packages to get started.</p>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="mt-2 text-xs bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-5 rounded-full transition-colors"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            items.map((item, index) => (
              <div key={`${item.product.id}-${item.variation.name}-${index}`} className="flex gap-4 border-b border-slate-100 pb-6 last:border-0">
                <div className="relative w-20 h-14 bg-slate-50 rounded border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                  {item.product.image ? (
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="text-xs font-bold text-slate-400">PROP</div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm truncate">{item.product.name}</h4>
                  <p className="text-xs text-slate-400 font-medium mt-0.5">{item.variation.name}</p>
                  
                  <div className="flex justify-between items-center mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-slate-200 rounded bg-slate-50 text-slate-600">
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variation.name, item.quantity - 1)}
                        className="p-1 hover:text-emerald-600 transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-3 text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, item.variation.name, item.quantity + 1)}
                        className="p-1 hover:text-emerald-600 transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeItem(item.product.id, item.variation.name)}
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-bold text-slate-800 text-sm">
                    ${(item.variation.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-slate-600">Subtotal</span>
              <span className="text-lg font-extrabold text-emerald-600">${cartSubtotal.toFixed(2)}</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-relaxed mb-4">
              Shipping and compliance administration taxes calculated at checkout. Prop items meet all legal specifications.
            </p>
            <div className="flex flex-col gap-2">
              <Link 
                id="checkout-sidebar-btn"
                href="/checkout"
                onClick={() => setIsCartOpen(false)}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md"
              >
                <span>Proceed to Checkout</span>
                <span>&rarr;</span>
              </Link>
              
              <button
                onClick={() => {
                  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+447341056054";
                  const whatsappNumber = rawNumber.replace(/[^0-9+]/g, "");
                  const itemsText = items.map(item => `- ${item.product.name} (${item.variation.name}) x ${item.quantity} - $${(item.variation.price * item.quantity).toFixed(2)}`).join("\n");
                  const message = `Hello! I would like to quickly purchase the following prop banknotes from your website:\n\n${itemsText}\n\n*Total Subtotal*: $${cartSubtotal.toFixed(2)} AUD\n\nPlease send me payment instructions!`;
                  window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
                  setIsCartOpen(false);
                }}
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer border-0"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Quick WhatsApp Checkout</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
