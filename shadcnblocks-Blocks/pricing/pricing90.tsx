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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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

interface Pricing90Props extends Pricing3PlansProps {}
type Props = Partial<Pricing90Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing90Props = {
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

function PlanPriceFigure({ price, period }: { price: string; period: string }) {
  const dollars = price.match(/^\$\s*(.+)$/);
  if (dollars) {
    return (
      <div className="mb-4 flex justify-center">
        <div className="text-center">
          <div className="flex items-start justify-center">
            <span className="mt-2 text-lg font-semibold">$</span>
            <span className="text-6xl font-semibold">{dollars[1]}</span>
          </div>
          {period ? (
            <p className="mt-2 text-sm text-muted-foreground">{period}</p>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div className="mb-4 text-center">
      <p className="text-5xl font-semibold tabular-nums">{price}</p>
      {period ? (
        <p className="mt-2 text-sm text-muted-foreground">{period}</p>
      ) : null}
    </div>
  );
}

const PlanCard = ({
  plan,
  cycle,
}: {
  plan: Pricing3PlansPlan;
  cycle: "monthly" | "yearly";
}) => {
  const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
  const period = cycle === "monthly" ? plan.period.monthly : plan.period.yearly;
  const blurb =
    cycle === "monthly" ? plan.description.monthly : plan.description.yearly;

  return (
    <Card
      className={cn(
        "flex h-full flex-col rounded-md border shadow-none",
        plan.highlighted && "border-primary bg-muted",
      )}
    >
      <div className="flex-none lg:min-h-[360px]">
        <CardHeader className="space-y-0 px-8 pt-8 pb-3">
          <h3 className="text-center text-3xl font-semibold">{plan.name}</h3>
        </CardHeader>
        <CardContent className="space-y-0 px-8 pt-0 pb-6">
          <p className="line-clamp-2 text-center text-balance text-muted-foreground">
            {blurb}
          </p>
          <div className="flex min-h-[140px] flex-col justify-start pt-6">
            <PlanPriceFigure price={price} period={period} />
          </div>
        </CardContent>
        <div className="px-8 pb-8">
          <Button
            asChild
            className="w-full py-6"
            variant={plan.highlighted ? "default" : "outline"}
          >
            <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
          </Button>
        </div>
      </div>
      <CardFooter className="mt-auto flex grow flex-col items-stretch border-t p-8 text-left">
        <p className="mb-4 text-lg font-semibold">Features</p>
        <ul className="space-y-4">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center gap-3">
              <Check className="size-5 shrink-0 text-primary" aria-hidden />
              <span>{pricing3PlanFeatureText(feature)}</span>
            </li>
          ))}
        </ul>
      </CardFooter>
    </Card>
  );
};

const Pricing90 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");
  const displayPlans = plans.slice(0, MAX_PLANS);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-5xl text-center">
          <h2 className="mb-3 text-4xl font-bold text-balance lg:text-6xl">
            {heading}
          </h2>
          {description ? (
            <p className="text-muted-foreground lg:text-xl">{description}</p>
          ) : null}
        </div>

        <div className="mx-auto mb-10 flex max-w-5xl justify-center">
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

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} cycle={cycle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing90 };
