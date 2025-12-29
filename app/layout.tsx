import type { Metadata } from "next";
import "./globals.css";

// Host Grotesk font will be loaded via @font-face in globals.css
// Font files should be placed in /public/fonts/ directory

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://queep.app'),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Queep - AI Notetaker That Pops Out Whenever You Need",
    template: "%s | Queep"
  },
  description: "Queep is an AI-powered notetaker that pops out instantly with a global hotkey (Cmd+Shift+N). Features include automatic AI organization, intelligent task generation from notes, and natural language search. Capture, organize, and find your notes effortlessly. Available for macOS and Windows.",
  keywords: [
    "AI notetaker",
    "note-taking app",
    "quick notes",
    "AI organization",
    "productivity app",
    "note taking software",
    "AI notes",
    "global hotkey notes",
    "automatic task generation",
    "AI search notes",
    "desktop notetaker",
    "macOS notes",
    "Windows notes",
    "productivity tool",
    "note management",
    "AI-powered notes"
  ],
  authors: [{ name: "Queep" }],
  creator: "Queep",
  publisher: "Queep",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Queep",
    title: "Queep - AI Notetaker That Pops Out Whenever You Need",
    description: "An AI-powered notetaker with global hotkey access, automatic organization, task generation, and intelligent search. Available for Mac and Windows.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Queep - AI Notetaker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queep - AI Notetaker That Pops Out Whenever You Need",
    description: "An AI-powered notetaker with global hotkey access, automatic organization, task generation, and intelligent search.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", type: "image/png", sizes: "192x192", url: "/icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", url: "/icon-512x512.png" },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#00512E",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  category: "productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}




