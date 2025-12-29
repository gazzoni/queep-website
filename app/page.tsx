import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Queep",
    "url": "https://queep.app",
    "logo": "https://queep.app/logo.png",
    "description": "An AI-powered notetaker that pops out whenever you need. Capture, organize, and find your notes effortlessly.",
    "sameAs": [
      "https://twitter.com/queep",
      "https://github.com/queep",
      "https://linkedin.com/company/queep"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Queep",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": ["macOS", "Windows"],
    "offers": [
      {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "name": "Free Plan"
      },
      {
        "@type": "Offer",
        "price": "8.49",
        "priceCurrency": "USD",
        "name": "Pro Plan - Monthly"
      },
      {
        "@type": "Offer",
        "price": "84.99",
        "priceCurrency": "USD",
        "name": "Pro Plan - Annual"
      },
      {
        "@type": "Offer",
        "price": "249.99",
        "priceCurrency": "USD",
        "name": "Pro Plan - Lifetime"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5"
    },
    "description": "AI-powered notetaker with global hotkey access, automatic organization, task generation, and intelligent search.",
    "screenshot": "https://queep.app/og-image.png",
    "featureList": [
      "Global hotkey for instant access",
      "AI-powered note organization",
      "Automatic task generation",
      "Natural language search assistant"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Queep",
    "url": "https://queep.app",
    "description": "An AI-powered notetaker that pops out whenever you need.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://queep.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Queep",
    "description": "AI-powered notetaker with global hotkey access, automatic organization, task generation, and intelligent search.",
    "brand": {
      "@type": "Brand",
      "name": "Queep"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "0",
      "highPrice": "249.99",
      "priceCurrency": "USD",
      "offerCount": "4"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <main className="min-h-screen bg-brand-background">
        <Header />
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}




