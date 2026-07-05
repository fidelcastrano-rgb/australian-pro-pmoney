import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { Banner } from "@/components/Banner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Australian Prop Money | Prop Money Australia & AU Prop Money Supplier",
  description: "Buy high-quality Australian prop money and prop money Australia for film, photography, and creative projects. Realistic AU prop money designed for professional use.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.australianpropmoney.com.au'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Australian Prop Money | Prop Money Australia & AU Prop Money Supplier",
    description: "Buy high-quality Australian prop money and prop money Australia for film, photography, and creative projects. Realistic AU prop money designed for professional use.",
    url: '/',
    siteName: 'Australian Prop Money',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Australian Prop Money | Prop Money Australia & AU Prop Money Supplier',
    description: 'Buy high-quality Australian prop money and prop money Australia for film, photography, and creative projects. Realistic AU prop money designed for professional use.',
  },
  icons: {
    icon: "/logoo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Australian Prop Money",
    "url": "https://www.australianpropmoney.com.au",
    "logo": "https://www.australianpropmoney.com.au/logoo.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+61480081373",
      "contactType": "customer service"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Australian Prop Money",
    "url": "https://www.australianpropmoney.com.au",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.australianpropmoney.com.au/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 min-h-screen flex flex-col justify-between">
        <CartProvider>
          <div className="flex flex-col min-h-screen justify-between">
            <div>
              <Banner />
              <Navbar />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
          <WhatsAppWidget />
        </CartProvider>
      </body>
    </html>
  );
}
