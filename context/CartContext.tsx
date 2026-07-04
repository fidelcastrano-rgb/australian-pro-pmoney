"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, ProductVariation } from "@/lib/products";

export interface CartItem {
  product: Product;
  variation: ProductVariation;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, variation: ProductVariation, quantity: number) => void;
  removeItem: (productId: string, variationName: string) => void;
  updateQuantity: (productId: string, variationName: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aus_prop_money_cart");
      if (stored) {
        setItems(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage when items change
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem("aus_prop_money_cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [items, isInitialized]);

  const addItem = (product: Product, variation: ProductVariation, quantity: number) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.variation.name === variation.name
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }

      return [...prev, { product, variation, quantity }];
    });
  };

  const removeItem = (productId: string, variationName: string) => {
    setItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.variation.name === variationName))
    );
  };

  const updateQuantity = (productId: string, variationName: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId, variationName);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.variation.name === variationName
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = items.reduce((sum, item) => sum + item.variation.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
