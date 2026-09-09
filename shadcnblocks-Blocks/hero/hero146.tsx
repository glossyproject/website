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

const Hero146 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className="border-muted2 border-b bg-[url(https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid-1.svg)] bg-[length:100%_100%] bg-center bg-no-repeat font-sans">
        <div className="container pt-12 md:pt-24">
          <div className="flex flex-col items-center gap-5">
            <h1 className="bg-linear-to-r max-w-[25rem] from-neutral-900 via-neutral-700 to-neutral-800 bg-clip-text py-2 text-center text-4xl font-semibold leading-tight tracking-tighter text-transparent md:max-w-[43.75rem] md:text-6xl lg:max-w-[56.25rem] lg:text-[5rem]">
              AI agents for Enterprise deployed in no time
            </h1>
            <p className="text-muted-foreground max-w-[22.5rem] text-center text-base md:max-w-[35rem] lg:text-lg">
              Design and launch custom AI agents tailored to any workflow and
              integrated with every app—no coding needed.
            </p>
            <div className="pt-6">
              <Button className="animate-shadow-ping block h-fit w-fit rounded-md border border-neutral-950 bg-[linear-gradient(180deg,var(--color-neutral-600),var(--color-neutral-700),var(--color-neutral-900))] px-6 py-3.5 text-center text-lg text-white">
                <a href="#">Get Started</a>
              </Button>
            </div>
          </div>
          <div className="after:bg-linear-to-t relative mx-auto w-full max-w-[72rem] after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:z-20 after:block after:h-[45%] after:w-full after:from-white after:to-transparent after:content-['']">
            <div className="mt-14 flex w-full flex-col items-center gap-5 rounded-2xl border border-neutral-200 bg-neutral-100 p-3">
              <p className="text-foreground text-center text-xs font-medium sm:text-sm md:text-lg">
                Watch how we build an autonomous AI agent in only{" "}
                <span className="underline">5 minutes</span>.
              </p>
              <div className="relative w-full rounded-xl border border-neutral-200 bg-neutral-50">
                <AspectRatio
                  ratio={3.002666667 / 1}
                  className="overflow-hidden"
                >
                  <div>
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-aspect-video-1.svg"
                      alt=""
                      className="object-top-left w-full object-cover"
                    />
                    <Button
                      onClick={() => setIsVideoOpen(true)}
                      size="icon"
                      className="absolute left-1/2 top-1/2 z-30 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-500 shadow-[0_0_0_14px_var(--color-neutral-300)] transition-all hover:bg-neutral-600 hover:shadow-[0_0_0_0px_var(--color-neutral-300)] md:h-14 md:w-14 lg:h-20 lg:w-20"
                    >
                      <div className="m-auto aspect-square w-[45%]">
                        <Play className="h-full! w-full! fill-white stroke-white" />
                      </div>
                    </Button>
                  </div>
                </AspectRatio>
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

export { Hero146 };
