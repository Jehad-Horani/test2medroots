"use client";

import Image from "next/image";
import { FaUserSecret } from "react-icons/fa";

const speakers = [
  {
    type: "Keynote Speech",
    role: "Keynote Speaker",
    name: "Jehad Horani",
    specialization: "Innovation & AI",
    image: "/speakers/jehad.png"
  },
  {
    type: "Keynote Speech",
    role: "Keynote Speaker",
    name: "Jehad Horani",
    specialization: "Biomedical Engineering",
    image: "/speakers/jehad.png"
  },
  {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Sustainable Health Tech",
    image: "/speakers/jehad.png"
  },
  {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Global Medical Access",
    image: "/speakers/jehad.png"
  },
   {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Global Medical Access",
    image: "/speakers/jehad.png"
  },
   {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Global Medical Access",
    image: "/speakers/jehad.png"
  },
   {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Global Medical Access",
    image: "/speakers/jehad.png"
  },
  {
    type: "Panel Discussion",
    role: "Panelist",
    name: "Jehad Horani",
    specialization: "Smart Diagnostics",
    image: "/speakers/jehad.png"
  }
];

export default function SpeakersSection() {
  return (
    <section
      className="w-full px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white text-center relative overflow-hidden"
      id="speakers"
      style={{ fontFamily: "'Interceptor', sans-serif" }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bgGrid" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#196B40" />
              <stop offset="100%" stopColor="#BE1E2D" />
            </linearGradient>
          </defs>
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#bgGrid)" strokeWidth="0.5" strokeDasharray="5 10" />
        </svg>
      </div>

      <h2 className="text-6xl font-extrabold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#196B40] via-white to-[#BE1E2D] drop-shadow-lg">
        Featured Speakers
      </h2>

      <div className="flex flex-wrap justify-center gap-12">
        {speakers.map((spk, index) => (
          <div
            key={index}
            className="w-[260px] h-[350px] rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/80 p-5 shadow-[0_4px_20px_rgba(255,255,255,0.05)] hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out relative overflow-hidden"
          >
            <div className="w-full h-48 flex items-center justify-center mb-4">
              <Image
                src={spk.image}
                alt="Speaker"
                width={170}
                height={170}
                className=" object-cover "
              />
            </div>
            <h3 className="text-xl font-bold tracking-wide text-white drop-shadow-sm mb-1">{spk.name}</h3>
            <p className="text-sm text-[#e0e0e0] italic mb-1">{spk.specialization}</p>
            <p className="text-sm font-semibold text-gray-200 mb-1">{spk.role}</p>
            <p className="text-xs text-gray-400 italic">{spk.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
