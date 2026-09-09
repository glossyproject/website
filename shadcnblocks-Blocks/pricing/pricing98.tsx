"use client";

import {
  BadgeCheck,
  Bell,
  Briefcase,
  Brush,
  Building,
  CalendarCheck2,
  CheckSquare,
  Code,
  Crown,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  Headphones,
  LayoutGrid,
  LineChart,
  Lock,
  MonitorSmartphone,
  Rocket,
  Settings2,
  Shield,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import { cn } from "@/lib/utils";

type IconComponent = ElementType<{ className?: string }>;
type Pricing3PlanFeature = | string
  | {
      text: string;
      icon?: IconComponent;
    };
type Pricing4PlansPlan = Pricing3PlansPlan;
interface Pricing3PlansPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period: {
    monthly: string;
    yearly: string;
  };
  description: {
    monthly: string;
    yearly: string;
  };
  buttonText: string;
  buttonUrl?: string;
  highlighted?: boolean;
  highlightedLabel?: string;
  icon?: IconComponent;
  image?: string;
  features: Pricing3PlanFeature[];
  tagline?: string;
  bestFor?: string;
  planCode?: string;
}

interface Pricing4PlansProps {
  plans: Pricing4PlansPlan[];
}

interface Pricing98Props extends Pricing4PlansProps {}
type Props = Partial<Pricing98Props>;

export function pricing3PlanFeatureText(feature: Pricing3PlanFeature): string {
  return typeof feature === "string" ? feature : feature.text;
}
export function pricing3PlanFeatureIcon(
  feature: Pricing3PlanFeature,
): IconComponent | undefined {
  return typeof feature === "string" ? undefined : feature.icon;
}
const defaultProps: Pricing98Props = {
  heading: "Simple Pricing Plans",
  description:
    "Choose the plan that fits your needs. Start free and scale as you grow.",
  plans: [
    {
      icon: Rocket,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan1.svg",
      name: "Basic Plan",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "Ideal for individuals getting started. No credit card required.",
        yearly:
          "Ideal for individuals getting started. No credit card required.",
      },
      buttonText: "Start for Free",
      buttonUrl: "#",
      highlighted: false,
      planCode: "BASIC",
      tagline: "Great for solo developers",
      bestFor: "Freelancers just starting out",
      features: [
        { icon: Code, text: "Up to 5 components" },
        { icon: LayoutGrid, text: "Community support" },
        { icon: MonitorSmartphone, text: "Weekly updates" },
        { icon: FileText, text: "100MB storage" },
        { icon: GitBranch, text: "Basic analytics" },
      ],
    },
    {
      icon: Briefcase,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
      name: "Standard Plan",
      monthlyPrice: "$20",
      yearlyPrice: "$200",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For growing teams that need more power. Start with a 30-day free trial.",
        yearly:
          "For growing teams that need more power. Save 16% compared to monthly.",
      },
      buttonText: "Get Started",
      buttonUrl: "#",
      highlighted: true,
      highlightedLabel: "Most popular",
      planCode: "STANDARD",
      tagline: "Best for growing teams",
      bestFor: "Small dev teams and startups",
      features: [
        { icon: Code, text: "Unlimited components" },
        { icon: Brush, text: "Priority support" },
        { icon: Settings2, text: "Daily updates" },
        { icon: CheckSquare, text: "10GB storage" },
        { icon: Zap, text: "Advanced analytics" },
      ],
    },
    {
      icon: Building,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan3.svg",
      name: "Premium Plan",
      monthlyPrice: "$80",
      yearlyPrice: "$800",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For large organizations with advanced needs. Everything in Standard plus dedicated support.",
        yearly:
          "For large organizations with advanced needs. Save 16% compared to monthly.",
      },
      buttonText: "Buy Now",
      buttonUrl: "#",
      highlighted: false,
      planCode: "PREMIUM",
      tagline: "Collaborate and scale fast",
      bestFor: "Product teams with multiple projects",
      features: [
        { icon: Users, text: "Unlimited components" },
        { icon: GitPullRequest, text: "Dedicated support" },
        { icon: CalendarCheck2, text: "Real-time updates" },
        { icon: Bell, text: "Unlimited storage" },
        { icon: Database, text: "Custom integrations" },
      ],
    },
    {
      icon: Shield,
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan4.svg",
      name: "Enterprise",
      monthlyPrice: "$199",
      yearlyPrice: "$1,990",
      period: {
        monthly: "Per month",
        yearly: "Per year",
      },
      description: {
        monthly:
          "For organizations that need governance, security reviews, and hands-on rollout support.",
        yearly:
          "For organizations that need governance and dedicated support. Save compared to monthly.",
      },
      buttonText: "Contact sales",
      buttonUrl: "#",
      highlighted: false,
      planCode: "ENT",
      tagline: "Security and scale",
      bestFor: "Compliance-heavy teams",
      features: [
        { icon: Shield, text: "SSO and audit logs" },
        { icon: Lock, text: "Data residency options" },
        { icon: Headphones, text: "Dedicated success manager" },
        { icon: LineChart, text: "Custom reporting and SLAs" },
        { icon: Workflow, text: "Workflow automation at scale" },
        { icon: Crown, text: "Executive business reviews" },
        { icon: Sparkles, text: "Early access to beta features" },
      ],
    },
  ],
};

