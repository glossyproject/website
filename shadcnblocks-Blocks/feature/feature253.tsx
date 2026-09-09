import { ArrowRight } from "lucide-react";
import React from "react";

import { Globe } from "@/components/magicui/globe";
import { Button } from "@/components/ui/button";

const Feature253 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="h-92 rounded-4xl bg-muted relative flex w-full flex-col justify-between overflow-hidden border p-8 md:flex-row">
          <div className="flex h-full max-w-lg flex-col justify-center gap-4">
            <h1 className="text-4xl font-medium tracking-tighter md:text-6xl">
              Your Ultimate Solution
            </h1>
            <p className="text-muted-foreground/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            </p>
            <Button
              variant="default"
              className="z-99 bg-background text-foreground hover:bg-background group relative w-fit !rounded-full border border-none px-10 tracking-tighter !shadow-none"
            >
              Join Today
              <ArrowRight className="bg-foreground text-background ml-2 -rotate-45 rounded-full p-px transition-all ease-in-out group-hover:rotate-0" />
            </Button>
          </div>
          <div className="relative size-full">
            <Globe className="md:-right-100 absolute top-0 md:top-10 md:scale-150" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature253 };
