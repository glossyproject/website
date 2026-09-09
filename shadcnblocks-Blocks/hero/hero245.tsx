"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { useIsMobile } from "@/hooks/use-mobile";

import { PointerHighlight } from "@/components/aceternity/pointer-highlight";
import { Button } from "@/components/ui/button";

const Hero245 = () => {
  const isMobile = useIsMobile();

  return (
    <section className="relative grid w-screen overflow-hidden py-32">
      <div className="container relative z-10 h-full grid-cols-1 items-center justify-center gap-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-muted-foreground/5 text-muted-foreground mb-10 flex items-center justify-center gap-3 rounded-full p-1 pr-4 text-sm font-medium tracking-tight">
            <div className="bg-muted-foreground/10 flex items-center gap-3 rounded-full px-4 py-1.5">
              <span className="inline-block size-2 rounded-full bg-blue-500" />
              <span>We're Hiring</span>
            </div>
            <div className="flex items-center gap-2">
              Join Our Team <ArrowRight className="size-4" />
            </div>
          </div>
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tighter lg:text-6xl">
            Elevate Your Next Project With,
            <PointerHighlight containerClassName="inline-block">
              <span>Production-Ready</span>
            </PointerHighlight>
            Shadcnblocks
          </h1>
          <p className="text-muted-foreground mt-10 max-w-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            atque perferendis fugit molestiae quae ad molestias eveniet alias
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-2">
            <Button className="text-background rounded-2xl px-6 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40] md:rounded-3xl md:px-7 md:py-7 md:text-base">
              <p className="text-background mr-1 text-xl md:mr-3 md:text-2xl">
                
              </p>{" "}
              Download for Mac
            </Button>
            <Button className="text-muted-foreground text-sm" variant="link">
              Download for Windows
            </Button>
          </div>
        </div>
        <div className="rounded-4xl relative mt-10 flex h-[80vh] w-full items-center justify-center overflow-hidden border">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img7.jpeg"
            alt="hero"
            className="size-full object-cover"
          />
        </div>
      </div>
      <div className="absolute inset-0 flex h-full w-full items-center justify-between">
        {Array.from({ length: isMobile ? 8 : 18 }).map((_, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            key={index}
            className="to-muted/50 h-full w-10 bg-gradient-to-l from-transparent"
          ></motion.div>
        ))}
      </div>
    </section>
  );
};

export { Hero245 };
