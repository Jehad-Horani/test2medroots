"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const day2Events = [
    { time: "9:00 am - 10:00 am", title: "Workshop 3" },
    { time: "10:00 am - 10:30 am", title: "Coffee Break" },
    { time: "10:30 am - 12:00 am", title: "Keynote speech 2" },
    { time: "12:00 am - 1:30 pm", title: "Panel Discussion" },
    { time: "1:30 pm - 2:30 pm", title: "Lunch" },
    { time: "2:30 pm - 4:00 pm", title: "Competition" },
    { time: "4:00 pm - 5:00 pm", title: "VIP Workshop 2" },
    { time: "4:00 pm - 5:00 pm", title: "Competition Expo" },
    { time: "5:00 am - 5:30 am", title: "Coffee Break" },
    { time: "5:30 pm - 6:30 pm", title: "Closing Ceremony" },
    { time: "8:30 pm - 11:30 pm", title: "Gala Dinner" },
];

export default function Day2Timeline() {
    const lines = useMemo(
        () => Array.from({ length: 10 }, () => ({ x1: `${Math.random() * 100}%`, x2: `${Math.random() * 100}%` })),
        []
    );
    const stars = useMemo(
        () => Array.from({ length: 40 }, () => ({ cx: `${Math.random() * 100}%`, cy: `${Math.random() * 100}%` })),
        []
    );

    const containerRef = useRef(null);
    const timelineRef = useRef(null);
    const eventsRef = useRef([]);
    eventsRef.current = [];

    const addEventRef = (el) => {
        if (el && !eventsRef.current.includes(el)) eventsRef.current.push(el);
    };

    useEffect(() => {
        const container = containerRef.current;
        const timeline = timelineRef.current;
        const events = eventsRef.current;

        const timelineWidth = timeline.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = timelineWidth - viewportWidth + 100;
        container.style.height = `${timelineWidth - 3700}px`;

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
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power2.out",
                    duration: 0.5,
                    scrollTrigger: {
                        trigger: eventEl,
                        start: "top center",
                        end: "top center-=100",
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
            className="relative mb-0 w-full overflow-hidden bg-gray-950 text-white text-center"
            style={{
                fontFamily: "'snas', sans-serif",
                background: "radial-gradient(ellipse at center, #111827 0%, #0f172a 100%)",
            }}
        >
            <svg className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffcc" />
                        <stop offset="100%" stopColor="#196B40" />
                    </linearGradient>
                </defs>
                {lines.map((line, i) => (
                    <line key={`line-${i}`} x1={line.x1} y1="0" x2={line.x2} y2="100%" stroke="url(#lineGradient)" strokeWidth="0.5" strokeDasharray="5 10" />
                ))}
                {stars.map((star, i) => (
                    <circle key={`star-${i}`} cx={star.cx} cy={star.cy} r="1.5" fill="#00ffcc" />
                ))}
            </svg>

            <div className="mt-25"></div>



            <h2         style={{  fontFamily: "'Interceptor', sans-serif"}}
 className="text-center text-6xl max-md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#196B40] via-white to-[#BE1E2D] to-75% from-25% tracking-wide my-16 drop-shadow-lg">
                Day 2 — Mon, 15th Sep.
            </h2>

            <div ref={timelineRef} className="flex gap-50 max-md:gap-30 px-16 mx-20 items-center" style={{ whiteSpace: "nowrap", willChange: "transform" }}>
                <div className="absolute top-1/7 ml-40 left-0 w-[4010px] max-md:w-[3090px] h-2 bg-[#196B40] -translate-y-1/2 z-0 rounded" />
                {day2Events.map((event, i) => (
                    <div key={i} ref={addEventRef} className="relative z-10 inline-block w-60" style={{ textAlign: "center" }}>
                        <div className="mx-auto mb-4 w-7 h-7 rounded-full bg-[#BE1E2D] shadow-[0_0_10px_#BE1E2D]" />
                        <p className="text-md max-md:text-sm text-gray-400">{event.time}</p>
                        <p className="mt-1 text-3xl max-md:text-xl font-semibold">{event.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
