"use client";

import { MoveHorizontal, MoveRight } from "lucide-react";
import { motion, useMotionValue } from "motion/react";
import { ReactNode, useEffect, useRef } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero273Props {
  className?: string;
}

const IMAGES = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw18.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw19.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw24.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw25.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw26.png",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
] as const;

const SOCIAL_AVATARS = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
] as const;

const ANGLE = 360 / IMAGES.length;
const SENS = 0.4;
const FRICTION = 0.97;
const STOP = 0.01;

const Hero273 = ({ className }: Hero273Props) => {
  const rotation = useMotionValue(0);
  const drag = useRef({ base: 0, t: 0, vel: 0, raf: 0 });

  const cancelRaf = () => {
    if (drag.current.raf) {
      cancelAnimationFrame(drag.current.raf);
      drag.current.raf = 0;
    }
  };

  const step = () => {
    const v = drag.current.vel;
    if (Math.abs(v) < STOP) {
      drag.current.raf = 0;
      return;
    }
    rotation.set(rotation.get() + v);
    drag.current.vel = v * FRICTION;
    drag.current.raf = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelRaf(), []);

  return (
    <AuroraBackground>
      <section
        className={cn("relative z-10 overflow-x-hidden py-32", className)}
      >
        <div className="container">
          <div className="mx-auto flex max-w-xl flex-col items-center text-center">
            <Badge variant="outline" className="mb-4">
              Community
            </Badge>
            <h1 className="text-5xl font-bold tracking-tight text-balance">
              Your <span className="italic">Life</span>, Your{" "}
              <span className="italic">Way</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              We believe in the power of self-expression and the importance of
              living your life on your own terms. We are a community of people
              who are passionate about living their lives to the fullest.
            </p>
            <div className="mt-8 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
              <Button size="lg" className="px-4">
                Get started
              </Button>
              <Button size="lg" variant="outline" className="px-4">
                Learn how it works
                <MoveRight />
              </Button>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {SOCIAL_AVATARS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt="person avatar"
                    className="size-9 rounded-full border-2 border-background/80 object-cover"
                  />
                ))}
              </div>
              <p className="max-w-xs text-sm text-muted-foreground sm:max-w-none sm:text-left">
                <span className="font-medium text-foreground">12,000+</span>{" "}
                members worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center select-none lg:mt-16 lg:mb-48">
          <div
            className="relative mx-auto h-96 w-full max-w-none"
            style={{ perspective: "500px" }}
          >
            <div
              className="relative h-full w-full touch-none transform-3d"
              style={{
                transform: "translateZ(0)",
              }}
            >
              <motion.div
                className="pointer-events-none absolute top-1/2 left-1/2 h-60 w-[87.5rem] -translate-x-1/2 -translate-y-1/2 transform-3d [&_*]:pointer-events-none"
                style={{
                  translateZ: 0,
                  rotateY: rotation,
                }}
              >
                {IMAGES.map((src, i) => (
                  <div
                    key={src}
                    className="absolute flex h-full w-full justify-between transform-3d"
                    style={{
                      transform: `translate3d(0,0,0) rotateY(${i * ANGLE}deg)`,
                    }}
                  >
                    {[90, -90].map((deg) => (
                      <div
                        key={deg}
                        style={{
                          transform: `translate3d(0,0,0) rotateY(${deg}deg)`,
                        }}
                      >
                        <img
                          src={src}
                          alt={`Gallery ${i + 1}`}
                          className="pointer-events-none h-96 w-64 rounded-xl object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>

              <motion.div
                aria-hidden
                className="pointer-events-auto absolute inset-x-0 top-[-10%] bottom-[-10%] z-10 cursor-grab touch-none active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0}
                dragMomentum={false}
                onDragStart={() => {
                  cancelRaf();
                  const d = drag.current;
                  d.base = rotation.get();
                  d.t = performance.now();
                  d.vel = 0;
                }}
                onDrag={(_, { delta, offset }) => {
                  const d = drag.current;
                  const now = performance.now();
                  const dt = now - d.t;
                  if (dt > 0 && dt < 64) {
                    d.vel = (delta.x / dt) * 1.5 * SENS;
                  }
                  d.t = now;
                  rotation.set(d.base + offset.x * SENS);
                }}
                onDragEnd={() => {
                  const d = drag.current;
                  if (Math.abs(d.vel) < STOP) return;
                  cancelRaf();
                  d.raf = requestAnimationFrame(step);
                }}
              />
            </div>
          </div>
          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MoveHorizontal className="size-4 shrink-0" />
            Drag to explore
          </p>
        </div>
      </section>
    </AuroraBackground>
  );
};

export { Hero273 };

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
