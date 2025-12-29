import type { Metadata } from "next";
import "./globals.css";

// Host Grotesk font will be loaded via @font-face in globals.css
// Font files should be placed in /public/fonts/ directory

export const metadata: Metadata = {
  title: "Queep - AI Notetaker That Pops Out Whenever You Need",
  description: "An AI-powered notetaker with global hotkey access, automatic organization, task generation, and intelligent search. Available for Mac and Windows.",
  keywords: ["AI notetaker", "note-taking app", "quick notes", "AI organization", "productivity"],
  authors: [{ name: "Queep" }],
  openGraph: {
    title: "Queep - AI Notetaker",
    description: "An AI notetaker that pops out whenever you need.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Queep - AI Notetaker",
    description: "An AI notetaker that pops out whenever you need.",
  },
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




