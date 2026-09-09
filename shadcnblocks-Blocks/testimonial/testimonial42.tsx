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

interface Testimonial42Props {
  heading?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const Testimonial42 = ({
  heading = "What our customers say",
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
        "I have tried dozens of similar tools. This is the only one that actually delivers on its promises. Genuinely exceptional.",
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
    {
      quote:
        "Reporting used to eat half our sprint. Now we spin up dashboards in minutes and everyone trusts the numbers.",
      author: "Sarah Lin",
      role: "Director of Ops",
      company: "Northline",
      image: "/image-set/modern/portraits/portrait-action-5-1x1.jpg",
    },
    {
      quote:
        "We finally have one place for feedback, specs, and launch checklists. The team actually uses it every day.",
      author: "Marcus Reid",
      role: "Engineering Lead",
      company: "Parcel Co",
      image: "/image-set/modern/portraits/portrait-action-6-1x1.jpg",
    },
  ],
  className,
}: Testimonial42Props) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-center md:justify-between md:gap-8">
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            <div className="flex shrink-0 justify-end gap-3 md:justify-start">
              <CarouselPrevious className="static size-10 translate-x-0 translate-y-0 rounded-lg [&>svg]:size-4" />
              <CarouselNext className="static size-10 translate-x-0 translate-y-0 rounded-lg [&>svg]:size-4" />
            </div>
          </div>

          <div className="relative">
            <CarouselContent className="-ml-4 lg:-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[85%] pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 lg:pl-6"
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

            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent lg:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent lg:w-24" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Testimonial42 };
