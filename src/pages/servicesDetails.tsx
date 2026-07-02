import { Check, Boxes, Zap } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSocketdotio,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGithub,
  SiRedis,
} from "react-icons/si";

interface ServiceDetail {
  title: string;
  items: string[];
}

const serviceDetails: ServiceDetail[] = [
  {
    title: "Frontend Engineering",
    items: [
      "Build production-grade React & Next.js applications",
      "Develop responsive and mobile-first interfaces",
      "Create reusable component libraries",
      "Implement state management with Redux & Context API",
      "Optimize performance and Core Web Vitals",
      "Integrate REST APIs and real-time WebSocket features",
      "Ensure accessibility and SEO best practices",
    ],
  },
  {
    title: "Backend & System Architecture",
    items: [
      "Design scalable REST APIs using Node.js & Express",
      "Build secure authentication with JWT & RBAC",
      "Implement real-time systems using Socket.io",
      "Design optimized MongoDB & PostgreSQL schemas",
      "Create background jobs, queues, and caching layers",
      "Integrate third-party APIs and payment gateways",
      "Monitor application health and performance",
    ],
  },
  {
    title: "Full-Stack Product Development",
    items: [
      "Deliver complete MERN stack applications",
      "Build admin dashboards and ERP style systems",
      "Develop SaaS platforms with multi tenant architecture",
      "Implement CI/CD and Docker deployment workflows",
      "Create analytics dashboards and reporting systems",
      "Automate business workflows and operations",
      "Deploy scalable cloud-ready applications",
    ],
  },
];

const techGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Material UI", icon: SiMui, color: "#007FFF" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "Microservices", icon: Boxes, color: "#5432a8" },
      { name: "BullMQ", icon: Zap, color: "#DC2626" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "#010101" },
    ],
  },
  {
    title: "Database & DevOps",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
];

export const ServicesDetail = () => {
  return (
    <section className="bg-[#eef2f8] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        {/* Services Header */}
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-4 border-[#5432a8] pb-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-slate-600">
            Providing end-to-end development services to help automate processes, and create exceptional user experiences.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-20">
          {serviceDetails.map((service) => (
            <div key={service.title} className="rounded-xl bg-slate-300/70 p-6 shadow-sm">
              <h3 className="mb-4 border-b-2 border-[#5432a8] pb-2 text-lg font-bold text-[#5432a8]">
                {service.title}
              </h3>
              <ul className="space-y-2.5">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#5432a8]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technologies Header */}
        <div className="mb-12 text-center">
          <h2 className="inline-block border-b-4 border-[#5432a8] pb-2 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Technologies
          </h2>
          <p className="mt-4 text-slate-600">Technologies I've been working with recently</p>
        </div>

        {/* Tech Groups */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {techGroups.map((group) => (
            <div key={group.title} className="rounded-xl bg-slate-300/70 p-6 shadow-sm">
              <h3 className="mb-4 border-b-2 border-[#5432a8] pb-2 text-lg font-bold text-[#5432a8]">
                {group.title}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {group.items.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex flex-col items-center justify-center gap-1.5 rounded-lg bg-white p-3 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Icon size={22} style={{ color }} />
                    <span className="text-[11px] font-medium text-slate-700 text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};