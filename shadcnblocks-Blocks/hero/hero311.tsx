import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface HeroCard {
  title: string;
  description: string;
  image?: Image;
  icon?: React.ReactNode;
  href?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroCardsProps {
  badge?: Badge;
  heading: string;
  description?: string;
  cards: HeroCard[];
  className?: string;
}

interface Hero311Props extends HeroCardsProps {}
type Props = Partial<Hero311Props>;

const defaultProps: Hero311Props = {
  badge: { text: "Now in Beta" },
  heading: "Build better products with Shadcnblocks",
  description:
    "An open-source project management platform built for modern product teams. Plan, track, and ship with confidence.",
  cards: [
    {
      title: "Unified Dashboard",
      description:
        "See everything at a glance — tasks, deadlines, and team progress in one view.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-2BwaAhZtNYA-unsplash.jpg",
        alt: "Architectural interior",
      },
    },
    {
      title: "Custom Workflows",
      description:
        "Design your own processes with drag-and-drop automation rules.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-5oYbG-sEImY-unsplash.jpg",
        alt: "Modern workspace",
      },
    },
    {
      title: "Real-time Analytics",
      description: "Track velocity, burndown, and cycle time with live charts.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-9__Q24sJqKg-unsplash.jpg",
        alt: "Creative studio",
      },
    },
    {
      title: "Team Collaboration",
      description:
        "Share updates, assign work, and stay aligned across every project.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-cX5tYHCNJeI-unsplash.jpg",
        alt: "Design detail",
      },
    },
    {
      title: "Launch Planning",
      description:
        "Coordinate releases with timelines, owners, and stakeholder visibility.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos5/simone-hutsch-duxeKbu9FDE-unsplash.jpg",
        alt: "Team environment",
      },
    },
  ],
};

const Hero311 = (props: Props) => {
  const { badge, heading, description, cards, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("relative overflow-hidden py-32", className)}>
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)]"></div>
      </div>
      <div className="relative container flex flex-col items-center gap-4 text-center md:gap-6">
        {badge &&
          (badge.url ? (
            <Badge variant="outline" asChild>
              <a href={badge.url}>{badge.text}</a>
            </Badge>
          ) : (
            <Badge variant="outline">{badge.text}</Badge>
          ))}
        <h1 className="max-w-3xl text-3xl font-semibold text-pretty md:text-4xl lg:text-6xl">
          {heading}
        </h1>
        {description && (
          <p className="max-w-2xl text-muted-foreground lg:text-xl">
            {description}
          </p>
        )}
      </div>
      <div className="container mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
        {cards.slice(0, 3).map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "relative flex flex-col overflow-hidden rounded-xl border bg-background/70 text-center backdrop-blur-sm",
              index === 1 && "md:translate-y-12",
            )}
          >
            {item.image && (
              <div className="shrink-0 overflow-hidden">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="aspect-square object-cover"
                />
              </div>
            )}
            <div className="flex flex-col items-center p-4 md:p-8">
              <h3 className="mb-3 text-lg font-semibold md:text-2xl">
                {item.title}
              </h3>
              <p className="mb-auto text-sm text-muted-foreground md:text-base">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export { Hero311 };
