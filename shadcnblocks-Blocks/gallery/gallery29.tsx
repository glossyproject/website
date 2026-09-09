import { Marquee } from "@/components/magicui/marquee";

const images = [
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/carles-rabada-f7UprkNqi08-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-3QqzCTIfUJI-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-hqnUYXsN5oY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/ivan-bandura-Kj2tYAl4HZg-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/jeremy-bishop-iEjCQtcsVPY-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/john-murphey-ZWUWSEY6OGk-unsplash.jpg",
  "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/kevin-charit-1fL2Q1JcbNc-unsplash.jpg",
];

const Gallery29 = () => {
  return (
    <section className="bg-background dark relative overflow-hidden py-32">
      <div>
        <div className="container mb-12 flex flex-col gap-4 text-center">
          <h2 className="font-instrumentSerif text-primary/80 text-5xl font-medium">
            Gallery
          </h2>
          <p className="text-muted-foreground/80 text-lg">
            A collection of images from our travels.
          </p>
        </div>
        <div className="relative">
          <Marquee repeat={2} className="p-0 opacity-40 [--duration:60s]">
            {images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                alt="gallery"
                className="aspect-[2/3] max-w-96 rounded-lg object-cover"
              />
            ))}
          </Marquee>
          <a
            href="#"
            className="hover:scale-104 group container absolute inset-0 z-10 mx-auto flex w-fit scale-105 items-center justify-center overflow-hidden rounded-lg transition-transform duration-500"
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1637217644936-6b505db635f3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-[2/3] w-full max-w-96 object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 backdrop-blur-[1px] transition-opacity duration-500 group-hover:opacity-100">
                <p className="font-instrumentSerif -translate-y-6 border-b border-white/50 bg-gradient-to-b from-white to-white/80 bg-clip-text text-xl font-medium text-transparent transition-transform duration-500 group-hover:translate-y-0">
                  Explore our world
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 11.3985%, rgb(0, 0, 0) 25.5578%, rgba(0, 0, 0, 0.55) 41.6966%, rgba(0, 0, 0, 0.13) 67.1171%, rgb(0, 0, 0) 78.2306%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 67%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 9.81489%, rgb(0, 0, 0) 20.0362%, rgba(0, 0, 0, 0.55) 28.5878%, rgba(0, 0, 0, 0.424) 40.0901%, rgb(0, 0, 0) 48.6486%, rgba(0, 0, 0, 0.267) 54.5045%, rgba(0, 0, 0, 0.13) 78.579%, rgb(0, 0, 0) 88.554%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
        <div
          className="skew-[-45deg] pointer-events-none absolute -top-1/2 bottom-0 right-0 hidden w-1/2 min-w-[500px] opacity-5 dark:block"
          style={{
            background:
              "linear-gradient(rgb(255, 255, 255) 0%, rgb(255, 255, 255) 83.9344%, rgba(255, 255, 255, 0) 100%)",
            mask: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 17.6591%, rgba(0, 0, 0, 0.55) 26.6417%, rgb(0, 0, 0) 35.2302%, rgba(0, 0, 0, 0) 47.6985%, rgba(0, 0, 0, 0.13) 69.1776%, rgb(0, 0, 0) 79.1456%, rgba(0, 0, 0, 0) 97.2973%)",
          }}
        />
      </div>
    </section>
  );
};

export { Gallery29 };
