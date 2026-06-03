import React from "react";

export interface ProjectDetail {
    overview: string;
    contributions: string[];
    toolsUsed: string[];
    githubUrl?: string;
    url?: string;
}

export interface CardProps {
    id: string;
    title: string;
    description: string;
    author?: string;
    imageUrl?: string;
    imageAlt?: string;
    date: string;
    readingTime: string;
    linkUrl?: string;
    className?: string;
    details: ProjectDetail;
}

// 1. Extend the properties so the Card accepts the dynamic click listener function
interface CardComponentProps extends CardProps {
    onSelect: () => void;
}

export const Card: React.FC<CardComponentProps> = ({
    id,
    title,
    description,
    author,
    imageUrl,
    imageAlt = "Card Image",
    date,
    readingTime,
    className = "",
    details,
    onSelect, // <-- Destructured the function prop here
}) => {
    return (
        /* 2. Swapped out <a> for <button type="button"> and hooked up the click trigger */
        <button
            type="button"
            onClick={(e) => {
                e.preventDefault(); // Safety stop against native actions
                onSelect();         // Runs your active project ID state assignment
            }}
            /* Added text-left and w-full to make the button look and stretch exactly like your original anchor link did */
            className={`text-left flex flex-col justify-between rounded-md border border-gray-300 p-4 shadow-sm sm:p-5 transition hover:shadow-md bg-white h-full w-full cursor-pointer ${className}`}
        >
            <div className="w-full">
                <div className="flex flex-col-reverse justify-between gap-2 sm:flex-row sm:gap-4">
                    <div className="mt-2 sm:mt-0 flex-1">
                        <h3 className="text-base font-semibold sm:font-medium sm:text-lg text-pretty text-gray-900 leading-tight">
                            {title}
                        </h3>

                        {author && <p className="mt-0.5 text-xs sm:text-sm text-gray-500">{author}</p>}

                        <p className="mt-3 line-clamp-2 text-xs sm:text-sm text-pretty text-gray-600">
                            {description}
                        </p>
                    </div>

                    {imageUrl && (
                        <div className="shrink-0 self-start sm:order-last">
                            <img
                                alt={imageAlt}
                                src={imageUrl}
                                className="size-10 rounded-full object-cover sm:size-16"
                            />
                        </div>
                    )}
                </div>
            </div>

            <dl className="mt-5 flex gap-3 sm:gap-6 border-t border-gray-100 pt-3 w-full">
                <div className="flex items-center gap-1.5">
                    <dt className="text-gray-500">
                        <span className="sr-only">Published on</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 sm:size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>
                    </dt>
                    <dd className="text-[11px] sm:text-xs text-gray-600">{date}</dd>
                </div>

                <div className="flex items-center gap-1.5">
                    <dt className="text-gray-500">
                        <span className="sr-only">Reading time</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 sm:size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                    </dt>
                    <dd className="text-[11px] sm:text-xs text-gray-600">{readingTime}</dd>
                </div>
            </dl>
        </button>
    );
};