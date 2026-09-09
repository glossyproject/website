"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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

interface Pricing78Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing78Props>;

const defaultProps: Pricing78Props = {
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

const Pricing78 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [billingCycle, setBillingCycle] = useState("monthly");
  const isYearly = billingCycle === "yearly";

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty lg:text-5xl">
            {heading}
          </h2>
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value: string) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="w-fit shrink-0 rounded-lg border p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="rounded-md px-6 data-[state=on]:bg-muted"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="rounded-md px-6 data-[state=on]:bg-muted"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {plans.map((plan, index) => (
            <div key={plan.name}>
              <div
                className={cn(
                  "rounded-lg border p-6",
                  index === 1 && "bg-muted",
                )}
              >
                <h3 className="font-semibold">{plan.name}</h3>
                <div className="mt-3">
                  <span className="text-4xl font-semibold tracking-tight">
                    {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {isYearly ? "/year" : "/month"}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <Button
                  asChild
                  className="mt-6 w-full"
                  variant={index === 1 ? "default" : "outline"}
                >
                  <a href={plan.button.url}>{plan.button.text}</a>
                </Button>
              </div>
              <ul className="mt-6 px-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>
                    {idx > 0 && (
                      <Separator className="my-3 border-0 border-t border-dashed border-border bg-transparent" />
                    )}
                    <div className="flex items-center gap-2">
                      <Check className="size-4 shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing78 };
