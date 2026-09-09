"use client";

import {
  BarChart3,
  Bell,
  Box,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  FileText,
  Globe,
  LayoutDashboard,
  LineChart,
  LogOut,
  Menu,
  MessageSquare,
  Minus,
  Package,
  RefreshCw,
  RotateCcw,
  Search,
  Settings,
  ShoppingCart,
  Star,
  Tag,
  TrendingDown,
  TrendingUp,
  Truck,
  User,
  Users,
} from "lucide-react";
import * as React from "react";
import type { TooltipProps } from "recharts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

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
};

type UserData = {
  name: string;
  email: string;
  avatar: string;
};

type ShellData = {
  logo: {
    src: string;
    alt: string;
    title: string;
  };
  navGroups: NavGroup[];
  footerGroup: NavGroup;
  user: UserData;
};

type RichMetricStatItem = {
  title: string;
  value: number;
  trendValue: number;
  footerDelta: number;
  footerSubtextCount: number;
};

type DailyMetric = {
  day: string;
  orderCount: number;
  avgOrderValue: number;
  totalRevenue: number;
};

type ChannelRevenue = {
  month: string;
  online: number;
  inStore: number;
  wholesale: number;
  marketplace: number;
};

type ActivityEvent = {
  id: string;
  type: "order" | "refund" | "stock" | "review" | "shipment";
  message: string;
  timestamp: Date;
};

type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
  id: string;
  orderNumber: string;
  customer: string;
  total: number;
  status: OrderStatus;
  date: string;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat("en-US");

const oneDecimalFormatter = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

const shortDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
});

const formatTrendValue = (trendValue: number) => {
  if (trendValue === 0) return "0%";
  const sign = trendValue > 0 ? "+" : "-";
  return `${sign}${oneDecimalFormatter.format(Math.abs(trendValue))}%`;
};

const mixBase = "transparent";

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
};

const shellData: ShellData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Acme Store",
    title: "Acme Store",
  },
  navGroups: [
    {
      title: "Dashboard",
      items: [
        {
          label: "Overview",
          icon: LayoutDashboard,
          href: "#",
          isActive: true,
        },
        { label: "Real-time", icon: RefreshCw, href: "#" },
        { label: "Reports", icon: BarChart3, href: "#" },
      ],
    },
    {
      title: "Orders",
      items: [
        { label: "All Orders", icon: ClipboardList, href: "#" },
        { label: "Returns", icon: RotateCcw, href: "#" },
        { label: "Shipping", icon: Truck, href: "#" },
        { label: "Fulfillment", icon: Package, href: "#" },
      ],
    },
    {
      title: "Products",
      items: [
        {
          label: "Catalog",
          icon: Box,
          href: "#",
          children: [
            { label: "All Products", icon: FileText, href: "#" },
            { label: "Categories", icon: FileText, href: "#" },
          ],
        },
        { label: "Inventory", icon: Package, href: "#" },
        { label: "Pricing", icon: Tag, href: "#" },
      ],
    },
    {
      title: "Customers",
      items: [
        { label: "All Customers", icon: Users, href: "#" },
        { label: "Segments", icon: BarChart3, href: "#" },
        { label: "Messages", icon: MessageSquare, href: "#" },
      ],
    },
    {
      title: "Analytics",
      items: [
        { label: "Sales Analytics", icon: LineChart, href: "#" },
        { label: "Traffic", icon: Globe, href: "#" },
        { label: "Conversion", icon: TrendingUp, href: "#" },
      ],
    },
  ],
  footerGroup: {
    title: "Settings",
    items: [{ label: "Settings", icon: Settings, href: "#" }],
  },
  user: {
    name: "John Doe",
    email: "john@acme.store",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  },
};

const richMetricStats: RichMetricStatItem[] = [
  {
    title: "Total Revenue",
    value: 1_284_350,
    trendValue: 8.2,
    footerDelta: 97_420,
    footerSubtextCount: 18_450,
  },
  {
    title: "Orders Today",
    value: 342,
    trendValue: 12.5,
    footerDelta: 38,
    footerSubtextCount: 342,
  },
  {
    title: "Avg Order Value",
    value: 127.45,
    trendValue: -2.3,
    footerDelta: -3.05,
    footerSubtextCount: 9_800,
  },
  {
    title: "Conversion Rate",
    value: 3.42,
    trendValue: 0.8,
    footerDelta: 0.03,
    footerSubtextCount: 145_000,
  },
];

