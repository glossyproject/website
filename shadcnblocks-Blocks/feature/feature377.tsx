import { ArrowUpRight } from "lucide-react";

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
  label?: string;
  headingAccent?: string;
  className?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Feature blocks ready to ship with shadcn/ui",
  description: "Shadcnblocks ships production-ready React sections built with Tailwind CSS and shadcn/ui. Pick a block, preview it with your theme, then paste it in or install with the shadcn CLI.",
  label: "Shadcnblocks",
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
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-3x4.png",
  alt: "Shadcnblocks section preview in the explorer",
},
};

const MAX_FEATURES = 5;

/** Like **feature374** with media in the leading column; **aspect-3/4** frame masks toward the copy (bottom-right fade). */
const Feature377 = (props: Props) => {
  const {
    label,
    heading,
    headingAccent,
    description,
    image,
    buttons,
    features,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const featureRows = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("relative bg-background py-24 md:py-32", className)}>
      <div className="relative container px-4 md:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <figure className="relative mx-auto max-w-3xl lg:mr-auto lg:ml-0">
              <div className="relative overflow-hidden rounded-lg border border-border bg-background mask-[linear-gradient(to_top_left,transparent_0%,transparent_14%,rgba(0,0,0,0.35)_32%,rgba(0,0,0,0.92)_46%,#000_58%)] mask-size-[100%_100%] mask-center mask-no-repeat [-webkit-mask-image:linear-gradient(to_top_left,transparent_0%,transparent_14%,rgba(0,0,0,0.35)_32%,rgba(0,0,0,0.92)_46%,#000_58%)] [-webkit-mask-repeat:no-repeat] [-webkit-mask-size:100%_100%]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-3/4 w-full object-cover"
                />
              </div>
            </figure>
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            {label ? (
              <p className="font-mono text-[11px] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                {label}
              </p>
            ) : null}
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
                {heading}
                {headingAccent ? (
                  <>
                    <br />
                    <span className="text-muted-foreground">
                      {headingAccent}
                    </span>
                  </>
                ) : null}
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                {description}
              </p>
            </div>
            {featureRows.length > 0 ? (
              <ul className="divide-y divide-border border-t border-border">
                {featureRows.map((item, index) => {
                  const n = String(index + 1).padStart(2, "0");
                  return (
                    <li
                      className="flex items-baseline gap-2 py-4 first:pt-4"
                      key={`${item.title}-${index}`}
                    >
                      <span className="w-6 shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                        {n}
                      </span>
                      <span className="text-sm leading-snug font-medium md:text-base">
                        {item.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {buttons?.primary ? (
              <Button variant="outline" className="group w-fit gap-2" asChild>
                <a href={buttons.primary.url ?? "#"}>
                  {buttons.primary.text}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature377 };
