import {
  CheckCircle,
  Edit,
  List,
  type LucideIcon,
  MessagesSquare,
  Timer,
} from "lucide-react";

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

interface FeatureSingleFocusProps {
  heading: string;
  description: string;
  image: Image;
  features?: FeatureSingleFocusItem[];
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
  image: {
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-16x9.png",
  alt: "Shadcnblocks section preview in the explorer",
},
};

const ICONS: LucideIcon[] = [MessagesSquare, Edit, CheckCircle, List, Timer];
const MAX_CARDS = 3;

/** Centered headline stack, **feature86**-style soft card (**aspect-video**) in a muted tray, then three **feature33**-style icon columns. */
const Feature376 = (props: Props) => {
  const { heading, description, image, features, className } = {
    ...defaultProps,
    ...props,
  };

  const cards = (features ?? []).slice(0, MAX_CARDS);

  return (
    <section className={cn("overflow-x-hidden py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-8 text-4xl font-semibold tracking-tight lg:mb-12 lg:text-6xl">
            {heading}
          </h2>
          <p className="font-medium text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        <div className="w-full overflow-hidden rounded-lg border border-muted bg-muted p-10 md:p-12 lg:px-16 lg:pt-16 lg:pb-0">
          <div className="relative isolate w-full max-w-full">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[-18%] z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_52%,rgb(0_0_0/0.08)_0%,rgb(0_0_0/0.02)_45%,transparent_74%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_52%,rgb(0_0_0/0.14)_0%,rgb(0_0_0/0.04)_45%,transparent_74%)]"
            />
            <img
              src={image.src}
              alt={image.alt}
              className="relative z-10 aspect-video h-auto w-full max-w-full rounded-lg border border-border object-cover object-top shadow-[0_0.4rem_1.25rem_-0.4rem_rgb(0_0_0/0.07),0_1rem_2.25rem_-0.6rem_rgb(0_0_0/0.05)] dark:shadow-[0_0.4rem_1.25rem_-0.4rem_rgb(0_0_0/0.14),0_1rem_2.25rem_-0.6rem_rgb(0_0_0/0.1)]"
            />
          </div>
        </div>
        <div className="mx-auto mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {cards.map((feature, index) => {
            const Icon = ICONS[index] ?? MessagesSquare;
            return (
              <div
                className="flex items-start gap-4"
                key={`${feature.title}-${index}`}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1 space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight lg:text-2xl">
                    {feature.title}
                  </h3>
                  {feature.description ? (
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  ) : null}
                  {feature.href ? (
                    <a
                      className="inline-block text-sm font-semibold hover:underline"
                      href={feature.href}
                    >
                      Learn more
                    </a>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature376 };