const dailyMetrics: DailyMetric[] = [
  { day: "Jan 1", orderCount: 142, avgOrderValue: 89, totalRevenue: 12638 },
  { day: "Jan 2", orderCount: 198, avgOrderValue: 112, totalRevenue: 22176 },
  { day: "Jan 3", orderCount: 167, avgOrderValue: 95, totalRevenue: 15865 },
  { day: "Jan 4", orderCount: 245, avgOrderValue: 78, totalRevenue: 19110 },
  { day: "Jan 5", orderCount: 289, avgOrderValue: 134, totalRevenue: 38726 },
  { day: "Jan 6", orderCount: 112, avgOrderValue: 156, totalRevenue: 17472 },
  { day: "Jan 7", orderCount: 178, avgOrderValue: 102, totalRevenue: 18156 },
  { day: "Jan 8", orderCount: 234, avgOrderValue: 88, totalRevenue: 20592 },
  { day: "Jan 9", orderCount: 156, avgOrderValue: 145, totalRevenue: 22620 },
  { day: "Jan 10", orderCount: 267, avgOrderValue: 110, totalRevenue: 29370 },
  { day: "Jan 11", orderCount: 189, avgOrderValue: 167, totalRevenue: 31563 },
  { day: "Jan 12", orderCount: 145, avgOrderValue: 92, totalRevenue: 13340 },
  { day: "Jan 13", orderCount: 278, avgOrderValue: 125, totalRevenue: 34750 },
  { day: "Jan 14", orderCount: 201, avgOrderValue: 138, totalRevenue: 27738 },
  { day: "Jan 15", orderCount: 134, avgOrderValue: 176, totalRevenue: 23584 },
  { day: "Jan 16", orderCount: 256, avgOrderValue: 99, totalRevenue: 25344 },
  { day: "Jan 17", orderCount: 187, avgOrderValue: 142, totalRevenue: 26554 },
  { day: "Jan 18", orderCount: 223, avgOrderValue: 85, totalRevenue: 18955 },
  { day: "Jan 19", orderCount: 165, avgOrderValue: 118, totalRevenue: 19470 },
  { day: "Jan 20", orderCount: 298, avgOrderValue: 105, totalRevenue: 31290 },
  { day: "Jan 21", orderCount: 176, avgOrderValue: 162, totalRevenue: 28512 },
  { day: "Jan 22", orderCount: 210, avgOrderValue: 94, totalRevenue: 19740 },
  { day: "Jan 23", orderCount: 243, avgOrderValue: 128, totalRevenue: 31104 },
  { day: "Jan 24", orderCount: 159, avgOrderValue: 151, totalRevenue: 24009 },
  { day: "Jan 25", orderCount: 281, avgOrderValue: 87, totalRevenue: 24447 },
  { day: "Jan 26", orderCount: 195, avgOrderValue: 143, totalRevenue: 27885 },
  { day: "Jan 27", orderCount: 128, avgOrderValue: 189, totalRevenue: 24192 },
  { day: "Jan 28", orderCount: 267, avgOrderValue: 96, totalRevenue: 25632 },
  { day: "Jan 29", orderCount: 214, avgOrderValue: 131, totalRevenue: 28034 },
  { day: "Jan 30", orderCount: 183, avgOrderValue: 117, totalRevenue: 21411 },
];

const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
const monthLabel = (monthIndex: number) =>
  monthFormatter.format(new Date(2025, monthIndex, 1));

const channelRevenueData: ChannelRevenue[] = [
  {
    month: monthLabel(0),
    online: 42000,
    inStore: 18000,
    wholesale: 12000,
    marketplace: 8000,
  },
  {
    month: monthLabel(1),
    online: 38000,
    inStore: 21000,
    wholesale: 14000,
    marketplace: 9500,
  },
  {
    month: monthLabel(2),
    online: 51000,
    inStore: 19000,
    wholesale: 11000,
    marketplace: 7200,
  },
  {
    month: monthLabel(3),
    online: 45000,
    inStore: 22000,
    wholesale: 15000,
    marketplace: 10800,
  },
  {
    month: monthLabel(4),
    online: 58000,
    inStore: 24000,
    wholesale: 13000,
    marketplace: 11500,
  },
  {
    month: monthLabel(5),
    online: 62000,
    inStore: 20000,
    wholesale: 16000,
    marketplace: 12300,
  },
];

const GAP_OFFSET = 2500;

const fullYearData = [
  {
    quarter: "Q1 '21",
    thisYear: 28000,
    lastYear: -18000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q2 '21",
    thisYear: 35000,
    lastYear: -22000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q3 '21",
    thisYear: 32000,
    lastYear: -20000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q1 '22",
    thisYear: 42000,
    lastYear: -25000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q2 '22",
    thisYear: 48000,
    lastYear: -28000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q3 '22",
    thisYear: 45000,
    lastYear: -24000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q1 '23",
    thisYear: 55000,
    lastYear: -30000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q2 '23",
    thisYear: 62000,
    lastYear: -32000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q3 '23",
    thisYear: 58000,
    lastYear: -27000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q1 '24",
    thisYear: 65000,
    lastYear: -35000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q2 '24",
    thisYear: 70000,
    lastYear: -33000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
  {
    quarter: "Q3 '24",
    thisYear: 68000,
    lastYear: -30000,
    gapUp: GAP_OFFSET,
    gapDown: -GAP_OFFSET,
  },
];

const revenueDomainMax =
  Math.ceil(
    Math.max(
      ...fullYearData.map((entry) =>
        Math.max(
          Math.abs(entry.thisYear) + GAP_OFFSET,
          Math.abs(entry.lastYear) + GAP_OFFSET,
        ),
      ),
    ) / 5000,
  ) * 5000;

const activityEvents: ActivityEvent[] = [
  {
    id: "1",
    type: "order",
    message: "New order #ORD-4892 placed by Sarah J.",
    timestamp: new Date(2025, 0, 31, 14, 32),
  },
  {
    id: "2",
    type: "shipment",
    message: "Order #ORD-4888 shipped via FedEx",
    timestamp: new Date(2025, 0, 31, 13, 15),
  },
  {
    id: "3",
    type: "review",
    message: "5-star review on Wireless Headphones Pro",
    timestamp: new Date(2025, 0, 31, 12, 48),
  },
  {
    id: "4",
    type: "refund",
    message: "Refund processed for order #ORD-4870",
    timestamp: new Date(2025, 0, 31, 11, 22),
  },
  {
    id: "5",
    type: "stock",
    message: "Low stock alert: USB-C Charger (12 left)",
    timestamp: new Date(2025, 0, 31, 10, 55),
  },
  {
    id: "6",
    type: "order",
    message: "New order #ORD-4891 placed by Michael C.",
    timestamp: new Date(2025, 0, 31, 10, 10),
  },
  {
    id: "7",
    type: "shipment",
    message: "Order #ORD-4885 delivered successfully",
    timestamp: new Date(2025, 0, 31, 9, 45),
  },
  {
    id: "8",
    type: "review",
    message: "4-star review on Organic Cotton Tee",
    timestamp: new Date(2025, 0, 31, 9, 20),
  },
  {
    id: "9",
    type: "stock",
    message: "Low stock alert: Yoga Mat Premium (5 left)",
    timestamp: new Date(2025, 0, 31, 8, 30),
  },
  {
    id: "10",
    type: "order",
    message: "New order #ORD-4890 placed by Emma W.",
    timestamp: new Date(2025, 0, 31, 8, 5),
  },
  {
    id: "11",
    type: "refund",
    message: "Refund requested for order #ORD-4862",
    timestamp: new Date(2025, 0, 31, 7, 40),
  },
  {
    id: "12",
    type: "shipment",
    message: "Order #ORD-4882 out for delivery",
    timestamp: new Date(2025, 0, 31, 7, 15),
  },
];

const activityIcons: Record<
  ActivityEvent["type"],
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  order: ShoppingCart,
  refund: RotateCcw,
  stock: Package,
  review: Star,
  shipment: Truck,
};

