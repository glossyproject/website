import React from "react";

import { DottedGlowBackground } from "@/components/aceternity/dotted-glow-background";
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  description: string;
}

interface Certification {
  src: string;
  alt: string;
  status: string;
}

interface Compliance7Props {
  heading?: string;
  description?: string;
  features?: Feature[];
  certifications?: Certification[];
  complianceHeading?: string;
  complianceDescription?: string;
}

const defaultFeatures = [
  {
    title: "Advanced API Framework",
    description:
      "Robust APIs designed for effortless integration and accelerated deployment cycles.",
  },
  {
    title: "Always-On Support",
    description:
      "Continuous technical assistance to ensure your systems operate without interruption.",
  },
  {
    title: "Protected Data Storage",
    description:
      "Enterprise-level data storage infrastructure with robust security protocols and streamlined data management.",
  },
  {
    title: "Industry Compliance Ready",
    description:
      "Built to meet international standards ensuring complete regulatory confidence.",
  },
];

const defaultCertifications = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/AICPA-SOC.svg",
    alt: "AICPA SOC 2",
    status: "IN PROGRESS",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/compliance/ISO-27001.svg",
    alt: "ISO 27001",
    status: "IN PROGRESS",
  },
];

const FeatureItem = ({ title, description }: Feature) => {
  return (
    <div className="flex flex-col gap-2">
      <p className="font-semibold">{title}</p>
      <p className="text-muted-foreground font-medium">{description}</p>
    </div>
  );
};

const Compliance7 = ({
  heading = "Enterprise-Grade Cloud Infrastructure Platform",
  description = "A comprehensive cloud infrastructure solution built for modern enterprises, delivering exceptional security and performance at scale.",
  features = defaultFeatures,
  certifications = defaultCertifications,
  complianceHeading = "Security and Scalability",
  complianceDescription = "Platform engineered for maximum security and unlimited growth potential, pursuing SOC2 Type 2 and ISO27001 certifications.",
}: Compliance7Props = {}) => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="relative grid lg:grid-cols-2">
          <div className="absolute top-0 h-5 w-full">
            <DottedGlowBackground
              radius={1.2}
              gap={6}
              speedMin={0.2}
              speedMax={5}
              speedScale={1}
              darkColor="rgba(255, 255, 255, 0.7)"
            />
          </div>
          <div className="absolute bottom-0 h-5 w-full">
            <DottedGlowBackground
              radius={1.2}
              gap={6}
              speedMin={0.2}
              speedMax={5}
              speedScale={1}
              darkColor="rgba(255, 255, 255, 0.7)"
            />
          </div>

          <div className="flex flex-col">
            <div className="from-foreground/10 to-background border border-dashed bg-gradient-to-b p-10 sm:p-20">
              <FeatureItem title={heading} description={description} />
            </div>
            <div className="grid gap-10 border border-t-0 border-dashed p-10 sm:p-20 md:grid-cols-2">
              {features.map((feature) => (
                <FeatureItem
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          <div className="dark:from-foreground/20 from-foreground/10 to-background flex h-full flex-col items-center justify-center gap-20 border border-l-0 border-dashed bg-gradient-to-tr to-30% p-10 sm:p-20">
            <div className="flex items-center gap-4 sm:gap-10">
              {certifications.map((certification) => {
                return (
                  <div
                    key={certification.alt}
                    className="flex flex-col items-center justify-center gap-2"
                  >
                    <Badge variant="outline">{certification.status}</Badge>
                    <img
                      src={certification.src}
                      alt={certification.alt}
                      className="sm:size-34 size-28 dark:invert"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-2 text-center">
              <p className="text-4xl font-semibold">{complianceHeading}</p>
              <p className="text-muted-foreground font-medium">
                {complianceDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Compliance7 };
