"use client";

import { Check } from "lucide-react";
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

interface Pricing64Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing64Props>;

const defaultProps: Pricing64Props = {
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

const Pricing64 = (props: Props) => {
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

          <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
            {plans.map((plan) => {
              const isHighlighted = plan.highlighted === true;
              return (
                <Card
                  key={plan.name}
                  className="grid! h-full min-h-0 grid-rows-[auto_1fr_auto] gap-6 rounded-lg shadow-sm"
                >
                  <CardHeader>
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    <p className="mt-3 text-4xl font-semibold tracking-tight">
                      {cycle === "monthly"
                        ? plan.monthlyPrice
                        : plan.yearlyPrice}
                      <span className="ml-1 text-sm font-normal text-muted-foreground">
                        / {cycle === "monthly" ? "month" : "year"}
                      </span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </CardHeader>
                  <CardContent className="min-h-0">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <Check
                            className="size-4 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col border-0 p-6 pt-0">
                    <Button
                      asChild
                      className="w-full"
                      variant={isHighlighted ? "default" : "outline"}
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing64 };
