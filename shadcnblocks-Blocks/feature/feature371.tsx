import { CirclePlus } from "lucide-react";

import { cn } from "@/lib/utils";

type StatCard = {
  value: string;
  label: string;
  description?: string;
  logos?: string[];
};

interface Feature371Props {
  descriptionHeading?: string;
  description?: string;
  image?: string;
  stats?: StatCard[];
  className?: string;
}

const Feature371 = ({
  descriptionHeading = "Built for growth, not just launch.",
  description = "We craft digital products that scale with your business. From concept to production, our team focuses on performance, precision, and design systems that stand the test of time.",
  image = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img9.jpeg",
  stats = [
    {
      value: "120+",
      label: "Projects launched worldwide",
      description:
        "From startups to global brands, we’ve helped over 120 clients build meaningful digital experiences that deliver measurable impact.",
    },
    {
      value: "98%",
      label: "Client retention rate",
      logos: [
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      ],
    },
  ],
  className,
}: Feature371Props) => {
  return (
    <section className={cn("bg-muted py-32", className)}>
      <div className="container mx-auto">
        <div className="relative flex flex-col gap-4 md:grid md:auto-rows-[minmax(0,1fr)] md:grid-cols-[repeat(4,minmax(50px,1fr))] md:grid-rows-[repeat(1,minmax(0,1fr))] md:gap-10">
          {/* Left Image */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl border-2 border-muted bg-background md:col-span-2">
            <img
              src={image}
              alt="Why choose us image"
              className="aspect-video h-full w-full object-cover"
            />
            <div className="absolute top-10 right-10">
              <CirclePlus size={20} />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-2 flex flex-col gap-16">
            <div className="w-5/6">
              <p className="col-span-3 indent-10 text-xl font-medium">
                {descriptionHeading}
                <span className="text-muted-foreground">{description}</span>
              </p>
            </div>

            <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
              <div className="order-1 rounded-2xl bg-background p-8 md:order-1">
                <div className="flex items-start justify-between">
                  <div className="text-3xl font-bold md:text-5xl">
                    {stats[0]?.value}
                  </div>
                  <div className="text-xs text-muted-foreground">01</div>
                </div>
              </div>

              <div className="order-3 rounded-2xl bg-background p-8 md:order-2">
                <div className="flex items-start justify-between">
                  <div className="text-3xl font-bold md:text-5xl">
                    {stats[1]?.value}
                  </div>
                  <div className="text-xs text-muted-foreground">02</div>
                </div>
              </div>

              <div className="order-2 flex min-h-80 flex-col justify-between gap-16 rounded-2xl bg-background p-8 md:order-3">
                <div className="text-right">
                  <div className="justify-self-end text-lg font-bold md:w-3/4">
                    {stats[0]?.label}
                  </div>
                </div>
                <div className="text-muted-foreground">
                  {stats[0]?.description}
                </div>
              </div>

              <div className="order-4 flex h-full min-h-80 flex-col justify-between gap-16 rounded-2xl bg-background p-8 md:order-4">
                <div className="text-right">
                  <div className="justify-self-end text-lg font-bold md:w-3/4">
                    {stats[1]?.label}
                  </div>
                </div>
                <div className="flex justify-between gap-3 text-muted-foreground">
                  <div>
                    <img
                      src={stats[1]?.logos?.[0]}
                      alt="logo"
                      className="h-6 w-14"
                    />
                  </div>
                  <div>
                    <img
                      src={stats[1]?.logos?.[1]}
                      alt="logo"
                      className="h-6 w-14"
                    />
                  </div>
                  <div>
                    <img
                      src={stats[1]?.logos?.[2]}
                      alt="logo"
                      className="h-6 w-14"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature371 };
