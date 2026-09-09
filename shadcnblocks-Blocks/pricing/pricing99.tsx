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
import { Separator } from "@/components/ui/separator";
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

interface Pricing99Props extends Pricing4PlansProps {}
type Props = Partial<Pricing99Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing99Props = {
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

const Pricing99 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-6 text-center text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="text-muted-foreground lg:text-xl">{description}</p>
          )}
          <div className="mt-10 flex items-center gap-4 text-base font-medium">
            <span className="inline-flex origin-center scale-125">
              <Switch
                onCheckedChange={() => setIsYearly(!isYearly)}
                checked={isYearly}
                aria-label="Toggle annual billing"
              />
            </span>
            Annual billing
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div key={plan.name}>
              <div
                className={cn(
                  "flex flex-col justify-between gap-6 rounded-lg border p-6",
                  plan.highlighted && "border-primary",
                )}
              >
                <div>
                  <p className="mb-2 text-lg font-semibold">{plan.name}</p>
                  <p className="mb-4 text-4xl font-semibold">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isYearly
                      ? plan.description.yearly
                      : plan.description.monthly}
                  </p>
                </div>
                <Button
                  asChild
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                >
                  <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 hidden grid-cols-4 gap-6 lg:grid">
          {plans.map((plan) => (
            <ul key={plan.name} className="px-2">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  {i > 0 && <Separator className="my-3 border-dashed" />}
                  <div className="flex gap-2">
                    <Check className="w-4 shrink-0 text-primary" />
                    <p className="text-sm font-medium text-muted-foreground">
                      {pricing3PlanFeatureText(feature)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing99 };
