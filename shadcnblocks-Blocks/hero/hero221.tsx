"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { VideoText } from "@/components/magicui/video-text";
import { Button } from "@/components/ui/button";

const Hero221 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative mt-32 flex h-[250px] w-full items-center"
          >
            <VideoText
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ocean1080.mov"
              className="font-playfair text-[15rem] font-bold tracking-tighter"
              fontFamily="Cal Sans"
            >
              Blocks
            </VideoText>
          </motion.div>
          <p className="text-muted-foreground -mt-10 max-w-xl text-center text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente
            quisquam debitis error vero possimus amet
          </p>
        </div>
        <Button
          variant="secondary"
          className="text-md group mx-auto mt-24 flex w-fit items-center justify-center gap-2 rounded-full px-4 py-1 tracking-tight"
        >
          <span>Get Started</span>
          <ArrowRight className="size-4 -rotate-45 transition-all ease-out group-hover:ml-3 group-hover:rotate-0" />
        </Button>
      </div>
    </section>
  );
};

export { Hero221 };
