import { FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const navigation = [
  {
    title: "Products",
    links: [
      { name: "VAR", href: "#" },
      { name: "Credit Transfers", href: "#" },
      { name: "Credit Accounts", href: "#" },
      { name: "Loan Origination", href: "#" },
      { name: "Loan Purchase", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Pricing", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Demo", href: "#" },
      { name: "Contact", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Privacy Policy", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Twitter", icon: FaXTwitter, href: "https://twitter.com" },
  { name: "Facebook", icon: FaFacebook, href: "https://facebook.com" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://linkedin.com" },
];

export const Footer14 = () => {
  return (
    <section className="bg-background py-12 sm:py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-5 md:px-6">
        {/* Logo and newsletter section */}
        <div className="mb-10 flex flex-col items-start justify-between gap-10 border-b pb-10 sm:mb-16 sm:pb-12 md:flex-row">
          <div className="w-full max-w-full sm:max-w-sm">
            <a href="https://shadcnblocks.com">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                alt="Charter logo"
                className="mb-6 h-8 dark:invert"
              />
            </a>
            <p className="text-muted-foreground mb-8 text-base">
              Building financial solutions for businesses and individuals around
              the globe.
            </p>

            {/* Newsletter subscription */}
            <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
              <input
                type="email"
                placeholder="Your email"
                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-12 flex-1 rounded-md border px-4 py-2 text-base file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:h-10 sm:text-sm"
              />
              <button className="bg-primary text-primary-foreground ring-offset-background hover:bg-primary/90 focus-visible:ring-ring inline-flex h-12 items-center justify-center whitespace-nowrap rounded-md px-6 py-2 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
            <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-3">
              {navigation.map((section) => (
                <div key={section.title} className="min-w-[140px]">
                  <h2 className="mb-4 text-lg font-semibold">
                    {section.title}
                  </h2>
                  <ul className="space-y-3.5">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-muted-foreground hover:text-foreground active:text-primary inline-block py-1 transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Visit our ${link.name} page`}
                className="text-muted-foreground hover:bg-accent hover:text-foreground active:bg-accent/70 rounded-full p-3 transition-all duration-200"
                rel="noopener noreferrer"
                target="_blank"
              >
                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
              </a>
            ))}
          </div>

          {/* Copyright - Below on mobile, left on desktop */}
          <p className="text-muted-foreground order-2 text-center text-sm sm:text-left md:order-1">
            © {new Date().getFullYear()} Charter. All rights reserved.{" "}
            <a
              href="https://shadcnblocks.com"
              className="text-foreground hover:text-primary underline underline-offset-4 transition-colors"
              target="_blank"
            >
              Shadcnblocks.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
