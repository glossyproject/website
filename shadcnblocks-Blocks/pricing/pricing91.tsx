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

interface Pricing91Props extends Pricing3PlansProps {}
type Props = Partial<Pricing91Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing91Props = {
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

const MAX_PLANS = 3;

const Pricing91 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");
  const displayPlans = plans.slice(0, MAX_PLANS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mb-12 lg:mb-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="my-6 text-3xl font-bold text-pretty md:text-4xl xl:text-5xl">
            {heading}
          </h1>
          {description ? (
            <p className="max-w-2xl text-muted-foreground lg:text-xl">
              {description}
            </p>
          ) : null}
        </div>
      </div>
      <div className="container mb-10 flex justify-center">
        <ToggleGroup
          type="single"
          value={cycle}
          onValueChange={(v: string) =>
            v && setCycle(v as "monthly" | "yearly")
          }
          className="w-full max-w-xs gap-1 rounded-lg bg-muted p-1"
          size="lg"
        >
          <ToggleGroupItem
            value="monthly"
            className="min-w-0 flex-1 rounded-md text-base font-semibold data-[state=on]:bg-background"
          >
            Monthly
          </ToggleGroupItem>
          <ToggleGroupItem
            value="yearly"
            className="min-w-0 flex-1 rounded-md text-base font-semibold data-[state=on]:bg-background"
          >
            Yearly
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-3">
        {displayPlans.map((plan, idx) => {
          const price =
            cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
          const blurb =
            cycle === "monthly"
              ? plan.description.monthly
              : plan.description.yearly;
          const periodLine =
            cycle === "monthly" ? plan.period.monthly : plan.period.yearly;

          return (
            <article
              key={`${plan.name}-${idx}`}
              className={cn(
                "overflow-clip rounded-xl border",
                plan.highlighted ? "border-primary" : "border-border lg:mt-7",
              )}
            >
              {plan.highlighted ? (
                <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                  {plan.highlightedLabel ?? "Recommended"}
                </div>
              ) : null}
              <header className="p-4 sm:p-6 xl:pt-12">
                <div className="mb-6 md:flex md:items-center xl:block">
                  <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                    <div className="flex-1 md:ml-6 xl:ml-0">
                      <p className="mb-1 text-xl font-medium sm:text-2xl">
                        {plan.name}
                      </p>
                      <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                        {blurb}
                      </p>
                    </div>
                    {plan.image ? (
                      <img
                        src={plan.image}
                        alt=""
                        className="size-16 sm:size-20"
                      />
                    ) : null}
                  </div>
                  <div>
                    <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                      {price}
                    </h2>
                    <p className="text-xs font-medium text-muted-foreground">
                      {periodLine}
                    </p>
                  </div>
                </div>
                <div>
                  <Button
                    variant={plan.highlighted ? "default" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                  </Button>
                </div>
              </header>
              <main className="space-y-6 border-t border-border p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 xl:block xl:space-y-6">
                <div>
                  <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                    Features
                  </h2>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground"
                      >
                        <Check className="size-4 shrink-0" aria-hidden />
                        {pricing3PlanFeatureText(feature)}
                      </li>
                    ))}
                  </ul>
                </div>
              </main>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export { Pricing91 };
