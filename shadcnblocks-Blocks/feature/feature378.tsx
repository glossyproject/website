import { type LucideIcon, NotebookText, Globe, Hash, Zap } from "lucide-react";

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

const LIST_ICONS: LucideIcon[] = [NotebookText, Globe, Hash, Zap];

const MAX_FEATURES = 4;

/** Like **feature38** with media in the **leading** column; bordered photo masked **right→left** (transparent on the right toward copy). */
const Feature378 = (props: Props) => {
  const { heading, description, image, features, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  const rows = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4">
        <div className="overflow-hidden rounded-lg bg-background lg:grid lg:min-h-[min(28rem,70vh)] lg:grid-cols-2">
          <div className="relative min-h-[220px] lg:min-h-0">
            <div className="absolute inset-0 overflow-hidden rounded-lg border border-border bg-background mask-[linear-gradient(to_left,transparent_0%,rgba(0,0,0,0.3)_20%,rgba(0,0,0,0.88)_42%,#000_58%)] mask-size-[100%_100%] mask-center mask-no-repeat [-webkit-mask-image:linear-gradient(to_left,transparent_0%,rgba(0,0,0,0.3)_20%,rgba(0,0,0,0.88)_42%,#000_58%)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]">
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 size-full object-cover object-top-left"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 p-6 md:p-10">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                {heading}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            {rows.length > 0 ? (
              <ul className="flex flex-col gap-3">
                {rows.map((item, index) => {
                  const Icon = LIST_ICONS[index] ?? NotebookText;
                  return (
                    <li
                      className="flex items-center gap-3"
                      key={`${item.title}-${index}`}
                    >
                      <Icon
                        className="size-4 shrink-0 text-muted-foreground"
                        aria-hidden
                      />
                      <p className="text-sm leading-snug font-medium">
                        {item.title}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {buttons?.primary ? (
              <Button className="w-fit" variant="outline" size="sm" asChild>
                <a href={buttons.primary.url ?? "#"}>{buttons.primary.text}</a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature378 };
