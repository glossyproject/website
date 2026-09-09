"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useRef } from "react";

import { useMousePosition } from "@/hooks/use-mouse-position";

import VariableFontAndCursor from "@/components/fancy/components/text/variable-font-and-cursor";

const Hero222 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { x, y } = useMousePosition(containerRef);
  return (
    <section className="py-18">
      <div className="container">
        <div
          ref={containerRef}
          className="relative flex h-[85vh] flex-col items-center justify-center gap-4 overflow-hidden bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw15.jpeg')] bg-[position:center_-24rem] xl:bg-cover"
        >
          <div className="absolute bottom-10 left-10 flex flex-col mix-blend-exclusion">
            <p className="text-secondary text-xs">x : {Math.round(x)}</p>
            <p className="text-secondary text-xs">y : {Math.round(y)}</p>
          </div>
          <div className="relative z-10 h-full w-full mix-blend-exclusion">
            <div className="mt-62 mx-auto w-fit">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-mono text-lg text-white md:ml-3"
              >
                CHAPTER 01{" "}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VariableFontAndCursor
                  label="BEYOND SPEED"
                  className="text-5xl tracking-[-5px] text-white sm:text-7xl md:text-9xl md:tracking-[-13px]"
                  fontVariationMapping={{
                    y: { name: "wght", min: 100, max: 900 },
                    x: { name: "slnt", min: 0, max: -10 },
                  }}
                  containerRef={containerRef as React.RefObject<HTMLDivElement>}
                />
              </motion.div>
              <div
                className="bg-background absolute top-0 h-screen w-px -translate-x-1/2"
                style={{
                  left: `${x - 2}px`,
                }}
              />
              <div
                className="bg-background absolute left-0 h-px w-screen -translate-y-1/2"
                style={{
                  top: `${y - 2}px`,
                }}
              />
              <div
                className="rounded-xs bg-background absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  top: `${y - 2}px`,
                  left: `${x - 2}px`,
                }}
              />
            </div>
          </div>
          <button className="z-99 bg-background group mb-10 flex items-center gap-2 px-4 py-2 text-black transition-all duration-300 hover:gap-4">
            Get Started
            <ArrowRight
              className="-rotate-45 transition-all duration-300 group-hover:rotate-0"
              size={16}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero222 };
