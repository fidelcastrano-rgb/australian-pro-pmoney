import { Metadata } from 'next';
import { products } from '@/lib/products';

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  
  if (!product) {
    return {
      title: 'Product Not Found - Australian Prop Money',
    };
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://australianpropmoney.com.au';
  const url = `${baseUrl}/product/${product.id}`;

  return {
    title: `${product.name} | Australian Prop Money`,
    description: product.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} | Australian Prop Money`,
      description: product.description,
      url: url,
      type: 'website', // using website or product depending on requirements, let's use website for now
      images: [
        {
          url: `${baseUrl}${product.image}`,
          width: 800,
          height: 600,
          alt: product.name,
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} | Australian Prop Money`,
      description: product.description,
      images: [`${baseUrl}${product.image}`],
    }
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: Promise<{ id: string }>
}) {
  const resolvedParams = await params;
  const product = products.find((p) => p.id === resolvedParams.id);
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://australianpropmoney.com.au';
  
  const productSchema = product ? {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `${baseUrl}${product.image}`,
    "description": product.description,
    "sku": product.id,
    "brand": {
      "@type": "Brand",
      "name": "Australian Prop Money"
    },
    "offers": {
      "@type": "AggregateOffer",
      "url": `${baseUrl}/product/${product.id}`,
      "priceCurrency": "AUD",
      "lowPrice": product.variations[0]?.price,
      "highPrice": product.variations[product.variations.length - 1]?.price,
      "offerCount": product.variations.length,
      "availability": "https://schema.org/InStock"
    }
  } : null;

  const breadcrumbSchema = product ? {
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
        "name": "Shop",
        "item": `${baseUrl}/#shop`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `${baseUrl}/product/${product.id}`
      }
    ]
  } : null;

  return (
    <>
      {productSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {children}
    </>
  );
}
