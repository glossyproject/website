import { Button } from "@/components/ui/button";

const Hero30 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Welcome to Our Website
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button variant="outline" className="w-full sm:w-auto">
                Secondary
              </Button>
              <Button className="w-full sm:w-auto">Primary</Button>
            </div>
          </div>
          <div className="relative -mb-16 mt-16 flex justify-center gap-4 lg:mb-0 lg:mt-0 lg:justify-end">
            {/* Mesh background */}
            <div className="bg-linear-to-r absolute -inset-8 z-0 rounded-2xl from-amber-100 via-red-200 to-teal-100 opacity-70 blur-3xl"></div>

            {/* Images with relative positioning to appear above the mesh */}
            <div className="relative z-10">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="placeholder hero"
                className="border-border h-[400px] rounded-lg border object-cover object-center sm:max-w-[320px]"
              />
            </div>
            <div className="relative z-10 hidden flex-col gap-4 sm:flex md:hidden 2xl:flex">
              <div className="border-border bg-background w-[256px] flex-1 overflow-clip rounded-lg border"></div>
              <div className="aspect-2/1 border-border bg-background w-[256px] overflow-clip rounded-lg border"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero30 };
