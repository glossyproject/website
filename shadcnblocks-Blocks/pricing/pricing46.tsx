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
  Minus,
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
  plans: Pricing3PlansPlan[];
  className?: string;
}

interface Pricing46Props extends Pricing3PlansProps {
  featureTable: FeatureCategory[];
}
type Props = Partial<Pricing46Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing46Props = {
  heading: "Simple Pricing Plans",
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
  featureTable: defaultFeatureTable,
};

interface FeatureRow {
  name: string;
  values: (string | boolean)[];
}

interface FeatureCategory {
  category: string;
  features: FeatureRow[];
}

const defaultFeatureTable: FeatureCategory[] = [
  {
    category: "Core",
    features: [
      { name: "Components", values: ["Up to 5", "Unlimited", "Unlimited"] },
      { name: "Storage", values: ["100MB", "10GB", "Unlimited"] },
      { name: "Team members", values: ["1", "Up to 10", "Unlimited"] },
      { name: "Projects", values: ["2", "20", "Unlimited"] },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Community support", values: [true, true, true] },
      { name: "Priority support", values: [false, true, true] },
      { name: "Dedicated account manager", values: [false, false, true] },
      { name: "SLA guarantee", values: [false, false, true] },
    ],
  },
  {
    category: "Advanced",
    features: [
      { name: "Analytics", values: ["Basic", "Advanced", "Custom"] },
      { name: "API access", values: [false, true, true] },
      { name: "Custom integrations", values: [false, false, true] },
      { name: "SSO / SAML", values: [false, false, true] },
      { name: "Audit logs", values: [false, true, true] },
    ],
  },
];

const FeatureCell = ({ value }: { value: string | boolean }) => {
  if (value === true) {
    return <Check className="mx-auto size-5 text-primary" />;
  }
  if (value === false) {
    return <Minus className="mx-auto size-4 text-muted-foreground/40" />;
  }
  return <span className="text-sm">{value}</span>;
};

const Pricing46 = (props: Props) => {
  const { heading, plans, featureTable, className } = {
    ...defaultProps,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-4xl font-semibold tracking-tight text-balance lg:mb-8 lg:text-5xl">
          {heading}
        </h2>

        <div className="mb-10 flex justify-center lg:mb-14">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value: string) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="rounded-lg bg-muted p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-background"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[700px] border-collapse">
            {/* Plan header row */}
            <thead>
              <tr>
                <th className="w-[30%] border-b border-border p-6 text-left align-top">
                  <div className="flex flex-col gap-2">
                    <span className="text-lg font-semibold">Compare plans</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      Choose the plan that works best for your team.
                    </span>
                  </div>
                </th>
                {plans.map((plan, i) => (
                  <th
                    key={plan.name}
                    className={cn(
                      "border-b border-l border-border p-6 text-center align-top",
                      i < plans.length - 1 && "border-r border-r-border/50",
                      plan.highlighted && "bg-muted/30",
                    )}
                  >
                    <div className="flex flex-col items-center gap-3">
                      <span className="text-base font-medium">{plan.name}</span>
                      <div className="text-4xl font-semibold tracking-tight">
                        {billingCycle === "monthly"
                          ? plan.monthlyPrice
                          : plan.yearlyPrice}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {billingCycle === "monthly"
                          ? plan.period.monthly
                          : plan.period.yearly}
                      </span>
                      <p className="mt-1 max-w-[200px] text-xs text-muted-foreground">
                        {billingCycle === "monthly"
                          ? plan.description.monthly
                          : plan.description.yearly}
                      </p>
                      <Button
                        className="mt-3 w-full max-w-[180px]"
                        variant={plan.highlighted ? "default" : "outline"}
                        size="sm"
                      >
                        {plan.buttonText}
                      </Button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            {/* Feature rows grouped by category */}
            <tbody>
              {featureTable.map((group) => (
                <>
                  <tr key={group.category}>
                    <td
                      colSpan={plans.length + 1}
                      className="bg-muted/20 px-6 py-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase"
                    >
                      {group.category}
                    </td>
                  </tr>
                  {group.features.map((feature) => (
                    <tr
                      key={feature.name}
                      className="border-b border-border/40"
                    >
                      <td className="px-6 py-3.5 text-sm">{feature.name}</td>
                      {feature.values.map((value, i) => (
                        <td
                          key={i}
                          className={cn(
                            "border-l border-l-border/50 px-6 py-3.5 text-center",
                            i < feature.values.length - 1 &&
                              "border-r border-r-border/30",
                            plans[i]?.highlighted && "bg-muted/10",
                          )}
                        >
                          <FeatureCell value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export { Pricing46 };
