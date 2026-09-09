import { ChevronRight } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Signup8 = () => {
  return (
    <section className="bg-background py-32">
      <div className="container relative flex flex-col items-center">
        <div className="border-border flex w-full flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl p-4 sm:border lg:flex-row lg:p-12">
          {/* Left Content */}
          <div className="flex w-full flex-col gap-8">
            <Badge
              variant="outline"
              className="flex w-fit items-center gap-4 rounded-full px-6 py-2"
            >
              <span className="text-muted-foreground text-sm font-medium">
                Copy paste Blocks for your app
              </span>
              <ChevronRight className="size-4!" />
            </Badge>

            <h1 className="text-7xl font-semibold tracking-tighter">
              Blocks Built
              <br />
              With Shadcn
              <br />
              &amp; Tailwind.
            </h1>

            <p className="text-muted-foreground text-xl font-normal tracking-tight">
              Finely crafted components built with React, Tailwind and Shadcn
              UI. Developers can copy and paste these blocks directly into their
              project.
            </p>

            <div className="flex w-full flex-col gap-4">
              <Button className="text-md bg-primary text-primary-foreground h-12 w-full rounded-lg">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/google-icon.svg"
                  alt=""
                  className="size-4"
                />
                Sign up with Google
              </Button>

              <Button
                variant="outline"
                className="text-md h-12 w-full rounded-lg"
              >
                Sign up with email
              </Button>
            </div>

            <p className="text-muted-foreground text-center text-sm">
              No credit card required
            </p>
          </div>

          {/* Right Content - Browser Window */}
          <div className="w-full">
            <div className="border-border bg-muted ml-0 flex h-[500px] w-full flex-col items-center justify-center rounded-3xl border p-2 lg:ml-32">
              <Card className="relative h-full w-full rounded-2xl border">
                <CardContent className="flex h-full w-full items-center justify-center p-0">
                  {/* Browser Window Controls */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <div className="size-3.5 rounded-full bg-red-500" />
                    <div className="size-3.5 rounded-full bg-yellow-500" />
                    <div className="size-3.5 rounded-full bg-green-500" />
                  </div>
                  {/* Browser Window Content */}
                  <img
                    className="size-60"
                    alt="Block Logo"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup8 };
