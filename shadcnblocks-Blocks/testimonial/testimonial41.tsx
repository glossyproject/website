import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

interface Testimonial41Props {
  heading?: string;
  description?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const Testimonial41 = ({
  heading = "What our customers say",
  description = "Thousands of teams rely on us every day. Here's what they have to say about the experience.",
  testimonials = [
    {
      quote:
        "This tool completely transformed how our team collaborates. We ship twice as fast now and the quality has never been better.",
      author: "Amy Chase",
      role: "Product Manager",
      company: "Mercury Finance",
      image: "/image-set/modern/portraits/portrait-action-1-1x1.jpg",
    },
    {
      quote:
        "The onboarding was seamless. Within a week, our entire organization was up and running without a single support ticket.",
      author: "Jonas Kotara",
      role: "Lead Engineer",
      company: "TechCorp",
      image: "/image-set/modern/portraits/portrait-action-2-1x1.jpg",
    },
    {
      quote:
        "I've tried dozens of similar tools. This is the only one that actually delivers on its promises. Genuinely exceptional.",
      author: "Kevin Yam",
      role: "Founder",
      company: "StartupXYZ",
      image: "/image-set/modern/portraits/portrait-action-3-1x1.jpg",
    },
    {
      quote:
        "The level of polish here is rare. Every detail has been considered, from the API to the dashboard.",
      author: "Kundo Marta",
      role: "CTO",
      company: "InnovateCo",
      image: "/image-set/modern/portraits/portrait-action-4-1x1.jpg",
    },
  ],
  className,
}: Testimonial41Props) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-8 max-w-2xl text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {heading}
          </h2>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4 lg:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] pl-4 sm:basis-[45%] lg:basis-1/3 lg:pl-6"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border bg-card">
                    <div className="relative aspect-square">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="absolute inset-0 size-full object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                      <blockquote className="flex-1 text-base leading-snug font-medium lg:text-lg">
                        {testimonial.quote}
                      </blockquote>
                      <div>
                        <div className="text-sm font-semibold">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex justify-center gap-3">
              <CarouselPrevious className="static size-10 translate-x-0 translate-y-0 rounded-lg [&>svg]:size-4" />
              <CarouselNext className="static size-10 translate-x-0 translate-y-0 rounded-lg [&>svg]:size-4" />
            </div>
          </Carousel>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent lg:w-24" />
        </div>
      </div>
    </section>
  );
};

export { Testimonial41 };
