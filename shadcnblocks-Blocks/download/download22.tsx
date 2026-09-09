import { cn } from "@/lib/utils";

interface Download22Props {
  className?: string;
}

const Download22 = ({ className }: Download22Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <h2 className="text-5xl font-bold md:text-6xl">Get the app.</h2>
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl bg-muted/50">
            <div className="mx-8 mt-6 mb-12 flex flex-col gap-5">
              <h3 className="text-4xl font-semibold md:text-5xl">iOS</h3>
              <p className="max-w-md text-muted-foreground">
                Download for iPhone and iPad from the App Store.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.png"
                    alt="Download on the App Store"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
            <div className="relative max-h-96 overflow-hidden pl-32 sm:pl-32">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                alt="App preview"
                className="max-h-96 w-full rounded-tl-xl border-t border-l border-border object-cover"
              />
              <div className="absolute -bottom-16 left-10 isolate sm:left-10">
                <div className="h-full max-h-96 w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-1.png"
                    alt="Phone frame"
                    className="max-h-[60vw] sm:max-h-96 lg:max-h-80 xl:max-h-96"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                    alt=""
                    className="absolute top-0 left-0 -z-10 h-full w-full rounded-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-muted/50">
            <div className="mx-8 mt-6 mb-12 flex flex-col gap-5">
              <h3 className="text-4xl font-semibold md:text-5xl">Android</h3>
              <p className="max-w-md text-muted-foreground">
                Install from Google Play on phones and tablets.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="#">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.png"
                    alt="Get it on Google Play"
                    className="h-10"
                  />
                </a>
              </div>
            </div>
            <div className="relative max-h-96 overflow-hidden pl-32 sm:pl-32">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                alt="App preview"
                className="max-h-96 w-full rounded-tl-xl border-t border-l border-border object-cover"
              />
              <div className="absolute -bottom-16 left-10 isolate sm:left-10">
                <div className="h-full max-h-96 w-full">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/mockups/phone-1.png"
                    alt="Phone frame"
                    className="max-h-[60vw] sm:max-h-96 lg:max-h-80 xl:max-h-96"
                  />
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-7-tall.svg"
                    alt=""
                    className="absolute top-0 left-0 -z-10 h-full w-full rounded-4xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download22 };
