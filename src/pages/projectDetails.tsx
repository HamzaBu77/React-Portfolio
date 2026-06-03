import React from "react";

// 1. Define the props interface to receive data and callbacks from Project.tsx
interface ProjectDetailViewProps {
  project: {
    title: string;
    author?: string;
    date: string;
    readingTime: string;
    details: {
      overview: string;
      contributions: string[];
      toolsUsed: string[];
      url?: string;     // Matched your schema field name change
      liveUrl?: string;
    };
  };
  onBack: () => void; // Callback function to close this view and show the grid
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ project, onBack }) => {
  const { details } = project;

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <article className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-10">
        
        {/* Back Button — Swapped Link tag with a standard HTML button using our state trigger */}
        <button 
          onClick={onBack}
          className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-2 mb-6 transition cursor-pointer"
        >
          ← Back to Projects
        </button>

        {/* Title Block */}
        <header className="border-b border-gray-100 pb-6">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl tracking-tight">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
            <p><strong>By:</strong> {project.author || "Hamza Butt"}</p>
            <p><strong>Published:</strong> {project.date}</p>
            <p><strong>Read Time:</strong> {project.readingTime}</p>
          </div>
        </header>

        {/* Content Section */}
        <div className="space-y-8 mt-8">
          
          {/* 1. What the App Does (Overview) */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Application Overview</h2>
            <p className="text-gray-700 leading-relaxed text-pretty text-sm sm:text-base">
              {details.overview}
            </p>
          </section>

          {/* 2. Key Contributions */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Key Contributions & Architecture Role</h2>
            <ul className="list-disc list-inside space-y-2.5 text-gray-700 text-sm sm:text-base">
              {details.contributions.map((bullet, index) => (
                <li key={index} className="pl-1">
                  <span className="text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Reusable Technology Badges */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Tools & Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {details.toolsUsed.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 border border-gray-200 text-gray-800 text-xs sm:text-sm font-medium rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>

          {/* External Code Links */}
          {(details.url || details.liveUrl) && (
            <footer className="pt-6 border-t border-gray-100 flex gap-4">
              {details.url && (
                <a 
                  href={details.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 bg-gray-900 text-white rounded-md text-sm hover:bg-gray-800 transition"
                >
                  View Source Code
                </a>
              )}
            </footer>
          )}

        </div>
      </article>
    </main>
  );
};