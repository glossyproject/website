import { ChevronRight, Plus } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
  avatars?: Avatar[];
  stats?: Stat[];
  className?: string;
}

interface Hero303Props extends HeroSocialProofProps {}
type Props = Partial<Hero303Props>;

const defaultProps: Hero303Props = {
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
  avatars: [
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar1.jpg", alt: "Mia Chen" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar2.jpg", alt: "Marcus Rivera" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg", alt: "Priya Sharma" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar4.jpg", alt: "James Okafor" },
    { src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar5.jpg", alt: "Sofia Chen" },
  ],
  stats: [{ value: "24K+", label: "Active users" }],
};

const MAX_AVATARS = 4;

interface AvatarItem {
  src: string;
  alt: string;
}

interface CommunityAvatarsProps {
  avatars?: AvatarItem[];
  className?: string;
}

function CommunityAvatars({ avatars, className }: CommunityAvatarsProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {(avatars ?? []).map((item, i) => (
        <Avatar key={`avatar-hero303-${i}`} className="size-14 border-2">
          <AvatarImage src={item.src} alt={item.alt} />
          <AvatarFallback>{item.alt.slice(0, 2)}</AvatarFallback>
        </Avatar>
      ))}
      <div className="flex size-14 items-center justify-center rounded-full bg-primary">
        <Plus className="size-4 stroke-primary-foreground" />
      </div>
    </div>
  );
}

const Hero303 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    stats,
    avatars,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const primaryStat = stats?.[0];
  const avatarItems = (avatars ?? []).slice(0, MAX_AVATARS);

  return (
    <section className={cn("py-12 md:py-20", className)}>
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-12 xl:flex-row">
          <div className="flex w-full flex-col gap-8 xl:max-w-xl">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <div className="flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button asChild size="lg" className="w-full gap-2 sm:w-auto">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <ChevronRight className="size-4" />
                  </a>
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
          <div className="w-full xl:max-w-xs xl:self-end">
            <p className="max-w-4xl text-lg text-muted-foreground">{description}</p>
            {primaryStat && (
              <div className="mt-10">
                <p className="text-sm font-medium text-muted-foreground">
                  {primaryStat.label}
                </p>
                <p className="text-4xl font-bold tracking-tight text-foreground">
                  {primaryStat.value}
                </p>
              </div>
            )}
            {avatarItems.length > 0 && (
              <CommunityAvatars avatars={avatarItems} className="mt-8" />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero303 };
