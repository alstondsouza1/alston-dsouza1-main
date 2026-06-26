import { GitHub, Linkedin, Mail, FileText } from "react-feather";

const links = [
  {
    label: "Email",
    href: "mailto:alstondsouza35@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/alstondsouza1",
    icon: GitHub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alstondsouza02",
    icon: Linkedin,
  },
  {
    label: "Resume",
    href: "/AlstonDsouza_Resume.pdf",
    icon: FileText,
    download: true,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-700 bg-gray-950 px-4 py-8 text-white sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Alston Dsouza</p>
          <p className="mt-1 text-sm text-gray-400">
            Full-stack software developer building web apps and AI tools.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map(({ label, href, icon: Icon, download }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={download}
              className="inline-flex items-center gap-2 rounded border border-gray-700 px-3 py-2 text-sm text-gray-200 transition hover:border-white hover:text-white"
            >
              <Icon aria-hidden="true" size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-6xl text-sm text-gray-500">
        © {currentYear} Alston Dsouza. All rights reserved.
      </div>
    </footer>
  );
}
