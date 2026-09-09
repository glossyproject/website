import { MoveRight, Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}
interface Avatar {
  src: string;
  alt: string;
}

interface HeroSocialProofProps {
  heading: string;
  description: string;
  badge?: Badge;
  buttons?: Buttons;
  reviews?: Reviews;
  className?: string;
}

interface Hero297Props extends HeroSocialProofProps {}
type Props = Partial<Hero297Props>;

const defaultProps: Hero297Props = {
  badge: {
  text: "Customer stories",
  announcement: "See how teams ship faster",
  url: "#",
},
  heading: "Introducing the world's best marketing software.",
  description: "Loved by marketers around the world—plan campaigns, track results, and grow faster with the tools teams actually rely on.",
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
};

const MAX_REVIEW_AVATARS = 5;

const Hero297 = (props: Props) => {
  const { badge, heading, description, buttons, reviews, className } = {
    ...defaultProps,
    ...props,
  };

  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);

  return (
    <section className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <div className="flex w-full flex-col gap-8 lg:max-w-xl">
            {badge && (
              <Button
                asChild
                variant="ghost"
                className="flex h-auto w-fit gap-3 rounded-full border p-1 pr-3 hover:bg-transparent"
              >
                <a href={badge.url ?? "#"}>
                  <Badge className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {badge.text}
                  </Badge>
                  {badge.announcement && (
                    <span className="flex items-center gap-2 text-sm font-medium">
                      {badge.announcement}
                      <MoveRight className="size-4 text-muted-foreground" />
                    </span>
                  )}
                </a>
              </Button>
            )}
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          </div>
          <div className="w-full lg:max-w-sm">
            <p className="max-w-4xl text-lg text-muted-foreground">{description}</p>
            {reviews && (
              <div className="mt-10">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="size-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mt-2 text-4xl font-bold text-foreground">
                  {reviews.rating.toFixed(1)}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Based on {reviews.count}+ verified reviews
                </p>
                {reviewAvatars.length > 0 && (
                  <span className="mt-6 inline-flex items-center -space-x-3">
                    {reviewAvatars.map((avatar, index) => (
                      <Avatar
                        key={index}
                        className="size-12 border-2 border-background after:hidden"
                      >
                        <AvatarImage src={avatar.src} alt={avatar.alt} />
                      </Avatar>
                    ))}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero297 };
