"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Group } from "lucide-react";
import { ReactNode } from "react";

import { ShineBorder } from "@/components/magicui/shine-border";
import { Button } from "@/components/ui/button";

const Feature236 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center gap-10 md:gap-0">
        <Button
          variant="outline"
          className="px-5! text-muted-foreground flex items-center justify-center gap-5 rounded-full py-5 text-sm font-medium"
        >
          <Group />
          Your website builder
          <ArrowUpRight />
        </Button>
        <BracketedBorder>
          <div className="mb-7 flex items-center justify-center gap-5 tracking-tight">
            <div className="relative flex items-center justify-center">
              <span className="absolute inline-block size-2 rounded-full bg-green-300"></span>
              <span className="absolute inline-block size-3 animate-ping rounded-full bg-green-300"></span>
            </div>
            <p>Ready to copy/paste blocks</p>
          </div>
          <h1 className="text-foreground md:leading-22 max-w-xl px-4 text-center text-6xl font-semibold tracking-tighter md:text-[90px]">
            Blocks Built With Shadcn & Tailwind.
          </h1>
        </BracketedBorder>
        <h2 className="text-foreground text-3xl font-medium tracking-tighter">
          Welcome to Shadcn Blocks{" "}
        </h2>
        <p className="text-muted-foreground max-w-2xl px-10 text-center sm:mt-5 lg:text-xl">
          Finely crafted components built with React, Tailwind and Shadcn UI.
          Developers can copy and paste these blocks directly into their
          project.
        </p>
        <div className="flex flex-col gap-4 sm:mt-8 md:flex-row">
          <Button className="h-11 w-full rounded-xl sm:w-auto">
            Discover all components
          </Button>
          <Button
            variant="outline"
            className="h-11 w-full rounded-xl sm:w-auto"
          >
            View on GitHub
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const BracketedBorder = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ width: 0, opacity: 0 }}
    className="relative flex flex-col items-center justify-center sm:my-10 md:h-[500px] md:overflow-hidden"
    whileInView={{ width: "65vw", opacity: 1 }}
    viewport={{ once: true }}
    transition={{
      width: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        mass: 1,
      },
      opacity: { duration: 0.5 },
    }}
  >
    <div className="border-foreground/10 absolute inset-0 hidden border md:block">
      <ShineBorder
        duration={10}
        borderWidth={2}
        shineColor={["oklch(87.1% 0.15 154.449)"]}
      />
      <Vector className="absolute left-1 top-1 rotate-90" />
      <Vector className="absolute right-1 top-1 -rotate-180" />
      <Vector className="absolute bottom-1 left-1" />
      <Vector className="absolute bottom-1 right-1 -rotate-90" />
    </div>
    <div className="flex h-full w-screen flex-col items-center justify-center">
      {children}
    </div>
  </motion.div>
);

export { Feature236 };

const Vector = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="12"
    height="12"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.7718 20.3821L0.771792 0.265381C3.72131 0.262685 6.1138 2.65299 6.1138 5.6025V15.1587H15.5512C18.436 15.1587 20.7746 17.4973 20.7746 20.3821H0.7718Z"
      fill="black"
    />
  </svg>
);
