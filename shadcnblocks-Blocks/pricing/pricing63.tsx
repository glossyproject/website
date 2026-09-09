"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

interface Pricing63Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing63Props>;

const defaultProps: Pricing63Props = {
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

const Pricing63 = (props: Props) => {
  const { heading, description, plans, discount, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnually, setIsAnnually] = useState(false);

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
            <Tabs
              value={isAnnually ? "annually" : "monthly"}
              onValueChange={(value: string) =>
                setIsAnnually(value === "annually")
              }
              aria-label="Billing period"
            >
              <TabsList className="grid h-11 w-max grid-cols-2 gap-1 rounded-lg p-1">
                <TabsTrigger
                  value="monthly"
                  className="h-full min-h-0 rounded-md px-6 py-0"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="annually"
                  className="h-full min-h-0 rounded-md px-6 py-0"
                >
                  Yearly
                  {discount && (
                    <span className="ml-1.5 text-xs text-green-600">
                      {discount}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-12">
            {plans.map((plan, index) => {
              const isRecommended = index === 1;
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "flex h-full min-h-0 flex-col rounded-lg border p-6",
                    isRecommended
                      ? "border-2 border-primary lg:col-span-7"
                      : "lg:col-span-5",
                  )}
                >
                  <h3 className="text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-4 text-4xl font-semibold tracking-tight">
                    {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                    <span className="ml-1 text-sm font-normal text-muted-foreground">
                      / {isAnnually ? "year" : "month"}
                    </span>
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Check
                          className="size-4 shrink-0 text-primary"
                          aria-hidden
                        />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="mt-auto w-full"
                    variant={isRecommended ? "default" : "outline"}
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

export { Pricing63 };
