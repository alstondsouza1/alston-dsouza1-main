'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 175]); // Adjust values as needed

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/images/me.jpg"
          alt="Picture of Alston"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-4xl font-bold">Hello, I am Alston!</h1>
        <p className="mt-4 text-lg">Software Developer, Digital Communicator, and Student</p>
        <a href="#about" className="mt-8 bg-white text-black rounded-full px-6 py-2 hover:bg-gray-300 transition cursor-pointer">
          Discover More
        </a>
      </div>
    </section>
  );
}