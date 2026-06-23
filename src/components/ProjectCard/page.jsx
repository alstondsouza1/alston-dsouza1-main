"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Layout, GitHub } from "react-feather";

const projects = [
  {
    title: "Tailor That Resume",
    description:
      "An AI resume tailoring platform for managing resumes, job posts, applications, and tailored exports. Built with Next.js, TypeScript, PostgreSQL, Prisma, Tailwind CSS, Anthropic Claude, Apify, MCP, and Zod, with ATS keyword extraction, match scoring, authentication, secure API credentials, and application tracking.",
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Anthropic API",
      "Apify",
      "MCP",
      "Zod",
    ],
    github: "",
    project_site: "",
  },
  {
    title: "Running Start Support Portal",
    description:
      "A student support portal for searchable FAQs, category navigation, and admin content management. Built with React, Node.js, Express, MySQL, and JWT authentication to make Running Start resources easier to find and maintain.",
    tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
    github: "https://github.com/alstondsouza1/Running-start-digital-support",
    project_site: "https://running-start-portal.vercel.app/",
  },
  {
    title: "Salamander Tracker",
    description:
      "An ecological video-processing pipeline for frame analysis and salamander centroid tracking. It connects a React frontend, Node.js backend, Java video processor, JavaCV, and Docker workflow to turn raw research footage into structured tracking data.",
    tags: ["React", "Node.js", "Java", "Docker", "JavaCV"],
    github: "https://github.com/alstondsouza1/salamander-project",
    project_site: "",
  },
  {
    title: "Ticket Assistant RAG App",
    description:
      "A RAG chatbot for retrieving internal ticket and workflow information faster. Built with Python, REST APIs, Azure OpenAI, and structured retrieval logic to improve answer relevance and reduce repeated manual lookup.",
    tags: ["Python", "REST APIs", "Azure OpenAI", "RAG"],
    github: "",
    project_site: "",
  },
  {
    title: "RateMyCourse",
    description:
      "A web app for browsing, reviewing, and discovering golf courses across the United States. Built with React, Vite, Tailwind CSS, Firebase authentication, Firebase data storage, and Vercel to help users compare courses before visiting.",
    tags: ["React", "Vite", "Tailwind", "Firebase", "Vercel"],
    github: "https://github.com/alstondsouza1/rate-my-course",
    project_site: "https://rate-my-course1.vercel.app/",
  },
  {
    title: "Green or Not",
    description:
      "A sustainability tool that analyzes Amazon products and generates a green score. Built with Next.js, Tailwind CSS, Axios, Cheerio, and product-detail parsing logic to help users quickly evaluate eco-friendly signals, keywords, and certifications.",
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
