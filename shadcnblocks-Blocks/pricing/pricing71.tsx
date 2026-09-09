"use client";

import { BadgeCheck } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

interface Pricing71Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing71Props>;

const defaultProps: Pricing71Props = {
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

const PlanCard = ({
  plan,
  isYearly,
  highlighted,
}: {
  plan: PricingCards2CardsPlan;
  isYearly: boolean;
  highlighted: boolean;
}) => (
  <Card className={cn("rounded-xl", highlighted && "bg-muted/35")}>
    <CardHeader>
      <CardTitle className="text-lg font-medium">{plan.name}</CardTitle>
      <div className="mt-4">
        <div className="text-5xl font-semibold tracking-tight">
          {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
        </div>
        <p className="text-xs text-muted-foreground">
          {isYearly ? "per year" : "per month"}
        </p>
      </div>
    </CardHeader>
    <CardContent className="px-7 pt-6">
      <p className="text-sm text-muted-foreground">{plan.description}</p>
      <Button
        asChild
        className="mt-6 w-full"
        variant={highlighted ? "default" : "outline"}
      >
        <a href={plan.button.url}>{plan.button.text}</a>
      </Button>
      <div className="relative mt-12 mb-4 flex items-center justify-center overflow-hidden">
        <Separator />
        <span className="px-3 text-xs text-muted-foreground opacity-50">
          FEATURES
        </span>
        <Separator />
      </div>
      <ul className="mt-6 space-y-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <BadgeCheck className="size-5 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Pricing71 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };

  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-8">
          <h2 className="text-center text-4xl font-medium tracking-tight text-balance lg:text-5xl">
            {heading}
          </h2>
          {description && (
            <p className="text-center text-muted-foreground">{description}</p>
          )}
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
            {plans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                isYearly={isYearly}
                highlighted={index === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing71 };
