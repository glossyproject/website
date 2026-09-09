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
  CardTitle,
} from "@/components/ui/card";
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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface PricingSingleProps {
  heading: string;
  description: string;
  plan: PricingSinglePlan;
  badge?: Badge;
  discount?: string;
  className?: string;
}

interface Pricing107Props extends PricingSingleProps {}
type Props = Partial<Pricing107Props>;

const defaultProps: Pricing107Props = {
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

const Pricing107 = (props: Props) => {
  const { heading, description, plan, discount, badge, className } = {
    ...defaultProps,
    ...props,
  };
  const [isYearly, setIsYearly] = useState(false);
  const periodMonthly = plan.period?.monthly ?? "/month";
  const periodYearly = plan.period?.yearly ?? "/year";

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          {badge?.text ? (
            <Badge variant="secondary" className="mb-4 rounded-full">
              {badge.text}
            </Badge>
          ) : null}
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="mx-auto max-w-lg">
          <div className="relative overflow-hidden rounded-xl border border-border shadow-sm">
            <div className="rounded-t-xl bg-muted px-6 pt-6 pb-6">
              <div className="flex items-center gap-3 text-sm font-semibold">
                <span className="text-muted-foreground">Monthly</span>
                <Switch
                  className="scale-125"
                  checked={isYearly}
                  onCheckedChange={setIsYearly}
                />
                <span className="text-muted-foreground">
                  Yearly{discount ? ` ${discount}` : ""}
                </span>
              </div>
            </div>
            <Card className="gap-6 rounded-none rounded-b-xl border-0 border-t-0 p-6 shadow-none ring-0">
              <CardHeader className="px-0">
                <CardTitle className="flex items-center gap-2 text-xl font-semibold">
                  <BadgeCheck className="size-6 text-primary" />
                  {plan.name}
                  {plan.badge ? (
                    <Badge variant="outline" className="font-normal">
                      {plan.badge}
                    </Badge>
                  ) : null}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-4xl font-semibold tracking-tight">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  <span className="text-lg font-normal text-muted-foreground">
                    {isYearly ? periodYearly : periodMonthly}
                  </span>
                </p>
                <Separator className="my-6" />
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      <span className="min-w-0 text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="px-0 pt-0 pb-0">
                <Button className="w-full" asChild>
                  <a href={plan.button.url} target="_blank" rel="noreferrer">
                    {plan.button.text}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing107 };
