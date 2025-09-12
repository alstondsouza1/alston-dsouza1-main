
export default function Education() {

    return(
        <section className="px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20 bg-white">
            <h2 className="text-3xl font-bold mb-12 text-gray-700">Education</h2>
            <div className="relative space-y-12 ml-6 border-l-2 border-gray-400">

                {/* Green River College */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Green River College</h3>
                        <p className="italic text-sm text-gray-500">BAS in Software Development | July 2022 - June 2026</p>
                        <ul className="list-disc">
                            <li>Focused on web development, embedded systems, and real-world applications.</li>
                            <li>Built full-stack tools using React, Java, Docker, and AI.</li>
                            <li>Worked with industry partners through internships and research collaborations.</li>
                        </ul>
                    </div>
                </div>

                {/* Middlesex University Dubai & MODUL University */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Middlesex University Dubai & MODUL University Dubai</h3>
                        <p className="italic text-sm text-gray-500">Bachelor in Digital Media & Communication | Sep 2018 - Jul 2020</p>
                        <ul className="list-disc">
                            <li>Studied mass communication, journalism, media ethics, and digital strategy.</li>
                            <li>Developed creative campaigns, video content, and digital storytelling skills.</li>
                            <li>Collaborated on media production and communication theory projects.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}