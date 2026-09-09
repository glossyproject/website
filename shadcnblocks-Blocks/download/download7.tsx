import { Iphone15Pro } from "@/components/magicui/iphone-15-pro";
import { Badge } from "@/components/ui/badge";

const Download7 = () => {
  return (
    <section className="overflow-hidden py-32">
      <div className="border-border container border-b">
        <div className="flex flex-col items-center gap-10">
          <Badge variant="outline">Get Started</Badge>
          <h1 className="text-balance text-center text-5xl font-bold md:text-6xl">
            Download our app and transform your workflow today
          </h1>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a href="#">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/appstore.svg" alt="app store" />
          </a>
          <a href="#">
            <img src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/badges/googleplay.svg" alt="google play" />
          </a>
        </div>
        <div className="mt-28 flex items-end justify-center gap-4">
          <div className="order-2 h-[600px] max-w-sm overflow-hidden md:h-[350px] lg:h-[450px] xl:h-[600px]">
            <div className="relative">
              <Iphone15Pro
                className="dark size-full"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-1.svg"
              />
            </div>
          </div>
          <div className="order-1 hidden h-[250px] max-w-sm overflow-hidden md:block lg:h-[350px] xl:h-[450px]">
            <div className="relative">
              <Iphone15Pro
                className="dark size-full"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-2.svg"
              />
            </div>
          </div>
          <div className="order-3 hidden h-[250px] max-w-sm overflow-hidden md:block lg:h-[350px] xl:h-[450px]">
            <div className="relative">
              <Iphone15Pro
                className="dark size-full"
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-phone-3.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download7 };
