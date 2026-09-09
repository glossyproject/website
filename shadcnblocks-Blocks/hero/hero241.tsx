import { ArrowRight } from "lucide-react";
import React from "react";

import { BackgroundBeamsWithCollision } from "@/components/aceternity/background-beams-with-collision";
import { Button } from "@/components/ui/button";

const Hero241 = () => {
  return (
    <section className="relative h-full min-h-screen w-screen overflow-hidden py-32">
      <div className="container static z-10 flex flex-col items-center justify-center gap-10 text-center">
        <h1 className="font-playfair mt-10 text-5xl font-medium tracking-tight lg:text-7xl">
          Your Shortcut to <br /> Launch-Ready Interfaces
        </h1>
        <p className="max-w-xl font-medium leading-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <div className="flex items-center gap-4">
          <Button className="text-md rounded-xl font-serif">
            Documentation <ArrowRight className="-rotate-45" />{" "}
          </Button>
          <Button variant="secondary" className="text-md rounded-xl font-serif">
            Try it for free <ArrowRight className="-rotate-45" />{" "}
          </Button>
        </div>
        <div className="absolute bottom-8 flex items-center justify-center gap-7">
          <div className="text-right">
            <h1 className="font-serif text-4xl tracking-tight">&lt;$1.2M</h1>
            <p className="text-muted-foreground">Developer Trust</p>
          </div>
          <div className="bg-foreground h-24 w-px" />
          <div className="text-left">
            <h1 className="font-serif text-4xl tracking-tight">95.1%</h1>
            <p className="text-muted-foreground">Less Dev Time</p>
          </div>
        </div>
      </div>
      <BackgroundBeamsWithCollision className="-z-1 absolute bottom-0 bg-gradient-to-b from-[#d9d9d9]/0 to-[#89e5ff]">
        <span></span>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export { Hero241 };
