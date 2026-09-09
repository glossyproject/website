import { CornerDownRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Contact19 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="gap-15 max-h-120 mt-20 flex flex-col justify-between md:gap-20 lg:flex-row">
          <div className="gap-30 flex w-full max-w-md flex-col justify-between">
            <div className="relative w-fit">
              <h1 className="text-6xl font-semibold leading-none tracking-tight lg:text-7xl">
                Stay Connected
              </h1>
              <p className="text-foreground/50 mb-5 mt-10">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis nisi omnis, excepturi doloribus fuga delectus at ab
                magnam beatae explicabo.
              </p>

              <Button variant="ghost" className="group">
                <CornerDownRight className="size-4" />
                Get in touch
              </Button>
            </div>

            <div>
              <a
                href=""
                className="flex items-center gap-4 text-4xl font-medium tracking-tighter"
              >
                +1 (002) 312 4123
              </a>
              <a
                href=""
                className="flex items-center gap-4 text-4xl font-medium tracking-tighter"
              >
                hi@shadcnblocks.com
              </a>
            </div>
          </div>
          <div className="right-0 top-0 flex h-screen w-full flex-col gap-2 lg:absolute lg:w-1/2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img11.png"
              alt=""
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact19 };
