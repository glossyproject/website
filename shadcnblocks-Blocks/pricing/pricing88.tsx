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

import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

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

interface Pricing88Props extends Pricing4PlansProps {}
type Props = Partial<Pricing88Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing88Props = {
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

const Pricing88 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-start gap-6">
          <h2 className="text-2xl leading-tight font-semibold tracking-tighter md:text-3xl lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="max-w-xl text-muted-foreground">{description}</p>
          )}
          <ToggleGroup
            type="single"
            spacing={1}
            value={billingCycle}
            onValueChange={(value: string) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value as "monthly" | "yearly");
              }
            }}
            className="w-fit gap-0 rounded-none bg-muted p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-8 w-32 rounded-none! data-[state=on]:bg-background"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-8 w-32 rounded-none! data-[state=on]:bg-background"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="container mx-auto mt-6 lg:mt-10">
        <div className="grid border max-lg:divide-y lg:grid-cols-4 lg:divide-x">
          {plans?.map((plan, index) => (
            <div key={index} className="flex flex-col justify-between p-6">
              <div className="space-y-2 border-b pb-6">
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  {plan.icon && <plan.icon className="size-4 shrink-0" />}
                  <h3 className="text-xl tracking-tight">{plan.name}</h3>
                </div>

                <div className="flex items-baseline font-medium">
                  <span className="text-6xl leading-tight tracking-tighter">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </span>
                  <span className="text-muted-foreground-subtle text-2xl tracking-tight">
                    {billingCycle === "monthly" ? "/mo" : "/yr"}
                  </span>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-muted-foreground-subtle">
                  Features Included
                </h4>
                <ul className="mt-4 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <BadgeCheck className="size-6 shrink-0 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {pricing3PlanFeatureText(feature)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.highlighted ? "default" : "secondary"}
                className="mt-12"
                asChild
              >
                <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing88 };
