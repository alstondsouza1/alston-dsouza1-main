"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layout, GitHub } from "react-feather";

const projects = [
  {
    title: "Running Start Support Portal",
    description:
      "A full-stack student support platform for Green River College Running Start students. It includes searchable FAQs, category navigation, admin content management, JWT authentication, and MySQL-backed data storage.",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/alstondsouza1/Running-start-digital-support",
    project_site: "https://running-start-portal.vercel.app/",
  },
  {
    title: "Salamander Tracker",
    description:
      "A full-stack ecological video processing pipeline for frame-level analysis and centroid tracking. The system connects a React frontend, Node.js backend, Java video processor, and Docker-based workflow.",
    tags: ["React", "Node.js", "Java", "Docker", "JavaCV"],
    github: "https://github.com/alstondsouza1/salamander-project",
    project_site: "",
  },
  {
    title: "Ticket Assistant RAG App",
    description:
      "A Retrieval-Augmented Generation chatbot built with Python, REST APIs, and Azure OpenAI to support internal workflow automation and improve response accuracy.",
    tags: ["Python", "REST APIs", "Azure OpenAI", "RAG"],
    github: "",
    project_site: "",
  },
  {
    title: "RateMyCourse",
    description:
      "A full-stack web application where users can browse, review, and discover golf courses across the United States with authentication and Firebase data storage.",
    tags: ["React", "Vite", "Tailwind", "Firebase", "Vercel"],
    github: "https://github.com/alstondsouza1/rate-my-course",
    project_site: "https://rate-my-course1.vercel.app/",
  },
  {
    title: "Green or Not",
    description:
      "A sustainability web app that analyzes Amazon products and creates a green score based on product details, eco-friendly keywords, and recognized certifications.",
    tags: ["Next.js", "Tailwind", "Axios", "Cheerio"],
    github: "https://github.com/alstondsouza1/green-or-not",
    project_site: "https://green-or-not2.vercel.app/",
  },
];

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="bg-gray-100 px-4 py-12 sm:px-10 sm:py-16 md:px-20 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-gray-800">Projects</h2>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.15,
              },
            },
          }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              className="flex h-full flex-col rounded-xl bg-gray-800 p-6 text-white shadow transition hover:-translate-y-1 hover:shadow-xl"
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <h3 className="mb-4 text-xl font-bold">{project.title}</h3>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                {project.project_site && (
                  <a
                    href={project.project_site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border border-gray-600 px-3 py-2 text-sm transition hover:border-blue-300 hover:text-blue-300"
                  >
                    <Layout aria-hidden="true" size={18} />
                    Live site
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded border border-gray-600 px-3 py-2 text-sm transition hover:border-purple-400 hover:text-purple-400"
                  >
                    <GitHub aria-hidden="true" size={18} />
                    Source code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
