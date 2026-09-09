"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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

interface Hero264Props extends HeroCutoutGalleryProps {}
type Props = Partial<Hero264Props>;

const defaultProps: Hero264Props = {
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

const Hero264 = (props: Props) => {
  const { badge, heading, description, buttons, images, className } = {
    ...defaultProps,
    ...props,
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [currentIndex, images.length]);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center">
          {badge && <Badge variant="outline">{badge.text}</Badge>}
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight lg:text-6xl">
            {heading}
          </h1>
          {description && (
            <p className="max-w-xl text-muted-foreground lg:text-lg">
              {description}
            </p>
          )}
          {buttons && (
            <div className="flex gap-3">
              {buttons.primary && (
                <Button size="lg" asChild>
                  <a href={buttons.primary.url}>
                    {buttons.primary.text}
                    <ArrowUpRight className="ml-1 size-4" />
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

        <div className="@container relative mt-12">
          <MaskedDiv>
            <AnimatePresence mode="popLayout">
              <motion.img
                key={currentIndex}
                className="h-full w-full object-cover"
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
              />
            </AnimatePresence>
          </MaskedDiv>

          <div
            className="absolute z-10 flex items-start"
            style={{
              left: `${((CUTOUT_LEFT + GAP) / W) * 100}%`,
              right: `${((W - CUTOUT_RIGHT + GAP) / W) * 100}%`,
              top: `${((CUTOUT_TOP + GAP) / H) * 100}%`,
              bottom: "0%",
              gap: `${(GAP / W) * 100}cqw`,
            }}
          >
            {images.map((img, i) => {
              const r = `${(R / W) * 100}cqw`;
              const isFirst = i === 0;
              const isLast = i === images.length - 1;
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  style={{
                    borderRadius: isFirst
                      ? `${r} 0 0 ${r}`
                      : isLast
                        ? `0 ${r} ${r} 0`
                        : "0",
                  }}
                  className={cn(
                    "h-full flex-1 overflow-hidden transition-opacity duration-500",
                    i === currentIndex
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75",
                  )}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero264 };

interface MaskedDivProps {
  children: React.ReactElement<HTMLImageElement | HTMLVideoElement>;
  className?: string;
}

const R = 56;
const W = 1340;
const H = 620;

const CUTOUT_LEFT = 200;
const CUTOUT_RIGHT = W - 200;
const CUTOUT_TOP = H - 220;
const GAP = 12;

const MASK_PATH = [
  `M${R} 0`,
  `H${W - R}`,
  `A${R} ${R} 0 0 1 ${W} ${R}`,
  `V${H - R}`,
  `A${R} ${R} 0 0 1 ${W - R} ${H}`,
  `H${CUTOUT_RIGHT + R}`,
  `A${R} ${R} 0 0 1 ${CUTOUT_RIGHT} ${H - R}`,
  `V${CUTOUT_TOP + R}`,
  `A${R} ${R} 0 0 0 ${CUTOUT_RIGHT - R} ${CUTOUT_TOP}`,
  `H${CUTOUT_LEFT + R}`,
  `A${R} ${R} 0 0 0 ${CUTOUT_LEFT} ${CUTOUT_TOP + R}`,
  `V${H - R}`,
  `A${R} ${R} 0 0 1 ${CUTOUT_LEFT - R} ${H}`,
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
