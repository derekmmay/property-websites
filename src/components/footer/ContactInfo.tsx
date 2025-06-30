
const ContactInfo = () => {
  return (
    <div className="space-y-12">
      {/* Contact Info */}
      <div>
        <h4 className="text-3xl font-light mb-8 text-white">Susan Chase</h4>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="text-gray-300 text-lg font-light">(949) 949-9499</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 font-light">susan@compass.com</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 font-light">
              DRE License #123456
            </span>
          </div>
        </div>
      </div>

      {/* Compass Logo */}
      <div className="pt-6 border-t border-gray-800">
        <div className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/9935b2a7-c9a4-4e38-b0e8-15f3e21f8dc4.png" 
            alt="Compass Real Estate" 
            className="h-8 w-auto"
          />
          <div className="text-gray-400 text-sm font-light">
            Luxury Real Estate Specialist
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
