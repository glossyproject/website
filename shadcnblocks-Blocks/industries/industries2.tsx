import { Badge } from "@/components/ui/badge";

interface Industry {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

interface Industries2Props {
  badge: string;
  heading: string;
  services: Industry[];
}

const Industries2 = ({
  badge = "Industries",
  heading = "Transforming industries through innovative technology solutions that drive efficiency, growth, and sustainable operations.",
  services = [
    {
      title: "Mining",
      description:
        "Empowering mining operations with advanced automation systems, real-time monitoring solutions, safety management platforms, and resource optimization technologies that maximize efficiency and ensure sustainable extraction practices.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
      imageAlt: "Mining industry icon",
    },
    {
      title: "Finance",
      description:
        "Delivering secure, scalable financial technology solutions including digital banking platforms, payment processing systems, risk management tools, and regulatory compliance frameworks that enable financial institutions to innovate and compete effectively.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
      imageAlt: "Finance industry icon",
    },
    {
      title: "Energy",
      description:
        "Transforming energy operations with smart grid technologies, renewable energy management systems, predictive maintenance solutions, and demand forecasting tools that optimize resource allocation and improve sustainability.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
      imageAlt: "Energy industry icon",
    },
    {
      title: "Construction",
      description:
        "Streamlining construction projects with project management platforms, BIM integration, real-time collaboration tools, and safety monitoring systems that reduce costs, improve timelines, and enhance on-site productivity.",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
      imageAlt: "Construction industry icon",
    },
  ],
}: Industries2Props) => {
  return (
    <section className="py-32">
      <div className="container">
        {/* Header Section */}
        <div className="mb-16">
          {badge && (
            <Badge
              variant="outline"
              className="bg-muted text-primary mb-4 rounded-none border-0 p-2 uppercase"
            >
              {badge}
            </Badge>
          )}
          <h2 className="max-w-2xl text-balance text-3xl font-bold leading-tight lg:text-4xl">
            {heading}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-border border-b pb-8 first:border-t first:pt-8 last:border-b-0"
            >
              <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-12 md:items-center md:gap-8">
                <div className="order-2 md:order-none md:col-span-4">
                  <h3 className="text-foreground text-lg font-semibold md:text-xl">
                    {service.title}
                  </h3>
                </div>
                <div className="order-1 md:order-none md:col-span-2 md:flex md:justify-center">
                  <img
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    className="h-12 w-12 object-contain md:h-16 md:w-16"
                  />
                </div>
                <div className="order-3 md:order-none md:col-span-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Industries2 };
