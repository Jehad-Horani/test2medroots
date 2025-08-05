"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// بيانات الفرق (مؤقتًا مع لوجو موحد، يمكن تغييره لكل تيم)
const teams = [
  {
    id: 1,
    teamName: "Biliary Bytes",
    logo: "/teams/Biliary Bytes.png",
    brief: "AI system predicts invasions in hepatobiliary cancers using clinical, demographic, and genetic data, aiding doctors in treatment decisions."
  },
  {
    id: 2,
    teamName: "HelixIQ",
    logo: "/teams/HelixIQ.jpg",
    brief: "Personalized Medicine using artificial intelligence to tailor medicaltreatments to an individual’s genetic makeup, lifestyle, and healthdata for improved outcomes."
  },
  {
    id: 3,
    teamName: "NeuroPulse",
    logo: "/teams/NeuroPuls Team.png",
    brief: "An electronic system aimed at creating harmony between current technological advancements and the field of psychiatry."
  },
  {
    id: 4,
    teamName: "Quantara",
    logo: "/teams/Quantara.png",
    brief: "A wearable device that alerts back pain patients to incorrect posture using motion sensors and vibration"
  },
  {
    id: 5,
    teamName: "Triple E",
    logo: "/teams/Triple E.jpg",
    brief: "smart drone system for urban emergencies, using thermal imaging, CO₂ sensors, and UWB radar to detect humans in disaster zones."
  },
  {
    id: 6,
    teamName: "Auto mind",
    logo: "/teams/auto mind logo.jpg",
    brief: "An interactive AI agent that helps manage the user's physical and mental health through smart conversations and health data analysis."
  },
  {
    id: 7,
    teamName: "EEG-ASD",
    logo: "/teams/EEG-ASD.jpg",
    brief: "Functional & Spectral Analysis of EEG Signals in Children for Early Autism Detection Using Deep Learning,” analyzes EEG data from children under 12 to identify Autism Spectrum Disorder"
  },
  {
    id: 8,
    teamName: "AUTISCAN",
    logo: "/teams/AUTISCAN.png",
    brief: "A system designed to assist in the early detection of Autism Spectrum Disorder using behavioral and developmental data."
  },
  {
    id: 9,
    teamName: "Smart Tashkhees",
    logo: "/teams/Smart Tashkhes.png",
    brief: "A smart system using machine learning to assess chronic disease risk from lifestyle data, with personalized tips and interactive tracking."
  },
  {
    id: 10,
    teamName: "MediTrack",
    logo: "/teams/MediTrack .png",
    brief: "sustainable healthcare solutions in low-income regions. aim to simplify and enhance the maintenance management of medical equipment."
  },
  {
    id: 11,
    teamName: "Snobar",
    logo: "/teams/Snobar team1.png",
    brief: "AI platform that replaces toxic paper receipts with safe digital ones, protecting health and reducing paper waste while promoting transparent spending and sustainability."
  }, 
  {
    id: 12,
    teamName: "tmp",
    logo: "/teams/tmp.png",
    brief: "Automated intracranial hemorrhage (ICH) detection in CT scans through deep learning models."
  }, 
  {
    id: 13,
    teamName: "A-EYE",
    logo: "/teams/A-Eye .jpg",
    brief: "A model that classifies 8 eye disease conditions by being trained on a pre-existing medical dataset."
  },
  {
    id: 14,
    teamName: "InsightRay",
    logo: "/teams/TechPulse team -InsightRay.jpeg",
    brief: "An AI-powered system that diagnoses lung and heart diseases, identifies their causes, and suggests treatment plans with personalized psychological support."
  },
  {
    id: 15,
    teamName: "Smart Clinic",
    logo: "/teams/SMART CLINIC..png",
    brief: "Smart Clinic is an intelligent application that integrates AI with healthcare to monitor heart disease, blood pressure, and diabetes, providing early alerts and diagnostics to improve patients’ quality of life."
  },
  {
    id: 16,
    teamName: "Sukoon",
    logo: "/teams/SukoonLOGO.png",
    brief: "An AI-powered platform that uses communication technologies to help individuals express their emotions and receive personalized psychological support in a safe, intelligent, and accessible way."
  },
  {
    id: 17,
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
