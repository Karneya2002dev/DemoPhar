import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    description: "Make a meaningful difference in healthcare worldwide",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

// New modal animation
const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const Careers = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null,
  });
  const [pdfPreview, setPdfPreview] = useState(null);

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    });
    setPdfPreview(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume" && files && files[0]) {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }));

      if (file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);
        setPdfPreview(fileURL);
      } else {
        setPdfPreview(null);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : value,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (pdfPreview) {
        URL.revokeObjectURL(pdfPreview);
      }
    };
  }, [pdfPreview]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, job: selectedJob.title });
    alert("Application submitted successfully!");
    handleClose();
  };

  return (
    <section className="relative w-full min-h-[100vh] bg-white text-gray-800 overflow-hidden">
      {/* Intro Section */}
      <motion.div
        className="relative z-20 flex flex-col justify-center items-center text-center px-4 py-24 max-w-6xl mx-auto h-[80vh] bg-cover bg-center rounded-xl"
        style={{
          backgroundImage: `url('https://c9d6f136.delivery.rocketcdn.me/wp-content/uploads/2020/08/Careers.jpg')`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="absolute inset-0 bg-black/40 z-0 rounded-xl" />

        <motion.div
          className="relative z-10 bg-blue-100 text-blue-800 text-xl font-bold rounded-lg shadow-md px-6 py-2 mb-6"
          variants={fadeUp}
        >
          Join Our Team
        </motion.div>

        <motion.p
          className="relative z-10 text-white text-lg md:text-xl font-medium leading-relaxed"
          variants={fadeUp}
          custom={1}
        >
          At Fourmax Pharmaceuticals, we're looking for talented individuals
          who are passionate about making a difference in healthcare. Explore
          our current opportunities and join our innovative team.
        </motion.p>
      </motion.div>

      {/* Why Join Section */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.h2
          className="text-4xl text-center font-bold text-purple-700 mb-12"
          variants={fadeUp}
        >
          Why Join Fourmax?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl text-center shadow-md border-t-4 border-blue-500 hover:border-purple-500 transition-all"
              custom={idx}
              variants={fadeUp}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-purple-800 mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Job Cards Section */}
      <motion.div
        className="relative z-20 mt-12 px-6 md:px-20 pb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <motion.h3
          className="text-3xl font-bold text-gray-800 mb-10"
          variants={fadeUp}
        >
          Current Opportunities
        </motion.h3>

        <div className="grid gap-8 max-w-5xl mx-auto">
          {jobList.map((job, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-8 rounded-2xl shadow-xl transition-all hover:scale-[1.02] hover:bg-gradient-to-r from-indigo-100 via-purple-100 to-indigo-100"
              custom={index}
              variants={fadeUp}
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-2xl font-bold text-purple-800">
                  {job.title}
                </h4>
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-xs uppercase font-bold">
                  {job.type}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-800 mb-4">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
                </svg>
                {job.location}
              </div>
              <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                {job.description}
              </p>
              <button
                onClick={() => handleApplyClick(job)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium px-5 py-2 rounded-full text-sm transition-all flex items-center gap-2"
              >
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
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Apply Now Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Apply for {selectedJob?.title}
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg px-4 py-2"
                />
                <textarea
                  name="coverLetter"
                  placeholder="Cover Letter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2"
                />
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  onChange={handleChange}
                  required
                  className="w-full"
                />

                {pdfPreview && (
                  <div className="mt-4 border rounded-lg overflow-hidden">
                    <iframe
                      src={pdfPreview}
                      title="Resume Preview"
                      className="w-full h-64"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Careers;
