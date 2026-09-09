"use client";

import { MenuIcon } from "lucide-react";

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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface Navbar5Props {
  className?: string;
}

const Navbar5 = ({ className }: Navbar5Props) => {
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className={cn("bg-black text-white", className)}>
      <div className="mx-auto w-full max-w-[1280px] px-4 md:px-6 lg:px-8">
        <nav className="flex h-[88px] items-center justify-between lg:h-[94px]">
          <a href="#" className="flex items-center gap-2 shrink-0">
            <img
              src="/logo-glossy-auto.png"
              className="h-8 w-8 object-contain lg:h-9 lg:w-9"
              alt="Glossy Auto"
            />
            <span className="hero-title text-base tracking-[0.06em] text-[#f7b500] md:text-lg">
              GLOSSY AUTO
            </span>
          </a>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-2 text-white">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>About Us</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Products</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Workshop</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Partnerships</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Promo</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Booking</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>News</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#" className={cn(navigationMenuTriggerStyle(), "text-white hover:text-[#f7b500]")}>Careers</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 lg:flex">
            <Button className="rounded-full bg-[#f7b500] px-5 py-2 text-sm font-semibold text-black hover:bg-[#ffca2c]">
              Kontak Kami
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon" className="border-white/30 bg-transparent text-white hover:bg-white/5 hover:text-white">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto bg-black text-white">
              <SheetHeader>
                <SheetTitle className="text-white">
                  <a href="#" className="flex items-center gap-2">
                    <img src="/logo-glossy-auto.png" className="h-8 w-8 object-contain" alt="Glossy Auto" />
                    <span className="hero-title text-base tracking-[0.06em] text-[#f7b500]">GLOSSY AUTO</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4 text-white">
                <div className="mt-6 flex flex-col gap-4">
                  <a href="#" className="font-medium text-white">About Us</a>
                  <a href="#" className="font-medium text-white">Products</a>
                  <a href="#" className="font-medium text-white">Workshop</a>
                  <a href="#" className="font-medium text-white">Partnerships</a>
                  <a href="#" className="font-medium text-white">Promo</a>
                  <a href="#" className="font-medium text-white">Booking</a>
                  <a href="#" className="font-medium text-white">News</a>
                  <a href="#" className="font-medium text-white">Careers</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
