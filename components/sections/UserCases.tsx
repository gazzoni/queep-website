"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const tutorials = [
  {
    title: "Dictate your emails, in any app",
    duration: "2 min",
    thumbnail: "/images/tutorial-1.jpg",
  },
  {
    title: "Send perfect messages at work",
    duration: "7 min",
    thumbnail: "/images/tutorial-2.jpg",
  },
  {
    title: "Quickly solidify your learning",
    duration: "2 min",
    thumbnail: "/images/tutorial-3.jpg",
  },
  {
    title: "Get your work done fast & secure",
    duration: "14 min",
    thumbnail: "/images/tutorial-4.jpg",
  },
  {
    title: "Make your journaling effortless",
    duration: "2 min",
    thumbnail: "/images/tutorial-5.jpg",
  },
  {
    title: "Voice to code in seconds",
    duration: "8 min",
    thumbnail: "/images/tutorial-6.jpg",
  },
  {
    title: "Write better messages, get responses",
    duration: "5 min",
    thumbnail: "/images/tutorial-7.jpg",
  },
];

export function UserCases() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="flex flex-col items-center justify-center my-48 bg-black">
      <div className="text-sm font-medium tracking-[1%] text-blue-400 mb-4">Tutorials</div>
      <div className="text-2xl sm:text-5xl w-80 h-16 sm:w-96 sm:h-24 text-center font-medium tracking-tight relative">
        <div>
          <div className="transition-all duration-300 opacity-100 translate-y-0">
            <span className="text-gray-600">Respond to an email</span>{" "}
            <span className="font-semibold">in seconds</span>
          </div>
        </div>
      </div>
      <div className="text-base text-gray-200 mt-6">
        Quick videos to get you started in minutes
      </div>
      <div className="w-full overflow-hidden my-12 relative pl-20 sm:pl-0">
        <div
          className="flex transition-transform duration-500 ease-out px-4 py-2 gap-9"
          style={{
            transform: `translateX(calc(50% - 150px - ${currentIndex * 240}px))`,
          }}
        >
          {tutorials.map((tutorial, index) => (
            <Card
              key={index}
              className={`flex-shrink-0 transition-all duration-500 w-[216px] sm:w-[473px] group ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-70"
              } bg-transparent border-white/10 cursor-pointer hover:border-white/20`}
              onClick={() => setCurrentIndex(index)}
            >
              <CardContent className="p-0">
                <div className="relative rounded-lg overflow-hidden transition-all duration-500 border border-white/10 group-hover:border-white/5">
                  <div className="w-full h-32 sm:h-48 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                    <div className="text-white/20 text-sm">{tutorial.title}</div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-black/70 transition-opacity duration-300">
                      <div className="transition-transform duration-300 group-hover:scale-110 scale-105">
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 80 80"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M40.5 80C62.5914 80 80.5 62.0914 80.5 40C80.5 17.9086 62.5914 0 40.5 0C18.4086 0 0.5 17.9086 0.5 40C0.5 62.0914 18.4086 80 40.5 80ZM34.25 54.6721L56.75 42.096C58.4167 41.1645 58.4167 38.8355 56.75 37.904L34.25 25.3279C32.5833 24.3963 30.5 25.5608 30.5 27.4239L30.5 52.5761C30.5 54.4392 32.5833 55.6037 34.25 54.6721Z"
                            fill="white"
                            fillOpacity="0.3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-white/80 transition-colors duration-300">
                  <div className="flex justify-between">
                    <div className="text-[10px] sm:text-xs ml-2">{tutorial.title}</div>
                    <div className="text-gray-600 text-xs text-nowrap">{tutorial.duration}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="flex gap-x-2 p-4 bg-gray-800 rounded-full">
        {tutorials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-500 ease-out rounded-full h-3 ${
              index === currentIndex
                ? "bg-white/80 w-[100px]"
                : "bg-white/10 w-6 hover:bg-white/20"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

