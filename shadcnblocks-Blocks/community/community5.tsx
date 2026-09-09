import { GitBranch, Star, Users } from "lucide-react";
import { FaDiscord, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

import { GridPattern } from "@/components/magicui/grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const GITHUB_PROFILE = {
  name: "shadcnblocks",
  url: "https://github.com/shadcnblocks",
  description: "Open-source UI blocks for your next project.",
  stats: {
    stars: "4.2k",
    forks: "1.1k",
    contributors: "120+",
  },
};

const socials = [
  {
    name: "Discord",
    icon: <FaDiscord className="h-6 w-6" />,
    url: "#",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="h-6 w-6" />,
    url: "#",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin className="h-6 w-6" />,
    url: "#",
  },
];

const Community5 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center pb-10 md:pb-14 xl:pb-[60px]">
          <Badge>
            <FaGithub className="mr-1 h-4 w-4" />
            GitHub Community
          </Badge>
          <h5 className="text-foreground mt-4 text-xl font-semibold leading-7 tracking-tight md:text-center xl:text-3xl">
            Contribute to our community
          </h5>
          <p className="text-muted-foreground mt-2 text-lg md:text-center xl:mt-3 xl:text-lg">
            Dive into our code, contribute, and join a thriving open-source
            community.
          </p>

          {/* Expanded GitHub Card */}
          <div className="mx-auto mt-10 flex w-full max-w-2xl flex-col items-center">
            <Card className="border-border relative flex w-full flex-col items-start gap-6 overflow-hidden rounded-2xl border p-8 shadow-lg md:flex-row lg:items-center">
              {/* Grid Pattern in bottom right */}
              <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-2/3 w-2/3">
                <GridPattern
                  className="h-full w-full"
                  style={{
                    maskImage:
                      "radial-gradient(circle at 100% 100%, black 60%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(circle at 100% 100%, black 60%, transparent 100%)",
                    opacity: 0.4,
                  }}
                />
              </div>
              <div className="z-10 flex flex-shrink-0 flex-col items-start">
                <a
                  href={GITHUB_PROFILE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-foreground mb-2 h-16 w-16" />
                </a>
                <span className="text-foreground text-xl font-semibold">
                  {GITHUB_PROFILE.name}
                </span>
                <a
                  href={GITHUB_PROFILE.url}
                  target="_blank"
                  className="text-muted-foreground hover:text-foreground mt-1 text-sm underline"
                >
                  {GITHUB_PROFILE.url.replace("https://", "")}
                </a>
              </div>
              <div className="z-10 flex flex-1 flex-col items-start">
                <p className="text-muted-foreground mb-4 text-left">
                  {GITHUB_PROFILE.description}
                </p>
                <div className="flex flex-col gap-4 text-sm md:flex-row md:gap-6">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-foreground font-semibold">
                      {GITHUB_PROFILE.stats.stars}
                    </span>
                    <span className="text-muted-foreground ml-1">Stars</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="text-muted-foreground h-4 w-4" />
                    <span className="text-foreground font-semibold">
                      {GITHUB_PROFILE.stats.forks}
                    </span>
                    <span className="text-muted-foreground ml-1">Forks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="text-muted-foreground h-4 w-4" />
                    <span className="text-foreground font-semibold">
                      {GITHUB_PROFILE.stats.contributors}
                    </span>
                    <span className="text-muted-foreground ml-1">
                      Contributors
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Smaller Social Options */}
          <div className="mt-8 flex justify-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background flex w-24 flex-col items-center gap-2 rounded-xl border p-4 transition-all hover:shadow-md"
              >
                {social.icon}
                <span className="text-muted-foreground text-xs font-medium">
                  {social.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Community5 };
