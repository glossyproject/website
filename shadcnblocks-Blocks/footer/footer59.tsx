
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

interface Footer59Props extends FooterCompactProps {}
type Props = Partial<Footer59Props>;

const defaultProps: Footer59Props = {
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

/** Footer-compact uses one menu: first section only, all of its links in the bar */
const MAX_SECTIONS = 1;

const Footer59 = (props: Props) => {
  const { logo, sections, socialLinks, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);
  const quickLinks = visibleSections.flatMap((s) => s.links);
  const hasMeta =
    Boolean(copyright) || Boolean(legalLinks && legalLinks.length > 0);

  return (
    <section className={cn("py-8 lg:py-10", className)}>
      <div className="container mx-auto">
        <footer className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
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
              className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground lg:flex-1 lg:justify-center"
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
            <ul className="flex w-full flex-wrap items-center justify-center gap-3 text-muted-foreground lg:w-auto lg:justify-end">
              {socialLinks?.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    <span className="[&_svg]:size-4">{social.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {hasMeta ? (
            <div className="flex w-full flex-col items-center gap-3 text-xs font-medium text-muted-foreground lg:flex-row lg:justify-between">
              {copyright ? (
                <p className="text-center lg:text-left">{copyright}</p>
              ) : null}
              {legalLinks && legalLinks.length > 0 ? (
                <ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 lg:justify-end">
                  {legalLinks.map((link, idx) => (
                    <li key={idx} className="underline hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </footer>
      </div>
    </section>
  );
};

export { Footer59 };
