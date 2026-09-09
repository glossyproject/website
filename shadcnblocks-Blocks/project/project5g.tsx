"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const Project5g = () => {
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
          className="pb-16 md:pb-24"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-5">
            <motion.div variants={fadeInUp} className="lg:col-span-3">
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="text-muted-foreground text-sm font-medium uppercase tracking-widest">
                    NEXUS STUDIOS / 2024
                  </span>
                  <h1 className="text-foreground text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                    Organic
                    <span className="text-muted-foreground">
                      <br />
                      Resonance
                    </span>
                  </h1>
                </div>
                <p className="text-muted-foreground max-w-2xl text-xl leading-relaxed">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="bg-muted/30 relative aspect-[3/4] overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Modern Terrarium Display"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-16"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          >
            <div className="lg:col-span-2">
              <div className="bg-muted/30 relative aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                  alt="Organic Resonance - Main sculpture view"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h2 className="text-foreground text-2xl font-bold">
                  Exhibition
                </h2>
                <div className="space-y-4">
                  <div className="border-border border-l-2 pl-4">
                    <p className="text-muted-foreground text-sm font-medium">
                      MUSEUM
                    </p>
                    <p className="text-foreground text-lg font-semibold">
                      MOMA NYC
                    </p>
                  </div>
                  <div className="border-border border-l-2 pl-4">
                    <p className="text-muted-foreground text-sm font-medium">
                      MEDIUM
                    </p>
                    <p className="text-foreground text-lg font-semibold">
                      SCULPTURE
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/30 relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Modern Terrarium Design"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-16 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <h2 className="text-foreground text-3xl font-bold">
                Artistic Vision
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                This sculptural piece emerges from our deep exploration of
                nature's inherent abstract qualities. Through careful
                observation and artistic interpretation, we've captured the
                essence of organic growth patterns, bark textures, and the
                interplay between light and shadow that defines natural forms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The work invites viewers to reconsider their relationship with
                the natural world through a contemporary lens, creating a
                dialogue between the viewer and the raw beauty of environmental
                textures and forms.
              </p>
            </div>

            <div className="flex items-end justify-end">
              <div className="space-y-4">
                <div className="text-right">
                  <p className="text-muted-foreground text-sm">
                    Available for viewing
                  </p>
                  <p className="text-foreground text-lg font-semibold">
                    Daily 10AM - 6PM
                  </p>
                </div>
                <Button
                  variant="default"
                  className="bg-foreground text-background hover:bg-foreground/90 px-8 py-4 font-medium"
                >
                  PLAN YOUR VISIT
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5g };
