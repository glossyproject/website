import { Button } from "@/components/ui/button";

const Hero59 = () => {
  return (
    <section className="bg-background dark relative h-screen">
      <div className="container relative z-10 mx-auto flex size-full max-w-3xl flex-col justify-center gap-4 lg:items-center lg:text-center">
        <span className="text-muted-foreground text-xs">
          BETA RELEASE AVAILABLE
        </span>
        <h1 className="text-foreground text-5xl font-bold lg:text-[4.2rem]">
          Unveiling MyBusiness Edition 1
        </h1>
        <p className="text-muted-foreground text-lg">
          Tailor and oversee any creative process from start to finish with
          unprecedented speed and efficiency.
        </p>
        <div className="flex lg:justify-center">
          <div className="flex min-w-fit flex-col gap-5 whitespace-nowrap text-sm leading-[.96] lg:flex-row lg:items-stretch">
            <Button className="h-fit flex-1 rounded-full px-6 py-3.5">
              Enroll in Beta
            </Button>
            <Button
              variant="outline"
              className="text-foreground h-fit flex-1 rounded-full border border-white/50 bg-transparent px-6 py-3.5 hover:bg-transparent"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
      <video
        loop
        playsInline
        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/video-5.mp4"
        className="absolute left-0 top-0 size-full object-cover"
        autoPlay
        muted
      />
    </section>
  );
};

export { Hero59 };
