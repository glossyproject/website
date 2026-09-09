"use client";
import {
  ArrowRight,
  Bell,
  Book,
  Brush,
  CalendarCheck2,
  CheckSquare,
  ClipboardList,
  Code,
  Database,
  FileText,
  GitBranch,
  GitPullRequest,
  LayoutGrid,
  LifeBuoy,
  LucideIcon,
  MonitorSmartphone,
  PhoneCall,
  Server,
  Settings2,
  Slack,
  Users,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface PricingPlan {
  name: string;
  priceMonthly: string;
  description: string;
  bestFor: string;
  features?: FeatureItem[];
  mostPopular?: boolean;
  cta: {
    text: string;
    href: string;
  };
}

const PLANS: PricingPlan[] = [
  {
    name: "Starter",
    priceMonthly: "$9",
    description: "Great for solo developers",
    bestFor: "Freelancers just starting out",
    features: [
      { icon: Code, text: "Access to core components" },
      { icon: LayoutGrid, text: "Basic layout blocks" },
      { icon: MonitorSmartphone, text: "Responsive design templates" },
      { icon: FileText, text: "Starter documentation" },
      { icon: GitBranch, text: "Version history" },
      { icon: LifeBuoy, text: "Community support" },
      { icon: Book, text: "UI guidebook PDF" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Pro",
    priceMonthly: "$29",
    description: "Best for growing teams",
    bestFor: "Small dev teams and startups",
    features: [
      { icon: Code, text: "Advanced UI block library" },
      { icon: Brush, text: "Custom themes support" },
      { icon: Settings2, text: "Design system tools" },
      { icon: CheckSquare, text: "Component tests included" },
      { icon: Zap, text: "Performance enhancements" },
      { icon: Server, text: "Shared components hosting" },
      { icon: PhoneCall, text: "Email + chat support" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
  {
    name: "Team",
    mostPopular: true,
    priceMonthly: "$59",
    description: "Collaborate and scale fast",
    bestFor: "Product teams with multiple projects",
    features: [
      { icon: Users, text: "Team access control" },
      { icon: GitPullRequest, text: "Merge & review UI blocks" },
      { icon: CalendarCheck2, text: "Priority feature roadmap" },
      { icon: Bell, text: "Update notifications" },
      { icon: Database, text: "Component usage analytics" },
      { icon: Slack, text: "Slack integration" },
      { icon: ClipboardList, text: "Project templates library" },
    ],
    cta: {
      text: "Get started",
      href: "#",
    },
  },
];

const Pricing31 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="gap-9.5 flex flex-col items-center justify-center">
          <h1 className="text-foreground text-center font-serif text-5xl leading-none md:text-6xl lg:text-7xl">
            A plan for any project you undertake
          </h1>
          <div className="mt-3 grid w-full grid-cols-1 gap-5 lg:grid-cols-3">
            {PLANS.map((plan, index) => (
              <PlanCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PlanCard = ({ plan }: { plan: PricingPlan }) => {
  return (
    <div
      className={`relative h-full w-full rounded-lg border px-6 py-5 ${plan?.mostPopular ? "border-primary" : "border-border"} bg-background`}
    >
      <div className="text-2xl">{plan.name}</div>
      <div className="text-[2.875rem] font-semibold leading-[1.05]">
        {plan.priceMonthly}
      </div>
      <div className="text-foreground/60 text-xs">
        <div>per person / month</div>
        <div>{plan.bestFor}</div>
      </div>
      <div className="text-foreground mb-6 mt-4 text-lg font-medium">
        {plan.description}
      </div>
      <Button
        asChild
        className="w-full"
        variant={plan.mostPopular ? "default" : "outline"}
        size="lg"
      >
        <a href={plan.cta.href}>
          {plan.cta.text}
          <ArrowRight />
        </a>
      </Button>
      <div className="mt-6 flex flex-col gap-4">
        {plan.features?.map((feature, index) => (
          <div key={index} className="text-foreground flex items-center gap-3">
            <feature.icon className="size-5 stroke-1" />
            {feature.text}
          </div>
        ))}
      </div>
      {plan.mostPopular && (
        <div className="-translate-1/2 bg-primary text-primary-foreground absolute left-1/2 top-0 w-fit -translate-y-1/2 rounded-full px-4 py-1 text-xs font-medium">
          Most popular
        </div>
      )}
    </div>
  );
};

export { Pricing31 };
