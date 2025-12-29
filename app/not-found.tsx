import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-brand-green mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-brand-text mb-4">Page not found</h2>
        <p className="text-brand-text/70 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <Link href="/">
          <Button className="bg-brand-green text-white hover:bg-[#004020] transition-colors">
            Go back home
          </Button>
        </Link>
      </div>
    </main>
  );
}

