"use client";

import { motion } from "framer-motion";
import { CornerDownLeft, Milestone } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    title: "Branding",
    options: ["Logo Design", "Brand Identity", "Style Guide", "Color Palette"],
  },
  {
    id: 2,
    title: "Development",
    options: ["Web Apps", "Mobile Apps", "APIs", "Database Design", "DevOps"],
  },
  {
    id: 3,
    title: "Marketing",
    options: ["SEO", "Social Media", "Content Strategy", "Analytics"],
  },
  {
    id: 4,
    title: "Launch",
    options: ["Testing", "Deployment", "Go-Live Support", "Bug Fixes"],
  },
  {
    id: 5,
    title: "Support",
    options: ["24/7 Support", "Maintenance", "Updates", "Training"],
  },
];

const Services20 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col justify-between gap-[10vw] lg:flex-row">
          <h2 className="text-foreground/30 pt-4 uppercase tracking-tight md:block">
            Services we provide
          </h2>
          <div className="w-full max-w-3xl px-2">
            <h1 className="text-3xl font-semibold tracking-tighter md:text-5xl">
              Our comprehensive approach to delivering exceptional results
              through a structured methodology
            </h1>
            <Button variant="ghost" className="mt-6 lg:text-base">
              <CornerDownLeft className="size-5 text-orange-500" /> Get in touch
            </Button>
          </div>
        </div>
        <ul className="mt-20 space-y-2">
          {services.map((service, index) => (
            <motion.li
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.1,
              }}
              key={service.id}
              className="md:h-27 h-54 relative flex w-full flex-col justify-center gap-5 lg:flex-row lg:items-center lg:justify-between"
            >
              <div
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 2px, var(--muted) 2px, var(--muted) 4px)",
                }}
                className={cn(
                  "md:h-27 h-54 absolute left-1/2 w-screen -translate-x-1/2",
                )}
              ></div>

              <h3 className="z-1 relative text-3xl font-medium tracking-tight md:text-8xl">
                {service.title}
              </h3>
              <div className="relative z-10 flex w-full max-w-xs flex-wrap gap-2">
                {service.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center justify-center gap-3"
                  >
                    <Milestone className="text-muted-foreground size-5" />{" "}
                    {option}
                  </div>
                ))}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Services20 };
