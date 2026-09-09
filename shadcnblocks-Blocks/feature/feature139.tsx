"use client";

import { Badge } from "@/components/ui/badge";

const items = [
  {
    title: "Slack",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
    number: 400,
  },
  {
    title: "Google Drive",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
    number: 4000,
  },
  {
    title: "Dropbox",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
    number: 7000,
  },
  {
    title: "Github",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, corporis!",
    number: 850,
  },
];

const Feature139 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="bg-card rounded-lg border p-10 shadow-sm">
          <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
            <div className="w-full max-w-md">
              <Badge
                variant="outline"
                className="text-muted-foreground px-3 py-2"
              >
                The badge
              </Badge>
              <h2 className="my-5 text-2xl font-medium lg:text-4xl">
                Build your own website with our UI blocks
              </h2>
              <p className="text-muted-foreground text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur modi et recusandae ducimus eligendi eveniet soluta
                reprehenderit nostrum expedita omnis.
              </p>
            </div>
            <div className="w-full max-w-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="max-h-[420px] w-full rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="mt-24 grid grid-cols-1 justify-between gap-12 sm:grid-cols-2 md:grid-cols-4">
            {items.map((item) => (
              <div key={item.title}>
                <p className="text-muted-foreground text-4xl">{item.number}+</p>
                <h6 className="text-5 mb-3 mt-5 font-semibold">{item.title}</h6>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature139 };
