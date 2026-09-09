"use client";

import { motion } from "framer-motion";

const projects5prop = [
  {
    title: "Modern Concrete Pavilion",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern Architectural Elegance at Twilight.png",
    year: "2025",
    type: "Architecture",
  },
  {
    title: "Colorful Urban Living",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modernist Architecture in Lush Forest.png",

    year: "2025",
    type: "Urban Design",
  },
  {
    title: "Minimalist Home Retreat",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
    year: "2025",
    type: "Interior",
  },
  {
    title: "Urban Concrete House",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/Modern Minimalist House.png",
    year: "2025",
    type: "Product Design",
  },
  {
    title: "Luxury Concrete Box",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw14.jpeg",
    year: "2025",
    type: "Residential",
  },
  {
    title: "Glasshouse in Nature",
    img: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw16.jpeg",
    year: "2025",
    type: "Sustainable Design",
  },
];

const Projects5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="text-7xl font-bold uppercase leading-tight">Our Work</h1>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects5prop.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-border bg-background group overflow-hidden rounded-lg border"
            >
              <div className="overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-96 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h2 className="text-lg font-semibold">{project.title}</h2>
                  <p className="text-muted-foreground">{project.type}</p>
                </div>
                <div className="border-border rounded-2xl border px-5 py-2 text-sm font-semibold">
                  {project.year}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects5 };
