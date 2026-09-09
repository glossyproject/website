"use client";

import { motion } from "framer-motion";
import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero204 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-foreground flex text-xl tracking-tighter">
          <Sparkle className="mr-3" /> Shadcn Blocks
        </h2>
        <h1 className="font-playfair text-foreground max-w-xl text-4xl tracking-tighter md:text-7xl">
          The Shadcn Blocks Just Copy Paste.
        </h1>
        <p className="text-muted-foreground mt-7 max-w-xl text-xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipiasicing elit.Lorem ipsum
          dolor sit amet consectetur seams
        </p>

        <div className="mt-10 flex w-full max-w-xl items-center justify-center rounded-full border p-1">
          <Input
            placeholder="Enter Your Email"
            className="text-xl! w-full border-none pl-5 tracking-tight shadow-none outline-none focus-visible:outline-none focus-visible:ring-0"
          />
          <Button className="text-background rounded-full px-10 py-7 text-lg transition-all ease-in-out hover:px-12">
            Sign Up
          </Button>
        </div>

        {/* Iphone mockup with content */}
        <div className="border-border relative mt-12 flex h-[450px] w-screen justify-center overflow-hidden border-b-2">
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.8 }}
            animate={{ opacity: 100, y: 0, scale: 1 }}
            transition={{ ease: [0, 0.51, 0.2, 1.01], duration: 0.8 }}
            className="mr-58 -rotate-18 absolute mx-auto mt-6 hidden h-[850px] w-[400px] items-center justify-center rounded-[75px] bg-black md:mt-12 md:flex md:h-[840px] md:w-[400px]"
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
                  <p className="text-muted-foreground text-lg tracking-tighter md:text-xl">
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
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.8 }}
            animate={{ opacity: 100, y: 0, scale: 1 }}
            transition={{
              ease: [0, 0.71, 0.2, 1.01],
              duration: 0.8,
            }}
            className="bg-background md:ml-58 md:rotate-20 absolute mx-auto mt-6 flex h-[850px] w-[400px] items-center justify-center rounded-[75px] md:mt-24 md:h-[840px] md:w-[400px]"
          >
            <img
              className="z-2 absolute scale-105 object-cover"
              alt="Gold phone frame"
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-5.png"
            />
            <div className="h-full w-full">
              <div className="mt-20 flex justify-between px-0">
                <h1 className="text-foreground flex items-end gap-2 px-12 text-5xl font-semibold tracking-tight md:text-6xl">
                  Tue
                  <div className="mb-2 size-3 rounded-full bg-red-500 md:size-5" />
                </h1>
                <div className="mr-8 mt-2 flex flex-col items-end">
                  <p className="text-muted-foreground text-lg tracking-tighter md:text-xl">
                    Feburary 14
                  </p>
                  <p className="text-muted-foreground/50 -mt-1 text-xl font-semibold tracking-tighter md:text-2xl">
                    2025
                  </p>
                </div>
              </div>
              <img
                className="z-2 mx-auto mt-20 size-40 object-cover"
                alt="Gold phone frame"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export { Hero204 };

const Sparkle = (params: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...params}
    width="35"
    height="24"
    viewBox="0 0 35 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.0411 1.18695C22.2971 0.487161 23.287 0.487161 23.5431 1.18695L24.3079 3.27567C24.9078 4.91423 25.8577 6.40229 27.0915 7.63612C28.3254 8.86996 29.8134 9.8199 31.452 10.4197L33.5407 11.1846C34.2416 11.4406 34.2416 12.4306 33.5407 12.6866L31.452 13.4515C29.8134 14.0513 28.3254 15.0013 27.0915 16.2351C25.8577 17.4689 24.9078 18.957 24.3079 20.5955L23.5431 22.6843C23.287 23.3851 22.2971 23.3851 22.0411 22.6843L21.2762 20.5955C20.6763 18.957 19.7264 17.4689 18.4926 16.2351C17.2587 15.0013 15.7707 14.0513 14.1321 13.4515L12.0434 12.6866C11.3436 12.4306 11.3436 11.4406 12.0434 11.1846L14.1321 10.4197C15.7707 9.8199 17.2587 8.86996 18.4926 7.63612C19.7264 6.40229 20.6763 4.91423 21.2762 3.27567L22.0411 1.18695Z"
      fill="#343433"
    />
    <path
      d="M5.50615 0.924521C5.63416 0.574639 6.12911 0.574639 6.25712 0.924521L6.63954 1.96883C6.93944 2.78808 7.4144 3.53208 8.03129 4.14897C8.64818 4.76587 9.39218 5.24082 10.2114 5.54073L11.2557 5.92314C11.6062 6.05115 11.6062 6.54611 11.2557 6.67411L10.2114 7.05653C9.39218 7.35644 8.64818 7.83139 8.03129 8.44828C7.4144 9.06518 6.93944 9.80917 6.63954 10.6284L6.25712 11.6727C6.12911 12.0232 5.63416 12.0232 5.50615 11.6727L5.12374 10.6284C4.82383 9.80917 4.34888 9.06518 3.73198 8.44828C3.11509 7.83139 2.37109 7.35644 1.55184 7.05653L0.507529 6.67411C0.157647 6.54611 0.157647 6.05115 0.507529 5.92314L1.55184 5.54073C2.37109 5.24082 3.11509 4.76587 3.73198 4.14897C4.34888 3.53208 4.82383 2.78808 5.12374 1.96883L5.50615 0.924521Z"
      fill="#343433"
    />
  </svg>
);
