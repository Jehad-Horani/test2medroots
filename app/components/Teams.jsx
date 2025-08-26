"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// بيانات الفرق (مؤقتًا مع لوجو موحد، يمكن تغييره لكل تيم)
const teams = [
  {
    id: 1,
    teamName: "HelixIQ",
    logo: "/teams/HelixIQ.jpg",
    brief: "Personalized Medicine using artificial intelligence to tailor medicaltreatments to an individual’s genetic makeup, lifestyle, and healthdata for improved outcomes."
  },
  {
    id: 2,
    teamName: "Triple E",
    logo: "/teams/Triple E.jpg",
    brief: "smart drone system for urban emergencies, using thermal imaging, CO₂ sensors, and UWB radar to detect humans in disaster zones."
  },
  {
    id: 3,
    teamName: "AUTISCAN",
    logo: "/teams/AUTISCAN.png",
    brief: "A system designed to assist in the early detection of Autism Spectrum Disorder using behavioral and developmental data."
  },

  {
    id: 4,
    teamName: "MediTrack",
    logo: "/teams/MediTrack .png",
    brief: "sustainable healthcare solutions in low-income regions. aim to simplify and enhance the maintenance management of medical equipment."
  },
  {
    id: 5,
    teamName: "Snobar",
    logo: "/teams/Snobar team1.png",
    brief: "AI platform that replaces toxic paper receipts with safe digital ones, protecting health and reducing paper waste while promoting transparent spending and sustainability."
  },
  {
    id: 6,
    teamName: "VRSBL",
    logo: "/teams/VRSBL1.png",
    brief: "A device for treating stuttering and speech disfluency in children."
  },
];

export default function SparkTeamsSection() {
  return (
    <section
      id="spark-teams"
      className="w-full px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-8  00 to-gray-950 text-white text-center overflow-hidden"
    >
      <h2 className="text-5xl max-md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6f61] via-white to-[#00bcd4] drop-shadow mb-4">
        Spark Competition Teams
      </h2>
      <p className="text-gray-400 mb-12 max-w-xl mx-auto">
        Meet the innovative minds shaping the future — 25 powerful teams, one spark.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
        {teams.map((team, idx) => (
          <motion.div
            key={team.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.02 }}
            className="bg-gray-800 rounded-2xl py-6 px-4 text-center shadow-lg hover:shadow-amber-500/20 transition duration-300"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Image
                src={team.logo}
                alt={team.teamName}
                width={100}
                height={100}
                className="rounded-full object-cover border-2 border-white"
              />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{team.teamName}</h3>
            <p className="text-gray-300 text-sm">{team.brief}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
