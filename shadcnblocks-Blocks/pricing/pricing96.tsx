"use client";

import {
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  CheckCircle2,
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
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = | string
  | {
      text: string;
      icon?: IconComponent;
    };
type Pricing4PlansPlan = Pricing3PlansPlan;
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

interface Pricing96Props extends Pricing4PlansProps {}
type Props = Partial<Pricing96Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing96Props = {
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

const Pricing96 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-center text-3xl font-semibold text-balance sm:text-4xl lg:text-5xl">
            {heading}
          </h1>
          {description ? (
            <p className="max-w-3xl text-center text-muted-foreground lg:text-lg">
              {description}
            </p>
          ) : null}
          <Tabs
            value={isMonthly ? "monthly" : "yearly"}
            onValueChange={(value) => setIsMonthly(value === "monthly")}
            className="w-80"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Billed Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Billed Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mx-auto mt-4 grid w-full gap-6 lg:grid-cols-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="w-full rounded-lg border bg-background p-8 shadow-sm"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    {plan.highlighted && plan.highlightedLabel ? (
                      <Badge className="flex items-center gap-1">
                        <Zap className="size-3" />
                        {plan.highlightedLabel}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {plan.tagline ??
                      (isMonthly
                        ? plan.description.monthly
                        : plan.description.yearly)}
                  </p>
                </div>
                <Separator className="my-6" />
                <div className="flex items-start font-semibold">
                  <p className="text-xl">$</p>
                  <p className="text-5xl leading-none">
                    {(isMonthly ? plan.monthlyPrice : plan.yearlyPrice).replace(
                      /^\$/,
                      "",
                    )}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {isMonthly ? plan.period.monthly : plan.period.yearly}
                </p>
                <Button
                  className="mt-4 mb-2 w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  No credit card required
                </p>
                <Separator className="my-6" />
                <div>
                  <p className="mb-3 text-sm font-semibold">Key features: </p>
                  <ul className="flex flex-col gap-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-700" />
                        <p>{pricing3PlanFeatureText(feature)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing96 };
