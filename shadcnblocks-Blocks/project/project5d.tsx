"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const Project5d = () => {
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
      <div className="container max-w-4xl">
        <motion.header
          className="pb-16 md:pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-foreground h-0.5 w-8"></div>
              <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
                NEXUS STUDIOS
              </span>
            </div>
            <h1 className="text-foreground text-4xl font-normal tracking-tight md:text-5xl">
              Organic Resonance
            </h1>
            <p className="text-muted-foreground max-w-2xl text-base leading-relaxed">
              A contemporary exploration of nature's abstract forms through
              sculptural artistry. This piece challenges the boundaries between
              natural organic structures and human interpretation.
            </p>
          </motion.div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[4/3] overflow-hidden"
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
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium uppercase">
                Museum
              </p>
              <p className="text-foreground text-sm">MOMA NYC</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium uppercase">
                Year
              </p>
              <p className="text-foreground text-sm">2024</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium uppercase">
                Medium
              </p>
              <p className="text-foreground text-sm">Sculpture</p>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-xs font-medium uppercase">
                Status
              </p>
              <p className="text-foreground text-sm">On Display</p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[3/2] overflow-hidden"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
              alt="Modern Terrarium Display"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-foreground text-xl font-medium">
              Artistic Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This sculptural piece emerges from our deep exploration of
              nature's inherent abstract qualities. Through careful observation
              and artistic interpretation, we've captured the essence of organic
              growth patterns, bark textures, and the interplay between light
              and shadow that defines natural forms.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-[16/9] overflow-hidden"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
              alt="Modern Terrarium Design"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>

          <motion.div variants={fadeInUp} className="pt-8">
            <Button
              variant="default"
              className="bg-foreground text-background hover:bg-foreground/90 w-full py-6 font-medium"
            >
              VIEW FULL EXHIBITION
            </Button>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5d };
