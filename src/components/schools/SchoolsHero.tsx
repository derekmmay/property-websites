
const SchoolsHero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('/lovable-uploads/0fd8fd27-576d-45a0-b080-70a87b6b855f.png')`
        }}
      />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-7xl md:text-9xl font-extralight mb-12 tracking-[-0.02em] text-white leading-none">
            Premier Education
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-light tracking-wide opacity-95">
            California's Finest Academic Institutions
          </p>
          <p className="text-lg mb-16 max-w-4xl mx-auto opacity-90 leading-relaxed font-light">
            Access to the region's most distinguished schools and universities, ensuring exceptional 
            educational opportunities from elementary through higher education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SchoolsHero;
