import { Link } from "react-router-dom";

interface Service {
  slug: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    slug: "full-stack-development",
    title: "Full Stack Development",
    description:
      "Building scalable MERN applications with clean architecture, APIs, and responsive UI.",
  },
  {
    slug: "frontend-development",
    title: "Frontend Development",
    description:
      "Modern React interfaces with Tailwind, animations, and performance optimization.",
  },
  {
    slug: "backend-development",
    title: "Backend Development",
    description:
      "REST APIs, authentication systems, database design, and scalable server logic.",
  },
];

export const Services = () => {
  return (
    <section className="bg-[#eef2f8] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-4 border-[#5432a8] pb-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-slate-600">Professional services I provide</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.slug}
              className="rounded-xl bg-slate-300/70 p-6 shadow-sm"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="border-b-2 border-[#5432a8] pb-1 text-lg font-bold text-slate-900">
                  {service.title}
                </h3>

                <Link
                  to= '/services'
                  className="shrink-0 rounded-md border border-[#5432a8] px-4 py-1.5 text-sm font-medium text-[#5432a8] transition-colors hover:bg-[#5432a8] hover:text-white"
                >
                  View More
                </Link>
              </div>

              <p className="text-sm leading-relaxed text-slate-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};