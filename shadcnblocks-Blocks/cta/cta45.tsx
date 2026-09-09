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

interface CtaImageBackgroundProps {
  heading: string;
  description: string;
  image: Image;
  buttons: {
    primary: Button;
    secondary?: Button;
  };
  className?: string;
}

interface Cta45Props extends CtaImageBackgroundProps {}
type Props = Partial<Cta45Props>;

const defaultProps: Cta45Props = {
  heading: "Call to Action",
  description: "Try our service free for 7 days. No credit card required.",
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/abstract-backgrounds/abstract-light-swirl.png",
    alt: "Abstract product imagery placeholder",
  },
  buttons: {
    primary: {
      text: "Start free trial",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Request a demo",
      url: "https://www.shadcnblocks.com",
    },
  },
};

const Cta45 = (props: Props) => {
  const { heading, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn(className)}>
      <div className="relative h-[400px] overflow-hidden md:h-[600px]">
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-video h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-10 mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-6 p-6 text-center text-background [text-shadow:0_1px_2px_rgb(0_0_0/0.2)]">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-balance md:text-5xl">
            {heading}
          </h2>
          <p className="max-w-5xl text-base font-medium text-background/85 md:text-lg">
            {description}
          </p>
          <Button size="lg" asChild>
            <a href={buttons.primary.url}>{buttons.primary.text}</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Cta45 };