const activityColors: Record<ActivityEvent["type"], string> = {
  order:
    "text-emerald-600 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-900/30",
  refund: "text-red-600 bg-red-50 dark:text-red-400 dark:bg-red-900/30",
  stock: "text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-900/30",
  review: "text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30",
  shipment:
    "text-violet-600 bg-violet-50 dark:text-violet-400 dark:bg-violet-900/30",
};

const orderStatuses: OrderStatus[] = [
  "Processing",
  "Shipped",
  "Delivered",
  "Cancelled",
];

const statusStyles: Record<OrderStatus, string> = {
  Processing:
    "bg-amber-50 text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-900/30 dark:text-amber-400 dark:ring-amber-400/20",
  Shipped:
    "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-700/10 dark:bg-blue-900/30 dark:text-blue-400 dark:ring-blue-400/20",
  Delivered:
    "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-900/30 dark:text-emerald-400 dark:ring-emerald-400/20",
  Cancelled:
    "bg-red-50 text-red-700 ring-1 ring-inset ring-red-600/10 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-400/20",
};

const orders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-2025-001",
    customer: "Sarah Johnson",
    status: "Delivered",
    total: 2499.0,
    date: "2025-01-31",
  },
  {
    id: "2",
    orderNumber: "ORD-2025-002",
    customer: "Michael Chen",
    status: "Shipped",
    total: 1348.0,
    date: "2025-01-30",
  },
  {
    id: "3",
    orderNumber: "ORD-2025-003",
    customer: "Emma Wilson",
    status: "Processing",
    total: 1198.0,
    date: "2025-01-30",
  },
  {
    id: "4",
    orderNumber: "ORD-2025-004",
    customer: "James Rodriguez",
    status: "Delivered",
    total: 799.0,
    date: "2025-01-29",
  },
  {
    id: "5",
    orderNumber: "ORD-2025-005",
    customer: "Lisa Park",
    status: "Cancelled",
    total: 599.0,
    date: "2025-01-29",
  },
  {
    id: "6",
    orderNumber: "ORD-2025-006",
    customer: "David Kim",
    status: "Shipped",
    total: 5498.0,
    date: "2025-01-28",
  },
  {
    id: "7",
    orderNumber: "ORD-2025-007",
    customer: "Anna Martinez",
    status: "Delivered",
    total: 1199.0,
    date: "2025-01-28",
  },
  {
    id: "8",
    orderNumber: "ORD-2025-008",
    customer: "Robert Taylor",
    status: "Processing",
    total: 1128.0,
    date: "2025-01-27",
  },
  {
    id: "9",
    orderNumber: "ORD-2025-009",
    customer: "Jennifer Lee",
    status: "Shipped",
    total: 449.0,
    date: "2025-01-27",
  },
  {
    id: "10",
    orderNumber: "ORD-2025-010",
    customer: "William Brown",
    status: "Delivered",
    total: 2199.0,
    date: "2025-01-26",
  },
  {
    id: "11",
    orderNumber: "ORD-2025-011",
    customer: "Sophia Davis",
    status: "Cancelled",
    total: 349.0,
    date: "2025-01-26",
  },
  {
    id: "12",
    orderNumber: "ORD-2025-012",
    customer: "Daniel Garcia",
    status: "Processing",
    total: 899.0,
    date: "2025-01-25",
  },
  {
    id: "13",
    orderNumber: "ORD-2025-013",
    customer: "Olivia White",
    status: "Delivered",
    total: 3250.0,
    date: "2025-01-25",
  },
  {
    id: "14",
    orderNumber: "ORD-2025-014",
    customer: "Thomas Harris",
    status: "Shipped",
    total: 742.0,
    date: "2025-01-24",
  },
  {
    id: "15",
    orderNumber: "ORD-2025-015",
    customer: "Rachel Clark",
    status: "Processing",
    total: 1875.0,
    date: "2025-01-24",
  },
  {
    id: "16",
    orderNumber: "ORD-2025-016",
    customer: "Kevin Lewis",
    status: "Delivered",
    total: 564.0,
    date: "2025-01-23",
  },
  {
    id: "17",
    orderNumber: "ORD-2025-017",
    customer: "Amanda Robinson",
    status: "Cancelled",
    total: 2100.0,
    date: "2025-01-23",
  },
  {
    id: "18",
    orderNumber: "ORD-2025-018",
    customer: "Chris Walker",
    status: "Shipped",
    total: 1450.0,
    date: "2025-01-22",
  },
  {
    id: "19",
    orderNumber: "ORD-2025-019",
    customer: "Natalie Young",
    status: "Delivered",
    total: 890.0,
    date: "2025-01-22",
  },
  {
    id: "20",
    orderNumber: "ORD-2025-020",
    customer: "Brian Allen",
    status: "Processing",
    total: 3675.0,
    date: "2025-01-21",
  },
];

