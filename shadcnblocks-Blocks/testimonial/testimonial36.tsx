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

interface Testimonial36Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial36Props>;

const defaultProps: Testimonial36Props = {
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
    <Avatar className="size-10 rounded-xl bg-background/50">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
    <div className="flex flex-col gap-0.5">
      <div className="text-xs font-medium text-foreground">{name}</div>
      <div className="text-xs text-muted-foreground">{role}</div>
    </div>
  </div>
);

const Testimonial36 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight">
                {heading}
              </h2>
              <p className="max-w-xl text-lg text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.author.name}
                  className="flex flex-col gap-4 rounded-2xl border border-border bg-muted/40 p-5"
                >
                  <p className="text-sm leading-relaxed font-medium text-foreground">
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
                        className="w-full object-contain opacity-80"
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
          </div>
          <div className="min-h-0 overflow-hidden rounded-2xl border border-border">
            {caseStudies.map((cs, i) => (
              <a
                key={cs.title}
                href={cs.link}
                className={cn(
                  "group flex flex-col gap-4 p-4 transition-colors hover:bg-muted/50 focus-visible:bg-muted/50 sm:flex-row sm:items-center sm:gap-5 sm:p-5",
                  "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset",
                  i !== 0 && "border-t border-border",
                )}
              >
                <div className="size-24 shrink-0 self-start overflow-hidden rounded-lg sm:self-center">
                  <img
                    src={cs.background}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col justify-center gap-1 sm:gap-2">
                  <div className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {cs.stats[0].number}
                  </div>
                  <p className="text-sm leading-snug font-semibold text-foreground sm:text-base">
                    {cs.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial36 };
