import {
  Blocks,
  ChartLine,
  Globe,
  Layers,
  Lock,
  Palette,
  Rocket,
  Settings,
  Shield,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

interface FeatureIconListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href?: string;
}

interface FeatureIconListProps {
  heading: string;
  description?: string;
  label?: string;
  features?: FeatureIconListItem[];
  className?: string;
}

interface Feature362Props extends FeatureIconListProps {}
type Props = Partial<Feature362Props>;

const defaultProps: Feature362Props = {
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
    },
    {
      icon: <Palette className="size-5" />,
      title: "Responsive Design",
      description:
        "Every block adapts seamlessly from mobile to desktop with Tailwind's mobile-first utility classes.",
    },
    {
      icon: <Shield className="size-5" />,
      title: "Accessibility & Usability",
      description:
        "Built on Radix UI primitives with proper ARIA attributes, keyboard navigation, and focus management.",
    },
    {
      icon: <Settings className="size-5" />,
      title: "TypeScript Native",
      description:
        "Fully typed props and interfaces so your editor catches issues before they reach production.",
    },
    {
      icon: <Layers className="size-5" />,
      title: "Customizable",
      description:
        "Override any prop, swap icons, adjust spacing — every block is designed to be extended, not locked down.",
    },
    {
      icon: <Rocket className="size-5" />,
      title: "Production Ready",
      description:
        "Battle-tested in real projects. No placeholder hacks, no lorem ipsum — clean code you can ship today.",
    },
    {
      icon: <Blocks className="size-5" />,
      title: "Registry Compatible",
      description:
        "Install blocks directly with the shadcn CLI. Dependencies and registry items are listed in every block's MDX.",
    },
    {
      icon: <Globe className="size-5" />,
      title: "Framework Agnostic",
      description:
        "Plain ESM + React that works with Next.js, Vite, Remix, and Astro without any Shadcnblocks SDK.",
    },
    {
      icon: <ChartLine className="size-5" />,
      title: "Consistent Spacing",
      description:
        "Shared section padding, container widths, and gap scales so blocks stack into cohesive pages.",
    },
    {
      icon: <Sparkles className="size-5" />,
      title: "Theme Tokens",
      description:
        "All colors come from your shadcn/ui theme — foreground, muted, primary, card — no hardcoded values.",
    },
    {
      icon: <Workflow className="size-5" />,
      title: "Copy Paste Workflow",
      description:
        "Browse the explorer, preview with your theme, then copy the code directly into your project.",
    },
    {
      icon: <Lock className="size-5" />,
      title: "Open Source",
      description:
        "MIT-licensed source code you own completely. Fork it, modify it, sell products built with it.",
    },
  ],
};

const MAX_FEATURES = 6;

const Feature362 = (props: Props) => {
  const { heading, description, label, features, className } = {
    ...defaultProps,
    ...props,
  };
  const items = (features ?? []).slice(0, MAX_FEATURES);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="flex flex-col gap-4 lg:sticky lg:top-10">
            {label && <Badge variant="outline">{label}</Badge>}
            <h2 className="text-3xl font-semibold tracking-tight text-pretty md:text-4xl">
              {heading}
            </h2>
            {description && (
              <p className="text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {items.map((feature, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 rounded-lg border p-5"
              >
                <div className="flex size-9 items-center justify-center rounded-md bg-accent">
                  {feature.icon}
                </div>
                <h3 className="font-medium tracking-tight">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature362 };
