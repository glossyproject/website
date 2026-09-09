"use client";

import { motion } from "framer-motion";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Box,
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  Globe,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Package,
  Radio,
  RotateCcw,
  Search,
  Settings,
  Truck,
  User,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import * as React from "react";

const jetBrainsMono = {
  className: "font-mono",
  style: { fontFamily: "'JetBrains Mono', ui-monospace, monospace" },
};

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerTooltip,
} from "@/components/mapcn/map";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

// ============================================================================
// Color Palette
// ============================================================================

const mixBase = "var(--background)";

const palette = {
  primary: "var(--primary)",
  secondary: {
    light: `color-mix(in oklch, var(--primary) 75%, ${mixBase})`,
    dark: `color-mix(in oklch, var(--primary) 85%, ${mixBase})`,
  },
  tertiary: {
    light: `color-mix(in oklch, var(--primary) 55%, ${mixBase})`,
    dark: `color-mix(in oklch, var(--primary) 65%, ${mixBase})`,
  },
  quaternary: {
    light: `color-mix(in oklch, var(--primary) 40%, ${mixBase})`,
    dark: `color-mix(in oklch, var(--primary) 45%, ${mixBase})`,
  },
  quinary: {
    light: `color-mix(in oklch, var(--primary) 25%, ${mixBase})`,
    dark: `color-mix(in oklch, var(--primary) 30%, ${mixBase})`,
  },
};

// ============================================================================
// Types
// ============================================================================

type NavItem = {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  isActive?: boolean;
  children?: NavItem[];
};

type NavGroup = {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
};

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

type SidebarData = {
  logo: {
    src: string;
    alt: string;
    title: string;
    description: string;
  };
  navGroups: NavGroup[];
  user?: UserData;
};

type KPIStat = {
  title: string;
  value: number;
  change: number;
  format: "currency" | "percent" | "number";
  suffix?: string;
};

type GeographyCountry = {
  name: string;
  /** Regional indicator pair for emoji fallback */
  flag: string;
  /** ISO 3166-1 alpha-2 for flagcdn.com sprites */
  iso2: string;
  lat: number;
  lng: number;
  users: number;
  /** Edge p95 round-trip (ms), last 5 minutes */
  p95Ms: number;
  /** vs prior 5m window (negative = faster) */
  latencyChange: number;
  demographics: { men: number; women: number; other: number };
};

// ============================================================================
// Formatters
// ============================================================================

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

const compactNumberFormatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  maximumFractionDigits: 2,
});

// ============================================================================
// Hooks
// ============================================================================

// ============================================================================
// Mock Data
// ============================================================================

const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Northwind Signals",
    title: "Northwind Signals",
    description: "Realtime",
  },
  navGroups: [
    {
      title: "Main",
      defaultOpen: true,
      items: [
        {
          label: "Live overview",
          icon: Radio,
          href: "#",
          isActive: true,
        },
        { label: "Streams", icon: Activity, href: "#" },
        { label: "Incidents", icon: ClipboardList, href: "#" },
      ],
    },
    {
      title: "Pipelines",
      defaultOpen: true,
      items: [
        {
          label: "Ingest",
          icon: Box,
          href: "#",
          children: [
            { label: "HTTP API", icon: Package, href: "#" },
            { label: "Webhooks", icon: Package, href: "#" },
            { label: "Batch jobs", icon: Package, href: "#" },
          ],
        },
        { label: "Routing", icon: Truck, href: "#" },
      ],
    },
    {
      title: "Audience",
      defaultOpen: false,
      items: [
        { label: "Segments", icon: Users, href: "#" },
        { label: "Alerts", icon: MessageSquare, href: "#" },
      ],
    },
    {
      title: "Analytics",
      defaultOpen: false,
      items: [
        { label: "Explorer", icon: Globe, href: "#" },
        { label: "Reports", icon: BarChart3, href: "#" },
        { label: "Quotas", icon: Wallet, href: "#" },
      ],
    },
    {
      title: "Settings",
      defaultOpen: false,
      items: [{ label: "Settings", icon: Settings, href: "#" }],
    },
  ],
  user: {
    name: "Riley Park",
    email: "riley@northwind.dev",
    avatar: "https://github.com/shadcn.png",
  },
};

const staticLatencyKpi: KPIStat = {
  title: "P95 latency",
  value: 138,
  change: -6.2,
  format: "number",
  suffix: " ms",
};

const staticErrorKpi: KPIStat = {
  title: "Error rate",
  value: 0.42,
  change: -4.2,
  format: "percent",
};

const P95_SLO_MS = 180;

/** Latency breakdown: top N session markets (same scope as weighted headline). */
const LATENCY_REGION_COUNT = 5;

