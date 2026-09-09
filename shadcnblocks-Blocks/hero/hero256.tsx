import { Activity, ArrowRight, Receipt, Zap } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  href: string;
}

interface Hero256Props {
  badge?: string;
  heading?: {
    line1: string;
    line2: string;
  };
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  features?: Feature[];
  decorativeImage?: string;
  imageSrc: string;
  imageAlt?: string;
}

const Hero256 = ({
  badge = "Transform your business with intelligent revenue operations",
  heading = {
    line1: "Streamline your entire",
    line2: "revenue lifecycle",
  },
  buttons = {
    primary: {
      text: "Start free trial",
      url: "#",
    },
    secondary: {
      text: "Schedule a call",
      url: "#",
    },
  },
  features = [
    {
      title: "Modelling",
      description:
        "Dynamic pricing models that adapt to market conditions and customer segments",
      icon: <Zap className="size-5" />,
      color: "bg-teal-500",
      href: "#",
    },
    {
      title: "Invoicing",
      description:
        "Seamless invoicing and payment processing with intelligent dunning management",
      icon: <Receipt className="size-5" />,
      color: "bg-blue-500",
      href: "#",
    },
    {
      title: "Analytics",
      description:
        "Real-time insights and forecasting to optimize your revenue streams",
      icon: <Activity className="size-5" />,
      color: "bg-purple-500",
      href: "#",
    },
  ],
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  imageAlt = "Revenue management dashboard showing analytics and metrics",
}: Hero256Props) => {
  return (
    <section className="space-y-8 py-24 lg:py-32">
      <div className="container space-y-14">
        {/* Main Hero Section */}
        <div className="relative">
          {/* Background Pattern - only for hero section */}
          <div
            className="absolute inset-0 hidden overflow-hidden md:block"
            style={{
              maskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 150% 200% at 100% 50%, black 0%, black 25%, transparent 65%)",
            }}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Decorative Diamond Pattern - positioned on the right */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4">
              <div className="relative size-64">
                {/* Diamond pattern - circular arrangement */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 360) / 12;
                    const radius = 80;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="bg-muted-foreground/20 absolute size-3 rotate-45"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
                {/* Inner circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 360) / 8;
                    const radius = 50;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;
                    return (
                      <div
                        key={i}
                        className="bg-muted-foreground/15 absolute size-2 rotate-45"
                        style={{
                          transform: `translate(${x}px, ${y}px) rotate(45deg)`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="flex flex-col gap-8">
              {/* Badge */}
              <div className="flex w-fit items-center gap-2 border-b border-dashed">
                <div className="bg-muted-foreground size-2 rounded-full" />
                <p className="text-muted-foreground text-xs md:text-sm">
                  {badge}
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl leading-tight tracking-tight lg:text-6xl">
                <span className="text-muted-foreground">{heading.line1}</span>
                <br />
                <span>{heading.line2}</span>
              </h1>

              {/* Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                {buttons.primary && (
                  <Button asChild size="lg" className="rounded-lg shadow-md">
                    <a href={buttons.primary.url}>{buttons.primary.text}</a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-lg shadow-md"
                  >
                    <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className="flex max-w-3xl flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex items-start px-4 py-2 md:py-0 ${index < features.length - 1 ? "border-b border-dashed md:border-b-0 md:border-r" : ""}`}
            >
              {/* Feature Card Link */}
              <a
                href={feature.href}
                className="group flex w-full flex-col gap-4 transition-opacity hover:opacity-80"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Icon */}
                    <div
                      className={`${feature.color} text-primary-foreground flex size-6 items-center justify-center rounded-lg p-1`}
                    >
                      {feature.icon}
                    </div>
                    {/* Title */}
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                  </div>

                  <ArrowRight className="text-muted-foreground size-6 shrink-0" />
                </div>
                {/* Description */}
                <p className="text-muted-foreground hidden max-w-xs text-sm leading-relaxed md:block">
                  {feature.description}
                </p>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="aspect-video h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export { Hero256 };
