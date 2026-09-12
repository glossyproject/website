"use client";

import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import React, {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";
import { features } from "@/components/features";
import { branches } from "@/shadcnblocks-Blocks/cta/cta3";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "https://www.shadcnblocks.com",
  src: "/logo.png",
  alt: "Glossy Auto Group",
};
const NAV_ITEMS = [
  { name: "Home", link: "#" },
  { name: "Layanan", link: "#layanan", subItems: features },
  { name: "Cabang", link: "#cabang", subItems: branches },
  { name: "Kontak", link: "#" },
  { name: "Blog", link: "#" },
  { name: "Galeri", link: "#" },
];

const Navbar17 = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`,
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-2">
      <nav className="container flex items-center justify-between">
        {/* Left WordMark */}
        <a href={NAV_LOGO.url} className="flex items-center gap-2">
          <img src={NAV_LOGO.src} className="h-6 w-auto object-contain" alt={NAV_LOGO.alt} />
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-1"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem className="group relative">
                  {item.subItems ? (
                    <button
                      type="button"
                      data-nav-item={item.name}
                      aria-expanded={openDropdown === item.name}
                      onClick={() => {
                        setActiveItem(item.name);
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name,
                        );
                      }}
                      className={`text-pretty text-lg font-semibold lg:max-w-2xl relative flex cursor-pointer items-center gap-1 hover:bg-transparent ${
                        activeItem === item.name
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                      <ChevronDown
                        aria-hidden="true"
                        className={`size-4 transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <NavigationMenuLink
                      data-nav-item={item.name}
                      href={item.link}
                      onClick={() => setActiveItem(item.name)}
                      className={`text-pretty text-lg font-semibold lg:max-w-2xl relative cursor-pointer hover:bg-transparent ${
                        activeItem === item.name
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </NavigationMenuLink>
                  )}
                  {item.subItems && (
                    <div
                      className={`bg-background absolute top-full left-1/2 z-50 mt-2 w-64 -translate-x-1/2 rounded-md border p-2 shadow-md transition-all ${
                        openDropdown === item.name
                          ? "visible opacity-100"
                          : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.id}
                          href={`#${subItem.id}`}
                          onClick={() => setOpenDropdown(null)}
                          className="hover:bg-accent block rounded-sm px-3 py-2 text-sm font-medium"
                        >
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  )}
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-foreground h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="h-10 py-2.5 text-sm font-normal"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </section>
  );
};

export { Navbar17 };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative size-full">
      <div className="absolute flex size-full items-center justify-center">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute size-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <div className="flex items-center gap-2" title="Ganti tema">
      <Sun aria-hidden="true" className="size-4 text-muted-foreground" />
      <Switch
        checked={isDark}
        disabled={!mounted}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Ganti tema terang atau gelap"
      />
      <Moon aria-hidden="true" className="size-4 text-muted-foreground" />
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <div className="block flex h-full items-center lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <AnimatedHamburger isOpen={isOpen} />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -right-4 top-4 block w-[calc(100vw-32px)] overflow-hidden rounded-xl p-0 sm:right-auto sm:top-auto sm:w-80 lg:hidden"
        >
          <ul className="bg-background text-foreground w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                {navItem.subItems ? (
                  <button
                    type="button"
                    aria-expanded={openSubmenu === navItem.name}
                    onClick={() => {
                      setActiveItem(navItem.name);
                      setOpenSubmenu(
                        openSubmenu === navItem.name ? null : navItem.name,
                      );
                    }}
                    className={`text-foreground flex w-full items-center justify-between border-l-[3px] px-6 py-4 text-pretty text-lg font-semibold lg:max-w-2xl relative cursor-pointer hover:bg-transparent transition-all duration-75 ${
                      activeItem === navItem.name
                        ? "border-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground border-transparent"
                    }`}
                  >
                    {navItem.name}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-5 transition-transform ${
                        openSubmenu === navItem.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <a
                    href={navItem.link}
                    onClick={() => setActiveItem(navItem.name)}
                    className={`text-foreground flex items-center border-l-[3px] px-6 py-4 text-pretty text-lg font-semibold lg:max-w-2xl relative cursor-pointer hover:bg-transparent transition-all duration-75 ${
                      activeItem === navItem.name
                        ? "border-foreground text-foreground"
                        : "text-muted-foreground hover:text-foreground border-transparent"
                    }`}
                  >
                    {navItem.name}
                  </a>
                )}
                {navItem.subItems && (
                  <div
                    className={`border-muted ml-6 border-l pl-3 ${
                      openSubmenu === navItem.name ? "block" : "hidden"
                    }`}
                  >
                    {navItem.subItems.map((subItem) => (
                      <a
                        key={subItem.id}
                        href={`#${subItem.id}`}
                        className="text-muted-foreground hover:text-foreground block px-3 py-2 text-sm font-medium"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <div className="mb-4 flex justify-center">
                <ThemeToggle />
              </div>
              <Button variant="outline">Sign Up</Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};
