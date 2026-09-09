import { CircleCheckBig } from "lucide-react";

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
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-1x1.png",
    alt: "Shadcnblocks section preview in the explorer",
  },
};

const MAX_FEATURES = 6;

const Feature344 = (props: Props) => {
  const { heading, description, features, image, className } = {
    ...defaultProps,
    ...props,
  };

  const list = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent to-30%" />
            <div className="absolute inset-0 bg-linear-to-r from-background to-transparent to-30%" />
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full rounded-lg border border-border object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="mb-5 text-4xl font-semibold tracking-tight text-balance lg:text-6xl">
              {heading}
            </h2>
            <p className="mb-12 text-lg text-muted-foreground">{description}</p>
            <ul className="grid max-w-xl gap-5 sm:grid-cols-2">
              {list.map((item, index) => (
                <li
                  key={`${item.title}-${index}`}
                  className="flex items-center gap-1.5"
                >
                  <CircleCheckBig className="size-5 shrink-0 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    {item.title}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature344 };
