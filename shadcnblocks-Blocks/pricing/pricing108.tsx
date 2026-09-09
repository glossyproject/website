"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

interface PricingSinglePlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period?: { monthly: string; yearly: string };
  features: string[];
  button: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
  featureListLabel?: string;
  image?: string;
  badge?: string;
  priceNote?: string;
}

interface PricingSingleProps {
  heading: string;
  description: string;
  plan: PricingSinglePlan;
  discount?: string;
  className?: string;
}

interface Pricing108Props extends PricingSingleProps {}
type Props = Partial<Pricing108Props>;

const defaultProps: Pricing108Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
  discount: "-20%",
  plan: {
    name: "Pro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
    description:
      "For individual developers and side projects shipping real interfaces.",
    monthlyPrice: "$49",
    yearlyPrice: "$129",
    period: { monthly: "/month", yearly: "/year" },
    badge: "Most popular",
    featureListLabel: "Includes",
    features: [
      "Up to 5 team members",
      "Advanced components library",
      "Priority support",
      "2GB storage space",
      "Team collaboration",
      "Custom branding",
    ],
    button: {
      text: "Get started",
      url: "#",
    },
    secondaryButton: {
      text: "Talk to sales",
      url: "#",
    },
  },
};

const Pricing108 = (props: Props) => {
  const { heading, description, plan, discount, className } = {
    ...defaultProps,
    ...props,
  };
  const [isYearly, setIsYearly] = useState(false);
  const periodMonthly = plan.period?.monthly ?? "/month";
  const periodYearly = plan.period?.yearly ?? "/year";

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12">
          <div
            className={cn(
              "relative flex min-h-64 items-end overflow-hidden rounded-2xl border border-border p-8",
              "bg-linear-to-br from-muted/80 via-background to-primary/5",
            )}
          >
            <div className="pointer-events-none absolute -top-12 -right-12 size-48 rounded-full bg-primary/10 blur-2xl" />
            {plan.image ? (
              <img
                src={plan.image}
                alt=""
                className="absolute top-8 right-8 size-24 opacity-90"
              />
            ) : null}
            <div className="relative">
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                {plan.name}
              </p>
              <h2 className="mt-2 max-w-sm text-3xl font-semibold tracking-tight text-pretty lg:text-4xl">
                {heading}
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="mb-6 text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-lg border p-4">
              <div>
                <p className="text-3xl font-semibold">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-base font-normal text-muted-foreground">
                    {isYearly ? periodYearly : periodMonthly}
                  </span>
                </p>
                {plan.priceNote ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {plan.priceNote}
                  </p>
                ) : null}
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <span>Monthly</span>
                <Switch checked={isYearly} onCheckedChange={setIsYearly} />
                <span>
                  Yearly
                  {discount ? ` (${discount})` : ""}
                </span>
              </div>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="mb-6" />
            <ul className="mb-8 flex flex-col gap-2">
              {plan.features.slice(0, 5).map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-fit gap-2" asChild>
              <a href={plan.button.url} target="_blank" rel="noreferrer">
                {plan.button.text}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing108 };