const MAX_ROTATE = 38;
const MIN_SCALE = 0.88;
const MIN_OPACITY = 0.5;

function circularProgressDist(a: number, b: number): number {
  let d = a - b;
  while (d > 0.5) d -= 1;
  while (d < -0.5) d += 1;
  return d;
}

function coverflowStyles(
  progress: number,
  snapProgress: number,
  slideCount: number,
) {
  const step = 1 / slideCount;
  const dist = circularProgressDist(progress, snapProgress);
  const t = step > 0 ? dist / step : 0;
  const clamped = Math.max(-2, Math.min(2, t));
  const abs = Math.abs(clamped);

  return {
    rotateY: -clamped * MAX_ROTATE,
    scale: 1 - abs * (1 - MIN_SCALE),
    opacity: 1 - abs * (1 - MIN_OPACITY),
    z: Math.round(20 - abs * 10),
    isCenter: abs < 0.4,
  };
}

const PlanCard = ({
  plan,
  billingCycle,
  isActive,
}: {
  plan: Pricing4PlansProps["plans"][number];
  billingCycle: "monthly" | "yearly";
  isActive: boolean;
}) => (
  <Card
    className={cn(
      "h-full border-2 transition-[border-color,box-shadow] duration-200",
      isActive
        ? "border-primary shadow-lg shadow-primary/20"
        : "border-border shadow-sm",
    )}
  >
    <CardHeader>
      <CardTitle className="text-lg font-medium">{plan.name}</CardTitle>
      <div className="mt-4">
        <div className="text-5xl font-semibold tracking-tight">
          {billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
        </div>
        <div className="text-sm text-muted-foreground">
          {billingCycle === "monthly"
            ? plan.period.monthly
            : plan.period.yearly}
        </div>
      </div>
    </CardHeader>
    <CardContent className="px-7 pt-2">
      <p className="line-clamp-3 text-sm text-muted-foreground">
        {billingCycle === "monthly"
          ? plan.description.monthly
          : plan.description.yearly}
      </p>
      <Button
        asChild
        className="mt-6 w-full"
        variant={isActive ? "default" : "outline"}
      >
        <a href={plan.buttonUrl ?? "#"}>{plan.buttonText}</a>
      </Button>
      <div className="relative my-8 flex items-center justify-center overflow-hidden">
        <Separator />
        <span className="px-3 text-xs text-muted-foreground opacity-50">
          FEATURES
        </span>
        <Separator />
      </div>
      <ul className="space-y-4">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <BadgeCheck className="size-5 shrink-0 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {pricing3PlanFeatureText(feature)}
            </span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

const Pricing98 = (props: Props) => {
  const { heading, description, plans, className } = {
    ...defaultProps,
    ...props,
  };
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );
  const startIndex = Math.max(
    0,
    plans.findIndex((p) => p.highlighted),
  );

  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const [snapList, setSnapList] = useState<number[]>([]);
  const rafRef = useRef<number>(0);

  const syncProgress = useCallback(() => {
    if (!api) return;
    setProgress(api.scrollProgress());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setSnapList(api.scrollSnapList());
    syncProgress();

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        syncProgress();
      });
    };

    api.on("scroll", onScroll);
    api.on("reInit", () => {
      setSnapList(api.scrollSnapList());
      syncProgress();
    });

    return () => {
      api.off("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [api, syncProgress]);

  const slideCount = plans.length;

  return (
    <section className={cn("py-24 lg:py-32", className)}>
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              {heading}
            </h2>
            {description ? (
              <p className="text-muted-foreground lg:text-lg">{description}</p>
            ) : null}
          </div>

          <div className="flex justify-center">
            <ToggleGroup
              type="single"
              value={billingCycle}
              onValueChange={(v) =>
                v && setBillingCycle(v as "monthly" | "yearly")
              }
              className="rounded-lg bg-muted p-1"
            >
              <ToggleGroupItem
                value="monthly"
                className="h-8 w-32 rounded-md data-[state=on]:bg-background"
              >
                Monthly
              </ToggleGroupItem>
              <ToggleGroupItem
                value="yearly"
                className="h-8 w-32 rounded-md data-[state=on]:bg-background"
              >
                Yearly
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <div className="relative" style={{ perspective: "1200px" }}>
            <Carousel
              opts={{
                align: "center",
                startIndex,
                loop: true,
                skipSnaps: false,
              }}
              setApi={setApi}
            >
              <CarouselContent className="-ml-4">
                {plans.map((plan, index) => {
                  const snap = snapList[index] ?? 0;
                  const styles = coverflowStyles(progress, snap, slideCount);

                  return (
                    <CarouselItem
                      key={plan.name}
                      className="basis-full pl-4 sm:basis-[75%] md:basis-[55%] lg:basis-[42%]"
                    >
                      <div
                        className="relative h-full origin-center will-change-transform"
                        style={{
                          transform: `rotateY(${styles.rotateY}deg) scale(${styles.scale})`,
                          opacity: styles.opacity,
                          zIndex: styles.z,
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <PlanCard
                          plan={plan}
                          billingCycle={billingCycle}
                          isActive={styles.isCenter}
                        />
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <div className="mt-8 flex justify-center gap-2">
                <CarouselPrevious className="static translate-y-0" />
                <CarouselNext className="static translate-y-0" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing98 };
