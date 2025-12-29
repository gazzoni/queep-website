"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "Can I try Queep for free?",
    answer:
      "Yes, you can try the Pro features for 15 minutes of recording for free, after that the free tier features are available to you forever. The no questions asked refund within 30 days of purchase will always be honored.",
  },
  {
    question: "Will it work on my Intel Mac?",
    answer:
      "Intel Macs work best with Cloud models. Offline models only run really well on Apple Silicon macs.",
  },
  {
    question: "Which features are being worked on next?",
    answer: (
      <>
        Check out our{" "}
        <Link href="/roadmap" className="font-medium text-blue-400 hover:text-blue-300 underline">
          Roadmap
        </Link>{" "}
        to see what is being worked on or request a new feature.
      </>
    ),
  },
  {
    question: "Can I use my Pro license on all my devices?",
    answer: "Yes, you can activate your license on as many of your devices as you like.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="flex flex-col items-start justify-start p-8 bg-black">
      <div className="flex flex-col items-start justify-start w-full llg:flex-row llg:items-end llg:justify-center">
        <div className="flex flex-col items-start justify-start w-full llg:w-1/2">
          <div className="flex flex-col items-start justify-start mb-12">
            <div className="text-white/40 text-sm font-normal mb-4">Support</div>
            <div className="text-3xl text-gray-200 font-semibold tracking-tighter leading-8">
              Frequently asked questions
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-white/10"
                >
                  <AccordionTrigger className="text-lg text-gray-200 hover:text-gray-100">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-md text-white/60">
                    {faq.answer}
                  </AccordionContent>
                  {index < faqs.length - 1 && (
                    <div className="mt-4 mb-2 h-[1px] w-full bg-white/10" />
                  )}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="w-full llg:w-1/2 flex items-start justify-start mt-12 llg:mt-0 llg:items-center llg:justify-center">
          <div className="flex flex-col items-start justify-start w-96 group">
            <div className="text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
              Can&apos;t find the answers you&apos;re looking for? Take a look in our Documentation. Click
              the button below to find the answers you need.
            </div>
            <Link href="/docs" className="group/docs-button">
              <Button className="text-white/60 hover:text-white flex items-center justify-between px-5 gap-x-4 mt-4 transition-colors p-2 bg-gray-800 rounded-full w-72 hover:bg-gray-700">
                Documentation
                <div className="transform transition-transform duration-300 group-hover/docs-button:translate-x-1">
                  →
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

