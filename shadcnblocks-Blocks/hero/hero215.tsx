import { ArrowRight } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero215 = () => {
  return (
    <section className="py-32">
      <div className="container relative min-h-[100vh]">
        <div className="bottom-45 absolute z-10 lg:max-w-xl">
          <div className="z-1 bg-background absolute top-0 size-full blur-2xl" />
          <h1 className="font-playfair relative z-20 text-left text-5xl tracking-tighter lg:text-6xl">
            Find Your Perfect Home in Your City
          </h1>
          <p className="text-muted-foreground relative z-20 mt-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adipiscing elit,
          </p>
        </div>
        <div className="lg:right-25 lg:bottom-45 absolute bottom-20 z-10 max-w-xl">
          <Button className="group mt-10 flex w-fit items-center justify-center gap-2 rounded-full border px-4 py-1 tracking-tight">
            Contact Us now
            <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:rotate-0" />
          </Button>
        </div>
        <div className="absolute -top-20 right-0 w-[27rem] max-w-xl">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/highRise.jpg"
            className="animate-fade-in rounded-2xl object-cover"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export { Hero215 };
