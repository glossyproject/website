import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Footer37Props {
  brandName: string;
  logoSrc: string;
  ctaHeading: string;
  ctaButtonText: string;
  navigationLabel?: string;
  navigationLinks: { text: string; url: string }[];
  socialLinks: { text: string; url: string }[];
  socialLabel?: string;
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterPlaceholder: string;
  newsletterCtaText?: string;
  phone: string;
  email: string;
  location: string;
  copyright: string;
  legalLinks: { text: string; url: string }[];
  className?: string;
}

const Footer37 = ({
  brandName = "ArcFlow",
  logoSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark-white.svg",
  ctaHeading = "Ready to Scale Your Business with AI-Powered Solutions?",
  ctaButtonText = "Get Started Free",
  navigationLabel,
  navigationLinks = [
    { text: "Products", url: "#" },
    { text: "Solutions", url: "#" },
    { text: "Resources", url: "#" },
    { text: "Support", url: "#" },
  ],
  socialLabel,
  socialLinks = [
    { text: "Twitter", url: "#" },
    { text: "LinkedIn", url: "#" },
    { text: "GitHub", url: "#" },
  ],
  newsletterHeading = "Stay Updated",
  newsletterDescription = "Get the latest insights and product updates delivered to your inbox.",
  newsletterPlaceholder = "your@email.com",
  newsletterCtaText,
  phone = "+1 (555) 123-4567",
  email = "hello@arcflow.com",
  location = "123 Innovation Drive, San Francisco, CA 94105, USA",
  copyright = "© 2024 ArcFlow. All rights reserved.",
  legalLinks = [
    { text: "Privacy Policy", url: "#" },
    { text: "Terms of Service", url: "#" },
  ],
  className,
}: Footer37Props) => {
  return (
    <section className={cn("pt-8", className)}>
      <div className="rounded-t-lg bg-primary text-primary-foreground">
        <div className="container px-8 py-16">
          {/* Top CTA Section */}
          <div className="flex flex-col items-start justify-between gap-8 pb-8 lg:flex-row lg:items-center">
            <h2 className="max-w-md text-4xl">{ctaHeading}</h2>
            <Button
              className="rounded-full bg-secondary text-secondary-foreground hover:text-primary-foreground"
              size="lg"
            >
              {ctaButtonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 justify-between gap-8 border-t border-border/20 py-8 lg:grid-cols-2 lg:gap-20">
            {/* Logo Column */}
            <div className="">
              <a href="#">
                <img
                  src={logoSrc}
                  alt={brandName}
                  className="h-12 dark:invert"
                />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Links Column */}
              <div className="flex w-fit flex-col gap-2">
                <h3 className="mb-2">{navigationLabel || "Links"}</h3>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-md text-muted-foreground"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials Column */}
              <div className="flex w-fit flex-col gap-2">
                <h3 className="mb-2">{socialLabel || "Socials"}</h3>
                <ul className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-md text-muted-foreground"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Column */}
              <div className="flex flex-col gap-2">
                <h3 className="mb-2">{newsletterHeading}</h3>
                <p className="text-sm text-muted-foreground">
                  {newsletterDescription}
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder={newsletterPlaceholder}
                    className="rounded-full border-border/10"
                  />
                  <Button className="w-full rounded-full bg-secondary text-secondary-foreground hover:text-primary-foreground">
                    {newsletterCtaText || "Subscribe"}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 gap-8 border-t border-border/20 py-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-muted-foreground/20 p-4">
                <Phone className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p>Phone No:</p>
                <p className="text-sm text-muted/80">{phone}</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center rounded-full bg-muted-foreground/20 p-4">
                <Mail className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <p>Email Address:</p>
                <p className="text-sm text-muted/80">{email}</p>
              </div>
            </div>

            {/* Location & Legal Links */}
            <div className="flex flex-col gap-4">
              {/* Copyright */}

              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center rounded-full bg-muted-foreground/20 p-4">
                  <MapPin className="h-4 w-4 text-primary-foreground" />
                </div>
                <div>
                  <p>Location:</p>
                  <p className="text-sm text-muted/80">{location}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
            <div>
              <p className="text-muted/80 md:text-xs">{copyright}</p>
            </div>

            <div className="flex flex-col gap-4 md:flex-row">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-muted-foreground md:text-xs"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer37 };
