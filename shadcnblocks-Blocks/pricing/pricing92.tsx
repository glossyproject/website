import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

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

interface Pricing92Props extends PricingCards2CardsProps {}
type Props = Partial<Pricing92Props>;

const defaultProps: Pricing92Props = {
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

const Pricing92 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const displayPlans = plans.slice(0, 2);

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col">
              <h1 className="my-6 text-3xl font-bold text-pretty md:text-4xl xl:text-5xl">
                {heading}
              </h1>
              {description ? (
                <p className="text-muted-foreground lg:text-xl">
                  {description}
                </p>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-6 gap-y-8 lg:grid lg:grid-cols-2">
            {displayPlans.map((plan, idx) => (
              <article
                key={`${plan.name}-${idx}`}
                className={cn(
                  "overflow-clip rounded-xl border",
                  plan.highlighted ? "border-primary" : "border-border lg:mt-7",
                )}
              >
                {plan.highlighted ? (
                  <div className="flex h-7 items-center justify-center bg-primary text-center text-xs font-semibold text-primary-foreground">
                    Recommended
                  </div>
                ) : null}
                <header className="p-4 sm:p-6 lg:pt-10">
                  <div className="mb-6 md:flex md:items-center lg:block">
                    <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center lg:mb-6 lg:flex-col-reverse lg:items-start lg:gap-y-4">
                      <div className="flex-1 md:ml-6 lg:ml-0">
                        <p className="mb-1 text-xl font-medium sm:text-2xl">
                          {plan.name}
                        </p>
                        <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                          {plan.description}
                        </p>
                      </div>
                      {plan.image ? (
                        <img
                          src={plan.image}
                          alt=""
                          className="size-16 sm:size-20"
                        />
                      ) : null}
                    </div>
                    <div>
                      <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                        {plan.monthlyPrice}
                      </h2>
                      <p className="text-xs font-medium text-muted-foreground">
                        Billed monthly
                      </p>
                    </div>
                  </div>
                  <div>
                    <Button
                      variant={plan.highlighted ? "default" : "outline"}
                      className="w-full"
                      asChild
                    >
                      <a href={plan.button.url}>{plan.button.text}</a>
                    </Button>
                  </div>
                </header>
                <main className="space-y-6 border-t border-border p-4 sm:p-6 md:grid md:grid-cols-2 md:space-y-0 lg:block lg:space-y-6">
                  <div>
                    {plan.featureListLabel ? (
                      <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        {plan.featureListLabel}
                      </h2>
                    ) : (
                      <h2 className="mb-3 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Features
                      </h2>
                    )}
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-x-2 text-xs font-medium text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0" aria-hidden />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </main>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing92 };
