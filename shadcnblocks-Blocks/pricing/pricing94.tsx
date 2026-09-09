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

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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

interface Pricing94Props extends Pricing4PlansProps {}
type Props = Partial<Pricing94Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing94Props = {
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

const Pricing94 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {heading}
          </h2>
          {description && (
            <p className="text-lg text-balance text-muted-foreground">
              {description}
            </p>
          )}
          <div className="inline-flex items-center gap-2">
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span className="text-sm font-medium">Billed annually</span>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:mt-12 lg:mt-20 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(plan.highlighted && "scale-[1.075] rounded-3xl")}
            >
              <Card
                className={cn(
                  "h-full border-0 bg-muted text-foreground",
                  plan.highlighted &&
                    "relative ring-2 ring-primary ring-offset-2 ring-offset-background",
                )}
              >
                <CardHeader>
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <p className="text-lg font-medium text-muted-foreground">
                      <span className="text-foreground">
                        {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>{" "}
                      <span className="font-normal">
                        {isAnnual ? plan.period.yearly : plan.period.monthly}
                      </span>
                    </p>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col space-y-6">
                  <Button
                    asChild
                    variant={plan.highlighted ? "default" : "outline"}
                    size="lg"
                  >
                    <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check
                          className="size-4 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span className="text-sm text-muted-foreground">
                          {pricing3PlanFeatureText(feature)}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing94 };
