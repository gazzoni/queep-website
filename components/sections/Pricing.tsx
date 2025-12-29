"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Period = "monthly" | "annual" | "lifetime";

const pricingPlans = {
  free: {
    name: "Free",
    price: { monthly: 0, annual: 0, lifetime: 0 },
    description: "Must-have features for everyday use.",
    features: [
      "Voice to text that works in any app",
      "Meeting recording and transcription",
      "Unlimited use of small voice models",
      "Custom prompt control",
      "Email Support",
    ],
  },
  pro: {
    name: "Pro",
    price: { monthly: 8.49, annual: 84.99, lifetime: 249.99 },
    description: "Advanced tools for a refined workflow.",
    features: [
      "Everything in Free, plus:",
      "Use your own AI API Keys",
      "Unlimited use of Cloud and Local AI models",
      "Translate any language to English",
      "Transcribe audio and video files",
      "Priority Support",
    ],
  },
};

export function Pricing() {
  const [period, setPeriod] = useState<Period>("monthly");

  return (
    <section id="pricing" className="flex w-full flex-col items-center justify-center pt-32 bg-black">
      <div className="flex flex-col items-center justify-between sm:mr-8 sm:flex-row sm:space-x-8">
        <Card className="group mx-4 mt-8 flex flex-col items-center justify-center transition-all duration-600 rounded-[28px] p-6 sm:w-[26rem] bg-transparent border-white/10">
          <CardContent className="w-full">
            <div className="flex items-start w-full">
              <div className="flex items-start text-2xl text-gray-100 font-medium">
                {pricingPlans.free.name}
              </div>
            </div>
            <div className="mt-8 flex items-start w-full">
              <div className="text-4xl font-semibold tracking-tighter text-white">
                <div className="flex items-start justify-center">
                  <span className="align-top text-2xl leading-none text-gray-100/70 font-light mt-1 mr-1">
                    $
                  </span>
                  <span className="text-5xl text-gray-100 font-medium">0</span>
                </div>
              </div>
              <div>
                <div className="ml-1">USD</div>
                <div className="text-lg font-light leading-3 tracking-tight text-gray-100/50 ml-1">
                  per month
                </div>
              </div>
            </div>
            <div className="flex items-start w-full mt-2 mb-6 text-[16px] font-normal leading-[140%] tracking-tight text-gray-200 ml-1">
              {pricingPlans.free.description}
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col justify-start items-center gap-y-3 w-full mt-3">
                {pricingPlans.free.features.map((feature) => (
                  <div key={feature} className="flex items-start justify-start w-full">
                    <div className="mr-4 text-white">✓</div>
                    <div className="text-gray-100 text-sm font-light leading-5 tracking-wide">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-center justify-center mt-20 sm:mt-60 w-full cursor-pointer">
                <Button className="flex justify-between items-center cursor-pointer rounded-full bg-white text-black transition-all duration-600 w-full px-5 py-3 hover:bg-gray-200">
                  <div className="text-gray-900 font-normal">Download Free</div>
                  <div className="transform transition-transform duration-300 hover:translate-x-1">
                    →
                  </div>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="group mx-4 mt-8 flex flex-col items-center justify-center transition-all duration-600 rounded-[28px] p-6 sm:w-[26rem] bg-transparent border-white/10 hover:border-white/20">
          <CardContent className="w-full">
            <div className="flex items-start justify-between w-full">
              <div className="flex items-start text-2xl text-gray-100 font-medium">
                {pricingPlans.pro.name}
              </div>
              <div className="rounded-full bg-white/20 hover:bg-white/30 text-white/60 hover:text-white transition-all duration-500 px-3 py-1.5 flex items-center cursor-pointer text-xs">
                Student Discount
              </div>
            </div>
            <div className="mt-8 flex items-start w-full">
              <div className="text-4xl font-semibold tracking-tighter text-white">
                <div className="flex items-start justify-center">
                  <span className="align-top text-2xl leading-none text-gray-100/70 font-light mt-1 mr-1">
                    $
                  </span>
                  <span className="text-5xl text-gray-100 font-medium">
                    {pricingPlans.pro.price[period]}
                  </span>
                </div>
              </div>
              <div>
                <div className="ml-1">USD</div>
                <div className="text-lg font-light leading-3 tracking-tight text-gray-100/50 ml-1">
                  {period === "monthly"
                    ? "per month"
                    : period === "annual"
                    ? "per year"
                    : "one time"}
                </div>
              </div>
            </div>
            <div className="flex items-start w-full mt-2 mb-6 text-[16px] font-normal leading-[140%] tracking-tight text-gray-100 ml-1">
              {pricingPlans.pro.description}
            </div>
            <div className="flex flex-col items-start w-full">
              <div className="text-gray-100 text-sm font-semibold leading-5 tracking-wide">
                Everything in Free, plus:
              </div>
              <div className="flex flex-col justify-start items-center gap-y-3 w-full mt-3">
                {pricingPlans.pro.features.slice(1).map((feature) => (
                  <div key={feature} className="flex items-start justify-start w-full">
                    <div className="mr-4 text-white">✓</div>
                    <div className="text-gray-100 text-sm font-light leading-5 tracking-wide">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col w-full rounded-full justify-between mt-11 relative">
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setPeriod("monthly")}
                  className={`flex justify-between items-center rounded-full px-5 py-3 transition-all ${
                    period === "monthly"
                      ? "bg-white/20 text-white"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <div>Monthly</div>
                  <div className="font-normal text-sm">${pricingPlans.pro.price.monthly}/mo</div>
                </button>
                <button
                  onClick={() => setPeriod("annual")}
                  className={`flex justify-between items-center rounded-full px-5 py-3 transition-all ${
                    period === "annual"
                      ? "bg-white/20 text-white"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <div>Annual</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/20 rounded-full px-2 py-1">
                      2 months free
                    </span>
                    <div className="font-normal text-sm">${pricingPlans.pro.price.annual}/yr</div>
                  </div>
                </button>
                <button
                  onClick={() => setPeriod("lifetime")}
                  className={`flex justify-between items-center rounded-full px-5 py-3 transition-all ${
                    period === "lifetime"
                      ? "bg-white/20 text-white"
                      : "text-gray-400 hover:bg-white/5"
                  }`}
                >
                  <div>Lifetime</div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-white/20 rounded-full px-2 py-1">Best value</span>
                    <div className="font-normal text-sm">${pricingPlans.pro.price.lifetime}</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-3 w-full">
              <Button className="flex justify-between items-center cursor-pointer rounded-full bg-white text-black w-full px-5 py-3 hover:bg-gray-200">
                <div className="text-gray-900 font-normal">Get Pro</div>
                <div className="transform transition-transform duration-300 hover:translate-x-1">
                  →
                </div>
              </Button>
              <span className="text-xs font-normal text-black/50 mt-3">
                30 day refund available for all plans
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}




