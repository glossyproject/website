"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
  className?: string;
}

interface Pricing68Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing68Props>;

const defaultProps: Pricing68Props = {
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

const Pricing68 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>

          <Tabs
            value={isAnnually ? "annually" : "monthly"}
            onValueChange={(value: string) =>
              setIsAnnually(value === "annually")
            }
            aria-label="Billing period"
            className="mx-auto w-80 max-w-full gap-0"
          >
            <TabsList className="grid h-11 w-full grid-cols-2 gap-1 rounded-lg p-1">
              <TabsTrigger
                value="monthly"
                className="w-full rounded-md px-4 font-semibold group-data-[variant=default]/tabs-list:data-active:shadow-none"
              >
                Monthly
              </TabsTrigger>
              <TabsTrigger
                value="annually"
                className="w-full rounded-md px-4 font-semibold group-data-[variant=default]/tabs-list:data-active:shadow-none"
              >
                Yearly
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => {
              const isHighlighted = index === 1;
              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "overflow-hidden",
                    isHighlighted && "border-2 border-primary",
                  )}
                >
                  <CardHeader>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                    <div className="mt-2">
                      <span className="text-4xl font-semibold tracking-tight">
                        {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        {isAnnually ? "per year" : "per month"}
                      </span>
                    </div>
                  </CardHeader>

                  <div className="px-6">
                    <Button
                      asChild
                      className="w-full"
                      variant={isHighlighted ? "default" : "outline"}
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </div>

                  <CardContent className="pt-4">
                    <div className="mt-4">
                      {plan.featureListLabel && (
                        <p className="mb-3 text-sm font-semibold">
                          {plan.featureListLabel}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Check
                              className="size-4 shrink-0 text-primary"
                              aria-hidden
                            />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing68 };
