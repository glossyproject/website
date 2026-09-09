"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Play, Users } from "lucide-react";
import React, { useEffect, useState } from "react";

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

interface HeroCutoutGalleryProps {
  heading: string;
  description?: string;
  buttons?: Buttons;
  images: CutoutGalleryImage[];
  className?: string;
}

interface Hero266Props extends HeroCutoutGalleryProps {}
type Props = Partial<Hero266Props>;

const defaultProps: Hero266Props = {
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

const Hero266 = (props: Props) => {
  const { heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
              {heading}
            </h1>
            {description && (
              <p className="max-w-md text-muted-foreground lg:text-lg">
                {description}
              </p>
            )}
          </div>
          {buttons && (
            <div className="flex gap-3">
              {buttons.primary && (
                <Button size="lg" asChild>
                  <a href={buttons.primary.url}>
                    <Play className="mr-1 size-4" />
                    {buttons.primary.text}
                  </a>
                </Button>
              )}
              {buttons.secondary && (
                <Button size="lg" variant="outline" asChild>
                  <a href={buttons.secondary.url}>{buttons.secondary.text}</a>
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="relative">
          <MaskedDiv>
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="h-full w-full object-cover"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6 }}
              />
            </AnimatePresence>
          </MaskedDiv>

          {images[currentIndex].label && (
            <div className="absolute bottom-4 left-4 hidden items-center gap-2 rounded-full bg-background/90 px-4 py-2 shadow-md backdrop-blur-sm lg:flex">
              <MapPin className="size-4 text-muted-foreground" />
              <span className="text-sm font-medium">
                {images[currentIndex].label}
              </span>
            </div>
          )}

          <div className="absolute right-4 bottom-4 hidden items-center gap-2 rounded-full bg-background/90 px-4 py-2 shadow-md backdrop-blur-sm lg:flex">
            <Users className="size-4 text-muted-foreground" />
            <span className="text-sm font-medium">340+ Projects</span>
          </div>

          <div className="absolute top-4 right-4 hidden rounded-full bg-background/90 px-4 py-2 shadow-md backdrop-blur-sm lg:block">
            <div className="flex items-center gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={cn(
                    "size-2 rounded-full transition-all",
                    i === currentIndex
                      ? "scale-125 bg-foreground"
                      : "bg-muted-foreground/40",
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-auto lg:hidden">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "shrink-0 overflow-hidden rounded-xl border-2 transition-all",
                i === currentIndex
                  ? "border-foreground"
                  : "border-transparent opacity-60",
              )}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-20 w-28 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Hero266 };

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  className?: string;
}

const R = 56;
const W = 1300;
const H = 560;

const NOTCH_RIGHT = W - 180;
const NOTCH_BOTTOM = 180;

const MASK_PATH = [
  `M${R} 0`,
  `H${NOTCH_RIGHT - R}`,
  `A${R} ${R} 0 0 1 ${NOTCH_RIGHT} ${R}`,
  `V${NOTCH_BOTTOM - R}`,
  `A${R} ${R} 0 0 0 ${NOTCH_RIGHT + R} ${NOTCH_BOTTOM}`,
  `H${W - R}`,
  `A${R} ${R} 0 0 1 ${W} ${NOTCH_BOTTOM + R}`,
  `V${H - R}`,
  `A${R} ${R} 0 0 1 ${W - R} ${H}`,
  `H${R}`,
  `A${R} ${R} 0 0 1 0 ${H - R}`,
  `V${R}`,
  `A${R} ${R} 0 0 1 ${R} 0`,
  "Z",
].join("");

const MaskedDiv: React.FC<MaskedDivProps> = ({ children, className = "" }) => {
  const svgString = `data:image/svg+xml,%3Csvg width='${W}' height='${H}' viewBox='0 0 ${W} ${H}' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='${MASK_PATH}' fill='%23D9D9D9'/%3E%3C/svg%3E%0A`;

  return (
    <div
      className={`pointer-events-none relative ${className}`}
      style={{
        aspectRatio: `${W}/${H}`,
        maskImage: `url("${svgString}")`,
        WebkitMaskImage: `url("${svgString}")`,
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        width: "100%",
        maxWidth: "100%",
        margin: "0 auto",
      }}
    >
      {React.cloneElement(children, {
        className: `w-full h-full object-cover transition-all duration-300 ${
          children.props.className || ""
        }`,
      })}
    </div>
  );
};
