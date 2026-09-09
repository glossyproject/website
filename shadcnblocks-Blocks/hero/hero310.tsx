"use client";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";

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
  className?: string;
}

interface Hero310Props extends HeroSocialProofProps {}
type Props = Partial<Hero310Props>;

const defaultProps: Hero310Props = {
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
  avatars: [...packReviewAvatars, ...packReviewAvatars].slice(
      0,
      MAX_REVIEW_AVATARS,
    ),
},
};

const MAX_REVIEW_AVATARS = 10;
const TEAMS_LABEL = "teams onboarded";

const packReviewAvatars =
  defaultProps.reviews?.avatars ?? [];

const Hero310 = (props: Props) => {
  const { heading, description, buttons, reviews, className } = {
    ...defaultProps,
    ...props,
  };

  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);
  const showProof = reviewAvatars.length > 0 || reviews?.count != null;

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto text-center">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-pretty lg:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-4xl text-balance text-muted-foreground lg:text-xl">
            {description}
          </p>
        </div>
        {showProof && (
          <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col items-center gap-3">
            {reviews?.count != null && (
              <p className="text-center text-lg font-medium text-muted-foreground sm:text-xl">
                <span className="font-bold tracking-tight text-foreground">
                  {reviews.count.toLocaleString()}+
                </span>{" "}
                {TEAMS_LABEL}
              </p>
            )}
            {reviewAvatars.length > 0 && (
              <div className="relative w-full max-w-xl sm:max-w-2xl md:max-w-3xl">
                <Marquee>
                  <MarqueeContent
                    pauseOnHover={false}
                    speed={35}
                    gradient
                    gradientColor="var(--color-background)"
                    gradientWidth={64}
                  >
                    {reviewAvatars.map((avatar, index) => (
                      <MarqueeItem key={index} className="mx-1">
                        <Avatar className="size-10 border-2 border-background after:hidden sm:size-11">
                          <AvatarImage src={avatar.src} alt={avatar.alt} />
                        </Avatar>
                      </MarqueeItem>
                    ))}
                  </MarqueeContent>
                </Marquee>
              </div>
            )}
          </div>
        )}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {buttons?.primary && (
            <Button asChild size="lg" className="h-12 w-full px-8 sm:w-auto">
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          )}
          {buttons?.secondary && (
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full px-8 sm:w-auto"
            >
              <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export { Hero310 };
