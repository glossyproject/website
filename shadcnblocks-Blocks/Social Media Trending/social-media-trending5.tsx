"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS = {
  instagram: {
    title: "Instagram",
    light:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
    dark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/instagram-icon.svg",
  },
  twitter: {
    title: "Twitter",
    light:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
    dark: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/twitter-icon.svg",
  },
} as const;

type SocialMediaIcon = {
  title: string;
  light: string;
  dark: string;
};

type ImagePost = {
  type: "image";
  image: {
    src: string;
    alt: string;
  };
  productLink: string;
  socialMediaIcon?: SocialMediaIcon;
};

type VideoPost = {
  type: "video";
  video: string;
  productLink: string;
  socialMediaIcon?: SocialMediaIcon;
};

type SocialMediaPost = ImagePost | VideoPost;

type SocialProfile = {
  platform: string;
  image: string;
  username: string;
  followers: string;
  href: string;
};

type FeaturedSection = {
  title: string;
  profiles: SocialProfile[];
  cta: {
    label: string;
    href: string;
  };
};

interface SocialMediaTrending5Props {
  className?: string;
  posts?: SocialMediaPost[];
  featuredSection?: FeaturedSection;
}

const SECTION_DATA = {
  featuredSection: {
    title: "Connect With Us Online",

    profiles: [
      {
        platform: "Instagram",
        image: "/icons/instagram.svg",
        username: "@glossyauto",
        followers: "28k Followers",
        href: "https://www.instagram.com/glossyauto/",
      },
      {
        platform: "TikTok",
        image: "/icons/tiktok.svg",
        username: "@glossyauto",
        followers: "15k Followers",
        href: "https://www.tiktok.com/@glossyauto",
      },
      {
        platform: "Facebook",
        image: "/icons/facebook.svg",
        username: "Glossy Auto",
        followers: "10k Followers",
        href: "https://www.facebook.com/glossyauto",
      },
    ],

    cta: {
      label: "Ikuti Kami",
      href: "https://www.instagram.com/glossyauto/",
    },
  },

  posts: [
    {
      type: "image" as const,
      image: {
        src: "https://instagram.fbdj5-1.fna.fbcdn.net/v/t51.82787-15/751898074_18105354716329370_754168632322017915_n.jpg?stp=dst-jpg_e35_p640x640_sh2.08_tt6&_nc_cat=111&ig_cache_key=Mzk0NTE1MzA0MjY1ODk3MzE1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ysetwsWOZCEQ7kNvwG22b-j&_nc_oc=Adoj1zbLBpXegtIofi11wufgaX41uOTKD7w87K4urDQbZzIUDZxYkajTJteWwcXe1RerpvqFB7Jrsbt9bC2r-8SE&_nc_zt=23&_nc_ht=instagram.fbdj5-1.fna&_nc_gid=oq_9p94yPeJ5EATXrV5XPg&_nc_ss=7b2a8&oh=00_AQJ9R44Ju9wL3Klx19ra2eCqCYsCpTgsIB3GegJ6P8rjDg&oe=6AA8320D",
        alt: "Glossy Auto",
      },
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.instagram,
    },
    {
      type: "video" as const,
      video:
        "https://res.cloudinary.com/hnomzl4p/video/upload/v1789022722/igexport-DbQ_hiMPII1.mp4",
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.instagram,
    },
    {
      type: "video" as const,
      video: {
        src: "https://res.cloudinary.com/hnomzl4p/video/upload/v1789027031/snaptik_7640018741652196616_v3.mp4",
        alt: "Glossy Auto",
      },
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.twitter,
    },
    {
      type: "image" as const,
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Golden-Hair-Clip-Close-Up-2.png",
        alt: "Glossy Auto",
      },
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.instagram,
    },
    {
      type: "image" as const,
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Jewelry-Close-Up-2.png",
        alt: "Glossy Auto",
      },
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.twitter,
    },
    {
      type: "image" as const,
      image: {
        src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/ecommerce/accessories/Elegant-Pearl-Bracelet-on-Wrist-2.png",
        alt: "Glossy Auto",
      },
      productLink: "#",
      socialMediaIcon: SOCIAL_ICONS.instagram,
    },
  ] satisfies SocialMediaPost[],
};

