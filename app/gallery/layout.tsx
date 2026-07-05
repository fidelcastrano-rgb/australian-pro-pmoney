import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'High-Definition Film Prop Banknote Video Gallery | APM',
  description: 'Watch cinematic video previews, texture flexing tests, count machine runs, and polymer elasticity demonstrations of our premium Australian replica banknotes.',
  alternates: {
    canonical: '/gallery',
  },
  openGraph: {
    title: 'High-Definition Film Prop Banknote Video Gallery | APM',
    description: 'Watch cinematic video previews, texture flexing tests, count machine runs, and polymer elasticity demonstrations of our premium Australian replica banknotes.',
    url: '/gallery',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High-Definition Film Prop Banknote Video Gallery | APM',
    description: 'Watch cinematic video previews, texture flexing tests, count machine runs, and polymer elasticity demonstrations of our premium Australian replica banknotes.',
  }
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.australianpropmoney.com.au';
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Video Gallery",
        "item": `${baseUrl}/gallery`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
