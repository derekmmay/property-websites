
const EducationStats = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-light text-black mb-16 text-center tracking-wide">Academic Excellence</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-extralight text-black mb-4">98%</div>
            <p className="text-gray-600 font-light">College Acceptance Rate</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extralight text-black mb-4">A+</div>
            <p className="text-gray-600 font-light">Average School Rating</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extralight text-black mb-4">15:1</div>
            <p className="text-gray-600 font-light">Student-Teacher Ratio</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extralight text-black mb-4">12</div>
            <p className="text-gray-600 font-light">Top Universities Nearby</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationStats;
