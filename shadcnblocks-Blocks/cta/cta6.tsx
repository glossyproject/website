import { Button } from "@/components/ui/button";

const Cta6 = () => {
  return (
    <section className="py-32">
      <div className="border-border bg-accent max-w-full overflow-hidden border-y pt-10 md:pt-16 lg:pt-20">
        <div className="container relative flex flex-col md:flex-row md:space-x-12">
          <div className="mb-[18rem] md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
            <h3 className="mb-3 text-4xl font-semibold md:mb-4 md:text-5xl lg:mb-6">
              Call to Action
            </h3>
            <p className="text-muted-foreground mb-8 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
            <div className="aspect-8/5 relative h-full min-h-[16rem] w-full">
              <div className="aspect-3/5 bg-background shadow-foreground/20 absolute right-0 top-0 z-40 flex w-3/5 -translate-x-[24%] translate-y-[24%] -rotate-[30deg] justify-center overflow-clip rounded-3xl shadow-lg md:max-xl:-translate-x-[8%] md:max-xl:translate-y-[16%]"></div>
              <div className="aspect-3/5 bg-background shadow-foreground/20 absolute right-0 top-0 z-40 flex w-3/5 -translate-x-[16%] translate-y-[8%] -rotate-[15deg] justify-center overflow-clip rounded-3xl shadow-xl md:max-xl:-translate-x-[6%] md:max-xl:translate-y-[6%]"></div>
              <div className="aspect-3/5 bg-background shadow-foreground/20 absolute right-0 top-0 z-40 flex w-3/5 items-center justify-center overflow-clip rounded-3xl shadow-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta6 };
