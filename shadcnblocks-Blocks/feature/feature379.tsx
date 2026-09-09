
import {
  Blocks,
  Globe,
  Layers,
  Palette,
  Rocket,
  Zap,
} from "lucide-react";
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

interface Feature379Props extends FeatureCardListProps {}
type Props = Partial<Feature379Props>;

const defaultProps: Feature379Props = {
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

const Feature379 = (props: Props) => {
  const { heading, features, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto mb-9 max-w-5xl text-center lg:mb-14">
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(features ?? []).slice(0, 3).map((feature, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={feature.image.src}
                alt={feature.image.alt}
                className="aspect-4/3 w-full rounded-lg object-cover object-top"
              />
              <div className="mt-8">
                {feature.icon ? (
                  <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                    <div className="row-start-1 flex items-center text-muted-foreground [&_svg]:size-4">
                      {feature.icon}
                    </div>
                    <h3 className="col-start-2 row-start-1 min-w-0 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="col-start-2 row-start-2 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature379 };
