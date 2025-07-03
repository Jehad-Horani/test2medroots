"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const day3Events = [
  { time: "8:00 am", title: "Departure from Hotel" },
  { time: "10:30 am", title: "Arrive at Wadi Rum" },
  { time: "11:00 am", title: "Desert Jeep Tour" },
  { time: "1:00 pm", title: "Traditional Bedouin Lunch" },
  { time: "2:00 pm", title: "Drive to Petra" },
  { time: "3:30 pm", title: "Explore Petra Archaeological Site" },
  { time: "6:30 pm", title: "Sunset & Return" },
  { time: "8:30 pm", title: "Dinner & Closing Reflections" },
];

export default function Day3Timeline() {
  const lines = useMemo(() => {
    return Array.from({ length: 8 }, () => ({
      x1: `${Math.random() * 100}%`,
      x2: `${Math.random() * 100}%`,
    }));
  }, []);

  const stars = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      cx: `${Math.random() * 100}%`,
      cy: `${Math.random() * 100}%`,
    }));
  }, []);

  const containerRef = useRef(null);
  const timelineRef = useRef(null);
  const eventsRef = useRef([]);
  eventsRef.current = [];

  const addEventRef = (el) => {
    if (el && !eventsRef.current.includes(el)) {
      eventsRef.current.push(el);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    const timeline = timelineRef.current;
    const events = eventsRef.current;

    const timelineWidth = timeline.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = timelineWidth - viewportWidth + 100;

  if (window.innerWidth <= 768) {
            // موبايل
            container.style.height = `${timelineWidth - 2620}px`;
        } else {
            // ديسكتوب
            container.style.height = `${timelineWidth - 3120}px`;
        }
    gsap.to(timeline, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top",
        end: () => `+=${timelineWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    events.forEach((eventEl, i) => {
      gsap.fromTo(
        eventEl,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          duration: 0.6,
          scrollTrigger: {
            trigger: eventEl,
            start: "top center+=100",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          delay: i * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className=" w-full overflow-hidden text-white text-center"
      style={{
        fontFamily: "'Interceptor', sans-serif",
        background:
          "radial-gradient(ellipse at center, #1e1b18 0%, #0d0c0b 100%)",
      }}
    >
      {/* خلفية خطوط ونجوم */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="desertLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f4a261" />
            <stop offset="100%" stopColor="#e76f51" />
          </linearGradient>
        </defs>
        {lines.map((line, i) => (
          <line
            key={i}
            x1={line.x1}
            y1="0"
            x2={line.x2}
            y2="100%"
            stroke="url(#desertLine)"
            strokeWidth="0.5"
            strokeDasharray="6 8"
          />
        ))}
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.cx}
            cy={star.cy}
            r="1.5"
            fill="#f4a261"
            opacity="0.6"
          />
        ))}
      </svg>

      {/* ألوان خلفية ناعمة */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[#f4a261] opacity-10 blur-[150px] animate-pulse -z-10 top-[50%] left-[10%]" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-[#e76f51] opacity-10 blur-[100px] animate-pulse -z-10 top-[70%] left-[60%]" />

      {/* عنوان اليوم */}
      <div className="mt-32 mb-22">
        <h2 className="text-6xl max-md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#e76f51] via-[#f4a261] to-[#f1faee] tracking-wide drop-shadow-lg">
          Day 3 — Wadi Rum & Petra Adventure
        </h2>
      </div>

      {/* التايملاين */}
      <div
        ref={timelineRef}
        className="flex font-sans gap-52 px-12 items-center"
        style={{ whiteSpace: "nowrap", willChange: "transform" }}
      >
        <div className="absolute top-1/7 ml-40 left-0 w-[2990px] max-sm:w-[2800px] max-md:w-[3100px] h-2 bg-[#f4a261] -translate-y-1/2 z-0 rounded" />

        {day3Events.map((event, i) => (
          <div
            key={i}
            ref={addEventRef}
            className="relative z-10 inline-block w-64"
            style={{ textAlign: "center" }}
          >
            <div className="mx-auto mb-4 w-7 h-7 rounded-full bg-[#e76f51] shadow-[0_0_10px_#e76f51]" />
            <p className="text-sm text-[#f1faee]">{event.time}</p>
            <p className="mt-1 text-2xl  max-md:text-xl font-bold text-white">{event.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
