"use client";

import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero201 = () => {
  return (
    <section className="py-32">
      <div className="container relative overflow-hidden md:py-32">
        <div className="mb-4 flex items-center justify-center gap-4">
          <img
            className="size-6 dark:invert"
            alt="Copy paste icon"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
          />
          <h2 className="text-foreground text-center text-lg font-semibold tracking-tight">
            Just Copy Paste
          </h2>
        </div>

        <h1 className="font-inter text-foreground mx-auto max-w-4xl text-center text-[70px] font-semibold leading-[65px] tracking-tighter md:text-[105px] md:leading-[96px]">
          Amazing components
        </h1>

        <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-center text-xl">
          Discover our collection of beautifully designed, ready-to-use
          components that you can easily integrate into your projects.
        </p>

        <div className="relative mt-8 flex flex-col items-center justify-center">
          <Button className="w-75 rounded-2xl px-2 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40]">
            Sign up for free
          </Button>
          <a
            href="#"
            className="z-12 w-75 text-muted-foreground group relative flex items-center justify-center rounded-2xl py-6 hover:bg-none"
          >
            Book a demo
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-all ease-in-out group-hover:ml-4" />
          </a>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="w-240 absolute -right-80 -top-80 -z-10 hidden h-full items-center justify-center md:flex"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-[spin_15s_linear_infinite] dark:invert"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 250, scale: 0.6 }}
          animate={{ opacity: 100, y: 0, scale: 1 }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
          className="md:w-240 -bottom-80 -left-80 -z-10 -mb-24 mt-32 flex h-full w-full items-center justify-center md:absolute"
        >
          <img
            className="infinite absolute w-full rotate-12 animate-[spin_15s_linear_infinite] dark:invert"
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
            alt=""
          />
        </motion.div>
      </div>
    </section>
  );
};

export { Hero201 };