const PAGE_SIZE_OPTIONS = [10, 25, 50];

const scatterChartConfig = {
  scatter: { label: "Daily Metrics", color: palette.primary },
} satisfies ChartConfig;

const channelChartConfig = {
  online: { label: "Online", color: palette.primary },
  inStore: { label: "In-Store", theme: palette.secondary },
  wholesale: { label: "Wholesale", theme: palette.tertiary },
  marketplace: { label: "Marketplace", theme: palette.quaternary },
} satisfies ChartConfig;

const revenueChartConfig = {
  thisYear: { label: "This Year", color: palette.primary },
  lastYear: { label: "Last Year", theme: palette.secondary },
} satisfies ChartConfig;

const chartHeaderClass =
  "flex h-14 items-center justify-between border-b px-4 sm:px-5";
const chartIconBtnClass = "size-7 sm:size-8";
const chartIconClass = "size-4 text-muted-foreground sm:size-[18px]";
const chartTitleClass = "text-sm font-medium text-pretty sm:text-base";
const tooltipLabelClass = "text-[10px] text-muted-foreground sm:text-xs";
const tooltipValueClass = "text-[10px] font-medium text-foreground sm:text-xs";

const NavDropdown = ({
  group,
  isActive,
  onSelect,
}: {
  group: NavGroup;
  isActive: boolean;
  onSelect: () => void;
}) => {
  return (
    <Button
      variant="ghost"
      className={cn("gap-1", isActive && "bg-muted")}
      onClick={onSelect}
    >
      {group.title}
    </Button>
  );
};

