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
  className?: string;
}

interface Hero319Props extends HeroInsetImageProps {}
type Props = Partial<Hero319Props>;

const defaultProps: Hero319Props = {
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
};

const Hero319 = (props: Props) => {
  const { heading, description, buttons, image, insetImage, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-32 lg:grid-cols-2">
          <div className="min-w-0 pb-12 pr-12 md:pb-16 md:pr-16">
            <div
              className={cn(
                "relative ml-[calc((100vw-100%)/-2)] flex h-96 w-[calc(100%+(100vw-100%)/2)] max-w-none min-w-[50vw] flex-col overflow-visible bg-muted pt-4 pr-4 md:h-182.5 md:pt-12 md:pr-12",
                "rounded-lg lg:rounded-l-none lg:rounded-r-lg",
              )}
            >
              <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-tr-md border border-border">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top-left"
                />
              </div>
              {insetImage && (
                <div className="absolute -right-6 -bottom-6 z-20 w-44 overflow-hidden rounded-md bg-white shadow-sm md:-right-8 md:-bottom-8 md:w-64 md:rounded-xl lg:w-72">
                  <img
                    src={insetImage.src}
                    alt={insetImage.alt}
                    className="aspect-square w-full object-contain object-center p-2"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="relative flex flex-col justify-center gap-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-8 right-0 hidden h-48 w-48 text-muted-foreground/30 md:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative flex max-w-lg flex-col gap-8">
              <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {heading}
              </h1>
              <p className="text-xl text-muted-foreground">{description}</p>
            </div>
            <div className="relative flex flex-col gap-3 sm:flex-row">
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
        </div>
      </div>
    </section>
  );
};

export { Hero319 };
