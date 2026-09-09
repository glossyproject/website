"use client";

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

interface Pricing66Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing66Props>;

const defaultProps: Pricing66Props = {
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

const Pricing66 = (props: Props) => {
  const { heading, description, plans, discount, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="mx-auto max-w-2xl text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
          </div>

          <div className="flex justify-center">
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
                {discount && (
                  <span className="ml-1.5 text-xs text-green-600">
                    {discount}
                  </span>
                )}
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => {
              const isInverted = index === 1;
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "rounded-lg border p-8 text-center",
                    isInverted
                      ? "bg-primary text-primary-foreground"
                      : "bg-background",
                  )}
                >
                  <p
                    className={cn(
                      "text-sm font-medium",
                      isInverted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground",
                    )}
                  >
                    {plan.name}
                  </p>
                  <p className="mt-4 text-5xl font-semibold tracking-tight">
                    {cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      isInverted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground",
                    )}
                  >
                    {cycle === "monthly" ? "Per month" : "Per year"}
                  </p>
                  <p
                    className={cn(
                      "mt-4 text-sm",
                      isInverted
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground",
                    )}
                  >
                    {plan.description}
                  </p>
                  <Button
                    asChild
                    className="mt-6 w-full"
                    variant={isInverted ? "secondary" : "outline"}
                  >
                    <a href={plan.button.url}>{plan.button.text}</a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing66 };
