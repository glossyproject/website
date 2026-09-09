import Image from "next/image";

const Hero127 = () => {
  return (
    <section className="font-dm_sans py-12 md:py-20">
      <div className="container max-w-[56.25rem] xl:max-w-[90rem]">
        <div className="flex flex-col justify-between gap-12 xl:gap-10">
          <div className="flex w-full flex-col gap-12">
            <h1 className="mb-[clamp(1.5rem,5vw,6rem)] w-full max-w-full break-words font-['Anton'] text-[clamp(2.7rem,5vw,8.5rem)] font-black uppercase leading-[0.86] tracking-[-0.04em] text-[#07141c] md:whitespace-nowrap [-webkit-text-stroke:1.5px_currentColor] [transform:scaleY(1.28)] [transform-origin:top_left]">
              <span className="block md:inline">BUKAN SEKEDAR SALON</span>{" "}
              <br></br>
              <span className="block md:inline">MOBIL BIASA</span>
            </h1>
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-lg md:aspect-[16/7]">
              <Image
                src="/herokontol.webp"
                alt="Mobil hitam di dalam bengkel perawatan"
                fill
                sizes="(min-width: 1280px) 90vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero127 };
