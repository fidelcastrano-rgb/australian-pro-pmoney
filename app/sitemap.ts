import { MetadataRoute } from 'next';
import { products, categories } from '@/lib/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.australianpropmoney.com.au';
  
  const staticPages = [
    '',
    '/about',
    '/faq',
    '/blog',
    '/blog/can-you-buy-prop-money',
    '/blog/buy-australian-dollar',
    '/blog/fake-money',
    '/blog/fake-australian-money',
    '/blog/counterfeit-money-australia',
    '/contact',
    '/categories',
    '/gallery',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const categoryPages = categories ? categories.map((category) => ({
    url: `${baseUrl}/categories/${category.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  })) : [];

  const productPages = products ? products.map((product) => ({
    url: `${baseUrl}/product/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  })) : [];

  return [...staticPages, ...categoryPages, ...productPages];
}
