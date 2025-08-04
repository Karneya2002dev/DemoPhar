import React from "react";

const jobList = [
  {
    title: "Research Scientist",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Join our R&D team to develop innovative pharmaceutical solutions. This role involves conducting research, developing new formulations, and contributing to breakthrough treatments.",
  },
  {
    title: "Quality Control Specialist",
    location: "Hyderabad, India",
    type: "Full-Time",
    description:
      "Ensure the highest standards of quality for our pharmaceutical products. This role focuses on testing, compliance, and quality assurance across departments.",
  },
  {
    title: "Clinical Research Associate",
    location: "Tamil Nadu, India",
    type: "Full-Time",
    description:
      "Coordinate and monitor clinical trials to ensure compliance with protocols and regulatory requirements while maintaining data integrity and patient safety.",
  },
];

const highlights = [
  {
    icon: "🧪",
    title: "Innovation Culture",
    description:
      "Work in an environment that encourages new ideas and breakthrough thinking",
  },
  {
    icon: "🎓",
    title: "Professional Growth",
    description:
      "Continuous learning opportunities and career advancement paths",
  },
  {
    icon: "💙",
    title: "Comprehensive Benefits",
    description:
      "Competitive compensation, health benefits, and work-life balance",
  },
  {
    icon: "🌍",
    title: "Global Impact",
    description:
      "Make a meaningful difference in healthcare worldwide",
  },
];

const Careers = () => {
  return (
    <section className="relative w-full min-h-[100vh] text-white overflow-hidden">
      {/* Background Image */}
      <img
        src="https://img.freepik.com/free-photo/business-people-holding-word-careers_53876-63462.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Career Team"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10" />

      {/* Intro Section */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center px-4 py-24 max-w-4xl mx-auto">
        <div className="bg-white text-blue-700 text-xl font-bold rounded-lg shadow-md px-6 py-2 mb-6 drop-shadow-lg">
          Join Our Team
        </div>
        <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
          At Fourmax Pharmaceuticals, we're looking for talented individuals
          who are passionate about making a difference in healthcare. Explore
          our current opportunities and join our innovative team.
        </p>
      </div>

      {/* Why Join Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl text-center font-bold text-blue-200 mb-12">
          Why Join Fourmax?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0f172a]/90 backdrop-blur-lg text-white p-6 rounded-2xl text-center shadow-lg border-t-4 border-blue-500 hover:border-purple-500 transition-all"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-purple-300 mb-2">{item.title}</h4>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Cards Section */}
      <div className="relative z-20 mt-12 px-6 md:px-20 pb-16">
        <h3 className="text-3xl font-bold text-white mb-10">Current Opportunities</h3>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {jobList.map((job, index) => (
            <div
  key={index}
  className="bg-[#0f172a]/90 backdrop-blur-md text-white p-8 rounded-2xl shadow-xl transition-all hover:scale-[1.02] hover:bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900"
>
  <div className="flex justify-between items-center mb-2">
    <h4 className="text-2xl font-bold text-purple-300">
      {job.title}
    </h4>
    <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs uppercase font-bold">
      {job.type}
    </span>
  </div>
  <div className="flex items-center gap-2 text-sm text-blue-200 mb-4">
    <svg
      className="w-4 h-4 text-blue-300"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
    </svg>
    {job.location}
  </div>
  <p className="text-sm text-gray-200 mb-6 leading-relaxed">
    {job.description}
  </p>
  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2">
    Apply Now
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </button>
</div>


          ))}
        </div>
      </div>
    </section>
  );
};

export default Careers;
