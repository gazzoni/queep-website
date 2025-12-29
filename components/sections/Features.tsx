"use client";

import { Card } from "@/components/ui/card";

const apps = [
  "Basecamp",
  "Facebook",
  "YouTube",
  "LinkedIn",
  "X",
  "Linear",
  "Slack",
  "Telegram",
  "Github",
  "Obsidian",
  "JIRA",
  "Figma",
  "Notion",
  "Zoom",
  "Wordpress",
  "IntellijIdea",
  "VIM",
  "SublimeText",
  "Discord",
  "googledocs",
  "googleslides",
  "Gmail",
  "Asana",
  "Trello",
];

const features = [
  {
    title: "100+ Languages",
    description: "It can translate them all to English, too.",
    content: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-white/20">100+</div>
      </div>
    ),
  },
  {
    title: "Use Custom Vocabulary",
    description: "Allows you phrases, names, links, or acronyms.",
    content: (
      <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-2 p-4">
        {["SaaS", "ARR", "Kubernetes", "Docker", "GPT-4"].map((word) => (
          <div
            key={word}
            className="rounded-lg border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/60"
          >
            {word}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Private & Secure",
    description: "Everything stays on your device.",
    content: (
      <div className="absolute inset-0 flex items-center justify-center">
        <svg
          aria-hidden="true"
          className="pointer-events-none h-full w-full fill-neutral-400/80"
        >
          <defs>
            <pattern
              id="dots"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x="0"
              y="0"
            >
              <circle id="pattern-circle" cx="1" cy="1" r="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#dots)" />
        </svg>
      </div>
    ),
  },
  {
    title: "Offline First",
    description: "Everything happens on your device, no WiFi needed.",
    content: (
      <div className="absolute bottom-0 right-0 opacity-60">
        <svg
          height="250"
          viewBox="0 0 167 129"
          fill="none"
          color="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M141.48 135.642C142.186 136.4 142.735 137.291 143.094 138.263C143.453 139.234 143.615 140.267 143.572 141.302C143.529 142.337 143.281 143.354 142.842 144.292C142.403 145.23 141.782 146.072 141.016 146.769C140.249 147.466 139.352 148.003 138.376 148.351C137.4 148.698 136.365 148.848 135.33 148.793C134.296 148.737 133.283 148.476 132.35 148.026C131.417 147.576 130.582 146.946 129.895 146.171L96.4034 109.333C90.7366 107.198 84.6282 106.503 78.6267 107.311C72.6251 108.12 66.9182 110.406 62.0184 113.964C60.3402 115.188 58.2448 115.694 56.1932 115.372C54.1416 115.051 52.3018 113.927 51.0786 112.249C49.8554 110.571 49.349 108.475 49.6707 106.424C49.9925 104.372 51.116 102.532 52.7942 101.309C60.7803 95.4765 70.27 92.0537 80.1405 91.4455L67.5242 77.5637C57.9951 79.8796 49.0801 84.2303 41.3913 90.317C39.7604 91.5634 37.7053 92.1193 35.6685 91.8651C33.6317 91.6109 31.7762 90.5669 30.5017 88.9579C29.2272 87.349 28.6356 85.3038 28.8544 83.2629C29.0732 81.222 30.0848 79.3487 31.6714 78.0464C38.9378 72.298 47.1072 67.7944 55.8472 64.719L44.5551 52.3245C35.9284 56.0064 27.8712 60.9005 20.6272 66.8587C19.0199 68.1762 16.9551 68.8012 14.8869 68.5963C12.8188 68.3914 10.9168 67.3733 9.5993 65.766C8.28181 64.1588 7.65678 62.0939 7.86169 60.0258C8.06661 57.9577 9.08469 56.0557 10.692 54.7382C17.6979 48.985 25.3622 44.0842 33.524 40.1387L25.5198 31.3582C24.8139 30.6 24.2656 29.7092 23.9066 28.7375C23.5475 27.7658 23.3849 26.7325 23.4281 25.6975C23.4714 24.6625 23.7196 23.6464 24.1585 22.708C24.5973 21.7697 25.218 20.9278 25.9847 20.2311C26.7513 19.5344 27.6486 18.9968 28.6245 18.6494C29.6004 18.302 30.6356 18.1518 31.67 18.2075C32.7044 18.2631 33.7175 18.5235 34.6505 18.9736C35.5835 19.4236 36.4179 20.0544 37.1054 20.8293L141.48 135.642Z"
            stroke="url(#paint0_radial)"
            strokeWidth="4"
          />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(83.0002 18.0001) rotate(89.7827) scale(130.805 151.574)"
            >
              <stop stopColor="currentColor" stopOpacity="0.43" />
              <stop offset="1" stopColor="currentColor" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    ),
  },
  {
    title: "Use with any app",
    description: "Works anywhere you can type or paste text. No need to switch apps.",
    content: (
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg">
        <div className="group flex overflow-hidden p-2 [--duration:40s] [gap:var(--gap)] flex-row relative [--gap:3rem]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row"
              style={{
                animationDirection: i % 2 === 0 ? "normal" : "reverse",
              }}
            >
              {apps.map((app, idx) => (
                <div
                  key={`${app}-${i}-${idx}`}
                  className="h-8 w-8 rounded bg-white/10 flex items-center justify-center text-xs text-white/60"
                >
                  {app[0]}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="flex w-full items-center justify-center mb-16">
        <div className="h-[1px] w-full bg-gradient-to-l from-white/20 via-white/10 to-white/0" />
        <div className="relative w-56 rounded-full px-4 py-1 text-center text-sm leading-6 text-white shadow-2xl ring-1 ring-white/50 bg-black">
          Features
        </div>
        <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-white/0" />
      </div>
      <div className="flex justify-center h-min-screen items-center">
        <div className="grid w-full auto-rows-[12rem] grid-cols-1 gap-4 p-8 max-w-7xl lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className={`group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl bg-transparent backdrop-blur-md border border-white/10 hover:border-white/20 transition-all ${
                index === 0
                  ? "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
                  : index === 1
                  ? "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
                  : index === 2
                  ? "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"
                  : index === 3
                  ? "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2"
                  : "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
              }`}
            >
              <div className="pointer-events-none relative h-full">
                {feature.content}
              </div>
              <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-neutral-300">
                  {feature.title}
                </h3>
                <p className="max-w-lg text-neutral-400">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

