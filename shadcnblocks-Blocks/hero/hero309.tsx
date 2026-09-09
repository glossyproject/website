
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

interface Hero309Props extends HeroSocialProofProps {}
type Props = Partial<Hero309Props>;

const defaultProps: Hero309Props = {
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
  stats: [
    { value: "24K+", label: "Active users" },
    { value: "1M+", label: "Downloads" },
  ],
  byline: "Trusted by 25,000+ businesses worldwide",
};

const MAX_STATS = 2;
const MAX_REVIEW_AVATARS = 5;

const Hero309 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    stats,
    reviews,
    byline,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const statItems = (stats ?? []).slice(0, MAX_STATS);
  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);

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
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              className="h-12 w-full sm:w-auto"
            >
              <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
            </Button>
          )}
        </div>
        {statItems.length > 0 && (
          <div className="mx-auto mt-14 flex max-w-lg flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            {statItems.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
        {reviewAvatars.length > 0 && (
          <span className="mt-8 inline-flex items-center justify-center -space-x-3">
            {reviewAvatars.map((avatar, index) => (
              <Avatar
                key={index}
                className="size-11 border-2 border-background after:hidden"
              >
                <AvatarImage src={avatar.src} alt={avatar.alt} />
              </Avatar>
            ))}
          </span>
        )}
        {byline && (
          <p className="mt-6 text-sm text-muted-foreground">{byline}</p>
        )}
      </div>
    </section>
  );
};

export { Hero309 };
