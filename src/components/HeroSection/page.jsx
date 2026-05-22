"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 160]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/me.jpg"
          alt="Alston Dsouza"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 z-10 bg-black/45" />

      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
        <motion.h1
          className="text-4xl font-bold sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Hello, I am Alston!
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Software Developer, Digital Communicator, and Recent Graduate
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-gray-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}