import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
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

interface HeroBasicProps {
  badge?: Badge;
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  className?: string;
}

interface Hero263Props extends HeroBasicProps {}
type Props = Partial<Hero263Props>;

const defaultProps: Hero263Props = {
  badge: {
    text: "Changelog v1.1",
    announcement: "Check out our latest updates",
  },
  heading: "Blocks Built With Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Browse Components",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "View GitHub",
      url: "https://shadcnblocks.com",
    },
  },
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
    srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "Hero Image Placeholder",
  },
};

const Hero263 = (props: Props) => {
  const { badge, heading, description, buttons, image, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          {badge && (
            <Badge variant="outline">
              {badge.text}
              <ArrowUpRight className="size-4" />
            </Badge>
          )}
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-pretty md:text-5xl lg:max-w-3xl lg:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-5xl text-balance text-muted-foreground lg:text-xl">
            {description}
          </p>
          <div className="flex w-full flex-col gap-2 sm:flex-row sm:justify-center">
            {buttons?.primary && (
              <Button asChild className="w-full sm:w-auto">
                <a href={buttons.primary.url}>
                  {buttons.primary.text}
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            )}
            {buttons?.secondary && (
              <Button asChild variant="outline" className="w-full sm:w-auto">
                <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
              </Button>
            )}
          </div>
        </div>
        {image.srcDark ? (
          <>
            <img
              src={image.src}
              alt={image.alt}
              className="mt-16 aspect-3/4 w-full rounded-md border border-border object-cover object-top-left md:aspect-video md:object-top dark:hidden"
            />
            <img
              src={image.srcDark}
              alt={image.alt}
              className="mt-16 hidden aspect-3/4 w-full rounded-md border border-border object-cover object-top-left md:aspect-video md:object-top dark:block"
            />
          </>
        ) : (
          <img
            src={image.src}
            alt={image.alt}
            className="mt-16 aspect-3/4 w-full rounded-md border border-border object-cover object-top-left md:aspect-video md:object-top"
          />
        )}
      </div>
    </section>
  );
};

export { Hero263 };
