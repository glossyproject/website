import { Circle, Trophy } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Hero160 = () => {
  return (
    <section className="bg-background dark relative overflow-hidden py-12 font-sans md:py-28">
      <img
        src="https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="aspect-2/1 absolute left-0 top-0 z-10 w-full"
      />
      <div className="bg-linear-to-b absolute inset-0 z-20 from-transparent to-black" />
      <div className="container relative z-20">
        <div className="flex flex-col items-center gap-5">
          <Badge className="border-muted-foreground bg-background hover:bg-background mb-2 flex w-fit items-center gap-2 rounded-full border px-4 py-2">
            <Trophy className="stroke-muted-foreground h-4 w-4" />
            <p className="text-muted-foreground text-sm font-light leading-normal">
              Awarded as the best startup in 2023
            </p>
          </Badge>
          <h1 className="w-full max-w-[37.5rem] bg-[linear-gradient(135deg,theme(colors.muted2.DEFAULT)_25%,theme(colors.muted2.foreground))] bg-clip-text py-2 text-center text-4xl font-normal leading-tight text-transparent md:max-w-[50rem] md:text-5xl xl:max-w-[62.5rem] xl:text-[3.6rem]">
            Skyrocket your profits in no time. Streamline payments, amplify
            sales.
          </h1>
          <p className="text-muted-foreground w-full max-w-[51.875rem] text-center text-xl">
            Establish a robust business workflow and achieve massive growth in
            just 50 days.
          </p>
          <div className="mt-4 flex flex-col items-center gap-4 md:flex-row">
            <Button asChild>
              <a href="#">Start 30 Days Free Trial</a>
            </Button>
            <Button variant="secondary">
              <a href="#">Request Free Demo</a>
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:flex-row">
            <p className="text-muted-foreground text-sm">
              No Credit Card Required
            </p>
            <Circle className="fill-muted-foreground h-1 w-1" />
            <p className="text-muted-foreground text-sm">Cancel Anytime</p>
          </div>
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-[86.5rem] px-8 py-20 md:py-32">
        <AspectRatio
          ratio={1.562130178 / 1}
          className="overflow-hidden rounded-2xl border border-white/15"
        >
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </AspectRatio>
      </div>
    </section>
  );
};

export { Hero160 };
