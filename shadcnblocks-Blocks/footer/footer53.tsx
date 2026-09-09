
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
}
interface FooterSection {
  title: string;
  links: FooterLink[];
}
interface FooterSocialLink {
  icon: React.ReactNode;
  href: string;
  label: string;
}
interface FooterLogo {
  url: string;
  src: string;
  alt: string;
  title: string;
}

interface FooterBasicProps {
  logo?: FooterLogo;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer53Props extends FooterBasicProps {}
type Props = Partial<Footer53Props>;

const defaultProps: Footer53Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  description: "Finely crafted blocks built with Shadcn UI.",
  sections: [
    {
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Status", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
      ],
    },
  ],
  socialLinks: [
    {
      icon: <FaInstagram className="size-5" />,
      href: "#",
      label: "Instagram",
    },
    { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
    { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
    { icon: <FaGithub className="size-5" />, href: "#", label: "GitHub" },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 3;

const copyrightBarBg =
  "bg-[color-mix(in_oklch,var(--muted)_90%,var(--foreground)_10%)]";

const Footer53 = (props: Props) => {
  const {
    logo,
    sections,
    description,
    socialLinks,
    copyright,
    legalLinks,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("bg-muted", className)}>
      <div className="container mx-auto py-16 lg:py-20">
        <footer>
          <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
            <div className="flex w-full max-w-md flex-col gap-6 lg:items-start">
              <div className="flex items-center gap-2 lg:justify-start">
                <a href={logo?.url ?? "#"}>
                  <img
                    src={logo?.src ?? ""}
                    alt={logo?.alt ?? ""}
                    title={logo?.title ?? ""}
                    className="h-7 dark:invert"
                  />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">{description}</p>
              <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {socialLinks?.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={social.href} aria-label={social.label}>
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid w-full gap-8 md:grid-cols-3 lg:max-w-3xl lg:gap-10">
              {visibleSections.map((section, sectionIdx) => (
                <div key={sectionIdx}>
                  <h3 className="mb-4 text-sm font-semibold tracking-tight">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-sm text-muted-foreground">
                    {section.links.map((link, linkIdx) => (
                      <li
                        key={linkIdx}
                        className="font-medium hover:text-primary"
                      >
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
      <div className={cn("border-t border-border/60", copyrightBarBg)}>
        <div className="container mx-auto flex flex-col justify-between gap-4 py-4 text-xs font-medium text-muted-foreground md:flex-row md:items-center">
          <p className="order-2 md:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row md:flex-wrap md:gap-x-4 md:gap-y-2">
            {legalLinks?.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Footer53 };
