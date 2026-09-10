const logos = [
  {
    name: "Beebot Neo",
    logo: "/logo-brands/beebot-neo-border.webp",
  },
  {
    name: "Brand Logo 1",
    logo: "/logo-brands/image-removebg-preview.png",
  },


  {
    name: "Llumar",
    logo: "/logo-brands/llumar.svg",
  },
  {
    name: "Suntek",
    logo: "/logo-brands/suntek-logo.svg",
  },
];

const Logo = () => {
  return (
    <section className="py-8">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Our Trusted Products
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
            Kami menggunakan produk terbaik dari brand-brand ternama untuk memastikan kualitas layanan 
          </p>
        </div>
      </div>
      <div className="mx-auto mt-24 grid max-w-5xl grid-cols-2 place-items-center gap-x-4 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {logos.map((logo) => (
          <img
            className="grayscale"
            src={logo.logo}
            key={logo.name}
            alt={logo.name}
            width={144}
            height={80}
          />
        ))}
      </div>
    </section>
  );
};

export { Logo };