const geographyCountries: GeographyCountry[] = [
  {
    name: "United States",
    flag: "\u{1F1FA}\u{1F1F8}",
    iso2: "us",
    lat: 38.9,
    lng: -77.0,
    users: 12400,
    p95Ms: 118,
    latencyChange: -4.2,
    demographics: { men: 38, women: 54, other: 8 },
  },
  {
    name: "United Kingdom",
    flag: "\u{1F1EC}\u{1F1E7}",
    iso2: "gb",
    lat: 51.5,
    lng: -0.1,
    users: 8200,
    p95Ms: 132,
    latencyChange: 1.8,
    demographics: { men: 35, women: 57, other: 8 },
  },
  {
    name: "India",
    flag: "\u{1F1EE}\u{1F1F3}",
    iso2: "in",
    lat: 20.6,
    lng: 79.0,
    users: 6500,
    p95Ms: 186,
    latencyChange: 3.1,
    demographics: { men: 42, women: 50, other: 8 },
  },
  {
    name: "Brazil",
    flag: "\u{1F1E7}\u{1F1F7}",
    iso2: "br",
    lat: -14.2,
    lng: -51.9,
    users: 4200,
    p95Ms: 164,
    latencyChange: -2.4,
    demographics: { men: 30, women: 62, other: 8 },
  },
  {
    name: "Japan",
    flag: "\u{1F1EF}\u{1F1F5}",
    iso2: "jp",
    lat: 36.2,
    lng: 139.7,
    users: 3400,
    p95Ms: 96,
    latencyChange: -5.6,
    demographics: { men: 32, women: 60, other: 8 },
  },
  {
    name: "Germany",
    flag: "\u{1F1E9}\u{1F1EA}",
    iso2: "de",
    lat: 51.2,
    lng: 10.5,
    users: 2900,
    p95Ms: 124,
    latencyChange: -1.9,
    demographics: { men: 36, women: 58, other: 6 },
  },
  {
    name: "Canada",
    flag: "\u{1F1E8}\u{1F1E6}",
    iso2: "ca",
    lat: 56.1,
    lng: -106.3,
    users: 2600,
    p95Ms: 108,
    latencyChange: -2.8,
    demographics: { men: 34, women: 60, other: 6 },
  },
  {
    name: "France",
    flag: "\u{1F1EB}\u{1F1F7}",
    iso2: "fr",
    lat: 46.2,
    lng: 2.2,
    users: 2200,
    p95Ms: 128,
    latencyChange: 0.6,
    demographics: { men: 33, women: 59, other: 8 },
  },
  {
    name: "Australia",
    flag: "\u{1F1E6}\u{1F1FA}",
    iso2: "au",
    lat: -25.3,
    lng: 133.8,
    users: 1800,
    p95Ms: 142,
    latencyChange: -0.9,
    demographics: { men: 37, women: 55, other: 8 },
  },
  {
    name: "Mexico",
    flag: "\u{1F1F2}\u{1F1FD}",
    iso2: "mx",
    lat: 23.6,
    lng: -102.5,
    users: 1400,
    p95Ms: 156,
    latencyChange: 1.2,
    demographics: { men: 31, women: 61, other: 8 },
  },
];
const totalGeographyUsers = geographyCountries.reduce(
  (sum, c) => sum + c.users,
  0,
);

/** Center [lng, lat] for world view with markers */
const MAP_DEFAULT_CENTER: [number, number] = [18, 24];
const MAP_ZOOM_LARGE = 1.28;
const MAP_ZOOM_DEFAULT = 1.05;

type LiveStreamEvent = {
  id: string;
  tone: "ok" | "warn" | "info";
  title: string;
  detail: string;
  ago: string;
};

const liveEventSeeds: Omit<LiveStreamEvent, "id" | "ago">[] = [
  {
    tone: "ok",
    title: "Checkout funnel",
    detail: "Spike in completions from Germany",
  },
  {
    tone: "info",
    title: "Edge cache",
    detail: "Tokyo PoP warmed for static assets",
  },
  {
    tone: "warn",
    title: "Webhook retries",
    detail: "Partner EU-3 backlog draining",
  },
  {
    tone: "ok",
    title: "Schema drift",
    detail: "Telemetry contract validated",
  },
  {
    tone: "info",
    title: "Sampling",
    detail: "Debug traces raised to 4% in US-West",
  },
];

const secondaryNavigation = [
  { name: "Live", href: "#", current: true },
  { name: "Streams", href: "#", current: false },
  { name: "Regions", href: "#", current: false },
  { name: "Quality", href: "#", current: false },
  { name: "Exports", href: "#", current: false },
];

/** Fixed stream length so the panel height stays stable */
const SIGNAL_STREAM_LENGTH = 8;
/** Slower cadence so the stream feels calmer */
const SIGNAL_TICK_MS = 7000;

function agoForStreamIndex(index: number) {
  if (index === 0) return "just now";
  const s = index * 8;
  return `${s}s ago`;
}

