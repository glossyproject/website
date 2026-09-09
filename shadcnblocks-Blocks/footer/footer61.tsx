
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

interface FooterCompactProps {
  logo?: FooterLogo;
  sections?: FooterSection[];
  socialLinks?: FooterSocialLink[];
  copyright?: string;
  legalLinks?: FooterLink[];
  className?: string;
}

interface Footer61Props extends FooterCompactProps {}
type Props = Partial<Footer61Props>;

const defaultProps: Footer61Props = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  sections: [
    {
      title: "Menu",
      links: [
        { name: "Home", href: "#" },
        { name: "Features", href: "#" },
        { name: "About", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Contact", href: "#" },
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

const MAX_SECTIONS = 1;

const Footer61 = (props: Props) => {
  const { logo, sections, socialLinks, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);
  const quickLinks = visibleSections.flatMap((s) => s.links);
  const hasMeta = Boolean(copyright) || (legalLinks && legalLinks.length > 0);

  return (
    <section className={cn("py-8 lg:py-10", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 lg:justify-between">
            <a href={logo?.url ?? "#"} className="inline-flex shrink-0">
              <img
                src={logo?.src ?? ""}
                alt={logo?.alt ?? ""}
                title={logo?.title ?? ""}
                className="h-6 dark:invert"
              />
            </a>
            <nav
              aria-label="Footer"
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground lg:flex-1 lg:justify-center"
            >
              {quickLinks.map((link, idx) => (
                <a
                  key={`${idx}-${link.name}-${link.href}`}
                  href={link.href}
                  className="hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            {socialLinks && socialLinks.length > 0 ? (
              <ul className="flex flex-wrap items-center justify-center gap-3 text-muted-foreground">
                {socialLinks.map((social, idx) => (
                  <li key={idx} className="font-medium hover:text-primary">
                    <a href={social.href} aria-label={social.label}>
                      <span className="[&_svg]:size-4">{social.icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
            {hasMeta ? (
              <div
                className={cn(
                  "flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-1 border-t border-border pt-3 text-xs font-medium text-muted-foreground",
                  "lg:w-auto lg:border-t-0 lg:border-l lg:border-border lg:pt-0 lg:pl-6",
                )}
              >
                {copyright ? <span>{copyright}</span> : null}
                {legalLinks?.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="underline hover:text-primary"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer61 };
