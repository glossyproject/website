"use client";

import { ArrowRight } from "lucide-react";
import React from "react";

import { Globe } from "@/components/magicui/globe";
import { Meteors } from "@/components/magicui/meteors";
import { Button } from "@/components/ui/button";

const Hero216 = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center justify-center gap-4 overflow-hidden">
        <p className="text-muted-foreground">
          Bridging Developers, Building the Future
        </p>
        <h1 className="font-calSans max-w-3xl text-center text-6xl md:text-7xl">
          Connecting Developers Worldwide
        </h1>

        <Meteors number={30} />

        <Button
          variant="secondary"
          className="text-md group mt-10 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          Get Started
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
        <div className="h-115 relative w-full overflow-y-clip">
          <Globe className="scale-175 translate-y-40" />
        </div>
      </div>
    </section>
  );
};

export { Hero216 };
