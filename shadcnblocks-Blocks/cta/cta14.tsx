import { Button } from "@/components/ui/button";

const Cta14 = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0)),url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/pawel-czerwinski-O4fAgtXLRwI-unsplash.jpg')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center">
          <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Hubungi Kami
          </h1>
           <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
            Hubungi kami untuk konsultasi gratis mengenai perawatan mobil Anda
          </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg" variant="default">
                Get Started
              </Button>
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta14 };
