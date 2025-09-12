'use client'; // Needed if you're using Next.js App Router

import { motion } from 'framer-motion';
import { Instagram, Linkedin, GitHub } from 'react-feather';

export default function AboutSection(){

    return(
        <motion.section
            id="about"
            className="bg-white px-6 py-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="flex flex-col md:flex-row justify-between gap-10 max-w-7xl mx-auto items-center">
                {/* Personal Info on the left */}
                <div className="flex-1 space-y-4">
                    {/* Info */}
                    <div className="space-y-4">

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Name:</span>
                            <span className="text-gray-500">Alston Dsouza</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Age:</span>
                            <span className="text-gray-500">23</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">Location:</span>
                            <span className="text-gray-500">Seattle, Washington</span>
                        </div>

                        <div className="flex justify-between border-b border-gray-300 pb-2">
                            <span className="text-black font-semibold">School:</span>
                            <span className="text-gray-500">Green River College</span>
                        </div>

                    </div>

                    {/* Socials */}
                    <div className="flex space-x-6 text-gray-700 text-2xl">
                        <a href="https://www.instagram.com/namastaythefuckawaybitch/" target="_blank" rel="noopener noreferrer">
                            <Instagram className="hover:text-blue-300 " />
                        </a>
                        <a href="https://www.linkedin.com/in/alstondsouza02" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="hover:text-blue-600" />
                        </a>
                        <a href="https://github.com/alstondsouza1" target="_blank" rel="noopener noreferrer">
                            <GitHub className="hover:text-purple-600" />
                        </a>
                    </div>
                </div> 

                {/* Right: Bio + Resume */}
                <div className="flex-1 space-y-6">
                <div className="text-gray-500">
                    <h2 className="text-2xl font-semibold mb-2">A little bit about me...</h2>
                    <p className="mb-4">
                    I am a software development student at Green River College, passionate about building full-stack applications that enhance real-world usability. With experience in web development, DevOps, and AI-integrated systems, I’ve built tools used by students, staff, and even researchers at The Ohio State University.
                    </p>
                    
                    <p className="mb-4">
                    I’ve contributed to AI chatbot systems, video analysis pipelines, and IT infrastructure support. I enjoy solving challenging problems and love building scalable, user-focused software.
                    </p>

                    <p className="mb-4">
                    Outside of tech, I enjoy outdoor sports, coffee, event planning, and exploring innovative ideas with diverse teams.
                    </p>
                </div>

                <a 
                    href='/AlstonDsouza_Resume.pdf'
                    download
                    className="border text-gray-500 px-6 py-3 hover:bg-blue-200 transition cursor-pointer font-bold"
                >
                    Download Resume
                </a>
                </div>
            </div>
        </motion.section>
    )
}