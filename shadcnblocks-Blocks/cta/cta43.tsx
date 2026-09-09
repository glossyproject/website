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

interface Cta43Props extends CtaImageBackgroundProps {}
type Props = Partial<Cta43Props>;

const defaultProps: Cta43Props = {
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

const Cta43 = (props: Props) => {
  const { heading, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn(className)}>
      <div className="relative flex h-[400px] items-center justify-center overflow-hidden md:h-[600px]">
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-linear-to-b from-foreground/55 to-foreground/20"
          aria-hidden
        />
        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col gap-8 p-4 text-center">
          <h2 className="mx-auto max-w-3xl text-2xl font-semibold tracking-tight text-balance text-primary-foreground md:text-5xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-5xl text-base font-medium text-primary-foreground md:text-lg">
            {description}
          </p>
          <div className="flex flex-col justify-center gap-2 sm:flex-row sm:gap-3">
            <Button size="lg" variant="secondary" asChild>
              <a href={buttons.primary.url}>{buttons.primary.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta43 };
