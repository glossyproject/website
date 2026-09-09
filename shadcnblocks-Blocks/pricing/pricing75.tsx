"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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

interface Pricing75Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing75Props>;

const defaultProps: Pricing75Props = {
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

const Pricing75 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground lg:text-lg">
              {description}
            </p>
          )}
        </div>
        <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "min-h-96",
                index === 1 && "border-2 border-primary",
              )}
            >
              <CardContent className="flex h-full flex-col gap-6 p-6">
                <div>
                  <h3 className="font-semibold">{plan.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-semibold tracking-tight">
                      {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {isAnnual ? "/year" : "/month"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-5 text-base font-semibold">
                  <Switch
                    className="scale-125"
                    checked={isAnnual}
                    onCheckedChange={setIsAnnual}
                    aria-label="Toggle annual billing"
                  />
                  Billed annually
                </div>
                <ul className="flex-1 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className="w-full"
                  variant={index === 1 ? "default" : "outline"}
                >
                  <a href={plan.button.url}>{plan.button.text}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing75 };
