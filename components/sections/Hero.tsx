"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const bars = 100;
    const barWidth = 2;
    const gap = 2;
    canvas.width = bars * (barWidth + gap);
    canvas.height = 150;

    let animationFrame: number;
    let lastTime = 0;
    const interval = 150; // Update every 150ms for smoother animation

    const animate = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)";

        for (let i = 0; i < bars; i++) {
          const height = Math.random() * canvas.height * 0.8 + 10;
          const x = i * (barWidth + gap);
          ctx.fillRect(x, canvas.height - height, barWidth, height);
        }

        lastTime = currentTime;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-white/10 to-white/0" />
      <div className="absolute inset-0 h-screen w-full opacity-40 bg-blend-overlay" />
      <div
        id="radial"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          background:
            "radial-gradient(circle at top, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 70%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-3xl pt-32">
        <div className="text-center">
          <div className="relative z-10 mb-8">
            <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
              Queep
            </h1>
          </div>
          <h2 className="relative z-0 -mt-8 mb-4 text-6xl font-bold tracking-tight text-white sm:-mt-12 md:-mt-16">
            Write 3x faster, without lifting a finger.
          </h2>
          <p className="text-lg leading-8 text-gray-400">
            AI powered voice to text
          </p>
          <div className="mx-4 flex h-44 items-center justify-center py-16 sm:mx-0 md:h-28">
            <div className="flex items-center h-8">
              <canvas
                ref={canvasRef}
                className="h-full w-full opacity-60"
                style={{ imageRendering: "crisp-edges" }}
              />
            </div>
          </div>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-x-6 sm:flex-row">
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4 flex justify-center gap-4">
                <Button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-black hover:bg-gray-200">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 20 26"
                    fill="#1A1A1A"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.7045 13.7485C16.729 11.8508 17.7481 10.0552 19.3648 9.06125C18.3449 7.60463 16.6366 6.68108 14.8592 6.62547C12.9636 6.4265 11.1258 7.75982 10.1598 7.75982C9.17508 7.75982 7.68777 6.64523 6.08619 6.67818C3.99859 6.74563 2.05242 7.93252 1.03676 9.75764C-1.14651 13.5376 0.482015 19.0929 2.5734 22.1484C3.61977 23.6446 4.84267 25.3158 6.44281 25.2566C8.00865 25.1916 8.59346 24.2581 10.4836 24.2581C12.3561 24.2581 12.9048 25.2566 14.5374 25.2189C16.2176 25.1916 17.2762 23.7161 18.2859 22.2057C19.0377 21.1397 19.6162 19.9614 20 18.7146C18.0254 17.8795 16.7068 15.8924 16.7045 13.7485Z" />
                    <path d="M13.6208 4.61606C14.5369 3.51628 14.9882 2.10271 14.8789 0.675537C13.4793 0.822541 12.1864 1.49147 11.2579 2.54905C10.35 3.58236 9.87749 4.97106 9.96681 6.34368C11.3669 6.3581 12.7434 5.7073 13.6208 4.61606Z" />
                  </svg>
                  <span>Download for Mac</span>
                </Button>
                <Button className="flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-white hover:bg-gray-700">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 25"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 13.9668V21.4008C21 21.6022 20.9594 21.8016 20.8807 21.987C20.8019 22.1724 20.6867 22.3401 20.5417 22.48C20.3968 22.6199 20.2252 22.7291 20.0371 22.8013C19.849 22.8734 19.6483 22.9069 19.447 22.8998L19.314 22.8888L12 21.9748V13.9668H21ZM10 13.9668V21.7248L4.752 21.0688C4.26821 21.0083 3.82316 20.7732 3.50052 20.4077C3.17789 20.0421 2.99989 19.5713 3 19.0838V13.9668H10ZM19.314 3.04477C19.5139 3.0198 19.7167 3.03535 19.9105 3.09047C20.1042 3.1456 20.2849 3.23918 20.4416 3.36564C20.5984 3.49209 20.7281 3.64883 20.823 3.82651C20.9179 4.00418 20.9761 4.19914 20.994 4.39977L21 4.53277V11.9668H12V3.95877L19.314 3.04477ZM10 4.20877V11.9668H3V6.84977C2.99989 6.36222 3.17789 5.89141 3.50052 5.52587C3.82316 5.16033 4.26821 4.92523 4.752 4.86477L10 4.20877Z" />
                  </svg>
                  <span>Download for Windows</span>
                </Button>
              </div>
              <div className="mb-8 flex gap-2 text-center text-sm text-gray-400">
                <span>requires macOS 13+ or Windows 10+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

