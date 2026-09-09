"use client";

import { Check, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface FeatureSingleFocusItem {
  title: string;
  description?: string;
  image?: string;
  href?: string;
}
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

interface FeatureSingleFocusProps {
  heading: string;
  description: string;
  image: Image;
  features?: FeatureSingleFocusItem[];
  buttons?: Buttons;
  className?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Feature blocks ready to ship with shadcn/ui",
  description: "Shadcnblocks ships production-ready React sections built with Tailwind CSS and shadcn/ui. Pick a block, preview it with your theme, then paste it in or install with the shadcn CLI.",
  features: [
    {
      title: "React & TypeScript",
      description:
        "Typed React components you can drop into your app, line up with your path aliases, and ship through the same TypeScript checks and bundler you already use.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-1x1.png",
    },
    {
      title: "Tailwind CSS",
      description:
        "Utility-first styling on Tailwind v4 tokens so spacing, color, and radii follow your config and CSS variables instead of a separate styling layer.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/2-1x1.jpg",
    },
    {
      title: "Shadcn UI Components",
      description:
        "Built from the same registry pieces you install with the shadcn CLI—buttons, cards, dialogs, and more—with Radix primitives where accessibility counts.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/3-1x1.jpg",
    },
    {
      title: "Vite, Next.js, Remix, Astro",
      description:
        "Install the listed npm and registry dependencies, then hook up assets and routes like any other component.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/4-1x1.jpg",
    },
    {
      title: "Registry enabled blocks",
      description:
        "Metadata and file lists match what the shadcn registry expects, so installs stay predictable and your team can trace every dependency from the block page.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/5-1x1.jpg",
    },
    {
      title: "Shadcn theme compatibility",
      description:
        "Sections read your theme tokens and CSS variables, so light, dark, and brand tweaks flow through the same shadcn setup you already ship in production.",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/images/6-1x1.jpg",
    },
  ],
  buttons: {
    secondary: {
      text: "View feature",
      url: "https://www.shadcnblocks.com",
    },
  },
  image: {
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-4x3.png",
  alt: "Shadcnblocks section preview in the explorer",
},
};

const MAX_FEATURES = 3;

const Feature372 = (props: Props) => {
  const { heading, description, image, features, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  const list = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start gap-16 md:flex-row md:items-center">
          <div className="w-full lg:w-2/5">
            <h2 className="mb-8 text-4xl font-semibold tracking-tight lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-10 text-lg text-muted-foreground">{description}</p>
            <ul className="mb-8 flex flex-col gap-2 text-sm text-muted-foreground">
              {list.map((item) => (
                <li className="flex items-center gap-2" key={item.title}>
                  <Check className="size-4 shrink-0 text-primary" />{" "}
                  {item.title}
                </li>
              ))}
            </ul>
            <Button variant="outline" asChild>
              <a href={buttons?.primary?.url ?? "#"}>
                {buttons?.primary?.text ?? "See all blocks"}
                <ChevronRight className="size-4" />
              </a>
            </Button>
          </div>
          <div className="@container-[size] relative isolate flex h-[min(32rem,85vw)] min-h-112 w-full overflow-hidden p-2 lg:h-128 lg:w-3/5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-0 mask-[radial-gradient(ellipse_90%_64%_at_50%_50%,#000_14%,transparent_78%)] mask-size-[100%_100%] mask-no-repeat"
            >
              <div className="absolute inset-0 bg-primary/30 [mask-image:url(https://deifkwefumgah.cloudfront.net/shadcnblocks/ui/patterns/cross-pattern.svg)] mask-size-[32px_32px] mask-repeat" />
            </div>
            <div className="absolute inset-0 z-1 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent to-background opacity-25"></div>
            <div className="absolute inset-0 z-20 flex items-start justify-center pt-1">
              <div className="aspect-4/3 w-[min(100cqw,calc(100cqh*4/3))] max-w-full shrink-0 overflow-hidden rounded-lg border border-border">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 z-5 bg-linear-to-r from-background/50 via-transparent to-background/50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature372 };
