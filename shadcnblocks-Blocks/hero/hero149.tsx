"use client";
import { CircleCheck } from "lucide-react";
import { Fragment, useState } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Hero149 = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <Fragment>
      <section className="font-plus_jakarta_sans bg-background relative overflow-hidden py-12 md:py-20">
        <div className="container relative z-20">
          <div className="mx-auto flex max-w-[900px] flex-col gap-8">
            <h1 className="text-foreground text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-7xl">
              Get all your design done using our service.
            </h1>
            <p className="text-foreground mx-auto max-w-[90%] text-center text-base md:text-lg">
              Equip your team with a top designer and boost your design
              capacity—in days, not months.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="border-primary block h-fit w-fit rounded-md border-2 px-10 py-4 text-center text-lg font-bold"
              >
                <a href="#">Book a Demo</a>
              </Button>
              <Button
                asChild
                variant="outline"
                onClick={() => setIsVideoOpen(true)}
                className="block h-fit w-fit rounded-md border-2 bg-transparent px-10 py-4 text-lg font-bold"
              >
                <a href="#">How it Works</a>
              </Button>
            </div>
            <div className="mx-auto flex w-fit max-w-[585px] flex-col flex-wrap items-start justify-center gap-3 sm:w-full sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2">
                <CircleCheck className="fill-primary stroke-muted size-5" />
                <p className="text-muted-foreground text-sm font-light">
                  Unlimited tasks
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="fill-primary stroke-muted size-5" />
                <p className="text-muted-foreground text-sm font-light">
                  Results in less than 48h
                </p>
              </div>
              <div className="flex items-center gap-2">
                <CircleCheck className="fill-primary stroke-muted size-5" />
                <p className="text-muted-foreground text-sm font-light">
                  Cancel Anytime
                </p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 w-full max-w-[1000px] overflow-hidden rounded-xl shadow-[4px_2px_3.123rem_rgba(0,0,0,.15)]">
            <AspectRatio ratio={1.406469761 / 1}>
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt=""
                className="size-full object-cover object-center"
              />
            </AspectRatio>
          </div>
        </div>
        <img
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/line.svg"
          alt=""
          className="absolute bottom-[13%] left-[-3%] top-auto z-10 block w-full"
        />
        <div className="absolute bottom-[32%] left-[31%] top-auto z-10 size-full md:bottom-auto md:left-[13.875rem] md:top-[-6%]">
          <AspectRatio
            ratio={1}
            className="bg-[radial-gradient(closest-side,var(--color-accent),transparent)]"
          />
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

export { Hero149 };
