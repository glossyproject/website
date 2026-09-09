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

interface Pricing67Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing67Props>;

const defaultProps: Pricing67Props = {
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

const Pricing67 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [isAnnual, setIsAnnual] = useState(false);

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

          <div className="flex items-center justify-center gap-5 text-base font-semibold">
            <Switch
              className="scale-125"
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              aria-label="Toggle annual billing"
            />
            <span>Annual billing</span>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {plans.map((plan) => {
              const isHighlighted = plan.highlighted === true;
              return (
                <div
                  key={plan.name}
                  className={cn(
                    "flex flex-col rounded-xl p-6",
                    isHighlighted
                      ? "bg-primary text-primary-foreground"
                      : "border bg-card",
                  )}
                >
                  <div className="flex flex-1 flex-col gap-6">
                    <div>
                      <h3 className="text-xl font-semibold">{plan.name}</h3>
                      <p
                        className={cn(
                          "mt-1 text-sm",
                          isHighlighted
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground",
                        )}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-4xl font-semibold tracking-tight">
                        {isAnnual ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span
                        className={cn(
                          "ml-1 text-sm",
                          isHighlighted
                            ? "text-primary-foreground/80"
                            : "text-muted-foreground",
                        )}
                      >
                        {isAnnual ? "per year" : "per month"}
                      </span>
                    </div>

                    <ul className="flex-1 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check
                            className={cn(
                              "size-4 shrink-0",
                              isHighlighted
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground",
                            )}
                            aria-hidden
                          />
                          <span
                            className={cn(
                              "text-sm",
                              isHighlighted
                                ? "text-primary-foreground/90"
                                : "text-muted-foreground",
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild
                      variant={isHighlighted ? "secondary" : "outline"}
                      className="w-full"
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing67 };
