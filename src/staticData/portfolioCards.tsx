import {type CardProps, type ProjectDetail } from "../components/card";

export const portfolioCardsData: CardProps[] = [
  {
    id: "obenan",
    title: "Obenan — AI visibility and discoverability. Built for physical businesses.",
    description: "Built a highly available visibility and discoverability platform for physical businesses using Express, TypeScript, and Sequelize. Implemented optimized query structures and database indexing.",
    author: "Hamza Butt",
    imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=150",
    date: "14/05/2026",
    readingTime: "10 mins",
    linkUrl: "#",
    details: {
        overview: "RealtyAccess is a high-performance backend ecosystem designed to streamline property listings, client multi-tenancy, and complex relational searches for real estate agents.",
        contributions: [
          "Architected relational database schemas using Sequelize CLI migrations, enforcing strict ACID compliance.",
          "Optimized slow geometric property lookup queries by implementing composite PostgreSQL indexing, reducing API response time by 40%.",
          "Developed custom Express middleware workflows for role-based access control (RBAC)."
        ],
        toolsUsed: ["Node.js", "Express", "TypeScript", "Sequelize ORM", "PostgreSQL", "Docker"],
        url: "https://github.com/yourusername/realty-access"
    }
  },
  {
    id: "database-acid",
    title: "Deep Dive into Database Isolation & ACID Properties",
    description: "An architectural deep-dive into preventing race conditions and handling complex transaction states inside multi-tenant fintech platforms.",
    author: "Hamza Butt",
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=150",
    date: "28/05/2026",
    readingTime: "6 mins",
    linkUrl: "#",
    details: {
        overview: "RealtyAccess is a high-performance backend ecosystem designed to streamline property listings, client multi-tenancy, and complex relational searches for real estate agents.",
        contributions: [
          "Architected relational database schemas using Sequelize CLI migrations, enforcing strict ACID compliance.",
          "Optimized slow geometric property lookup queries by implementing composite PostgreSQL indexing, reducing API response time by 40%.",
          "Developed custom Express middleware workflows for role-based access control (RBAC)."
        ],
        toolsUsed: ["Node.js", "Express", "TypeScript", "Sequelize ORM", "PostgreSQL", "Docker"],
        url: "https://github.com/yourusername/realty-access"
    }
  },
  {
    id: "microservices-nestjs",
    title: "Building Microservices with NestJS and PostgreSQL",
    description: "A practical step-by-step guide on creating clean, maintainable REST and RPC APIs using dependency injection patterns.",
    author: "Hamza Butt",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=150",
    date: "02/06/2026",
    readingTime: "12 mins",
    linkUrl: "#",
  }
];