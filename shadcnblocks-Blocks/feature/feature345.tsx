import { ChevronRight } from "lucide-react";

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
  description:
    "Shadcnblocks ships production-ready React sections built with Tailwind CSS and shadcn/ui. Pick a block, preview it with your theme, then paste it in or install with the shadcn CLI.",
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
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-1x1.png",
    alt: "Shadcnblocks section preview in the explorer",
  },
};

const MAX_FEATURES = 6;

const Feature345 = (props: Props) => {
  const { heading, description, image, buttons, features, className } = {
    ...defaultProps,
    ...props,
  };

  const list = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-16 md:flex-row-reverse">
          <img
            src={image.src}
            alt={image.alt}
            className="aspect-square w-full rounded-lg border border-border object-cover md:w-1/2"
          />
          <div className="">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl">
              {heading}
            </h2>
            <p className="mt-1 text-muted-foreground md:mt-6">{description}</p>
            {buttons?.secondary ? (
              <Button variant="outline" className="mt-6" asChild>
                <a href={buttons.secondary.url}>
                  {buttons.secondary.text}
                  <ChevronRight className="size-4" />
                </a>
              </Button>
            ) : null}
            <ul
              className="mt-10 flex flex-col gap-3 text-base leading-relaxed"
              role="list"
            >
              {list.map((item) => (
                <li key={item.title} className="flex gap-x-3">
                  <span className="flex h-lh shrink-0 items-center" aria-hidden>
                    <span className="block size-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="min-w-0 flex-1 text-pretty text-muted-foreground">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature345 };
