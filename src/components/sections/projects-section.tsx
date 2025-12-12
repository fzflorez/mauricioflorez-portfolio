"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

const projects = [
  {
    id: "proj1",
    title: "Zenith Tech",
    description:
      "Premium technology online store, with competitive prices and exclusive offers.",
    liveUrl: "https://zenith-tech.netlify.app/",
    image: "zenith-tech",
  },
  {
    id: "proj2",
    title: "Nutrifit 360",
    description: "Track the calories of your meals and workouts.",
    liveUrl: "https://mf-nutri-fit-360.netlify.app/",
    image: "nutrifit-360",
  },
  {
    id: "proj3",
    title: "Budgenix",
    description: "Set your budget and track your expenses easily.",
    liveUrl: "https://mf-budgenix.netlify.app/",
    image: "budgenix",
  },
  {
    id: "proj4",
    title: "BurgerClick",
    description: "Manage burger orders quickly and easily.",
    liveUrl: "https://mf-burger-click.netlify.app/",
    image: "burger-click",
  },
  {
    id: "proj5",
    title: "ClimaApp",
    description: "Check real-time weather anywhere in the world.",
    liveUrl: "https://mf-clima-app.netlify.app/",
    image: "clima-app",
  },
  {
    id: "proj6",
    title: "Loan Calculator",
    description: "Instantly simulate and calculate your loan payments.",
    liveUrl: "https://mf-loan-calculator.netlify.app/",
    image: "loan-calculator",
  },
  {
    id: "proj7",
    title: "User Landing",
    description: "View a user list and check their details easily.",
    liveUrl: "https://user-landing.netlify.app/",
    image: "user-landing",
  },
];

export function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="space-y-4">
      <div className="flex items-center gap-2">
        <p className="text-primary">
          <span className="text-accent">~/projects</span>$
        </p>
        <p className="text-foreground">./run_showcase.sh</p>
      </div>
      <div className="grid gap-8 pt-2 md:grid-cols-2">
        {visibleProjects.map((project) => {
          return (
            <div
              key={project.id}
              className="bg-card border-border group hover:border-primary/80 overflow-hidden rounded-lg border transition-all duration-300"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={`/images/${project.image}.webp`}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-foreground text-xl font-bold">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="pt-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground px-0"
                  >
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {projects.length > 2 && (
        <div className="pt-6 text-center">
          <Button
            onClick={() => setShowAll(!showAll)}
            variant="secondary"
            className="cursor-pointer"
          >
            {showAll ? "View less" : "View more"}
          </Button>
        </div>
      )}
    </section>
  );
}
