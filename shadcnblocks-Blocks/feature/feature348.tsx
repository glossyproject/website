import { ArrowRight } from "lucide-react";

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
  className?: string;
}

type Props = Partial<FeatureSingleFocusProps>;

const defaultProps: FeatureSingleFocusProps = {
  heading: "Go Pro, Build Better",
  description: "Take your designs to the next level with Pro! Get access to premium UI blocks, advanced customization options, and new updates regularly.",
  buttons: {
  secondary: {
      text: "View feature",
      url: "https://www.shadcnblocks.com",
    },
  primary: {
      text: "Go Pro",
      url: "#",
    },
},
  image: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/saas-details/saas-detail-1-1x1.png",
    alt: "Shadcnblocks section preview in the explorer",
  },
};

const Feature348 = (props: Props) => {
  const { heading, description, image, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("bg-background py-32", className)}>
      <div className="border-b">
        <div className="container flex w-full flex-col gap-6">
          <h2 className="text-5xl leading-[1.1] font-semibold tracking-tight text-foreground md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="grid w-full gap-16 xl:grid-cols-[.66fr_.33fr]">
            <div className="flex flex-col gap-11 xl:col-start-2 xl:row-start-1">
              <div className="text-xl leading-[1.6] text-muted-foreground">
                {description}
              </div>
              <div>
                <Button asChild size="lg" className="w-full md:w-fit">
                  <a href={buttons?.primary?.url ?? "#"}>
                    {buttons?.primary?.text ?? "Go Pro"}
                    <ArrowRight />
                  </a>
                </Button>
              </div>
            </div>
            <div className="pt-10 xl:col-start-1 xl:row-start-1 xl:pt-20">
              <div className="relative mr-auto w-full after:absolute after:top-0 after:left-0 after:z-20 after:block after:h-full after:w-1/3 after:rounded-tl-2xl after:bg-linear-270 after:from-transparent after:to-background after:content-['']">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square w-full rounded-tl-2xl rounded-tr-2xl object-cover object-[50%_0%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature348 };
