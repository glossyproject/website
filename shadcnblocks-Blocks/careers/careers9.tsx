import { ArrowRight } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const jobs = [
  {
    department: "Engineering",
    role: "Senior Full Stack Developer",
    location: "Remote",
    link: "#",
  },
  {
    department: "Product",
    role: "Product Manager",
    location: "Hybrid",
    link: "#",
  },
  {
    department: "Design",
    role: "UI/UX Designer",
    location: "Remote",
    link: "#",
  },
  {
    department: "Data",
    role: "Data Scientist",
    location: "On-site",
    link: "#",
  },
  {
    department: "Marketing",
    role: "Growth Marketing Specialist",
    location: "Remote",
    link: "#",
  },
];

const Careers9 = () => {
  return (
    <section className="from-background to-muted/20 bg-gradient-to-b py-24">
      <div className="container max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">Current Openings</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
            Join our team and help shape the future. We're looking for
            passionate people who are excited to tackle challenging problems and
            build amazing products.
          </p>
        </div>
        <div className="hidden grid-cols-1 items-center gap-1.5 py-6 text-xs uppercase sm:grid sm:grid-cols-4 sm:gap-10">
          <span className="text-muted-foreground">DEPARTMENT</span>
          <span className="text-muted-foreground col-span-2">ROLE</span>
          <span className="text-muted-foreground uppercase">LOCATION</span>
        </div>
        <Separator />
        {jobs.map((job, idx) => (
          <React.Fragment key={idx}>
            <a
              href={job.link}
              className="group relative grid grid-cols-1 items-center gap-1.5 py-6 sm:grid-cols-4 sm:gap-10"
            >
              <Badge variant="outline">{job.department}</Badge>
              <span className="col-span-2 text-lg font-semibold">
                {job.role}
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-muted-foreground">{job.location}</span>
                <ArrowRight className="text-muted-foreground group-hover:text-primary size-4.5 absolute right-6 top-6 transition-all duration-300 group-hover:translate-x-1 sm:static" />
              </div>
            </a>
            <Separator />
          </React.Fragment>
        ))}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Don't see a role that fits? We're always looking for great talent.
          </p>
          <a
            href="#contact"
            className="text-primary hover:text-primary/80 inline-flex items-center gap-2 font-medium transition-colors"
          >
            Send us your resume
            <ArrowRight className="mt-0.5 size-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { Careers9 };
