"use client";

import { Star } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Hero80 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]"></div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]"></div>

      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <a
              href="https://www.shadcnblocks.com"
              className="text-muted-foreground my-6 text-xs font-bold uppercase tracking-[0.3em] hover:underline"
            >
              shadcnblocks.com
            </a>

            {/* Heading */}
            <h1 className="text-4xl font-semibold sm:text-5xl">
              Beautiful UI
              <br />
              <span className="text-muted-foreground">Made Simple</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground my-8 max-w-xl lg:text-lg">
              Build stunning web applications faster with our premium collection
              of ready-to-use UI components. Perfect for developers and
              designers.
            </p>

            {/* Buttons */}
            <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Components
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                View Demo
              </Button>
            </div>

            {/* Avatar Stack and Stars */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
              {/* Avatars */}
              <div className="flex -space-x-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Avatar
                    key={num}
                    className="border-background ring-border size-14 border-2 shadow-sm ring-1"
                  >
                    <AvatarImage
                      src={`https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-${num}.webp`}
                      alt={`Avatar ${num}`}
                    />
                  </Avatar>
                ))}
              </div>

              {/* Stars */}
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-primary size-5" />
                  ))}
                  <span className="font-semibold">5.0</span>
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  1000+ happy developers
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative grid gap-4 lg:grid-cols-2">
            {/* Main Image */}
            <div className="aspect-3/4 bg-muted relative w-full overflow-hidden rounded-lg">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="UI Components Preview"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Secondary Image */}
            <div className="aspect-3/4 bg-muted relative w-full overflow-hidden rounded-lg lg:mt-8">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="Component Examples"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero80 };
