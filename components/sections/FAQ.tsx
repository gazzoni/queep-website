"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the global hotkey work?",
    answer:
      "You can set a custom keyboard shortcut (default: Cmd+Shift+N) that works system-wide. Press it from any application to instantly open Queep and start taking notes.",
  },
  {
    question: "How does AI organize my notes?",
    answer:
      "Our AI analyzes the content of your notes and automatically categorizes them into appropriate folders based on context, topics, and keywords. You can always manually reorganize if needed.",
  },
  {
    question: "What kind of tasks can be automatically generated?",
    answer:
      "The AI analyzes your note content and identifies action items, deadlines, and follow-up tasks. It creates a checklist that you can review and edit, helping you stay organized without manual effort.",
  },
  {
    question: "How does the AI search assistant work?",
    answer:
      "Simply ask a question in natural language, like 'What did I write about the project deadline?' The AI understands context and searches through all your notes to find relevant information, even if you don't remember the exact words you used.",
  },
  {
    question: "Is my data stored locally or in the cloud?",
    answer:
      "All your notes are stored locally on your device by default. Your data never leaves your computer unless you explicitly choose to sync or backup to cloud storage.",
  },
  {
    question: "Can I use Quick to Keep offline?",
    answer:
      "Yes! Queep works completely offline. The AI features that require processing can work with local models, ensuring you can use the app even without an internet connection.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="flex flex-col items-center justify-center py-24 px-8 bg-brand-background">
      <div className="w-full max-w-3xl">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="text-brand-text/60 text-sm font-normal mb-4">Support</div>
          <div className="text-3xl text-brand-text font-semibold tracking-tighter leading-8 text-center">
            Frequently asked questions
          </div>
        </div>
        <div className="w-full">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-brand-gray"
              >
                <AccordionTrigger className="text-lg text-brand-text hover:text-brand-green transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-md text-brand-text/70">
                  {faq.answer}
                </AccordionContent>
                {index < faqs.length - 1 && (
                  <div className="mt-4 mb-2 h-[1px] w-full bg-brand-gray" />
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

