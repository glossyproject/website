"use client";

import {
  BadgeCheck,
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  CheckSquare,
  Code,
  Crown,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  Headphones,
  LayoutGrid,
  LineChart,
  Lock,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { cn } from "@/lib/utils";

type Pricing4PlansPlan = Pricing3PlansPlan;
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

interface Pricing4PlansProps {
  plans: Pricing4PlansPlan[];
}

interface Pricing95Props extends Pricing4PlansProps {}
type Props = Partial<Pricing95Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing95Props = {
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
    {
      icon: Shield,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan4.svg",
      name: "Enterprise",
      monthlyPrice: "$199",
      yearlyPrice: "$1,990",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For organizations that need governance, security reviews, and hands-on rollout support.",
        yearly:
          "For organizations that need governance and dedicated support. Save compared to monthly.",
      },
      buttonText: "Contact sales",
      buttonUrl: "#",
      highlighted: false,
      planCode: "ENT",
      tagline: "Security and scale",
      bestFor: "Compliance-heavy teams",
      features: [
        { icon: Shield, text: "SSO and audit logs" },
        { icon: Lock, text: "Data residency options" },
        { icon: Headphones, text: "Dedicated success manager" },
        { icon: LineChart, text: "Custom reporting and SLAs" },
        { icon: Workflow, text: "Workflow automation at scale" },
        { icon: Crown, text: "Executive business reviews" },
        { icon: Sparkles, text: "Early access to beta features" },
      ],
    },
  ],
};

function planCodeFromPlan(plan: Pricing3PlansPlan): string {
  if (plan.planCode) return plan.planCode;
  return plan.name
    .toLowerCase()
    .replace(/\s+plan$/i, "")
    .replace(/\s+/g, "_");
}

const Pricing95 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section
      className={cn("border-y bg-muted/30 py-24 font-mono lg:py-32", className)}
    >
      <div className="container font-sans">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="font-sans text-3xl font-medium tracking-tight text-balance md:text-4xl">
              {heading}
            </h2>
            {description ? (
              <p className="mx-auto max-w-2xl font-sans text-muted-foreground lg:text-lg">
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex justify-center">
            <ToggleGroup
              type="single"
              value={cycle}
              onValueChange={(v) => v && setCycle(v as "monthly" | "yearly")}
              className="gap-1 rounded-lg border bg-background p-1"
            >
              <ToggleGroupItem
                value="monthly"
                className="h-9 rounded-md! px-5 text-xs data-[state=on]:bg-muted"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="h-9 rounded-md! px-5 text-xs data-[state=on]:bg-muted"
              >
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => {
              const price =
                cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const period =
                cycle === "monthly" ? plan.period.monthly : plan.period.yearly;
              const code = planCodeFromPlan(plan);

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "border-dashed font-mono shadow-none",
                    plan.highlighted &&
                      "border-solid border-primary bg-background",
                  )}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant="outline"
                        className="font-mono text-[10px] uppercase"
                      >
                        {code}
                      </Badge>
                      {plan.highlighted ? (
                        <Badge className="font-mono text-[10px] uppercase">
                          default
                        </Badge>
                      ) : null}
                    </div>
                    <div>
                      <p className="font-sans text-lg font-semibold tracking-tight">
                        {plan.name}
                      </p>
                      <p className="mt-4 text-3xl font-semibold tracking-tighter tabular-nums">
                        {price}
                      </p>
                      <p className="text-xs text-muted-foreground">{period}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4 text-xs">
                    <p className="text-muted-foreground">
                      {cycle === "monthly"
                        ? plan.description.monthly
                        : plan.description.yearly}
                    </p>
                    <ul className="space-y-2 border-t pt-4">
                      {plan.features.map((f, i) => (
                        <li key={i} className="flex gap-2">
                          <BadgeCheck className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                          <span>{pricing3PlanFeatureText(f)}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full text-xs"
                      size="sm"
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="text-center font-mono text-[11px] text-muted-foreground">
            API identifiers are for integration tests and billing webhooks.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Pricing95 };
