import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "I have replaced typing emails with dictating them using a client-side hosted version. The app I'm using is called Queep. It runs natively and integrates with the system clipboard. I highly recommend it.",
    author: "Alex MacCaw",
    handle: "@maccaw",
    company: "Reflect Notes",
  },
  {
    quote:
      "s/o to @queep 👏. easily best $ I've spent this week. been using it on my iPhone, but needed the same for Mac. I freed up so much mental bandwidth...",
    author: "Christian",
    handle: "@curious_vii",
  },
  {
    quote:
      "Queep is a great way to 'just talk' to your mac, it's way better than typing, and makes talking to chatGPT and other AIs super fun and easy. Forget typing, just talk",
    author: "Alex Volkov",
    handle: "@altryne",
  },
  {
    quote:
      "Queep is an exciting new way to transcribe audio using AI saving you pesky administrative work",
    author: "Francesco",
    handle: "@FrancescoD_Ales",
    company: "ToolFinder.co",
  },
  {
    quote:
      "As a professional, much of my day is spent writing reports. Queep has been amazing at helping me speed up that process. I love that the data never leaves my computer, so I know my data is safe.",
    author: "Dr. Palmer Piana",
    handle: "@palmerater",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative pb-32 pt-24 sm:pt-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex w-full items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-l from-white/20 via-white/10 to-white/0" />
          <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-white shadow-2xl ring-1 ring-white/50 bg-black">
            Reviews
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-white/0" />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-neutral-50 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <Card className="col-span-1 sm:col-span-2 xl:col-start-2 xl:row-end-1 bg-gradient-to-br from-white/20 to-white/5 border-white/10">
            <CardContent className="h-full rounded-xl bg-gradient-to-br from-neutral-900 to-black p-6">
              <blockquote className="p-6 text-xl font-semibold leading-8 tracking-tight text-white">
                <p>{testimonials[0].quote}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 font-semibold">
                  {testimonials[0].author[0]}
                </div>
                <div className="flex-auto">
                  <div className="font-semibold text-white">{testimonials[0].author}</div>
                  <div className="text-gray-400">{testimonials[0].handle}</div>
                </div>
                {testimonials[0].company && (
                  <div className="text-md font-normal text-gray-300">
                    {testimonials[0].company}
                  </div>
                )}
              </figcaption>
            </CardContent>
          </Card>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-span-2">
              <Card className="bg-gradient-to-br from-white/20 to-white/5 border-white/10">
                <CardContent className="h-full rounded-xl bg-gradient-to-br from-neutral-900 to-black p-6">
                  <blockquote className="text-white">
                    <p>{testimonials[1].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 font-semibold">
                      {testimonials[1].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-100">{testimonials[1].author}</div>
                      <div className="text-gray-400">{testimonials[1].handle}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 xl:row-start-1">
              <Card className="bg-gradient-to-br from-white/20 to-white/5 border-white/10">
                <CardContent className="h-full rounded-xl bg-gradient-to-br from-neutral-900 to-black p-6">
                  <blockquote className="text-white">
                    <p>{testimonials[2].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 font-semibold">
                      {testimonials[2].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-100">{testimonials[2].author}</div>
                      <div className="text-gray-400">{testimonials[2].handle}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-start-1">
              <Card className="bg-gradient-to-br from-white/20 to-white/5 border-white/10">
                <CardContent className="h-full rounded-xl bg-gradient-to-br from-neutral-900 to-black p-6">
                  <blockquote className="text-gray-100">
                    <p>{testimonials[3].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 font-semibold">
                      {testimonials[3].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-100">{testimonials[3].author}</div>
                      <div className="text-gray-400">{testimonials[3].handle}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 xl:row-span-2">
              <Card className="bg-gradient-to-br from-white/20 to-white/5 border-white/10">
                <CardContent className="h-full rounded-xl bg-gradient-to-br from-neutral-900 to-black p-6">
                  <blockquote className="text-white">
                    <p>{testimonials[4].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-900 font-semibold">
                      {testimonials[4].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonials[4].author}</div>
                      <div className="text-gray-400">{testimonials[4].handle}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




