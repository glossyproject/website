import { Instagram, Linkedin, Twitter, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  social: {
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

interface Team15Props {
  label: string;
  title1: string;
  title2: string;
  subtitle: string;
  members: TeamMember[];
}

const Team15 = ({
  label = "MEET OUR CREATORS",
  title1 = "Building the Future",
  title2 = "Together",
  subtitle = "Our diverse team of innovators, designers, and engineers work together to create exceptional digital experiences that make a difference.",
  members = [
    {
      id: "sophia-chen",
      name: "Sophia Chen",
      role: "Creative Director",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar1.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "marcus-rodriguez",
      name: "Marcus Rodriguez",
      role: "Lead Developer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar2.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "elena-petrov",
      name: "Elena Petrov",
      role: "UX Designer",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar3.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "david-kim",
      name: "David Kim",
      role: "Product Manager",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar4.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "amara-singh",
      name: "Amara Singh",
      role: "Marketing Lead",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar5.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      id: "alex-thompson",
      name: "Alex Thompson",
      role: "Data Scientist",
      avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar/avatar6.webp",
      social: {
        twitter: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
  ],
}: Team15Props) => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 text-center">
          {/* Label with icon */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <Users className="text-foreground h-4 w-4" />
            <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider">
              {label}
            </p>
          </div>

          {/* Main Title */}
          <h2 className="mb-4 text-4xl md:text-5xl lg:text-6xl">
            <span className="text-foreground font-semibold">{title1}</span>{" "}
            <span className="text-muted-foreground font-medium italic">
              {title2}
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-muted-foreground mx-auto max-w-2xl">{subtitle}</p>
        </div>

        {/* Team Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card
              key={member.id}
              className="bg-card/50 border-border/50 p-6 backdrop-blur-sm"
            >
              <div className="grid grid-cols-2 items-start gap-4">
                {/* Content */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <h3 className="text-foreground font-medium">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Media Buttons */}
                  <div className="flex gap-2">
                    {member.social.twitter && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/50 border-border/50 h-8 w-8 rounded-md p-0 transition-all duration-200"
                      >
                        <Twitter className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.instagram && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/50 border-border/50 h-8 w-8 rounded-md p-0 transition-all duration-200"
                      >
                        <Instagram className="h-3 w-3" />
                      </Button>
                    )}
                    {member.social.linkedin && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/50 border-border/50 h-8 w-8 rounded-md p-0 transition-all duration-200"
                      >
                        <Linkedin className="h-3 w-3" />
                      </Button>
                    )}
                  </div>
                </div>

                {/* Avatar */}
                <div className="">
                  <div className="h-full">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Team15 };
