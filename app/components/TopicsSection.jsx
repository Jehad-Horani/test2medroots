"use client";

import { FaHeartbeat, FaMicroscope, FaRocket } from "react-icons/fa";

const topicsData = [
  {
    groupTitle: "Medical Technologies for SDGs",
    icon: <FaHeartbeat className="text-[#e76f51] w-12 h-12 mb-4" />,
    topics: [
      "The Future of Sustainable Medical Technologies – Biodegradable and Eco-Friendly Innovations",
      "Entrepreneurship in Medical Technology: From Idea to Impact",
      "Biomedical Engineering & Ethics: Designing a Sustainable Future",
    ],
  },
  {
    groupTitle: "BME Solutions for Global Health Challenges",
    icon: <FaMicroscope className="text-[#196B40] w-12 h-12 mb-4" />,
    topics: [
      "Breaking Barriers: Making Medical Innovation Accessible in Low-Resource Settings",
      "Lab-on-a-Chip: Revolutionizing Diagnostics, One Drop at a Time",
      "AI-Powered Diagnostics: The Smart Revolution in Healthcare",
    ],
  },
  {
    groupTitle: "Future Prospects",
    icon: <FaRocket className="text-[#00bcd4] w-12 h-12 mb-4" />,
    topics: [
      "Nano Medicine: The Big Impact of the Tiniest Technology",
      "Bioprinting Breakthroughs: Printing the Future of Regenerative Medicine",
      "The Smart Hospital: Where AI, Robotics, and IoT Redefine Healthcare",
    ],
  },
];

export default function TopicsGroup() {
  return (
    <section
      className="w-full px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
      id="topics"
      style={{ fontFamily: "'sans', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-6xl max-md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#e76f51] via-white to-[#00bcd4] drop-shadow-lg">
          Topics to Be Covered
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-3xl mx-auto">
          Dive into cutting-edge discussions that merge technology, sustainability, and healthcare innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {topicsData.map(({ groupTitle, icon, topics }, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-3xl font-extrabold text-white mb-6 drop-shadow-lg">
              {groupTitle}
            </h3>
            <ul className="list-disc list-inside space-y-4 text-left text-lg text-[#c4c4c4] font-semibold leading-relaxed">
              {topics.map((topic, i) => (
                <li
                  key={i}
                  className="hover:text-[#e76f51] cursor-default transition-colors duration-300"
                >
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