const SocialIconOverlay = ({
  icon,
  showOnHover = true,
}: {
  icon: SocialMediaIcon;
  showOnHover?: boolean;
}) => (
  <div
    className={cn(
      "pointer-events-none absolute right-3 top-3 flex size-10 items-center justify-center rounded-full bg-background/90 shadow-sm transition-opacity duration-200",
      showOnHover ? "opacity-0 group-hover:opacity-100" : "invisible",
    )}
  >
    <img
      className="size-5 dark:hidden"
      alt={icon.title}
      src={icon.light}
    />

    <img
      className="hidden size-5 dark:block"
      alt={icon.title}
      src={icon.dark}
    />
  </div>
);

const VideoCard = ({
  video,
  productLink,
  socialMediaIcon,
}: {
  video: string;
  productLink: string;
  socialMediaIcon?: SocialMediaIcon;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <a
      href={productLink}
      className="group relative block aspect-square size-full overflow-hidden rounded-xl bg-muted"
    >
      <video
        ref={videoRef}
        src={video}
        muted
        playsInline
        preload="metadata"
        className="block size-full object-cover object-center"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onMouseEnter={() => {
          videoRef.current?.play();
        }}
        onMouseLeave={() => {
          if (!videoRef.current) return;

          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
      />

      {!isPlaying && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="rounded-full bg-background/80 p-4 transition-all duration-300 group-hover:scale-110 group-hover:bg-background/90">
            <Play className="size-8 fill-foreground text-foreground" />
          </div>
        </div>
      )}

      {socialMediaIcon && (
        <SocialIconOverlay
          icon={socialMediaIcon}
          showOnHover={!isPlaying}
        />
      )}
    </a>
  );
};

const SocialMediaTrending5 = ({
  className,
  posts = SECTION_DATA.posts,
  featuredSection = SECTION_DATA.featuredSection,
}: SocialMediaTrending5Props) => {
  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 [&>li]:overflow-hidden [&>li]:rounded-xl [&>li]:bg-accent">

          {/* FEATURED SOCIAL CARD */}
          <li className="col-span-2">
            <div className="flex h-full flex-col gap-8 p-6 sm:flex-row sm:items-center sm:justify-between">

              {/* TITLE */}
              <div className="flex-1">
                <h3 className="text-2xl leading-tight tracking-tight sm:max-w-60">
                  {featuredSection.title}
                </h3>
              </div>

              {/* SOCIAL PROFILES */}
              <div className="w-full space-y-4 sm:w-auto sm:min-w-[280px]">
                <div className="space-y-2">
                  {featuredSection.profiles.map((profile) => (
                    <a
                      key={profile.platform}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/profile flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-background/60"
                    >
                      <Avatar className="size-10 border">
                        <AvatarImage
                          src={profile.image}
                          alt={profile.platform}
                        />

                        <AvatarFallback>
                          {profile.platform.slice(0, 2).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">
                          {profile.platform}
                        </p>

                        <p className="truncate text-xs text-muted-foreground">
                          {profile.username}
                          <span className="mx-1">•</span>
                          {profile.followers}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full">
                  <a
                    href={featuredSection.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featuredSection.cta.label}
                  </a>
                </Button>
              </div>
            </div>
          </li>

          {/* SOCIAL POSTS */}
          {posts.map((post, index) => (
            <li key={index} className="aspect-square">
              {post.type === "video" ? (
                <VideoCard
                  video={post.video}
                  productLink={post.productLink}
                  socialMediaIcon={post.socialMediaIcon}
                />
              ) : (
                <a
                  href={post.productLink}
                  className="group relative block size-full overflow-hidden"
                >
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="block size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />

                  {post.socialMediaIcon && (
                    <SocialIconOverlay
                      icon={post.socialMediaIcon}
                    />
                  )}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { SocialMediaTrending5 };