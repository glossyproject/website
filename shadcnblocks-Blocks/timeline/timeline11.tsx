"use client";

import { motion } from "framer-motion";
import { Cpu, FlagIcon, LocateFixed, RocketIcon } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Timeline11 = () => {
  const currentPhase = 2;
  const timelinePhases = [
    {
      id: 0,
      date: "January 15, 2024",
      title: "Phase I",
      description: "Project initialization and strategic planning begins.",
      icon: RocketIcon,
    },
    {
      id: 1,
      date: "March 10, 2024",
      title: "Phase II",
      description: "Detailed research and preliminary development stage.",
      icon: Cpu,
    },
    {
      id: 2,
      date: "June 5, 2024",
      title: "Phase III",
      description: "Core implementation and major milestones achieved.",
      icon: LocateFixed,
    },
    {
      id: 3,
      date: "September 20, 2024",
      title: "Phase IV",
      description: "Final refinements and project completion.",
      icon: FlagIcon,
    },
  ];

  return (
    <section className="bg-background py-32">
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-foreground mb-10 text-center text-3xl font-bold tracking-tighter sm:text-6xl">
          Timeline
        </h1>
        <Card className="relative w-full border-none shadow-none md:py-16">
          <CardContent className="relative flex flex-col items-center p-0 md:mt-12">
            <Separator className="absolute -top-8 left-0 hidden md:block" />
            {currentPhase && (
              <motion.div
                initial={{ width: 0 }}
                whileInView={{
                  width: `${(currentPhase / timelinePhases.length) * 104}%`,
                }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                className={cn(
                  "bg-foreground absolute -top-[33px] left-0 hidden h-0.5 md:block",
                )}
              />
            )}
            <div className="grid gap-6 md:grid-cols-4">
              {timelinePhases.map((phase, index) => {
                const PhaseIcon = phase.icon;
                return (
                  <div key={phase.id} className="relative space-y-2">
                    <Separator
                      orientation="vertical"
                      className="absolute left-2.5 top-6 block md:hidden"
                    />
                    {index == 0 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{
                          height: currentPhase * 125,
                        }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                        className={cn(
                          "top-22 bg-foreground absolute left-2.5 z-10 w-0.5 md:hidden",
                        )}
                      />
                    )}
                    <div className="size-18 bg-background md:-top-17 absolute -left-6 top-4 z-10 mb-5 flex items-center justify-center rounded-full p-1 md:-left-4">
                      <div className="border-border bg-background flex size-10 items-center justify-center rounded-lg border p-[5px]">
                        <div className="border-border bg-muted flex size-full items-center justify-center rounded-md border">
                          <PhaseIcon size={16} />
                        </div>
                      </div>
                    </div>

                    <div className="pl-13 md:pl-0">
                      <p className="text-muted-foreground mt-10 text-sm">
                        {phase.date}
                      </p>
                      <h2 className="text-foreground text-xl font-bold tracking-tighter">
                        {phase.title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Timeline11 };
