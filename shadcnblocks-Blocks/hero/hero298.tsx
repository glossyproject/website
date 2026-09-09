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
interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  avatar?: string;
}

interface HeroSocialProofProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  reviews?: Reviews;
  testimonials?: Testimonial[];
  className?: string;
}

interface Hero298Props extends HeroSocialProofProps {}
type Props = Partial<Hero298Props>;

const defaultProps: Hero298Props = {
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
  testimonials: [
    {
      quote:
        "This platform transformed how our team collaborates. The results speak for themselves.",
      author: "Jane Cooper",
      role: "CEO",
      company: "Acme Corp",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar1.jpg",
    },
    {
      quote:
        "From my experience, it was truly the people who made the difference in our success.",
      author: "John Smith",
      role: "CTO",
      company: "TechCo",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar2.jpg",
    },
    {
      quote:
        "People who are passionate about creating meaningful connections and driving innovation forward.",
      author: "Sarah Johnson",
      role: "VP Engineering",
      company: "StartupXYZ",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/avatars/avatar3.jpg",
    },
  ],
};

const MAX_REVIEW_AVATARS = 5;

const Hero298 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    testimonials,
    reviews,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const testimonial = testimonials?.[0];
  const reviewAvatars = (reviews?.avatars ?? []).slice(0, MAX_REVIEW_AVATARS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-pretty lg:text-6xl">
          {heading}
        </h1>
        <p className="mx-auto mt-6 max-w-4xl text-balance text-muted-foreground lg:text-xl">
          {description}
        </p>
        {buttons?.primary && (
          <Button asChild size="lg" className="mt-10 h-12 px-8">
            <a href={buttons.primary.url}>{buttons.primary.text}</a>
          </Button>
        )}
        {testimonial && (
          <blockquote className="mx-auto mt-14 max-w-3xl text-center">
            <p className="text-balance text-xl font-medium leading-snug text-foreground md:text-2xl md:leading-snug">
              &quot;{testimonial.quote}&quot;
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              {testimonial.author}
              {testimonial.role && `, ${testimonial.role}`}
              {testimonial.company && ` at ${testimonial.company}`}
            </footer>
          </blockquote>
        )}
        {reviews && (
          <div className="mx-auto mt-10 flex w-fit flex-col items-center gap-3 sm:flex-row sm:gap-4">
            {reviewAvatars.length > 0 && (
              <span className="inline-flex items-center -space-x-3">
                {reviewAvatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className="size-10 border-2 border-background after:hidden"
                  >
                    <AvatarImage src={avatar.src} alt={avatar.alt} />
                  </Avatar>
                ))}
              </span>
            )}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className="size-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-1 text-sm font-semibold text-foreground">
                  {reviews.rating.toFixed(1)}
                </span>
              </div>
              <p className="text-xs font-medium text-muted-foreground">
                {reviews.count}+ reviews
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export { Hero298 };
