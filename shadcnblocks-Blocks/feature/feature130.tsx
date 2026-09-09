"use client";

import { Code, MessageCircle, Text } from "lucide-react";

const Feature130 = () => {
  return (
    <section className="container py-32">
      <h2 className="text-2xl font-semibold md:text-4xl">
        Various integrations to help you grow your business
      </h2>
      <div className="mb-6 mt-12 flex flex-col gap-6 xl:flex-row">
        <div className="bg-card text-card-foreground flex w-full flex-col justify-between overflow-hidden rounded-2xl border px-12 pt-12 shadow-sm">
          <div className="mb-12 flex flex-col gap-3">
            <Code className="size-6" />
            <h4 className="text-xl font-semibold">Copy paste components</h4>
            <p className="text-muted-foreground text-base font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laboriosam voluptatibus temporibus doloremque laudantium.
            </p>
          </div>
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
            alt="placeholder"
            className="max-h-52 w-full rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
          />
        </div>
        <div className="bg-card text-card-foreground w-full overflow-hidden rounded-2xl border shadow-sm">
          <div className="pl-12 pr-12 xl:pl-0">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="max-h-48 w-full rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
            />
          </div>
          <div className="flex flex-col gap-3 p-12">
            <Text className="size-6" />
            <h4 className="text-xl font-semibold">100% customizable</h4>
            <p className="text-muted-foreground text-base font-normal">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
              laboriosam voluptatibus temporibus doloremque laudantium.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-card text-card-foreground flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border shadow-sm md:flex-row">
        <div className="flex w-full flex-col p-12 md:gap-3">
          <MessageCircle className="size-6" />
          <h4 className="text-xl font-semibold">24/7 support</h4>
          <p className="text-muted-foreground text-base font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
            laboriosam voluptatibus temporibus doloremque laudantium.
          </p>
        </div>
        <div className="w-full pl-12 md:pt-12">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
            alt="placeholder"
            className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
          />
        </div>
      </div>
    </section>
  );
};

export { Feature130 };
