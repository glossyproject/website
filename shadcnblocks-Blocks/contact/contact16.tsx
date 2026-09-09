import { CornerDownRight, Mail, Smartphone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact16 = () => {
  return (
    <section className="bg-background text-foreground dark py-32">
      <div className="container">
        <h1 className="text-5xl font-semibold tracking-tight lg:text-8xl">
          Get in Touch
          <sup>*</sup>
        </h1>
        <div className="mt-20 flex flex-col justify-between gap-10 lg:flex-row">
          <div className="w-full max-w-md">
            <p className="text-muted-foreground/50 tracking-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              vel ratione natus nihil harum, perferendis sint facilis possimus
              reprehenderit optio!
            </p>
            <div className="mt-10 flex justify-between">
              <a
                className="text-foreground/40 hover:text-foreground flex items-center gap-1"
                href="tel:+1020020023"
              >
                {" "}
                <Smartphone className="h-4 w-4" /> +102 002 0023
              </a>
              <a
                className="text-foreground/40 hover:text-foreground flex items-center gap-1"
                href="mailto:hello@company.com"
              >
                {" "}
                <Mail className="h-4 w-4" /> hello@company.com
              </a>
            </div>
          </div>
          <form className="lg:pl-30 col-span-4 flex w-full flex-col gap-2">
            <Input
              type="text"
              placeholder="Name*"
              className="border-b-foreground/15 h-19 placeholder:text-foreground/20 rounded-none border-0 border-b !bg-transparent focus-visible:ring-0"
            />
            <Input
              type="email"
              placeholder="Email*"
              className="border-b-foreground/15 h-19 placeholder:text-foreground/20 rounded-none border-0 border-b !bg-transparent focus-visible:ring-0"
            />
            <Input
              type="text"
              placeholder="Message (Tell us about your project)"
              className="border-b-foreground/15 h-19 placeholder:text-foreground/20 rounded-none border-0 border-b !bg-transparent focus-visible:ring-0"
            />
            <Button
              variant="ghost"
              className="mt-15 h-15 flex items-center justify-start gap-2 text-base"
            >
              <CornerDownRight className="size-6" />
              Get in touch
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export { Contact16 };
