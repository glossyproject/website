import { MoveRight } from "lucide-react";

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

interface Hero324Props extends HeroInsetImageProps {}
type Props = Partial<Hero324Props>;

const defaultProps: Hero324Props = {
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
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-inset-detail/saas-inset-detail-1.png",
  alt: "CRM dashboard detail",
},
  byline: "No credit card required",
};

const Hero324 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    image,
    insetImage,
    byline,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("relative py-32", className)}>
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-32 lg:grid-cols-2">
          <div className="min-w-0 pb-16 pr-16 md:pb-24 md:pr-24">
            <div
              className={cn(
                "relative ml-[calc((100vw-100%)/-2)] flex h-96 w-[calc(100%+(100vw-100%)/2)] max-w-none flex-col overflow-visible bg-linear-to-br from-chart-1/30 to-chart-3/30 pt-4 pl-4 md:h-182.5 md:pt-12 md:pl-12",
                "rounded-lg lg:rounded-l-none lg:rounded-r-lg",
              )}
            >
              <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-tr-md border border-border bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="absolute inset-0 h-full w-full object-cover object-top-left"
                />
                {byline && (
                  <div className="absolute top-4 left-4 z-10 rounded-full border border-border bg-background/95 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm">
                    {byline}
                  </div>
                )}
              </div>
              {insetImage && (
                <div className="absolute -right-6 -bottom-6 z-20 w-56 rounded-lg shadow-md md:-right-8 md:-bottom-8 md:w-72 md:rounded-xl lg:w-80">
                  <div className="overflow-hidden rounded-lg bg-white md:rounded-xl">
                    <img
                      src={insetImage.src}
                      alt={insetImage.alt}
                      className="aspect-square w-full object-contain object-center p-2"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relative z-10 flex min-w-0 flex-col justify-center gap-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-4 right-0 hidden h-56 w-56 text-muted-foreground/30 lg:block"
              style={{
                backgroundImage:
                  "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div className="relative flex max-w-lg flex-col gap-8">
              <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {heading}
              </h1>
              <p className="text-xl text-muted-foreground">{description}</p>
            </div>
            <div className="relative flex flex-wrap items-center gap-5">
              {buttons?.primary && (
                <Button asChild size="lg" className="group">
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <div className="relative h-5 w-5 overflow-hidden">
                      <div className="absolute top-0 left-0 flex -translate-x-1/2 items-center transition-all duration-500 group-hover:translate-x-0">
                        <MoveRight className="size-5 stroke-primary-foreground" />
                        <MoveRight className="size-5 stroke-primary-foreground" />
                      </div>
                    </div>
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-linear-to-r from-chart-1/10 to-transparent md:block"
      />
    </section>
  );
};

export { Hero324 };
