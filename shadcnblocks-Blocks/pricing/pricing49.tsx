"use client";

import {
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  Check,
  CheckSquare,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Users,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = | string
  | {
      text: string;
      icon?: IconComponent;
    };
interface Pricing3PlansPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: {
    monthly: string;
    yearly: string;
  };
  description: {
    monthly: string;
    yearly: string;
  };
  buttonText: string;
  buttonUrl?: string;
  highlighted?: boolean;
  highlightedLabel?: string;
  icon?: IconComponent;
  image?: string;
  features: Pricing3PlanFeature[];
  tagline?: string;
  bestFor?: string;
  planCode?: string;
}

interface Pricing3PlansProps {
  heading: string;
  description?: string;
  plans: Pricing3PlansPlan[];
  className?: string;
}

interface Pricing49Props extends Pricing3PlansProps {}
type Props = Partial<Pricing49Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing49Props = {
  heading: "Simple Pricing Plans",
  description:
    "Choose the plan that fits your needs. Start free and scale as you grow.",
  plans: [
    {
      icon: Rocket,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
      name: "Basic Plan",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "Ideal for individuals getting started. No credit card required.",
        yearly:
          "Ideal for individuals getting started. No credit card required.",
      },
      buttonText: "Start for Free",
      buttonUrl: "#",
      highlighted: false,
      planCode: "BASIC",
      tagline: "Great for solo developers",
      bestFor: "Freelancers just starting out",
      features: [
        { icon: Code, text: "Up to 5 components" },
        { icon: LayoutGrid, text: "Community support" },
        { icon: MonitorSmartphone, text: "Weekly updates" },
        { icon: FileText, text: "100MB storage" },
        { icon: GitBranch, text: "Basic analytics" },
      ],
    },
    {
      icon: Briefcase,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
      name: "Standard Plan",
      monthlyPrice: "$20",
      yearlyPrice: "$200",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For growing teams that need more power. Start with a 30-day free trial.",
        yearly:
          "For growing teams that need more power. Save 16% compared to monthly.",
      },
      buttonText: "Get Started",
      buttonUrl: "#",
      highlighted: true,
      highlightedLabel: "Most popular",
      planCode: "STANDARD",
      tagline: "Best for growing teams",
      bestFor: "Small dev teams and startups",
      features: [
        { icon: Code, text: "Unlimited components" },
        { icon: Brush, text: "Priority support" },
        { icon: Settings2, text: "Daily updates" },
        { icon: CheckSquare, text: "10GB storage" },
        { icon: Zap, text: "Advanced analytics" },
      ],
    },
    {
      icon: Building,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan3.svg",
      name: "Premium Plan",
      monthlyPrice: "$80",
      yearlyPrice: "$800",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For large organizations with advanced needs. Everything in Standard plus dedicated support.",
        yearly:
          "For large organizations with advanced needs. Save 16% compared to monthly.",
      },
      buttonText: "Buy Now",
      buttonUrl: "#",
      highlighted: false,
      planCode: "PREMIUM",
      tagline: "Collaborate and scale fast",
      bestFor: "Product teams with multiple projects",
      features: [
        { icon: Users, text: "Unlimited components" },
        { icon: GitPullRequest, text: "Dedicated support" },
        { icon: CalendarCheck2, text: "Real-time updates" },
        { icon: Bell, text: "Unlimited storage" },
        { icon: Database, text: "Custom integrations" },
      ],
    },
  ],
};

const MAX_FEATURES = 2;

const Pricing49 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
              {heading}
            </h2>
            {description ? (
              <p className="mx-auto max-w-2xl text-muted-foreground lg:text-lg">
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex justify-center">
            <ToggleGroup
              type="single"
              value={cycle}
              onValueChange={(v) => v && setCycle(v as "monthly" | "yearly")}
              className="rounded-lg bg-muted p-1"
            >
              <ToggleGroupItem
                value="monthly"
                className="h-9 min-w-28 rounded-md px-4 data-[state=on]:bg-background"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="h-9 min-w-28 rounded-md px-4 data-[state=on]:bg-background"
              >
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="overflow-hidden rounded-xl border text-start shadow-sm">
            <div className="grid divide-y lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {plans.map((plan) => {
                const price =
                  cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
                const period =
                  cycle === "monthly"
                    ? plan.period.monthly
                    : plan.period.yearly;
                const blurb =
                  cycle === "monthly"
                    ? plan.description.monthly
                    : plan.description.yearly;

                return (
                  <div
                    key={plan.name}
                    className={cn(
                      "flex flex-col gap-6 p-8",
                      plan.highlighted && "bg-muted/40",
                    )}
                  >
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {plan.name}
                      </p>
                      <p className="mt-2 text-4xl font-semibold tracking-tight">
                        {price}
                      </p>
                      <p className="text-sm text-muted-foreground">{period}</p>
                      <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                        {plan.tagline ?? blurb}
                      </p>
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {plan.features.slice(0, MAX_FEATURES).map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-foreground"
                            aria-hidden
                          />
                          <span>{pricing3PlanFeatureText(f)}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="mt-auto w-full"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Prices shown in USD. Switch billing period to compare yearly rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Pricing49 };
