"use client";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type LogosSimpleStaticLogo = Logo & {
  href?: string;
};
interface Logo {
  src: string;
  alt: string;
  srcDark?: string;
  className?: string;
}

interface LogosSimpleStaticProps {
  logos: LogosSimpleStaticLogo[];
  className?: string;
}

type Props = Partial<LogosSimpleStaticProps>;

const defaultProps: LogosSimpleStaticProps = {
  logos: [
    {
      src: "/logo-brands/3m.svg",
      alt: "3M",
      className: "h-7 w-auto",
      href: "https://www.3m.com",
    },
    {
      src: "/logo-brands/llumar.svg",
      alt: "LLumar",
      className: "h-7 w-auto",
      href: "https://www.llumar.com",
    },
    {
      src: "/logo-brands/suntek-logo.svg",
      alt: "Suntek",
      className: "h-7 w-auto",
      href: "https://www.suntek.com",
    },
    {
      src: "/logo-brands/beebot-neo-border.webp",
      alt: "Beebot Neo",
      className: "h-7 w-auto",
      href: "https://beebot.ai",
    },
    {
      src: "/logo-brands/av-white.png",
      alt: "AV White",
      className: "h-5 w-auto",
      href: "#",
    },
    {
      src: "/logo-brands/icon-kharisma-film-3.png",
      alt: "Kharisma Film",
      className: "h-7 w-auto",
      href: "#",
    },
    {
      src: "/logo-brands/image-removebg-preview.png",
      alt: "Brand logo",
      className: "h-7 w-auto",
      href: "#",
    },
    {
      src: "/logo-brands/image-removebg-preview (1).png",
      alt: "Brand logo 1",
      className: "h-7 w-auto",
      href: "#",
    },
    {
      src: "/logo-brands/image-removebg-preview (2).png",
      alt: "Brand logo 2",
      className: "h-7 w-auto",
      href: "#",
    },
    {
      src: "/logo-brands/pngwing.com.png",
      alt: "PNG Wing",
      className: "h-7 w-auto",
      href: "https://www.pngwing.com",
    },
  ],
};

const Logos19 = (props: Props) => {
  const { logos, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-16", className)}>
      <Marquee gradient gradientWidth={64} autoFill pauseOnHover speed={40}>
        {logos.map((logo, index) => (
          <div
            key={`${logo.src}-${index}`}
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
    </section>
  );
};

export { Logos19 };
