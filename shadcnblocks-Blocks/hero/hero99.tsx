import { ArrowRight, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero99 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 -left-1 -top-1 -z-10 h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:92px_92px] opacity-15 [mask-image:radial-gradient(ellipse_50%_100%_at_50%_50%,transparent_60%,#000_100%)]"></div>
          <div className="mx-auto max-w-4xl">
            <a
              href="#"
              className="bg-muted mx-auto mb-4 flex w-fit items-center gap-2 rounded-full px-4 py-2 text-sm"
            >
              How to create superior products
              <ArrowRight className="inline size-4" />
            </a>
            <h1 className="my-4 mb-6 text-center text-3xl font-semibold lg:text-8xl">
              Create effective solutions for diverse needs.
            </h1>
            <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-center lg:text-xl">
              Access all necessary resources for managing tasks and enhancing
              efficiency. Additionally, scale your capabilities across various
              projects.
            </p>
            <div className="flex flex-col justify-center gap-x-2 gap-y-3 sm:flex-row">
              <Button>
                Get Started
                <ChevronRight className="ml-2 h-auto w-4" />
              </Button>
              <Button variant="secondary">
                Discover Our Platform
                <ChevronRight className="ml-2 h-auto w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-10">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="h-full max-h-[500px] w-full rounded-xl object-cover md:col-span-3"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
            alt="placeholder"
            className="h-full max-h-[500px] w-full rounded-xl object-cover md:col-span-2"
          />
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="placeholder"
            className="h-full max-h-[500px] w-full rounded-xl object-cover md:col-span-5"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero99 };
