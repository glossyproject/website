import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Reviews {
  count: number;
  rating: number;
  avatars: Avatar[];
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}
interface Avatar {
  src: string;
  alt: string;
}

interface HeroSocialProofProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  reviews?: Reviews;
  byline?: string;
  className?: string;
}

interface Hero296Props extends HeroSocialProofProps {}
type Props = Partial<Hero296Props>;

const defaultProps: Hero296Props = {
  heading: "Introducing the world's best marketing software.",
  description:
    "Loved by marketers around the world—plan campaigns, track results, and grow faster with the tools teams actually rely on.",
  buttons: {
    primary: {
      text: "Get Started",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "View Reviews",
      url: "https://www.shadcnblocks.com",
    },
  },
  reviews: {
    count: 206,
    rating: 4.9,
    avatars: [
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar1.jpg", alt: "Mia Chen" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar2.jpg", alt: "Marcus Rivera" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg", alt: "Priya Sharma" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar4.jpg", alt: "James Okafor" },
      { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar5.jpg", alt: "Sofia Chen" },
    ],
  },
  byline: "Trusted by 25,000+ businesses worldwide",
};

const MAX_REVIEW_AVATARS = 5;

const Hero296 = (props: Props) => {
  const { heading, description, buttons, reviews, byline, className } = {
    ...defaultProps,
    ...props,
  };

  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);
  const filledStars = reviews ? Math.round(reviews.rating) : 0;

  return (
    <section className={cn("py-12 md:py-20 lg:py-28", className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="flex flex-col gap-8 lg:max-w-xl lg:flex-1">
            <div className="flex flex-col gap-6">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:text-6xl">
                {heading}
              </h1>
              <p className="max-w-2xl text-balance text-muted-foreground lg:text-xl">
                {description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button asChild size="lg" className="h-12 w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 w-full sm:w-auto"
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                  </a>
                </Button>
              )}
            </div>
          </div>

          {reviews && (
            <div className="flex w-full flex-col gap-8 border-border lg:w-auto lg:max-w-sm lg:border-l lg:pl-12">
              <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
                <p className="text-6xl font-bold leading-none tracking-tight text-foreground md:text-7xl">
                  {reviews.rating.toFixed(1)}
                </p>
                <div className="flex flex-col items-start gap-1 pb-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={cn(
                          "size-4 sm:size-5",
                          index < filledStars
                            ? "fill-amber-400 text-amber-400"
                            : "fill-none stroke-amber-500/70 dark:stroke-amber-400/70",
                        )}
                      />
                    ))}
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {reviews.count}+ reviews
                  </p>
                </div>
              </div>
              {reviewAvatars.length > 0 && (
                <div className="flex items-center gap-4">
                  <span className="inline-flex shrink-0 items-center -space-x-3">
                    {reviewAvatars.map((avatar, index) => (
                      <Avatar
                        key={index}
                        className="size-12 border-2 border-background after:hidden sm:size-14"
                      >
                        <AvatarImage src={avatar.src} alt={avatar.alt} />
                      </Avatar>
                    ))}
                  </span>
                  {byline && (
                    <p className="max-w-48 text-left text-sm leading-snug text-muted-foreground">
                      {byline}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero296 };
