import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero179 = () => {
  return (
    <section className="border-muted bg-background relative border-b">
      <div className="container pt-10">
        <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">
          <div className="flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
            <p className="text-muted-foreground font-mono text-[clamp(0.875rem,0.875vw,1rem)]">
              Shared Inbox
            </p>
            <h1 className="text-foreground text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em]">
              Organize
              <br />
              Your Inbox
            </h1>
            <p className="text-muted-foreground text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal">
              Your email account doesn’t have to feel like chaos. A shared inbox
              unites all your email aliases, social messages, and teammates in
              one space, ensuring everyone gets the answers they need.
            </p>
          </div>
          <div>
            <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2">
              <div className="absolute bottom-0 right-0 w-[85%] overflow-hidden rounded-lg">
                <AspectRatio ratio={0.918918919 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                    alt=""
                    className="object-top-left block size-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="absolute bottom-0 right-0 w-[93%] overflow-hidden rounded-tl-lg shadow-md">
                <AspectRatio ratio={1.381308411 / 1}>
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-2.svg"
                    alt=""
                    className="block size-full object-cover object-center"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero179 };
