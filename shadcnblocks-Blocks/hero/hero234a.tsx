"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

const galleryImages = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  ],
];

const Hero234a = () => {
  return (
    <section className="bg-background relative min-h-screen overflow-hidden">
      {/* Contained image gallery */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[500px] w-[900px] overflow-hidden rounded-2xl md:h-[600px] md:w-[1200px]">
          <div className="absolute inset-0 flex flex-col justify-center gap-3">
            {galleryImages.map((row, rowIndex) => (
              <motion.div
                key={rowIndex}
                className="flex gap-3 will-change-transform"
                animate={{
                  x: rowIndex % 2 === 0 ? [-3200, 0] : [0, -3200],
                }}
                transition={{
                  duration: 25 + rowIndex * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...row, ...row, ...row, ...row].map((image, imageIndex) => (
                  <motion.div
                    key={`${rowIndex}-${imageIndex}`}
                    className="relative flex-shrink-0 overflow-hidden rounded-lg"
                    style={{
                      width: "180px",
                      height: "180px",
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={image}
                      alt={`Gallery image ${imageIndex + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-friendly ellipse mask */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* Light masking on mobile, stronger on desktop */}
        <div className="from-background/80 via-background/40 md:from-background md:via-background/80 absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b to-transparent md:h-[200px]" />
        <div className="from-background/80 via-background/40 md:from-background md:via-background/80 absolute inset-x-0 bottom-0 h-[100px] bg-gradient-to-t to-transparent md:h-[200px]" />
        <div className="from-background/80 via-background/40 md:from-background md:via-background/80 absolute inset-y-0 left-0 w-[80px] bg-gradient-to-r to-transparent md:w-[150px]" />
        <div className="from-background/80 via-background/40 md:from-background md:via-background/80 absolute inset-y-0 right-0 w-[80px] bg-gradient-to-l to-transparent md:w-[150px]" />

        {/* Corner masks - lighter on mobile */}
        <div className="from-background/60 via-background/30 md:from-background/90 md:via-background/60 absolute left-0 top-0 h-[150px] w-[150px] bg-gradient-to-br to-transparent md:h-[250px] md:w-[250px]" />
        <div className="from-background/60 via-background/30 md:from-background/90 md:via-background/60 absolute right-0 top-0 h-[150px] w-[150px] bg-gradient-to-bl to-transparent md:h-[250px] md:w-[250px]" />
        <div className="from-background/60 via-background/30 md:from-background/90 md:via-background/60 absolute bottom-0 left-0 h-[150px] w-[150px] bg-gradient-to-tr to-transparent md:h-[250px] md:w-[250px]" />
        <div className="from-background/60 via-background/30 md:from-background/90 md:via-background/60 absolute bottom-0 right-0 h-[150px] w-[150px] bg-gradient-to-tl to-transparent md:h-[250px] md:w-[250px]" />
      </div>

      <div className="relative z-20 flex min-h-screen items-center justify-center">
        <motion.div
          className="rounded-lg bg-black/60 p-8 backdrop-blur-md md:p-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A Studio <br />
            Crafting <br />
            Digital Art
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" variant="secondary">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Hero234a };
