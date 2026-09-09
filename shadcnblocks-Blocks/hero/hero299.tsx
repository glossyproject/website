
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
  className?: string;
}

interface Hero299Props extends HeroSocialProofProps {}
type Props = Partial<Hero299Props>;

const defaultProps: Hero299Props = {
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
  stats: [{ value: "24K+", label: "Active users" }],
};

const MAX_REVIEW_AVATARS = 5;

const Hero299 = (props: Props) => {
  const { heading, description, buttons, reviews, stats, className } = {
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
        {buttons?.primary && (
          <Button asChild size="lg" className="mt-10 h-12 px-8">
            <a href={buttons.primary.url}>{buttons.primary.text}</a>
          </Button>
        )}
        {(reviewAvatars.length > 0 || primaryStat) && (
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-4">
            {reviewAvatars.length > 0 && (
              <span className="inline-flex items-center -space-x-3">
                {reviewAvatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="size-12 border-2 border-background ring-2 ring-background after:hidden"
                  >
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
            )}
            {primaryStat && (
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {primaryStat.value}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {primaryStat.label}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero299 };
