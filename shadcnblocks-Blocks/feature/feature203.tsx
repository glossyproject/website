import {
  BoxesIcon,
  CheckIcon,
  HeadphonesIcon,
  PuzzleIcon,
  ShieldCheckIcon,
} from "lucide-react";
import { Fragment } from "react";

import { Separator } from "@/components/ui/separator";

const cards = [
  {
    title: "Product Features",
    description:
      "Discover our comprehensive suite of features designed to enhance workflows.",
    icon: BoxesIcon,
    features: [
      "Real-time collaboration tools",
      "Cross-platform compatibility",
      "Advanced search capabilities",
      "Custom workflow automation",
      "Data analytics dashboard",
      "Cloud storage integration",
      "24/7 technical support",
    ],
  },
  {
    title: "Security",
    description:
      "Enterprise-grade security features to keep your data safe and protected.",
    icon: ShieldCheckIcon,
    features: [
      "Two-factor authentication",
      "End-to-end encryption",
      "Regular security audits",
      "Role-based access control",
      "Data backup & recovery",
      "Compliance monitoring",
      "Security incident response",
    ],
  },
  {
    title: "Integration & APIs",
    description: "Seamlessly connect with your favorite tools and services.",
    icon: PuzzleIcon,
    features: [
      "REST API access",
      "Webhook support",
      "Third-party integrations",
      "Custom API endpoints",
      "Developer documentation",
      "Integration templates",
    ],
  },
  {
    title: "Support & Resources",
    description: "Get the help you need with our comprehensive support system.",
    icon: HeadphonesIcon,
    features: [
      "Priority email support",
      "Video tutorials library",
      "Knowledge base access",
      "Community forums",
      "Regular webinars",
      "Dedicated success manager",
    ],
  },
];

const Feature203 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto grid max-w-3xl gap-9 md:grid-cols-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-muted flex flex-col gap-8 rounded-xl p-9"
            >
              <div className="flex flex-col gap-6">
                <span className="bg-primary flex size-10 items-center justify-center rounded-xl">
                  <card.icon className="text-background size-5" />
                </span>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-2xl font-semibold">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {card.description}
                  </p>
                </div>
              </div>
              <ul className="flex flex-col gap-3.5">
                {card.features.map((feature, idx) => (
                  <Fragment key={idx}>
                    <Separator />
                    <li
                      key={idx}
                      className="text-muted-foreground flex items-center gap-2 text-sm"
                    >
                      <CheckIcon className="text-primary size-4 shrink-0" />
                      {feature}
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature203 };
