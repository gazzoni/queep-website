"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative isolate min-h-[80vh] overflow-hidden bg-brand-background">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-beige via-brand-background to-brand-gray" />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-brand-beige/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-brand-gray/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating Note Cards */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className={`absolute top-32 left-10 w-48 h-56 bg-white rounded-lg shadow-xl p-4 transform rotate-[-5deg] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="h-2 w-2 bg-brand-green rounded-full mb-2" />
          <div className="h-1 bg-brand-gray rounded mb-2 w-3/4" />
          <div className="h-1 bg-brand-gray/50 rounded mb-1 w-full" />
          <div className="h-1 bg-brand-gray/50 rounded mb-1 w-5/6" />
        </div>
        
        <div 
          className={`absolute top-48 right-20 w-52 h-60 bg-brand-beige rounded-lg shadow-xl p-4 transform rotate-[8deg] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 bg-brand-green rounded-full" />
            <div className="h-1 bg-brand-text/30 rounded w-1/2" />
          </div>
          <div className="h-1 bg-brand-text/20 rounded mb-1 w-full" />
          <div className="h-1 bg-brand-text/20 rounded mb-1 w-4/5" />
          <div className="h-1 bg-brand-text/20 rounded mb-1 w-3/4" />
        </div>

        <div 
          className={`absolute bottom-32 left-1/4 w-44 h-52 bg-white rounded-lg shadow-xl p-4 transform rotate-[12deg] transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="h-1 bg-brand-green rounded mb-2 w-2/3" />
          <div className="h-1 bg-brand-gray/50 rounded mb-1 w-full" />
          <div className="h-1 bg-brand-gray/50 rounded mb-1 w-5/6" />
        </div>
      </div>

      {/* Keyboard Shortcut Visual */}
      <div className={`absolute top-1/2 right-10 transform -translate-y-1/2 transition-all duration-1000 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ animationDelay: "0.8s" }}>
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl border-2 border-brand-green/20">
          <div className="text-xs text-brand-text/60 mb-3 font-medium">Press anywhere</div>
          <div className="flex items-center gap-2">
            <kbd className="px-3 py-2 text-sm font-semibold text-brand-text bg-brand-gray rounded-lg border border-brand-text/10 shadow-sm">
              ⌘
            </kbd>
            <span className="text-brand-text/40">+</span>
            <kbd className="px-3 py-2 text-sm font-semibold text-brand-text bg-brand-gray rounded-lg border border-brand-text/10 shadow-sm">
              ⇧
            </kbd>
            <span className="text-brand-text/40">+</span>
            <kbd className="px-3 py-2 text-sm font-semibold text-brand-text bg-brand-green text-white rounded-lg border border-brand-green shadow-sm">
              N
            </kbd>
          </div>
          <div className="mt-3 text-xs text-brand-text/50">Queep appears</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto w-full max-w-5xl pt-32 pb-20 px-4">
        <div className="text-center">
          <div className={`relative z-10 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl font-bold tracking-tight text-brand-green sm:text-7xl md:text-8xl">
              Queep
            </h1>
          </div>
          
          <h2 className={`relative z-0 mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-brand-text transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: "0.2s" }}>
            An AI notetaker that pops out<br />whenever you need.
          </h2>

          {/* CTA Buttons */}
          <div className={`relative mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: "0.4s" }}>
            <Button 
              className="flex items-center gap-2 rounded-lg bg-brand-green px-8 py-4 text-white hover:bg-[#004020] transition-all shadow-lg hover:shadow-xl text-base font-medium"
              aria-label="Download Queep for Mac"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 26"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M16.7045 13.7485C16.729 11.8508 17.7481 10.0552 19.3648 9.06125C18.3449 7.60463 16.6366 6.68108 14.8592 6.62547C12.9636 6.4265 11.1258 7.75982 10.1598 7.75982C9.17508 7.75982 7.68777 6.64523 6.08619 6.67818C3.99859 6.74563 2.05242 7.93252 1.03676 9.75764C-1.14651 13.5376 0.482015 19.0929 2.5734 22.1484C3.61977 23.6446 4.84267 25.3158 6.44281 25.2566C8.00865 25.1916 8.59346 24.2581 10.4836 24.2581C12.3561 24.2581 12.9048 25.2566 14.5374 25.2189C16.2176 25.1916 17.2762 23.7161 18.2859 22.2057C19.0377 21.1397 19.6162 19.9614 20 18.7146C18.0254 17.8795 16.7068 15.8924 16.7045 13.7485Z" />
                <path d="M13.6208 4.61606C14.5369 3.51628 14.9882 2.10271 14.8789 0.675537C13.4793 0.822541 12.1864 1.49147 11.2579 2.54905C10.35 3.58236 9.87749 4.97106 9.96681 6.34368C11.3669 6.3581 12.7434 5.7073 13.6208 4.61606Z" />
              </svg>
              <span>Download for Mac</span>
            </Button>
            
            <Button 
              className="flex items-center gap-2 rounded-lg bg-white border-2 border-brand-text/10 px-8 py-4 text-brand-text hover:bg-brand-gray transition-all shadow-lg hover:shadow-xl text-base font-medium"
              aria-label="Download Queep for Windows"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 25"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M21 13.9668V21.4008C21 21.6022 20.9594 21.8016 20.8807 21.987C20.8019 22.1724 20.6867 22.3401 20.5417 22.48C20.3968 22.6199 20.2252 22.7291 20.0371 22.8013C19.849 22.8734 19.6483 22.9069 19.447 22.8998L19.314 22.8888L12 21.9748V13.9668H21ZM10 13.9668V21.7248L4.752 21.0688C4.26821 21.0083 3.82316 20.7732 3.50052 20.4077C3.17789 20.0421 2.99989 19.5713 3 19.0838V13.9668H10ZM19.314 3.04477C19.5139 3.0198 19.7167 3.03535 19.9105 3.09047C20.1042 3.1456 20.2849 3.23918 20.4416 3.36564C20.5984 3.49209 20.7281 3.64883 20.823 3.82651C20.9179 4.00418 20.9761 4.19914 20.994 4.39977L21 4.53277V11.9668H12V3.95877L19.314 3.04477ZM10 4.20877V11.9668H3V6.84977C2.99989 6.36222 3.17789 5.89141 3.50052 5.52587C3.82316 5.16033 4.26821 4.92523 4.752 4.86477L10 4.20877Z" />
              </svg>
              <span>Download for Windows</span>
            </Button>
          </div>
          
          <div className={`mt-6 text-sm text-brand-text/60 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
            requires macOS 13+ or Windows 10+
          </div>

          {/* Video Section */}
          <div className={`mt-16 max-w-4xl mx-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ animationDelay: "0.8s" }}>
            <div className="relative aspect-video rounded-2xl overflow-hidden border-2 border-brand-gray shadow-2xl bg-brand-card">
              <div className="absolute inset-0 flex items-center justify-center text-brand-text/40">
                {/* Placeholder para o vídeo - será substituído pelo vídeo real */}
                <div className="text-center">
                  <svg 
                    className="w-16 h-16 mx-auto mb-2 text-brand-green/40" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                    />
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                    />
                  </svg>
                  <p className="text-sm font-medium">Video Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

