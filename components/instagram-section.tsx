"use client";

import Script from "next/script";
import { useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    tiktok?: {
      embed?: {
        lib?: {
          render: () => void;
        };
      };
    };
  }
}

const instagramPosts = [
  {
    url: "https://www.instagram.com/reel/DaCf5jrvmyn/",
  },
  {
    url: "https://www.instagram.com/reel/Dczv1CsTdo-/",
  },
];

const tiktokPosts = [
  {
    url: "https://www.tiktok.com/@glossyautosampit/video/7656303579967327495",
    videoId: "7656303579967327495",
  },
];
export function mnSocialMediaSection() {
  useEffect(() => {
    window.instgrm?.Embeds.process();
    window.tiktok?.embed?.lib?.render();
  }, []);

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => {
          window.instgrm?.Embeds.process();
        }}
      />
      <Script
        src="https://www.tiktok.com/embed.js"
        strategy="afterInteractive"
        onLoad={() => window.tiktok?.embed?.lib?.render()}
      />

      <section
        aria-labelledby="social-media-title"
        className="overflow-hidden py-8 md:py-12"
      >
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <h2 id="social-media-title">IKUTI GLOSSY AUTO</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">
              Lihat proses pengerjaan, hasil terbaru, dan aktivitas Glossy Auto
              melalui media sosial kami.
            </p>
          </header>

          <div className="mt-10 md:mt-14">
            <div className="mb-5 text-center md:mb-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Instagram
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Update terbaru dari Glossy Auto melalui Instagram.
              </p>
            </div>

            <Carousel
              opts={{ align: "start", loop: true }}
              className="mx-auto w-full max-w-7xl"
            >
              <CarouselContent className="-ml-5">
                {instagramPosts.map((post) => (
                  <CarouselItem
                    key={post.url}
                    className="flex basis-[88%] justify-center pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="min-w-0 w-full max-w-[540px] overflow-hidden rounded-xl">
                      <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={post.url}
                        data-instgrm-version="14"
                        style={{
                          background: "#fff",
                          border: 0,
                          margin: 0,
                          minWidth: 0,
                          width: "100%",
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Postingan Instagram sebelumnya"
                className="-left-3 z-10 md:-left-4"
              />
              <CarouselNext
                aria-label="Postingan Instagram berikutnya"
                className="-right-3 z-10 md:-right-4"
              />
            </Carousel>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.instagram.com/glossyauto/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b pb-1 text-sm font-medium"
              >
                Lihat Instagram Kami
              </a>
            </div>
          </div>

          <div className="mt-16 md:mt-24">
            <div className="mb-5 text-center md:mb-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                TikTok
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Ikuti proses pengerjaan dan konten terbaru Glossy Auto di
                TikTok.
              </p>
            </div>

            <Carousel
              opts={{ align: "start", loop: true }}
              className="mx-auto w-full max-w-7xl"
            >
              <CarouselContent className="-ml-5">
                {tiktokPosts.map((post) => (
                  <CarouselItem
                    key={post.videoId}
                    className="flex basis-[88%] justify-center pl-5 md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="min-w-0 w-full max-w-[540px] overflow-hidden rounded-xl">
                      <blockquote
                        className="tiktok-embed"
                        cite={post.url}
                        data-video-id={post.videoId}
                      >
                        <section />
                      </blockquote>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="Video TikTok sebelumnya"
                className="-left-3 z-10 md:-left-4"
              />
              <CarouselNext
                aria-label="Video TikTok berikutnya"
                className="-right-3 z-10 md:-right-4"
              />
            </Carousel>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.tiktok.com/@glossyautosampit"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b pb-1 text-sm font-medium"
              >
                Lihat TikTok Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}