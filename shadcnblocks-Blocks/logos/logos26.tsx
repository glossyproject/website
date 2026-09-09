"use client";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type LogosDoubleRowStaticLogo = Logo & {
  href?: string;
};
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface LogosDoubleRowStaticProps {
  topRow: LogosDoubleRowStaticLogo[];
  bottomRow: LogosDoubleRowStaticLogo[];
  className?: string;
}

type Props = Partial<LogosDoubleRowStaticProps>;

const defaultProps: LogosDoubleRowStaticProps = {
  topRow: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-1.svg",
      alt: "Company logo 1",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-2.svg",
      alt: "Company logo 2",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-3.svg",
      alt: "Company logo 3",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-4.svg",
      alt: "Company logo 4",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
  ],
  bottomRow: [
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-5.svg",
      alt: "Company logo 5",
      className: "h-5 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-6.svg",
      alt: "Company logo 6",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-7.svg",
      alt: "Company logo 7",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-8.svg",
      alt: "Company logo 8",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
    {
      src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/logos/fictional-company-logo-9.svg",
      alt: "Company logo 9",
      className: "h-7 w-auto",
      href: "https://www.shadcnblocks.com",
    },
  ],
};

const Logos26 = (props: Props) => {
  const { topRow, bottomRow, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex w-full flex-col gap-8">
          <MarqueeRow logos={topRow} direction="left" />
          <MarqueeRow logos={bottomRow} direction="right" />
        </div>
      </div>
    </section>
  );
};

function MarqueeRow({
  logos,
  direction,
}: {
  logos: LogosDoubleRowStaticLogo[];
  direction: "left" | "right";
}) {
  return (
    <div className="relative w-full">
      <Marquee direction={direction} speed={40} pauseOnHover autoFill>
        {logos.map((logo, index) => (
          <div
            key={`${direction}-${logo.src}-${index}`}
            className="mx-8 flex aspect-3/1 w-28 items-center justify-center sm:w-32 lg:mx-10"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className={cn(
                logo.className,
                "h-auto max-h-7 w-auto object-contain dark:invert",
              )}
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-background to-transparent" />
    </div>
  );
}

export { Logos26 };
