
export default function Experience() {

    return(
        <section className="px-4 py-10 sm:px-10 sm:py-16 md:px-20 md:py-20 bg-gray-700">
            <h2 className="text-3xl font-bold mb-12 text-white">Experience</h2>
            <div className="relative space-y-12 ml-6 border-l-2 border-gray-400 ">

                {/* Full-Stack Web Developer Intern  */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Green River College</h3>
                        <p className="italic text-sm text-gray-500">Full-Stack Web Developer Intern | Jan 2025 - May 2025</p>
                        <ul className="list-disc">
                            <li>Improved IT instruction tools by designing full-stack applications with HTML, CSS, PHP, and MySQL, enhancing usability for students and staff.</li>
                            <li>Delivered stable and scalable solutions by participating in weekly team reviews, increasing operational efficiency for faculty and student tools.</li>
                        </ul>
                    </div>
                </div>

                {/* CodeDay MicroInternshipe */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">CodeDay</h3>
                        <p className="italic text-sm text-gray-500">CodeDay MicroInternship | Oct 2024 – Dec 2024</p>
                        <ul className="list-disc">
                            <li>Delivered reliable test coverage for OpenEnergyDashboard by implementing JavaScript test cases, resulting in successful merges and improved repository structure.</li>
                            <li>Increased team efficiency by aligning with agile practices, participating in weekly sprints, and collaborating on tool selection to accelerate delivery.</li>
                        </ul>
                    </div>
                </div>

                {/* IT Operations Intern */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">PACCAR Parts</h3>
                        <p className="italic text-sm text-gray-500">IT Operations Intern | Jun 2024 – Aug 2024</p>
                        <ul className="list-disc">
                            <li>Developed a FAQ chatbot web app for employee ticketing using Azure AI Search, Open AI, and REST APIs, writing 3,000+ lines of Python code in a RAG framework to improve automation.</li>
                            <li>Boosted team efficiency by integrating scraped JSON data via REST APIs and supporting 700+ users with technical assistance, asset management, and Windows infrastructure support.</li>
                        </ul>
                    </div>
                </div>
                
                {/* Student Help Desk Support */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Green River College</h3>
                        <p className="italic text-sm text-gray-500">Student Help Desk Support | Oct 2022 – Aug 2023</p>
                        <ul className="list-disc">
                            <li>Reduced system downtime by 30% by troubleshooting technical issues on Windows, macOS, and security platforms.</li>
                            <li>Boosted user satisfaction by documenting recurring issues and optimizing IT workflows, leading to quicker resolutions and fewer repeated errors.</li>
                        </ul>
                    </div>
                </div>

                {/* Expo 2020 Dubai */}
                <div className="relative pl-8">
                {/* Bullet */}
                <div className="absolute -left-[11px] top-1 w-5 h-5 bg-gray-700 border-2 border-white rounded-full"></div>
                    <div className="bg-gray-50 p-6 rounded-md shadow border text-black overflow-hidden">
                        <h3 className="text-lg font-semibold">Expo 2020 Dubai</h3>
                        <p className="italic text-sm text-gray-500">Expo Digital Accreditation System | Sep 2021</p>
                        <ul className="list-disc">
                            <li>Developed a secure access system with role-based control, ensuring safe and efficient entry for VVIP guests.</li>
                            <li>Delivered on-site technical support and maintenance for live high-traffic events.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}