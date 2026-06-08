const experiences = [
    {
      company: "Spotify",
      role: "Backend Engineer Intern",
      date: "Jun 2025 – Sep 2025",
      bullets: [
        "Delivered backend services with Java, Spring Boot, Spring MVC, and SQL to support scalable product workflows.",
        "Improved service reliability and maintainability by adding unit tests, applying design patterns, and refactoring backend code.",
        "Moved features from requirements through implementation by collaborating with engineers and product stakeholders in Agile sprint cycles.",
      ],
    },
    {
      company: "Green River College",
      role: "Full-Stack Software Engineer Intern",
      date: "Jan 2025 – May 2025",
      bullets: [
        "Delivered full-stack web features using HTML, CSS, PHP, and MySQL for college-facing applications.",
        "Improved data retrieval and application responsiveness by optimizing MySQL queries and backend logic.",
        "Built and maintained RESTful API endpoints that powered dynamic, data-driven user experiences.",
      ],
    },
    {
      company: "CodeDay",
      role: "Software Engineering Micro-Intern",
      date: "Oct 2024 – Dec 2024",
      bullets: [
        "Expanded JavaScript test coverage with Mocha to catch regressions before release.",
        "Resolved maintainer feedback through GitHub pull requests and iterative code reviews.",
        "Delivered production-ready open-source contributions that were accepted and merged into the main codebase.",
      ],
    },
    {
      company: "PACCAR Parts",
      role: "IT Operations Intern",
      date: "Jun 2024 – Aug 2024",
      bullets: [
        "Built a backend-driven RAG chatbot with Python, REST APIs, and Azure OpenAI to streamline internal information retrieval.",
        "Designed structured JSON data pipelines that supported a more efficient workflow for 700+ users.",
        "Improved answer relevance by integrating Azure cloud and AI services into the chatbot retrieval pipeline.",
      ],
    },
    {
      company: "Green River College",
      role: "Student Help Desk Support",
      date: "Oct 2022 – Aug 2023",
      bullets: [
        "Restored access and productivity by troubleshooting Windows, macOS, and campus-system issues.",
        "Reduced repeated diagnostic work by documenting recurring issues and reusable support procedures.",
      ],
    },
  ];
  
  export default function Experience() {
    return (
      <section
        id="experience"
        className="bg-gray-800 px-4 py-12 sm:px-10 sm:py-16 md:px-20 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-white">Experience</h2>
  
          <div className="relative ml-6 space-y-10 border-l-2 border-gray-500">
            {experiences.map((item) => (
              <div key={`${item.company}-${item.role}`} className="relative pl-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-2 border-white bg-gray-800" />
  
                <div className="rounded-lg border bg-white p-6 text-black shadow">
                  <h3 className="text-xl font-bold">{item.company}</h3>
                  <p className="mb-4 text-sm italic text-gray-500">
                    {item.role} | {item.date}
                  </p>
  
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-gray-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
