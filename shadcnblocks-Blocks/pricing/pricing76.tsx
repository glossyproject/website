"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
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
  className?: string;
}

interface Pricing76Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing76Props>;

const defaultProps: Pricing76Props = {
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

const Pricing76 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          <h2 className="text-center text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="text-center text-muted-foreground lg:text-lg">
              {description}
            </p>
          )}
          <Tabs
            value={billingCycle}
            onValueChange={setBillingCycle}
            className="w-fit shrink-0"
          >
            <TabsList>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">Yearly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "rounded-xl border p-8 text-center",
                index === 1 && "bg-muted",
              )}
            >
              <p className="text-sm font-medium tracking-wider text-muted-foreground uppercase">
                {plan.name}
              </p>
              <div className="mt-4">
                <span className="text-6xl font-bold tracking-tighter">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
              </div>
              <p className="mt-1 text-muted-foreground">
                {isYearly ? "per year" : "per month"}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {plan.features.map((feature, idx) => (
                  <Badge key={idx} variant="secondary" className="font-normal">
                    {feature}
                  </Badge>
                ))}
              </div>
              <Button
                asChild
                className="mt-8 w-full"
                variant={index === 1 ? "default" : "outline"}
              >
                <a href={plan.button.url}>{plan.button.text}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing76 };
