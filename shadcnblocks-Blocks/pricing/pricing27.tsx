"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const Pricing27 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {/* Main Card */}
          <li className="md:order-1 lg:col-span-1 xl:col-span-2">
            <div className="bg-muted flex h-full flex-col-reverse rounded-lg border md:flex-row">
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <div>
                    <p className="text-lg font-semibold">Glide Solutions</p>
                    <p className="text-muted-foreground mt-3">
                      Get a premium custom solution built by a top Agency
                      Partner, with Glide helping manage development.
                    </p>
                  </div>
                  <p className="text-muted-foreground mt-6 text-sm font-semibold">
                    Starting at
                  </p>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-3xl font-semibold">$10,000</span>
                    <span className="text-muted-foreground ml-2 text-sm">
                      per project
                    </span>
                  </div>
                  <Button size="lg" className="mt-5 w-fit rounded-3xl">
                    Get a free quote
                  </Button>
                </div>

                <div className="mt-8">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 size-4" />
                      <span className="text-muted-foreground text-sm">
                        Work with Glide and an Agency Partner
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 size-4" />
                      <span className="text-muted-foreground text-sm">
                        Import data from 100+ sources
                      </span>
                    </li>
                    <li className="flex items-start">
                      <Check className="text-primary mr-2 size-4" />
                      <span className="text-muted-foreground text-sm">
                        Glide Priority Support
                      </span>
                    </li>
                  </ul>
                  <Button variant="link" className="mt-4 px-0">
                    Learn more
                  </Button>
                </div>
              </div>

              <div className="hidden p-6 md:p-8 xl:block xl:w-[800px] 2xl:w-[960px]">
                <div className="h-full rounded-lg">
                  <img
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                    alt="Glide Solutions"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </li>

          {/* Secondary Card */}
          <li className="bg-card rounded-lg border p-6 md:p-8">
            <div className="flex h-full flex-col justify-between">
              <div>
                <p className="text-lg font-semibold">Hire an Expert</p>
                <p className="text-muted-foreground mt-3">
                  Browse the Expert Directory to find a Glide Certified Expert
                  who best fits your project needs and preferences.
                </p>
                <p className="text-muted-foreground mt-6 text-sm font-semibold">
                  Starting at
                </p>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-semibold">$2,000</span>
                  <span className="text-muted-foreground ml-2 text-sm">
                    per project
                  </span>
                </div>
                <Button
                  size="lg"
                  variant="secondary"
                  className="mt-5 w-fit rounded-3xl"
                >
                  Browse Experts
                </Button>
              </div>

              <div className="mt-8">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 size-4" />
                    <span className="text-muted-foreground text-sm">
                      Hire hourly or by project
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 size-4" />
                    <span className="text-muted-foreground text-sm">
                      Work with a Certified Expert
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-primary mr-2 size-4" />
                    <span className="text-muted-foreground text-sm">
                      Glide Support
                    </span>
                  </li>
                </ul>
                <Button variant="link" className="mt-4 px-0">
                  Learn more
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { Pricing27 };
