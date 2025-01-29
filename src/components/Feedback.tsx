import React from "react";

const Feedback = () => {
  return (
    <section id="feedback" className="py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Feedback</h2>

        {/* Feedback Buttons Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Pre Feedback */}
          <a
            href="https://forms.gle/F4RVesLSdWLo3Sra8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
          >
            Pre Feedback
          </a>

          {/* Daily Feedback */}
          <a
            href="https://forms.gle/nfn5dJBXc2uMvdfv9"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
          >
            Daily Feedback
          </a>

          {/* Post Feedback */}
          <a
            href="https://forms.gle/29bjdqU2C5Jdb5ZcA"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
          >
            Post Feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
