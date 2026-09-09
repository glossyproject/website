"use client";

import { Check } from "lucide-react";
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

interface Pricing59Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing59Props>;

const defaultProps: Pricing59Props = {
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

const Pricing59 = (props: Props) => {
  const { heading, description, discount, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl space-y-10 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-medium tracking-tight text-balance md:text-4xl">
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
                className="relative h-9 min-w-28 rounded-md px-4 data-[state=on]:bg-background"
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

          <div className="overflow-hidden rounded-xl border text-start shadow-sm">
            <div className="grid divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0">
              {plans.map((plan, index) => (
                <div key={plan.name} className="flex flex-col gap-6 p-8">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {plan.name}
                    </p>
                    <p className="mt-2 text-4xl font-semibold tracking-tight">
                      {cycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        / {cycle === "monthly" ? "month" : "year"}
                      </span>
                    </p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-2">
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-foreground"
                          aria-hidden
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className="mt-auto w-full"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    <a href={plan.button.url}>{plan.button.text}</a>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            Prices shown in USD. Switch billing period to compare yearly rates.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Pricing59 };
