"use client";
import { useEffect, useState } from "react";

const sections = [
    { id: "home", label: "Home" },
    { id: "story", label: "Story" },
    { id: "agenda", label: "Agenda" },
    { id: "TICKETS", label: "Tickets" },
    { id: "faq", label: "FAQ" },
    { id: "footer", label: "Contact" },
];

export default function ScrollSpy() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 250;

            for (let sec of sections) {
                const el = document.getElementById(sec.id);
                if (el && scrollPosition >= el.offsetTop) {
                    setActiveSection(sec.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-1/4 left-6 z-50 flex flex-col items-center space-y-6">
            {sections.map((sec, i) => (
                <div key={sec.id} className="flex flex-col items-center">
                    {/* الدائرة + الاسم */}
                    <a href={`#${sec.id}`} className="flex items-center gap-3 group">
                        <div
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${activeSection === sec.id
                                    ? "bg-[#BE1E2D] scale-125 shadow-[0_0_8px_#BE1E2D]"
                                    : "bg-gray-500 group-hover:bg-[#00ffcc]"
                                }`}
                        ></div>
                        <span
                            className={`text-sm text-white transition-opacity duration-300 ${activeSection === sec.id ? "opacity-100" : "opacity-60"
                                }`}
                        >
                            {sec.label}
                        </span>
                    </a>

                    {/* الخط السفلي إلا في آخر دائرة */}
                    {i !== sections.length - 1 && (
                        <div className="w-[2px] h-10 bg-gray-600 my-1" />
                    )}
                </div>
            ))}
        </div>
    );
}
