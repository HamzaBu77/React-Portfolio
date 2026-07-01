import { useParams, Link } from "react-router-dom";

interface TechInfo {
  title: string;
  intro: string;
  technologies: string[];
}

const techData: Record<string, TechInfo> = {
  "full-stack-development": {
    title: "Full Stack Development",
    intro:
      "End-to-end MERN applications, from database schema to deployed UI.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "REST APIs",
      "JWT Auth",
      "Docker",
    ],
  },
  "frontend-development": {
    title: "Frontend Development",
    intro: "Modern, responsive interfaces built for speed and clarity.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vite",
      "Redux Toolkit",
    ],
  },
  "backend-development": {
    title: "Backend Development",
    intro: "Reliable server logic, APIs, and data layers that scale.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "JWT / OAuth",
      "Redis",
    ],
  },
};

export const Technologies = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? techData[slug] : undefined;

  if (!data) {
    return (
      <section className="bg-[#eef2f8] px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-slate-900">Service not found</h2>
        <p className="mt-3 text-slate-600">
          We couldn't find that service. Head back and pick one from the list.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-md border border-amber-500 px-4 py-1.5 text-sm font-medium text-amber-600 hover:bg-amber-500 hover:text-white"
        >
          Back to Services
        </Link>
      </section>
    );
  }

  return (
    <section className="bg-[#eef2f8] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-8 inline-block text-sm font-medium text-amber-600 hover:underline"
        >
          &larr; Back to Services
        </Link>

        <h2 className="border-b-4 border-amber-500 pb-2 text-4xl font-extrabold text-slate-900">
          {data.title}
        </h2>
        <p className="mt-4 text-slate-600">{data.intro}</p>

        <h3 className="mt-8 mb-3 text-lg font-bold text-slate-900">
          Technologies I use
        </h3>
        <ul className="flex flex-wrap gap-2">
          {data.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full bg-slate-300/70 px-4 py-1.5 text-sm font-medium text-slate-800"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};