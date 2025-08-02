"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaCheck, FaCrown, FaUserGraduate } from "react-icons/fa";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function TicketSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    gsap.fromTo(
      el.querySelectorAll(".ticket"),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  const standardFeatures = [
    "Attending First Two Days",
    "Lunch: Open Buffet & Coffee Break",
    "Sessions and Workshops",
    "Notarized Certificate",
    "Transportation",
  ];

  const vipFeatures = [
    "VIP Sessions & Exclusive Workshops",
    "Full 3-Day Access",
    "Gala Dinner & Field Trip",
    "Private Lunch Area",
  ];

  const TicketCard = ({
    title,
    price,
    features,
    icon,
    bg,
    border,
    isIeee,
    badgeColor,
    link
  }) => (
    <div
      className={`ticket flex flex-col h-full rounded-3xl p-6 md:p-8 w-full max-w-sm shadow-2xl backdrop-blur-md ${bg} ${border} relative overflow-hidden transition-all duration-300 hover:scale-[1.02]`}
    >
      {/* Badge Icon */}
      <div className="absolute top-4 right-4 text-white text-2xl opacity-20">
        {icon}
      </div>

      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        {isIeee && (
          <p
            className={`text-sm font-medium mb-2 text-[${badgeColor}] flex items-center gap-2`}
          >
            <FaUserGraduate />
            IEEE Member Discount Applied
          </p>
        )}
      </div>

      {/* Features */}
      <ul className="text-white space-y-2 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <FaCheck className="text-green-400 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Footer (Price + Button) */}
      <div className="pt-4 mt-auto">
        <p className="text-lg font-semibold text-white text-center mb-2">
          {price} <span className="text-sm text-gray-300">JOD</span>
        </p>

       <Link href={link}>
          <button className="w-full cursor-pointer py-3 px-6 rounded-xl bg-gradient-to-r from-green-500 to-green-700 text-white font-bold hover:scale-105 transition-transform">
            Buy Now
          </button>
       </Link>
       
      </div>
    </div>
  );

  return (
    <section
      id="TICKETS"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b overflow-hidden z-50 mx-10 from-gray-900 to-gray-950rounded-3xl text-white flex flex-col items-center"
    >
      <h1 className="text-5xl font-extrabold mb-16 text-center">
        🎟️ Choose Your Ticket
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12">
        <TicketCard
          title="STANDARD Ticket"
          price={45}
          features={standardFeatures}
          icon={<FaCheck />}
          bg="bg-[#1a1a1a]"
          border="border border-white/10"
          isIeee={false}
          badgeColor="#b99128"
          link="https://registration-form-with-db.vercel.app/register/non-member"
        />
        <TicketCard
          title="STANDARD Ticket (IEEE)"
          price={35}
          features={standardFeatures}
          icon={<FaCheck />}
          bg="bg-[#1a1a1a]"
          border="border border-green-500"
          isIeee={true}
          badgeColor="#00ffcc"
          link="https://registration-form-with-db.vercel.app/register/ieee"

        />
        <TicketCard
          title="VIP Ticket"
          price={95}
          features={vipFeatures}
          icon={<FaCrown />}
          bg="bg-gradient-to-br from-[#40320c] to-[#2e2305]"
          border="border border-[#b99128]"
          isIeee={false}
          badgeColor="#b99128"
          link="https://registration-form-with-db.vercel.app/register/non-member"

        />
        <TicketCard
          title="VIP Ticket (IEEE)"
          price={75}
          features={vipFeatures}
          icon={<FaCrown />}
          bg="bg-gradient-to-br from-[#40320c] to-[#2e2305]"
          border="border border-green-500"
          isIeee={true}
          badgeColor="#00ffcc"
          link="https://registration-form-with-db.vercel.app/register/ieee"

        />
      </div>
    </section>
  );
}
