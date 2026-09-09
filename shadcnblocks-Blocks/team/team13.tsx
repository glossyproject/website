"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO & Founder",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img14.png",
    className: "h-105",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Design Director",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img4.png",
    className: "h-80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img5.png",
    className: "h-120",
  },
  {
    id: 4,
    name: "Mike Johnson",
    designation: "Lead Developer",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img12.png",
    className: "h-82",
  },
];

const Team13 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative w-full">
          <div className="flex justify-between text-sm font-medium tracking-tight lg:text-xl">
            <p>[ MEET THE AWESOME TEAM ]</p>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground group flex cursor-pointer items-center gap-2"
            >
              [ BE A PART
              <ArrowRight className="size-[1em] transition-transform duration-300 group-hover:rotate-45" />
              ]
            </a>
          </div>

          {/* Mobile Carousel */}
          <div className="mt-12 lg:hidden">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {teamMembers.map((member) => (
                  <CarouselItem className="basis-1/2" key={member.id}>
                    <div className="w-full">
                      <motion.div
                        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
                        transition={{
                          type: "spring",
                          stiffness: 150,
                          damping: 20,
                        }}
                        className={cn(member.className, "overflow-hidden")}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="pointer-events-none h-full w-full object-cover object-top"
                        />
                      </motion.div>
                    </div>
                    <div className="pb-1 pt-4">
                      <p className="text-foreground text-lg font-medium tracking-tight">
                        {member.name}
                      </p>
                      <p className="text-foreground/50 text-sm">
                        {member.designation}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Desktop Grid Layout */}
          <div className="mt-12 hidden justify-between gap-4 lg:flex">
            {teamMembers.map((member, idx) => (
              <div key={member.id} className={cn("w-1/2")}>
                <motion.div
                  initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
                  animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    delay: idx * 0.05,
                  }}
                  className={cn(member.className, "overflow-hidden")}
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="pointer-events-none h-full w-full object-cover object-top"
                  />
                </motion.div>
                <div className="pb-1 pt-4">
                  <p className="text-foreground font-medium tracking-tight lg:text-2xl lg:text-lg">
                    {member.name}
                  </p>
                  <p className="text-foreground/50 text-sm">
                    {member.designation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Team13 };
