"use client";
import { MessagesSquare, Play } from "lucide-react";
import { Fragment, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero135 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <Fragment>
      <section className="bg-primary/5 py-12 font-sans md:py-20">
        <div className="container">
          <div className="flex flex-col justify-center gap-8 lg:flex-row lg:items-center">
            <div className="flex flex-1 flex-col gap-10">
              <div className="bg-muted flex w-fit items-center gap-2 rounded-md py-2 pl-4 pr-3">
                <MessagesSquare className="stroke-primary h-7 w-7" />
                <div className="text-foreground text-lg font-bold">
                  Customer Stories
                </div>
              </div>
              <h1 className="text-foreground max-w-96 text-7xl font-medium lg:text-8xl">
                Client Journeys
              </h1>
              <p className="text-muted-foreground max-w-96 text-3xl leading-normal lg:text-4xl">
                Inspiring tales of bold companies thriving with Us.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative w-full overflow-hidden rounded-3xl">
                <AspectRatio ratio={1}>
                  <div className="size-full">
                    <video
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4"
                      muted
                      autoPlay
                      loop
                      className="size-full object-cover object-center"
                    />
                    <Button
                      size="icon"
                      onClick={() => setIsVideoOpen(true)}
                      className="bg-background hover:bg-background absolute bottom-0 left-0 m-10 flex size-fit w-fit items-center gap-4 rounded-full py-3 pl-3 pr-8 transition-transform hover:scale-105"
                    >
                      <div className="bg-primary flex h-20 w-20 rounded-full">
                        <Play className="size-7! m-auto fill-white stroke-white" />
                      </div>
                      <div>
                        <div className="text-foreground text-left text-base font-semibold">
                          John Doe
                        </div>
                        <div className="text-muted-foreground text-left text-base font-medium">
                          CEO
                        </div>
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

export { Hero135 };
