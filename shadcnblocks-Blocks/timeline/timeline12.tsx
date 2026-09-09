"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Timeline12 = () => {
  const PHASES__DATA = [
    {
      id: "phase1",
      phase: "1",
      title: "Initialize",
      date: "02/03/2025",
      heading: "How to Initialize",
      description:
        "This phase covers the basics of getting started. Learn how to set up, configure, and prepare for the next steps.This phase covers the basics of getting started. Learn how to set up, configure, and prepare for the next steps.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Phase 1 illustration",
    },
    {
      id: "phase2",
      phase: "2",
      title: "Build",
      date: "21/03/2025",
      heading: "How to Build",
      description:
        "In this phase, focus on structuring and building the core components. Understand best practices for development.In this phase, focus on structuring and building the core components. Understand best practices for development.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Phase 2 illustration",
    },
    {
      id: "phase3",
      phase: "3",
      title: "Test",
      date: "06/04/2025",
      heading: "How to Test",
      description:
        "Testing ensures quality and reliability. Learn about debugging, fixing issues, and refining the project.Testing ensures quality and reliability. Learn about debugging, fixing issues, and refining the project.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "Phase 3 illustration",
    },
    {
      id: "phase4",
      phase: "4",
      title: "Launch",
      date: "14/04/2025",
      heading: "How to Launch",
      description:
        "The final phase focuses on optimization, deployment, and ensuring everything runs smoothly for release.The final phase focuses on optimization, deployment, and ensuring everything runs smoothly for release.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Phase 4 illustration",
    },
  ];

  return (
    <section className="bg-background">
      <div className="container flex flex-col items-center justify-center py-32">
        <h1 className="lg:mb-25 mb-12 text-5xl font-semibold tracking-tighter lg:text-7xl">
          Just Four Phases
        </h1>
        <Tabs defaultValue="phase1" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-transparent p-0">
            {PHASES__DATA.map((phase) => (
              <TabsTrigger
                key={phase.id}
                className="text-md shadow-none! data-[state=active]:border-b-foreground rounded-none border-b-2 pb-6"
                value={phase.id}
              >
                <span className="text-foreground/40 hidden font-mono md:inline">
                  {phase.phase}
                </span>
                {phase.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {PHASES__DATA.map((phase) => (
            <TabsContent
              key={phase.id}
              value={phase.id}
              className="mt-12 grid items-start gap-12 lg:grid-cols-2"
            >
              <div className="col-span-1 flex flex-col gap-2 lg:max-w-lg lg:gap-4">
                <p className="text-muted-foreground font-mono text-sm font-semibold tracking-tight">
                  {phase.date}
                </p>
                <h2 className="text-foreground text-3xl font-medium tracking-tighter md:text-5xl">
                  {phase.heading}
                </h2>
                <p className="text-muted-foreground text-lg font-normal tracking-tighter">
                  {phase.description}
                </p>
                <Button
                  variant="outline"
                  className="border-border px-4! mt-8 flex w-fit items-center gap-2 rounded-full border py-2"
                >
                  <DownloadIcon className="size-4" />
                  <p className="text-md text-foreground font-medium">
                    Click to{" "}
                    <span className="text-foreground/80">Download the app</span>
                  </p>
                </Button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 100, y: 0 }}
                transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
                className="relative z-20 col-span-1"
              >
                <Card className="h-110 border-border bg-background group w-full rounded-3xl border p-2 shadow-none">
                  <CardContent className="border-background bg-muted size-full rounded-2xl border-2">
                    <img
                      src={phase.imageSrc}
                      className="size-full transition-all ease-in-out group-hover:scale-95"
                      alt={phase.imageAlt}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export { Timeline12 };
