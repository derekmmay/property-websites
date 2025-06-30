
const FooterBottom = () => {
  return (
    <div className="border-t border-gray-800 mt-16 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 text-sm font-light">Website created by:</span>
          <a 
            href="https://brandsynk.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <img 
              src="/lovable-uploads/84f43fff-7a9a-4259-b8f7-9393caadff14.png" 
              alt="BroSynk Logo" 
              className="h-6 w-auto"
            />
          </a>
        </div>
        <p className="text-gray-400 text-sm font-light">
          © 2025 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
