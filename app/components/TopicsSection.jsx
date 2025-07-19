"use client";

import Image from "next/image";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";

const trackData = {
  A: {
    workshop: {
      company: "Comming Soon",
      logo: "/speakers/Q.png",
      title: "Smart Surgical Tools: A Hands-On Experience",
    },
    session: {
      speaker: "Comming Soon",
      image: "/speakers/Q.png",
      title: "Redesigning Emergency Rooms with AI",
    },
  },
  B: {
    workshop: {
      company: "Comming Soon",
      logo: "/speakers/Q.png",
      title: "Predictive Health Analytics in Action",
    },
    session: {
      speaker: "Comming Soon",
      image: "/speakers/Q.png",
      title: "From Code to Care: The Role of Engineers in Medicine",
    },
  },
};

export default function TracksSection() {
  return (
    <section
      id="tracks"
      className="w-full px-6 py-24 bg-gradient-to-b from-black via-gray-900 to-gray-950 text-white relative overflow-hidden"
      style={{ fontFamily: "'sans', sans-serif" }}
    >
      {/* العنوان الرئيسي */}
      <div className="text-center mb-20">
        <h2 className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#00bcd4] via-white to-[#e76f51] drop-shadow-lg">
          Choose Your Path: Track A or Track B
        </h2>
        <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
          Each attendee must select one of the two tracks. Sessions and workshops happen simultaneously — so choose wisely!
        </p>
      </div>

      {/* الشبكة */}
      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto items-center">
        {/* مسار A */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h1 className="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00bcd4] via-white to-[#e76f51] drop-shadow-lg">Track A</h1>
          <TrackCard type="Workshop" data={trackData.A.workshop} />
          <TrackCard type="Session" data={trackData.A.session} />
        </motion.div>

        {/* سهم التحويل */}
        <div className="hidden pt-20 md:flex flex-col items-center justify-center space-y-4">
          <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center animate-bounce">
            <FaArrowRightArrowLeft className="text-white text-2xl" />
          </div>

          <p className="text-sm  text-gray-400">Same Time Swap</p>
        </div>

        {/* مسار B */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
                    <h1 className="text-4xl text-center bg-clip-text text-transparent bg-gradient-to-r from-[#00bcd4] via-white to-[#e76f51] drop-shadow-lg">Track B</h1>

          <TrackCard type="Session" data={trackData.B.session} />
          <TrackCard type="Workshop" data={trackData.B.workshop} />
        </motion.div>
      </div>
    </section>
  );
}

function TrackCard({ type, data }) {
  const isWorkshop = type === "Workshop";

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-[#00bcd4] mb-1 uppercase tracking-wider">{type}</h3>

      <div className="flex items-center flex-col">
        <div className="w-full h-full  overflow-hidden  flex items-center justify-center">
          {isWorkshop ? (
            <Image src={data.logo} alt="Company Logo" width={164} height={164} className="object-contain" />
          ) : (
            <Image src={data.image} alt="Speaker" width={164} height={164} className="object-cover" />
          )}
        </div>
        <div>
          <p className="text-xl font-bold text-white">
            {isWorkshop ? data.company : data.speaker}
          </p>
          <p className="text-md mb-2 text-gray-400">
            {isWorkshop ? "Company" : "Speaker"}
          </p>
        </div>
      </div>

      <p className="text-white text-lg  text-center font-medium">{data.title}</p>
    </div>
  );
}
