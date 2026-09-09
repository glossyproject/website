import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Testimonial15 = () => {
  return (
    <section className="bg-muted dark:bg-background mb-32 pt-32">
      <div className="container">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-32">
          <div className="text-center lg:text-left">
            <h1 className="mb-4 text-balance text-3xl font-bold lg:text-4xl">
              Explore the Innovators Community Today
            </h1>
            <p className="text-muted-foreground mb-8">
              Join a global network of thought leaders, product developers, and
              innovators to exchange ideas, learn from each other, and
              participate in unique events and discussions.
            </p>
            <Button className="mb-10 lg:mb-20">Become a Member</Button>
            <p className="text-muted-foreground mb-7 text-xs uppercase">
              Used by leading companies
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10 lg:justify-start">
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg"
                alt="logo"
                className="h-5 dark:invert"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg"
                alt="logo"
                className="h-6 dark:hidden"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark-dark.svg"
                alt="logo"
                className="hidden h-6 dark:block"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-light.svg"
                alt="logo"
                className="h-4 dark:hidden"
              />
              <img
                src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark-dark.svg"
                alt="logo"
                className="hidden h-4 dark:block"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="bg-card flex gap-5 rounded-xl p-6">
              <Avatar className="ring-input size-9 rounded-full ring-1">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Emily Johnson</p>
                <p className="text-muted-foreground text-xs">
                  Joining the Innovators Community has completely transformed my
                  approach to product development. The discussions are
                  insightful, and the community events have been fantastic for
                  networking with industry peers.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-xl border p-6">
              <Avatar className="ring-input size-9 rounded-full ring-1">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Alex Smith</p>
                <p className="text-muted-foreground text-xs">
                  Being part of this community has helped me stay up-to-date
                  with the latest trends in innovation. The exclusive workshops
                  are incredibly valuable for anyone looking to expand their
                  knowledge.
                </p>
              </div>
            </div>
            <div className="bg-card flex gap-5 rounded-xl p-6">
              <Avatar className="ring-input size-9 rounded-full ring-1">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Sarah Parker</p>
                <p className="text-muted-foreground text-xs">
                  The Innovators Community has been instrumental in connecting
                  me with like-minded professionals. I’ve gained valuable
                  insights and developed partnerships that have benefited my
                  career.
                </p>
              </div>
            </div>
            <div className="flex gap-5 rounded-t-xl border-x border-t px-5 pb-1 pt-6">
              <Avatar className="ring-input size-9 rounded-full ring-1">
                <AvatarImage
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-4.webp"
                  alt="placeholder"
                />
              </Avatar>
              <div>
                <p className="mb-1 text-sm font-medium">Michael Lee</p>
                <p className="text-muted-foreground text-xs">
                  I’ve attended several virtual events through the Innovators
                  Community, and they’ve been incredibly helpful. The
                  opportunity to learn from leaders in the field has
                  significantly impacted my professional growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Testimonial15 };
