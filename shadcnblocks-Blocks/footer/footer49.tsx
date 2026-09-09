import { ArrowRight } from "lucide-react";
import React from "react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  label: string;
}

interface MenuLink {
  text: string;
  url: string;
  isExpandable?: boolean;
  accordionItems?: {
    text: string;
    url: string;
  }[];
}

interface MenuItem {
  title: string;
  links: MenuLink[];
}

interface CTA {
  text: string;
  url: string;
  avatar?: string;
}

const SocialLinks = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
  return (
    <div className="flex gap-2">
      {socialLinks.map((socialLink) => {
        const Icon = socialLink.icon;
        return (
          <a href={socialLink.url} key={socialLink.label}>
            <Button key={socialLink.label} variant="outline" size="icon">
              <Icon className="size-6" />
            </Button>
          </a>
        );
      })}
    </div>
  );
};

const CTA = ({ cta }: { cta: CTA }) => {
  return (
    <a href={cta.url}>
      <div className="flex items-center gap-3">
        <img src={cta.avatar} alt={cta.text} className="size-8 rounded-full" />
        <p className="text-sm font-medium">{cta.text}</p>
        <div className="flex flex-1 justify-end">
          <ArrowRight size={16} />
        </div>
      </div>
    </a>
  );
};

const MenuLink = ({ link }: { link: MenuLink }) => {
  if (link.isExpandable) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem value={link.text}>
          <AccordionTrigger className="py-0 font-normal text-muted-foreground transition-colors hover:text-foreground">
            {link.text}
          </AccordionTrigger>
          <AccordionContent className="mt-4 flex flex-col gap-4">
            {link.accordionItems?.map((item) => {
              return (
                <a
                  key={item.text}
                  href={item.url}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.text}
                </a>
              );
            })}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  } else
    return (
      <a
        href={link.url}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        {link.text}
      </a>
    );
};

const MenuItem = ({ menuItem }: { menuItem: MenuItem }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-medium">{menuItem.title}</h3>
      {menuItem.links.map((link) => {
        return <MenuLink key={`${menuItem.title}-${link.text}`} link={link} />;
      })}
    </div>
  );
};

interface Footer49Props {
  logo?: {
    src: string;
    alt: string;
    url: string;
    className?: string;
  };
  socialLinks?: SocialLink[];
  tagline?: string;
  cta?: CTA;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
  className?: string;
}

const Footer49 = ({
  logo = {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "Shadcnblocks Logo",
    url: "https://shadcnblocks.com",
  },
  socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://shadcnblocks.com",
      label: "LinkedIn",
    },
    {
      icon: FaXTwitter,
      url: "https://shadcnblocks.com",
      label: "Twitter",
    },
  ],
  tagline = "Modern Development Platform For Fast-Moving Teams",
  cta = {
    text: "Start Building Free",
    url: "https://shadcnblocks.com",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/portraits/christian-buehner-DItYlc26zVI-unsplash 1.jpg",
  },
  menuItems = [
    {
      title: "Platform",
      links: [
        { text: "Developer API", url: "https://shadcnblocks.com" },
        { text: "Integrations", url: "https://shadcnblocks.com" },
        { text: "Infrastructure", url: "https://shadcnblocks.com" },
      ],
    },
    {
      title: "Solutions",
      links: [
        {
          text: "By Technology",
          url: "https://shadcnblocks.com",
          isExpandable: true,
          accordionItems: [
            { text: "React & Next.js", url: "https://shadcnblocks.com" },
            { text: "Vue & Nuxt", url: "https://shadcnblocks.com" },
            { text: "Node.js", url: "https://shadcnblocks.com" },
            { text: "Python", url: "https://shadcnblocks.com" },
            { text: "Go", url: "https://shadcnblocks.com" },
          ],
        },
        {
          text: "By Use Case",
          url: "https://shadcnblocks.com",
          isExpandable: true,
          accordionItems: [
            { text: "CI/CD Pipeline", url: "https://shadcnblocks.com" },
            { text: "API Development", url: "https://shadcnblocks.com" },
            { text: "Microservices", url: "https://shadcnblocks.com" },
            { text: "Cloud Native", url: "https://shadcnblocks.com" },
            { text: "DevOps", url: "https://shadcnblocks.com" },
          ],
        },
      ],
    },
    {
      title: "Developers",
      links: [{ text: "Developer Portal", url: "https://shadcnblocks.com" }],
    },
    {
      title: "Resources",
      links: [
        { text: "Documentation", url: "https://shadcnblocks.com" },
        { text: "API Reference", url: "https://shadcnblocks.com" },
        { text: "Code Examples", url: "https://shadcnblocks.com" },
        { text: "Tutorials", url: "https://shadcnblocks.com" },
        { text: "Changelog", url: "https://shadcnblocks.com" },
        { text: "GitHub", url: "https://shadcnblocks.com" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "https://shadcnblocks.com" },
        { text: "Blog", url: "https://shadcnblocks.com" },
        { text: "Careers", url: "https://shadcnblocks.com" },
        { text: "Support", url: "https://shadcnblocks.com" },
        { text: "Partners", url: "https://shadcnblocks.com" },
      ],
    },
  ],
  copyright = "© 2025 DevFlow Technologies, Inc. All rights reserved.",
  bottomLinks = [
    { text: "hello@example.com", url: "mailto:hello@example.com" },
    { text: "support@example.com", url: "mailto:support@example.com" },
    { text: "(555) 867-5309", url: "tel:5558675309" },
    { text: "Terms of Service", url: "https://shadcnblocks.com" },
    { text: "Licenses", url: "https://shadcnblocks.com" },
  ],
  className,
}: Footer49Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col justify-between gap-10 lg:flex-row">
            <div className="flex flex-col items-start">
              <img src={logo.src} alt={logo.alt} className="h-10 dark:invert" />

              <div className="mt-16 flex gap-2">
                <SocialLinks socialLinks={socialLinks} />
              </div>

              <p className="mt-4 max-w-sm border-b pb-4 text-2xl font-medium">
                {tagline}
              </p>

              <div className="mt-4">
                <CTA cta={cta} />
              </div>
            </div>

            <div className="flex flex-wrap items-start gap-10">
              {menuItems.map((menuItem) => {
                return <MenuItem key={menuItem.title} menuItem={menuItem} />;
              })}
            </div>
          </div>
          <div className="flex w-full flex-col justify-between gap-4 text-xs text-muted-foreground lg:flex-row">
            <p className="shrink-0">{copyright}</p>

            <div className="flex flex-wrap gap-4 md:gap-0">
              {bottomLinks.map((link) => {
                return (
                  <a
                    key={link.text}
                    href={link.url}
                    className="border-foreground transition-colors last:border-r-0 hover:text-foreground md:border-r-2 md:px-6"
                  >
                    {link.text}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer49 };
