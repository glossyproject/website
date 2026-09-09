"use client";

import {
  Blocks,
  Globe,
  Layers,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
  features?: FeatureCardListItem[];
  className?: string;
}

interface Feature380Props extends FeatureCardListProps {}
type Props = Partial<Feature380Props>;

const defaultProps: Feature380Props = {
  heading: "Build faster with production ready features",
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

const MAX_FEATURES = 3;

const FeatureCard = ({ feature }: { feature: FeatureCardListItem }) => (
  <div>
    <img
      src={feature.image.src}
      alt={feature.image.alt}
      className="aspect-4/3 max-h-96 w-full rounded-lg border border-border object-cover object-top"
    />
    <p className="mt-8 mb-2 text-lg font-semibold">{feature.title}</p>
    <p className="mb-4 text-balance text-muted-foreground">
      {feature.description}
    </p>
  </div>
);

const Feature380 = (props: Props) => {
  const { heading, features, className } = {
    ...defaultProps,
    ...props,
  };

  const items = features?.slice(0, MAX_FEATURES) ?? [];

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: items.length > 1,
            }}
            className="w-full"
          >
            <div className="mb-9 flex items-end justify-between gap-4">
              <h2 className="min-w-0 flex-1 text-3xl font-semibold tracking-tight text-balance">
                {heading}
              </h2>
              <div className="flex shrink-0 gap-2">
                <CarouselPrevious className="static translate-y-0 rounded-md" />
                <CarouselNext className="static translate-y-0 rounded-md" />
              </div>
            </div>
            <CarouselContent className="-ml-4">
              {items.map((feature, index) => (
                <CarouselItem
                  key={`${feature.title}-${index}`}
                  className="basis-full pl-4 md:basis-1/2"
                >
                  <FeatureCard feature={feature} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden lg:block">
          <h2 className="mb-9 text-3xl font-semibold tracking-tight text-balance lg:mb-14 lg:text-4xl">
            {heading}
          </h2>
          <div className="grid gap-6 lg:grid-cols-3">
            {items.map((feature, index) => (
              <FeatureCard
                key={`${feature.title}-${index}`}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature380 };
