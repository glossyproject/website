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

interface Testimonial39Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial39Props>;

const defaultProps: Testimonial39Props = {
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
  <div className="flex items-center gap-2">
    <Avatar className="size-8 rounded-full">
      <AvatarImage src={image} alt={name} />
      <AvatarFallback>{name}</AvatarFallback>
    </Avatar>
    <div>
      <div className="text-xs leading-tight font-medium text-foreground">
        {name}
      </div>
      <div className="text-xs leading-tight text-muted-foreground">{role}</div>
    </div>
  </div>
);

const Testimonial39 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto flex flex-col gap-4">
        <div>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>
        <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {testimonials.map((t) => (
            <li
              key={t.author.name}
              className="flex h-full min-h-0 w-[min(100%,22rem)] shrink-0 snap-center flex-col gap-4 rounded-2xl border border-border bg-muted/30 p-4 md:w-auto"
            >
              <p className="min-h-0 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </p>
              <div className="flex shrink-0 items-end justify-between gap-2">
                <Author
                  image={t.author.image}
                  name={t.author.name}
                  role={t.author.role}
                />
                <div className="h-6 w-16">
                  <img
                    className="h-full w-full object-contain object-right opacity-80"
                    src={t.company.logo}
                    alt={
                      t.company.name ? `${t.company.name} logo` : "Company logo"
                    }
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-4 md:flex-row md:items-stretch">
          {caseStudies.map((cs) => (
            <a
              key={cs.title}
              href={cs.link}
              className="group flex min-h-0 flex-1 flex-row overflow-hidden rounded-xl border border-border bg-card text-left transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none md:min-w-0"
            >
              <div className="w-1/3 min-w-24 shrink-0 sm:w-2/5">
                <img
                  src={cs.background}
                  alt=""
                  className="size-full min-h-32 object-cover md:min-h-40"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1.5 p-4">
                <div className="text-xl font-semibold text-foreground tabular-nums sm:text-2xl">
                  {cs.stats[0].number}
                </div>
                <p className="text-xs text-muted-foreground">
                  {cs.stats[0].text}
                </p>
                <p className="text-sm leading-tight font-medium text-foreground">
                  {cs.title}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Testimonial39 };
