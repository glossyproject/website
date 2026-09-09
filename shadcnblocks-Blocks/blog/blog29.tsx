import { ArrowUpRightIcon } from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Blog29 = () => {
  const blogPosts = [
    {
      href: "#",
      date: "March 15, 2024",
      title: "Building a Design System with Shadcn UI",
      content:
        "Learn how to create a scalable design system using Shadcn UI components. We'll explore component composition, theming, and best practices for maintaining consistency across your application. Discover how to leverage the power of Radix UI primitives while keeping your codebase clean and maintainable.",
      tags: [
        "Design Systems",
        "Shadcn UI",
        "React",
        "Tailwind CSS",
        "UI Development",
      ],
    },
    {
      href: "#",
      date: "March 10, 2024",
      title: "The Rise of Headless UI Components",
      content:
        "Explore the benefits of headless UI components and how they're revolutionizing web development. We'll compare popular headless libraries, discuss accessibility considerations, and show how to build flexible, unstyled components that can be customized to match any design system.",
      tags: [
        "Headless UI",
        "Accessibility",
        "Component Architecture",
        "React",
        "Web Development",
      ],
    },
    {
      href: "#",
      date: "March 5, 2024",
      title: "Optimizing Component Libraries for Performance",
      content:
        "Discover techniques for building performant component libraries that scale. From code splitting and tree shaking to optimizing bundle size and implementing lazy loading, learn how to ensure your UI components deliver a smooth user experience without compromising on functionality.",
      tags: [
        "Performance",
        "Bundle Size",
        "Code Splitting",
        "React",
        "Web Performance",
      ],
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container">
        <h1 className="text-foreground mb-10 px-6 text-left text-4xl font-bold tracking-tighter sm:text-6xl">
          Blog
        </h1>

        <section className="md:mt-18 mt-10 space-y-6">
          {blogPosts.map((post, index) => (
            <React.Fragment key={index}>
              <Card className="border-none shadow-none">
                <CardContent className="">
                  <div className="relative w-full">
                    <p className="text-muted-foreground text-sm tracking-tight">
                      {post.date}
                    </p>

                    <h2 className="text-foreground mt-2 text-lg font-medium tracking-tight md:text-2xl">
                      {post.title}
                    </h2>

                    <p className="md:text-md text-muted-foreground mt-4 text-sm md:pr-24 xl:pr-32">
                      {post.content}
                    </p>

                    <div className="w-9/10 mt-4 flex flex-wrap items-center gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="h-6 rounded-md"
                        >
                          <span className="text-md text-muted-foreground font-medium">
                            {tag}
                          </span>
                        </Badge>
                      ))}
                    </div>

                    <a href={post.href}>
                      <Button
                        variant="secondary"
                        className="absolute -bottom-1 -right-3 flex h-10 w-10 items-center justify-center rounded-full transition-all ease-in-out hover:rotate-45 md:bottom-14"
                      >
                        <ArrowUpRightIcon />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {index < blogPosts.length - 1 && (
                <Separator className="h-px w-full" />
              )}
            </React.Fragment>
          ))}
        </section>
      </div>
    </section>
  );
};

export { Blog29 };
