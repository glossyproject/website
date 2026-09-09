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
  className?: string;
}

interface Pricing82Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing82Props>;

const defaultProps: Pricing82Props = {
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

const Pricing82 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>

          <ToggleGroup
            type="single"
            value={cycle}
            onValueChange={(v) => v && setCycle(v as "monthly" | "yearly")}
            size="lg"
            className="w-full max-w-xs gap-1 rounded-lg bg-muted p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="min-w-0 flex-1 rounded-md text-base font-semibold data-[state=on]:bg-background"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="min-w-0 flex-1 rounded-md text-base font-semibold data-[state=on]:bg-background"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>

          <div className="w-full overflow-hidden rounded-lg border">
            <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:items-stretch md:divide-x md:divide-y-0">
              {plans.map((plan, index) => {
                const isHighlighted = index === 1;
                return (
                  <div
                    key={plan.name}
                    className="flex h-full min-h-0 flex-col p-5"
                  >
                    <h3 className="font-semibold">{plan.name}</h3>

                    <div className="mt-2">
                      <span className="text-3xl font-bold tracking-tight">
                        {cycle === "yearly"
                          ? plan.yearlyPrice
                          : plan.monthlyPrice}
                      </span>
                      <span className="ml-1 text-xs text-muted-foreground">
                        {cycle === "yearly" ? "per year" : "per month"}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-1.5">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check className="size-3.5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      size="sm"
                      className="mt-auto w-full"
                      variant={isHighlighted ? "default" : "outline"}
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing82 };
