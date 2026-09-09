import { ChevronUp } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const Hero203 = () => {
  return (
    <section className="bg-background py-32">
      <div className="px-0! container relative flex flex-col items-center">
        <div className="container flex w-full flex-col justify-between px-10 lg:flex-row">
          <div className="flex w-full flex-col gap-8">
            <a href="#" className="text-2xl font-semibold tracking-tighter">
              Shadcn Blocks
            </a>
            <h1 className="bg-re relative z-20 text-6xl font-semibold tracking-tighter md:text-8xl">
              The Blocks Built With Shadcn &amp; Tailwind.
            </h1>
            <p className="text-muted-foreground max-w-2xl tracking-tight md:text-xl">
              Finely crafted components built with React, Tailwind and Shadcn
              UI. Developers can copy and paste these blocks directly into their
              project.
            </p>
          </div>
          <div className="md:mt-18 lg:w-5/9 mt-8 flex flex-col items-start lg:items-center">
            <Button className="text-background rounded-2xl px-6 py-6 shadow-[0px_1px_3px_#0000001a,inset_0px_2px_0px_#ffffff40] md:rounded-3xl md:px-12 md:py-8 md:text-lg">
              <p className="text-background mr-1 text-xl md:mr-3 md:text-2xl">
                
              </p>{" "}
              Sign up for free
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-col justify-between pr-10 md:mt-10 md:flex-row">
          <DottedDiv className="h-160 w-120 group p-4">
            <div className="bg-muted/50 group-hover:bg-muted relative h-full w-full p-4 transition-all ease-in-out">
              {/* Bg Image div */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-5oYbG-sEImY-unsplash.jpg"
                  alt="aiImage"
                  className="h-full w-full object-cover"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/70 to-transparent"></div>
              </div>
              <div className="absolute top-4 -ml-4 flex h-full w-full flex-col items-center justify-between p-10">
                <p className="text-background flex w-full items-center text-xl tracking-tighter">
                  2025 <span className="bg-background mx-2 h-2.5 w-[1px]" />
                  March
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-background text-center text-6xl font-semibold tracking-tight">
                    Shadcn <br />
                    Carousal
                  </h2>
                  <div className="bg-background mt-2 h-1 w-6 rounded-full" />
                  <p className="text-background/80 mt-10 max-w-sm px-2 text-center text-lg font-light leading-5 tracking-tighter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure debitis.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-background group mb-6 flex cursor-pointer flex-col items-center justify-center"
                >
                  <ChevronUp
                    size={30}
                    className="transition-all ease-in-out group-hover:-translate-y-2"
                  />
                  <p className="text-background text-xl tracking-tight">
                    See All
                  </p>
                </a>
              </div>
            </div>
          </DottedDiv>
          <DottedDiv className="h-160 w-120 group p-4 lg:-mt-60">
            <div className="bg-muted/50 group-hover:bg-muted relative h-full w-full p-4 transition-all ease-in-out">
              {/* Bg Image div */}
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/simone-hutsch-majMgWtrF48-unsplash.jpg"
                  alt="aiImage"
                  className="h-full w-full object-cover"
                />
                <div className="bg-linear-to-t absolute inset-0 from-black/70 to-transparent"></div>
              </div>
              <div className="absolute top-4 -ml-4 flex h-full w-full flex-col items-center justify-between p-10">
                <p className="text-background flex w-full items-center text-xl tracking-tighter">
                  2025 <span className="bg-background mx-2 h-2.5 w-[1px]" />
                  March
                </p>
                <div className="flex flex-col items-center justify-center">
                  <h2 className="text-background text-center text-6xl font-semibold tracking-tight">
                    Shadcn <br />
                    Carousal
                  </h2>
                  <div className="bg-background mt-2 h-1 w-6 rounded-full" />
                  <p className="text-background/80 mt-10 max-w-sm px-2 text-center text-lg font-light leading-5 tracking-tighter">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure debitis.
                  </p>
                </div>
                <a
                  href="#"
                  className="text-background group mb-6 flex cursor-pointer flex-col items-center justify-center"
                >
                  <ChevronUp
                    size={30}
                    className="transition-all ease-in-out group-hover:-translate-y-2"
                  />
                  <p className="text-background text-xl tracking-tight">
                    See All
                  </p>
                </a>
              </div>
            </div>
          </DottedDiv>
        </div>
      </div>
    </section>
  );
};

export { Hero203 };

const DottedDiv = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("relative", className)}>
    <div className="-left-25 bg-muted absolute top-4 h-[1.5px] w-[115%]" />
    <div className="-left-25 bg-muted absolute bottom-4 h-[1.5px] w-[115%]" />
    <div className="-top-25 bg-muted absolute left-4 h-[130%] w-[1.5px]" />
    <div className="-top-25 bg-muted absolute right-4 h-[130%] w-[1.5px]" />
    <div className="bg-foreground absolute left-[12.5px] top-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute right-[12.5px] top-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] left-[12.5px] z-10 size-2 rounded-full" />
    <div className="bg-foreground absolute bottom-[12.5px] right-[12.5px] z-10 size-2 rounded-full" />
    {children}
  </div>
);
