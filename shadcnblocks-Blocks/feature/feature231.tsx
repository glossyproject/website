import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Modern",
    description:
      "Built with the latest web technologies for speed and performance",
  },
  {
    title: "Responsive",
    description: "Designed to work perfectly on any device and screen size",
  },
  {
    title: "Customizable",
    description: "Easily adapt to your brand with powerful theming options",
  },
  {
    title: "Accessible",
    description: "Created with accessibility in mind to support all users",
  },
];

const Feature231 = () => {
  return (
    <section className="bg-background relative overflow-hidden py-24 md:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-8">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="text-muted-foreground mb-2 block">
                Blocks built with
              </span>
              <span className="text-primary mb-2 block">Shadcn</span>
              <span className="block">& Tailwind</span>
            </h1>

            <hr className="border-border w-24 border-t-2" />

            <p className="text-muted-foreground max-w-md text-lg">
              Create stunning web experiences with our premium components.
              Modern, responsive, and beautifully crafted for your next project.
            </p>

            <div className="flex space-x-4">
              <Button size="lg">
                Get Started
                <ArrowRight />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-border bg-card rounded-lg border p-6 shadow-sm transition-all"
              >
                <div className="bg-primary/10 mb-4 flex h-8 w-8 items-center justify-center rounded-full">
                  <span className="text-primary font-bold">{index + 1}</span>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature231 };
