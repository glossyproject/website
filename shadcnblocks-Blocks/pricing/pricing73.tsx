"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { cn } from "@/lib/utils";

interface PricingCards2CardsPlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  features: string[];
  button: {
    text: string;
    url: string;
  };
  highlighted?: boolean;
  featureListLabel?: string;
  image?: string;
}

interface PricingCards2CardsProps {
  heading: string;
  description: string;
  plans: PricingCards2CardsPlan[];
  className?: string;
}

interface Pricing73Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing73Props>;

const defaultProps: Pricing73Props = {
  heading: "Pricing",
  description: "Check out our affordable pricing plans",
  plans: [
    {
      name: "Free",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
      description: "For individuals getting started",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      features: [
        "Single user",
        "Basic components library",
        "Community support",
        "1GB storage space",
      ],
      button: {
        text: "Get Started",
        url: "https://shadcnblocks.com",
      },
    },
    {
      name: "Pro",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
      description: "For professionals",
      monthlyPrice: "$49",
      yearlyPrice: "$359",
      features: [
        "Up to 5 team members",
        "Advanced components library",
        "Priority support",
        "2GB storage space",
        "Team collaboration",
        "Custom branding",
      ],
      button: {
        text: "Purchase",
        url: "https://shadcnblocks.com",
      },
      highlighted: true,
    },
  ],
};

const PlanCard = ({
  plan,
  isYearly,
  highlighted,
}: {
  plan: PricingCards2CardsPlan;
  isYearly: boolean;
  highlighted: boolean;
}) => (
  <div
    className={cn(
      "flex flex-col rounded-lg border bg-background p-8 shadow-md",
      highlighted && "shadow-lg ring-1 ring-primary/20",
    )}
  >
    <h3 className="text-xl font-semibold">{plan.name}</h3>
    <div className="mt-4">
      <div className="text-5xl font-semibold tracking-tight">
        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
      </div>
      <p className="mt-1 text-sm text-muted-foreground">
        {isYearly ? "per year" : "per month"}
      </p>
    </div>
    <Separator className="my-6" />
    <ul className="flex-1 space-y-3">
      {plan.features.map((feature, idx) => (
        <li key={idx} className="flex items-center gap-3">
          <Check className="size-4 shrink-0 text-primary" />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>
    <Button
      asChild
      className="mt-8 w-full"
      variant={highlighted ? "default" : "outline"}
    >
      <a href={plan.button.url}>{plan.button.text}</a>
    </Button>
  </div>
);

const Pricing73 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section className={cn("bg-muted/50 py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          <h2 className="text-center text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="text-center text-muted-foreground">{description}</p>
          )}
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value: string) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="rounded-lg bg-background p-1 shadow-sm"
          >
            <ToggleGroupItem
              value="monthly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-muted"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="h-8 w-32 rounded-md data-[state=on]:bg-muted"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
          <div className="mt-4 grid w-full gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
                highlighted={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing73 };
