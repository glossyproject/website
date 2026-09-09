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

interface Hero318Props extends HeroInsetImageProps {}
type Props = Partial<Hero318Props>;

const defaultProps: Hero318Props = {
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

const Hero318 = (props: Props) => {
  const { heading, description, buttons, image, insetImage, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-x-20 gap-y-16 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0 pb-12 pr-12 md:pb-16 md:pr-16">
            <div className="relative overflow-visible rounded-2xl bg-linear-to-br from-chart-1/25 to-chart-3/25 p-6 md:p-10">
              <div className="relative overflow-hidden rounded-xl border border-border bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-4/3 w-full object-cover object-top-left"
                />
              </div>
              {insetImage && (
                <div className="absolute -right-4 -bottom-4 z-20 w-44 overflow-hidden rounded-md bg-white shadow-sm md:-right-6 md:-bottom-6 md:w-64 md:rounded-xl lg:w-72">
                  <img
                    src={insetImage.src}
                    alt={insetImage.alt}
                    className="aspect-square w-full object-contain object-center p-2"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex max-w-lg flex-col gap-6">
              <h1 className="font-display text-5xl tracking-tight text-foreground md:text-6xl">
                {heading}
              </h1>
              <p className="text-xl text-muted-foreground">{description}</p>
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
        </div>
      </div>
    </section>
  );
};

export { Hero318 };
