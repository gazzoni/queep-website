import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-brand-text/10 bg-brand-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-brand-text">Queep</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-brand-text/70 hover:text-brand-text transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-brand-text/70 hover:text-brand-text transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-brand-text/70 hover:text-brand-text transition-colors">
            FAQ
          </Link>
        </nav>
        <Link href="#pricing">
          <Button className="bg-brand-green text-white hover:bg-[#004020] transition-colors">
            Get Started
          </Button>
        </Link>
      </div>
    </header>
  );
}




