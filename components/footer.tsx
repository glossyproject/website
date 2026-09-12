import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";
import { features } from "@/components/features";
import { branches } from "@/shadcnblocks-Blocks/cta/cta3";

const NAVIGATION = [
  { label: "Home", href: "#" },
  {
    label: "Layanan",
    href: "#layanan",
    subItems: features.map(({ id, title }) => ({ id, label: title })),
  },
  {
    label: "Cabang",
    href: "#cabang",
    subItems: branches.map(({ id, title }) => ({ id, label: title })),
  },
  { label: "Kontak", href: "#cabang" },
  { label: "Blog", href: "#" },
  { label: "Galeri", href: "#" },
];

const SOCIAL_LINKS = [
  { label: "Linkedin", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
];

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
];

const Footer = () => {
  return (
    <section className="overflow-hidden pt-16 pb-0 sm:pt-20 lg:pt-32">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-15">
          <div className="flex min-w-0 flex-col gap-2">
            <a className="font-medium tracking-tight" href="">
              +62 852-1520-2324
            </a>
            <a
              className="relative break-words text-xl font-semibold tracking-tight sm:text-2xl lg:text-4xl"
              href=""
            >
              admin@glossyautogroup.com
            </a>
          </div>
          <div className="flex gap-12 sm:gap-20 lg:gap-30">
            <ul className="min-w-0 space-y-1">
              <li className="text-foreground/40 mb-5 text-sm font-medium tracking-tight">
                Navigate
              </li>
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-base font-semibold tracking-tight sm:text-lg lg:text-xl"
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <ul className="mt-1 ml-3 space-y-1 border-l pl-3">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.id}>
                          <a
                            href={`#${subItem.id}`}
                            className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <ul className="min-w-0 space-y-1">
              <li className="text-foreground/40 mb-5 text-sm font-medium tracking-tight">
                Social
              </li>
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-base font-semibold tracking-tight sm:text-lg lg:text-xl"
                  >
                    {item.label}{" "}
                    <CircleArrowOutUpRight className="text-muted-foreground/50 group-hover:text-foreground size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 whitespace-nowrap text-[clamp(2rem,9vw,10rem)] font-semibold leading-none tracking-tighter lg:text-right">
          GLOSSY AUTO GROUP<sup className="font-light">&reg;</sup>{" "}
        </div>
        <div className="bg-background text-foreground dark relative mt-12 flex min-h-24 w-full flex-col items-center justify-center gap-4 px-2 py-6 text-center text-sm tracking-tight sm:px-0 lg:mt-20 lg:flex-row lg:justify-between lg:gap-4 lg:py-0 lg:text-left lg:text-base">
          <div className="z-2 relative flex items-center gap-4 lg:gap-10">
            <p className="text-foreground/50">
              &copy;2025 GLOSSY AUTO GROUP All rights reserved
            </p>
          </div>
          <div className="z-2 relative flex flex-wrap items-center justify-center gap-x-4 gap-y-2 lg:gap-10">
            {FOOTER_LINKS.map((item, index) => (
              <a
                href={item.href}
                className="text-foreground/50 hover:text-foreground transition-colors"
                key={index}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="bg-background absolute left-1/2 h-full w-screen -translate-x-1/2" />
        </div>
      </div>
    </section>
  );
};

export { Footer };
