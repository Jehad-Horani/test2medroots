"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const days = [
  {
    title: "Day 1 — Sat, 13th Sep.",
    events: [
      { time: "9:00 am - 10:00 am", title: "Registration & Check-in" },
      { time: "10:00 am - 11:00 am", title: "Opening Ceremony" },
      { time: "11:00 am - 11:30 am", title: "Coffee Break" },
      { time: "11:30 am - 12:30 pm", title: "Keynote Speech (1)" },
      { time: "12:30 pm - 1:15 pm", title: "Workshop 1" },
      { time: "1:15 pm - 2:15 pm", title: "Lunch" },
      { time: "2:15 pm - 3:00 pm", title: "Workshop 2" },
      { time: "3:00 pm - 3:30 pm", title: "Coffee Break" },
      { time: "3:30 pm - 5:30 pm", title: "VIP Workshop 1" },
      { time: "3:30 pm - 6:00 pm", title: "Expo & Gallery" },
    ],
    lineWidth: 3400,
    lineColor: "#196B40",         // أخضر داكن
    pointColor: "#BE1E2D",        // أحمر للنقاط
    titleGradient: "from-[#BE1E2D] via-white to-[#196B40]",
  },
  {
    title: "Day 2 — Sun, 14th Sep.",
    events: [
      { time: "9:00 am - 10:00 am", title: "Keynote speech (2)" },
      { time: "10:00 am - 10:30 am", title: "Coffee Break" },
      { time: "10:30 am - 11:30 pm", title: "Keynote speech (3)" },
      { time: "11:30 pm - 12:15 pm", title: "Panel Discussion" },
      { time: "12:15 pm - 1:15 pm", title: "Lunch" },
      { time: "1:15 pm - 2:45 pm", title: "Competition" },
      { time: "2:45 pm - 3:30 pm", title: "VIP Workshop 2" },
      { time: "2:45 pm - 3:30 pm", title: "Competition Expo" },
      { time: "3:30 pm - 4:00 pm", title: "Coffee Break" },
      { time: "4:00 pm - 5:00 pm", title: "Closing Ceremony" },
      { time: "8:30 pm - 11:30 pm", title: "Gala Dinner" },
    ],
    lineWidth: 3800,
    lineColor: "#196B40",         // أخضر داكن
    pointColor: "#BE1E2D",        // أحمر للنقاط
    titleGradient: "from-[#BE1E2D] via-white to-[#196B40]",
  },
  {
    title: "Day 3 — Wadi Rum & Petra Adventure",
    events: [
      { time: "8:00 am", title: "Departure from Hotel" },
      { time: "10:30 am", title: "Arrive at Wadi Rum" },
      { time: "11:00 am", title: "Desert Jeep Tour" },
      { time: "1:00 pm", title: "Traditional Bedouin Lunch" },
      { time: "2:00 pm", title: "Drive to Petra" },
      { time: "3:30 pm", title: "Explore Petra Archaeological Site" },
      { time: "6:30 pm", title: "Sunset & Return" },
      { time: "8:30 pm", title: "Dinner & Closing Reflections" },
    ],
    lineWidth: 3050,
    lineColor: "#e76f51",         // برتقالي صحراوي
    pointColor: "#f4a261",        // أصفر صحراوي للنقاط
    titleGradient: "from-[#e76f51] via-[#f4a261] to-[#f1faee]",
  },
];

export default function CombinedTimeline() {
  const containerRefs = useRef([]);
  containerRefs.current = [];

  const addContainerRef = (el) => {
    if (el && !containerRefs.current.includes(el)) containerRefs.current.push(el);
  };

  useEffect(() => {
    containerRefs.current.forEach((container) => {
      const timeline = container.querySelector(".timeline");
      const events = container.querySelectorAll(".event");

      const timelineWidth = timeline.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = timelineWidth - viewportWidth + 100;

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
              start: "top 35%",
              end: "top 65%",
              toggleActions: "play none none reverse",
            },
            stagger: true,
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);


  return (
    <section id="agenda" className="bg-gray-900 max-md:hidden text-white overflow-hidden">
      <h1
        style={{ fontFamily: "'Interceptor', sans-serif" }}
        className="text-7xl max-md:text-6xl max-md:m-2 px-10 pt-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-white to-[#196B40] tracking-wider mb-4 text-center"
      >
        Conference Agenda
      </h1>
      {days.map((day, dayIndex) => (
        <div
          key={dayIndex}
          ref={addContainerRef}
          className="relative w-full h-screen mb-20 text-center"
          style={{
            fontFamily: "'Interceptor', sans-serif",
            background:
              "radial-gradient(ellipse at center, #111827 0%, #0f172a 100%)",
          }}
        >
          <h1
            style={{ fontFamily: "'Interceptor', sans-serif" }}
            className="text-7xl max-md:text-6xl max-md:m-2 pb-12 px-10 pt-5 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-white to-[#196B40] tracking-wider mb-4 text-center"
          >

          </h1>
          <h2
            className={`text-6xl max-md:text-5xl font-bold mb-16 pt-32 bg-clip-text text-transparent drop-shadow-lg bg-gradient-to-r ${day.titleGradient}`}
          >
            {day.title}
          </h2>

          <div
            className="timeline flex gap-48 max-md:gap-20 px-16 items-center whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
            <div
              className="absolute top-1/7 left-0 h-2 -translate-y-1/2 rounded"
              style={{ width: day.lineWidth, backgroundColor: day.lineColor }}
            />

            {day.events.map((event, i) => (
              <div
                key={i}
                className="event font-sans relative inline-block w-64"
                style={{ textAlign: "center" }}
              >
                <div
                  className="mx-auto mb-4 w-7 h-7 rounded-full shadow-[0_0_10px]"
                  style={{
                    backgroundColor: day.pointColor,
                    boxShadow: `0 0 10px ${day.pointColor}`,
                  }}
                />
                <p className="text-sm text-gray-300">{event.time}</p>
                <p className="mt-1 text-2xl max-md:text-xl font-bold">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
