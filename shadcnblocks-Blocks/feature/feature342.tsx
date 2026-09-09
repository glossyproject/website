import {
  Blocks,
  ChevronRight,
  Globe,
  Layers,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardListItem {
  title: string;
  description: string;
  image: Image;
  href?: string;
  icon?: React.ReactNode;
  label?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface FeatureCardListProps {
  heading: string;
  description?: string;
  label?: string;
  features?: FeatureCardListItem[];
  className?: string;
}

interface Feature342Props extends FeatureCardListProps {}
type Props = Partial<Feature342Props>;

const defaultProps: Feature342Props = {
  heading: "Build faster with production ready features",
  description:
    "Every component is built with React, Tailwind CSS, and shadcn/ui. Copy, paste, and customize to match your brand in minutes.",
  label: "Features",
  features: [
    {
      icon: <Zap className="size-5" />,
      title: "Full Source Code",
      description:
        "Every block ships as plain React you own. No runtime dependency, no SDK lock-in, just copy and customize.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-1-4x3.svg",
        alt: "Full Source Code",
      },
      href: "https://www.shadcnblocks.com",
    },
    {
      icon: <Palette className="size-5" />,
      title: "Responsive Design",
      description:
        "Every block adapts seamlessly from mobile to desktop with Tailwind's mobile-first utility classes.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-2-4x3.svg",
        alt: "Responsive Design",
      },
      href: "https://www.shadcnblocks.com",
    },
    {
      icon: <Layers className="size-5" />,
      title: "Customizable",
      description:
        "Override any prop, swap icons, adjust spacing — every block is designed to be extended, not locked down.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-3-4x3.svg",
        alt: "Customizable",
      },
      href: "https://www.shadcnblocks.com",
    },
    {
      icon: <Rocket className="size-5" />,
      title: "Production Ready",
      description:
        "Battle-tested in real projects. No placeholder hacks, no lorem ipsum — clean code you can ship today.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-4-4x3.svg",
        alt: "Production Ready",
      },
      href: "https://www.shadcnblocks.com",
    },
    {
      icon: <Blocks className="size-5" />,
      title: "Registry Compatible",
      description:
        "Install blocks directly with the shadcn CLI. Dependencies and registry items are listed in every block's MDX.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-5-4x3.svg",
        alt: "Registry Compatible",
      },
      href: "https://www.shadcnblocks.com",
    },
    {
      icon: <Globe className="size-5" />,
      title: "Framework Agnostic",
      description:
        "Plain ESM + React that works with Next.js, Vite, Remix, and Astro without any Shadcnblocks SDK.",
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-card-detail-6-4x3.svg",
        alt: "Framework Agnostic",
      },
      href: "https://www.shadcnblocks.com",
    },
  ],
};

interface DashedLineProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const DashedLine = ({
  orientation = "horizontal",
  className,
}: DashedLineProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className,
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "mask-[linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "mask-[linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ],
        )}
      />
    </div>
  );
};

const Feature342 = (props: Props) => {
  const { label, heading, description, features, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="absolute bg-muted px-3 font-mono text-sm font-medium tracking-wide text-muted-foreground max-md:hidden">
            {label}
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 mb-9 grid max-w-5xl items-center gap-6 md:grid-cols-2 lg:mt-24 lg:mb-14">
          <h2 className="text-2xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          <p className="leading-snug text-balance text-muted-foreground">
            {description}
          </p>
        </div>

        {/* Features Card */}
        <Card className="rounded-3xl">
          <CardContent className="flex p-0 max-md:flex-col">
            {(features ?? []).slice(0, 3).map((feature, i, arr) => (
              <div key={feature.title} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0 md:p-6">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={feature.image.src}
                      alt={feature.image.alt}
                      className="absolute inset-0 size-full object-cover object-top"
                    />
                    <div className="absolute inset-0 z-10 bg-linear-to-t from-background via-transparent to-transparent" />
                  </div>

                  <a
                    href={feature.href || "#"}
                    className="group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                  >
                    <h3 className="max-w-60 text-2xl leading-tight font-semibold tracking-tight text-pretty">
                      {feature.title}
                    </h3>
                    <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div>
                  </a>
                </div>
                {i < arr.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < arr.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Feature342 };
