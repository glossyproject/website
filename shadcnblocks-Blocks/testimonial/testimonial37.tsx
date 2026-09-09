import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { cn } from "@/lib/utils";

interface TestimonialCaseStudiesAuthor {
  name: string;
  image: string;
  role: string;
}
interface TestimonialCaseStudiesItem {
  quote: string;
  author: TestimonialCaseStudiesAuthor;
  company: {
    logo: string;
    name: string;
  };
}
interface TestimonialCaseStudiesStat {
  number: string;
  text: string;
}
interface TestimonialCaseStudiesCaseStudy {
  title: string;
  link: string;
  stats: TestimonialCaseStudiesStat[];
  background: string;
}

interface TestimonialCaseStudiesProps {
  heading: string;
  description: string;
  testimonials: TestimonialCaseStudiesItem[];
  caseStudies: TestimonialCaseStudiesCaseStudy[];
  className?: string;
}

interface Testimonial37Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial37Props>;

const defaultProps: Testimonial37Props = {
  heading: "What teams say about Shadcnblocks",
  description:
    "Developers use our shadcn/ui blocks to ship marketing pages and product UI faster. Here is how the library fits real React and Tailwind workflows.",
  testimonials: [
    {
      quote:
        "What I like most is having patterns and primitives in one place. It feels ten times more straightforward than piecing together random scheduling and routing demos.",
      author: {
        name: "Morgan Ellis",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar1.jpg",
        role: "CTO, Northwind Labs",
      },
      company: {
        logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
        name: "Northwind Labs",
      },
    },
    {
      quote:
        "We dropped these sections into a Vite app next to our own shadcn config. The blocks respect our theme tokens and we did not need a separate design tool for the first launch.",
      author: {
        name: "Riley Park",
        image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/avatars/avatar2.jpg",
        role: "Engineering lead",
      },
      company: {
        logo: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
        name: "Stackhouse",
      },
    },
  ],
  caseStudies: [
    {
      title: "How we moved pages from Figma to production in a week",
      link: "#",
      stats: [
        {
          number: "10x",
          text: "faster handoff on new sections",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/1-16x9.jpg",
    },
    {
      title: "Tighter layout consistency across the marketing site",
      link: "#",
      stats: [
        {
          number: "80%",
          text: "less one-off CSS per page",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/2-16x9.jpg",
    },
    {
      title: "From blank repo to a credible landing in one sprint",
      link: "#",
      stats: [
        {
          number: "25k+",
          text: "blocks browsed in the first month",
        },
      ],
      background: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/3-16x9.jpg",
    },
  ],
};

const Author = ({
  image,
  name,
  role,
}: {
  image: string;
  name: string;
  role: string;
}) => (
  <div className="flex items-center gap-3">
    <Avatar className="size-10 rounded-full border border-background/20 bg-background/10">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback className="bg-background/10 text-background">
        {name}
      </AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-0.5">
      <div className="text-xs font-medium text-background">{name}</div>
      <div className="text-xs text-background/70">{role}</div>
    </div>
  </div>
);

const Testimonial37 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="overflow-hidden rounded-2xl bg-foreground px-5 py-10 text-background md:px-10 md:py-14">
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {heading}
              </h2>
              <p className="mt-4 text-lg text-background/80">{description}</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {testimonials.map((t) => (
                <div
                  key={t.author.name}
                  className="flex h-full flex-col justify-between gap-6 rounded-xl border border-background/15 bg-background/5 p-5"
                >
                  <p className="text-sm leading-relaxed font-medium text-background md:text-base">
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-between gap-3">
                    <Author
                      image={t.author.image}
                      name={t.author.name}
                      role={t.author.role}
                    />
                    <div className="w-20">
                      <img
                        className="w-full object-contain opacity-90 invert"
                        src={t.company.logo}
                        alt={
                          t.company.name
                            ? `${t.company.name} logo`
                            : "Company logo"
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {caseStudies.map((cs) => (
                <a
                  key={cs.title}
                  href={cs.link}
                  className="group flex flex-col gap-2 rounded-xl border border-background/20 bg-background/5 p-4 transition-colors hover:bg-background/10 focus-visible:ring-2 focus-visible:ring-background focus-visible:ring-offset-2 focus-visible:ring-offset-foreground focus-visible:outline-none"
                >
                  <div className="text-2xl font-semibold text-background tabular-nums">
                    {cs.stats[0].number}
                  </div>
                  <p className="text-xs font-medium text-background/70">
                    {cs.stats[0].text}
                  </p>
                  <p className="text-sm leading-snug font-medium text-background">
                    {cs.title}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial37 };
