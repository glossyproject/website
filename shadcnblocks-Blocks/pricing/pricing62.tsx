"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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

interface Pricing62Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing62Props>;

const defaultProps: Pricing62Props = {
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

const Pricing62 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
              {heading}
            </h2>
            {description && (
              <p className="mx-auto max-w-2xl text-lg text-balance text-muted-foreground">
                {description}
              </p>
            )}
            <div className="inline-flex items-center gap-5 text-base font-semibold">
              <Switch
                className="scale-125"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                aria-label="Toggle annual billing"
              />
              Billed annually
            </div>
          </div>

          <div className="mt-8 grid gap-8 md:mt-12 md:grid-cols-2 lg:mt-20">
            {plans.map((plan, index) => {
              const isSpotlight = index === 1;
              return (
                <div
                  key={plan.name}
                  className={cn(isSpotlight && "scale-105 rounded-3xl")}
                >
                  <Card
                    className={cn(
                      "h-full border-0 bg-muted text-foreground",
                      isSpotlight &&
                        "relative ring-2 ring-primary ring-offset-2 ring-offset-background",
                    )}
                  >
                    <CardHeader>
                      <h3 className="text-2xl font-semibold">{plan.name}</h3>
                      <div className="mt-2">
                        <p className="text-lg font-medium text-muted-foreground">
                          <span className="text-foreground">
                            {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                          </span>{" "}
                          <span className="font-normal">
                            {isAnnual ? "Per year" : "Per month"}
                          </span>
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-col space-y-6">
                      <Button
                        asChild
                        variant={isSpotlight ? "default" : "outline"}
                        size="lg"
                      >
                        <a href={plan.button.url}>{plan.button.text}</a>
                      </Button>

                      <div className="space-y-4">
                        {plan.featureListLabel && (
                          <p className="text-sm font-semibold">
                            {plan.featureListLabel}
                          </p>
                        )}
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <Check
                              className="size-4 shrink-0 text-primary"
                              aria-hidden
                            />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing62 };
