"use client";

import { ArrowRight, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import { FaWindows } from "react-icons/fa";

import { Button } from "@/components/ui/button";

const Download13 = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("winget install Example.App");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32">
      <div className="container">
        <span className="rounded-4xl bg-primary mx-auto grid size-28 place-items-center p-4 md:size-32">
          <img
            src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
            alt="logo"
            className="size-16 invert dark:invert-0"
          />
        </span>
        <h1 className="mt-10 text-center text-4xl font-semibold md:text-6xl">
          Download for Desktop
        </h1>
        <p className="text-muted-foreground mx-auto mt-4 max-w-5xl text-center md:mt-6 md:text-xl">
          Experience seamless productivity with our desktop application. Get
          started in minutes with automatic updates and cross-platform support.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 md:mt-20">
          <FaWindows className="size-14" />
          <Button>
            <Download />
            Download for Windows
          </Button>
          <div className="flex items-center gap-1.5 rounded-lg border py-1 pl-4 pr-2">
            <span className="font-mono text-sm">
              winget install Example.App
            </span>
            <Button
              variant="link"
              size="icon"
              onClick={handleCopy}
              className="relative"
            >
              <span
                className={`duration-250 absolute inset-0 grid place-items-center transition-all ${
                  copied
                    ? "blur-xs scale-75 opacity-0"
                    : "scale-100 opacity-100 blur-0"
                }`}
              >
                <Copy />
              </span>
              <span
                className={`duration-250 absolute inset-0 grid place-items-center transition-all ${
                  copied
                    ? "scale-100 opacity-100 blur-0"
                    : "blur-xs scale-75 opacity-0"
                }`}
              >
                <Check className="text-emerald-600" />
              </span>
            </Button>
          </div>
          <a
            href="#"
            className="text-muted-foreground flex items-center gap-1 text-xs hover:underline"
          >
            Other Installation Methods
            <ArrowRight className="size-3" />
          </a>
          <div className="mt-10 flex flex-col items-center gap-2 md:mt-20">
            <p className="text-muted-foreground text-sm font-medium">
              All Windows downloads:
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                x64
              </Button>
              <Button variant="outline" size="sm">
                Arm64
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Download13 };
