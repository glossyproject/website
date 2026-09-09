
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
interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface HeroSocialProofProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  reviews?: Reviews;
  stats?: Stat[];
  byline?: string;
  className?: string;
}

interface Hero300Props extends HeroSocialProofProps {}
type Props = Partial<Hero300Props>;

const defaultProps: Hero300Props = {
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
  stats: [{ value: "1M+", label: "Downloads" }],
  byline: "Trusted by 25,000+ businesses worldwide",
};

const MAX_REVIEW_AVATARS = 4;

const Hero300 = (props: Props) => {
  const { heading, description, buttons, reviews, stats, byline, className } = {
    ...defaultProps,
    ...props,
  };

  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);
  const primaryStat = stats?.[0];

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
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
          {buttons?.primary && (
            <Button asChild size="lg" className="h-12 px-8">
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          )}
          {(reviewAvatars.length > 0 || primaryStat) && (
            <div className="inline-flex h-12 max-w-full items-center gap-3 rounded-md border border-border bg-muted/50 px-4 sm:gap-4 sm:px-5">
              {reviewAvatars.length > 0 && (
                <span className="inline-flex shrink-0 items-center -space-x-2">
                  {reviewAvatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className="size-8 border-2 border-background after:hidden"
                    >
                      <AvatarImage src={avatar.src} alt={avatar.alt} />
                    </Avatar>
                  ))}
                </span>
              )}
              {primaryStat && (
                <div className="flex shrink-0 items-center gap-1.5 text-left">
                  <span className="text-base font-bold text-foreground">
                    {primaryStat.value}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">
                    {primaryStat.label}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
        {byline && (
          <p className="mt-4 text-sm text-muted-foreground">{byline}</p>
        )}
      </div>
    </section>
  );
};

export { Hero300 };
