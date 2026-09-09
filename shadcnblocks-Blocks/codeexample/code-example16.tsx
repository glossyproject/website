"use client";

import { useState } from "react";

import type { BundledLanguage } from "@/components/kibo-ui/code-block";
import {
  CodeBlock,
  CodeBlockBody,
  CodeBlockContent,
  CodeBlockFilename,
  CodeBlockHeader,
  CodeBlockItem,
  CodeBlockSelect,
  CodeBlockSelectContent,
  CodeBlockSelectItem,
  CodeBlockSelectTrigger,
  CodeBlockSelectValue,
} from "@/components/kibo-ui/code-block";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const codeSnippets = [
  {
    language: "server",
    filename: "get-insights.server.ts",
    code: `import { getMetricsClient } from "@acme/analytics/server";

export async function getInsights(dashboardId: string) {
  const client = await getMetricsClient();
  const { series, window } = await client.query({
    dashboardId,
    range: "last_24_hours",
  });

  if (!series || series.length === 0) {
    throw new Error("No data available for this dashboard");
  }

  return {
    points: series,
    window,
  };
}`,
  },
  {
    language: "client",
    filename: "use-insights.ts",
    code: `import { useEffect, useState } from "react";

type InsightPoint = {
  label: string;
  value: number;
};

type InsightState = {
  points: InsightPoint[];
  window: string;
};

export function useInsights(dashboardId: string) {
  const [state, setState] = useState<InsightState | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const res = await fetch("/api/insights", {
        method: "POST",
        body: JSON.stringify({ dashboardId }),
      });

      if (!cancelled) {
        const data = (await res.json()) as InsightState;
        setState(data);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, [dashboardId]);

  return state;
}`,
  },
  {
    language: "react",
    filename: "insights-panel.tsx",
    code: `import { useInsights } from "./use-insights";

type InsightsPanelProps = {
  dashboardId: string;
};

export const InsightsPanel = ({ dashboardId }: InsightsPanelProps) => {
  const data = useInsights(dashboardId);

  if (!data) {
    return (
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Loading live metrics…</span>
        <span className="h-2 w-16 animate-pulse rounded-full bg-muted" />
      </div>
    );
  }

  return (
    <div className="space-y-2 text-sm">
      <p className="truncate text-muted-foreground">
        Top segment: {data.points[0]?.label ?? "—"}
      </p>
      <p className="text-xs text-muted-foreground">
        Time window: <span className="font-medium">{data.window}</span>
      </p>
    </div>
  );
};`,
  },
];

interface CodeExample16Props {
  className?: string;
}

const CodeExample16 = ({ className }: CodeExample16Props) => {
  const [activeMode, setActiveMode] = useState("server");

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-3xl space-y-6 text-center">
            <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
              Built for fast‑moving teams
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
              Streaming analytics APIs that stay easy to evolve.
            </h2>
            <p className="text-balance text-muted-foreground sm:text-base">
              Pipe product events straight into dashboards your team actually
              reads. Pick the integration style that fits each surface&mdash;
              backend jobs, edge workers, or drop-in React visualizations.
            </p>
            <Button size="lg" className="mt-2">
              Explore the analytics API
            </Button>
          </div>
          <div className="mt-10 w-full max-w-3xl">
            <CodeBlock
              data={codeSnippets}
              value={activeMode}
              onValueChange={setActiveMode}
              className="w-full"
            >
              <CodeBlockHeader className="justify-between gap-2">
                <CodeBlockFilename value={activeMode} className="text-xs">
                  {
                    codeSnippets.find(
                      (snippet) => snippet.language === activeMode,
                    )?.filename
                  }
                </CodeBlockFilename>
                <div className="flex items-center gap-2">
                  <Tabs
                    value={activeMode}
                    onValueChange={setActiveMode}
                    className="hidden sm:flex"
                  >
                    <TabsList className="h-8">
                      <TabsTrigger value="server" className="px-3 text-xs">
                        Server
                      </TabsTrigger>
                      <TabsTrigger value="client" className="px-3 text-xs">
                        Client
                      </TabsTrigger>
                      <TabsTrigger value="react" className="px-3 text-xs">
                        React
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                  <CodeBlockSelect>
                    <CodeBlockSelectTrigger className="text-xs capitalize sm:hidden">
                      <CodeBlockSelectValue />
                    </CodeBlockSelectTrigger>
                    <CodeBlockSelectContent>
                      {(item) => (
                        <CodeBlockSelectItem
                          key={item.language}
                          value={item.language}
                          className="text-xs capitalize"
                        >
                          {item.language}
                        </CodeBlockSelectItem>
                      )}
                    </CodeBlockSelectContent>
                  </CodeBlockSelect>
                </div>
              </CodeBlockHeader>
              <ScrollArea className="w-full">
                <CodeBlockBody>
                  {(item) => (
                    <CodeBlockItem
                      key={item.language}
                      value={item.language}
                      className="max-h-96 w-full"
                    >
                      <CodeBlockContent
                        language={"typescript" as BundledLanguage}
                      >
                        {item.code}
                      </CodeBlockContent>
                    </CodeBlockItem>
                  )}
                </CodeBlockBody>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CodeBlock>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CodeExample16 };
