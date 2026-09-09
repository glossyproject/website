"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import { Marquee } from "@/components/magicui/marquee";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
const people = [
  {
    id: 1,
    handle: "@marcusrod",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
  },
  {
    id: 2,
    handle: "@sarahjohnson",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
  },
  {
    id: 3,
    handle: "@priyapatel",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
  },
  {
    id: 4,
    handle: "@janedoe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
  },
  {
    id: 5,
    handle: "@johndoe",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
  },
  {
    id: 6,
    handle: "@emilywhite",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
  },
];

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw22.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw21.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw23.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
];

const partners = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-6.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-7.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-8.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-9.svg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-10.svg",
];

interface Hero272Props {
  className?: string;
}

const Hero272 = ({ className }: Hero272Props) => {
  const GRID_SIZE = 9;
  const ROTATION_INTERVAL = 7000; // ms

  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;

    const id = setInterval(() => {
      setStartIndex((prev) => (prev + GRID_SIZE) % images.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <AuroraBackground>
      <section className={cn("overflow-hidden py-32", className)}>
        <div className="relative container px-0">
          <div className="gap-x grid-cols-2 lg:grid">
            <div className="flex flex-col divide-y divide-border">
              <div className="flex flex-1 flex-col justify-center p-8">
                <h1 className="max-w-3xl text-4xl font-medium tracking-tighter text-foreground text-muted-foreground md:text-6xl">
                  Stay <span className="text-foreground italic">inspired</span>,{" "}
                  every day, with one{" "}
                  <span className="text-foreground italic">simple app</span>
                </h1>
                <p className="mt-5 text-balance text-muted-foreground">
                  Effortlessly organize, edit, and share your photos with a
                  simple and powerful platform. Backup your memories and
                  discover new inspiration every day.
                </p>
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <p className="mb-2 text-sm font-medium tracking-tight text-muted-foreground">
                  Used by your{" "}
                  <span className="text-foreground italic">
                    favorite creators
                  </span>
                </p>
                <TooltipProvider>
                  <AvatarGroup className="grayscale">
                    {people.map((person) => (
                      <Tooltip key={person.id}>
                        <TooltipTrigger asChild>
                          <Avatar className="size-13 ring-2 ring-background">
                            <AvatarImage
                              src={person.image}
                              alt={person.handle}
                            />
                            <AvatarFallback>
                              {person.handle.charAt(1)}
                            </AvatarFallback>
                          </Avatar>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                          {person.handle}
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </AvatarGroup>
                </TooltipProvider>
                <div className="mt-8 flex flex-1 flex-col">
                  <p className="mb-2 text-sm font-medium tracking-tight text-muted-foreground">
                    Download from your{" "}
                    <span className="text-foreground italic">
                      Favorite Store
                    </span>
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 gap-2.5 px-5 text-left"
                    >
                      <FaApple className="size-5" />
                      <span className="flex flex-col leading-none">
                        <span className="text-[10px] font-medium text-foreground/50">
                          Download on the
                        </span>
                        <span className="text-sm font-medium">App Store</span>
                      </span>
                    </Button>
                    <Button size="lg" className="h-12 gap-2.5 px-5 text-left">
                      <FaGooglePlay className="size-5" />
                      <span className="flex flex-col leading-none">
                        <span className="text-[10px] font-medium text-background/50">
                          Download on
                        </span>
                        <span className="font-med text-sm">Google Play</span>
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-8">
                <p className="mb-2 text-sm font-medium tracking-tight text-muted-foreground">
                  Backed by your{" "}
                  <span className="text-foreground italic">
                    Favorite Companies
                  </span>
                </p>
                <div className="flex w-full items-center justify-center">
                  <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mask-x-from-80%">
                    <Marquee pauseOnHover className="[--gap:4rem]">
                      {partners.map((partner, index) => (
                        <img
                          key={index}
                          alt={`Partner ${index}`}
                          className="size-24 object-contain md:size-28 dark:invert"
                          src={partner}
                        />
                      ))}
                    </Marquee>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-px border-l border-border bg-border perspective-[1200px]">
              {Array.from({ length: GRID_SIZE }).map((_, cell) => {
                const imageIndex = (startIndex + cell) % images.length;
                const src = images[imageIndex];

                return (
                  <div
                    key={cell}
                    className="overflow-hidden bg-background/40 p-1"
                  >
                    <div className="relative aspect-square h-full">
                      <AnimatePresence initial={false}>
                        <motion.img
                          key={`${cell}-${src}`}
                          src={src}
                          alt=""
                          className="absolute inset-0 size-full object-cover"
                          initial={{
                            rotateY: 15,
                            opacity: 0,
                            transformOrigin: "center center",
                          }}
                          animate={{
                            rotateY: 0,
                            opacity: 1,
                            transformOrigin: "center center",
                          }}
                          exit={{
                            rotateY: -10,
                            opacity: 0,
                            transformOrigin: "center center",
                          }}
                          transition={{
                            duration: 0.6,
                            ease: "easeInOut",
                            delay: cell * 0.09,
                          }}
                        />
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="absolute -top-1/2 bottom-0 left-0 h-[200%] w-px bg-border" />
          <div className="absolute -top-1/2 right-0 bottom-0 h-[200%] w-px bg-border" />
          <div className="absolute right-0 bottom-0 -left-1/2 h-px w-[200%] bg-border" />
          <div className="absolute top-0 right-0 -left-1/2 h-px w-[200%] bg-border" />
        </div>
      </section>
    </AuroraBackground>
  );
};

export { Hero272 };

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div className={cn("transition-bg relative", className)} {...props}>
        <div
          className="absolute inset-0 overflow-hidden"
          style={
            {
              "--aurora":
                "repeating-linear-gradient(100deg,#000_10%,#666_15%,#ccc_20%,#fff_25%,#333_30%)",
              "--dark-gradient":
                "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
              "--white-gradient":
                "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",

              "--gray-200": "#ccc",
              "--gray-400": "#666",
              "--gray-800": "#333",
              "--black": "#000",
              "--white": "#fff",
              "--transparent": "transparent",
            } as React.CSSProperties
          }
        >
          <div
            //   I'm sorry but this is what peak developer performance looks like // trigger warning
            className={cn(
              `pointer-events-none absolute -inset-[10px] [background-image:var(--white-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform [--aurora:repeating-linear-gradient(100deg,var(--black)_10%,var(--gray-400)_15%,var(--gray-200)_20%,var(--white)_25%,var(--gray-800)_30%)] [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)] [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)] after:absolute after:inset-0 after:animate-aurora-background after:[background-image:var(--white-gradient),var(--aurora)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""] dark:[background-image:var(--dark-gradient),var(--aurora)] dark:invert-0 after:dark:[background-image:var(--dark-gradient),var(--aurora)]`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`,
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
