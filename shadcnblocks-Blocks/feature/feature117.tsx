import { ChevronRight, Zap } from "lucide-react";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Feature117 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h1 className="mb-4 text-center text-4xl font-semibold">
          Versatile Designs
        </h1>
        <p className="text-muted-foreground text-center">
          Personalize the box to fit your requirements
        </p>
        <div className="grid gap-5 pt-14 xl:grid-cols-3">
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="bg-linear-to-t from-primary absolute bottom-0 left-0 right-0 top-0 translate-y-20 rounded-xl to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="bg-primary text-background ml-auto flex w-fit items-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold">
                <Zap className="fill-background h-auto w-6" />
                Advanced tools
              </span>
              <div className="text-background flex flex-col gap-5">
                <h4 className="text-2xl font-semibold lg:text-3xl">
                  Transform your website into a market leader.
                </h4>
                <p className="flex items-center gap-1 font-medium">
                  Explore all features
                  <ChevronRight className="h-auto w-4" />
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="bg-linear-to-t from-primary absolute bottom-0 left-0 right-0 top-0 translate-y-20 rounded-xl to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="bg-background/30 ml-auto flex w-fit items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold backdrop-blur-sm">
                <Avatar className="size-7 rounded-full">
                  <AvatarImage
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                    alt="placeholder"
                  />
                </Avatar>
                Tailored for experts
              </span>
              <div className="text-background flex flex-col gap-5">
                <h4 className="text-2xl font-semibold lg:text-3xl">
                  Elevate your platform to the next level.
                </h4>
                <p className="flex items-center gap-1 font-medium">
                  Explore all features
                  <ChevronRight className="h-auto w-4" />
                </p>
              </div>
            </div>
          </a>
          <a href="#" className="group relative overflow-hidden rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1647715360138-33fb6fe68539?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="h-full max-h-[450px] w-full rounded-xl object-cover object-center"
            />
            <div className="bg-linear-to-t from-primary absolute bottom-0 left-0 right-0 top-0 translate-y-20 rounded-xl to-transparent transition-transform duration-300 group-hover:translate-y-0"></div>
            <div className="absolute top-0 flex h-full w-full flex-col justify-between p-7">
              <span className="text-background ml-auto flex w-fit items-center gap-1 p-2.5 text-sm font-semibold">
                <Zap className="fill-background h-auto w-6" />
                Latest Collection
              </span>
              <div className="text-background flex flex-col gap-5">
                <h4 className="text-2xl font-semibold lg:text-3xl">
                  Redefine your industry leadership.
                </h4>
                <p className="flex items-center gap-1 font-medium">
                  Explore all features
                  <ChevronRight className="h-auto w-4" />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export { Feature117 };
