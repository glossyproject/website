"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface CutoutGalleryImage {
  label?: string;
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
interface Badge {
  text: string;
  announcement?: string;
  url?: string;
}

interface HeroCutoutGalleryProps {
  badge?: Badge;
  heading: string;
  description?: string;
  buttons?: Buttons;
  images: CutoutGalleryImage[];
  className?: string;
}

interface Hero265Props extends HeroCutoutGalleryProps {}
type Props = Partial<Hero265Props>;

const defaultProps: Hero265Props = {
  badge: { text: "Visual Storytelling" },
  heading: "Blocks Built With Shadcn & Tailwind",
  description:
    "Finely crafted components built with React, Tailwind and shadcn/ui. Developers can copy and paste these blocks directly into their project.",
  buttons: {
    primary: {
      text: "Browse Components",
      url: "https://www.shadcnblocks.com",
    },
    secondary: {
      text: "Learn More",
      url: "https://www.shadcnblocks.com",
    },
  },
  images: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-1-16x9.jpg",
      alt: "Photographic landscape",
      label: "Mountain Terrain",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-2-16x9.jpg",
      alt: "Photographic landscape",
      label: "Rolling Hills",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-3-16x9.jpg",
      alt: "Photographic landscape",
      label: "Forest Canopy",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/photos/photo-4-16x9.jpg",
      alt: "Photographic city view",
      label: "City Skyline",
    },
  ],
};

const Hero265 = (props: Props) => {
  const { badge, heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <MaskedDiv maskType="type-7">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={currentIndex}
                  className="h-full w-full object-cover"
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.4 }}
                />
              </AnimatePresence>
            </MaskedDiv>
          </div>

          <div className="flex flex-col gap-6">
            {badge && (
              <Badge variant="secondary" className="w-fit">
                {badge.text}
              </Badge>
            )}
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
              {heading}
            </h1>
            {description && (
              <p className="max-w-md text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
            {buttons && (
              <div className="flex flex-wrap items-center gap-3">
                {buttons.primary && (
                  <Button size="lg" className="group" asChild>
                    <a href={buttons.primary.url}>
                      {buttons.primary.text}
                      <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                )}
                {buttons.secondary && (
                  <Button size="lg" variant="ghost" asChild>
                    <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero265 };

type MaskType = "type-7";

interface SvgPath {
  path: string;
  height: number;
  width: number;
}

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  maskType?: MaskType;
  className?: string;
}

const svgPaths: Record<MaskType, SvgPath> = {
  "type-7": {
    path: "M60 0C26.863 0 0 26.863 0 60V540C0 573.137 26.863 600 60 600H340C373.137 600 400 573.137 400 540V220C400 186.863 426.863 160 460 160H540C573.137 160 600 133.137 600 100V60C600 26.863 573.137 0 540 0H60Z",
    height: 600,
    width: 600,
  },
};

const MaskedDiv: React.FC<MaskedDivProps> = ({
  children,
  maskType = "type-7",
  className = "",
}) => {
  const selectedMask = svgPaths[maskType];

  const svgString = `data:image/svg+xml,%3Csvg width='${selectedMask.width}' height='${selectedMask.height}' viewBox='0 0 ${selectedMask.width} ${selectedMask.height}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${selectedMask.path}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  const containerStyle: React.CSSProperties = {
    aspectRatio: `${selectedMask.width}/${selectedMask.height}`,
    maskImage: `url("${svgString}")`,
    WebkitMaskImage: `url("${svgString}")`,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskSize: "contain",
    WebkitMaskSize: "contain",
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
  };

  return (
    <div className={`relative ${className}`} style={containerStyle}>
      {React.cloneElement(children, {
        className: `w-full h-full object-cover transition-all duration-300 ${
          children.props.className || ""
        }`,
      })}
    </div>
  );
};
