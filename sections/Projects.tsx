'use client';

import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/lib/animations';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

function ProjectCard({ project }: { project: Project }) {
  return (
    <FadeInItem>
      <article className="card group hover:shadow-md dark:hover:shadow-gray-900/30 transition-shadow duration-300">
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-background-secondary dark:bg-background-dark-secondary">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-heading text-xl font-semibold text-text-primary dark:text-text-dark-primary">
              {project.title}
            </h3>
            <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded whitespace-nowrap">
              {project.category}
            </span>
          </div>

          <p className="text-text-secondary dark:text-text-dark-secondary text-sm line-clamp-2">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-xs text-text-secondary dark:text-text-dark-secondary bg-background-secondary dark:bg-background-dark-secondary px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-text-secondary dark:text-text-dark-secondary hover:text-accent transition-colors"
              >
                <Github size={16} />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-text-secondary dark:text-text-dark-secondary hover:text-accent transition-colors"
              >
                <ExternalLink size={16} />
                Demo
              </a>
            )}
          </div>
        </div>
      </article>
    </FadeInItem>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <FadeIn>
          <h2 className="heading-lg mb-4 text-center">Featured Projects</h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-body text-center max-w-2xl mx-auto mb-12">
            A collection of projects showcasing my work in data analytics,
            machine learning, and AI applications.
          </p>
        </FadeIn>

        <FadeInStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </FadeInStagger>
      </div>
    </section>
  );
}
