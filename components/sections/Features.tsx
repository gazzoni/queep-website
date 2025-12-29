"use client";

import { Card } from "@/components/ui/card";

const features = [
  {
    title: "Global Hotkey",
    description: "Create a note anywhere with a global keyboard shortcut.",
    content: (
      <div className="flex items-center justify-center h-full p-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg bg-brand-gray border-2 border-brand-green/20 shadow-md">
            <kbd className="px-3 py-1.5 text-sm font-semibold text-brand-text bg-white rounded border border-brand-text/10 shadow-sm">
              ⌘
            </kbd>
            <span className="text-brand-text/40 text-sm font-medium">+</span>
            <kbd className="px-3 py-1.5 text-sm font-semibold text-brand-text bg-white rounded border border-brand-text/10 shadow-sm">
              ⇧
            </kbd>
            <span className="text-brand-text/40 text-sm font-medium">+</span>
            <kbd className="px-3 py-1.5 text-sm font-semibold text-white bg-brand-green rounded border border-brand-green shadow-sm">
              N
            </kbd>
          </div>
          <div className="text-brand-text/50 text-sm font-medium">Press anywhere, anytime</div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Organization",
    description: "AI automatically organizes your notes into appropriate folders.",
    content: (
      <div className="flex items-center justify-center h-full p-6">
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg">
            <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm font-medium">Work</span>
          </div>
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg ml-4">
            <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm font-medium">Personal</span>
          </div>
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg ml-4">
            <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            <span className="text-sm font-medium">Projects</span>
          </div>
          <div className="absolute top-4 right-4">
            <svg className="w-6 h-6 text-brand-green/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Automatic Task Generation",
    description: "Automatically generate tasks from your note content.",
    content: (
      <div className="flex items-center justify-center h-full p-6">
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg border border-brand-gray">
            <div className="w-5 h-5 rounded border-2 border-brand-green bg-brand-green/10 flex items-center justify-center">
              <svg className="w-3 h-3 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm font-medium">Review project proposal</span>
          </div>
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg border border-brand-gray">
            <div className="w-5 h-5 rounded border-2 border-brand-green bg-brand-green/10"></div>
            <span className="text-sm font-medium">Schedule team meeting</span>
          </div>
          <div className="flex items-center gap-3 text-brand-text/80 bg-white p-3 rounded-lg border border-brand-gray">
            <div className="w-5 h-5 rounded border-2 border-brand-green bg-brand-green/10"></div>
            <span className="text-sm font-medium">Update documentation</span>
          </div>
          <div className="absolute top-4 right-4 animate-pulse">
            <svg className="w-5 h-5 text-brand-green/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "AI Search Assistant",
    description: "Find past notes by asking questions in natural language.",
    content: (
      <div className="flex items-center justify-center h-full p-6">
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <div className="relative">
            <input
              type="text"
              placeholder="What did I write about..."
              className="w-full px-4 py-3 rounded-lg bg-white border-2 border-brand-gray text-brand-text text-sm placeholder-brand-text/40 focus:border-brand-green focus:outline-none"
              readOnly
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
          <div className="text-brand-text/50 text-xs text-center font-medium">Ask anything, find everything</div>
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-brand-background">
      <div className="flex w-full items-center justify-center mb-16">
        <div className="h-[1px] w-full bg-gradient-to-l from-brand-text/20 via-brand-text/10 to-transparent" />
        <div className="relative w-56 rounded-full px-4 py-1 text-center text-sm leading-6 text-brand-text shadow-lg ring-1 ring-brand-text/20 bg-brand-beige">
          Features
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-brand-text/20 to-transparent" />
      </div>
      <div className="flex justify-center items-center px-4">
        <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="group relative flex flex-col h-[400px] overflow-hidden rounded-xl bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-full">
                {feature.content}
              </div>
              <div className="z-10 flex flex-col gap-2 p-6 bg-brand-card border-t border-brand-gray">
                <h3 className="text-xl font-semibold text-brand-text">
                  {feature.title}
                </h3>
                <p className="text-brand-text/70">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

