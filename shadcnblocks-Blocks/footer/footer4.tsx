import { FaDiscord, FaTwitter } from "react-icons/fa";

import {
  Logo,
  LogoImageDesktop,
  LogoImageMobile,
} from "@/components/shadcnblocks/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const sections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Pricing", href: "#" },
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
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
    ],
  },
];

interface Footer4Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
    srcMobile: string;
  };
}
const Footer4 = ({
  logo = {
    url: "https://www.shadcnblocks.com",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo-word.svg",
    srcMobile: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
}: Footer4Props) => {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 flex h-full items-center justify-between md:items-start lg:col-span-3 lg:flex-col">
              <Logo url="https://shadcnblocks.com">
                <LogoImageDesktop
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-9"
                />
                <LogoImageMobile
                  src={logo.srcMobile}
                  alt={logo.alt}
                  title={logo.title}
                  className="h-8"
                />
              </Logo>
              <ul className="text-muted-foreground flex items-center space-x-6">
                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaDiscord className="size-6" />
                  </a>
                </li>

                <li className="hover:text-primary font-medium">
                  <a href="#">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            <Separator className="col-span-2 my-6 lg:hidden" />
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="my-14 lg:my-20" />
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 text-3xl font-semibold lg:text-4xl">
                Join our newsletter
              </p>
              <p className="text-muted-foreground">
                Get exclusive news, features, and updates.
              </p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
          <Separator className="my-14 lg:my-20" />
          <div className="text-muted-foreground flex flex-col justify-between gap-4 text-sm font-medium md:flex-row md:items-center">
            <ul className="flex gap-4">
              <li className="hover:text-primary underline">
                <a href="#"> Terms and Conditions</a>
              </li>
              <li className="hover:text-primary underline">
                <a href="#"> Privacy Policy</a>
              </li>
            </ul>
            <p>© 2024 Shadcnblocks.com. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer4 };
