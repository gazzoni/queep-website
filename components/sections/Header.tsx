import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-white">Queep</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#pricing" className="text-sm text-gray-400 hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#faq" className="text-sm text-gray-400 hover:text-white transition-colors">
            FAQ
          </Link>
        </nav>
        <Button className="bg-white text-black hover:bg-gray-200">
          Get Started
        </Button>
      </div>
    </header>
  );
}




