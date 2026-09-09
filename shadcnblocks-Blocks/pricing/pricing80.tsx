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

interface Pricing80Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing80Props>;

const defaultProps: Pricing80Props = {
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

const Pricing80 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border">
          <div className="border-b p-8 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
              {heading}
            </h2>
            {description && (
              <p className="mt-3 text-muted-foreground">{description}</p>
            )}
            <div className="mt-6 flex justify-center">
              <ToggleGroup
                type="single"
                value={cycle}
                onValueChange={(v) => v && setCycle(v as "monthly" | "yearly")}
                className="rounded-lg bg-muted p-1"
              >
                <ToggleGroupItem
                  value="monthly"
                  className="rounded-md px-6 text-sm font-medium data-[state=on]:bg-background"
                >
                  Monthly
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="yearly"
                  className="rounded-md px-6 text-sm font-medium data-[state=on]:bg-background"
                >
                  Yearly
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {plans.map((plan, index) => {
              const isHighlighted = index === 1;
              return (
                <div
                  key={plan.name}
                  className={cn("p-8", isHighlighted && "bg-muted/30")}
                >
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-4">
                    <span className="text-4xl font-bold tracking-tight">
                      {cycle === "yearly"
                        ? plan.yearlyPrice
                        : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {cycle === "yearly" ? "per year" : "per month"}
                    </span>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="size-4 shrink-0 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="mt-6 w-full"
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
    </section>
  );
};

export { Pricing80 };
