import { React, useState } from 'react';
import { Card } from '../components/card';
import { ProjectDetailView } from './projectDetails'; // The component we adjusted earlier
import { portfolioCardsData } from '../staticData/portfolioCards';

export const Project = () => {
    // Track the active project ID string instead of the entire object
    const [activeProjectId, setActiveProjectId] = useState<string | null>(null);

    // Helper to find the matching project details block
    const selectedProject = portfolioCardsData.find(p => p.id === activeProjectId);

    return (
        <div className="min-h-screen bg-slate-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">

                {/* Page Header */}
                <div className="mb-10 text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                        My Projects
                    </h1>
                    <p className="mt-2 text-lg text-gray-600">
                        A showcase of my applications, architecture designs, and technical articles.
                    </p>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                    {portfolioCardsData.map((project, index) => {
                        const isCurrentActive = activeProjectId === project.id;

                        return (
                            /*  Changed from <React.Fragment key={...}> to short syntax key wrapper */
                            <div key={project.id || index} className="contents">

                                {/* The Main Base Card */}
                                <div className={`transition-all duration-300 ${isCurrentActive ? 'ring-2 ring-gray-900 rounded-md shadow-md' : ''}`}>
                                    <Card
                                        {...project}
                                        onSelect={() => setActiveProjectId(isCurrentActive ? null : project.id)}
                                    />
                                </div>

                                {/* Dynamic Inline Content Drop */}
                                {isCurrentActive && selectedProject && (
                                    <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-4">
                                        <ProjectDetailView
                                            project={selectedProject}
                                            onBack={() => setActiveProjectId(null)}
                                        />
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
};