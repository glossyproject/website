import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero79 = () => {
  return (
    <section className="bg-background dark h-screen w-screen bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/full-width-backgrounds/andrew-kliatskyi-MaVm_A0xhKk-unsplash.jpg')] bg-cover bg-center bg-no-repeat pb-24 pt-12">
      <div className="container flex h-full flex-col justify-between px-5 xl:px-20">
        <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-white-1.svg" alt="" className="size-20" />
        <div className="flex items-end justify-between">
          <div className="flex w-full flex-col gap-8 md:w-2/3">
            <h1 className="text-foreground text-6xl font-medium md:text-[5.8rem]">
              Create your own fiber optics facility
            </h1>
            <p className="text-foreground text-xl md:text-2xl">
              CableCore Partnership. Worldwide network. Regional manufacturing
            </p>
          </div>
          <Button
            variant="ghost"
            className="text-foreground hidden items-center gap-2 hover:bg-transparent md:flex"
          >
            <span className="text-2xl">Read More</span>
            <ArrowDown className="size-6!" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export { Hero79 };
