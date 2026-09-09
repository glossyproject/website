"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const Project5f = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.header
          className="pb-12 md:pb-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-muted/20 rounded-xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="bg-muted/50 inline-flex items-center gap-3 rounded-full px-4 py-2">
                  <div className="bg-foreground h-1.5 w-1.5 rounded-full"></div>
                  <span className="text-muted-foreground text-sm font-medium">
                    NEXUS STUDIOS
                  </span>
                </div>
                <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl">
                  Organic Resonance
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
              <div className="bg-background/50 rounded-lg p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium uppercase">
                      Museum
                    </p>
                    <p className="text-foreground mt-2 text-lg font-semibold">
                      MOMA NYC
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium uppercase">
                      Year
                    </p>
                    <p className="text-foreground mt-2 text-lg font-semibold">
                      2024
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium uppercase">
                      Medium
                    </p>
                    <p className="text-foreground mt-2 text-lg font-semibold">
                      Sculpture
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium uppercase">
                      Status
                    </p>
                    <p className="text-foreground mt-2 text-lg font-semibold">
                      Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[21/9] overflow-hidden rounded-xl"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
              alt="Organic Resonance - Main sculpture view"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[16/9] overflow-hidden rounded-xl"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[16/9] overflow-hidden rounded-xl"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-muted/20 rounded-xl p-8 md:p-12"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h3 className="text-foreground text-xl font-bold">
                  Visit the Exhibition
                </h3>
                <p className="text-muted-foreground">
                  Experience Organic Resonance at MOMA NYC
                </p>
              </div>
              <Button
                variant="default"
                className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 font-medium"
              >
                BOOK TICKETS
              </Button>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5f };
