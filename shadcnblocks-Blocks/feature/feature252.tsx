import React from "react";

import { Ripple } from "@/components/magicui/ripple";
import { Button } from "@/components/ui/button";

const Feature252 = () => {
  return (
    <section className="bg-muted py-32">
      <div className="container">
        <div className="h-92 rounded-4xl bg-background relative w-full overflow-hidden border p-4">
          <svg
            className="absolute left-0 top-0 size-full p-4"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.2"
              width="100%"
              height="100%"
              rx="22"
              strokeWidth="2"
              stroke="currentColor"
              strokeDasharray="7 12"
            />
          </svg>
          <div className="relative flex size-full items-center justify-center overflow-hidden rounded-3xl text-center">
            <div className="flex flex-col items-center gap-4">
              <p className="text-muted-foreground mx-auto max-w-sm lg:text-xl">
                Blocks Build with Shadcn and Tailwindcss
              </p>
              <h1 className="text-5xl font-medium tracking-tighter lg:text-7xl">
                Your Ultimate Solution
              </h1>
              <Button
                variant="secondary"
                className="z-99 relative mb-20 w-fit !rounded-none border px-10"
              >
                Get Started
              </Button>
            </div>

            <Ripple mainCircleSize={550} className="-bottom-220 absolute" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature252 };
