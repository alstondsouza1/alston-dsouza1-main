"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, GitHub } from "react-feather";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="bg-white px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 md:flex-row">
        <div className="w-full flex-1 space-y-4">
          <InfoRow label="Name" value="Alston Dsouza" />
          <InfoRow label="Role" value="Recent Software Development Graduate" />
          <InfoRow label="Location" value="Seattle, Washington" />
          <InfoRow label="School" value="Green River College" />

          <div className="flex gap-6 pt-4 text-gray-700">
            <a
              href="https://www.instagram.com/namastaythefuckawaybitch/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="transition hover:text-pink-500" />
            </a>

            <a
              href="https://www.linkedin.com/in/alstondsouza02"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="transition hover:text-blue-600" />
            </a>

            <a
              href="https://github.com/alstondsouza1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHub className="transition hover:text-purple-600" />
            </a>
          </div>
        </div>

        <div className="w-full flex-1 space-y-6 text-gray-600">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">
              A little bit about me...
            </h2>

            <p className="mb-4 leading-relaxed">
              I am a recent software development graduate from Green River
              College with a passion for building clean, user-friendly web
              applications. I enjoy solving real-world problems through code and
              have hands-on experience with React, Next.js, Java, Node.js,
              Express, MySQL, Docker, and AI-powered tools.
            </p>

            <p className="mb-4 leading-relaxed">
              I have worked on full-stack applications, admin dashboards, AI
              chatbots, RAG tools, and video-processing projects. My experience
              includes backend development, REST APIs, authentication, database
              design, testing, and Agile/Scrum collaboration.
            </p>

            <p className="leading-relaxed">
              Outside of tech, I enjoy coffee, event planning, outdoor sports,
              and working with diverse teams to create meaningful experiences.
            </p>
          </div>

          <a
            href="/AlstonDsouza_Resume.pdf"
            download
            className="inline-block rounded border border-gray-700 px-6 py-3 font-bold text-gray-800 transition hover:bg-gray-800 hover:text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.section>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-6 border-b border-gray-300 pb-3">
      <span className="font-bold text-black">{label}:</span>
      <span className="text-right text-gray-500">{value}</span>
    </div>
  );
}