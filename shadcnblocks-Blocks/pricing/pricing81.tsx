"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
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

interface Pricing81Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing81Props>;

const defaultProps: Pricing81Props = {
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

const Pricing81 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl lg:text-5xl">
              {heading}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>

          <div className="flex items-center gap-5 text-base font-semibold">
            Monthly
            <Switch
              className="scale-125"
              checked={isYearly}
              onCheckedChange={setIsYearly}
            />
            Yearly
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2">
            {plans.map((plan, index) => {
              const isHighlighted = index === 1;
              const cardContent = (
                <div className="flex h-full flex-col p-6">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.description}
                  </p>

                  <div className="mt-4">
                    <span className="text-4xl font-bold tracking-tight">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="ml-1 text-sm text-muted-foreground">
                      {isYearly ? "per year" : "per month"}
                    </span>
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
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
                    className="mt-8 w-full"
                    variant={isHighlighted ? "default" : "outline"}
                  >
                    <a href={plan.button.url}>{plan.button.text}</a>
                  </Button>
                </div>
              );

              if (isHighlighted) {
                return (
                  <div key={plan.name} className="rounded-xl bg-primary p-0.5">
                    <div className="h-full rounded-[10px] bg-background">
                      {cardContent}
                    </div>
                  </div>
                );
              }

              return (
                <div key={plan.name} className="rounded-xl border">
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing81 };
