const education = [
    {
      school: "Green River College",
      degree: "Bachelor of Applied Science in Software Development",
      date: "Expected June 2026",
      bullets: [
        "Focused on full-stack development, backend systems, databases, and real-world applications.",
        "Built projects using React, Java, Node.js, Docker, MySQL, and AI tools.",
        "Collaborated with teams, stakeholders, and industry partners through applied coursework.",
      ],
    },
    {
      school: "Middlesex University Dubai & MODUL University Dubai",
      degree: "Digital Media & Communication",
      date: "Sep 2018 – Jul 2020",
      bullets: [
        "Studied mass communication, journalism, media ethics, and digital strategy.",
        "Developed creative campaigns, video content, and digital storytelling skills.",
        "Collaborated on media production and communication theory projects.",
      ],
    },
  ];
  
  export default function Education() {
    return (
      <section
        id="education"
        className="bg-white px-4 py-12 sm:px-10 sm:py-16 md:px-20 md:py-20"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-gray-800">Education</h2>
  
          <div className="relative ml-6 space-y-10 border-l-2 border-gray-400">
            {education.map((item) => (
              <div key={item.school} className="relative pl-8">
                <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full border-2 border-white bg-gray-700" />
  
                <div className="rounded-lg border bg-gray-50 p-6 text-black shadow">
                  <h3 className="text-xl font-bold">{item.school}</h3>
                  <p className="mb-4 text-sm italic text-gray-500">
                    {item.degree} | {item.date}
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