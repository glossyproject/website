"use client";

import { motion } from "framer-motion";

const Project14 = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-32">
      <div className="container">
        <motion.div
          className="mb-16 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.p
            className="mb-4 text-sm uppercase tracking-widest"
            variants={fadeInUp}
          >
            Project
          </motion.p>
          <motion.h1
            className="text-2xl font-bold uppercase tracking-wider md:text-5xl lg:text-7xl"
            variants={fadeInUp}
          >
            AUSTIN MOTORS
          </motion.h1>
        </motion.div>

        <motion.div
          className="mb-24 grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative overflow-hidden rounded-md"
            variants={fadeInUp}
          >
            <motion.div
              className="relative h-[400px] w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg"
                alt="Luxury sports car in motion blur"
                className="h-full w-full object-cover grayscale filter transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-md"
            variants={fadeInUp}
          >
            <motion.div
              className="relative h-[400px] w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg"
                alt="Close-up of car wheel and brake system"
                className="h-full w-full object-cover grayscale filter transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-16 text-center"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="mb-12 flex items-center justify-evenly gap-4"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <p className="mb-2 text-xs uppercase tracking-widest">CATEGORY</p>
              <p className="font-medium uppercase tracking-wide md:text-lg">
                AUTOMOTIVE
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="mb-2 text-xs uppercase tracking-widest">YEAR</p>
              <p className="font-medium uppercase tracking-wide md:text-lg">
                2025
              </p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="mb-2 text-xs uppercase tracking-widest">BRAND</p>
              <p className="font-medium uppercase tracking-wide md:text-lg">
                AUSTIN LIFESTYLE
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="mx-auto max-w-4xl" variants={fadeInUp}>
            <p className="leading-relaxed">
              Austin Motors brings decades of British automotive heritage into
              the modern era with this groundbreaking project. Every element
              reflects our commitment to precision engineering and timeless
              design, where traditional craftsmanship meets innovative
              technology. This concept embodies Austin's legacy of creating
              vehicles that deliver exceptional performance while honoring the
              sophisticated elegance that has defined the brand for generations.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-6"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="relative h-[600px] w-full">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg"
                alt="Front view of luxury supercar with dramatic lighting"
                className="h-full w-full object-cover grayscale filter duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div
            className="relative overflow-hidden rounded-md"
            variants={fadeInUp}
          >
            <motion.div
              className="relative h-[400px] w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg"
                alt="Side profile of sports car against urban backdrop"
                className="h-full w-full object-cover grayscale filter transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-md"
            variants={fadeInUp}
          >
            <motion.div
              className="relative h-[400px] w-full"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg"
                alt="Interior dashboard with premium materials and technology"
                className="h-full w-full object-cover grayscale filter transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export { Project14 };
