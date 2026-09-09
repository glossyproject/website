import { CloudLightning, Compass, Gift, Shield, Star, Zap } from "lucide-react";

const Feature68 = () => {
  const features = [
    {
      icon: <Star />,
      title: "Feature 1",
      description: "Brief description of feature 1",
    },
    {
      icon: <Zap />,
      title: "Feature 2",
      description: "Brief description of feature 2",
    },
    {
      icon: <Shield />,
      title: "Feature 3",
      description: "Brief description of feature 3",
    },
    {
      icon: <Compass />,
      title: "Feature 4",
      description: "Brief description of feature 4",
    },
    {
      icon: <CloudLightning />,
      title: "Feature 5",
      description: "Brief description of feature 5",
    },
    {
      icon: <Gift />,
      title: "Feature 6",
      description: "Brief description of feature 6",
    },
  ];

  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Features
          </h2>
          <p className="text-muted-foreground max-w-prose text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur.
          </p>
        </div>

        <div className="border-border bg-card/50 mt-8 rounded-xl border px-6 py-8 md:px-10 md:py-12">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              return (
                <li key={index} className="flex items-start gap-3">
                  <div className="bg-primary/10 flex size-10 shrink-0 items-center justify-center rounded-sm p-2">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Feature68 };
