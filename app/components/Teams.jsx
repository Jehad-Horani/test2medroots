"use client";

import { motion } from "framer-motion";

// أسماء وهمية متنوعة ومميزة
const teams = [
  {
    id: 1,
    teamName: "Attack Team",
    projectName: "PulseCare",
    brief: "A wearable device that monitors heart rate and alerts in emergencies."
  },
  {
    id: 2,
    teamName: "Moh23 Team",
    projectName: "MediLink",
    brief: "A platform connecting patients with nearby medical specialists instantly."
  },
  {
    id: 3,
    teamName: "CodeCrafters",
    projectName: "NeuroNet",
    brief: "AI-driven solution for early detection of neurological disorders."
  },
  {
    id: 4,
    teamName: "FutureHealers",
    projectName: "BreatheEZ",
    brief: "Smart inhaler system for personalized asthma management."
  },
  {
    id: 5,
    teamName: "Team Radiant",
    projectName: "ThermoTrack",
    brief: "Temperature tracking solution for medical storage and transport."
  },
  {
    id: 6,
    teamName: "ByteMedics",
    projectName: "DiagnoAI",
    brief: "AI assistant for supporting doctors in diagnostic decisions."
  },
  {
    id: 7,
    teamName: "SparkStorm",
    projectName: "RehabXR",
    brief: "Rehabilitation experience using VR for stroke patients."
  },
  {
    id: 8,
    teamName: "VitaVerse",
    projectName: "HealthLoop",
    brief: "Gamified app encouraging consistent health habits for teens."
  },
  {
    id: 9,
    teamName: "CyberClinic",
    projectName: "SafeDose",
    brief: "Tool to prevent medication overdose with dosage alerts."
  },
  {
    id: 10,
    teamName: "AlphaDocs",
    projectName: "SkinScan",
    brief: "Mobile tool that identifies skin conditions using ML."
  },
    {
    id: 11,
    teamName: "AlphaDocs",
    projectName: "SkinScan",
    brief: "Mobile tool that identifies skin conditions using ML."
  },
    {
    id: 12,
    teamName: "AlphaDocs",
    projectName: "SkinScan",
    brief: "Mobile tool that identifies skin conditions using ML."
  },
  
  // ... أكمل بنفس النمط حتى الفريق رقم 25
];

export default function SparkTeamsSection() {
  return (
    <section
      id="spark-teams"
      className="w-full px-6 py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white text-center overflow-hidden"
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
            className="bg-gray-800 rounded-2xl py-6 px-5 text-left shadow-lg hover:shadow-amber-500/20 transition duration-300"
          >
            <h3 className="text-xl font-bold text-red-600 mb-1">
              {team.teamName}
            </h3>
            <h4 className="text-lg font-semibold text-white mb-2">
              {team.projectName}
            </h4>
            <p className="text-gray-300 text-sm">{team.brief}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
