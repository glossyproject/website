"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

interface Pricing61Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing61Props>;

const defaultProps: Pricing61Props = {
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

const Pricing61 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnually, setIsAnnually] = useState(false);
  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-medium tracking-tight text-pretty lg:text-5xl">
            {heading}
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {description && (
              <p className="max-w-3xl text-muted-foreground lg:text-xl">
                {description}
              </p>
            )}
            <Tabs
              value={isAnnually ? "annually" : "monthly"}
              onValueChange={(value: string) =>
                setIsAnnually(value === "annually")
              }
              className="w-fit shrink-0"
              aria-label="Billing period"
            >
              <TabsList className="grid h-11 w-max grid-cols-2 gap-1 rounded-lg p-1 text-lg">
                <TabsTrigger
                  value="monthly"
                  className="h-full min-h-0 rounded-md px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
                >
                  Monthly
                </TabsTrigger>
                <TabsTrigger
                  value="annually"
                  className="h-full min-h-0 rounded-md px-7 py-0 font-semibold text-muted-foreground data-active:text-foreground"
                >
                  Yearly
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="flex w-full flex-col items-stretch gap-6 md:flex-row">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "flex w-full flex-col rounded-lg border p-6 text-left",
                  index === 1 && "bg-muted",
                )}
              >
                <Badge
                  variant={index === 1 ? "default" : "outline"}
                  className="mb-8 block w-fit uppercase"
                >
                  {plan.name}
                </Badge>
                <h3 className="text-4xl font-semibold tracking-tight lg:text-5xl">
                  {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                </h3>
                <p className="text-muted-foreground">
                  {isAnnually ? "Per year" : "Per month"}
                </p>
                <Separator className="my-6" />
                <div className="flex h-full flex-col justify-between gap-20">
                  <div>
                    {plan.featureListLabel && (
                      <p className="mb-3 font-semibold">
                        {plan.featureListLabel}
                      </p>
                    )}
                    <ul className="space-y-4 text-muted-foreground md:leading-snug">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check
                            className="size-4 shrink-0"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className="w-full"
                    variant={index === 1 ? "default" : "outline"}
                  >
                    <a href={plan.button.url}>{plan.button.text}</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing61 };
