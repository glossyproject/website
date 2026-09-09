import { Check, ChevronRight } from "lucide-react";
import { type SVGProps, useId } from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Cta40Props extends CtaPricingProps {}
type Props = Partial<Cta40Props>;
interface PlusSignsProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const defaultProps: Cta40Props = {
  heading: "Launch today",
  description:
    "In the past, new financial companies had to rely on expensive middleware that linked them to outdated sponsor bank systems, restricting their potential. Our API solves this today.",
  buttons: {
    primary: {
      text: "Start for free",
      url: "https://shadcnblocks.com",
    },
    secondary: {
      text: "Get a demo",
      url: "https://shadcnblocks.com",
    },
  },
  features: ["All free plan features and...", "Mainline AI", "Unlimited teams"],
  priceAmount: "$29.99",
  priceCaption: "per user per month",
};

const Cta40 = (props: Props) => {
  const {
    heading,
    description,
    buttons,
    features,
    priceAmount,
    priceCaption,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32 text-background", className)}>
      <div className="container mx-auto max-w-5xl">
        <div className="relative isolate grid items-center overflow-hidden bg-linear-to-r from-primary to-primary/75 py-8 max-lg:gap-10 max-md:gap-6 md:rounded-3xl lg:grid-cols-2 lg:px-8">
          <div className="absolute inset-0 -z-10 mask-[linear-gradient(to_left,black_50%,transparent_100%)]">
            <PlusSigns className="h-full w-full text-background/5" />
          </div>
          <div className="border-background/20 lg:border-e lg:py-16 lg:pr-20">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="mt-3 text-sm font-medium text-background/70">
                {description}
              </p>
            )}
            <div className="mt-8 flex flex-wrap gap-4 max-md:hidden">
              {buttons?.primary && (
                <Button size="lg" variant="secondary" className="group" asChild>
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  size="lg"
                  className="group bg-secondary-foreground"
                  asChild
                >
                  <a href={buttons.secondary.url}>
                    {buttons.secondary.text}
                    <ChevronRight className="ml-1 size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              )}
            </div>
          </div>

          <div className="space-y-6 lg:py-10 lg:pl-20">
            {(priceAmount || priceCaption) && (
              <div>
                {priceAmount && (
                  <h3 className="text-3xl font-semibold text-background md:text-4xl lg:text-5xl">
                    {priceAmount}
                  </h3>
                )}
                {priceCaption && (
                  <p className="mt-1 text-xl font-medium text-background/70">
                    {priceCaption}
                  </p>
                )}
              </div>
            )}
            <ul className="space-y-3 text-sm text-background/70">
              {features.map((item, idx) => (
                <li className="flex items-center gap-2" key={idx}>
                  <Check className="size-4" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4 md:hidden">
              {buttons?.primary && (
                <Button
                  size="lg"
                  variant="secondary"
                  className="group w-full"
                  asChild
                >
                  <a
                    href={buttons.primary.url}
                    className="flex items-center justify-center gap-2"
                  >
                    {buttons.primary.text}
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </Button>
              )}
              {buttons?.secondary && (
                <Button
                  size="lg"
                  className="group w-full bg-secondary-foreground"
                  asChild
                >
                  <a
                    href={buttons.secondary.url}
                    className="flex items-center justify-center gap-2"
                  >
                    {buttons.secondary.text}
                    <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
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

export { Cta40 };

const PlusSigns = ({ className, ...props }: PlusSignsProps) => {
  const GAP = 16;
  const STROKE_WIDTH = 1;
  const PLUS_SIZE = 6;
  const id = useId();
  const patternId = `plus-pattern-${id}`;

  return (
    <svg width={GAP * 2} height={GAP * 2} className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          x="0"
          y="0"
          width={GAP}
          height={GAP}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={GAP / 2}
            y1={(GAP - PLUS_SIZE) / 2}
            x2={GAP / 2}
            y2={(GAP + PLUS_SIZE) / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
          <line
            x1={(GAP - PLUS_SIZE) / 2}
            y1={GAP / 2}
            x2={(GAP + PLUS_SIZE) / 2}
            y2={GAP / 2}
            stroke="currentColor"
            strokeWidth={STROKE_WIDTH}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};
