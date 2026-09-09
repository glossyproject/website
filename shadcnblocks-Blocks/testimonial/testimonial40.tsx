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

interface Testimonial40Props extends TestimonialCaseStudiesProps {}
type Props = Partial<Testimonial40Props>;

const defaultProps: Testimonial40Props = {
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
      <div className="text-xs font-medium text-foreground">{name}</div>
      <div className="text-xs text-muted-foreground">{role}</div>
    </div>
  </div>
);

const Testimonial40 = (props: Props) => {
  const { heading, description, testimonials, caseStudies, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("bg-muted/30 py-24", className)}>
      <div className="container mx-auto flex flex-col gap-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 text-muted-foreground md:text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author.name}
              className="flex flex-col justify-between gap-4 rounded-2xl bg-background p-5 shadow-sm ring-1 ring-border/60"
            >
              <p className="text-sm leading-relaxed text-foreground">
                {t.quote}
              </p>
              <div className="flex items-center justify-between gap-3">
                <Author
                  image={t.author.image}
                  name={t.author.name}
                  role={t.author.role}
                />
                <div className="h-6 w-20">
                  <img
                    className="h-full w-full object-contain object-right opacity-80"
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
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((cs, i) => {
            const n = caseStudies.length;
            const centerLastInTwoCol =
              i === n - 1 && n % 2 === 1
                ? "w-full sm:max-lg:col-span-2 sm:max-lg:max-w-md sm:max-lg:justify-self-center"
                : null;

            return (
              <a
                key={cs.title}
                href={cs.link}
                className={cn(
                  "group relative flex aspect-3/4 w-full min-w-0 flex-col justify-end overflow-hidden rounded-2xl p-5 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
                  centerLastInTwoCol,
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${cs.background})` }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/40 to-transparent" />
                <div className="relative z-1 flex w-full min-w-0 flex-col gap-1.5 text-background">
                  <div className="text-3xl font-semibold tabular-nums sm:text-4xl">
                    {cs.stats[0].number}
                  </div>
                  <p className="line-clamp-2 text-xs font-medium text-background/80">
                    {cs.stats[0].text}
                  </p>
                  <p className="line-clamp-2 text-sm leading-tight font-semibold wrap-anywhere sm:text-base">
                    {cs.title}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Testimonial40 };
