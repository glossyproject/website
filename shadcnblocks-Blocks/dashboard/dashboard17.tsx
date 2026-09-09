"use client";

import {
  BarChart3,
  BedDouble,
  Bell,
  Box,
  CalendarRange,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  ClipboardList,
  ConciergeBell,
  CreditCard,
  DoorOpen,
  Download,
  Globe,
  HelpCircle,
  KeyRound,
  Lamp,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  Monitor,
  Package,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  User,
  Users,
  UtensilsCrossed,
  Wallet,
  Wrench,
} from "lucide-react";
import * as React from "react";
import {
  Bar,
  BarChart,
  Cell,
  CartesianGrid,
  Line,
  LineChart,
  ReferenceDot,
  ReferenceLine,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from "recharts";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Kbd } from "@/components/ui/kbd";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// ---------------------------------------------------------------------------
// Schedule types
// ---------------------------------------------------------------------------

type Guest = {
  name: string;
  avatar?: string;
  initials: string;
};

type Booking = {
  id: string;
  guestName: string;
  roomNumber: string;
  roomType: string;
  time: string;
  guests: Guest[];
  guestCount: number;
  source: "Direct" | "Booking.com" | "Expedia" | "Walk-in";
  status: string;
  statusColor: string;
  nights: number;
  specialRequests?: string;
};

type BookingCalendarKind = "arrival" | "inHouse" | "departure";

type CalendarBooking = {
  id: string;
  guestName: string;
  roomNumber: string;
  roomType: string;
  source: Booking["source"];
  status: string;
  statusColor: string;
  guestCount: number;
  specialRequests?: string;
  kind: BookingCalendarKind;
  startDate: Date;
  endDate?: Date;
};

type CalendarDaySummary = {
  key: string;
  date: Date;
  dayNumber: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  arrivalsCount: number;
  inHouseCount: number;
  departuresCount: number;
  totalCount: number;
};

type VisibleMonth = {
  year: number;
  monthIndex: number;
};

type DateCell = {
  date: number;
  month: number;
  year: number;
  isCurrentMonth: boolean;
  isSelected: boolean;
  isToday: boolean;
};

const ACTIVITY_RANGES = ["today", "yesterday", "week"] as const;

type ActivityRange = (typeof ACTIVITY_RANGES)[number];

const isActivityRange = (value: string): value is ActivityRange =>
  ACTIVITY_RANGES.includes(value as ActivityRange);

// ---------------------------------------------------------------------------
// Schedule mock data
// ---------------------------------------------------------------------------

const ARRIVALS: Booking[] = [
  {
    id: "arr-1",
    guestName: "James Brown",
    roomNumber: "412",
    roomType: "Suite",
    time: "2:00 PM Check-in",
    guests: [
      {
        name: "James Brown",
        avatar: "https://i.pravatar.cc/32?img=12",
        initials: "JB",
      },
      {
        name: "Maria Brown",
        avatar: "https://i.pravatar.cc/32?img=25",
        initials: "MB",
      },
    ],
    guestCount: 4,
    source: "Direct",
    status: "VIP",
    statusColor: "violet",
    nights: 3,
    specialRequests: "Late check-out, extra pillows",
  },
  {
    id: "arr-2",
    guestName: "Sarah & Tom Lee",
    roomNumber: "215",
    roomType: "Deluxe",
    time: "3:00 PM Check-in",
    guests: [
      {
        name: "Sarah Lee",
        avatar: "https://i.pravatar.cc/32?img=32",
        initials: "SL",
      },
      {
        name: "Tom Lee",
        avatar: "https://i.pravatar.cc/32?img=15",
        initials: "TL",
      },
    ],
    guestCount: 2,
    source: "Booking.com",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 5,
  },
  {
    id: "arr-3",
    guestName: "Michael Chen",
    roomNumber: "108",
    roomType: "Standard",
    time: "4:00 PM Check-in",
    guests: [
      {
        name: "Michael Chen",
        avatar: "https://i.pravatar.cc/32?img=53",
        initials: "MC",
      },
    ],
    guestCount: 1,
    source: "Expedia",
    status: "Pending",
    statusColor: "amber",
    nights: 2,
    specialRequests: "Ground floor preferred",
  },
  {
    id: "arr-4",
    guestName: "Emily Davis",
    roomNumber: "501",
    roomType: "Penthouse",
    time: "5:30 PM Check-in",
    guests: [
      {
        name: "Emily Davis",
        avatar: "https://i.pravatar.cc/32?img=44",
        initials: "ED",
      },
      {
        name: "Ryan Davis",
        avatar: "https://i.pravatar.cc/32?img=18",
        initials: "RD",
      },
      { name: "Sophie Davis", initials: "SD" },
    ],
    guestCount: 5,
    source: "Direct",
    status: "VIP",
    statusColor: "violet",
    nights: 7,
    specialRequests: "Airport transfer, champagne on arrival",
  },
];

const RECENT_ARRIVALS_TABLE: Booking[] = [
  ...ARRIVALS,
  {
    id: "arr-5",
    guestName: "Noah Wilson",
    roomNumber: "306",
    roomType: "Deluxe",
    time: "6:00 PM Check-in",
    guests: [
      {
        name: "Noah Wilson",
        avatar: "https://i.pravatar.cc/32?img=61",
        initials: "NW",
      },
    ],
    guestCount: 2,
    source: "Booking.com",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 4,
    specialRequests: "High floor",
  },
  {
    id: "arr-6",
    guestName: "Olivia Martin",
    roomNumber: "119",
    roomType: "Standard",
    time: "6:30 PM Check-in",
    guests: [
      {
        name: "Olivia Martin",
        avatar: "https://i.pravatar.cc/32?img=47",
        initials: "OM",
      },
    ],
    guestCount: 1,
    source: "Direct",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 2,
    specialRequests: "Near elevator",
  },
  {
    id: "arr-7",
    guestName: "Liam Thompson",
    roomNumber: "522",
    roomType: "Suite",
    time: "7:00 PM Check-in",
    guests: [
      {
        name: "Liam Thompson",
        avatar: "https://i.pravatar.cc/32?img=68",
        initials: "LT",
      },
    ],
    guestCount: 3,
    source: "Expedia",
    status: "Pending",
    statusColor: "amber",
    nights: 5,
    specialRequests: "Baby crib",
  },
  {
    id: "arr-8",
    guestName: "Ava Rodriguez",
    roomNumber: "227",
    roomType: "Deluxe",
    time: "7:20 PM Check-in",
    guests: [
      {
        name: "Ava Rodriguez",
        avatar: "https://i.pravatar.cc/32?img=36",
        initials: "AR",
      },
    ],
    guestCount: 2,
    source: "Walk-in",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 1,
    specialRequests: "Late dinner reservation",
  },
  {
    id: "arr-9",
    guestName: "Ethan Brooks",
    roomNumber: "402",
    roomType: "Suite",
    time: "8:00 PM Check-in",
    guests: [
      {
        name: "Ethan Brooks",
        avatar: "https://i.pravatar.cc/32?img=34",
        initials: "EB",
      },
      {
        name: "Lara Brooks",
        avatar: "https://i.pravatar.cc/32?img=66",
        initials: "LB",
      },
    ],
    guestCount: 4,
    source: "Direct",
    status: "VIP",
    statusColor: "violet",
    nights: 3,
    specialRequests: "Fruit basket",
  },
  {
    id: "arr-10",
    guestName: "Mia Sanchez",
    roomNumber: "143",
    roomType: "Standard",
    time: "8:20 PM Check-in",
    guests: [
      {
        name: "Mia Sanchez",
        avatar: "https://i.pravatar.cc/32?img=57",
        initials: "MS",
      },
    ],
    guestCount: 1,
    source: "Booking.com",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 2,
    specialRequests: "Quiet room",
  },
  {
    id: "arr-11",
    guestName: "Henry Young",
    roomNumber: "333",
    roomType: "Deluxe",
    time: "8:40 PM Check-in",
    guests: [
      {
        name: "Henry Young",
        avatar: "https://i.pravatar.cc/32?img=72",
        initials: "HY",
      },
    ],
    guestCount: 2,
    source: "Expedia",
    status: "Pending",
    statusColor: "amber",
    nights: 3,
    specialRequests: "Extra towels",
  },
  {
    id: "arr-12",
    guestName: "Grace Patel",
    roomNumber: "610",
    roomType: "Penthouse",
    time: "9:10 PM Check-in",
    guests: [
      {
        name: "Grace Patel",
        avatar: "https://i.pravatar.cc/32?img=46",
        initials: "GP",
      },
    ],
    guestCount: 2,
    source: "Direct",
    status: "VIP",
    statusColor: "violet",
    nights: 6,
    specialRequests: "Private transfer",
  },
  {
    id: "arr-13",
    guestName: "Logan Turner",
    roomNumber: "208",
    roomType: "Standard",
    time: "9:25 PM Check-in",
    guests: [
      {
        name: "Logan Turner",
        avatar: "https://i.pravatar.cc/32?img=13",
        initials: "LT",
      },
    ],
    guestCount: 1,
    source: "Walk-in",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 1,
    specialRequests: "No feather pillows",
  },
  {
    id: "arr-14",
    guestName: "Amelia Scott",
    roomNumber: "439",
    roomType: "Suite",
    time: "9:45 PM Check-in",
    guests: [
      {
        name: "Amelia Scott",
        avatar: "https://i.pravatar.cc/32?img=24",
        initials: "AS",
      },
    ],
    guestCount: 2,
    source: "Booking.com",
    status: "Confirmed",
    statusColor: "emerald",
    nights: 4,
    specialRequests: "Rose petals setup",
  },
  {
    id: "arr-15",
    guestName: "Jack Parker",
    roomNumber: "256",
    roomType: "Deluxe",
    time: "10:10 PM Check-in",
    guests: [
      {
        name: "Jack Parker",
        avatar: "https://i.pravatar.cc/32?img=58",
        initials: "JP",
      },
    ],
    guestCount: 2,
    source: "Expedia",
    status: "Pending",
    statusColor: "amber",
    nights: 2,
    specialRequests: "Late checkout request",
  },
  {
    id: "arr-16",
    guestName: "Sophia Nguyen",
    roomNumber: "509",
    roomType: "Suite",
    time: "10:30 PM Check-in",
    guests: [
      {
        name: "Sophia Nguyen",
        avatar: "https://i.pravatar.cc/32?img=69",
        initials: "SN",
      },
    ],
    guestCount: 3,
    source: "Direct",
    status: "VIP",
    statusColor: "violet",
    nights: 5,
    specialRequests: "Anniversary decor",
  },
];

const IN_HOUSE: Booking[] = [
  {
    id: "inh-1",
    guestName: "Robert Garcia",
    roomNumber: "302",
    roomType: "Deluxe",
    time: "Since Feb 16",
    guests: [
      {
        name: "Robert Garcia",
        avatar: "https://i.pravatar.cc/32?img=60",
        initials: "RG",
      },
    ],
    guestCount: 1,
    source: "Walk-in",
    status: "Checked In",
    statusColor: "sky",
    nights: 4,
  },
  {
    id: "inh-2",
    guestName: "Anna & Chris Bell",
    roomNumber: "419",
    roomType: "Suite",
    time: "Since Feb 15",
    guests: [
      {
        name: "Anna Bell",
        avatar: "https://i.pravatar.cc/32?img=29",
        initials: "AB",
      },
      {
        name: "Chris Bell",
        avatar: "https://i.pravatar.cc/32?img=14",
        initials: "CB",
      },
    ],
    guestCount: 2,
    source: "Booking.com",
    status: "Checked In",
    statusColor: "sky",
    nights: 6,
    specialRequests: "Daily housekeeping at 10 AM",
  },
  {
    id: "inh-3",
    guestName: "Lisa Park",
    roomNumber: "207",
    roomType: "Standard",
    time: "Since Feb 17",
    guests: [
      {
        name: "Lisa Park",
        avatar: "https://i.pravatar.cc/32?img=38",
        initials: "LP",
      },
    ],
    guestCount: 1,
    source: "Direct",
    status: "Checked In",
    statusColor: "sky",
    nights: 2,
  },
];

