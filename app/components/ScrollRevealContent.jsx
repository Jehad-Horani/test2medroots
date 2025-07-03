"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function ScrollRevealContent() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    const q = gsap.utils.selector(container);
    const elements = q("p, li");

    const triggers = [];

    elements.forEach((el) => {
      const full = el.dataset.fulltext;
      el.textContent = "";

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 40%",
          scrub: true,
        },
      });

      tl.to(el, {
        text: full,
        ease: "none",
        duration: full.length * 0.06,
      });

      triggers.push(tl.scrollTrigger);
    });

    return () => {
      triggers.forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* SVG خلفي شبكي */}
      <div className="absolute inset-0 z-0">
        <svg
          viewBox="0 0 1000 500"
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 250 Q250 100 500 250 T1000 250"
            stroke="#00ffcc"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
          <path
            d="M0 300 Q250 150 500 300 T1000 300"
            stroke="#196B40"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="8 12"
          />
        </svg>
      </div>

      {/* النصوص */}
      <div
        ref={sectionRef}
        className="relative z-10 font-sans text-xl text-white px-4 max-w-7xl mx-auto space-y-5 leading-relaxed"
      >
        <div className="relative border-l-4 pl-4">
          <p data-fulltext="MedRoots Summit 25 is an international IEEE SIGHT Conference held for the first time in Jordan. It highlights the country's growing role in technology, biomedical engineering, and sustainability across the MENA region."></p>
        </div>

        <div className="relative border-l-4 pl-4">
          <p data-fulltext="Under the theme “Empowering the Future through Environmental Development, EcoGenomics, AI, Innovation, Medical Fields, and Engineering”."></p>
        </div>

        <p className="font-semibold text-[#ffffffcc]" data-fulltext="The event includes:"></p>
        <ul className="list-disc list-inside ml-6 text-white/90 space-y-2">
          <li data-fulltext="Workshops and keynote speeches"></li>
          <li data-fulltext="Panel discussions and innovation challenges"></li>
          <li data-fulltext="Exhibitions on AI, environment, and healthcare"></li>
        </ul>

        <div className="relative border-l-4 pl-4">
          <p data-fulltext="MedRoots 25 marks a turning point in Jordan’s biomedical engineering journey, driving research, youth innovation, and regional leadership in science and technology."></p>
        </div>
      </div>
    </div>
  );
}
