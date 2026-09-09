"use client";

import { MoveRight } from "lucide-react";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface ITabData {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
}

const tabsData: ITabData[] = [
  {
    id: 1,
    title: "Performance",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 2,
    title: "Innovation",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 3,
    title: "Quality",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 4,
    title: "Accessibility",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 5,
    title: "Affordability",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
  {
    id: 6,
    title: "Customer Support",
    imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-6.svg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, accusantium quam. Temporibus quae quos deserunt!",
  },
];

const Feature126 = () => {
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [activeImage, setActiveImage] = useState<string>(tabsData[0].imageSrc);

  return (
    <section className="py-32">
      <div className="container">
        <span className="text-muted-foreground text-sm uppercase">
          Build with blocks
        </span>
        <h2 className="mb-5 mt-4 text-3xl font-extrabold">Our Core Features</h2>
        <div className="mb-20 flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-8">
          <a
            href="#"
            className="text-muted-foreground group flex items-center gap-2 hover:cursor-pointer"
          >
            All blocks examples
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              <MoveRight className="size-4" />
            </span>
          </a>
          <a
            href="#"
            className="text-muted-foreground group flex items-center gap-2 hover:cursor-pointer"
          >
            All features examples
            <span className="transform transition-transform duration-300 group-hover:translate-x-2">
              <MoveRight className="size-4" />
            </span>
          </a>
        </div>

        <div className="mb-12 flex w-full items-center justify-between gap-28">
          <div className="w-full md:max-w-[400px]">
            <Accordion type="single" className="w-full" defaultValue="item-1">
              {tabsData.map((tab) => (
                <AccordionItem
                  key={tab.id}
                  value={`item-${tab.id}`}
                  className={`hover:bg-accent border-b-0 border-t-2 px-2 transition ${tab.id === activeTabId && "border-foreground"}`}
                >
                  <AccordionTrigger
                    onClick={() => {
                      setActiveImage(tab.imageSrc);
                      setActiveTabId(tab.id);
                    }}
                    className="no-underline! cursor-pointer py-5 transition"
                  >
                    <h6
                      className={`text-muted-foreground text-xl font-semibold ${tab.id === activeTabId ? "text-black" : "text-muted-foreground"}`}
                    >
                      {tab.title}
                    </h6>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground mt-3">
                      {tab.description}
                    </p>
                    <div className="mt-4 md:hidden">
                      <img
                        src={tab.imageSrc}
                        alt="placeholder"
                        className="h-full max-h-80 w-full rounded-md object-cover"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="relative m-auto hidden w-[calc(100%-100px)] max-w-[1266px] overflow-hidden md:block">
            <div className="z-2 absolute bottom-0 left-0 right-0 h-[100px] bg-[linear-gradient(to_top,white_0%,rgba(255,255,255,0)_100%)]"></div>
            <img
              src={activeImage}
              alt="placeholder"
              className="max-h-[490px] w-full rounded-md object-cover transition-opacity duration-300"
            />
          </div>
        </div>

        <Button variant="outline">View all</Button>
      </div>
    </section>
  );
};

export { Feature126 };
