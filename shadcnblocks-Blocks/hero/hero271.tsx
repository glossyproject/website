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

interface Hero271Props extends HeroInsetImageProps {}
type Props = Partial<Hero271Props>;

const defaultProps: Hero271Props = {
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

const Hero271 = (props: Props) => {
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
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="relative z-10 container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          <div>
            <div className="flex h-full flex-col justify-between gap-6 md:gap-24">
              <div className="flex flex-col gap-4">
                <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                  {heading}
                </h1>
                <p className="text-lg text-muted-foreground">{description}</p>
              </div>
              <div className="flex flex-wrap items-center gap-5">
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
                {byline && <p className="text-muted-foreground">{byline}</p>}
              </div>
            </div>
          </div>
          <div className="min-w-0 pb-12 pl-12 md:pb-16 md:pl-16">
            <div className="relative -mr-8 w-[calc(100%+2rem)] max-w-none min-w-[50vw] overflow-visible md:-mr-12 md:w-[calc(100%+3rem)] lg:-mr-16 lg:w-[calc(100%+4rem)]">
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-4/3 w-full rounded-xl border border-border bg-muted object-cover object-top-left lg:rounded-r-none lg:border-r-0"
              />
              {insetImage && (
                <div className="absolute -bottom-6 -left-6 z-20 w-44 overflow-hidden rounded-md bg-white shadow-sm md:-bottom-8 md:-left-8 md:w-64 md:rounded-xl lg:w-72">
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-0 left-0 hidden h-[min(50vh,24rem)] w-[50vw] text-muted-foreground/35 md:block md:h-[min(55vh,30rem)] lg:h-[min(60vh,36rem)]"
          style={{
            backgroundImage:
              "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
    </section>
  );
};

export { Hero271 };
