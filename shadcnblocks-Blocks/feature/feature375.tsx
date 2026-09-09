import {
  CheckCircle,
  Edit,
  List,
  type LucideIcon,
  MessagesSquare,
  Timer,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}
interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface FeatureSingleFocusProps {
  heading: string;
  description: string;
  image: Image;
  buttons?: Buttons;
  headingAccent?: string;
  className?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Feature blocks ready to ship with shadcn/ui",
  description: "Shadcnblocks ships production-ready React sections built with Tailwind CSS and shadcn/ui. Pick a block, preview it with your theme, then paste it in or install with the shadcn CLI.",
  buttons: {
    secondary: {
      text: "View feature",
      url: "https://www.shadcnblocks.com",
    },
  },
  image: {
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-4x3.png",
  alt: "Shadcnblocks section preview in the explorer",
},
};

const ICONS: LucideIcon[] = [MessagesSquare, Edit, CheckCircle, List, Timer];
const MAX_FEATURES = 5;

/** Like **feature373** column order (media leads on large screens), with a **contained** muted card and subtle radial halo matching **feature86** (no edge bleed). */
const Feature375 = (props: Props) => {
  const { heading, headingAccent, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  const features = (props.features ?? defaultProps.features ?? []).slice(
    0,
    MAX_FEATURES,
  );

  return (
    <section className={cn("py-32", className)}>
      <div className="container p-6 md:p-16">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="flex min-h-0 w-full items-center justify-center rounded-lg border border-border bg-muted p-8 md:p-10 lg:col-span-2">
            <div className="relative isolate w-full max-w-full">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[-18%] z-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_52%,rgb(0_0_0/0.08)_0%,rgb(0_0_0/0.02)_45%,transparent_74%)] dark:bg-[radial-gradient(ellipse_70%_60%_at_50%_52%,rgb(0_0_0/0.14)_0%,rgb(0_0_0/0.04)_45%,transparent_74%)]"
              />
              <img
                src={image.src}
                alt={image.alt}
                className="relative z-10 aspect-4/3 h-auto w-full max-w-full rounded-lg border border-border object-cover shadow-[0_0.4rem_1.25rem_-0.4rem_rgb(0_0_0/0.07),0_1rem_2.25rem_-0.6rem_rgb(0_0_0/0.05)] dark:shadow-[0_0.4rem_1.25rem_-0.4rem_rgb(0_0_0/0.14),0_1rem_2.25rem_-0.6rem_rgb(0_0_0/0.1)]"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h2 className="my-9 text-3xl font-semibold tracking-tight md:text-5xl">
                {heading}
                <br />
                <span className="text-muted-foreground">{headingAccent}</span>
              </h2>
              <p className="text-muted-foreground">{description}</p>
            </div>
            {features.length > 0 ? (
              <div className="flex flex-col gap-3">
                {features.map((item, index) => {
                  const Icon = ICONS[index] ?? MessagesSquare;
                  return (
                    <div
                      className="flex items-center gap-2 text-muted-foreground"
                      key={`${item.title}-${index}`}
                    >
                      <Icon className="h-auto w-4" />
                      {item.title}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {buttons?.primary ? (
              <Button variant="outline" asChild>
                <a href={buttons.primary.url ?? "#"}>{buttons.primary.text}</a>
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature375 };
