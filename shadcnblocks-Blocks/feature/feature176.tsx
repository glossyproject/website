"use client";

import {
  ArrowUp,
  ArrowUpRight,
  ChartCandlestick,
  ChartNoAxesColumnIncreasing,
  Share,
  X,
} from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";

const chartData = [
  { month: "January", desktop: 40, mobile: 30 },
  { month: "February", desktop: 60, mobile: 30 },
  { month: "March", desktop: 70, mobile: 35 },
  { month: "April", desktop: 50, mobile: 25 },
  { month: "May", desktop: 40, mobile: 20 },
  { month: "June", desktop: 30, mobile: 15 },
  { month: "March", desktop: 70, mobile: 35 },
  { month: "April", desktop: 50, mobile: 25 },
  { month: "May", desktop: 40, mobile: 20 },
  { month: "June", desktop: 30, mobile: 15 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
  },
  mobile: {
    label: "Mobile",
  },
} satisfies ChartConfig;

const Feature176 = () => {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_0.5px,transparent_0.5px)] opacity-20 [background-size:16px_16px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--muted-foreground)/10)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground)/10)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20 [mask-image:radial-gradient(circle_at_center,transparent_50%,hsl(var(--background))_100%)]"></div>
      </div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Left Side */}
          <div className="bg-background/50 flex h-fit flex-col gap-4 rounded-lg p-4">
            <div className="bg-card flex flex-row items-center gap-x-2 rounded-lg border p-4 shadow-sm">
              <ChartNoAxesColumnIncreasing className="size-6" />
              <h1 className="truncate text-xl font-bold sm:text-2xl">
                Analytics Snapshot
              </h1>
              <span className="text-muted-foreground ml-auto shrink-0 font-mono text-sm uppercase">
                Data/logs/3201927
              </span>
            </div>

            {/* Middle: Evaluation */}
            <div className="bg-card rounded-lg border p-4 shadow-sm">
              <div className="flex flex-row items-center">
                <h1>Evaluation</h1>
                <Badge className="ml-auto bg-green-300 text-green-600 hover:bg-green-300/80">
                  False Positive
                </Badge>
              </div>
              <div className="my-4">
                <span className="text-muted-foreground text-xs">
                  Recent performance evaluation shows significant improvement in
                  code quality and project delivery times. Consistently meets
                  deadlines and demonstrates strong problem-solving skills.
                  Recommended for consideration in upcoming team lead positions.
                </span>
              </div>
              <div className="flex flex-row items-center">
                <h1>Key Skills</h1>
              </div>
              <div className="my-4 flex flex-row items-center space-x-3">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
              </div>
              <div>
                <div className="flex flex-row items-center">
                  <h1>True Positive Score</h1>
                  <Progress
                    value={60}
                    className="ml-auto max-w-32 rounded-sm"
                  />
                </div>

                <div className="my-4 space-y-2">
                  <Skeleton className="h-1 w-full" />
                  <Skeleton className="h-1 w-full" />
                  <Skeleton className="h-1 w-full" />
                </div>
              </div>
              <div className="bg-card mb-4 mt-12 flex items-center justify-between">
                <div className="space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-success text-success hover:bg-success/10"
                  >
                    False Positive
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-destructive text-destructive hover:bg-destructive/10 hover:text-red-600"
                  >
                    True Positive
                  </Button>
                </div>

                <div className="flex space-x-2">
                  <Button size="icon" variant="outline" className="size-8">
                    <X className="size-4" />
                  </Button>
                  <Button size="icon" variant="outline" className="size-8">
                    <Share className="size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-background/50 mt-24 flex flex-col gap-4 rounded-lg p-4">
              <div className="bg-card flex flex-row items-center gap-x-2 rounded-lg border p-4 shadow-sm">
                <ChartNoAxesColumnIncreasing className="size-6" />
                <h1 className="truncate text-xl font-bold sm:text-2xl">
                  Data Metrics
                </h1>
                <span className="text-muted-foreground ml-auto shrink-0 font-mono text-sm uppercase">
                  Data/logs/182620
                </span>
              </div>

              {/* Chart Section */}
              <Card>
                <CardHeader className="flex flex-row items-center">
                  <CardTitle className="text-xl">Monthly Performance</CardTitle>
                  <CardDescription className="ml-auto">
                    <Badge className="bg-green-300 text-green-600 hover:bg-green-300/80">
                      Last 6 Months
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer
                    config={chartConfig}
                    className="h-[196px] w-full"
                  >
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dashed" />}
                      />
                      <Bar dataKey="desktop" radius={4} />
                      <Bar dataKey="mobile" radius={4} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              {/* Analytics Cards */}
              <div className="bg-background/50 mt-4 flex flex-col rounded-lg border p-4 shadow-sm">
                <div className="flex flex-row items-center">
                  <ChartCandlestick className="text-foreground/60 size-6" />
                  <span className="text-muted-foreground ml-4 text-sm">
                    Shadcnblocks.com Stats
                  </span>
                </div>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {/* Card 1 */}
                  <div className="bg-card rounded-lg border p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">2.5K</h2>
                      <ArrowUpRight className="text-success size-6" />
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Active Users
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-card rounded-lg border p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">$8.1K</h2>
                      <ArrowUpRight className="text-success size-6" />
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Monthly Revenue
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-card rounded-lg border p-4 shadow-sm">
                    <div className="flex items-start justify-between">
                      <h2 className="text-3xl font-bold">92%</h2>
                      <ArrowUp className="text-success size-6" />
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">
                      Customer Satisfaction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature176 };
