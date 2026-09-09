import { Button } from "@/components/ui/button";

const Feature161 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="border-muted-foreground/25 relative grid grid-cols-1 grid-rows-2 border lg:grid-cols-2 lg:grid-rows-1">
          <div className="bg-muted-foreground/25 absolute left-[-1px] top-[-16px] h-4 w-[1px]" />
          <div className="bg-muted-foreground/25 absolute left-[-16px] top-[-1px] h-[1px] w-4" />
          <div className="bg-muted-foreground/25 absolute bottom-[-16px] left-[-1px] h-4 w-[1px]" />
          <div className="bg-muted-foreground/25 absolute bottom-0 left-[-16px] h-[1px] w-4" />
          <div className="border-muted-foreground/25 relative border-b p-6 md:p-16 lg:border-b-0 lg:border-r">
            <div className="bg-muted-foreground/25 absolute right-[-1px] top-[-16px] hidden h-4 w-[1px] lg:block" />
            <div className="bg-muted-foreground/25 absolute bottom-[-16px] right-[-1px] h-4 w-[1px]" />
            <h1 className="flex-row text-4xl font-bold">
              Award winning components
            </h1>
            <h3 className="text-muted-foreground mb-6 mt-2 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia,
              blanditiis.
            </h3>
            <div className="flex items-center gap-3">
              <Button>Get Started</Button>
              <Button variant="outline">Docs</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-7">
            <div className="row-start-1 row-end-2 flex justify-evenly">
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
            </div>
            <div className="border-muted-foreground/25 row-start-2 row-end-7 flex items-center justify-center gap-8 border-b border-t">
              <div className="flex flex-col items-center gap-8 py-12 md:flex-row">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-daily.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-weekly.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/ph-kitty.svg"
                  alt="logo"
                  className="h-14 object-cover"
                />
              </div>
            </div>
            <div className="row-start-7 row-end-8 flex justify-evenly">
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
              <div className="bg-muted-foreground/25 h-full w-[1px]" />
            </div>
          </div>
          <div className="bg-muted-foreground/25 absolute right-[-1px] top-[-16px] h-4 w-[1px]" />
          <div className="bg-muted-foreground/25 absolute right-[-16px] top-[-1px] h-[1px] w-4" />
          <div className="bg-muted-foreground/25 absolute bottom-[-16px] right-[-1px] h-4 w-[1px]" />
          <div className="bg-muted-foreground/25 absolute bottom-[-1px] right-[-16px] h-[1px] w-4" />
        </div>
      </div>
    </section>
  );
};

export { Feature161 };
