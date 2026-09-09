"use client";
import { Play } from "lucide-react";
import { Fragment, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero173 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className="font-dm_sans py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="flex flex-col gap-6">
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
                Harmony Creative Studio
              </p>
              <div className="flex max-w-[40rem] flex-col gap-6">
                <h1 className="text-4xl font-medium leading-tight md:text-5xl xl:text-6xl">
                  Boost your business with a brand-new website.
                </h1>
                <p className="text-muted-foreground text-balance text-xl">
                  Harmony is a full-service design studio crafting stunning
                  digital experiences and products.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 py-4">
                <Button
                  asChild
                  className="block h-fit w-fit text-nowrap rounded-sm px-5 py-3.5 text-sm font-medium uppercase tracking-wider"
                >
                  <a href="#">Discover now</a>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  onClick={() => setIsVideoOpen(true)}
                  className="flex h-fit w-fit flex-nowrap items-center gap-2 text-nowrap rounded-sm bg-transparent px-5 py-3.5 text-sm font-medium uppercase tracking-wider"
                >
                  <a href="#">
                    <Play className="h-3! w-3! fill-neutral-950" />
                    <p>How it works?</p>
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <div className="relative mx-auto aspect-[0.789340102/1] max-w-[25rem]">
                <div className="absolute bottom-0 left-0 z-30 w-[63%]">
                  <AspectRatio
                    ratio={0.724137931 / 1}
                    className="overflow-hidden"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>

                <div className="absolute left-1/2 top-1/2 z-20 w-[63%] -translate-x-1/2 -translate-y-1/2">
                  <AspectRatio
                    ratio={0.724137931 / 1}
                    className="overflow-hidden"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                      alt=""
                      className="size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>

                <div className="absolute right-0 top-0 z-10 w-[63%]">
                  <AspectRatio
                    ratio={0.724137931 / 1}
                    className="overflow-hidden"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                      alt=""
                      className="size-full object-cover object-center"
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Presentation Video</DialogTitle>
          </DialogHeader>
          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/your-video-id"
              title="Presentation Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export { Hero173 };
