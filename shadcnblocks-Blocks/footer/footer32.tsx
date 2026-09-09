import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";

import { RainbowButton } from "@/components/magicui/rainbow-button";

interface Footer32Props {
  preHeading: string;
  heading1: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  email: string;
  socialLinks: {
    link1: {
      url: string;
      label: string;
    };
    link2: {
      url: string;
      label: string;
    };
    link3: {
      url: string;
      label: string;
    };
  };
}

const Footer32 = ({
  preHeading = "Let's connect",
  heading1 = "You want to scale faster? Try Shadcnblocks today.",
  description = "Join thousands of companies already using our platform to scale their operations",
  buttonText = "Get Started Now",
  buttonUrl = "#",
  email = "hello@company.com",
  socialLinks = {
    link1: {
      url: "#",
      label: "Twitter",
    },
    link2: {
      url: "#",
      label: "Instagram",
    },
    link3: {
      url: "#",
      label: "Facebook",
    },
  },
}: Footer32Props) => {
  return (
    <section className="relative py-32">
      <div className="container relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-2 text-center">
          {/* Pre-heading with decorative lines */}
          <div className="flex w-full items-center gap-4">
            <div className="h-px flex-1 bg-[linear-gradient(270deg,var(--primary,rgb(255,255,255))_0%,var(--secondary,rgb(0,0,0))_100%)] opacity-50" />
            <p className="text-muted-foreground text-sm italic md:text-base">
              {preHeading}
            </p>
            <div className="h-px flex-1 bg-[linear-gradient(270deg,var(--secondary,rgb(0,0,0))_0%,var(--primary,rgb(255,255,255))_100%)] opacity-50" />
          </div>

          {/* Main heading */}
          <h2 className="md:text-65xl py-6 text-6xl">{heading1}</h2>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl text-base md:text-lg">
            {description}
          </p>

          <RainbowButton asChild variant="outline">
            <a
              href={buttonUrl}
              className="group relative mt-4 block rounded-lg border bg-white px-8 py-6 text-base transition-all"
            >
              <span className="text-secondary-foreground">{buttonText}</span>
              <ArrowUpRight className="text-foreground h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </RainbowButton>

          {/* Social Media Links */}
          <div className="flex items-center gap-6 pt-8">
            <a
              href={socialLinks.link1.url}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={socialLinks.link1.label}
            >
              <Twitter className="h-5 w-5" />
            </a>
            <div className="bg-border h-4 w-px" />
            <a
              href={socialLinks.link2.url}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={socialLinks.link2.label}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <div className="bg-border h-4 w-px" />
            <a
              href={socialLinks.link3.url}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={socialLinks.link3.label}
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>

          {/* Support Email */}
          <p className="text-muted-foreground pt-2 text-sm md:text-base">
            <a
              href={`mailto:${email}`}
              className="hover:text-foreground transition-colors"
            >
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export { Footer32 };
