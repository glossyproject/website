"use client";

import { BadgeCheck } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
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

interface Pricing60Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing60Props>;

const defaultProps: Pricing60Props = {
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

const Pricing60 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [cycle, setCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className={cn("border-y bg-muted/30 py-32 font-mono", className)}>
      <div className="container font-sans">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="space-y-4 text-center">
            <h2 className="font-sans text-3xl font-medium tracking-tight text-balance md:text-4xl">
              {heading}
            </h2>
            {description ? (
              <p className="mx-auto max-w-2xl font-sans text-muted-foreground lg:text-lg">
                {description}
              </p>
            ) : null}
          </div>

          <div className="flex justify-center">
            <ToggleGroup
              type="single"
              value={cycle}
              onValueChange={(v) => v && setCycle(v as "monthly" | "yearly")}
              className="gap-1 rounded-lg border bg-background p-1"
            >
              <ToggleGroupItem
                value="monthly"
                className="h-9 rounded-md! px-5 text-xs data-[state=on]:bg-muted"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="h-9 rounded-md! px-5 text-xs data-[state=on]:bg-muted"
              >
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
            {plans.map((plan, index) => {
              const price =
                cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const code = plan.name.toLowerCase().replace(/\s+/g, "_");

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "grid! h-full min-h-0 grid-rows-[auto_1fr_auto] gap-6 border-dashed font-mono shadow-none",
                    index === 1 && "border-solid border-primary bg-background",
                  )}
                >
                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <Badge
                        variant="outline"
                        className="font-mono text-xs uppercase"
                      >
                        {code}
                      </Badge>
                      {index === 1 ? (
                        <Badge className="font-mono text-xs uppercase">
                          default
                        </Badge>
                      ) : null}
                    </div>
                    <div>
                      <p className="font-sans text-lg font-semibold tracking-tight">
                        {plan.name}
                      </p>
                      <p className="mt-4 text-3xl font-semibold tracking-tighter tabular-nums">
                        {price}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {cycle === "monthly" ? "Per month" : "Per year"}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent className="min-h-0 gap-4 text-xs">
                    <p className="text-muted-foreground">{plan.description}</p>
                    {plan.featureListLabel && (
                      <p className="font-semibold">{plan.featureListLabel}</p>
                    )}
                    <ul className="space-y-2 border-t pt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex gap-2">
                          <BadgeCheck className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex flex-col border-0 p-6 pt-0">
                    <Button
                      asChild
                      className="w-full text-xs"
                      size="sm"
                      variant={index === 1 ? "default" : "outline"}
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>

          <p className="text-center font-mono text-xs text-muted-foreground">
            Plan identifiers are for integration tests and billing webhooks.
          </p>
        </div>
      </div>
    </section>
  );
};

export { Pricing60 };
