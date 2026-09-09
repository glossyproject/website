"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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

interface Pricing69Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing69Props>;

const defaultProps: Pricing69Props = {
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

const Pricing69 = (props: Props) => {
  const { heading, description, discount, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnually, setIsAnnually] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="flex justify-center">
            <div className="inline-flex h-12 items-stretch rounded-md bg-muted p-1 text-lg">
              <RadioGroup
                defaultValue="monthly"
                className="h-full min-h-0 w-auto grid-cols-2 gap-0 self-stretch"
                onValueChange={(value: string) => {
                  setIsAnnually(value === "annually");
                }}
              >
                <div className="flex h-full min-h-0 min-w-0 items-center justify-center rounded-md transition-all has-[button[data-state=checked]]:bg-background">
                  <RadioGroupItem
                    value="monthly"
                    id="pricing69-monthly"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="pricing69-monthly"
                    className="inline-flex cursor-pointer items-center px-7 font-semibold whitespace-nowrap text-muted-foreground"
                  >
                    Monthly
                  </Label>
                </div>
                <div className="flex h-full min-h-0 min-w-0 items-center justify-center rounded-md transition-all has-[button[data-state=checked]]:bg-background">
                  <RadioGroupItem
                    value="annually"
                    id="pricing69-annually"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="pricing69-annually"
                    className="inline-flex cursor-pointer items-center gap-1 px-7 font-semibold whitespace-nowrap text-muted-foreground"
                  >
                    Yearly
                    {discount && (
                      <Badge
                        variant="outline"
                        className="border-green-200 bg-green-100 px-1.5 text-green-600"
                      >
                        {discount}
                      </Badge>
                    )}
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={cn(
                  "flex flex-col rounded-lg border bg-card p-6",
                  index === 1 && "border-primary",
                )}
              >
                <div className="flex flex-1 flex-col gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">{plan.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-5xl font-semibold tracking-tight">
                      {isAnnually ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {isAnnually ? "per year" : "per month"}
                    </span>
                  </div>

                  <div className="flex-1">
                    {plan.featureListLabel && (
                      <p className="mb-3 text-sm font-semibold">
                        {plan.featureListLabel}
                      </p>
                    )}
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check
                            className="size-4 shrink-0 text-muted-foreground"
                            aria-hidden
                          />
                          <span className="text-sm">{feature}</span>
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

export { Pricing69 };