const DEPARTURES: Booking[] = [
  {
    id: "dep-1",
    guestName: "David Kim",
    roomNumber: "315",
    roomType: "Deluxe",
    time: "11:00 AM Check-out",
    guests: [
      {
        name: "David Kim",
        avatar: "https://i.pravatar.cc/32?img=52",
        initials: "DK",
      },
      {
        name: "Jenny Kim",
        avatar: "https://i.pravatar.cc/32?img=41",
        initials: "JK",
      },
    ],
    guestCount: 2,
    source: "Expedia",
    status: "Checking Out",
    statusColor: "sky",
    nights: 3,
  },
  {
    id: "dep-2",
    guestName: "Rachel Green",
    roomNumber: "104",
    roomType: "Standard",
    time: "12:00 PM Check-out",
    guests: [
      {
        name: "Rachel Green",
        avatar: "https://i.pravatar.cc/32?img=23",
        initials: "RG",
      },
    ],
    guestCount: 1,
    source: "Direct",
    status: "Checking Out",
    statusColor: "sky",
    nights: 1,
  },
];

const WEEKDAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_LABELS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// ---------------------------------------------------------------------------
// Schedule helpers
// ---------------------------------------------------------------------------

function generateMonthGrid(
  year: number,
  month: number,
  selectedDate: number,
): DateCell[] {
  const today = new Date();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: DateCell[] = [];
  const totalCells = 42;

  for (let i = 0; i < totalCells; i++) {
    const dayNumber = i - firstDayOfMonth + 1;

    let cellDate = dayNumber;
    let cellMonth = month;
    let cellYear = year;
    let isCurrentMonth = true;

    if (dayNumber <= 0) {
      cellDate = prevMonthDays + dayNumber;
      cellMonth = month === 0 ? 11 : month - 1;
      cellYear = month === 0 ? year - 1 : year;
      isCurrentMonth = false;
    } else if (dayNumber > daysInMonth) {
      cellDate = dayNumber - daysInMonth;
      cellMonth = month === 11 ? 0 : month + 1;
      cellYear = month === 11 ? year + 1 : year;
      isCurrentMonth = false;
    }

    cells.push({
      date: cellDate,
      month: cellMonth,
      year: cellYear,
      isCurrentMonth,
      isSelected: isCurrentMonth && cellDate === selectedDate,
      isToday:
        cellDate === today.getDate() &&
        cellMonth === today.getMonth() &&
        cellYear === today.getFullYear(),
    });
  }

  return cells;
}

const STATUS_STYLES: Record<string, string> = {
  violet:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/15 dark:text-violet-400",
  amber: "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  emerald:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/15 dark:text-sky-400",
};

const SOURCE_ICONS: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Direct: Globe,
  "Booking.com": Globe,
  Expedia: Globe,
  "Walk-in": DoorOpen,
};

// ---------------------------------------------------------------------------
// Schedule sub-components
// ---------------------------------------------------------------------------

function MonthNavigation({
  month,
  year,
  onPrev,
  onNext,
}: {
  month: number;
  year: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="px-4 pb-3">
      <div className="flex items-center rounded-xl bg-muted/60 px-2 py-2">
        <button
          onClick={onPrev}
          aria-label="Previous month"
          className="flex size-6 items-center justify-center rounded-md border border-border/80 bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ChevronLeft className="size-3.5" />
        </button>
        <span className="flex-1 text-center text-sm font-medium text-foreground/85">
          {MONTH_LABELS[month]} {year}
        </span>
        <button
          onClick={onNext}
          aria-label="Next month"
          className="flex size-6 items-center justify-center rounded-md border border-border/80 bg-card text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <ChevronRight className="size-3.5" />
        </button>
      </div>
    </div>
  );
}

