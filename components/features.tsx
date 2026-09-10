const features = [
  {
    id: "feature-1",
    title: "Repair & Restorasi",
    description: "Perbaiki kerusakan dan pulihkan kondisi mobil agar kembali nyaman dan tampil prima.",
    image: "/features-img/repair.png",
  },
  {
    id: "feature-2",
    title: "Nano Coating",
    description: "Bantu lindungi cat, tingkatkan kilau, dan mudahkan perawatan mobil sehari-hari.",
    image: "/features-img/nano-coating.png",
  },
  {
    id: "feature-3",
    title: "Repaint & Pengecatan",
    description: "Segarkan warna dan rapikan tampilan cat, dari satu panel hingga seluruh bodi.",
    image: "/features-img/repaint.png",
  },
  {
    id: "feature-4",
    title: "Engine Detailing",
    description: "Bersihkan minyak, debu, dan kotoran di ruang mesin hingga bagian yang sulit dijangkau.",
    image: "/features-img/engine-detailing.png",
  },
  {
    id: "feature-5",
    title: "Interior Detailing",
    description: "Angkat noda dan kotoran pada jok, karpet, serta dasbor untuk kabin yang lebih nyaman.",
    image: "/features-img/interior-detailing.png",
  },
  {
    id: "feature-6",
    title: "Exterior Detailing",
    description: "Bersihkan permukaan bodi, kaca, dan velg secara menyeluruh agar mobil kembali berkilau.",
    image: "/features-img/exterior-detailing.png",
  },
];

const Features = () => {
  return (
    <section className="py-8">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h1 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Solusi Lengkap untuk Mobil Anda
          </h1>
          <p className="mx-auto max-w-3xl text-balance text-xl font-medium">
            Dari perbaikan hingga perawatan tampilan, temukan layanan yang sesuai dengan kebutuhan mobil Anda.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="border-border bg-accent rounded-lg border p-6 md:p-8"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="aspect-16/9 mb-6 w-full rounded-md object-cover md:mb-8"
              />
              <div className="flex flex-col">
                <p className="mb-2 text-sm font-semibold md:text-base">
                  {feature.title}
                </p>
                <p className="text-muted-foreground text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
