"use client";

import { useEffect, useRef, useMemo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);

const day1Events = [
    { time: "9:00 am - 10:00 am", title: "Registration & Check-in" },
    { time: "10:00 am - 11:00 am", title: "Opening Ceremony" },
    { time: "11:00 am - 11:30 am", title: "Coffee Break" },
    { time: "11:30 am - 1:00 pm", title: "Keynote Speech 1" },
    { time: "1:00 pm - 2:00 pm", title: "Workshop 1" },
    { time: "2:00 pm - 3:00 pm", title: "Lunch" },
    { time: "3:00 pm - 4:00 pm", title: "Workshop 2" },
    { time: "4:00 pm - 4:30 pm", title: "Coffee Break" },
    { time: "4:30 pm - 5:30 pm", title: "VIP Workshop 1" },
    { time: "4:30 pm - 7:00 pm", title: "Expo & Gallery" },
];

export default function Day1Timeline() {
    const lines = useMemo(() => {
        return Array.from({ length: 10 }, () => ({
            x1: `${Math.random() * 100}%`,
            x2: `${Math.random() * 100}%`,
        }));
    }, []);

    const stars = useMemo(() => {
        return Array.from({ length: 40 }, () => ({
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

        // حساب العرض الكامل للـ timeline
        const timelineWidth = timeline.scrollWidth;
        const viewportWidth = window.innerWidth;

        // إجمالي المسافة اللي بدنا نسحبها (عرض timeline ناقص عرض الشاشة)
        const scrollDistance = timelineWidth - viewportWidth + 100;

        // ضبط حجم الحاوية ليكون طولها يساوي مسافة السحب لعمل سكروول عمودي
        if (window.innerWidth <= 768) {
            // موبايل
            container.style.height = `${timelineWidth - 2620}px`;
        } else {
            // ديسكتوب
            container.style.height = `${timelineWidth - 3120}px`;
        }
        // تحريك الـ timeline أفقيًا مع السكروول العمودي
        gsap.to(timeline, {
            x: -scrollDistance,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top ",
                end: () => `+=${timelineWidth}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                
            },
        });

        // تأثير ظهور النقاط والأحداث تدريجيًا
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
                        start: "top center+=300",
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
            className="relative w-full h-fit  overflow-hidden bg-gray-950 text-white text-center"
            style={{
                fontFamily: "'sans', sans-serif",
                background: "radial-gradient(ellipse at center, #111827 0%, #0f172a 100%)",
            }}
        >
            <svg
                className="absolute top-0 left-0 w-full  opacity-10 z-0 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00ffcc" />
                        <stop offset="100%" stopColor="#196B40" />
                    </linearGradient>
                </defs>

                {lines.map((line, i) => (
                    <line
                        key={`line-${i}`}
                        x1={line.x1}
                        y1="0"
                        x2={line.x2}
                        y2="100%"
                        stroke="url(#lineGradient)"
                        strokeWidth="0.5"
                        strokeDasharray="5 10"
                    />
                ))}

                {stars.map((star, i) => (
                    <circle
                        key={`star-${i}`}
                        cx={star.cx}
                        cy={star.cy}
                        r="1.5"
                        fill="#00ffcc"
                    />
                ))}
            </svg>
            <div className="absolute w-96 h-2 rounded-full bg-[#196B40] opacity-5 blur-3xl animate-pulse -z-10 top-[30%] left-[40%]" />

            <div className="mt-42 max-md:mt-22"></div>

            <h1 style={{ fontFamily: "'Interceptor', sans-serif" }}
                className="text-7xl max-md:text-6xl max-md:m-2  pb-12 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-white to-[#196B40] tracking-wider mb-4">
                Conference Agenda
            </h1>

            <h2 style={{ fontFamily: "'Interceptor', sans-serif" }}
                className="text-center text-6xl max-md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#196B40] via-white to-[#BE1E2D] to-75% from-25% tracking-wide my-16 drop-shadow-lg">
                Day 1 — Sun, 14th Sep.
            </h2>


            <div
                ref={timelineRef}
                className="flex gap-50 pl-50 max-md:gap-20 px-12 items-center"
                style={{ whiteSpace: "nowrap", willChange: "transform" }}
            >
                {/* الخط الأخضر الأساسي */}
                <div className="absolute ml-82 top-1/7  left-0 w-[3590px] max-md:w-[2400px] max-sm:w-[2000px] h-2 bg-[#196B40] -translate-y-1/2 z-0 rounded" />

                {day1Events.map((event, i) => (
                    <div
                        key={i}
                        ref={addEventRef}
                        className="relative z-10 inline-block w-60"
                        style={{ textAlign: "center" }}
                    >
                        {/* النقطة الحمراء */}
                        <div className="mx-auto mb-4 w-7 h-7 rounded-full bg-[#BE1E2D] shadow-[0_0_10px_#BE1E2D]" />
                        {/* الوقت */}
                        <p className="text-md max-md:text-sm text-gray-400">{event.time}</p>
                        {/* العنوان */}
                        <p className="mt-1 text-3xl max-md:text-xl font-semibold">{event.title}</p>
                    </div>
                ))}

            </div>
            <div className="h-90"></div>

        </section>
    );
}
