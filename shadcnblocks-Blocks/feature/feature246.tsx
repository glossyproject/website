import { BadgeCheck } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Feature246 = () => {
  const benefits = [
    "Global coverage, always",
    "No Other unnecessary mails",
    "We Don't send spams mails",
    "Explore tommorow",
  ];

  return (
    <section className="bg-background">
      <div className="container flex flex-col justify-between overflow-hidden py-32 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-20 lg:mr-2">
          <h1 className="text-foreground text-5xl font-semibold tracking-tighter md:text-7xl">
            Join Shadncn Blocks
            <br />
            Get Updates
          </h1>
          <div className="space-y-5">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex h-7 w-7 items-center justify-center">
                  <BadgeCheck className="h-20" />
                </div>
                <span className="text-foreground text-xl tracking-tight">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
          <div className="border-border flex w-full items-center overflow-hidden rounded-full border p-2">
            <Input
              className="text-lg! h-full border-none pl-6 tracking-tight shadow-none outline-none focus-visible:outline-none focus-visible:ring-0"
              placeholder="Enter your email"
            />
            <Button className="h-15 bg-foreground text-background right-2 rounded-full px-10 text-lg font-medium tracking-tight transition-all ease-in-out hover:px-12">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="relative flex h-auto w-full items-center justify-end rounded-none">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-letters-and-arrows-flying-out-of-a-black-hole.svg"
            className="object-fit left-40 scale-x-[-1] lg:absolute"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { Feature246 };
