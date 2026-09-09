"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const Project5 = () => {
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
      <div className="container space-y-8">
        <motion.header
          className="pb-8 md:pb-12"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="flex flex-col gap-y-12 lg:flex-row lg:items-start lg:justify-between">
            <motion.div variants={fadeInUp} className="flex-1">
              <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Organic Resonance
              </h1>
              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mt-6 max-w-xl text-lg font-medium leading-relaxed"
              >
                A contemporary exploration of nature's abstract forms through
                sculptural artistry. This piece challenges the boundaries
                between natural organic structures and human interpretation,
                creating a dialogue between the viewer and the raw beauty of
                environmental textures and forms.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-full max-w-md space-y-4"
            >
              <div className="border-border flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground font-medium">
                  STUDIO
                </span>
                <span className="text-foreground font-medium">
                  NEXUS STUDIOS
                </span>
              </div>
              <div className="border-border flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground font-medium">
                  MUSEUM
                </span>
                <span className="text-foreground font-medium">MOMA NYC</span>
              </div>
              <div className="border-border flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground font-medium">YEAR</span>
                <span className="text-foreground font-medium">2024</span>
              </div>
              <div className="border-border flex items-center justify-between border-b pb-3">
                <span className="text-muted-foreground font-medium">
                  CATEGORY
                </span>
                <span className="text-foreground font-medium">SCULPTURE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground font-medium">
                  EXHIBITION
                </span>
                <Button
                  variant="link"
                  className="text-foreground hover:text-primary h-auto p-0 font-medium"
                >
                  VIEW DETAILS
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.header>

        <motion.main
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <motion.div
            variants={fadeInUp}
            className="bg-muted/30 relative aspect-video overflow-hidden rounded-lg"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Tree Trunk Art Piece.jpg"
              alt="Organic Resonance - Modern abstract nature sculpture featuring organic tree trunk forms"
              className="h-full w-full object-cover"
            />
            <div className="bg-background/5 absolute inset-0" />
          </motion.div>
        </motion.main>

        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="space-y-8"
        >
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-8 md:grid-cols-2"
          >
            <div className="bg-muted/30 relative aspect-video overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Display.jpg"
                alt="Modern Terrarium Display - Contemporary presentation of the abstract nature sculpture"
                className="h-full w-full object-cover"
              />
              <div className="bg-background/5 absolute inset-0" />
            </div>
            <div className="bg-muted/30 relative aspect-video overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/modern-terrarium/Modern Terrarium Design.jpg"
                alt="Tree Trunk Resin Art - Detail view showing resin and organic material integration"
                className="h-full w-full object-cover"
              />
              <div className="bg-background/5 absolute inset-0" />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
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
        </motion.div>
      </div>
    </section>
  );
};

export { Project5 };
