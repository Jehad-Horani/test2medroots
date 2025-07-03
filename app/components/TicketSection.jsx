"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheckCircle } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function TicketSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const standardStyle =
    "bg-gradient-to-br from-[#0F1D17]/60 to-[#1A342A]/30 backdrop-blur-xl border border-green-500/10 shadow-[0_0_20px_#1DB37C]/20 rounded-[25px] p-8 text-white w-full md:w-[480px] hover:scale-[1.05] hover:shadow-[0_0_50px_#1DB37C] transition-all duration-500 group";

  const vipStyle =
    "bg-gradient-to-br from-yellow-800/40 to-yellow-600/20 backdrop-blur-xl border border-yellow-400/30 shadow-[0_0_30px_gold]/40 rounded-[30px] p-8 text-white w-full md:w-[480px] hover:scale-[1.05] hover:shadow-[0_0_60px_gold] transition-all duration-500 group";

  const buttonStyle =
    "mt-6 inline-block px-6 py-3 text-lg font-bold rounded-xl bg-gradient-to-r from-[#BE1E2D] to-[#196B40] text-white hover:brightness-110 shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300";

  const Feature = ({ text }) => (
    <li className="flex items-start gap-2">
      <FaCheckCircle className="text-green-400 mt-1" />
      <span>{text}</span>
    </li>
  );

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-6 md:px-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 flex flex-col items-center justify-center gap-16"
    >
      <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-8">
        Get Your Ticket 🎟️
      </h2>

      <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-center">
        {/* STANDARD Ticket */}
        <div className={standardStyle}>
          <h3 className="text-5xl font-bold mb-4 text-[#1DB37C]">STANDARD</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <Feature text="Attending First Two Days" />
            <Feature text="Lunch: open buffet and Coffee Break" />
            <Feature text="Sessions and Workshops" />
            <Feature text="Notarized Certificate" />
            <Feature text="Transportation" />
            <Feature text="Accommodation: +90/night (double) or +80/night (single)" />
          </ul>
          <p className="mt-6 text-xl font-bold text-green-400">Price: 60 JOD</p>
          <p className="text-sm text-yellow-400 mt-1">
            IEEE Members get 10 JOD discount!
          </p>
          <button className={buttonStyle}>Buy Now</button>
        </div>

        {/* VIP Ticket */}
        <div className={vipStyle}>
          <h3 className="text-5xl font-bold mb-4 text-yellow-400">VIP</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <Feature text="VIP Sessions with exclusive workshops & speaker interaction" />
            <Feature text="Full 3-Day Access" />
            <Feature text="Gala Dinner & Field Trip" />
            <Feature text="Private Lunch Area" />
            <Feature text="Accommodation: +90/night (double) or +80/night (single)" />
          </ul>
          <p className="mt-6 text-xl font-bold text-yellow-300">Price: 90 JOD</p>
          <p className="text-sm text-yellow-200 mt-1">
            IEEE Members get 10 JOD discount!
          </p>
          <button className={buttonStyle}>Buy Now</button>
        </div>
      </div>
    </section>
  );
}
