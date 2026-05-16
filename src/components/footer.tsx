
export const Footer = () => {
  return (
    <>
      {/* Changed to semantic footer tag, keeping your signature branding background color */}
      <footer className="w-full bg-[#5432a8] border-t border-white/10 mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* 
            Flex container centered both vertically (items-center) 
            and horizontally (justify-center) 
          */}
          <div className="flex h-20 flex-col sm:flex-row items-center justify-between py-4 gap-4">
            
            {/* Left/Center Side: Secure External Profile Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/HamzaBu77" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
              >
                Github
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-asghar-butt/" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
              >
                LinkedIn
              </a>
              <a 
                href="https://www.fiverr.com/sellers/zarfamasood/edit" 
                target="_blank" 
                rel="noreferrer" 
                className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white transition-all"
              >
                Hire Me
              </a>
            </div>

            {/* Right Side: Copyright tracking boundary */}
            <div className="text-xs text-gray-400 font-medium">
              &copy; {new Date().getFullYear()} Hamza. All rights reserved.
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};