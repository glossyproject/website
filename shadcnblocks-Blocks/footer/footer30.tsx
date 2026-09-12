import { CircleArrowOutUpRight } from "lucide-react";
import React from "react";

const NAVIGATION = [
  { label: "Home", href: "#" },
  { label: "Collection", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Login", href: "#" },
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

const Footer30 = () => {
  return (
    <section className="pt-32 pb-0">
      <div className="container">
        <div className="gap-15 flex flex-col justify-between lg:flex-row">
          <div className="flex flex-col gap-2">
            <a className="font-medium tracking-tight" href="">
              +1 (120) 233-01231
            </a>
            <a
              className="relative text-3xl font-semibold tracking-tight lg:text-4xl"
              href=""
            >
              yo@shadcnblocks.com
            </a>
          </div>
          <div className="gap-30 flex">
            <ul className="space-y-1">
              <li className="text-foreground/40 mb-5 text-sm font-medium tracking-tight">
                Navigate
              </li>
              {NAVIGATION.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xl font-semibold tracking-tight"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              <li className="text-foreground/40 mb-5 text-sm font-medium tracking-tight">
                Social
              </li>
              {SOCIAL_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-2 text-xl font-semibold tracking-tight"
                  >
                    {item.label}{" "}
                    <CircleArrowOutUpRight className="text-muted-foreground/50 group-hover:text-foreground size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-[13vw] font-semibold tracking-tighter lg:text-right lg:text-[10vw]">
          Shadcnblocks<sup className="font-light">&reg;</sup>{" "}
        </div>
        <div className="bg-background text-foreground lg:h-30 dark relative mt-20 flex h-24 w-full flex-col items-center justify-center gap-2 text-sm tracking-tight lg:flex-row lg:justify-between lg:gap-4 lg:text-base">
          <div className="z-2 relative flex items-center gap-4 lg:gap-10">
            <p className="text-foreground/50">
              &copy;2025 shadcnblocks All rights reserved
            </p>
          </div>
          <div className="z-2 relative flex items-center gap-4 lg:gap-10">
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

export { Footer30 };
