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

interface Hero322Props extends HeroInsetImageProps {}
type Props = Partial<Hero322Props>;

const defaultProps: Hero322Props = {
  heading: "The AI-powered CRM solution.",
  description: "Let AI help you manage accounts, deals, and handoffs in one place. Experience the future of CRM with AI-powered insights and automation.",
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
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-inset-detail/saas-inset-detail-4.png",
  alt: "CRM dashboard detail",
},
  byline: "No credit card required",
};

const Hero322 = (props: Props) => {
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
          <div className="min-w-0 pt-12 pl-12 md:pt-16 md:pl-16">
            <div className="relative overflow-visible">
              <div className="rounded-xl p-1 ring-2 ring-chart-1/30 ring-offset-4 ring-offset-background">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-4/3 w-full rounded-lg border border-border bg-muted object-cover object-top-left"
                />
              </div>
              {byline && (
                <div className="absolute top-6 right-6 z-10 rounded-full border border-border bg-background/95 px-4 py-1.5 text-sm text-muted-foreground shadow-sm backdrop-blur-sm">
                  {byline}
                </div>
              )}
              {insetImage && (
                <div className="absolute -top-6 -left-6 z-20 w-44 overflow-hidden rounded-md bg-white shadow-sm md:-top-8 md:-left-8 md:w-64 md:rounded-xl lg:w-72">
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

export { Hero322 };