function MiniMonthCalendar({
  cells,
  onSelect,
}: {
  cells: DateCell[];
  onSelect: (cell: DateCell) => void;
}) {
  return (
    <div className="px-4 pb-4">
      <div className="space-y-2">
        <div className="grid grid-cols-7 text-center text-[10px] font-medium text-muted-foreground">
          {WEEKDAY_LABELS.map((label) => (
            <span key={label} className="py-1">
              {label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {cells.map((cell) => (
            <button
              key={`${cell.year}-${cell.month}-${cell.date}`}
              type="button"
              onClick={() => onSelect(cell)}
              className={cn(
                "relative flex aspect-square items-center justify-center rounded-md text-xs font-medium transition-colors",
                cell.isSelected &&
                  "bg-primary text-primary-foreground hover:bg-primary/90",
                !cell.isSelected &&
                  cell.isCurrentMonth &&
                  "text-foreground hover:bg-muted",
                !cell.isSelected &&
                  !cell.isCurrentMonth &&
                  "text-muted-foreground/50 hover:bg-muted/60",
              )}
            >
              <span
                className={cn(
                  "flex size-6 items-center justify-center rounded-full",
                  cell.isToday &&
                    !cell.isSelected &&
                    "text-primary ring-1 ring-primary/40",
                )}
              >
                {cell.date}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function AvatarGroup({
  guests,
  guestCount,
}: {
  guests: Guest[];
  guestCount: number;
}) {
  if (guests.length === 0) return null;

  const overflow = guestCount - guests.length;

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2">
        {guests.slice(0, 4).map((a) => (
          <Avatar
            key={a.name}
            className="size-7 border-2 border-background ring-0"
          >
            {a.avatar && <AvatarImage src={a.avatar} alt={a.name} />}
            <AvatarFallback className="bg-muted text-[10px] font-medium">
              {a.initials}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
      {overflow > 0 && (
        <span className="ml-2 text-xs font-medium text-muted-foreground">
          +{overflow}
        </span>
      )}
    </div>
  );
}

function BookingCard({ booking }: { booking: Booking }) {
  const [expanded, setExpanded] = React.useState(false);
  const SourceIcon = SOURCE_ICONS[booking.source] || Globe;

  return (
    <div className="rounded-lg border bg-card p-3 transition-colors hover:bg-muted/30">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1 space-y-2.5">
          <div>
            <h3 className="truncate text-sm leading-snug font-semibold">
              {booking.guestName} — {booking.roomType} {booking.roomNumber}
            </h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {booking.time}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <AvatarGroup
              guests={booking.guests}
              guestCount={booking.guestCount}
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <SourceIcon className="size-3.5" />
              <span>via {booking.source}</span>
            </div>
            <span className="text-muted-foreground/40">·</span>
            <Badge
              variant="secondary"
              className={cn(
                "border-0 px-2 py-0 text-[11px] font-medium",
                STATUS_STYLES[booking.statusColor] || STATUS_STYLES.violet,
              )}
            >
              {booking.status}
            </Badge>
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-md transition-colors hover:bg-muted"
        >
          <ChevronDown
            className={cn(
              "size-4 text-muted-foreground transition-transform",
              expanded && "rotate-180",
            )}
          />
        </button>
      </div>

      {expanded && (
        <div className="mt-3 space-y-1 border-t pt-3 text-xs text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">Room Type:</span>{" "}
            {booking.roomType}
          </p>
          <p>
            <span className="font-medium text-foreground">Nights:</span>{" "}
            {booking.nights}
          </p>
          {booking.specialRequests && (
            <p>
              <span className="font-medium text-foreground">
                Special Requests:
              </span>{" "}
              {booking.specialRequests}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

function BookingList({ bookings }: { bookings: Booking[] }) {
  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
        <BedDouble className="mb-2 size-8 opacity-40" />
        <p className="text-sm">No bookings</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {bookings.map((b) => (
        <BookingCard key={b.id} booking={b} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Schedule panel (card-less variant for activity sidebar)
// ---------------------------------------------------------------------------

function SchedulePanel() {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = React.useState(today.getMonth());
  const [currentYear, setCurrentYear] = React.useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = React.useState(today.getDate());

  const calendarCells = React.useMemo(
    () => generateMonthGrid(currentYear, currentMonth, selectedDate),
    [currentYear, currentMonth, selectedDate],
  );

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
    setSelectedDate(1);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDate(1);
  };

  const handleDateSelect = (cell: DateCell) => {
    if (cell.month !== currentMonth || cell.year !== currentYear) {
      setCurrentMonth(cell.month);
      setCurrentYear(cell.year);
    }
    setSelectedDate(cell.date);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="shrink-0 pt-4">
        <MonthNavigation
          month={currentMonth}
          year={currentYear}
          onPrev={handlePrevMonth}
          onNext={handleNextMonth}
        />
        <MiniMonthCalendar cells={calendarCells} onSelect={handleDateSelect} />
      </div>

      <div className="min-h-0 flex-1 px-4 pb-4">
        <Tabs defaultValue="arrivals" className="flex h-full flex-col">
          <TabsList className="mb-4 w-full shrink-0">
            <TabsTrigger value="arrivals" className="flex-1 gap-1.5">
              <DoorOpen className="size-3.5" />
              Arrivals
            </TabsTrigger>
            <TabsTrigger value="in-house" className="flex-1 gap-1.5">
              <BedDouble className="size-3.5" />
              In-House
            </TabsTrigger>
            <TabsTrigger value="departures" className="flex-1 gap-1.5">
              <KeyRound className="size-3.5" />
              Departures
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="min-h-0 flex-1">
            <TabsContent value="arrivals" className="mt-0">
              <BookingList bookings={ARRIVALS} />
            </TabsContent>
            <TabsContent value="in-house" className="mt-0">
              <BookingList bookings={IN_HOUSE} />
            </TabsContent>
            <TabsContent value="departures" className="mt-0">
              <BookingList bookings={DEPARTURES} />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Dashboard17 types & data
// ---------------------------------------------------------------------------

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
  footerGroup: NavGroup;
  user?: UserData;
};

type RoomCapacityStatItem = {
  title: string;
  occupied: number;
  total: number;
  weeklyChange: number;
  tone: {
    active: string;
    soft: string;
  };
};

type OrderStatus = "Processing" | "Shipped" | "Delivered" | "Cancelled";

type Order = {
  id: string;
  orderNumber: string;
  customer: string;
  total: number;
  status: OrderStatus;
};

type FulfillmentItem = {
  order: string;
  shipped: Date;
  progress: number;
  segments: number[];
};

type ActivityPeriod = "today" | "yesterday" | "week";
type ActivityTone = "indigo" | "emerald" | "violet" | "amber";

type UpdateActivity = {
  id: string;
  title: string;
  description: string;
  time: string;
  period: ActivityPeriod;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tone: ActivityTone;
};

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const numberFormatter = new Intl.NumberFormat("en-US");
const capacityDeltaFormatter = new Intl.NumberFormat("en-US", {
  signDisplay: "always",
  maximumFractionDigits: 1,
});
const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 0,
});
const monthFormatter = new Intl.DateTimeFormat("en-US", { month: "short" });
const dashboardRangeFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});
const dashboardRangeStart = new Date(2025, 0, 1);
const dashboardRangeEnd = new Date(2025, 0, 31);
const dashboardDateRangeLabel =
  typeof dashboardRangeFormatter.formatRange === "function"
    ? dashboardRangeFormatter.formatRange(
        dashboardRangeStart,
        dashboardRangeEnd,
      )
    : `${dashboardRangeFormatter.format(
        dashboardRangeStart,
      )} – ${dashboardRangeFormatter.format(dashboardRangeEnd)}`;

const shippedDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

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
};

const sidebarData: SidebarData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblocks-logo.svg",
    alt: "Grandview",
    title: "Grandview",
    description: "Hospitality Suite",
  },
  navGroups: [
    {
      title: "Front Office",
      defaultOpen: true,
      items: [
        {
          label: "Dashboard",
          icon: LayoutDashboard,
          href: "#",
          isActive: true,
        },
        { label: "Reservations", icon: CalendarRange, href: "#" },
        { label: "Check-in / Check-out", icon: DoorOpen, href: "#" },
        {
          label: "Guest Profiles",
          icon: Users,
          href: "#",
          children: [
            { label: "All Guests", icon: Users, href: "#" },
            { label: "Loyalty Members", icon: Users, href: "#" },
            { label: "Corporate Accounts", icon: Users, href: "#" },
          ],
        },
      ],
    },
    {
      title: "Property",
      defaultOpen: true,
      items: [
        {
          label: "Rooms & Suites",
          icon: BedDouble,
          href: "#",
          children: [
            { label: "Floor Plan", icon: BedDouble, href: "#" },
            { label: "Room Types", icon: BedDouble, href: "#" },
            { label: "Availability", icon: BedDouble, href: "#" },
          ],
        },
        { label: "Housekeeping", icon: Sparkles, href: "#" },
        { label: "Dining & Events", icon: UtensilsCrossed, href: "#" },
      ],
    },
    {
      title: "Revenue",
      defaultOpen: false,
      items: [
        { label: "Rate Manager", icon: CreditCard, href: "#" },
        { label: "Billing & Invoices", icon: Wallet, href: "#" },
        { label: "Channel Distribution", icon: Globe, href: "#" },
      ],
    },
    {
      title: "Administration",
      defaultOpen: false,
      items: [
        { label: "Staff & Roles", icon: ShieldCheck, href: "#" },
        { label: "Maintenance Logs", icon: Wrench, href: "#" },
        { label: "Security & Access", icon: KeyRound, href: "#" },
      ],
    },
  ],
  footerGroup: {
    title: "Settings",
    items: [{ label: "Settings", icon: Settings, href: "#" }],
  },
  user: {
    name: "Robert Austin",
    email: "robert@grandview.hotel",
    avatar:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar22.jpg",
  },
};

const roomCapacityStats: RoomCapacityStatItem[] = [
  {
    title: "Standard Rooms",
    occupied: 128,
    total: 160,
    weeklyChange: 2.8,
    tone: {
      active: palette.primary,
      soft: `color-mix(in oklch, var(--primary) 12%, ${mixBase})`,
    },
  },
  {
    title: "Deluxe Rooms",
    occupied: 67,
    total: 90,
    weeklyChange: 3.5,
    tone: {
      active: palette.secondary.light,
      soft: `color-mix(in oklch, var(--primary) 20%, ${mixBase})`,
    },
  },
  {
    title: "Suites",
    occupied: 21,
    total: 30,
    weeklyChange: -1.9,
    tone: {
      active: palette.tertiary.light,
      soft: `color-mix(in oklch, var(--primary) 26%, ${mixBase})`,
    },
  },
];

const monthLabel = (monthIndex: number) =>
  monthFormatter.format(new Date(2025, monthIndex, 1));

const salesPipelineData: Record<
  string,
  { week: string; month: string; orders: number; sales: number }[]
> = {
  q1: [
    { week: "W1", month: monthLabel(0), orders: 220, sales: 5100 },
    { week: "W2", month: monthLabel(0), orders: 480, sales: 11200 },
    { week: "W3", month: monthLabel(0), orders: 390, sales: 9400 },
    { week: "W4", month: monthLabel(0), orders: 150, sales: 3600 },
    { week: "W5", month: monthLabel(1), orders: 310, sales: 7400 },
    { week: "W6", month: monthLabel(1), orders: 540, sales: 13100 },
    { week: "W7", month: monthLabel(1), orders: 460, sales: 10800 },
    { week: "W8", month: monthLabel(1), orders: 200, sales: 4700 },
    { week: "W9", month: monthLabel(2), orders: 130, sales: 3100 },
    { week: "W10", month: monthLabel(2), orders: 420, sales: 10200 },
    { week: "W11", month: monthLabel(2), orders: 510, sales: 12400 },
    { week: "W12", month: monthLabel(2), orders: 350, sales: 8500 },
  ],
  q2: [
    { week: "W1", month: monthLabel(3), orders: 410, sales: 9800 },
    { week: "W2", month: monthLabel(3), orders: 280, sales: 6700 },
    { week: "W3", month: monthLabel(3), orders: 120, sales: 2900 },
    { week: "W4", month: monthLabel(3), orders: 350, sales: 8400 },
    { week: "W5", month: monthLabel(4), orders: 520, sales: 12600 },
    { week: "W6", month: monthLabel(4), orders: 470, sales: 11300 },
    { week: "W7", month: monthLabel(4), orders: 190, sales: 4500 },
    { week: "W8", month: monthLabel(4), orders: 100, sales: 2400 },
    { week: "W9", month: monthLabel(5), orders: 330, sales: 7900 },
    { week: "W10", month: monthLabel(5), orders: 490, sales: 11800 },
    { week: "W11", month: monthLabel(5), orders: 540, sales: 13000 },
    { week: "W12", month: monthLabel(5), orders: 260, sales: 6200 },
  ],
  q3: [
    { week: "W1", month: monthLabel(6), orders: 180, sales: 4200 },
    { week: "W2", month: monthLabel(6), orders: 520, sales: 12800 },
    { week: "W3", month: monthLabel(6), orders: 480, sales: 11500 },
    { week: "W4", month: monthLabel(6), orders: 120, sales: 2800 },
    { week: "W5", month: monthLabel(7), orders: 90, sales: 2100 },
    { week: "W6", month: monthLabel(7), orders: 450, sales: 10500 },
    { week: "W7", month: monthLabel(7), orders: 510, sales: 12200 },
    { week: "W8", month: monthLabel(7), orders: 480, sales: 11000 },
    { week: "W9", month: monthLabel(8), orders: 200, sales: 4800 },
    { week: "W10", month: monthLabel(8), orders: 150, sales: 3500 },
    { week: "W11", month: monthLabel(8), orders: 380, sales: 9200 },
    { week: "W12", month: monthLabel(8), orders: 420, sales: 10100 },
  ],
  q4: [
    { week: "W1", month: monthLabel(9), orders: 300, sales: 7200 },
    { week: "W2", month: monthLabel(9), orders: 160, sales: 3800 },
    { week: "W3", month: monthLabel(9), orders: 440, sales: 10600 },
    { week: "W4", month: monthLabel(9), orders: 530, sales: 12900 },
    { week: "W5", month: monthLabel(10), orders: 380, sales: 9100 },
    { week: "W6", month: monthLabel(10), orders: 140, sales: 3400 },
    { week: "W7", month: monthLabel(10), orders: 250, sales: 6000 },
    { week: "W8", month: monthLabel(10), orders: 500, sales: 12100 },
    { week: "W9", month: monthLabel(11), orders: 550, sales: 13300 },
    { week: "W10", month: monthLabel(11), orders: 470, sales: 11400 },
    { week: "W11", month: monthLabel(11), orders: 210, sales: 5000 },
    { week: "W12", month: monthLabel(11), orders: 340, sales: 8200 },
  ],
};

const fullYearData = [
  { monthIndex: 0, thisYear: 42000, prevYear: 38000 },
  { monthIndex: 1, thisYear: 38000, prevYear: 45000 },
  { monthIndex: 2, thisYear: 52000, prevYear: 41000 },
  { monthIndex: 3, thisYear: 45000, prevYear: 48000 },
  { monthIndex: 4, thisYear: 58000, prevYear: 44000 },
  { monthIndex: 5, thisYear: 41000, prevYear: 52000 },
  { monthIndex: 6, thisYear: 55000, prevYear: 47000 },
  { monthIndex: 7, thisYear: 48000, prevYear: 53000 },
  { monthIndex: 8, thisYear: 62000, prevYear: 49000 },
  { monthIndex: 9, thisYear: 54000, prevYear: 58000 },
  { monthIndex: 10, thisYear: 67000, prevYear: 52000 },
  { monthIndex: 11, thisYear: 71000, prevYear: 61000 },
].map(({ monthIndex, ...entry }) => ({
  month: monthLabel(monthIndex),
  ...entry,
}));

type BookingActivityPoint = {
  dateKey: string;
  dateLabel: string;
  shortDate: string;
  bookings: number;
};

const bookingActivityChartData: BookingActivityPoint[] = Array.from(
  { length: 90 },
  (_, index) => {
    const date = new Date(Date.UTC(2025, 0, index + 1));
    const phase =
      index < 22
        ? { base: 78, drift: 1.8, start: 0 }
        : index < 45
          ? { base: 124, drift: -0.9, start: 22 }
          : index < 68
            ? { base: 88, drift: 1.3, start: 45 }
            : { base: 132, drift: -1.2, start: 68 };
    const wave = Math.sin(index / 3.5) * 15 + Math.cos(index / 8.8) * 10;
    const weekendBoost = [0, 0, 0, 0, 6, 14, 18][index % 7] ?? 0;
    const eventSpike = index === 17 || index === 42 || index === 71 ? 34 : 0;
    const maintenanceDip = index === 30 || index === 57 ? -26 : 0;
    const localDrift = (index - phase.start) * phase.drift;
    const bookings = Math.max(
      24,
      Math.round(
        phase.base +
          localDrift +
          wave +
          weekendBoost +
          eventSpike +
          maintenanceDip,
      ),
    );

    return {
      dateKey: date.toISOString().slice(0, 10),
      dateLabel: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      shortDate: date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      bookings,
    };
  },
);

const bookingActivityLookup = new Map(
  bookingActivityChartData.map((entry) => [entry.dateKey, entry]),
);

const bookingTickLabelMap = new Map(
  bookingActivityChartData.map((entry, index) => [
    entry.dateKey,
    index % 15 === 0 || index === bookingActivityChartData.length - 1
      ? entry.shortDate
      : "",
  ]),
);

type TimePeriod = "6months" | "year";

const activityPeriodLabels: Record<ActivityPeriod, string> = {
  today: "Today",
  yesterday: "Yesterday",
  week: "This week",
};

const activityToneClasses: Record<ActivityTone, string> = {
  indigo: "border-indigo-200/60 bg-indigo-50/60 text-indigo-600",
  emerald: "border-emerald-200/60 bg-emerald-50/60 text-emerald-600",
  violet: "border-violet-200/60 bg-violet-50/60 text-violet-600",
  amber: "border-amber-200/60 bg-amber-50/60 text-amber-600",
};

const latestUpdates: UpdateActivity[] = [
  {
    id: "act-1",
    title: "Ticket Updated",
    description: "Ticket #2319 SLA updated",
    time: "11:20 AM",
    period: "today",
    icon: ClipboardList,
    tone: "indigo",
  },
  {
    id: "act-2",
    title: "New Client Added",
    description: "PT. Alpha Indonesia registered",
    time: "11:15 AM",
    period: "today",
    icon: User,
    tone: "emerald",
  },
  {
    id: "act-3",
    title: "Agent Reassigned",
    description: "Ticket #2322 moved to Michael Wong",
    time: "11:00 AM",
    period: "today",
    icon: ConciergeBell,
    tone: "violet",
  },
  {
    id: "act-4",
    title: "SLA Breach Risk",
    description: 'Ticket #2320 "Login issue"',
    time: "10:45 AM",
    period: "today",
    icon: Bell,
    tone: "amber",
  },
  {
    id: "act-5",
    title: "Knowledge Base",
    description: "New article published",
    time: "10:30 AM",
    period: "today",
    icon: Box,
    tone: "indigo",
  },
  {
    id: "act-6",
    title: "Customer Feedback",
    description: "Great support response from front desk",
    time: "10:10 AM",
    period: "today",
    icon: Star,
    tone: "amber",
  },
  {
    id: "act-7",
    title: "Late Arrival Alert",
    description: "Airport transfer delayed by 20 mins",
    time: "8:45 PM",
    period: "yesterday",
    icon: Truck,
    tone: "indigo",
  },
  {
    id: "act-8",
    title: "Suite Upgrade Accepted",
    description: "Room 412 moved to Presidential Suite",
    time: "7:30 PM",
    period: "yesterday",
    icon: Sparkles,
    tone: "emerald",
  },
  {
    id: "act-9",
    title: "Group Booking Confirmed",
    description: "Corporate group check-in for Friday",
    time: "Mon",
    period: "week",
    icon: Users,
    tone: "violet",
  },
  {
    id: "act-10",
    title: "Maintenance Completed",
    description: "HVAC issue resolved in Room 205",
    time: "Sun",
    period: "week",
    icon: Wrench,
    tone: "emerald",
  },
];

const periodLabels: Record<TimePeriod, string> = {
  "6months": "Last 6 Months",
  year: "Last Year",
};

function getDataForPeriod(period: TimePeriod) {
  if (period === "6months") {
    return fullYearData.slice(0, 6);
  }
  return fullYearData;
}

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
    orderNumber: "ORD-2024-001",
    customer: "Sarah Johnson",
    status: "Delivered",
    total: 2499.0,
  },
  {
    id: "2",
    orderNumber: "ORD-2024-002",
    customer: "Michael Chen",
    status: "Shipped",
    total: 1348.0,
  },
  {
    id: "3",
    orderNumber: "ORD-2024-003",
    customer: "Emma Wilson",
    status: "Processing",
    total: 1198.0,
  },
  {
    id: "4",
    orderNumber: "ORD-2024-004",
    customer: "James Rodriguez",
    status: "Delivered",
    total: 799.0,
  },
  {
    id: "5",
    orderNumber: "ORD-2024-005",
    customer: "Lisa Park",
    status: "Cancelled",
    total: 599.0,
  },
  {
    id: "6",
    orderNumber: "ORD-2024-006",
    customer: "David Kim",
    status: "Shipped",
    total: 5498.0,
  },
  {
    id: "7",
    orderNumber: "ORD-2024-007",
    customer: "Anna Martinez",
    status: "Delivered",
    total: 1199.0,
  },
  {
    id: "8",
    orderNumber: "ORD-2024-008",
    customer: "Robert Taylor",
    status: "Processing",
    total: 1128.0,
  },
  {
    id: "9",
    orderNumber: "ORD-2024-009",
    customer: "Jennifer Lee",
    status: "Shipped",
    total: 449.0,
  },
  {
    id: "10",
    orderNumber: "ORD-2024-010",
    customer: "William Brown",
    status: "Delivered",
    total: 2199.0,
  },
  {
    id: "11",
    orderNumber: "ORD-2024-011",
    customer: "Sophia Davis",
    status: "Cancelled",
    total: 349.0,
  },
  {
    id: "12",
    orderNumber: "ORD-2024-012",
    customer: "Daniel Garcia",
    status: "Processing",
    total: 899.0,
  },
];

const fulfillmentData: FulfillmentItem[] = [
  {
    order: "ORD-4821",
    shipped: new Date(2025, 0, 27),
    progress: 92,
    segments: [
      0.9, 0.7, 1.0, 0.8, 0.6, 0.9, 1.0, 0.7, 0.5, 0.8, 0.9, 1.0, 0.6, 0.7, 0.8,
      0.9, 1.0, 0.5, 0.7, 0.8, 0.9, 0.6, 1.0, 0.8, 0.7, 0.3, 0.2, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4819",
    shipped: new Date(2025, 0, 26),
    progress: 78,
    segments: [
      0.8, 0.6, 0.9, 0.7, 1.0, 0.5, 0.8, 0.9, 0.6, 0.7, 1.0, 0.8, 0.5, 0.9, 0.7,
      0.6, 0.8, 1.0, 0.7, 0.5, 0.2, 0.1, 0.15, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
      0.1,
    ],
  },
  {
    order: "ORD-4815",
    shipped: new Date(2025, 0, 25),
    progress: 100,
    segments: [
      1.0, 0.9, 0.8, 1.0, 0.7, 0.9, 1.0, 0.8, 0.6, 0.9, 1.0, 0.7, 0.8, 0.9, 1.0,
      0.6, 0.8, 0.9, 1.0, 0.7, 0.9, 0.8, 1.0, 0.6, 0.9, 0.7, 1.0, 0.8, 0.9, 1.0,
    ],
  },
  {
    order: "ORD-4812",
    shipped: new Date(2025, 0, 24),
    progress: 65,
    segments: [
      0.9, 1.0, 0.7, 0.8, 0.6, 0.9, 0.5, 0.8, 1.0, 0.7, 0.9, 0.6, 0.8, 0.5, 0.7,
      1.0, 0.6, 0.9, 0.8, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4808",
    shipped: new Date(2025, 0, 23),
    progress: 43,
    segments: [
      0.8, 0.7, 1.0, 0.6, 0.9, 0.8, 0.5, 0.7, 1.0, 0.9, 0.6, 0.8, 0.7, 0.1, 0.1,
      0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4805",
    shipped: new Date(2025, 0, 22),
    progress: 100,
    segments: [
      0.9, 0.8, 1.0, 0.7, 0.9, 0.6, 1.0, 0.8, 0.7, 0.9, 1.0, 0.8, 0.6, 0.9, 0.7,
      1.0, 0.8, 0.9, 0.7, 1.0, 0.8, 0.9, 0.6, 1.0, 0.7, 0.8, 0.9, 1.0, 0.8, 0.9,
    ],
  },
  {
    order: "ORD-4801",
    shipped: new Date(2025, 0, 21),
    progress: 88,
    segments: [
      1.0, 0.8, 0.7, 0.9, 0.6, 1.0, 0.8, 0.5, 0.9, 0.7, 1.0, 0.8, 0.6, 0.9, 0.7,
      0.8, 1.0, 0.6, 0.5, 0.3, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4798",
    shipped: new Date(2025, 0, 20),
    progress: 55,
    segments: [
      0.7, 0.9, 1.0, 0.6, 0.8, 0.9, 0.7, 1.0, 0.5, 0.8, 0.6, 0.9, 0.1, 0.1, 0.1,
      0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4794",
    shipped: new Date(2025, 0, 19),
    progress: 100,
    segments: [
      0.8, 1.0, 0.9, 0.7, 0.8, 1.0, 0.6, 0.9, 0.8, 1.0, 0.7, 0.9, 0.8, 1.0, 0.6,
      0.9, 0.7, 1.0, 0.8, 0.9, 0.7, 1.0, 0.8, 0.6, 0.9, 1.0, 0.7, 0.8, 0.9, 1.0,
    ],
  },
  {
    order: "ORD-4790",
    shipped: new Date(2025, 0, 18),
    progress: 71,
    segments: [
      0.9, 0.6, 0.8, 1.0, 0.7, 0.9, 0.5, 0.8, 1.0, 0.6, 0.9, 0.7, 0.8, 0.5, 0.3,
      0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4786",
    shipped: new Date(2025, 0, 17),
    progress: 35,
    segments: [
      1.0, 0.8, 0.9, 0.7, 0.6, 0.8, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
      0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1,
    ],
  },
  {
    order: "ORD-4782",
    shipped: new Date(2025, 0, 16),
    progress: 96,
    segments: [
      0.8, 0.9, 1.0, 0.7, 0.8, 0.9, 1.0, 0.6, 0.8, 0.9, 1.0, 0.7, 0.9, 0.8, 1.0,
      0.6, 0.9, 0.7, 1.0, 0.8, 0.9, 0.6, 1.0, 0.8, 0.7, 0.9, 1.0, 0.8, 0.3, 0.1,
    ],
  },
];

const ordersBarConfig = {
  orders: { label: "Orders", color: palette.primary },
} satisfies ChartConfig;

const salesBarConfig = {
  sales: { label: "Sales", theme: palette.secondary },
} satisfies ChartConfig;

const bookingActivityChartConfig = {
  bookings: {
    label: "Bookings",
    color: "color-mix(in oklch, var(--foreground) 84%, transparent)",
  },
} satisfies ChartConfig;

const createHighlightBarShape = (fill: string) => (props: unknown) => {
  const { x, y, width, height, index } = props as {
    x: number;
    y: number;
    width: number;
    height: number;
    index: number;
  };
  const isHighlight = index === 5;
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      opacity={isHighlight ? 1 : 0.45}
      rx={4}
      ry={4}
    />
  );
};

const revenueFlowChartConfig = {
  thisYear: { label: "This Year", color: palette.primary },
  prevYear: { label: "Previous Year", theme: palette.secondary },
} satisfies ChartConfig;

const tableHeadClass = "text-xs font-medium text-muted-foreground sm:text-sm";

const SidebarLogo = ({ logo }: { logo: SidebarData["logo"] }) => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton size="lg" tooltip={logo.title}>
          <div className="flex aspect-square size-8 items-center justify-center rounded-sm bg-primary">
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
                <SidebarMenuSubButton asChild isActive={child.isActive}>
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
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="size-8 rounded-lg">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="truncate text-xs text-muted-foreground">
                  {user.email}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" aria-hidden="true" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side="bottom"
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="rounded-lg">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user.name}</span>
                  <span className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </span>
                </div>
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
    <Sidebar variant="inset" collapsible="icon" {...props}>
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
      <SidebarRail />
    </Sidebar>
  );
};

const DashboardIntro = () => {
  const userName = sidebarData.user?.name ?? "Robert Austin";
  const avatarFallback = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <section className="border-b pb-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src={sidebarData.user?.avatar} alt={userName} />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-base font-medium tracking-tight">{userName}</h1>
            <p className="text-xs text-muted-foreground">
              Welcome back to Grandview 👋
            </p>
          </div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Search"
          >
            <Search className="size-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            aria-label="Notifications"
          >
            <Bell className="size-4" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            aria-label="Last 7 days"
          >
            Last 7 days
            <ChevronDown className="size-3.5" aria-hidden="true" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            aria-label="Date range"
          >
            <CalendarRange className="size-3.5" aria-hidden="true" />
            Feb 04 - Feb 11, 2024
          </Button>
        </div>
      </div>
    </section>
  );
};

const HotelStatsCards = () => (
  <div className="border-b border-dashed border-border/70 pb-4 sm:pb-5">
    <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-0">
      {roomCapacityStats.map((stat, index) => {
        const isPositive = stat.weeklyChange >= 0;
        const delta = capacityDeltaFormatter.format(stat.weeklyChange);

        return (
          <section
            key={stat.title}
            className={cn(
              "space-y-1.5 py-1 sm:py-0",
              index > 0 && "lg:border-l lg:border-border/70",
              index === 0 && "lg:pr-8",
              index === 1 && "lg:px-8",
              index === 2 && "lg:pl-8",
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm text-muted-foreground">{stat.title}</p>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <p className="text-3xl leading-none font-semibold tracking-tight tabular-nums">
                {numberFormatter.format(stat.occupied)}
              </p>
              <span
                className={cn(
                  "text-sm",
                  isPositive ? "text-emerald-600" : "text-rose-600",
                )}
              >
                {delta}%
              </span>
              <span className="text-sm text-muted-foreground">
                vs last week
              </span>
            </div>
          </section>
        );
      })}
    </div>
  </div>
);

const bookingBarBaseFill = "var(--primary)";
const bookingBarMutedFill =
  "color-mix(in oklch, var(--primary) 42%, var(--background))";
const bookingBarActiveFill =
  "color-mix(in oklch, var(--primary) 88%, var(--foreground))";
const bookingGuideColor =
  "color-mix(in oklch, var(--primary) 70%, var(--foreground))";

function BookingActivityTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;

  const activePoint = bookingActivityLookup.get(String(label));
  const value = Number(payload[0]?.value || 0);

  return (
    <div className="min-w-[140px] border border-border/60 bg-popover px-3 py-2 shadow-md">
      <p className="mb-1 text-[11px] text-muted-foreground">
        {activePoint?.dateLabel ?? label}
      </p>
      <div className="flex items-center gap-1.5">
        <span className="size-2 rounded-full bg-foreground" />
        <span className="text-xs font-medium text-muted-foreground">
          bookings
        </span>
        <span className="ml-auto text-sm font-semibold text-foreground">
          {numberFormatter.format(value)}
        </span>
      </div>
    </div>
  );
}

const OccupancyChart = () => {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [shouldAnimate, setShouldAnimate] = React.useState(true);
  const totalBookings = React.useMemo(
    () =>
      bookingActivityChartData.reduce((sum, entry) => sum + entry.bookings, 0),
    [],
  );
  const averageDailyBookings = React.useMemo(
    () => Math.round(totalBookings / bookingActivityChartData.length),
    [totalBookings],
  );
  const peakDay = React.useMemo(
    () =>
      bookingActivityChartData.reduce((peak, entry) =>
        entry.bookings > peak.bookings ? entry : peak,
      ),
    [],
  );

  const trendSummary = React.useMemo(() => {
    const previousWindow = bookingActivityChartData.slice(-60, -30);
    const currentWindow = bookingActivityChartData.slice(-30);
    const previousAvg =
      previousWindow.reduce((sum, entry) => sum + entry.bookings, 0) /
      previousWindow.length;
    const currentAvg =
      currentWindow.reduce((sum, entry) => sum + entry.bookings, 0) /
      currentWindow.length;
    const change =
      previousAvg === 0 ? 0 : ((currentAvg - previousAvg) / previousAvg) * 100;

    return {
      isPositive: change >= 0,
      percent: Math.abs(change).toFixed(1),
    };
  }, []);

  const activePoint =
    activeIndex !== null
      ? (bookingActivityChartData[activeIndex] ?? null)
      : null;
  const focusedPoint = activePoint ?? peakDay;
  const activePointLeftPercent =
    activeIndex !== null && bookingActivityChartData.length > 1
      ? (activeIndex / (bookingActivityChartData.length - 1)) * 100
      : 0;

  return (
    <section className="w-full min-w-0 lg:flex lg:h-[470px] lg:flex-col">
      <div className="mb-3 space-y-2">
        <h2 className="text-sm font-medium text-pretty sm:text-base">
          Booking Activity
        </h2>
        <p className="text-sm text-muted-foreground">
          Trending {trendSummary.isPositive ? "up" : "down"} by{" "}
          {trendSummary.percent}% vs previous 30 days
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <div className="rounded-md bg-muted/35 px-2.5 py-1.5">
            <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
              90d Total
            </p>
            <p className="text-sm font-semibold tabular-nums">
              {numberFormatter.format(totalBookings)}
            </p>
          </div>
          <div className="rounded-md bg-muted/35 px-2.5 py-1.5">
            <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
              Avg / Day
            </p>
            <p className="text-sm font-semibold tabular-nums">
              {numberFormatter.format(averageDailyBookings)}
            </p>
          </div>
          <div className="rounded-md bg-muted/35 px-2.5 py-1.5">
            <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
              Peak Day
            </p>
            <p className="text-sm font-semibold tabular-nums">
              {numberFormatter.format(peakDay.bookings)}{" "}
              <span className="text-xs font-medium text-muted-foreground">
                {peakDay.shortDate}
              </span>
            </p>
          </div>
          <div className="rounded-md bg-muted/35 px-2.5 py-1.5">
            <p className="text-[10px] tracking-wide text-muted-foreground uppercase">
              Focused
            </p>
            <p className="text-sm font-semibold tabular-nums">
              {numberFormatter.format(focusedPoint.bookings)}{" "}
              <span className="text-xs font-medium text-muted-foreground">
                {focusedPoint.shortDate}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="relative min-h-0 w-full flex-1">
        <ChartContainer
          config={bookingActivityChartConfig}
          className="h-[300px] w-full sm:h-[340px] lg:h-full"
        >
          <BarChart
            data={bookingActivityChartData}
            margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
            onMouseMove={(state) => {
              const rawIndex = (
                state as { activeTooltipIndex?: number | string } | undefined
              )?.activeTooltipIndex;
              const parsedIndexRaw =
                typeof rawIndex === "number"
                  ? rawIndex
                  : Number.isFinite(Number(rawIndex))
                    ? Number(rawIndex)
                    : null;
              const parsedIndex =
                parsedIndexRaw !== null &&
                parsedIndexRaw >= 0 &&
                parsedIndexRaw < bookingActivityChartData.length
                  ? parsedIndexRaw
                  : null;
              setActiveIndex((prev) =>
                prev === parsedIndex ? prev : parsedIndex,
              );
            }}
            onMouseLeave={() =>
              setActiveIndex((prev) => (prev === null ? prev : null))
            }
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="2 4"
              opacity={0.35}
            />
            <XAxis
              dataKey="dateKey"
              axisLine={false}
              padding={{ left: 6, right: 6 }}
              tickLine={false}
              tickMargin={10}
              tick={{ fontSize: 10 }}
              interval={0}
              tickFormatter={(value) =>
                bookingTickLabelMap.get(String(value)) ?? ""
              }
            />
            <YAxis hide />
            <Tooltip
              cursor={{ fill: "var(--muted)", fillOpacity: 0.12 }}
              content={<BookingActivityTooltip />}
            />
            {activePoint ? (
              <ReferenceLine
                ifOverflow="visible"
                x={activePoint.dateKey}
                stroke={bookingGuideColor}
                strokeWidth={2}
              />
            ) : null}
            {activePoint ? (
              <ReferenceDot
                ifOverflow="visible"
                x={activePoint.dateKey}
                y={activePoint.bookings}
                isFront
                shape={(props: unknown) => {
                  const { cx = 0, cy = 0 } = props as {
                    cx?: number;
                    cy?: number;
                  };
                  return (
                    <circle
                      cx={cx}
                      cy={cy - 8}
                      r={5.5}
                      fill="var(--background)"
                      stroke={bookingGuideColor}
                      strokeWidth={2.5}
                    />
                  );
                }}
              />
            ) : null}
            <Bar
              dataKey="bookings"
              fill="var(--color-bookings)"
              animationDuration={750}
              animationEasing="ease-out"
              isAnimationActive={shouldAnimate}
              onAnimationEnd={() => setShouldAnimate(false)}
              radius={[0, 0, 0, 0]}
            >
              {bookingActivityChartData.map((entry, index) => {
                const hasActivePoint = activeIndex !== null;
                const fill = !hasActivePoint
                  ? bookingBarBaseFill
                  : index === activeIndex
                    ? bookingBarActiveFill
                    : bookingBarMutedFill;
                return <Cell key={entry.dateKey} fill={fill} />;
              })}
            </Bar>
          </BarChart>
        </ChartContainer>
        {activePoint ? (
          <div
            className="pointer-events-none absolute bottom-2 z-10 -translate-x-1/2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold text-background shadow-md"
            style={{ left: `${activePointLeftPercent}%` }}
          >
            {activePoint.shortDate}
          </div>
        ) : null}
      </div>
    </section>
  );
};

const CALENDAR_CATEGORY_META: Record<
  BookingCalendarKind,
  {
    label: string;
    marker: "dot" | "ring" | "dash";
  }
> = {
  arrival: {
    label: "Arrivals",
    marker: "dot",
  },
  inHouse: {
    label: "In-House",
    marker: "ring",
  },
  departure: {
    label: "Departures",
    marker: "dash",
  },
};

const MONTH_VIEW_WEEKDAY_LABELS = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
] as const;

const ARRIVAL_DAY_PATTERN = [2, 4, 6, 8, 11, 13, 16, 19, 22, 24, 27, 29];
const DEPARTURE_DAY_PATTERN = [1, 5, 9, 14, 18, 23, 28, 30];
const IN_HOUSE_START_PATTERN = [1, 3, 7, 10, 14, 19, 23, 26];
const IN_HOUSE_SPAN_PATTERN = [2, 4, 5, 3, 6, 4, 3, 5];

function createVisibleMonth(date: Date): VisibleMonth {
  return {
    year: date.getFullYear(),
    monthIndex: date.getMonth(),
  };
}

function createDateAtNoon(year: number, monthIndex: number, day: number) {
  return new Date(year, monthIndex, day, 12, 0, 0, 0);
}

function getMondayFirstOffset(date: Date) {
  return (date.getDay() + 6) % 7;
}

function getDaysInVisibleMonth(visibleMonth: VisibleMonth) {
  return new Date(visibleMonth.year, visibleMonth.monthIndex + 1, 0).getDate();
}

function getVisibleMonthLabel(visibleMonth: VisibleMonth) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(createDateAtNoon(visibleMonth.year, visibleMonth.monthIndex, 1));
}

function shiftVisibleMonth(
  visibleMonth: VisibleMonth,
  offset: number,
): VisibleMonth {
  return createVisibleMonth(
    createDateAtNoon(visibleMonth.year, visibleMonth.monthIndex + offset, 1),
  );
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isSameDay(left: Date, right: Date) {
  return toDateKey(left) === toDateKey(right);
}

function isSameVisibleMonth(date: Date, visibleMonth: VisibleMonth) {
  return (
    date.getFullYear() === visibleMonth.year &&
    date.getMonth() === visibleMonth.monthIndex
  );
}

function dedupeBookingSeeds(bookings: Booking[]) {
  const seen = new Set<string>();
  return bookings.filter((booking) => {
    if (seen.has(booking.id)) {
      return false;
    }
    seen.add(booking.id);
    return true;
  });
}

function repeatBookingSeeds(
  bookings: Booking[],
  total: number,
  prefix: string,
) {
  if (bookings.length === 0 || total <= 0) {
    return [];
  }

  return Array.from({ length: total }, (_, index) => {
    const booking = bookings[index % bookings.length];
    const cycle = Math.floor(index / bookings.length);

    return {
      ...booking,
      id:
        cycle === 0
          ? `${prefix}-${booking.id}`
          : `${prefix}-${booking.id}-${cycle}`,
    };
  });
}

function normalizePatternDays(
  pattern: readonly number[],
  total: number,
  daysInMonth: number,
) {
  const usedDays = new Set<number>();

  return Array.from({ length: total }, (_, index) => {
    const baseDay = Math.min(pattern[index % pattern.length] ?? 1, daysInMonth);
    let candidate = baseDay;

    while (usedDays.has(candidate) && candidate < daysInMonth) {
      candidate += 1;
    }

    while (usedDays.has(candidate) && candidate > 1) {
      candidate -= 1;
    }

    usedDays.add(candidate);
    return candidate;
  });
}

function buildSingleDayCalendarBookings(
  bookings: Booking[],
  kind: Extract<BookingCalendarKind, "arrival" | "departure">,
  visibleMonth: VisibleMonth,
  pattern: readonly number[],
): CalendarBooking[] {
  const scheduledDays = normalizePatternDays(
    pattern,
    bookings.length,
    getDaysInVisibleMonth(visibleMonth),
  );

  return bookings.map((booking, index) => ({
    id: booking.id,
    guestName: booking.guestName,
    roomNumber: booking.roomNumber,
    roomType: booking.roomType,
    source: booking.source,
    status: booking.status,
    statusColor: booking.statusColor,
    guestCount: booking.guestCount,
    specialRequests: booking.specialRequests,
    kind,
    startDate: createDateAtNoon(
      visibleMonth.year,
      visibleMonth.monthIndex,
      scheduledDays[index] ?? 1,
    ),
  }));
}

function buildInHouseCalendarBookings(
  bookings: Booking[],
  visibleMonth: VisibleMonth,
): CalendarBooking[] {
  const daysInMonth = getDaysInVisibleMonth(visibleMonth);
  const scheduledDays = normalizePatternDays(
    IN_HOUSE_START_PATTERN,
    bookings.length,
    daysInMonth,
  );

  return bookings.map((booking, index) => {
    const startDay = scheduledDays[index] ?? 1;
    const span =
      IN_HOUSE_SPAN_PATTERN[index % IN_HOUSE_SPAN_PATTERN.length] ??
      Math.max(booking.nights, 2);
    const boundedSpan = Math.max(2, Math.min(span, 6));
    const endDay = Math.min(startDay + boundedSpan - 1, daysInMonth);

    return {
      id: booking.id,
      guestName: booking.guestName,
      roomNumber: booking.roomNumber,
      roomType: booking.roomType,
      source: booking.source,
      status: booking.status,
      statusColor: booking.statusColor,
      guestCount: booking.guestCount,
      specialRequests: booking.specialRequests,
      kind: "inHouse",
      startDate: createDateAtNoon(
        visibleMonth.year,
        visibleMonth.monthIndex,
        startDay,
      ),
      endDate: createDateAtNoon(
        visibleMonth.year,
        visibleMonth.monthIndex,
        endDay,
      ),
    };
  });
}

function remapBookingsForVisibleMonth(visibleMonth: VisibleMonth) {
  const arrivalPool = dedupeBookingSeeds([
    ...RECENT_ARRIVALS_TABLE,
    ...ARRIVALS,
  ]);
  const arrivalSeeds = repeatBookingSeeds(
    arrivalPool,
    Math.min(12, Math.max(10, arrivalPool.length)),
    "arrival",
  );
  const departureSeeds = repeatBookingSeeds(
    DEPARTURES,
    Math.max(6, DEPARTURES.length),
    "departure",
  );
  const inHouseSeeds = repeatBookingSeeds(
    IN_HOUSE,
    Math.max(6, IN_HOUSE.length),
    "inhouse",
  );

  return [
    ...buildSingleDayCalendarBookings(
      arrivalSeeds,
      "arrival",
      visibleMonth,
      ARRIVAL_DAY_PATTERN,
    ),
    ...buildInHouseCalendarBookings(inHouseSeeds, visibleMonth),
    ...buildSingleDayCalendarBookings(
      departureSeeds,
      "departure",
      visibleMonth,
      DEPARTURE_DAY_PATTERN,
    ),
  ];
}

function getCalendarCountsByDate(bookings: CalendarBooking[]) {
  const countsByDate = new Map<
    string,
    {
      arrivalsCount: number;
      inHouseCount: number;
      departuresCount: number;
    }
  >();

  bookings.forEach((booking) => {
    const endDate = booking.endDate ?? booking.startDate;
    let cursor = createDateAtNoon(
      booking.startDate.getFullYear(),
      booking.startDate.getMonth(),
      booking.startDate.getDate(),
    );

    while (cursor <= endDate) {
      const key = toDateKey(cursor);
      const counts = countsByDate.get(key) ?? {
        arrivalsCount: 0,
        inHouseCount: 0,
        departuresCount: 0,
      };

      if (booking.kind === "arrival" && isSameDay(cursor, booking.startDate)) {
        counts.arrivalsCount += 1;
      }

      if (
        booking.kind === "departure" &&
        isSameDay(cursor, booking.startDate)
      ) {
        counts.departuresCount += 1;
      }

      if (booking.kind === "inHouse") {
        counts.inHouseCount += 1;
      }

      countsByDate.set(key, counts);
      cursor = createDateAtNoon(
        cursor.getFullYear(),
        cursor.getMonth(),
        cursor.getDate() + 1,
      );
    }
  });

  return countsByDate;
}

function resolveDefaultCalendarSelectedDate(
  visibleMonth: VisibleMonth,
  bookings: CalendarBooking[],
  today: Date,
) {
  const countsByDate = getCalendarCountsByDate(bookings);
  const normalizedToday = createDateAtNoon(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  if (isSameVisibleMonth(normalizedToday, visibleMonth)) {
    const todayCounts = countsByDate.get(toDateKey(normalizedToday));
    if (
      todayCounts &&
      todayCounts.arrivalsCount +
        todayCounts.inHouseCount +
        todayCounts.departuresCount >
        0
    ) {
      return normalizedToday;
    }
  }

  const monthPrefix = `${visibleMonth.year}-${`${visibleMonth.monthIndex + 1}`.padStart(2, "0")}`;
  const firstBookedDateKey = Array.from(countsByDate.keys())
    .sort()
    .find((key) => key.startsWith(monthPrefix));

  if (firstBookedDateKey) {
    const [year, month, day] = firstBookedDateKey.split("-").map(Number);
    return createDateAtNoon(year, month - 1, day);
  }

  return createDateAtNoon(visibleMonth.year, visibleMonth.monthIndex, 1);
}

function buildCalendarDaySummaries({
  visibleMonth,
  bookings,
  selectedDate,
  today,
}: {
  visibleMonth: VisibleMonth;
  bookings: CalendarBooking[];
  selectedDate: Date;
  today: Date;
}): CalendarDaySummary[] {
  const firstOfMonth = createDateAtNoon(
    visibleMonth.year,
    visibleMonth.monthIndex,
    1,
  );
  const firstGridDate = createDateAtNoon(
    visibleMonth.year,
    visibleMonth.monthIndex,
    1 - getMondayFirstOffset(firstOfMonth),
  );
  const countsByDate = getCalendarCountsByDate(bookings);
  const normalizedToday = createDateAtNoon(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  return Array.from({ length: 42 }, (_, index) => {
    const date = createDateAtNoon(
      firstGridDate.getFullYear(),
      firstGridDate.getMonth(),
      firstGridDate.getDate() + index,
    );
    const key = toDateKey(date);
    const counts = countsByDate.get(key) ?? {
      arrivalsCount: 0,
      inHouseCount: 0,
      departuresCount: 0,
    };

    return {
      key,
      date,
      dayNumber: date.getDate(),
      isCurrentMonth: isSameVisibleMonth(date, visibleMonth),
      isToday: isSameDay(date, normalizedToday),
      isSelected: isSameDay(date, selectedDate),
      arrivalsCount: counts.arrivalsCount,
      inHouseCount: counts.inHouseCount,
      departuresCount: counts.departuresCount,
      totalCount:
        counts.arrivalsCount + counts.inHouseCount + counts.departuresCount,
    };
  });
}

function getCalendarSummaryForDate(
  summaries: CalendarDaySummary[],
  selectedDate: Date,
) {
  return (
    summaries.find((summary) => isSameDay(summary.date, selectedDate)) ?? {
      key: toDateKey(selectedDate),
      date: selectedDate,
      dayNumber: selectedDate.getDate(),
      isCurrentMonth: true,
      isToday: false,
      isSelected: true,
      arrivalsCount: 0,
      inHouseCount: 0,
      departuresCount: 0,
      totalCount: 0,
    }
  );
}

const calendarCellBaseStyle: React.CSSProperties = {
  backgroundColor: "var(--card)",
};

const calendarMutedCellStyle: React.CSSProperties = {
  backgroundColor: "color-mix(in oklch, var(--muted) 34%, var(--background))",
};

function getCalendarCellStyle(
  summary: CalendarDaySummary,
  isMobile: boolean,
): React.CSSProperties {
  const style: React.CSSProperties = {
    ...(summary.isCurrentMonth || summary.isSelected
      ? calendarCellBaseStyle
      : calendarMutedCellStyle),
  };

  if (summary.isSelected) {
    style.backgroundColor =
      "color-mix(in oklch, var(--muted) 82%, var(--background))";
    style.borderColor = "transparent";
    style.boxShadow = "none";
  } else if (summary.isToday) {
    style.boxShadow =
      "inset 0 0 0 1px color-mix(in oklch, var(--primary) 42%, transparent)";
  }

  if (isMobile && !summary.isCurrentMonth && !summary.isSelected) {
    style.opacity = 0.82;
  }

  return style;
}

function getCategoryDotStyle(kind: BookingCalendarKind): React.CSSProperties {
  const baseColor =
    "color-mix(in oklch, var(--foreground) 72%, var(--background))";
  const marker = CALENDAR_CATEGORY_META[kind].marker;

  if (marker === "ring") {
    return {
      backgroundColor: "transparent",
      boxShadow: `inset 0 0 0 1.5px ${baseColor}`,
    };
  }

  if (marker === "dash") {
    return {
      backgroundColor: baseColor,
      borderRadius: "999px",
      width: "0.6rem",
      height: "0.16rem",
    };
  }

  return {
    backgroundColor: baseColor,
    boxShadow: `0 0 0 1px color-mix(in oklch, var(--foreground) 12%, transparent)`,
  };
}

function MonthCalendarHeader({
  monthLabel,
  onToday,
  onPreviousMonth,
  onNextMonth,
}: {
  monthLabel: string;
  onToday: () => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
}) {
  return (
    <header className="flex flex-col gap-4 pb-3 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-medium tracking-[0.12em] text-muted-foreground uppercase">
          Bookings Calendar
        </p>
        <div className="mt-1 text-lg font-semibold text-foreground">
          {monthLabel}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 rounded-md bg-muted/45 px-4 font-medium"
          onClick={onToday}
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--muted) 72%, var(--background))",
          }}
        >
          Today
        </Button>
        <div className="h-5 w-px bg-border/55" aria-hidden="true" />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 rounded-md bg-muted/45 px-3 font-medium"
          aria-label="Previous month"
          onClick={onPreviousMonth}
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--muted) 72%, var(--background))",
          }}
        >
          <ChevronLeft className="mr-1.5 size-4" aria-hidden="true" />
          Prev month
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="h-9 rounded-md bg-muted/45 px-3 font-medium"
          aria-label="Next month"
          onClick={onNextMonth}
          style={{
            backgroundColor:
              "color-mix(in oklch, var(--muted) 72%, var(--background))",
          }}
        >
          Next month
          <ChevronRight className="ml-1.5 size-4" aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}

function WeekdayHeader() {
  return (
    <div
      className="hidden grid-cols-7 gap-px lg:grid"
      style={{
        backgroundColor: "color-mix(in oklch, var(--border) 72%, transparent)",
      }}
    >
      {MONTH_VIEW_WEEKDAY_LABELS.map((weekday) => (
        <div
          key={weekday}
          className="py-3 text-center text-xs font-semibold text-muted-foreground"
          style={{ backgroundColor: "var(--card)" }}
        >
          {weekday}
        </div>
      ))}
    </div>
  );
}

function CalendarMetricRows({ summary }: { summary: CalendarDaySummary }) {
  const rows = (
    [
      { kind: "arrival", count: summary.arrivalsCount },
      { kind: "inHouse", count: summary.inHouseCount },
      { kind: "departure", count: summary.departuresCount },
    ] as const
  ).filter((row) => row.count > 0);

  if (rows.length === 0) {
    return (
      <p className="pt-5 text-[11px] text-muted-foreground">
        No booking activity
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-1.5">
      {rows.map((row) => (
        <div
          key={row.kind}
          className="flex items-center gap-2 text-[11px] text-foreground/90"
        >
          <span
            className={cn(
              "shrink-0 rounded-full",
              CALENDAR_CATEGORY_META[row.kind].marker === "dash"
                ? "h-[0.16rem] w-2.5"
                : "size-2",
            )}
            aria-hidden="true"
            style={getCategoryDotStyle(row.kind)}
          />
          <span className="truncate">
            {CALENDAR_CATEGORY_META[row.kind].label}
          </span>
          <span className="ml-auto text-muted-foreground">{row.count}</span>
        </div>
      ))}
    </div>
  );
}

function CalendarDayCell({
  summary,
  mobile = false,
  onSelect,
}: {
  summary: CalendarDaySummary;
  mobile?: boolean;
  onSelect: (summary: CalendarDaySummary) => void;
}) {
  const hasBookings = summary.totalCount > 0;

  return (
    <button
      type="button"
      aria-label={new Intl.DateTimeFormat("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(summary.date)}
      aria-pressed={summary.isSelected}
      data-day-key={summary.key}
      data-current-month={summary.isCurrentMonth}
      data-has-bookings={hasBookings}
      data-selected={summary.isSelected}
      onClick={() => onSelect(summary)}
      className={cn(
        "group relative flex w-full text-left transition-colors focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
        mobile ? "h-16 flex-col px-2 py-2" : "min-h-[110px] flex-col px-3 py-2",
        !summary.isCurrentMonth &&
          !summary.isSelected &&
          "text-muted-foreground/75",
      )}
      style={getCalendarCellStyle(summary, mobile)}
    >
      <div className="flex items-start justify-between gap-2">
        <span
          className={cn(
            "inline-flex size-7 items-center justify-center rounded-full text-sm font-semibold tabular-nums",
            summary.isSelected && "bg-primary text-primary-foreground",
            !summary.isSelected &&
              summary.isToday &&
              "text-primary ring-1 ring-primary",
            !summary.isSelected && !summary.isToday && "text-foreground",
            !summary.isCurrentMonth &&
              !summary.isSelected &&
              "text-muted-foreground",
          )}
        >
          {summary.dayNumber}
        </span>
        {!mobile && hasBookings ? (
          <span className="pt-1 text-[11px] font-medium text-muted-foreground">
            {summary.totalCount} total
          </span>
        ) : null}
      </div>

      {!mobile ? (
        <CalendarMetricRows summary={summary} />
      ) : (
        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-1">
            {summary.arrivalsCount > 0 ? (
              <span
                className="size-1.5 rounded-full"
                style={getCategoryDotStyle("arrival")}
              />
            ) : null}
            {summary.inHouseCount > 0 ? (
              <span
                className="size-1.5 rounded-full"
                style={getCategoryDotStyle("inHouse")}
              />
            ) : null}
            {summary.departuresCount > 0 ? (
              <span
                className="h-[0.14rem] w-2 rounded-full"
                style={getCategoryDotStyle("departure")}
              />
            ) : null}
          </div>
          <span className="text-[10px] font-medium text-muted-foreground">
            {hasBookings ? summary.totalCount : ""}
          </span>
        </div>
      )}
    </button>
  );
}

function DesktopMonthGrid({
  summaries,
  onSelect,
}: {
  summaries: CalendarDaySummary[];
  onSelect: (summary: CalendarDaySummary) => void;
}) {
  return (
    <div
      className="hidden lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px"
      style={{
        backgroundColor: "color-mix(in oklch, var(--border) 72%, transparent)",
      }}
    >
      {summaries.map((summary) => (
        <CalendarDayCell
          key={summary.key}
          summary={summary}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function MobileMonthGrid({
  summaries,
  onSelect,
}: {
  summaries: CalendarDaySummary[];
  onSelect: (summary: CalendarDaySummary) => void;
}) {
  return (
    <div
      className="grid grid-cols-7 gap-px lg:hidden"
      style={{
        backgroundColor: "color-mix(in oklch, var(--border) 72%, transparent)",
      }}
    >
      {summaries.map((summary) => (
        <CalendarDayCell
          key={summary.key}
          summary={summary}
          mobile
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

function SummaryMetricInline({
  label,
  value,
  kind,
}: {
  label: string;
  value: number;
  kind: BookingCalendarKind;
}) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <span
        className={cn(
          "shrink-0 rounded-full",
          CALENDAR_CATEGORY_META[kind].marker === "dash"
            ? "h-[0.16rem] w-2.5"
            : "size-2",
        )}
        aria-hidden="true"
        style={getCategoryDotStyle(kind)}
      />
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold text-foreground">{value}</span>
    </div>
  );
}

function SelectedDaySummary({ summary }: { summary: CalendarDaySummary }) {
  const selectedLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(summary.date);

  return (
    <section
      aria-live="polite"
      data-testid="selected-day-summary"
      className="mt-1 rounded-2xl px-4 py-3 sm:px-5"
      style={{
        backgroundColor:
          "color-mix(in oklch, var(--muted) 38%, var(--background))",
      }}
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.08em] text-muted-foreground uppercase">
            Selected day
          </p>
          <div className="mt-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3">
            <p className="text-base font-semibold text-foreground">
              {selectedLabel}
            </p>
            <p className="text-sm text-muted-foreground">
              {summary.totalCount} occupancy touches
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <SummaryMetricInline
            label="Arrivals"
            value={summary.arrivalsCount}
            kind="arrival"
          />
          <SummaryMetricInline
            label="In-House"
            value={summary.inHouseCount}
            kind="inHouse"
          />
          <SummaryMetricInline
            label="Departures"
            value={summary.departuresCount}
            kind="departure"
          />
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Total</span>
            <span className="font-semibold text-foreground">
              {summary.totalCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const HotelMonthBookingsCalendarCard = () => {
  const today = React.useMemo(
    () =>
      createDateAtNoon(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate(),
      ),
    [],
  );
  const initialVisibleMonth = React.useMemo(
    () => createVisibleMonth(today),
    [today],
  );

  const [visibleMonth, setVisibleMonth] =
    React.useState<VisibleMonth>(initialVisibleMonth);
  const [selectedDate, setSelectedDate] = React.useState<Date>(() =>
    resolveDefaultCalendarSelectedDate(
      initialVisibleMonth,
      remapBookingsForVisibleMonth(initialVisibleMonth),
      today,
    ),
  );

  const bookings = React.useMemo(
    () => remapBookingsForVisibleMonth(visibleMonth),
    [visibleMonth],
  );

  const daySummaries = React.useMemo(
    () =>
      buildCalendarDaySummaries({
        visibleMonth,
        bookings,
        selectedDate,
        today,
      }),
    [bookings, selectedDate, today, visibleMonth],
  );

  const selectedSummary = React.useMemo(
    () => getCalendarSummaryForDate(daySummaries, selectedDate),
    [daySummaries, selectedDate],
  );

  const applyVisibleMonth = React.useCallback(
    (nextVisibleMonth: VisibleMonth) => {
      const nextBookings = remapBookingsForVisibleMonth(nextVisibleMonth);
      const nextSelectedDate = resolveDefaultCalendarSelectedDate(
        nextVisibleMonth,
        nextBookings,
        today,
      );

      React.startTransition(() => {
        setVisibleMonth(nextVisibleMonth);
        setSelectedDate(nextSelectedDate);
      });
    },
    [today],
  );

  const handleSelectDay = React.useCallback((summary: CalendarDaySummary) => {
    React.startTransition(() => {
      setVisibleMonth(createVisibleMonth(summary.date));
      setSelectedDate(summary.date);
    });
  }, []);

  return (
    <section data-testid="hotel-bookings-calendar" className="w-full">
      <MonthCalendarHeader
        monthLabel={getVisibleMonthLabel(visibleMonth)}
        onToday={() => applyVisibleMonth(createVisibleMonth(today))}
        onPreviousMonth={() =>
          applyVisibleMonth(shiftVisibleMonth(visibleMonth, -1))
        }
        onNextMonth={() =>
          applyVisibleMonth(shiftVisibleMonth(visibleMonth, 1))
        }
      />

      <div className="py-2">
        <SelectedDaySummary summary={selectedSummary} />

        <div className="mt-3" data-testid="month-calendar-grid">
          <WeekdayHeader />
          <DesktopMonthGrid
            summaries={daySummaries}
            onSelect={handleSelectDay}
          />
          <MobileMonthGrid
            summaries={daySummaries}
            onSelect={handleSelectDay}
          />
        </div>
      </div>
    </section>
  );
};

const LatestUpdatesPanel = () => {
  const [query, setQuery] = React.useState("");
  const [activityRange, setActivityRange] =
    React.useState<ActivityRange>("today");

  const handleActivityRangeChange = React.useCallback((value: string) => {
    if (isActivityRange(value)) {
      setActivityRange(value);
    }
  }, []);

  const rangeBookings = React.useMemo(
    () => ({
      today: {
        arrivals: ARRIVALS,
        inHouse: IN_HOUSE,
        departures: DEPARTURES,
      },
      yesterday: {
        arrivals: ARRIVALS.slice(1, 4),
        inHouse: IN_HOUSE.slice(0, 2),
        departures: DEPARTURES.slice(0, 1),
      },
      week: {
        arrivals: RECENT_ARRIVALS_TABLE.slice(0, 8),
        inHouse: [
          ...IN_HOUSE,
          ...IN_HOUSE.slice(0, 1).map((booking) => ({
            ...booking,
            id: `${booking.id}-week`,
          })),
        ],
        departures: [
          ...DEPARTURES,
          ...DEPARTURES.slice(0, 1).map((booking) => ({
            ...booking,
            id: `${booking.id}-week`,
          })),
        ],
      },
    }),
    [],
  );

  const activeBookings = rangeBookings[activityRange];
  const checkinsCount = activeBookings.arrivals.length;
  const checkoutsCount = activeBookings.departures.length;
  const rangeLabel = activityRange === "week" ? "this week" : activityRange;

  const filterBookings = React.useCallback(
    (bookings: Booking[]) => {
      const normalizedQuery = query.trim().toLowerCase();
      if (!normalizedQuery) return bookings;
      return bookings.filter((booking) =>
        [
          booking.guestName,
          booking.roomType,
          booking.roomNumber,
          booking.source,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      );
    },
    [query],
  );

  const filteredArrivals = React.useMemo(
    () => filterBookings(activeBookings.arrivals),
    [filterBookings, activeBookings.arrivals],
  );
  const filteredInHouse = React.useMemo(
    () => filterBookings(activeBookings.inHouse),
    [filterBookings, activeBookings.inHouse],
  );
  const filteredDepartures = React.useMemo(
    () => filterBookings(activeBookings.departures),
    [filterBookings, activeBookings.departures],
  );
  const groupedBookings = React.useMemo(
    () => [
      {
        key: "arrivals",
        label: "Arrivals",
        icon: DoorOpen,
        count: filteredArrivals.length,
        bookings: filteredArrivals,
      },
      {
        key: "in-house",
        label: "In-House",
        icon: BedDouble,
        count: filteredInHouse.length,
        bookings: filteredInHouse,
      },
      {
        key: "departures",
        label: "Departures",
        icon: KeyRound,
        count: filteredDepartures.length,
        bookings: filteredDepartures,
      },
    ],
    [filteredArrivals, filteredInHouse, filteredDepartures],
  );

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-medium text-pretty sm:text-base">
          Guest Activity
        </h2>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        {checkinsCount} check-ins · {checkoutsCount} check-outs {rangeLabel}
      </p>

      <div className="mt-3 flex min-h-0 flex-1 flex-col gap-0">
        <Tabs value={activityRange} onValueChange={handleActivityRangeChange}>
          <TabsList className="w-full justify-start">
            <TabsTrigger value="today">Today</TabsTrigger>
            <TabsTrigger value="yesterday">Yesterday</TabsTrigger>
            <TabsTrigger value="week">This week</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="mt-3 flex items-center gap-2 rounded-md border bg-background px-2.5 py-2">
          <Search
            className="size-3.5 text-muted-foreground"
            aria-hidden="true"
          />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search guest, room, or source"
            className="h-4 w-full border-none bg-transparent text-xs text-foreground outline-none placeholder:text-muted-foreground"
            aria-label="Search bookings"
          />
        </div>

        <div className="mt-3 min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="space-y-5 pr-1">
              {groupedBookings.map((group) => (
                <section key={group.key} className="space-y-2.5">
                  <div className="flex items-center justify-between border-b border-border/70 pb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="flex size-5 items-center justify-center rounded-md bg-muted text-foreground">
                        <group.icon className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-[11px] font-semibold tracking-[0.08em] text-foreground/90 uppercase">
                        {group.label}
                      </span>
                    </div>
                    <span className="rounded-md bg-muted px-2 py-0.5 text-[11px] font-semibold text-foreground tabular-nums">
                      {group.count}
                    </span>
                  </div>
                  <BookingList bookings={group.bookings} />
                </section>
              ))}
              {groupedBookings.every(
                (group) => group.bookings.length === 0,
              ) && (
                <div className="rounded-lg border border-dashed border-border bg-muted/30 px-3 py-6 text-center text-xs text-muted-foreground">
                  No bookings found for this search.
                </div>
              )}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

function PipelineTooltip({
  active,
  payload,
  label,
  valueFormatter,
}: TooltipProps<number, string> & {
  valueFormatter: (v: number) => string;
}) {
  if (!active || !payload?.length) return null;
  const entry = payload[0];
  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-lg">
      <p className="mb-1 text-xs font-medium text-foreground">{label}</p>
      <p className="text-sm font-semibold text-foreground">
        {valueFormatter(Number(entry.value))}
      </p>
    </div>
  );
}

const SalesPipelineChart = () => {
  const [searchParams, setSearchParams] = React.useState(
    () =>
      new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : "",
      ),
  );

  const quarter = searchParams.get("quarter") ?? "q1";

  const handleQuarterChange = (value: string) => {
    const next = new URLSearchParams(searchParams);
    next.set("quarter", value);
    setSearchParams(next);
    window.history.replaceState(null, "", `?${next.toString()}`);
  };

  const data = salesPipelineData[quarter] ?? salesPipelineData.q1;
  const totalOrders = data.reduce((sum, d) => sum + d.orders, 0);
  const totalSales = data.reduce((sum, d) => sum + d.sales, 0);

  return (
    <div className="flex min-w-0 flex-1 flex-col rounded-xl border bg-card">
      <div className="flex h-14 items-center justify-between border-b px-4 sm:px-5">
        <div className="flex items-center gap-2.5">
          <Button
            variant="outline"
            size="icon"
            className="size-7 sm:size-8"
            aria-label="Sales Pipeline"
          >
            <BarChart3
              className="size-4 text-muted-foreground sm:size-[18px]"
              aria-hidden="true"
            />
          </Button>
          <h2 className="text-sm font-medium text-pretty sm:text-base">
            Sales Pipeline
          </h2>
        </div>

        <Select value={quarter} onValueChange={handleQuarterChange}>
          <SelectTrigger
            className="h-7 w-[120px] text-xs"
            aria-label="Select quarter"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="q1">Quarter 1</SelectItem>
            <SelectItem value="q2">Quarter 2</SelectItem>
            <SelectItem value="q3">Quarter 3</SelectItem>
            <SelectItem value="q4">Quarter 4</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-4 p-4 sm:grid-cols-[1fr_auto_1fr] sm:p-5">
        <div className="flex min-h-0 min-w-0 flex-col gap-3 overflow-hidden">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {numberFormatter.format(totalOrders)}
            </p>
            <p className="text-[10px] tracking-wider text-muted-foreground uppercase">
              Total Orders
            </p>
          </div>
          <div className="min-h-0 w-full min-w-0 flex-1">
            <ChartContainer config={ordersBarConfig} className="h-full w-full">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  dx={-5}
                  width={40}
                />
                <Tooltip
                  cursor={{ fillOpacity: 0.05 }}
                  content={
                    <PipelineTooltip
                      valueFormatter={(v) => numberFormatter.format(v)}
                    />
                  }
                />
                <Bar
                  dataKey="orders"
                  radius={[4, 4, 0, 0]}
                  fill="var(--color-orders)"
                  shape={createHighlightBarShape("var(--color-orders)")}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>

        <div className="hidden w-px self-stretch bg-border sm:block" />

        <div className="flex min-h-0 min-w-0 flex-col gap-3 overflow-hidden">
          <div>
            <p className="text-lg font-semibold tracking-tight">
              {compactCurrencyFormatter.format(totalSales)}
            </p>
            <p className="text-[10px] tracking-wider text-muted-foreground uppercase">
              Total Sales
            </p>
          </div>
          <div className="min-h-0 w-full min-w-0 flex-1">
            <ChartContainer config={salesBarConfig} className="h-full w-full">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="0" vertical={false} />
                <XAxis
                  dataKey="week"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  dy={8}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10 }}
                  dx={-5}
                  width={40}
                />
                <Tooltip
                  cursor={{ fillOpacity: 0.05 }}
                  content={
                    <PipelineTooltip
                      valueFormatter={(v) => currencyFormatter.format(v)}
                    />
                  }
                />
                <Bar
                  dataKey="sales"
                  radius={[4, 4, 0, 0]}
                  fill="var(--color-sales)"
                  shape={createHighlightBarShape("var(--color-sales)")}
                />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

function CustomTooltip({
  active,
  payload,
  label,
  colors,
}: TooltipProps<number, string> & {
  colors: { primary: string; secondary: string };
}) {
  if (!active || !payload?.length) return null;

  const thisYear = payload.find((p) => p.dataKey === "thisYear")?.value || 0;
  const prevYear = payload.find((p) => p.dataKey === "prevYear")?.value || 0;
  const diff = Number(thisYear) - Number(prevYear);
  const percentage = prevYear ? Math.round((diff / Number(prevYear)) * 100) : 0;
  const currentYear = new Date().getFullYear();

  return (
    <div className="rounded-lg border border-border bg-popover p-2 shadow-lg sm:p-3">
      <p className="mb-1.5 text-xs font-medium text-foreground sm:mb-2 sm:text-sm">
        {label}, {currentYear}
      </p>
      <div className="space-y-1 sm:space-y-1.5">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="size-2 rounded-full sm:size-2.5"
            style={{ backgroundColor: colors.primary }}
          />
          <span className="text-[10px] text-muted-foreground sm:text-sm">
            This Year:
          </span>
          <span className="text-[10px] font-medium text-foreground sm:text-sm">
            {currencyFormatter.format(Number(thisYear))}
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div
            className="size-2 rounded-full sm:size-2.5"
            style={{ backgroundColor: colors.secondary }}
          />
          <span className="text-[10px] text-muted-foreground sm:text-sm">
            Prev Year:
          </span>
          <span className="text-[10px] font-medium text-foreground sm:text-sm">
            {currencyFormatter.format(Number(prevYear))}
          </span>
        </div>
        <div className="mt-1 border-t border-border pt-1">
          <span
            className={cn(
              "text-[10px] font-medium sm:text-xs",
              diff >= 0 ? "text-emerald-500" : "text-red-500",
            )}
          >
            {diff >= 0 ? "+" : ""}
            {percentage}% vs last year
          </span>
        </div>
      </div>
    </div>
  );
}

const RevenueFlowChart = () => {
  const [period, setPeriod] = React.useState<TimePeriod>("year");

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const nextPeriod = params.get("period");
    if (nextPeriod === "6months" || nextPeriod === "year") {
      setPeriod(nextPeriod);
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (period !== "year") {
      params.set("period", period);
    } else {
      params.delete("period");
    }
    const nextQuery = params.toString();
    const nextUrl = nextQuery
      ? `${window.location.pathname}?${nextQuery}`
      : window.location.pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [period]);

  const chartData = getDataForPeriod(period);
  const totalRevenue = chartData.reduce((acc, item) => acc + item.thisYear, 0);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-xl border bg-card p-4 sm:gap-6 sm:p-6">
      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
        <div className="flex flex-1 flex-col gap-1">
          <p className="text-xl leading-tight font-semibold tracking-tight sm:text-2xl">
            {currencyFormatter.format(totalRevenue)}
          </p>
          <p className="text-xs text-muted-foreground">
            Total Revenue ({periodLabels[period]})
          </p>
        </div>
        <div className="hidden items-center gap-3 sm:flex sm:gap-5">
          <div className="flex items-center gap-1.5">
            <div
              className="size-2.5 rounded-full sm:size-3"
              style={{ backgroundColor: palette.primary }}
            />
            <span className="text-[10px] text-muted-foreground sm:text-xs">
              This Year
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="size-2.5 rounded-full sm:size-3"
              style={{ backgroundColor: palette.secondary.light }}
            />
            <span className="text-[10px] text-muted-foreground sm:text-xs">
              Prev Year
            </span>
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 sm:size-8"
              aria-label="Select time period"
            >
              <MoreHorizontal className="size-4" aria-hidden="true" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>Time Period</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {(Object.keys(periodLabels) as TimePeriod[]).map((key) => (
              <DropdownMenuCheckboxItem
                key={key}
                checked={period === key}
                onCheckedChange={() => setPeriod(key)}
              >
                {periodLabels[key]}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="h-[200px] w-full min-w-0 sm:h-[240px] lg:h-[280px]">
        <ChartContainer
          config={revenueFlowChartConfig}
          className="h-full w-full"
        >
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="0" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10 }}
              dx={-5}
              tickFormatter={(value) => compactCurrencyFormatter.format(value)}
              width={40}
            />
            <Tooltip
              content={
                <CustomTooltip
                  colors={{
                    primary: "var(--color-thisYear)",
                    secondary: "var(--color-prevYear)",
                  }}
                />
              }
              cursor={{ strokeOpacity: 0.2 }}
            />
            <Line
              type="linear"
              dataKey="thisYear"
              stroke="var(--color-thisYear)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              dot={{ fill: "var(--color-thisYear)", strokeWidth: 0, r: 2 }}
              activeDot={{ r: 3.5, fill: "var(--color-thisYear)" }}
            />
            <Line
              type="linear"
              dataKey="prevYear"
              stroke="var(--color-prevYear)"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeOpacity={0.5}
              dot={{
                fill: "var(--color-prevYear)",
                fillOpacity: 0.5,
                strokeWidth: 0,
                r: 2,
              }}
              activeDot={{
                r: 3.5,
                fill: "var(--color-prevYear)",
                fillOpacity: 0.5,
              }}
            />
          </LineChart>
        </ChartContainer>
      </div>
    </div>
  );
};

const RecentOrdersTable = () => {
  const [statusFilter, setStatusFilter] = React.useState<OrderStatus | "all">(
    "all",
  );
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isHydrated, setIsHydrated] = React.useState(false);
  const pageSize = 6;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
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
    setIsHydrated(true);
  }, []);

  const filteredOrders = React.useMemo(() => {
    if (statusFilter === "all") return orders;
    return orders.filter((order) => order.status === statusFilter);
  }, [statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / pageSize));

  const paginatedOrders = React.useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredOrders.slice(startIndex, startIndex + pageSize);
  }, [filteredOrders, currentPage, pageSize]);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [statusFilter]);

  React.useEffect(() => {
    if (!isHydrated || typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
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
    const nextQuery = params.toString();
    const nextUrl = nextQuery
      ? `${window.location.pathname}?${nextQuery}`
      : window.location.pathname;
    window.history.replaceState(null, "", nextUrl);
  }, [statusFilter, currentPage, isHydrated]);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const startRow = filteredOrders.length ? (currentPage - 1) * pageSize + 1 : 0;
  const endRow = Math.min(currentPage * pageSize, filteredOrders.length);

  return (
    <div className="rounded-xl border bg-card">
      <div className="flex items-center justify-between gap-3 px-4 pt-4 sm:px-6">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-medium text-pretty sm:text-base">
            Recent Orders
          </h2>
          <span className="ml-1 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-600 ring-1 ring-gray-500/10 ring-inset sm:text-xs dark:bg-gray-800/50 dark:text-gray-400 dark:ring-gray-400/20">
            {filteredOrders.length}
          </span>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="h-8 gap-1.5 sm:h-9 sm:gap-2"
            >
              <span className="text-xs sm:text-sm">
                {statusFilter === "all" ? "All" : statusFilter}
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

      <div className="px-4 pt-3 pb-4 sm:px-6">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className={tableHeadClass}>Order Ref</TableHead>
              <TableHead className={tableHeadClass}>Buyer</TableHead>
              <TableHead className={tableHeadClass}>Total</TableHead>
              <TableHead className={tableHeadClass}>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedOrders.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
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
                  <TableCell className="text-xs text-muted-foreground sm:text-sm">
                    {order.customer}
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

      <div className="flex items-center justify-between border-t px-4 py-3 text-[10px] text-muted-foreground sm:px-6 sm:text-xs">
        <span>
          {startRow}-{endRow} of {filteredOrders.length}
        </span>
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

const FulfillmentPanel = () => {
  return (
    <div className="flex flex-col gap-4 rounded-xl border bg-card p-5">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-sm font-medium text-pretty">Order Fulfillment</h2>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="size-7"
            aria-label="Refresh"
          >
            <RotateCcw className="size-3.5" aria-hidden="true" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-7"
                aria-label="Options"
              >
                <MoreHorizontal className="size-3.5" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Export CSV</DropdownMenuItem>
              <DropdownMenuItem>View All Orders</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div>
        <div className="flex items-center border-b pr-3 pb-2 text-[10px] text-muted-foreground">
          <span className="w-20 shrink-0">Order</span>
          <span className="flex-1">Status</span>
          <span className="w-8 shrink-0 text-right">Del[%]</span>
        </div>
        <ScrollArea className="h-[280px]">
          <div className="divide-y pr-3">
            {fulfillmentData.map((row) => (
              <div
                key={row.order}
                className="flex items-center gap-2 py-2.5 text-xs"
              >
                <span className="w-20 shrink-0 font-medium">{row.order}</span>
                <div className="flex min-w-0 flex-1 items-center gap-px overflow-hidden">
                  {row.segments.slice(0, 15).map((opacity, i) => {
                    const filled = i < Math.round((row.progress / 100) * 15);
                    return (
                      <div
                        key={i}
                        className="h-2.5 w-2 shrink-0 rounded-[1px]"
                        style={{
                          backgroundColor: filled
                            ? palette.primary
                            : "var(--muted)",
                          opacity: filled ? opacity : 0.2,
                        }}
                      />
                    );
                  })}
                </div>
                <span className="w-8 shrink-0 text-right font-medium">
                  {row.progress}
                </span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  return (
    <main
      id="dashboard-main"
      tabIndex={-1}
      className="w-full flex-1 space-y-4 bg-background p-3 sm:space-y-6 sm:p-4 md:p-6"
    >
      <HotelStatsCards />
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[3fr_2fr]">
        <SalesPipelineChart />
        <RevenueFlowChart />
      </div>
      <div className="grid gap-4 sm:gap-6 lg:grid-cols-[2fr_1fr]">
        <RecentOrdersTable />
        <FulfillmentPanel />
      </div>
    </main>
  );
};

const Dashboard17 = ({ className }: { className?: string }) => {
  const topLeftStackRef = React.useRef<HTMLDivElement>(null);
  const [topRowHeight, setTopRowHeight] = React.useState<number | null>(null);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  React.useEffect(() => {
    const element = topLeftStackRef.current;
    if (!element) return;

    const updateHeight = () => setTopRowHeight(element.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(() => {
      updateHeight();
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <SidebarProvider className={cn("bg-sidebar", className)}>
      <a
        href="#dashboard-main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm focus:text-foreground focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <AppSidebar />
      <div className="h-svh w-full overflow-hidden lg:p-2">
        <div className="flex h-full w-full flex-col bg-background lg:rounded-xl lg:border">
          <div className="min-h-0 flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="space-y-4 p-3 sm:space-y-6 sm:p-4 md:p-6">
                <DashboardIntro />
                <div className="grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:items-start">
                  <div
                    ref={topLeftStackRef}
                    className="flex min-h-0 flex-col gap-4 sm:gap-6 lg:self-start"
                  >
                    <HotelStatsCards />
                    <OccupancyChart />
                  </div>
                  <div
                    className="min-h-0 lg:self-start lg:border-l lg:pl-6"
                    style={
                      isDesktop && topRowHeight
                        ? { height: topRowHeight }
                        : undefined
                    }
                  >
                    <LatestUpdatesPanel />
                  </div>
                </div>
                <div className="border-t border-dashed border-border/70 pt-4 sm:pt-6">
                  <HotelMonthBookingsCalendarCard />
                </div>
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export {
  Dashboard17,
  buildCalendarDaySummaries,
  createDateAtNoon,
  createVisibleMonth,
  getCalendarCountsByDate,
  remapBookingsForVisibleMonth,
  resolveDefaultCalendarSelectedDate,
  shiftVisibleMonth,
  toDateKey,
};
