"use client";

const items = [
  {
    title: "Performance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo. Voluptatum amet architecto suscipit pariatur eligendi repellendus mollitia dolore unde sint?",
  },
  {
    title: "Quality",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo. Voluptatum amet architecto suscipit pariatur eligendi repellendus mollitia dolore unde sint?",
  },
  {
    title: "Accessibility",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo. Voluptatum amet architecto suscipit pariatur eligendi repellendus mollitia dolore unde sint?",
  },
  {
    title: "Integrations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi necessitatibus, culpa at vitae molestias tenetur explicabo. Voluptatum amet architecto suscipit pariatur eligendi repellendus mollitia dolore unde sint?",
  },
];

const Feature123 = () => {
  return (
    <section className="m-x-auto container flex flex-col gap-20 py-32 lg:flex-row">
      <div className="w-full max-w-[400px]">
        <span className="text-muted-foreground text-sm uppercase">
          Build with blocks
        </span>
        <h2 className="mb-8 mt-4 text-3xl font-extrabold">
          Built with the latest technology stack
        </h2>
        <p className="text-muted-foreground text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt,
          accusantium quam.
        </p>
      </div>
      <div className="flex flex-col gap-14 lg:gap-20">
        {items.map((item) => (
          <div className="relative pl-4" key={item.title}>
            <div className="bg-linear-to-b absolute left-0 top-0 h-full w-1 from-blue-500 to-purple-500" />
            <p className="mb-1 text-xl font-medium">{item.title}</p>
            <p className="text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Feature123 };
