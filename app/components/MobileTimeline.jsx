"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // أيقونة السهم

const days = [
    {
        title: "Day 1 — Sat, 13th Sep.",
        events: [
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
        ],
        pointColor: "#BE1E2D",
        titleGradient: "from-[#BE1E2D] via-white to-[#196B40]",
    },
    {
        title: "Day 2 — Sun, 14th Sep.",
        events: [
            { time: "9:00 am - 10:00 am", title: "Workshop 3" },
            { time: "10:00 am - 10:30 am", title: "Coffee Break" },
            { time: "10:30 am - 12:00 pm", title: "Keynote speech 2" },
            { time: "12:00 pm - 1:30 pm", title: "Panel Discussion" },
            { time: "1:30 pm - 2:30 pm", title: "Lunch" },
            { time: "2:30 pm - 4:00 pm", title: "Competition" },
            { time: "4:00 pm - 5:00 pm", title: "VIP Workshop 2" },
            { time: "4:00 pm - 5:00 pm", title: "Competition Expo" },
            { time: "5:00 pm - 5:30 pm", title: "Coffee Break" },
            { time: "5:30 pm - 6:30 pm", title: "Closing Ceremony" },
            { time: "8:30 pm - 11:30 pm", title: "Gala Dinner" },
        ],
        pointColor: "#BE1E2D",
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
        pointColor: "#f4a261",
        titleGradient: "from-[#e76f51] via-[#f4a261] to-[#f1faee]",
    },
];

export default function MobileTimeline() {
    const [openDayIndex, setOpenDayIndex] = useState(null);

    const toggleDay = (index) => {
        setOpenDayIndex(openDayIndex === index ? null : index);
    };

    return (
        <section id="agenda" className="md:hidden bg-gray-900 text-white py-10">
            <h1
                style={{ fontFamily: "'Interceptor', sans-serif" }}
                className="flex flex-wrap justify-center items-center text-7xl max-md:text-6xl px-10 pt-10 max-md:m-2 pb-12 font-black text-transparent bg-clip-text bg-gradient-to-r from-[#BE1E2D] via-white to-[#196B40] tracking-wider mb-4 text-center"
            >
                Conference Agenda
            </h1>

            <div className="px-4 space-y-6">
                {days.map((day, i) => (
                    <div
                        key={i}
                        className="border border-gray-700 rounded-xl overflow-hidden transition-all duration-1200"
                    >
                        <button
                            onClick={() => toggleDay(i)}
                            className={`w-full px-4 py-4 font-bold text-2xl flex items-center justify-between bg-gradient-to-r ${day.titleGradient} text-transparent bg-clip-text`}
                        >
                            {day.title}
                            <FiChevronDown
                                className={`text-white text-3xl transition-transform duration-500 ${openDayIndex === i ? "rotate-180" : "rotate-0"
                                    }`}
                            />
                        </button>

                        <div
                            className={`transition-all duration-1200 ease-in-out overflow-hidden ${openDayIndex === i ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <div className="bg-gray-800 px-4 py-3 space-y-4">
                                {day.events.map((event, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <div
                                            className="w-4 h-4 mt-1 rounded-full"
                                            style={{ backgroundColor: day.pointColor }}
                                        ></div>
                                        <div>
                                            <p className="text-sm text-gray-300">{event.time}</p>
                                            <p className="text-lg font-semibold text-white">
                                                {event.title}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
