
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

const Logos22 = (props: Props) => {
  const { topRow, bottomRow, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="flex w-full flex-col items-center gap-8">
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-4 md:gap-x-20 lg:gap-x-28">
            {topRow.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex aspect-3/1 w-28 items-center justify-center sm:w-32"
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
          </div>

          <div className="grid grid-cols-2 items-center justify-items-center gap-x-12 gap-y-8 max-md:w-full sm:grid-cols-5 md:gap-x-20 lg:gap-x-28">
            {bottomRow.map((logo, index) => (
              <div
                key={`${logo.src}-${index}`}
                className="flex aspect-3/1 w-28 items-center justify-center sm:w-32"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export { Logos22 };
