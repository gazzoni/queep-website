import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "Queep has completely transformed how I capture ideas. The global hotkey means I never lose a thought, and the AI organization keeps everything perfectly structured. It's like having a personal assistant for my notes.",
    author: "Bárbara",
  },
  {
    quote:
      "As someone who takes notes constantly, the automatic task generation feature is a game-changer. I can focus on capturing information, and the AI handles turning it into actionable items. It's saved me hours every week.",
    author: "Beatriz",
  },
  {
    quote:
      "The AI search assistant is incredible. I can ask 'What did I write about the project deadline?' and it finds exactly what I need. No more scrolling through hundreds of notes trying to find that one important detail.",
    author: "Breno",
  },
  {
    quote:
      "I love how Queep pops up instantly whenever I need it. Whether I'm in a meeting, coding, or just walking around, I can capture my thoughts immediately. The AI organization feature keeps my notes perfectly categorized without any effort.",
    author: "Luis Eduardo",
  },
  {
    quote:
      "This app has become essential to my workflow. The combination of quick access, smart organization, and intelligent search makes it the perfect note-taking solution. I can't imagine working without it now.",
    author: "Ednaldo",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative pb-32 pt-24 sm:pt-32 bg-brand-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-20 flex w-full items-center justify-center">
          <div className="h-[1px] w-full bg-gradient-to-l from-brand-text/20 via-brand-text/10 to-transparent" />
          <div className="relative rounded-full px-4 py-1 text-sm leading-6 text-brand-text shadow-lg ring-1 ring-brand-text/20 bg-brand-beige">
            Reviews
          </div>
          <div className="h-[1px] w-full bg-gradient-to-r from-brand-text/20 to-transparent" />
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <Card className="col-span-1 sm:col-span-2 xl:col-start-2 xl:row-end-1 bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-colors">
            <CardContent className="h-full rounded-xl p-6">
              <blockquote className="p-6 text-xl font-semibold leading-8 tracking-tight text-brand-text">
                <p>{testimonials[0].quote}</p>
              </blockquote>
              <figcaption className="flex items-center gap-x-4 border-t border-brand-gray px-6 py-4">
                <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center text-white font-semibold">
                  {testimonials[0].author[0]}
                </div>
                <div className="flex-auto">
                  <div className="font-semibold text-brand-text">{testimonials[0].author}</div>
                </div>
              </figcaption>
            </CardContent>
          </Card>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-span-2">
              <Card className="bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-colors">
                <CardContent className="h-full rounded-xl p-6">
                  <blockquote className="text-brand-text">
                    <p>{testimonials[1].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center text-white font-semibold">
                      {testimonials[1].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">{testimonials[1].author}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 xl:row-start-1">
              <Card className="bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-colors">
                <CardContent className="h-full rounded-xl p-6">
                  <blockquote className="text-brand-text">
                    <p>{testimonials[2].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center text-white font-semibold">
                      {testimonials[2].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">{testimonials[2].author}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-8 xl:contents xl:space-y-0">
            <div className="space-y-8 xl:row-start-1">
              <Card className="bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-colors">
                <CardContent className="h-full rounded-xl p-6">
                  <blockquote className="text-brand-text">
                    <p>{testimonials[3].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center text-white font-semibold">
                      {testimonials[3].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">{testimonials[3].author}</div>
                    </div>
                  </figcaption>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8 xl:row-span-2">
              <Card className="bg-brand-card border-2 border-brand-gray hover:border-brand-green transition-colors">
                <CardContent className="h-full rounded-xl p-6">
                  <blockquote className="text-brand-text">
                    <p>{testimonials[4].quote}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div className="h-10 w-10 rounded-full bg-brand-green flex items-center justify-center text-white font-semibold">
                      {testimonials[4].author[0]}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-text">{testimonials[4].author}</div>
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




