"use client";

import { BadgeCheck } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const PRICING_PLANS = [
  {
    name: "Basic Plan",
    monthlyPrice: "$0",
    yearlyPrice: "$0",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly:
        "Ideal for individuals getting started with our service. No credit card required.",
      yearly:
        "Ideal for individuals getting started with our service. No credit card required.",
    },
    buttonText: "Start for Free",
    highlighted: false,
    features: [
      "Limited Access Features",
      "Basic Support",
      "Weekly Blogs",
      "100GB Drive",
      "All framework support",
    ],
  },
  {
    name: "Standard Plan",
    monthlyPrice: "$20",
    yearlyPrice: "$200",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly:
        "Perfect for small businesses looking to grow. Start with a 30-day free trial.",
      yearly:
        "Perfect for small businesses looking to grow. Save 16% compared to monthly billing.",
    },
    buttonText: "Get Started",
    highlighted: true,
    features: [
      "Limited Access Features",
      "Basic Support",
      "Weekly Blogs",
      "100GB Drive",
      "All framework support",
    ],
  },
  {
    name: "Premium Plan",
    monthlyPrice: "Custom",
    yearlyPrice: "Custom",
    period: {
      monthly: "Per month/user",
      yearly: "Per year/user",
    },
    description: {
      monthly:
        "Best for large organizations with advanced needs. Contact us for a custom quote.",
      yearly:
        "Best for large organizations with advanced needs. Contact us for a custom quote.",
    },
    buttonText: "Get Started",
    highlighted: false,
    features: [
      "Limited Access Features",
      "Basic Support",
      "Weekly Blogs",
      "100GB Drive",
      "All framework support",
    ],
  },
];

const Pricing34 = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="bg-background py-32">
      <div className="gap-13 container flex flex-col">
        <h1 className="text-foreground text-center text-6xl font-bold tracking-tighter">
          Simple Pricing Plans
        </h1>

        <div className="flex justify-center">
          <ToggleGroup
            type="single"
            value={billingCycle}
            onValueChange={(value) => {
              if (value && value !== billingCycle) {
                setBillingCycle(value);
              }
            }}
            className="bg-muted rounded-lg p-1"
          >
            <ToggleGroupItem
              value="monthly"
              className="data-[state=on]:bg-background h-8 w-32 rounded-md"
            >
              Monthly
            </ToggleGroupItem>
            <ToggleGroupItem
              value="yearly"
              className="data-[state=on]:bg-background h-8 w-32 rounded-md"
            >
              Yearly
            </ToggleGroupItem>
          </ToggleGroup>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-wrap justify-center gap-7">
          {PRICING_PLANS.map((plan, index) => (
            <Card
              key={index}
              className={`max-w-sm rounded-3xl border ${
                plan.highlighted ? "border-primary border-2" : "border-border"
              } shadow-sm`}
            >
              <CardHeader>
                <CardTitle className="text-foreground text-lg font-medium">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <div className="text-muted-foreground text-5xl font-semibold tracking-tight">
                    {billingCycle === "monthly"
                      ? plan.monthlyPrice
                      : plan.yearlyPrice}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {billingCycle === "monthly"
                      ? plan.period.monthly
                      : plan.period.yearly}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="px-7 pt-6">
                <p className="text-muted-foreground text-sm">
                  {billingCycle === "monthly"
                    ? plan.description.monthly
                    : plan.description.yearly}
                </p>

                <Button className="mt-6 w-full">{plan.buttonText}</Button>

                <div className="relative mb-4 mt-12 flex items-center justify-center overflow-hidden">
                  <Separator />
                  <span className="text-muted-foreground px-3 text-xs opacity-50">
                    FEATURES
                  </span>
                  <Separator />
                </div>

                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <BadgeCheck className="text-muted-foreground size-5" />
                      <span className="text-muted-foreground ml-3 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Pricing34 };
