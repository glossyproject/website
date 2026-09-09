"use client";

import { BadgeCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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
  discount?: string;
  className?: string;
}

type Props = Partial<PricingCards2CardsProps>;

const defaultProps: PricingCards2CardsProps = {
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

const Pricing58 = (props: Props) => {
  const { heading, description, discount, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-start gap-6 py-4 lg:py-8">
          <h2 className="text-2xl leading-tight font-semibold tracking-tighter md:text-3xl lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="max-w-xl tracking-tight text-muted-foreground">
              {description}
            </p>
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
              className="relative h-8 w-32 rounded-none! data-[state=on]:bg-background"
            >
              Yearly
              {discount && (
                <span className="ml-1.5 text-xs text-muted-foreground">
                  {discount}
                </span>
              )}
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>

      <div className="container mt-6 lg:mt-10">
        <section className="grid divide-y border lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {plans?.map((plan, index) => (
            <div key={index} className="flex flex-col justify-between p-6">
              <div className="space-y-2 border-b pb-6">
                <h3 className="text-xl tracking-tight text-muted-foreground">
                  {plan.name}
                </h3>

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

                <p className="text-sm tracking-tight text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="pt-6">
                <h4 className="text-muted-foreground-subtle">
                  {plan.featureListLabel ?? "Features Included"}
                </h4>
                <ul className="mt-4 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <BadgeCheck className="size-6 shrink-0 text-muted-foreground" />
                      <span className="tracking-tight text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={index === plans.length - 1 ? "default" : "secondary"}
                className="mt-12"
                asChild
              >
                <a href={plan.button.url}>{plan.button.text}</a>
              </Button>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export { Pricing58 };
