'use client';

import { motion } from 'framer-motion';
import { Layout, GitHub } from 'react-feather';

export default function Projects() {
    const projects = [
        
    ];

    // Card Animation to Fade in
    const container = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.2, // Delay between each card
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
    };

  return (
    <section className="bg-gray-400 px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20" id="projects">
      <div className="max-w-6xl w-full mx-auto">
        <h2 className="text-white text-3xl font-bold mb-4">Projects</h2>

        <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.3}}
        >
          {projects.map((project, index) => (
            <motion.div 
                key={index} 
                className="bg-gray-700 text-white p-6 rounded-lg shadow hover:shadow-lg transition will-change-transform"
                variants={cardVariants}
            >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 break-words">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                    <span key={idx} className="bg-gray-700 text-xs rounded-full font-extralight italic">{tag}</span>
                ))}
                </div>
                
                <div className='mb-2 flex space-x-4'>
                {/* Project Website Link (only if exists) */}
                    {project.project_site && (
                        <a 
                        href={project.project_site} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <Layout className="hover:text-blue-300 "/>
                        </a>
                    )}

                    {/* GitHub Link (only if exists) */}
                    {project.github && (
                        <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-white hover:underline"
                        >
                            <GitHub className="hover:text-purple-600"/>
                        </a>
                    )}

                </div>
                
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}