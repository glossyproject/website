import React from "react";

const Projects13 = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "Designed and developed a fully scalable e-commerce platform from scratch, focusing on simplicity and performance, which transformed workflows for over 10,000 users across multiple industries.",
      launchDate: "04.17.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img1.png",
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description:
        "Built a secure and intuitive mobile banking application with real-time transaction processing, biometric authentication, and seamless user experience for financial institutions.",
      launchDate: "03.15.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img2.png",
    },
    {
      id: 3,
      title: "AI Content Generator",
      description:
        "Developed an AI-powered content generation platform that helps marketers create engaging content, with advanced NLP capabilities and customizable templates.",
      launchDate: "02.28.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img3.png",
    },
    {
      id: 4,
      title: "Project Management Tool",
      description:
        "Created a comprehensive project management solution with real-time collaboration, task tracking, and analytics dashboard for remote teams and enterprises.",
      launchDate: "01.20.2025",
      image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri4/img10.png",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <ul className="relative w-full">
          <li className="text-foreground/40 pt-15 hidden justify-between gap-10 border-b pb-2 text-sm uppercase tracking-tight lg:flex lg:text-base">
            <p className="w-1/4">PROJECTS</p>
            <p className="w-2/4">DESCRIPTION</p>
            <p className="w-1/4 text-right">GALLERY</p>
          </li>
          {projects.map((project, index) => (
            <li
              key={project.id}
              className="lg:py-15 flex w-full flex-col justify-between gap-10 border-b py-10 lg:flex-row"
            >
              <div className="flex gap-4 text-xl font-medium uppercase tracking-tighter lg:w-1/4">
                <p className="">0{index + 1}</p>
                <div className="flex flex-col gap-1">
                  <p>{project.title}</p>
                  <p>({project.launchDate})</p>
                </div>
              </div>
              <div className="text-2xl lg:w-2/4 lg:text-3xl">
                {project.description}
              </div>
              <div className="text-foreground/50 lg:h-30 w-full text-right text-sm uppercase lg:w-1/4 lg:pl-20 lg:text-base">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { Projects13 };
