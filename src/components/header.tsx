import { Home } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './theme.button'; // Ensure this matches your exact filename casing

export const Header = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative rounded-md px-3 py-2 text-sm font-medium transition-colors after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:bg-white after:origin-left after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive ? 'text-white after:scale-x-100' : 'text-gray-300 hover:text-white'
    }`;

  return (
    <>
      <nav className="relative bg-[#5432a8] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">

            {/* Left Column: Home Icon Alignment Layout */}
            <div className="flex shrink-0 items-center">
              <Link to="/" className="flex items-center">
                <Home className="w-6 h-6 text-gray-300 hover:bg-white/5 hover:text-white transition-colors" />
              </Link>
            </div>

            {/* Middle Column: Centered Navigation Content Links */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="hidden sm:block pointer-events-auto">
                <div className="flex space-x-4">
                  <NavLink to="/services" className={navLinkClasses}>
                    Services
                  </NavLink>
                  <NavLink to="/projects" className={navLinkClasses}>
                    Projects
                  </NavLink>
                  <NavLink to="/hire-me" className={navLinkClasses}>
                    Hire Me
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Right Column: Theme Toggle Wrapper Alignment Layout */}
            <div className="flex shrink-0 items-center z-10">
              <ThemeToggle />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};