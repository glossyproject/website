"use client";

import { motion } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";

const Hero200 = () => {
  return (
    <section className="bg-background py-32">
      <div className="border-foreground/40 border-b">
        <div className="container flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-foreground/80 font-semibold tracking-tighter md:text-2xl">
            Shadcnblocks.com
          </h2>
          <h1 className="font-playfair text-foreground text-4xl tracking-tighter md:text-7xl">
            Blocks Built With
            <br />
            Shadcn And Tailwind CSS
            <br />
            Just Copy Paste Them.
          </h1>
          <Button className="text-background my-10 rounded-2xl px-6 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40] md:rounded-3xl md:px-12 md:py-8 md:text-lg">
            <p className="text-background mr-1 text-xl md:mr-3 md:text-2xl">
              
            </p>{" "}
            Sign up for free
          </Button>

          {/* Iphone mockup with content */}
          <div className="h-[500px] w-full overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 200, scale: 0.8 }}
              animate={{ opacity: 100, y: 0, scale: 1 }}
              transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
              className="relative mx-auto mt-6 flex h-[850px] w-[400px] items-center justify-center rounded-[75px] bg-black md:mt-12 md:h-[920px] md:w-[450px]"
            >
              <img
                className="z-2 absolute scale-105 object-cover"
                alt="Gold phone frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
              />
              <div className="h-full w-full">
                <div className="mt-20 flex justify-between px-0">
                  <h1 className="text-background flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight md:text-6xl">
                    Mon
                    <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5" />
                  </h1>
                  <div className="mr-8 mt-2 flex flex-col items-end">
                    <p className="text-muted-foreground text-lg tracking-tight md:text-xl">
                      Feburary 9
                    </p>
                    <p className="text-muted-foreground/50 -mt-1 text-xl font-semibold tracking-tighter md:text-2xl">
                      2025
                    </p>
                  </div>
                </div>
                <img
                  className="z-2 mx-auto mt-20 size-40 object-cover"
                  alt="Gold phone frame"
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero200 };
