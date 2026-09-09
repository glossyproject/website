import { CheckCircle2, Globe, Lock, Star, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero57 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div
          className="absolute inset-0 top-0 -z-10 mx-auto max-h-[600px] w-full opacity-10"
          style={{
            backgroundImage: `url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/grid3.svg')`,
            backgroundRepeat: "repeat",
            maskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 100% at 50% 30%, #000 40%, transparent 75%)",
          }}
        ></div>
        <h1 className="relative mx-auto mb-8 max-w-3xl flex-wrap text-center text-4xl font-semibold md:mb-10 md:text-6xl md:leading-snug">
          <span>
            Create Winning
            <span className="ml-1 opacity-50">Proposals</span> 10X Faster with
            <Globe className="mx-2 mb-1 inline-block h-auto w-8 md:mx-4 md:mb-3 md:w-14" />
            AI
          </span>
          <div className="border-muted-foreground text-muted-foreground underline-offset-3 absolute -left-20 -top-10 hidden w-fit -rotate-12 gap-1 border-b border-dashed text-sm font-normal lg:flex">
            <Zap className="h-auto w-3" />
            Fast
          </div>
          <div className="border-muted-foreground text-muted-foreground underline-offset-3 absolute -left-24 top-14 hidden w-fit -rotate-12 gap-1 border-b border-dashed text-sm font-normal lg:flex">
            <Lock className="h-auto w-3" />
            Secure
          </div>
          <div className="border-muted-foreground text-muted-foreground underline-offset-3 absolute -right-24 -top-10 hidden w-fit rotate-12 gap-1 border-b border-dashed text-sm font-normal lg:flex">
            Professional
            <Star className="h-auto w-3" />
          </div>
          <div className="border-muted-foreground text-muted-foreground underline-offset-3 absolute -right-28 top-14 hidden w-fit rotate-12 gap-1 border-b border-dashed text-sm font-normal lg:flex">
            Optimized
            <CheckCircle2 className="h-auto w-3" />
          </div>
        </h1>
        <p className="text-muted-foreground mx-auto mb-10 max-w-3xl text-center font-medium md:text-xl">
          Penna let you build high-converting, website-style proposals with AI,
          helping you win better customers without wasting time
        </p>
        <div className="flex flex-col items-center justify-center gap-3 pb-12 pt-3">
          <Button size="lg">Start free 14-day trial</Button>
          <div className="text-muted-foreground text-sm md:text-balance">
            Powered by GPT-4
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero57 };
