import { ArrowRight } from "lucide-react";

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

interface HeroInsetImageProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  image: Image;
  insetImage?: Image;
  byline?: string;
  className?: string;
}

interface Hero317Props extends HeroInsetImageProps {}
type Props = Partial<Hero317Props>;

const defaultProps: Hero317Props = {
  heading: "The AI-powered CRM solution.",
  description:
    "Let AI help you manage accounts, deals, and handoffs in one place. Experience the future of CRM with AI-powered insights and automation.",
  buttons: {
    primary: { text: "Get started", url: "#" },
    secondary: { text: "Learn more", url: "#" },
  },
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9.png",
    srcDark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-hero/saas-hero-1-16x9-dark.png",
    alt: "CRM pipeline dashboard",
  },
  insetImage: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-inset-detail/saas-inset-detail-2.png",
    alt: "CRM dashboard detail",
  },
  byline: "No credit card required",
};

const Hero317 = (props: Props) => {
  const { heading, description, buttons, image, insetImage, byline, className } =
    {
      ...defaultProps,
      ...props,
    };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-16 gap-y-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-8">
            <div className="flex max-w-lg flex-col gap-6">
              {byline && (
                <span className="w-fit rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
                  {byline}
                </span>
              )}
              <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {heading}
              </h1>
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              {buttons?.primary && (
                <Button asChild size="lg">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <ArrowRight />
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button asChild variant="outline" size="lg">
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ArrowRight />
                  </a>
                </Button>
              )}
            </div>
          </div>
          <div className="min-w-0 pt-12 pr-12 md:pt-16 md:pr-16">
            <div className="relative overflow-visible">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-4/3 w-full rounded-xl border border-border bg-muted object-cover object-top-left"
              />
              {insetImage && (
                <div className="absolute -top-6 -right-6 z-20 w-40 overflow-hidden rounded-md bg-white shadow-sm md:-top-8 md:-right-8 md:w-56 md:rounded-xl lg:w-64">
                  <img
                    src={insetImage.src}
                    alt={insetImage.alt}
                    className="aspect-square w-full object-contain object-center p-2"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero317 };
