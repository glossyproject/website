import { ArrowUpRight } from "lucide-react";

interface Project {
  year: string;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}

interface Industries3Props {
  labels: string[];
  projects: Project[];
}

const Industries3 = ({
  labels = ["Year", "Industry", "Description"],
  projects = [
    {
      year: "/2024",
      name: "/Consumer Tech",
      description: "Innovative consumer electronics and smart device solutions",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/artistic-portrait-glitch-yqp6z.png",
      imageAlt: "TechFlow automation platform",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2023",
      name: "/Biotech",
      description:
        "Cutting-edge biotechnology research and pharmaceutical development",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg",
      imageAlt: "DataViz Pro analytics dashboard",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2023",
      name: "/Cybersecurity",
      description: "Enterprise-grade security solution for data protection",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/futuristic-device-design-qcufu.png",
      imageAlt: "SecureVault security platform",
      url: "http://shadcnblocks.com/blocks",
    },
    {
      year: "/2022",
      name: "/Healthtech",
      description: "Integrated healthcare management system with telemedicine",
      imageSrc: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/photos/israel-andrade-YI_9SivVt_s-unsplash.jpg",
      imageAlt: "HealthConnect medical platform",
      url: "http://shadcnblocks.com/blocks",
    },
  ],
}: Industries3Props) => {
  return (
    <section className="bg-muted min-h-screen py-16">
      <div className="container mx-auto flex flex-col gap-8 px-8">
        {/* Header Row */}
        <div className="text-muted-foreground grid grid-cols-2 gap-8 font-medium md:grid-cols-3">
          <div className="order-2 pl-10 text-sm md:order-1 lg:pl-10">
            {labels[0]}
          </div>
          <div className="order-1 pl-5 text-sm md:order-2 md:pl-0">
            {labels[1]}
          </div>
          <div className="hidden text-sm md:order-3 lg:block">{labels[2]}</div>
        </div>

        {/* Project Rows */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <a href={project.url} key={index}>
              <div className="group relative mb-2 flex min-h-[100px] flex-col justify-center md:min-h-0 lg:mb-0">
                <div className="z-3 lg:hover:text-secondary relative grid grid-cols-2 gap-8 transition-all duration-300 md:grid-cols-3 lg:hover:rounded-lg lg:hover:font-medium lg:hover:shadow-lg">
                  {/* Year Column */}
                  <div className="order-2 flex items-center md:order-1">
                    <span className="text-secondary pl-10 text-xs font-medium opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                      {project.year}
                    </span>
                  </div>

                  {/* Project Name and Description Column */}
                  <div className="border-muted-foreground/20 order-1 col-span-1 grid grid-cols-2 gap-8 border-b p-5 transition-all duration-300 md:order-2 md:col-span-2 md:p-10 md:pl-0 md:pr-0 lg:group-hover:border-transparent">
                    {/* Project Name */}
                    <div className="flex items-center">
                      <span className="text-secondary lg:text-foreground lg:group-hover:text-secondary ml-0 pl-0 text-xl font-medium transition-all duration-300 md:text-2xl lg:group-hover:pl-2">
                        {project.name}
                      </span>
                    </div>

                    {/* Description and Button */}
                    <div className="hidden items-center justify-between gap-4 lg:flex lg:pr-10">
                      <span className="text-secondary/80 text-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                        {project.description}
                      </span>

                      {/* Action Button */}
                      <button className="bg-primary text-secondary flex translate-x-full items-center justify-center rounded-full p-1 opacity-100 shadow-md transition-all duration-300 ease-out lg:opacity-0 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
                        <ArrowUpRight />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Background Image */}
                <img
                  src={project.imageSrc}
                  alt={project.imageAlt}
                  className="z-1 absolute inset-0 h-full w-full object-cover opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100"
                />

                {/* Overlay */}
                <div className="z-2 absolute inset-0 bg-black/20 opacity-100 transition-all duration-300 lg:opacity-0 lg:group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Industries3 };
