import {
  FaDiscord,
  FaGithub,
  FaLinkedin,
  FaSlack,
  FaXTwitter,
} from "react-icons/fa6";
import { SiBluesky } from "react-icons/si";

import { Card } from "@/components/ui/card";

const iconWrapper =
  "mb-4 flex items-center justify-center h-16 w-16 rounded-full border-2 border-dotted border-muted-foreground/40 transition-colors duration-200";

const Community6 = () => {
  const communityCards = [
    {
      icon: <FaXTwitter className="text-foreground/80 h-8 w-8" />,
      title: "Twitter",
      description: "Follow us for updates, insights, and news",
      link: "#",
    },
    {
      icon: <FaGithub className="text-foreground/80 h-8 w-8" />,
      title: "GitHub",
      description: "Contribute, report issues, and star the project",
      link: "#",
    },
    {
      icon: <FaDiscord className="text-foreground/80 h-8 w-8" />,
      title: "Discord",
      description: "Chat, share ideas, and get support from the community",
      link: "#",
    },
    {
      icon: <FaLinkedin className="text-foreground/80 h-8 w-8" />,
      title: "LinkedIn",
      description: "Connect with us professionally and grow your network",
      link: "#",
    },
    {
      icon: <FaSlack className="text-foreground/80 h-8 w-8" />,
      title: "Slack",
      description: "Join our Slack for real-time collaboration",
      link: "#",
    },
    {
      icon: <SiBluesky className="text-foreground/80 h-8 w-8" />,
      title: "Bluesky",
      description: "Connect with us on Bluesky for open social networking",
      link: "#",
    },
  ];

  return (
    <section className="bg-background text-foreground relative overflow-hidden rounded-3xl py-32">
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <h2 className="mb-4 text-center text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">
          Join Our Vibrant Network
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl text-center text-lg font-normal md:text-xl">
          Connect, collaborate, and create with passionate developers and
          creators worldwide.
        </p>
        <div className="mb-10 grid w-full grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6">
          {communityCards.map((card) => (
            <Card
              key={card.title}
              className="bg-background group flex flex-1 flex-col items-center rounded-2xl p-8 transition-shadow duration-200 hover:shadow-lg"
            >
              <a
                href={card.link}
                target="_blank"
                className="flex flex-col items-center"
              >
                <span className={`${iconWrapper} group-hover:bg-muted`}>
                  {card.icon}
                </span>
                <h5 className="mb-1 text-lg font-semibold">{card.title}</h5>
                <p className="text-muted-foreground mb-2 text-center text-base">
                  {card.description}
                </p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Community6 };
