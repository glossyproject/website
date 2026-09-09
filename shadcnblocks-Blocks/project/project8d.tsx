"use client";

import { motion } from "framer-motion";

const Project8d = () => {
  return (
    <section className="py-32">
      <motion.div
        className="container max-w-5xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-20 text-center">
          <motion.h1
            className="text-foreground mb-6 text-3xl font-bold tracking-tight md:text-8xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TYRELL FASHION
          </motion.h1>
          <motion.p
            className="text-muted-foreground text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Capturing a neo-noir future aesthetic.
          </motion.p>
        </div>

        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/glitch-portrait-pir7z.jpg"
              alt="Creative portrait with dynamic lighting"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          className="space-y-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <h3 className="text-foreground mb-2 text-lg font-semibold">
                Creative
              </h3>
              <p className="text-muted-foreground text-2xl">2024</p>
              <h4 className="text-foreground mt-1 text-sm font-semibold">
                SF Bay Area
              </h4>
            </div>

            <div className="space-y-6 md:col-span-3">
              <p className="text-foreground text-lg leading-relaxed">
                Exploring the intersection of technology and couture, this neo
                future collection pushes the boundaries of traditional fashion
                photography. Holographic textures, metallic fabrics, and
                geometric patterns create a cyberpunk aesthetic that reflects
                our digital age. The shoot incorporates LED lighting and
                reflective surfaces to enhance the futuristic narrative,
                transforming each garment into a statement of tomorrow's
                elegance.
              </p>

              <p className="text-foreground text-lg leading-relaxed">
                Set against minimalist backdrops with strategic neon accents,
                the photography captures the essence of neo future fashion -
                where sustainability meets innovation, and where each piece
                tells a story of technological advancement wrapped in artistic
                expression. The result is a visual manifesto that challenges
                conventional beauty standards while celebrating the evolution of
                style.
              </p>
            </div>
          </div>

          <div className="border-border border-t pt-8">
            <div className="text-muted-foreground space-y-2 text-base">
              <h5 className="text-foreground mb-4 font-medium">Credits</h5>
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
                <p>Creative Director: Maya Chen</p>
                <p>Fashion Stylist: Alex Rivera</p>
                <p>Makeup Artist: Jordan Kim</p>
                <p>Hair Stylist: Taylor Brooks</p>
                <p>Set Designer: Sam Patel</p>
                <p>Retoucher: Casey Wong</p>
                <p>Lighting Assistant: Riley Martinez</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Project8d };
