"use client";

import { motion } from "framer-motion";

const Project5a = () => {
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
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-primary h-0.5 w-8"></div>
                  <span className="text-muted-foreground text-sm font-medium tracking-wider">
                    NEXUS STUDIOS PRESENTS
                  </span>
                </div>
                <h1 className="text-foreground text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                  Organic Resonance
                </h1>
                <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
                  A contemporary exploration of nature's abstract forms through
                  sculptural artistry. This piece challenges the boundaries
                  between natural organic structures and human interpretation.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex h-full flex-col justify-end"
            >
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Museum</span>
                  <span className="text-foreground text-sm font-medium">
                    MOMA NYC
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Year</span>
                  <span className="text-foreground text-sm font-medium">
                    2024
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Medium</span>
                  <span className="text-foreground text-sm font-medium">
                    Sculpture
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12 md:space-y-16"
        >
          <motion.div variants={fadeInUp}>
            <div className="bg-muted/30 relative aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                alt="Organic Resonance - Modern abstract nature sculpture"
                className="h-full w-full object-cover"
              />
              <div className="bg-background/5 absolute inset-0" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-12 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary h-0.5 w-6"></div>
                  <span className="text-muted-foreground text-sm font-medium tracking-wider">
                    ARTISTIC VISION
                  </span>
                </div>
                <h2 className="text-foreground text-3xl font-bold tracking-tight lg:text-4xl">
                  Creative Process
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  This sculptural piece emerges from our deep exploration of
                  nature's inherent abstract qualities. Through careful
                  observation and artistic interpretation, we've captured the
                  essence of organic growth patterns, bark textures, and the
                  interplay between light and shadow.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The work invites viewers to reconsider their relationship with
                  the natural world through a contemporary lens, creating a
                  dialogue between the viewer and the raw beauty of
                  environmental textures and forms.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Modern Terrarium Display - Contemporary presentation"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
              <div className="bg-muted/30 relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Modern Terrarium Display - Contemporary presentation"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5a };
