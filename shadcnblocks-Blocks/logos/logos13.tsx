const Logos13 = () => {
  const logos = [
    {
      id: "logo-1",
      description: "/2021",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-2",
      description: "/2022",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-1.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-3",
      description: "/2023",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-2.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-4",
      description: "/2024",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-3.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-5",
      description: "/2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-4.svg",
      className: "h-7 w-auto dark:invert",
    },
    {
      id: "logo-6",
      description: "/2026",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/company/fictional-company-logo-5.svg",
      className: "h-5 w-auto dark:invert",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-6">
          <div className="top-10 col-span-2 flex h-fit w-fit items-center gap-3 py-8 lg:sticky">
            <span className="size-3 bg-orange-500" />
            <p className="text-foreground/30 text-xl uppercase lg:text-2xl">
              Our partners
            </p>
          </div>
          <ul className="col-span-4 grid w-full grid-cols-2 gap-2 lg:grid-cols-3">
            {logos.map((logo, index) => (
              <li
                key={index}
                className="bg-muted relative flex h-72 items-center justify-center rounded-2xl"
              >
                <div className="">
                  <img
                    src={logo.image}
                    alt={logo.description}
                    className={logo.className}
                  />
                </div>

                <p className="text-foreground/40 absolute bottom-4 right-4 font-mono text-sm tracking-tight">
                  {logo.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Logos13 };
