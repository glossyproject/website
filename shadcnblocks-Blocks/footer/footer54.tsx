
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

interface Footer54Props extends FooterBasicProps {}
type Props = Partial<Footer54Props>;

const defaultProps: Footer54Props = {
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

const MAX_SECTIONS = 4;

const Footer54 = (props: Props) => {
  const {
    logo,
    description,
    sections,
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
    <section className={cn("py-16 lg:py-20", className)}>
      <div className="container mx-auto">
        <footer className="flex w-full flex-col items-center text-center">
          <a href={logo?.url ?? "#"} className="inline-flex">
            <img
              src={logo?.src ?? ""}
              alt={logo?.alt ?? ""}
              title={logo?.title ?? ""}
              className="h-7 dark:invert"
            />
          </a>
          <p className="mt-4 max-w-lg text-sm font-medium text-muted-foreground">
            {description}
          </p>
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            {socialLinks?.map((social, idx) => (
              <li key={idx} className="font-medium hover:text-primary">
                <a href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-12 grid w-full grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx} className="text-left">
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
          <div className="mt-8 flex w-full flex-col items-center gap-4 border-t border-border pt-8 text-xs font-medium text-muted-foreground md:flex-row md:justify-between md:text-left">
            <p>{copyright}</p>
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:justify-end">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer54 };
