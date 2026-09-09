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

interface Testimonial38Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial38Props>;

const defaultProps: Testimonial38Props = {
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
    <Avatar className="size-9 rounded-md">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
    <div className="flex min-w-0 flex-col">
      <div className="truncate text-xs font-medium text-foreground">{name}</div>
      <div className="truncate text-xs text-muted-foreground">{role}</div>
    </div>
  </div>
);

const Testimonial38 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="mb-10 flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
          {testimonials.map((t) => (
            <div
              key={t.author.name}
              className="flex min-h-32 flex-col gap-4 p-5 md:min-h-32 md:flex-row md:items-center md:justify-between md:gap-8"
            >
              <p className="line-clamp-2 min-h-12 max-w-2xl flex-1 text-left text-sm font-medium text-pretty text-foreground md:min-h-16 md:text-base">
                {t.quote}
              </p>
              <div className="flex shrink-0 items-center justify-between gap-4 md:w-64 md:justify-end">
                <Author
                  image={t.author.image}
                  name={t.author.name}
                  role={t.author.role}
                />
                <div className="w-20">
                  <img
                    className="w-full object-contain opacity-70"
                    src={t.company.logo}
                    alt={
                      t.company.name ? `${t.company.name} logo` : "Company logo"
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {caseStudies.map((cs) => (
            <a
              key={cs.title}
              href={cs.link}
              className="flex h-full min-h-32 flex-col gap-1 rounded-xl border border-border p-4 text-left transition-colors hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
            >
              <span className="text-2xl font-semibold text-foreground tabular-nums">
                {cs.stats[0].number}
              </span>
              <span className="text-xs text-muted-foreground">
                {cs.stats[0].text}
              </span>
              <span className="text-sm leading-snug font-medium text-foreground">
                {cs.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial38 };
