import profilePicture from '../assets/Hamza _Pic.png';
import Typewriter from 'typewriter-effect'

export const Home = () => {
    return (
        <>
            <div className="flex flex-row items-center justify-center bg-slate-100 py-12 my-4 gap-10">
                <div className="relative px-6 pt-14 lg:px-8">
                    {/* Changed 'mx-auto' to 'ml-0' or just removed it to let it snap left. Max-w-3xl gives it breathing room */}
                    <div className="max-w-3xl py-24 sm:py-32 lg:py-40">

                        {/* Small Greeting Tag: Changed flex centering to left alignment */}
                        <div className="mb-6 flex justify-start">
                            <div className="relative rounded-full px-3 py-1 text-lg text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/5 font-medium">
                                Hi, I'm
                            </div>
                        </div>

                        {/* Main Content: Changed 'text-center' to 'text-left' */}
                        <div className="text-left">
                            {/* Fixed text-black-400 typo. Added responsive dark mode adaptability */}
                            <h1 className="text-5xl font-bold tracking-tight text-black">
                                <Typewriter
                                    options={{
                                        strings: ['Hamza Asghar Butt'],
                                        autoStart: true,
                                        loop: true, // Set to true if you want it to erase and re-type infinitely
                                        delay: 30,   // Speed of typing in milliseconds (lower is faster)
                                        cursor: '|', // The blinking cursor character
                                    }}
                                />
                            </h1>

                            <p className="mt-6 text-lg font-medium text-pretty text-slate-600 dark:text-gray-400 sm:text-xl/8 max-w-2xl">
                                Backend-focused Software Engineer with expertise in Node.js || NestJS || TypeScript and React.js
                            </p>

                            {/* Action Buttons: Changed 'justify-center' to 'justify-start' */}
                            <div className="mt-10 flex items-center justify-start gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-full bg-[#5432a8] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
                                >
                                    Download Resume
                                </a>
                                <a
                                    href="#projects"
                                    className="text-sm/6 font-semibold text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                                >
                                    Know more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="relative px-3 pt-14 lg:px-8">
                    <img src={profilePicture} alt="Hamza Asghar Butt" className="w-full h-full rounded-full" />
                </div>
            </div>
        </>
    )
}