"use client";

import { Check } from "lucide-react";

const Services1 = () => {
  const services = [
    {
      title: "Strategy",
      description:
        "We craft a roadmap that aligns with your vision, ensuring every move is purposeful and impactful.",
      subHeading: "STRATEGY SERVICES",
      items: [
        "Market Analysis and Insights",
        "Goal Setting and Roadmapping",
        "Innovation Integration",
      ],
    },
    {
      title: "Consulting",
      description:
        "We collaborate with you to understand your unique needs, offering insights, and practical solutions.",
      items: [
        "Organizational Restructuring",
        "Process Optimization",
        "Performance Analysis and Improvement",
      ],
    },
    {
      title: "Development",
      description:
        "From market entry strategies to partnership development, we act as catalysts for your growth journey.",
      items: [
        "Market Entry Strategies",
        "Partnership Development",
        "Mergers and Acquisitions",
      ],
    },
    {
      title: "Monitoring",
      description:
        "We provide the tools and insights needed to monitor and enhance every facet of your business operations.",
      items: [
        "Real-time Analytics",
        "Performance Metrics Tracking",
        "Risk Management Solutions",
      ],
    },
  ];

  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-foreground mb-4 text-xl font-semibold">
            Services
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="bg-muted rounded-lg p-8">
                <h3 className="text-foreground mb-4 text-base font-medium">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-6 text-xs leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-3">
                      <div className="bg-muted-foreground/20 flex h-4 w-4 items-center justify-center rounded-full">
                        <Check className="text-muted-foreground h-2.5 w-2.5" />
                      </div>
                      <span className="text-foreground text-xs">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Services1 };
