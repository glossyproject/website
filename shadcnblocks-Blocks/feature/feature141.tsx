"use client";

import { Badge } from "@/components/ui/badge";

const Feature141 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="text-center text-5xl">Welcome to Our Website</h2>
        <p className="text-muted-foreground mt-3 text-center text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat
        </p>

        <div className="mt-20 flex flex-col items-center justify-center gap-16 md:flex-row">
          <div className="bg-linear-to-br grid w-full max-w-md grid-cols-[1fr_2fr_1fr] grid-rows-[1fr_2fr_1fr] rounded-lg from-red-100 to-blue-100 md:max-w-xl">
            <div className="border-muted-foreground/30 border-b-2 border-r-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 p-4" />
            <div className="border-muted-foreground/30 border-b-2 border-l-2 p-4" />
            <div className="border-muted-foreground/30 border-r-2 p-4" />
            <div>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder"
                className="max-h-[740px] w-full rounded-xl object-cover"
              />
            </div>
            <div className="border-muted-foreground/30 border-l-2 p-4" />
            <div className="border-muted-foreground/30 border-r-2 border-t-2 p-4" />
            <div className="border-muted-foreground/30 border-t-2 p-4" />
            <div className="border-muted-foreground/30 border-l-2 border-t-2 p-4" />
          </div>

          <div className="w-full max-w-sm">
            <h6 className="text-3xl">
              Get your team on the same page, literally
            </h6>
            <Badge variant="outline" className="bg-muted mt-8 px-3 py-2">
              Badge
            </Badge>

            <div className="bg-muted-foreground mb-4 mt-16 h-px w-full" />

            <p className="text-muted-foreground mb-10 text-lg">
              &quot;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Rerum alias unde et doloremque dignissimos error temporibus
              quisquam porro ducimus esse quod, a officiis.&quot;
            </p>

            <p className="text-lg">John Doe</p>
            <p className="text-muted-foreground text-lg">
              CET, Company Example
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature141 };
