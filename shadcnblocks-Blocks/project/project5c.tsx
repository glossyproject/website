"use client";

import { motion } from "framer-motion";

const Project5c = () => {
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
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <h1 className="text-foreground text-5xl font-bold tracking-tight md:text-6xl">
                Organic Resonance
              </h1>
              <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed">
                A contemporary exploration of nature's abstract forms through
                sculptural artistry. This piece challenges the boundaries
                between natural organic structures and human interpretation,
                creating a dialogue between the viewer and the raw beauty of
                environmental textures and forms.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="bg-muted/50 grid grid-cols-2 gap-4 p-6">
                <div className="space-y-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    ARTIST
                  </p>
                  <p className="text-foreground text-sm font-semibold">
                    NEXUS STUDIOS
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    YEAR
                  </p>
                  <p className="text-foreground text-sm font-semibold">2024</p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    VENUE
                  </p>
                  <p className="text-foreground text-sm font-semibold">
                    MOMA NYC
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-muted-foreground text-xs font-medium">
                    MEDIUM
                  </p>
                  <p className="text-foreground text-sm font-semibold">
                    SCULPTURE
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-12"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-6 md:grid-cols-4"
          >
            <div className="md:col-span-3">
              <div className="bg-muted/30 relative aspect-[16/9] overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
                  alt="Organic Resonance - Main sculpture view"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/30 relative h-full overflow-hidden rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Futuristic Tree Artwork.jpg"
                  alt="Minimalist art blocks"
                  className="h-full w-full object-cover"
                />
                <div className="bg-background/5 absolute inset-0" />
              </div>
            </div>
          </motion.div>
        </motion.main>

        <motion.section
          className="py-12 md:py-16"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-y-8 md:flex-row md:items-start md:justify-between">
            <motion.div variants={fadeInUp}>
              <h2 className="text-foreground text-lg font-semibold tracking-wide">
                ARTISTIC VISION
              </h2>
            </motion.div>
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <p className="text-muted-foreground text-lg font-medium leading-relaxed">
                This sculptural piece emerges from our deep exploration of
                nature's inherent abstract qualities. Through careful
                observation and artistic interpretation, we've captured the
                essence of organic growth patterns, bark textures, and the
                interplay between light and shadow that defines natural forms.
                The work invites viewers to reconsider their relationship with
                the natural world through a contemporary lens.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export { Project5c };
