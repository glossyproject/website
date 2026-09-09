import { ArrowRightIcon } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Hero202 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <Card className="rounded-4xl bg-muted group relative w-full overflow-hidden border border-none shadow-none">
          <CardContent className="lg:px-18 py-12 lg:py-24">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="flex flex-col justify-center space-y-6">
                <p className="text-foreground flex items-center gap-2 text-xl font-medium tracking-tight">
                  <img
                    className="size-6"
                    alt="Copy paste icon"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  />
                  Copy Paste Blocks
                </p>

                <h1 className="text-foreground mt-3 text-8xl font-bold tracking-tighter">
                  Let's Create Something
                  <span className="bg-linear-to-b from-background to-foreground bg-clip-text text-transparent">
                    {" "}
                    Amazing!
                  </span>
                </h1>

                <div className="mt-4 flex gap-2">
                  <Button className="h-13 w-fit rounded-full px-8 text-lg">
                    Let's Talk
                  </Button>
                  <Button
                    variant="outline"
                    className="size-13 -rotate-45 rounded-full transition-all ease-in-out hover:rotate-0"
                  >
                    <ArrowRightIcon />
                  </Button>
                </div>
              </div>
              <div className="-right-70 -bottom-70 absolute -rotate-45 transition-all ease-in-out group-hover:-rotate-0">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/illustrations/tokyo-solar-system-around-a-smiley.svg"
                  className="size-150 md:size-220"
                  alt=""
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export { Hero202 };
