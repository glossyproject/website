import { ChevronsUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact18 = () => {
  const supportFeatures = [
    { text: "24/7 Full time support" },
    { text: "Quick response within 2 hours" },
    { text: "Expert consultation available" },
    { text: "Free project assessment" },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="gap-15 max-h-120 mt-20 flex flex-col justify-between md:gap-10 lg:flex-row">
          <div className="gap-15 flex w-full max-w-lg flex-col justify-between">
            <div className="relative w-fit">
              <h1 className="text-6xl font-semibold tracking-tight lg:text-7xl">
                Get in Touch
              </h1>
              <Illustration className="absolute -right-5 -top-2 size-5 text-red-500 md:size-6" />
              <Illustration className="absolute -bottom-2 -left-5 size-5 rotate-180 text-red-500 md:size-6" />
            </div>
            <ul className="space-y-6">
              {supportFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="text-foreground/50 flex items-center gap-8 text-base"
                >
                  <div className="flex size-6 items-center justify-center bg-red-100 text-red-500">
                    <ChevronsUp className="size-5" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>
            <a
              href=""
              className="flex items-center gap-4 text-4xl font-medium tracking-tighter"
            >
              hi@shadcnblocks.com
            </a>
          </div>
          <div className="col-span-4 flex w-full flex-col gap-2 lg:pl-10">
            <form className="space-y-2">
              <Input
                type="text"
                placeholder="Name"
                className="border-b-foreground/25 h-15 placeholder:text-foreground/20 bg-muted rounded-xl border-0 shadow-none placeholder:uppercase focus-visible:ring-0"
              />
              <Input
                type="text"
                placeholder="phone (optional)"
                className="border-b-foreground/25 h-15 placeholder:text-foreground/20 bg-muted rounded-xl border-0 shadow-none placeholder:uppercase focus-visible:ring-0"
              />
              <Input
                type="text"
                placeholder="Email "
                className="border-b-foreground/25 h-15 placeholder:text-foreground/20 bg-muted rounded-xl border-0 shadow-none placeholder:uppercase focus-visible:ring-0"
              />
              <Textarea
                placeholder="Message (Tell us about your project)"
                className="border-b-foreground/25 placeholder:text-foreground/20 bg-muted min-h-52 rounded-xl border-0 shadow-none placeholder:uppercase focus-visible:ring-0"
              />

              <Button className="h-15 w-full rounded-xl uppercase">
                Submit now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact18 };

const Illustration = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M-0.0078125 0.867188H21.1133V4.89062H2.00391C0.892865 4.89062 -0.0078125 3.98995 -0.0078125 2.87891V0.867188Z"
        fill="currentColor"
      />
      <path
        d="M16.9316 0.867188H21.1133V19.9404H19.0225C17.8677 19.9404 16.9316 19.0043 16.9316 17.8496V0.867188Z"
        fill="currentColor"
      />
    </svg>
  );
};