function useLivePulse() {
  const [activeNow, setActiveNow] = React.useState(2847);
  const [eventsPerMin, setEventsPerMin] = React.useState(18620);
  const [liveEvents, setLiveEvents] = React.useState<LiveStreamEvent[]>(() =>
    Array.from({ length: SIGNAL_STREAM_LENGTH }, (_, i) => {
      const seed = liveEventSeeds[i % liveEventSeeds.length]!;
      return {
        ...seed,
        id: `seed-${i}-${seed.title.slice(0, 8)}`,
        ago: agoForStreamIndex(i),
      };
    }),
  );

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setActiveNow((n) =>
        Math.max(1200, n + Math.floor(Math.random() * 11 - 5)),
      );
      setEventsPerMin((n) =>
        Math.max(8000, n + Math.floor(Math.random() * 401 - 200)),
      );
      const template =
        liveEventSeeds[Math.floor(Math.random() * liveEventSeeds.length)]!;
      setLiveEvents((prev) => {
        const head: LiveStreamEvent = {
          ...template,
          id: `evt-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          ago: "just now",
        };
        const carried = prev.slice(0, SIGNAL_STREAM_LENGTH - 1);
        const next = [head, ...carried];
        return next.map((row, i) => ({
          ...row,
          ago: agoForStreamIndex(i),
        }));
      });
    }, SIGNAL_TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  return { activeNow, eventsPerMin, liveEvents };
}

// ============================================================================
// Sidebar Components
// ============================================================================

const SidebarLogo = ({ logo }: { logo: SidebarData["logo"] }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" tooltip={logo.title}>
          <div className="flex aspect-square size-8 items-center justify-center bg-primary">
            <img
              src={logo.src}
              alt={logo.alt}
              width={24}
              height={24}
              className="size-6 text-primary-foreground invert dark:invert-0"
            />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-medium">{logo.title}</span>
            <span className="text-xs text-muted-foreground">
              {logo.description}
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const NavMenuItem = ({ item }: { item: NavItem }) => {
  const Icon = item.icon;
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <SidebarMenuItem>
        <SidebarMenuButton
          asChild
          isActive={item.isActive}
          tooltip={item.label}
        >
          <a href={item.href}>
            <Icon className="size-4" aria-hidden="true" />
            <span>{item.label}</span>
          </a>
        </SidebarMenuButton>
      </SidebarMenuItem>
    );
  }

  return (
    <Collapsible asChild defaultOpen className="group/collapsible">
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton isActive={item.isActive} tooltip={item.label}>
            <Icon className="size-4" aria-hidden="true" />
            <span>{item.label}</span>
            <ChevronRight
              className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              aria-hidden="true"
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children!.map((child) => (
              <SidebarMenuSubItem key={child.label}>
                <SidebarMenuSubButton
                  asChild
                  isActive={child.isActive}
                  className={
                    child.isActive
                      ? "relative overflow-visible before:absolute before:top-0 before:-left-2.5 before:z-10 before:h-full before:w-px before:bg-primary before:content-['']"
                      : ""
                  }
                >
                  <a href={child.href}>{child.label}</a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
};

const NavUser = ({ user }: { user: UserData }) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const userAvatar = (
    <Avatar className="size-8 rounded-none">
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback className="rounded-none">{initials}</AvatarFallback>
    </Avatar>
  );

  const userInfo = (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-medium">{user.name}</span>
      <span className="truncate text-xs text-muted-foreground">
        {user.email}
      </span>
    </div>
  );

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {userAvatar}
              {userInfo}
              <ChevronsUpDown className="ml-auto size-4" aria-hidden="true" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-none"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                {userAvatar}
                {userInfo}
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User className="mr-2 size-4" aria-hidden="true" />
              Account
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="mr-2 size-4" aria-hidden="true" />
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-2 group-data-[collapsible=icon]:flex-col">
          <SidebarLogo logo={sidebarData.logo} />
          <SidebarTrigger className="ml-auto group-data-[collapsible=icon]:ml-0" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          {sidebarData.navGroups.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <NavMenuItem key={item.label} item={item} />
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        {sidebarData.user && <NavUser user={sidebarData.user} />}
      </SidebarFooter>
    </Sidebar>
  );
};

// ============================================================================
// Dashboard Header
// ============================================================================

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <div className="flex flex-1 items-center gap-3 self-stretch">
        <div className="flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
          <Radio className="size-3.5 shrink-0" aria-hidden="true" />
          <span>Live</span>
          <Zap className="size-3.5 shrink-0 opacity-70" aria-hidden="true" />
        </div>
        <form className="grid min-w-0 flex-1 grid-cols-1">
          <input
            name="search"
            type="search"
            placeholder="Search streams, regions, dashboards..."
            aria-label="Search"
            autoComplete="off"
            className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-sm text-foreground outline-hidden placeholder:text-muted-foreground"
          />
          <Search
            aria-hidden="true"
            className="pointer-events-none col-start-1 row-start-1 size-4 self-center text-muted-foreground"
          />
        </form>
      </div>
    </header>
  );
};

// ============================================================================
// Secondary Navigation
// ============================================================================

const SecondaryNav = () => {
  return (
    <nav className="flex overflow-x-auto border-b bg-background py-4">
      <ul
        role="list"
        className="flex min-w-full flex-none gap-x-6 px-4 text-sm/6 font-semibold text-muted-foreground sm:px-6"
      >
        {secondaryNavigation.map((item) => (
          <li key={item.name}>
            <a href={item.href} className={item.current ? "text-primary" : ""}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ============================================================================
// Dashboard Heading
// ============================================================================

const DashboardHeading = () => {
  return (
    <div className="border-b px-4 py-4 sm:px-6">
      <h1 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base/7">
        <span className="font-semibold text-foreground">Northwind Signals</span>
        <span className="text-muted-foreground/60">/</span>
        <span className="font-semibold text-foreground">Live operations</span>
      </h1>
      <p className="mt-2 text-xs/6 text-muted-foreground">
        Real-time sessions, regional load, and ingest health across your edge
        network
      </p>
    </div>
  );
};

// ============================================================================
// Dashboard Content Components
// ============================================================================

// Growth section component (compact window labels + change chips)
const GrowthSection = ({
  label,
  change,
}: {
  label: string;
  change: number;
}) => {
  const isPositive = change >= 0;
  return (
    <div className="flex items-center gap-1.5 border bg-muted/30 px-2 py-1">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span
        className={cn(
          jetBrainsMono.className,
          "flex items-center gap-0.5 text-xs font-medium",
          isPositive ? "text-emerald-600" : "text-red-600",
        )}
      >
        {isPositive ? (
          <ArrowUpRight className="size-3" aria-hidden="true" />
        ) : (
          <ArrowDownRight className="size-3" aria-hidden="true" />
        )}
        {isPositive ? "+" : ""}
        {change}%
      </span>
    </div>
  );
};

// KPI Stat Card
const KPIStatCard = ({ stat }: { stat: KPIStat }) => {
  const isPositive = stat.change >= 0;

  const formatValue = (value: number, format: KPIStat["format"]) => {
    switch (format) {
      case "currency":
        return currencyFormatter.format(value);
      case "percent":
        return `${value}%`;
      case "number":
        return `${numberFormatter.format(value)}${stat.suffix ?? ""}`;
    }
  };

  return (
    <div className="flex h-full flex-col gap-2 border-b bg-card px-4 py-6 sm:px-6">
      <span className="text-xs text-muted-foreground">{stat.title}</span>
      <div className="flex items-baseline gap-2">
        <span className={cn(jetBrainsMono.className, "text-2xl font-semibold")}>
          {formatValue(stat.value, stat.format)}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs">
        {isPositive ? (
          <ArrowUpRight
            className="size-3.5 text-emerald-600"
            aria-hidden="true"
          />
        ) : (
          <ArrowDownRight
            className="size-3.5 text-red-600"
            aria-hidden="true"
          />
        )}
        <span
          className={cn(
            jetBrainsMono.className,
            isPositive ? "text-emerald-600" : "text-red-600",
          )}
        >
          {isPositive ? "+" : ""}
          {stat.change}%
        </span>
        <span className="text-muted-foreground">vs last hour</span>
      </div>
    </div>
  );
};

const LiveKPIStatCard = ({
  title,
  value,
  compact,
}: {
  title: string;
  value: number;
  compact?: boolean;
}) => {
  const display = compact
    ? compactNumberFormatter.format(value)
    : numberFormatter.format(value);
  return (
    <div className="flex h-full flex-col gap-2 border-b bg-card px-4 py-6 sm:px-6">
      <div className="flex items-center gap-2">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-600/45 dark:bg-emerald-400/35" />
          <span className="relative inline-flex size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
        </span>
        <span className="text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span
          className={cn(
            jetBrainsMono.className,
            "text-2xl font-semibold tabular-nums",
          )}
        >
          {display}
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-muted-foreground">
        <Activity
          className="size-3.5 text-emerald-600 dark:text-emerald-400"
          aria-hidden="true"
        />
        <span>Streaming</span>
      </div>
    </div>
  );
};

const RealtimeKPIStatsRow = ({
  activeNow,
  eventsPerMin,
}: {
  activeNow: number;
  eventsPerMin: number;
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 [&>*]:border-r [&>*:last-child]:border-r-0">
      <LiveKPIStatCard title="Active sessions" value={activeNow} />
      <LiveKPIStatCard title="Events per minute" value={eventsPerMin} compact />
      <KPIStatCard stat={staticLatencyKpi} />
      <KPIStatCard stat={staticErrorKpi} />
    </div>
  );
};

/** PNG flags from flagcdn (MIT); falls back to emoji if the request fails. */
function CountryFlag({
  iso2,
  emojiFallback,
  size = "md",
}: {
  iso2: string;
  emojiFallback: string;
  size?: "sm" | "md";
}) {
  const [failed, setFailed] = React.useState(false);
  const w = size === "sm" ? 18 : 24;
  const h = size === "sm" ? 13 : 18;

  if (failed) {
    return (
      <span
        className="inline-flex size-7 shrink-0 items-center justify-center text-lg leading-none"
        aria-hidden
      >
        {emojiFallback}
      </span>
    );
  }

  return (
    <img
      src={`https://flagcdn.com/w40/${iso2.toLowerCase()}.png`}
      srcSet={`https://flagcdn.com/w80/${iso2.toLowerCase()}.png 2x`}
      width={w}
      height={h}
      alt=""
      className="shrink-0 rounded-sm object-cover shadow-sm ring-1 ring-border/50"
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

type LatencyByCountryRow = {
  name: string;
  iso2: string;
  flag: string;
  p95Ms: number;
  latencyChange: number;
};

const sessionsByCountrySorted = [...geographyCountries].sort(
  (a, b) => b.users - a.users,
);

const ActiveSessionsByCountryCard = () => {
  const [activeIso2, setActiveIso2] = React.useState<string | null>(null);
  const maxUsers = sessionsByCountrySorted[0]?.users ?? 1;
  const nMarkets = geographyCountries.length;
  const avgUsersPerMarket = totalGeographyUsers / nMarkets;
  const fairShareBarPct = (avgUsersPerMarket / maxUsers) * 100;
  const topHeavyCount = sessionsByCountrySorted.filter(
    (c) => c.users > avgUsersPerMarket * 1.35,
  ).length;

  return (
    <div
      className="flex min-w-0 flex-1 flex-col gap-4 bg-card p-4 sm:gap-5 sm:p-5"
      onMouseLeave={() => setActiveIso2(null)}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">
            Active sessions by country
          </span>
          <span
            className={cn(
              jetBrainsMono.className,
              "text-2xl font-semibold tabular-nums sm:text-3xl",
            )}
          >
            {numberFormatter.format(totalGeographyUsers)}
            <span className="text-lg font-medium text-muted-foreground sm:text-xl">
              {" "}
              sessions
            </span>
          </span>
          <span className="text-xs text-muted-foreground">
            Concurrent · weighted last 60s
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                jetBrainsMono.className,
                "text-xs text-muted-foreground tabular-nums",
              )}
            >
              Avg {numberFormatter.format(Math.round(avgUsersPerMarket))} /
              market
            </span>
            {topHeavyCount > 0 ? (
              <span className="border border-sky-500/30 bg-sky-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-sky-800 uppercase dark:text-sky-400">
                {topHeavyCount} skewed market{topHeavyCount > 1 ? "s" : ""}
              </span>
            ) : (
              <span className="border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-emerald-800 uppercase dark:text-emerald-400">
                Balanced load
              </span>
            )}
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
          Export
        </Button>
      </div>

      <div className="-mx-4 flex flex-col sm:-mx-5">
        {sessionsByCountrySorted.map((c, rank) => {
          const share = c.users / maxUsers;
          const pctOfTotal = (c.users / totalGeographyUsers) * 100;
          const isDimmed = activeIso2 !== null && activeIso2 !== c.iso2;
          const isTop = rank === 0;
          return (
            <div
              key={c.iso2}
              className="flex cursor-pointer items-center gap-3 px-4 py-1.5 sm:px-5"
              style={{
                opacity: isDimmed ? 0.45 : 1,
                transition: "opacity 150ms ease-out",
              }}
              onMouseEnter={() => setActiveIso2(c.iso2)}
              onMouseLeave={() => setActiveIso2(null)}
            >
              <CountryFlag iso2={c.iso2} emojiFallback={c.flag} size="md" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "truncate text-sm font-medium",
                      isDimmed ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {c.name}
                  </span>
                  <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    {isTop && (
                      <span className="text-[10px] font-medium tracking-wide text-emerald-700 uppercase dark:text-emerald-500">
                        TOP
                      </span>
                    )}
                    <span
                      className={cn(
                        jetBrainsMono.className,
                        "text-sm font-semibold text-foreground tabular-nums",
                      )}
                    >
                      {numberFormatter.format(c.users)}
                    </span>
                    <div
                      className={cn(
                        jetBrainsMono.className,
                        "flex min-w-15 items-center justify-end gap-0.5 text-sm font-medium text-muted-foreground tabular-nums sm:min-w-17",
                      )}
                    >
                      {pctOfTotal.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="relative mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary/50 transition-[width] duration-300"
                    style={{ width: `${share * 100}%` }}
                  />
                  <div
                    className="pointer-events-none absolute top-0 bottom-0 w-px bg-muted-foreground/40"
                    style={{ left: `${fairShareBarPct}%` }}
                    title={`Even split (~${numberFormatter.format(Math.round(avgUsersPerMarket))} sessions)`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LatencyByCountryCard = () => {
  const [activeIso2, setActiveIso2] = React.useState<string | null>(null);

  const regionRows = React.useMemo<LatencyByCountryRow[]>(() => {
    const topBySessions = [...geographyCountries]
      .sort((a, b) => b.users - a.users)
      .slice(0, LATENCY_REGION_COUNT);
    return topBySessions
      .sort((a, b) => b.p95Ms - a.p95Ms)
      .map((c) => ({
        name: c.name,
        iso2: c.iso2,
        flag: c.flag,
        p95Ms: c.p95Ms,
        latencyChange: c.latencyChange,
      }));
  }, []);

  const maxP95AmongRows = Math.max(
    ...regionRows.map((d) => d.p95Ms),
    P95_SLO_MS,
  );

  const weightedP95 = React.useMemo(() => {
    const topBySessions = [...geographyCountries]
      .sort((a, b) => b.users - a.users)
      .slice(0, LATENCY_REGION_COUNT);
    const users = topBySessions.reduce((s, c) => s + c.users, 0);
    const w = topBySessions.reduce((s, c) => s + c.p95Ms * c.users, 0);
    return Math.round(w / users);
  }, []);

  const regionIso2 = React.useMemo(
    () => new Set(regionRows.map((r) => r.iso2)),
    [regionRows],
  );
  const overSloCount = geographyCountries.filter(
    (c) => regionIso2.has(c.iso2) && c.p95Ms > P95_SLO_MS,
  ).length;

  return (
    <div
      className="flex min-w-0 flex-1 flex-col gap-4 bg-card p-4 sm:gap-5 sm:p-5"
      onMouseLeave={() => setActiveIso2(null)}
    >
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">
            p95 latency by country
          </span>
          <span
            className={cn(
              jetBrainsMono.className,
              "text-2xl font-semibold tabular-nums sm:text-3xl",
            )}
          >
            {weightedP95}
            <span className="text-lg font-medium text-muted-foreground sm:text-xl">
              {" "}
              ms
            </span>
          </span>
          <span className="text-xs text-muted-foreground">
            Top {LATENCY_REGION_COUNT} markets by sessions · edge RTT
          </span>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                jetBrainsMono.className,
                "text-xs text-muted-foreground tabular-nums",
              )}
            >
              SLO {P95_SLO_MS} ms
            </span>
            {overSloCount > 0 ? (
              <span className="border border-amber-500/30 bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-amber-800 uppercase dark:text-amber-400">
                {overSloCount} hot region{overSloCount > 1 ? "s" : ""}
              </span>
            ) : (
              <span className="border border-emerald-500/30 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-emerald-800 uppercase dark:text-emerald-400">
                Within SLO
              </span>
            )}
          </div>
        </div>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
          Traces
        </Button>
      </div>

      <div className="-mx-4 flex flex-col sm:-mx-5">
        {regionRows.map((row) => {
          const faster = row.latencyChange <= 0;
          const isDimmed = activeIso2 !== null && activeIso2 !== row.iso2;
          const overSlo = row.p95Ms > P95_SLO_MS;
          const latencyBarPct = (row.p95Ms / maxP95AmongRows) * 100;
          return (
            <div
              key={row.iso2}
              className="flex cursor-pointer items-center gap-3 px-4 py-1.5 sm:px-5"
              style={{
                opacity: isDimmed ? 0.45 : 1,
                transition: "opacity 150ms ease-out",
              }}
              onMouseEnter={() => setActiveIso2(row.iso2)}
              onMouseLeave={() => setActiveIso2(null)}
            >
              <CountryFlag iso2={row.iso2} emojiFallback={row.flag} size="md" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={cn(
                      "truncate text-sm font-medium",
                      isDimmed ? "text-muted-foreground" : "text-foreground",
                    )}
                  >
                    {row.name}
                  </span>
                  <div className="flex shrink-0 items-center gap-2 sm:gap-3">
                    {overSlo && (
                      <span className="text-[10px] font-medium tracking-wide text-amber-700 uppercase dark:text-amber-500">
                        SLO
                      </span>
                    )}
                    <span
                      className={cn(
                        jetBrainsMono.className,
                        "text-sm font-semibold tabular-nums",
                        overSlo
                          ? "text-amber-800 dark:text-amber-400"
                          : "text-foreground",
                      )}
                    >
                      {row.p95Ms} ms
                    </span>
                    <div
                      className={cn(
                        jetBrainsMono.className,
                        "flex min-w-15 items-center justify-end gap-0.5 text-sm font-medium tabular-nums sm:min-w-17",
                        faster ? "text-emerald-600" : "text-red-600",
                      )}
                    >
                      {faster ? (
                        <ArrowDownRight
                          className="size-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <ArrowUpRight
                          className="size-3.5 shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      {row.latencyChange > 0 ? "+" : ""}
                      {row.latencyChange}%
                    </div>
                  </div>
                </div>
                <div className="relative mt-1.5 h-1 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={cn(
                      "h-full rounded-full transition-[width] duration-300",
                      overSlo
                        ? "bg-amber-600/50 dark:bg-amber-500/45"
                        : "bg-primary/50",
                    )}
                    style={{ width: `${latencyBarPct}%` }}
                  />
                  <div
                    className="pointer-events-none absolute top-0 bottom-0 w-px bg-muted-foreground/40"
                    style={{
                      left: `${(P95_SLO_MS / maxP95AmongRows) * 100}%`,
                    }}
                    title={`SLO ${P95_SLO_MS} ms`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/** MapLibre basemap + session markers via @mapcn registry */
const RealtimeSessionsMap = ({
  activeIndex,
  onSelect,
  hoveredIndex,
  onHover,
  size = "default",
}: {
  activeIndex: number | null;
  onSelect: (index: number | null) => void;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  size?: "default" | "large";
}) => {
  const isLarge = size === "large";
  const maxUsers = Math.max(...geographyCountries.map((c) => c.users));
  const minPx = isLarge ? 12 : 9;
  const maxPx = isLarge ? 26 : 18;

  return (
    <Map
      center={MAP_DEFAULT_CENTER}
      zoom={isLarge ? MAP_ZOOM_LARGE : MAP_ZOOM_DEFAULT}
      className="size-full min-h-0 overflow-hidden rounded-none bg-muted/30"
      scrollZoom
      dragRotate={false}
      pitchWithRotate={false}
      doubleClickZoom
      minZoom={0.75}
      maxZoom={8}
    >
      <MapControls position="bottom-right" showZoom />
      {geographyCountries.map((country, i) => {
        const isActive = activeIndex === i;
        const isHovered = hoveredIndex === i;
        const isDimmed =
          (activeIndex !== null || hoveredIndex !== null) &&
          !isActive &&
          !isHovered;
        const ratio = country.users / maxUsers;
        const scale = isActive ? 1.14 : isHovered ? 1.08 : 1;
        const px = (minPx + ratio * (maxPx - minPx)) * scale;
        const fill = isActive
          ? palette.primary
          : isHovered
            ? palette.secondary.light
            : palette.tertiary.light;
        const opacity = isActive
          ? 0.95
          : isHovered
            ? 0.88
            : isDimmed
              ? 0.38
              : 0.78;
        const showPulse = !isActive && !isHovered && !isDimmed;

        return (
          <MapMarker
            key={country.name}
            longitude={country.lng}
            latitude={country.lat}
            anchor="center"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(isActive ? null : i);
            }}
            onMouseEnter={() => onHover(i)}
            onMouseLeave={() => onHover(null)}
          >
            <MarkerContent className="flex items-center justify-center">
              <span
                className={cn(
                  "box-border block rounded-full border-2 border-background shadow-md ring-2 ring-background/70 transition-all duration-200",
                  showPulse && "motion-safe:animate-pulse",
                )}
                style={{
                  width: px,
                  height: px,
                  backgroundColor: fill,
                  opacity,
                }}
              />
            </MarkerContent>
            <MarkerTooltip className="min-w-40 border border-border bg-popover p-2.5 text-popover-foreground shadow-lg">
              <div className="flex flex-col gap-1.5">
                <div className="text-xs font-medium text-foreground">
                  <span className="mr-1">{country.flag}</span>
                  {country.name}
                </div>
                <span
                  className={cn(
                    jetBrainsMono.className,
                    "text-sm font-semibold text-foreground tabular-nums",
                  )}
                >
                  {numberFormatter.format(country.users)} sessions
                </span>
                <div className="flex gap-2 text-[10px] text-muted-foreground">
                  <span>M {country.demographics.men}%</span>
                  <span>W {country.demographics.women}%</span>
                  <span>O {country.demographics.other}%</span>
                </div>
              </div>
            </MarkerTooltip>
          </MapMarker>
        );
      })}
    </Map>
  );
};

const GeographyCard = ({
  size = "default",
}: {
  size?: "default" | "large";
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const selected =
    activeIndex !== null ? geographyCountries[activeIndex] : null;
  const hovered =
    hoveredIndex !== null ? geographyCountries[hoveredIndex] : null;
  const previewCountry = hovered ?? selected;

  const displayUsers = previewCountry
    ? previewCountry.users
    : totalGeographyUsers;
  const displayLabel = previewCountry
    ? { flag: previewCountry.flag, name: previewCountry.name }
    : null;

  const mapHeightClass =
    size === "large"
      ? "relative w-full flex-1 min-h-[min(48vh,480px)] sm:min-h-[min(52vh,560px)]"
      : "relative h-[200px]";

  return (
    <div className="flex h-full min-w-0 flex-col gap-4 bg-card p-4 sm:gap-5 sm:p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-foreground">
              Global live map
            </span>
            {size === "large" && (
              <span className="flex items-center gap-1 border border-emerald-500/25 bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-emerald-700 uppercase dark:text-emerald-400">
                <span className="size-1.5 rounded-full bg-emerald-500 motion-safe:animate-pulse" />
                Live
              </span>
            )}
          </div>
          <div className="flex items-baseline gap-2">
            <span
              className={cn(
                jetBrainsMono.className,
                "text-2xl font-semibold tabular-nums",
              )}
            >
              {numberFormatter.format(displayUsers)}
            </span>
            {displayLabel && (
              <span className="flex items-center gap-1 border bg-muted/30 px-1.5 py-0.5 text-xs text-muted-foreground">
                {displayLabel.flag} {displayLabel.name}
              </span>
            )}
          </div>
          {size === "large" && (
            <p className="text-xs text-muted-foreground">
              Concurrent sessions by region, weighted for the last sixty seconds
            </p>
          )}
        </div>
        <Button variant="outline" size="sm" className="h-7 px-2 text-xs">
          Drill down
        </Button>
      </div>

      <div className={cn(mapHeightClass, "overflow-hidden")}>
        <RealtimeSessionsMap
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          hoveredIndex={hoveredIndex}
          onHover={setHoveredIndex}
          size={size}
        />
      </div>
    </div>
  );
};

function StreamEventRow({
  e,
  toneStyles,
}: {
  e: LiveStreamEvent;
  toneStyles: Record<LiveStreamEvent["tone"], string>;
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-2">
        <span
          className={cn(
            "rounded-none border px-1.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase",
            toneStyles[e.tone],
          )}
        >
          {e.tone}
        </span>
        <span className="text-[10px] text-muted-foreground tabular-nums">
          {e.ago}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-foreground">{e.title}</p>
      <p className="mt-0.5 text-xs text-muted-foreground">{e.detail}</p>
    </>
  );
}

function LiveEventsStreamCard({ events }: { events: LiveStreamEvent[] }) {
  const toneStyles = {
    ok: "border-emerald-500/25 text-emerald-700 bg-emerald-500/10 dark:text-emerald-400",
    warn: "border-amber-500/25 text-amber-800 bg-amber-500/10 dark:text-amber-400",
    info: "border-sky-500/25 text-sky-800 bg-sky-500/10 dark:text-sky-400",
  };

  return (
    <div className="flex h-full flex-col bg-card">
      <div className="flex shrink-0 items-center justify-between border-b px-4 py-4 sm:px-5">
        <h2 className="text-sm font-medium text-foreground">
          Live signal stream
        </h2>
        <span className="text-xs text-muted-foreground">Streaming</span>
      </div>
      <div className="min-h-0 flex-1 overflow-hidden">
        <ul className="flex h-full flex-col divide-y divide-border">
          {events.map((e, i) => (
            <li
              key={`stream-slot-${i}`}
              className="flex min-h-20 flex-none flex-col justify-center px-4 py-3 sm:px-5"
            >
              {i === 0 ? (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                >
                  <StreamEventRow e={e} toneStyles={toneStyles} />
                </motion.div>
              ) : (
                <StreamEventRow e={e} toneStyles={toneStyles} />
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const DashboardContent = () => {
  const { activeNow, eventsPerMin, liveEvents } = useLivePulse();

  return (
    <main id="dashboard-main" className="flex w-full flex-1 flex-col bg-card">
      <DashboardHeading />

      <RealtimeKPIStatsRow activeNow={activeNow} eventsPerMin={eventsPerMin} />

      <div className="grid lg:grid-cols-12 lg:items-stretch">
        <div className="flex min-h-0 flex-col border-b lg:col-span-8 lg:border-r">
          <GeographyCard size="large" />
        </div>
        <div className="flex min-h-0 flex-col border-b lg:col-span-4">
          <LiveEventsStreamCard events={liveEvents} />
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="border-b lg:border-r">
          <ActiveSessionsByCountryCard />
        </div>
        <div className="border-b">
          <LatencyByCountryCard />
        </div>
      </div>
    </main>
  );
};

// ============================================================================
// Main Dashboard Component
// ============================================================================

const Dashboard13 = ({ className }: { className?: string }) => {
  return (
    <TooltipProvider>
      <SidebarProvider
        className={cn("bg-sidebar", className)}
        style={{ "--sidebar-width": "18rem" } as React.CSSProperties}
      >
        <a
          href="#dashboard-main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>
        <AppSidebar />
        <div className="h-svh w-full overflow-auto bg-background">
          <DashboardHeader />
          <SecondaryNav />
          <DashboardContent />
        </div>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export { Dashboard13 };
