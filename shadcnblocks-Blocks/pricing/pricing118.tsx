import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

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
  className?: string;
}

interface Pricing118Props extends PricingSingleProps {}
type Props = Partial<Pricing118Props>;

const defaultProps: Pricing118Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
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

const Pricing118 = (props: Props) => {
  const { heading, description, plan, className } = {
    ...defaultProps,
    ...props,
  };
  const periodMonthly = plan.period?.monthly ?? "/month";

  return (
    <section
      className={cn("bg-primary py-32 text-primary-foreground", className)}
    >
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-pretty text-primary-foreground lg:text-5xl">
              {heading}
            </h2>
            <p className="text-primary-foreground/85 lg:text-lg">
              {description}
            </p>
          </div>
          <div className="rounded-2xl bg-background p-8 text-foreground shadow-xl md:p-12">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-1 text-4xl font-semibold tracking-tight md:text-5xl">
                  {plan.monthlyPrice}
                  <span className="text-lg font-normal text-muted-foreground">
                    {periodMonthly}
                  </span>
                </p>
                <p className="mt-4 max-w-lg text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>
              <Button size="lg" asChild>
                <a href={plan.button.url} target="_blank" rel="noreferrer">
                  {plan.button.text}
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-3 border-t pt-8 sm:grid-cols-2">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="min-w-0 text-pretty">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing118 };
