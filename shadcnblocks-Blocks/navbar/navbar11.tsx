"use client";
import {
  Book,
  Cloud,
  Code,
  Database,
  Gift,
  Globe,
  Heart,
  Layout,
  MenuIcon,
  Monitor,
  Paintbrush,
  Server,
  Settings,
  Shield,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Terminal,
  Users,
  X,
  Zap,
} from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

interface MenuLink {
  label: string;
  description?: string;
  url: string;
  icon: LucideIcon;
}

interface MenuGroup {
  title: string;
  links: MenuLink[];
}

interface MenuItem {
  title: string;
  url?: string;
  groups?: MenuGroup[];
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

interface MobileNavigationMenuProps {
  open: boolean;
}

const LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
  alt: "logo",
  title: "Shadcnblocks.com",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Products",
    groups: [
      {
        title: "Company Blog",
        links: [
          {
            label: "Insights",
            icon: Book,
            description: "Company news and updates",
            url: "#",
          },
          {
            label: "Engineering",
            icon: Code,
            description: "Technical deep dives",
            url: "#",
          },
          {
            label: "Culture",
            icon: Users,
            description: "Team stories and values",
            url: "#",
          },
          {
            label: "Press",
            icon: Globe,
            description: "Media mentions",
            url: "#",
          },
        ],
      },
      {
        title: "Developer Tools",
        links: [
          {
            label: "API",
            icon: Monitor,
            description: "Access our REST API",
            url: "#",
          },
          {
            label: "CLI",
            icon: Terminal,
            description: "Command line tools",
            url: "#",
          },
          {
            label: "SDKs",
            icon: Code,
            description: "Integrate with our SDKs",
            url: "#",
          },
          {
            label: "Docs",
            icon: Book,
            description: "Complete documentation",
            url: "#",
          },
        ],
      },
      {
        title: "Commerce",
        links: [
          {
            label: "Store",
            icon: ShoppingCart,
            description: "Buy our products",
            url: "#",
          },
          {
            label: "Plans",
            icon: Database,
            description: "Subscription options",
            url: "#",
          },
          {
            label: "Mobile App",
            icon: Smartphone,
            description: "Shop on the go",
            url: "#",
          },
          {
            label: "Gift Cards",
            icon: Gift,
            description: "Send a gift instantly",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Solutions",
    groups: [
      {
        title: "Industries",
        links: [
          {
            label: "E-commerce",
            icon: ShoppingCart,
            description: "Solutions for online stores",
            url: "#",
          },
          {
            label: "SaaS",
            icon: Cloud,
            description: "Tools for SaaS apps",
            url: "#",
          },
          {
            label: "Finance",
            icon: Shield,
            description: "Secure finance apps",
            url: "#",
          },
          {
            label: "Healthcare",
            icon: Heart,
            description: "For medical platforms",
            url: "#",
          },
        ],
      },
      {
        title: "Design System",
        links: [
          {
            label: "Components",
            icon: Layout,
            description: "Reusable UI parts",
            url: "#",
          },
          {
            label: "Tokens",
            icon: Settings,
            description: "Design tokens reference",
            url: "#",
          },
          {
            label: "Icons",
            icon: Sparkles,
            description: "Lucide icon library",
            url: "#",
          },
          {
            label: "Themes",
            icon: Paintbrush,
            description: "UI appearance presets",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Platform",
    groups: [
      {
        title: "Core Services",
        links: [
          {
            label: "Hosting",
            icon: Server,
            description: "Reliable infrastructure",
            url: "#",
          },
          {
            label: "Auth",
            icon: Shield,
            description: "Secure login & roles",
            url: "#",
          },
          {
            label: "Database",
            icon: Database,
            description: "Scalable data storage",
            url: "#",
          },
          {
            label: "Edge Functions",
            icon: Zap,
            description: "Low-latency logic",
            url: "#",
          },
        ],
      },
    ],
  },
  {
    title: "Resources",
    url: "#",
  },
  {
    title: "Pricing",
    url: "#",
  },
];

const DESKTOP_BUTTONS = [
  {
    label: "Contact",
    isPrimary: false,
    url: "#",
  },
  {
    label: "Log in",
    isPrimary: false,
    url: "#",
  },
  {
    label: "Sign up",
    isPrimary: true,
    url: "#",
  },
];

const MOBILE_BUTTONS = [
  {
    label: "Sign up",
    isPrimary: true,
    url: "#",
  },
  {
    label: "Log in",
    isPrimary: false,
    url: "#",
  },
];

const MOBILE_BREAKPOINT = 1024;

const Navbar11 = () => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <Fragment>
      <section className="z-999 bg-background pointer-events-auto fixed top-0 flex h-16 w-full items-center justify-center">
        <div className="container">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-8">
              <a
                href={LOGO.url}
                className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
              >
                <img
                  src={LOGO.src}
                  alt={LOGO.alt}
                  className="inline-block size-6"
                />
                <span className="hidden md:inline-block">{LOGO.title}</span>
              </a>
              <NavigationMenu className="hidden xl:flex" viewport={false}>
                <NavigationMenuList>
                  {NAVIGATION.map((item, index) => (
                    <DesktopMenuItem
                      key={`desktop-link-${index}`}
                      item={item}
                      index={index}
                    />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="hidden items-center gap-3 xl:flex">
              {DESKTOP_BUTTONS.map((btn, index) => (
                <Button
                  size="sm"
                  variant={!btn.isPrimary ? "outline" : "default"}
                  className={
                    btn.isPrimary
                      ? "text-primary-foreground"
                      : "text-foreground"
                  }
                  asChild
                  key={`navbar-btn-${index}`}
                >
                  <a href={btn.url}>{btn.label}</a>
                </Button>
              ))}
            </div>
            <div className="xl:hidden">
              <Button
                className="size-11"
                variant="ghost"
                onClick={handleMobileMenu}
              >
                {open ? (
                  <X className="size-5.5 stroke-foreground" />
                ) : (
                  <MenuIcon className="size-5.5 stroke-foreground" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
      <MobileNavigationMenu open={open} />
    </Fragment>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  if (item.groups) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="text-muted-foreground h-fit bg-transparent px-2.5 font-normal">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-xl !border !p-0">
          <ul className="flex p-2" style={{ width: item.groups.length * 248 }}>
            {item.groups.map((group, index1) => (
              <li className="flex-1" key={`desktop-group-${index1}`}>
                <ul>
                  <li className="text-muted-foreground px-3 py-2 text-sm leading-normal">
                    {group.title}
                  </li>
                  {group.links.map((link, index2) => (
                    <li key={`desktop-links-${index1}-${index2}`}>
                      <NavigationMenuLink
                        asChild
                        className="group/link flex-row gap-2 px-3 py-2 transition-colors duration-200"
                      >
                        <a href={link.url}>
                          <div className="duration-400 fade-in group-hover/link:bg-background flex size-8 shrink-0 rounded-lg border">
                            <link.icon className="m-auto size-4 group-hover/link:stroke-black" />
                          </div>
                          <div className="flex flex-col gap-[2px]">
                            <div className="text-sm font-medium">
                              {link.label}
                            </div>
                            <div className="text-muted-foreground group-hover/link:text-foreground text-xs">
                              {link.description}
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
      <NavigationMenuLink
        href={item.url}
        className={`${navigationMenuTriggerStyle()} text-muted-foreground h-fit bg-transparent px-2.5 font-normal`}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({ open }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="z-998 bg-background dark inset-0 h-dvh w-full pt-[3.9375rem] [&>button]:hidden"
      >
        <div className="h-full overflow-y-auto pb-20 pt-10">
          <div className="container">
            <div className="mask-clip-border absolute -m-px h-px w-px overflow-hidden whitespace-nowrap text-nowrap border-0 p-0">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {MOBILE_BUTTONS.map((btn, index) => (
                  <Button
                    variant={!btn.isPrimary ? "outline" : "default"}
                    className={
                      btn.isPrimary
                        ? "text-primary-foreground"
                        : "text-foreground"
                    }
                    asChild
                    key={`navbar-btn-${index}`}
                  >
                    <a href={btn.url}>{btn.label}</a>
                  </Button>
                ))}
              </div>
              <Accordion type="multiple" className="w-full">
                {NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </Accordion>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  if (item.groups) {
    return (
      <AccordionItem
        key={item.title}
        value={`nav-${index}`}
        className="border-b-0"
      >
        <AccordionTrigger className="text-muted-foreground hover:bg-muted h-[3.75rem] items-center p-0 !px-4 text-base font-normal leading-[3.75] hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="max-h-[60dvh] overflow-x-auto">
          {item.groups.flatMap((group, groupIndex) =>
            group.links.map((link, linkIndex) => (
              <a
                key={`mobile-link-${groupIndex}-${linkIndex}`}
                href={link.url}
                className="text-muted-foreground hover:bg-muted hover:text-foreground flex h-12 items-center gap-2 rounded-lg px-4 transition-colors duration-300"
              >
                <link.icon className="stroke-muted-foreground size-4" />
                {link.label}
              </a>
            )),
          )}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="text-muted-foreground ring-ring/10 outline-ring/50 hover:bg-muted nth-last-1:border-0 flex h-[3.75rem] items-center rounded-md p-0 px-4 text-left text-base font-normal leading-[3.75] transition-all focus-visible:outline-1 focus-visible:ring-4"
    >
      {item.title}
    </a>
  );
};

export { Navbar11 };
