export interface ProductVariation {
  name: string;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  categoryId: string;
  tag?: string;
  variations: ProductVariation[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const categories: Category[] = [
  {
    id: "old-notes",
    name: "Old Australian Notes",
    description: "Authentic reproductions of historical Australian paper banknotes (classic pre-polymer era)."
  },
  {
    id: "new-notes",
    name: "New Notes",
    description: "Highly detailed reproductions of next-generation polymer Australian banknotes."
  }
];

export const products: Product[] = [
  // Old Notes (Classic Series)
  {
    id: "buy-prop-money-old-currency-5-australian-dollar-notes",
    name: "Buy Prop Money Old Currency $5 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 5 Australian Dollar notes. High-quality replicas with holograms, watermarks, and UV features for educational training, props, and financial system testing.",
    image: "https://picsum.photos/seed/ausold5/800/600",
    categoryId: "old-notes",
    variations: [
      { name: "1 Stack ($2,500)", price: 200 },
      { name: "5 Stacks ($12,500)", price: 850 },
      { name: "10 Stacks ($25,000)", price: 1600 },
      { name: "50 Stacks ($125,000)", price: 7500 },
      { name: "100 Stacks ($250,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-old-currency-10-australian-banknotes",
    name: "Buy Prop Money Old Currency $10 Australian banknotes - Prop Money Note",
    description: "Buy prop money 10 Australian Dollar notes. High-quality replicas with UV markings, holograms, and security threads for educational training, props, and financial system testing.",
    image: "/old_$10.webp",
    categoryId: "old-notes",
    tag: "Popular",
    variations: [
      { name: "1 Stack ($2,500)", price: 200 },
      { name: "5 Stacks ($12,500)", price: 850 },
      { name: "10 Stacks ($25,000)", price: 1600 },
      { name: "50 Stacks ($125,000)", price: 7500 },
      { name: "100 Stacks ($250,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-old-currency-20-australian-dollar-notes",
    name: "Buy Prop Money Old Currency $20 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 20 Australian Dollar notes. High-quality replicas with UV markings, watermarks, and color-shifting inks for educational training, props, and financial system testing.",
    image: "/old_$20.webp",
    categoryId: "old-notes",
    variations: [
      { name: "1 Stack ($2,500)", price: 200 },
      { name: "5 Stacks ($12,500)", price: 850 },
      { name: "10 Stacks ($25,000)", price: 1600 },
      { name: "50 Stacks ($125,000)", price: 7500 },
      { name: "100 Stacks ($250,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-old-currency-50-australian-dollar-notes",
    name: "Buy Prop Money Old Currency $50 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 50 Australian Dollar notes. Realistic replicas with watermarks, holograms, and UV features for educational training, props, and financial system testing.",
    image: "/old_$50.webp",
    categoryId: "old-notes",
    tag: "Best Seller",
    variations: [
      { name: "1 Stack ($2,500)", price: 200 },
      { name: "5 Stacks ($12,500)", price: 850 },
      { name: "10 Stacks ($25,000)", price: 1600 },
      { name: "50 Stacks ($125,000)", price: 7500 },
      { name: "100 Stacks ($250,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-old-currency-100-australian-dollar-notes",
    name: "Buy Prop Money Old Currency $100 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 100 Australian Dollar notes. Realistic replicas with holograms, watermarks, and UV features for educational training, props, and financial system testing.",
    image: "/old_$100.webp",
    categoryId: "old-notes",
    variations: [
      { name: "1 Stack ($2,500)", price: 200 },
      { name: "5 Stacks ($12,500)", price: 850 },
      { name: "10 Stacks ($25,000)", price: 1600 },
      { name: "50 Stacks ($125,000)", price: 7500 },
      { name: "100 Stacks ($250,000)", price: 14000 }
    ]
  },
  // New Notes (Next-Gen Series)
  {
    id: "buy-prop-money-new-5-australian-dollar-notes",
    name: "Buy Prop Money New $5 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 5 Australian Dollar notes. High-quality replicas with holograms, watermarks, and UV features for educational training, props, and financial system testing.",
    image: "/$5.webp",
    categoryId: "new-notes",
    variations: [
      { name: "1 Stack ($2,000)", price: 200 },
      { name: "5 Stacks ($10,000)", price: 850 },
      { name: "10 Stacks ($20,000)", price: 1600 },
      { name: "50 Stacks ($100,000)", price: 7500 },
      { name: "100 Stacks ($200,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-new-10-australian-banknotes",
    name: "Buy Prop Money New $10 Australian banknotes - Prop Money Note",
    description: "Buy prop money 10 Australian Dollar notes. High-quality replicas with UV markings, holograms, and security threads for educational training, props, and financial system testing.",
    image: "/$10.webp",
    categoryId: "new-notes",
    tag: "New",
    variations: [
      { name: "1 Stack ($2,000)", price: 200 },
      { name: "5 Stacks ($10,000)", price: 850 },
      { name: "10 Stacks ($20,000)", price: 1600 },
      { name: "50 Stacks ($100,000)", price: 7500 },
      { name: "100 Stacks ($200,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-new-20-australian-dollar-notes",
    name: "Buy Prop Money New $20 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 20 Australian Dollar notes. High-quality replicas with UV markings, watermarks, and color-shifting inks for educational training, props, and financial system testing.",
    image: "/$20.webp",
    categoryId: "new-notes",
    variations: [
      { name: "1 Stack ($2,000)", price: 200 },
      { name: "5 Stacks ($10,000)", price: 850 },
      { name: "10 Stacks ($20,000)", price: 1600 },
      { name: "50 Stacks ($100,000)", price: 7500 },
      { name: "100 Stacks ($200,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-new-50-australian-dollar-notes",
    name: "Buy Prop Money New $50 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 50 Australian Dollar notes. Realistic replicas with watermarks, holograms, and UV features for educational training, props, and financial system testing.",
    image: "/$50.webp",
    categoryId: "new-notes",
    tag: "Best Seller",
    variations: [
      { name: "1 Stack ($2,000)", price: 200 },
      { name: "5 Stacks ($10,000)", price: 850 },
      { name: "10 Stacks ($20,000)", price: 1600 },
      { name: "50 Stacks ($100,000)", price: 7500 },
      { name: "100 Stacks ($200,000)", price: 14000 }
    ]
  },
  {
    id: "buy-prop-money-new-100-australian-dollar-notes",
    name: "Buy Prop Money New $100 Australian Dollar Notes - Prop Money Note",
    description: "Buy prop money 100 Australian Dollar notes. Realistic replicas with holograms, watermarks, and UV features for educational training, props, and financial system testing.",
    image: "/$100.webp",
    categoryId: "new-notes",
    tag: "Exclusive",
    variations: [
      { name: "1 Stack ($2,000)", price: 200 },
      { name: "5 Stacks ($10,000)", price: 850 },
      { name: "10 Stacks ($20,000)", price: 1600 },
      { name: "50 Stacks ($100,000)", price: 7500 },
      { name: "100 Stacks ($200,000)", price: 14000 }
    ]
  }
];