const SubNav = ({
  group,
  activeItem,
  onSelectItem,
}: {
  group: NavGroup;
  activeItem: NavItem | null;
  onSelectItem: (item: NavItem) => void;
}) => {
  return (
    <div className="border-b bg-muted/30">
      <div className="mx-auto flex h-10 w-full max-w-7xl items-center gap-1 px-4 lg:px-6">
        {group.items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem?.label === item.label;
          const hasChildren = item.children && item.children.length > 0;

          if (hasChildren) {
            return (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-7 gap-1.5 text-sm",
                      isActive && "bg-accent text-accent-foreground",
                    )}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                    <ChevronDown className="size-3" aria-hidden="true" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.children!.map((child) => {
                    const ChildIcon = child.icon;
                    return (
                      <DropdownMenuItem key={child.label} asChild>
                        <a
                          href={child.href}
                          className="flex items-center gap-2"
                        >
                          <ChildIcon className="size-4" aria-hidden="true" />
                          {child.label}
                        </a>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
            );
          }

          return (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={cn(
                "h-7 gap-1.5 text-sm",
                isActive && "bg-accent text-accent-foreground",
              )}
              onClick={() => onSelectItem(item)}
            >
              <Icon className="size-4" aria-hidden="true" />
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

const MobileNav = ({
  activeGroupIndex,
  onSelectGroup,
}: {
  activeGroupIndex: number;
  onSelectGroup: (index: number) => void;
}) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <img
              src={shellData.logo.src}
              alt={shellData.logo.alt}
              className="size-6"
            />
            {shellData.logo.title}
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-4">
          {shellData.navGroups.map((group, index) => (
            <div key={group.title}>
              <button
                onClick={() => onSelectGroup(index)}
                className={cn(
                  "mb-2 text-xs font-medium tracking-wider uppercase",
                  index === activeGroupIndex
                    ? "text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {group.title}
              </button>
              {index === activeGroupIndex && (
                <div className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={item.label}>
                        <a
                          href={item.href}
                          className={cn(
                            "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted",
                            item.isActive && "bg-muted font-medium",
                          )}
                        >
                          <Icon className="size-4" aria-hidden="true" />
                          {item.label}
                        </a>
                        {item.children?.map((child) => {
                          const ChildIcon = child.icon;
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              className="flex items-center gap-2 rounded-md py-1.5 pr-2 pl-8 text-sm hover:bg-muted"
                            >
                              <ChildIcon
                                className="size-4"
                                aria-hidden="true"
                              />
                              {child.label}
                            </a>
                          );
                        })}
                      </React.Fragment>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
          <div className="mt-auto border-t pt-4">
            {shellData.footerGroup.items.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-muted"
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const NavUser = ({ user }: { user: UserData }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2 px-2">
          <Avatar className="size-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="hidden text-sm font-medium md:inline">
            {user.name}
          </span>
          <ChevronsUpDown
            className="hidden size-4 md:block"
            aria-hidden="true"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
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
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const DashboardHeader = () => {
  return (
    <div className="flex flex-col gap-0.5">
      <h1 className="text-lg font-semibold sm:text-xl">Good morning, James.</h1>
      <p className="text-sm text-muted-foreground">
        Here&apos;s what&apos;s happening with your store today.
      </p>
    </div>
  );
};

const StatCards = () => {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {richMetricStats.map((stat) => {
        const isPositive = stat.trendValue > 0;
        const isNeutral = stat.trendValue === 0;

        const Icon = isNeutral ? Minus : isPositive ? TrendingUp : TrendingDown;

        const trendClass = isNeutral
          ? "text-foreground bg-muted"
          : isPositive
            ? "text-success border-success/20 bg-success/10"
            : "text-destructive border-destructive/20 bg-destructive/10";

        const formattedTrend = formatTrendValue(stat.trendValue);

        let formattedValue: string;
        if (stat.title === "Conversion Rate") {
          formattedValue = `${oneDecimalFormatter.format(stat.value)}%`;
        } else if (stat.title === "Orders Today") {
          formattedValue = numberFormatter.format(stat.value);
        } else {
          formattedValue = currencyFormatter.format(stat.value);
        }

        let footerLabel: string;
        if (stat.title === "Conversion Rate") {
          const deltaPrefix = stat.footerDelta > 0 ? "+" : "";
          footerLabel = `${deltaPrefix}${oneDecimalFormatter.format(stat.footerDelta)}% from last month`;
        } else if (stat.title === "Orders Today") {
          const deltaPrefix = stat.footerDelta > 0 ? "+" : "";
          footerLabel = `${deltaPrefix}${numberFormatter.format(stat.footerDelta)} from yesterday`;
        } else {
          const deltaPrefix =
            stat.footerDelta > 0 ? "+" : stat.footerDelta < 0 ? "-" : "";
          footerLabel = `${deltaPrefix}${currencyFormatter.format(Math.abs(stat.footerDelta))} from last month`;
        }

        const footerSubtext = `Based on ${numberFormatter.format(stat.footerSubtextCount)} ${stat.title === "Conversion Rate" ? "visitors" : "orders"}`;

        return (
          <Card key={stat.title} className="@container/card shadow-none">
            <CardHeader className="flex items-start justify-between gap-2">
              <div>
                <CardDescription className="font-medium">
                  {stat.title}
                </CardDescription>
                <CardTitle className="text-2xl font-bold @[600px]/card:text-4xl @[800px]/card:text-5xl">
                  {formattedValue}
                </CardTitle>
              </div>
              <span
                className={cn(
                  "inline-flex items-center gap-1 rounded-md border px-1.5 py-0.5 text-xs font-medium",
                  trendClass,
                )}
              >
                <Icon className="size-3" aria-hidden="true" />
                {formattedTrend}
              </span>
            </CardHeader>

            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex items-center gap-1.5 font-medium">
                <span
                  className={
                    isNeutral
                      ? ""
                      : isPositive
                        ? "text-success"
                        : "text-destructive"
                  }
                >
                  {footerLabel}
                </span>
                <Icon
                  className={cn(
                    "size-3.5",
                    isNeutral
                      ? "text-muted-foreground"
                      : isPositive
                        ? "text-success"
                        : "text-destructive",
                  )}
                  aria-hidden="true"
                />
              </div>
              <div className="text-xs text-muted-foreground">
                {footerSubtext}
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

function ScatterTooltip({ active, payload }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  const data = payload[0]?.payload as DailyMetric | undefined;
  if (!data) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
      <p className="mb-1.5 text-xs font-medium text-foreground">{data.day}</p>
      <div className="space-y-1">
        <div className="flex items-center justify-between gap-4">
          <span className={tooltipLabelClass}>Orders:</span>
          <span className={tooltipValueClass}>
            {numberFormatter.format(data.orderCount)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <span className={tooltipLabelClass}>AOV:</span>
          <span className={tooltipValueClass}>
            {currencyFormatter.format(data.avgOrderValue)}
          </span>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-border pt-1">
          <span className={tooltipLabelClass}>Revenue:</span>
          <span className={tooltipValueClass}>
            {currencyFormatter.format(data.totalRevenue)}
          </span>
        </div>
      </div>
    </div>
  );
}

const AOVScatterChart = () => {
  const totalOrders = dailyMetrics.reduce((s, d) => s + d.orderCount, 0);
  const totalRevenue = dailyMetrics.reduce((s, d) => s + d.totalRevenue, 0);
  const avgAOV = totalOrders === 0 ? 0 : totalRevenue / totalOrders;

  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-xl border bg-card">
      <div className={chartHeaderClass}>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className={chartIconBtnClass}
            aria-label="AOV vs Order Volume"
          >
            <BarChart3 className={chartIconClass} aria-hidden="true" />
          </Button>
          <h2 className={chartTitleClass}>AOV vs Order Volume</h2>
        </div>
        <span className={tooltipLabelClass}>Last 30 days</span>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5">
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <p className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              {currencyFormatter.format(avgAOV)}
            </p>
            <p className="text-[10px] tracking-wider text-muted-foreground uppercase sm:text-xs">
              Avg. AOV
            </p>
          </div>
          <div className="w-px self-stretch bg-border" />
          <div className="flex flex-col gap-1">
            <p className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              {numberFormatter.format(totalOrders)}
            </p>
            <p className="text-[10px] tracking-wider text-muted-foreground uppercase sm:text-xs">
              Total Orders
            </p>
          </div>
          <div className="w-px self-stretch bg-border" />
          <div className="flex flex-col gap-1">
            <p className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
              {compactCurrencyFormatter.format(totalRevenue)}
            </p>
            <p className="text-[10px] tracking-wider text-muted-foreground uppercase sm:text-xs">
              Total Revenue
            </p>
          </div>
        </div>
        <div className="h-[240px] w-full min-w-0 sm:h-[280px]">
          <ChartContainer
            config={scatterChartConfig}
            className="aspect-auto h-full w-full"
          >
            <ScatterChart margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="0" />
              <XAxis
                type="number"
                dataKey="orderCount"
                name="Orders"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                type="number"
                dataKey="avgOrderValue"
                name="AOV"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                width={50}
                tickFormatter={(v) => `$${v}`}
              />
              <ZAxis
                type="number"
                dataKey="totalRevenue"
                range={[40, 400]}
                name="Revenue"
              />
              <Tooltip
                content={<ScatterTooltip />}
                cursor={{ strokeDasharray: "3 3" }}
              />
              <Scatter
                data={dailyMetrics}
                fill="var(--color-scatter)"
                fillOpacity={0.6}
                strokeWidth={0}
              />
            </ScatterChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

function ChannelTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const total = payload.reduce(
    (sum, entry) => sum + Number(entry.value ?? 0),
    0,
  );

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
      <p className="mb-1.5 text-xs font-medium text-foreground">{label}</p>
      <div className="space-y-1">
        {payload.map((entry) => {
          const dataKey = String(entry.dataKey ?? "");
          const label =
            channelChartConfig[dataKey]?.label ?? entry.name ?? dataKey;
          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: String(entry.color) }}
              />
              <span className={tooltipLabelClass}>{label}:</span>
              <span className={tooltipValueClass}>
                {compactCurrencyFormatter.format(Number(entry.value))}
              </span>
            </div>
          );
        })}
        <div className="border-t border-border pt-1">
          <span className={tooltipValueClass}>
            Total: {compactCurrencyFormatter.format(total)}
          </span>
        </div>
      </div>
    </div>
  );
}

const ChannelRevenueChart = () => {
  return (
    <div className="flex min-w-0 flex-col rounded-xl border bg-card">
      <div className={chartHeaderClass}>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className={chartIconBtnClass}
            aria-label="Revenue by Channel"
          >
            <BarChart3 className={chartIconClass} aria-hidden="true" />
          </Button>
          <h2 className={chartTitleClass}>Revenue by Channel</h2>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          {[
            { label: "Online", color: palette.primary },
            { label: "In-Store", color: palette.secondary.light },
            { label: "Wholesale", color: palette.tertiary.light },
            { label: "Marketplace", color: palette.quaternary.light },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div
                className="size-2 rounded-full sm:size-2.5"
                style={{ backgroundColor: item.color }}
              />
              <span className={tooltipLabelClass}>{item.label}</span>
            </div>
          ))}
        </div>

        <div className="h-[240px] w-full min-w-0 sm:h-[280px]">
          <ChartContainer config={channelChartConfig} className="h-full w-full">
            <BarChart
              layout="vertical"
              data={channelRevenueData}
              barSize={24}
              margin={{ top: 0, right: 0, bottom: 0, left: -9 }}
            >
              <XAxis
                type="number"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                tickFormatter={(v) => compactCurrencyFormatter.format(v)}
              />
              <YAxis
                type="category"
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                width={36}
              />
              <Tooltip
                content={<ChannelTooltip />}
                cursor={{ fillOpacity: 0.05 }}
              />
              <Bar
                dataKey="online"
                stackId="channel"
                fill="var(--color-online)"
                radius={[4, 0, 0, 4]}
              />
              <Bar
                dataKey="inStore"
                stackId="channel"
                fill="var(--color-inStore)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="wholesale"
                stackId="channel"
                fill="var(--color-wholesale)"
                radius={[0, 0, 0, 0]}
              />
              <Bar
                dataKey="marketplace"
                stackId="channel"
                fill="var(--color-marketplace)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

function RevenueTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const visiblePayload = payload.filter(
    (entry) => entry.dataKey !== "gapUp" && entry.dataKey !== "gapDown",
  );

  if (!visiblePayload.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
      <p className="mb-1.5 text-xs font-medium text-foreground">{label}</p>
      <div className="space-y-1">
        {visiblePayload.map((entry) => {
          const dataKey = String(entry.dataKey ?? "");
          const cfgLabel =
            revenueChartConfig[dataKey as keyof typeof revenueChartConfig]
              ?.label ?? dataKey;
          return (
            <div key={entry.dataKey} className="flex items-center gap-2">
              <div
                className="size-2 rounded-full"
                style={{ backgroundColor: String(entry.color) }}
              />
              <span className={tooltipLabelClass}>{cfgLabel}:</span>
              <span className={tooltipValueClass}>
                {currencyFormatter.format(Math.abs(Number(entry.value)))}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const RevenueOverviewChart = () => {
  const totalThisYear = fullYearData.reduce(
    (sum, entry) => sum + entry.thisYear,
    0,
  );
  const totalLastYear = fullYearData.reduce(
    (sum, entry) => sum + Math.abs(entry.lastYear),
    0,
  );
  const changePercent =
    totalLastYear === 0
      ? 0
      : ((totalThisYear - totalLastYear) / totalLastYear) * 100;
  const isPositive = changePercent >= 0;

  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-xl border bg-card">
      <div className={chartHeaderClass}>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className={chartIconBtnClass}
            aria-label="Revenue Overview"
          >
            <BarChart3 className={chartIconClass} aria-hidden="true" />
          </Button>
          <h2 className={chartTitleClass}>Revenue Overview</h2>
        </div>
        <div className="flex items-center gap-3 sm:gap-5">
          {[
            { label: "This Year", color: palette.primary },
            { label: "Last Year", color: palette.secondary.light },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div
                className="size-2 rounded-full sm:size-2.5"
                style={{ backgroundColor: item.color }}
              />
              <span className={tooltipLabelClass}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 sm:gap-5 sm:p-5">
        <div className="flex flex-col gap-1">
          <p className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
            {currencyFormatter.format(totalThisYear)}
          </p>
          <p
            className={cn(
              "text-[10px] tracking-wider uppercase sm:text-xs",
              isPositive ? "text-emerald-600" : "text-red-600",
            )}
          >
            {isPositive ? "+" : "-"}
            {Math.abs(changePercent).toFixed(1)}% vs last year
          </p>
        </div>
        <div className="h-[240px] w-full min-w-0 sm:h-[280px]">
          <ChartContainer config={revenueChartConfig} className="h-full w-full">
            <BarChart data={fullYearData} stackOffset="sign">
              <CartesianGrid vertical={false} strokeDasharray="0" />
              <XAxis
                dataKey="quarter"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <YAxis
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 10 }}
                width={50}
                domain={[-revenueDomainMax, revenueDomainMax]}
                tickCount={9}
                tickFormatter={(v: number) =>
                  compactCurrencyFormatter.format(Math.abs(v))
                }
              />

              <Tooltip
                content={<RevenueTooltip />}
                cursor={{ fillOpacity: 0.05 }}
              />
              {/* Invisible spacer pushes thisYear bars above zero line */}
              <Bar
                dataKey="gapUp"
                stackId="revenue"
                fill="transparent"
                barSize={22}
                isAnimationActive={false}
              />
              <Bar
                dataKey="thisYear"
                stackId="revenue"
                fill="var(--color-thisYear)"
                radius={6}
                barSize={22}
              />
              {/* Invisible spacer pushes lastYear bars below zero line */}
              <Bar
                dataKey="gapDown"
                stackId="revenue"
                fill="transparent"
                barSize={22}
                isAnimationActive={false}
              />
              <Bar
                dataKey="lastYear"
                stackId="revenue"
                fill="var(--color-lastYear)"
                fillOpacity={0.4}
                radius={6}
                barSize={22}
              />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </div>
  );
};

const ActivityFeed = () => {
  return (
    <div className="flex flex-col rounded-xl border bg-card">
      <div className={chartHeaderClass}>
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className={chartIconBtnClass}
            aria-label="Recent Activity"
          >
            <Bell className={chartIconClass} aria-hidden="true" />
          </Button>
          <h2 className={chartTitleClass}>Recent Activity</h2>
        </div>
      </div>

      <ScrollArea className="h-[340px] sm:h-[370px]">
        <div className="divide-y px-4 sm:px-5">
          {activityEvents.map((event) => {
            const Icon = activityIcons[event.type];
            const colorClass = activityColors[event.type];

            return (
              <div key={event.id} className="flex items-start gap-3 py-3">
                <div
                  className={cn(
                    "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full",
                    colorClass,
                  )}
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-foreground sm:text-sm">
                    {event.message}
                  </p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground sm:text-xs">
                    {shortDateFormatter.format(event.timestamp)},{" "}
                    {timeFormatter.format(event.timestamp)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

const RecentOrdersTable = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [statusFilter, setStatusFilter] = React.useState<OrderStatus | "all">(
    "all",
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [isHydrated, setIsHydrated] = React.useState(false);

  // Hydrate from URL on mount
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const q = params.get("q");
    if (q) setSearchQuery(q);

    const nextStatus = params.get("status");
    if (
      nextStatus &&
      (nextStatus === "all" ||
        orderStatuses.includes(nextStatus as OrderStatus))
    ) {
      setStatusFilter(nextStatus as OrderStatus | "all");
    }

    const nextPage = Number(params.get("page"));
    if (!Number.isNaN(nextPage) && nextPage > 0) {
      setCurrentPage(nextPage);
    }

    const nextPageSize = Number(params.get("pageSize"));
    if (PAGE_SIZE_OPTIONS.includes(nextPageSize)) {
      setPageSize(nextPageSize);
    }

    setIsHydrated(true);
  }, []);

  const filteredOrders = React.useMemo(() => {
    return orders.filter((order) => {
      const matchesSearch =
        order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        order.orderNumber.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "all" || order.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));

  const paginatedOrders = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredOrders.slice(startIndex, startIndex + pageSize);
  }, [filteredOrders, currentPage, pageSize]);

  // Reset page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter, pageSize]);

  // Sync state to URL
  React.useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    if (searchQuery) {
      params.set("q", searchQuery);
    } else {
      params.delete("q");
    }

    if (statusFilter !== "all") {
      params.set("status", statusFilter);
    } else {
      params.delete("status");
    }

    if (currentPage > 1) {
      params.set("page", String(currentPage));
    } else {
      params.delete("page");
    }

    if (pageSize !== PAGE_SIZE_OPTIONS[0]) {
      params.set("pageSize", String(pageSize));
    } else {
      params.delete("pageSize");
    }

    const nextQuery = params.toString();
    const nextUrl = nextQuery
      ? `${window.location.pathname}?${nextQuery}`
      : window.location.pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [searchQuery, statusFilter, currentPage, pageSize, isHydrated]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const startRow = filteredOrders.length ? (currentPage - 1) * pageSize + 1 : 0;
  const endRow = Math.min(currentPage * pageSize, filteredOrders.length);

  return (
    <div className="rounded-xl border bg-card">
      <div className="flex flex-col gap-3 px-4 pt-4 sm:flex-row sm:items-center sm:gap-4 sm:px-6">
        <div className="flex items-center gap-2">
          <h2 className={chartTitleClass}>Recent Orders</h2>
          <span className="ml-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset sm:text-xs dark:bg-gray-800/50 dark:text-gray-400 dark:ring-gray-400/20">
            {filteredOrders.length}
          </span>
        </div>

        <div className="flex flex-1 flex-wrap items-center gap-2 sm:justify-end">
          <div className="relative flex-1 sm:flex-none">
            <Search
              className="absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              placeholder="Search orders..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              name="order-search"
              inputMode="search"
              autoComplete="off"
              aria-label="Search orders"
              className="h-8 w-full pl-9 text-sm sm:h-9 sm:w-[200px]"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 sm:h-9 sm:gap-2"
                aria-label="Filter by status"
              >
                <span className="text-xs sm:text-sm">
                  {statusFilter === "all" ? "All Statuses" : statusFilter}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[180px]">
              <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
              <DropdownMenuCheckboxItem
                checked={statusFilter === "all"}
                onCheckedChange={() => setStatusFilter("all")}
              >
                All Statuses
              </DropdownMenuCheckboxItem>
              {orderStatuses.map((status) => (
                <DropdownMenuCheckboxItem
                  key={status}
                  checked={statusFilter === status}
                  onCheckedChange={() => setStatusFilter(status)}
                >
                  {status}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="px-4 pt-3 pb-4 sm:px-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="text-xs font-medium text-muted-foreground sm:text-sm">
                Order Ref
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground sm:text-sm">
                Customer
              </TableHead>
              <TableHead className="hidden text-xs font-medium text-muted-foreground sm:table-cell sm:text-sm">
                Date
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground sm:text-sm">
                Total
              </TableHead>
              <TableHead className="text-xs font-medium text-muted-foreground sm:text-sm">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="h-20 text-center text-sm text-muted-foreground"
                >
                  No orders found.
                </TableCell>
              </TableRow>
            ) : (
              paginatedOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {order.orderNumber}
                  </TableCell>
                  <TableCell className="text-xs text-foreground sm:text-sm">
                    {order.customer}
                  </TableCell>
                  <TableCell className="hidden text-xs text-muted-foreground sm:table-cell sm:text-sm">
                    {shortDateFormatter.format(new Date(order.date))}
                  </TableCell>
                  <TableCell className="text-xs text-foreground tabular-nums sm:text-sm">
                    {currencyFormatter.format(order.total)}
                  </TableCell>
                  <TableCell>
                    <span
                      className={cn(
                        "inline-flex items-center rounded-md px-2 py-1 text-[10px] font-medium sm:text-xs",
                        statusStyles[order.status],
                      )}
                    >
                      {order.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col items-center justify-between gap-3 border-t px-4 py-3 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2 text-xs text-muted-foreground sm:text-sm">
          <span className="hidden sm:inline">Rows per page:</span>
          <Select
            value={pageSize.toString()}
            onValueChange={(value) => setPageSize(Number(value))}
          >
            <SelectTrigger className="h-8 w-[70px]" aria-label="Rows per page">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {PAGE_SIZE_OPTIONS.map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <span>
            {startRow}-{endRow} of {filteredOrders.length}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="icon"
            className="size-7"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            <ChevronLeft className="size-3.5" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-7"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            <ChevronRight className="size-3.5" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <main
      id="dashboard-main"
      tabIndex={-1}
      className="mx-auto w-full max-w-7xl flex-1 space-y-4 overflow-auto bg-background p-3 sm:space-y-6 sm:p-4 md:p-6"
    >
      <DashboardHeader />
      <StatCards />
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[3fr_2fr]">
        <RevenueOverviewChart />
        <AOVScatterChart />
      </div>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[2fr_1fr]">
        <ChannelRevenueChart />
        <ActivityFeed />
      </div>
      <RecentOrdersTable />
    </main>
  );
};

const getDefaultActiveItem = (group: NavGroup): NavItem | null => {
  return group.items.find((item) => item.isActive) || group.items[0] || null;
};

const Dashboard10 = ({ className }: { className?: string }) => {
  const [activeGroupIndex, setActiveGroupIndex] = React.useState(0);
  const activeGroup = shellData.navGroups[activeGroupIndex];

  const [activeItem, setActiveItem] = React.useState<NavItem | null>(
    getDefaultActiveItem(activeGroup),
  );

  // Update activeItem when group changes
  React.useEffect(() => {
    setActiveItem(getDefaultActiveItem(activeGroup));
  }, [activeGroupIndex]);

  return (
    <div className={cn("flex min-h-svh flex-col bg-background", className)}>
      <a
        href="#dashboard-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 bg-background">
        <div className="border-b">
          <div className="mx-auto flex h-14 w-full max-w-7xl items-center gap-4 px-4 lg:px-6">
            <MobileNav
              activeGroupIndex={activeGroupIndex}
              onSelectGroup={setActiveGroupIndex}
            />

            <a href="#" className="flex items-center gap-2">
              <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
                <img
                  src={shellData.logo.src}
                  alt={shellData.logo.alt}
                  className="size-6 text-primary-foreground invert dark:invert-0"
                />
              </div>
              <span className="font-semibold">{shellData.logo.title}</span>
            </a>

            <nav
              className="ml-4 hidden items-center gap-1 md:flex"
              aria-label="Main navigation"
            >
              {shellData.navGroups.map((group, index) => (
                <NavDropdown
                  key={group.title}
                  group={group}
                  isActive={index === activeGroupIndex}
                  onSelect={() => setActiveGroupIndex(index)}
                />
              ))}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <div className="relative hidden md:block">
                <Search
                  className="absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="h-9 w-64 pl-8"
                  aria-label="Search"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Search"
              >
                <Search className="size-5" aria-hidden="true" />
              </Button>
              <NavUser user={shellData.user} />
            </div>
          </div>
        </div>

        <SubNav
          group={activeGroup}
          activeItem={activeItem}
          onSelectItem={setActiveItem}
        />
      </header>

      <DashboardContent />
    </div>
  );
};

export { Dashboard10 };
