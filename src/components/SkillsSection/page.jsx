"use client";

import { motion, useReducedMotion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Java", "Spring Boot", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "Prisma", "Firebase"],
  },
  {
    title: "AI & Tools",
    skills: [
      "Anthropic API",
      "Azure OpenAI",
      "Apify",
      "Docker",
      "MCP",
      "Zod",
      "Git",
    ],
  },
];

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id="skills"
      className="bg-gray-100 px-4 py-12 sm:px-10 sm:py-16 md:px-20 md:py-20"
      initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold text-gray-800">Skills</h2>
        <p className="mb-8 max-w-2xl text-sm leading-relaxed text-gray-600">
          Technologies I use to build full-stack web applications, backend
          systems, databases, and AI-powered tools.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow"
            >
              <h3 className="mb-4 text-lg font-bold text-gray-900">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
