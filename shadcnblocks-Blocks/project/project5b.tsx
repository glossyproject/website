"use client";

import { motion } from "framer-motion";

const Project5b = () => {
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
          className="pb-16 md:pb-20"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-foreground h-px w-12"></div>
                <span className="text-muted-foreground text-sm font-medium tracking-wider">
                  NEXUS STUDIOS
                </span>
              </div>
              <h1 className="text-foreground text-6xl font-bold tracking-tight md:text-7xl lg:text-8xl">
                Organic
                <br />
                Resonance
              </h1>
            </motion.div>
            <div className="flex justify-start pt-16">
              <div className="space-y-4">
                <h3 className="text-foreground text-lg font-semibold">
                  Exhibition Details
                </h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm">
                    MOMA NYC • 2024
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Contemporary Sculpture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8 md:space-y-20"
        >
          <motion.div variants={fadeInUp} className="relative">
            <div className="bg-muted/30 relative aspect-[21/9] overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                alt="Organic Resonance - Main sculpture view"
                className="h-full w-full object-cover"
              />
              <div className="bg-background/5 absolute inset-0" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16"
          >
            <div className="space-y-6">
              <div className="bg-muted/30 relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                  alt="Detail view of the sculpture"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-muted/30 relative aspect-square overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                  alt="Detail view of the sculpture"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-foreground h-px w-16"></div>
                  <span className="text-muted-foreground text-sm font-medium tracking-wider">
                    CONCEPT
                  </span>
                </div>
                <h2 className="text-foreground text-4xl font-bold tracking-tight lg:text-5xl">
                  Artistic Vision
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  This sculptural piece emerges from our deep exploration of
                  nature's inherent abstract qualities. Through careful
                  observation and artistic interpretation, we've captured the
                  essence of organic growth patterns.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The work invites viewers to reconsider their relationship with
                  the natural world through a contemporary lens, exploring bark
                  textures and the interplay between light and shadow.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-foreground text-xl font-semibold">
                    Materials & Process
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="bg-foreground mt-2 h-1 w-1 rounded-full"></div>
                      <p className="text-muted-foreground text-sm">
                        Reclaimed wood and organic resins
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-foreground mt-2 h-1 w-1 rounded-full"></div>
                      <p className="text-muted-foreground text-sm">
                        Hand-carved details with natural patina
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-foreground mt-2 h-1 w-1 rounded-full"></div>
                      <p className="text-muted-foreground text-sm">
                        Sustainable terrarium ecosystem
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-foreground text-xl font-semibold">
                    Dimensions
                  </h3>
                  <div className="overflow-hidden">
                    <table className="border-muted-foreground/20 w-full border-b border-t">
                      <tbody>
                        <tr className="border-muted-foreground/10 border-b">
                          <td className="bg-muted/5 text-muted-foreground px-4 py-3 text-sm font-medium">
                            Height
                          </td>
                          <td className="text-foreground px-4 py-3 text-sm">
                            180 cm
                          </td>
                        </tr>
                        <tr className="border-muted-foreground/10 border-b">
                          <td className="bg-muted/5 text-muted-foreground px-4 py-3 text-sm font-medium">
                            Width
                          </td>
                          <td className="text-foreground px-4 py-3 text-sm">
                            95 cm
                          </td>
                        </tr>
                        <tr>
                          <td className="bg-muted/5 text-muted-foreground px-4 py-3 text-sm font-medium">
                            Depth
                          </td>
                          <td className="text-foreground px-4 py-3 text-sm">
                            45 cm
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export { Project5b };
