"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MedRootsScroll() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const roots25Ref = useRef(null);
    const dnaPathRef = useRef(null);
    const dotsRef = useRef([]);

    useEffect(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        const roots25 = roots25Ref.current;
        const dnaPath = dnaPathRef.current;
        const dots = dotsRef.current;

        const totalWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollDistance = totalWidth + viewportWidth;

        // نبدأ العنصر خارج يمين الشاشة (full width)
        gsap.set(track, { x: viewportWidth, opacity: 1 });

        // حركة النص والـDNA والخلفيات معاً بتزامن تام مع السكروول
        gsap.to(track, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${scrollDistance}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                markers: false,
            },
        });



        // حركة تذبذب بسيطة للنقاط (داخل الحاوية المتحركة)
        dots.forEach((dot, i) => {
            gsap.to(dot, {
                y: 10,
                repeat: -1,
                yoyo: true,
                duration: 1 + (i % 3) * 0.5,
                ease: "sine.inOut",
                delay: i * 0.15,
            });
        });

        // تحريك خطوط DNA (الضربة المتقطعة) بشكل مستمر (داخل الحاوية المتحركة)
        gsap.to(dnaPath, {
            strokeDashoffset: 20000,
            duration: 8,
            ease: "sine.inOut",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: `+=${scrollDistance}`,
                scrub: 1,
            }
        });

        ScrollTrigger.refresh();
    }, []);

    // حفظ refs للنقاط المتوهجة
    const addDotRef = (el) => {
        if (el && !dotsRef.current.includes(el)) {
            dotsRef.current.push(el);
        }
    };

    return (
        <div
            ref={containerRef}
            className="w-full h-screen overflow-hidden relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
            style={{ fontFamily: "'Interceptor', sans-serif" }}
        >
            
            {/* خطوط DNA + نقاط متوهجة داخل نفس الحاوية المتحركة */}
            <svg
                viewBox="0 0 3000 300"
                className="absolute top-1/4 left-0 w-full h-[300px] max-md:h-[450px] opacity-20 pointer-events-none"
                fill="none"
                stroke="#00ffcc"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="20 20"
                ref={dnaPathRef}
            >
                <path d="M0 150 Q500 300 1000 150 T2000 150 T2900 150 T3000 150" />
                <path d="M0 180 Q500 320 1000 180 T2000 180 T2900 180 T3000 180" />
            </svg>


            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    ref={addDotRef}
                    className="absolute w-4 h-4 bg-red-700 rounded-full blur-sm pointer-events-none"
                    style={{
                        top: `${60 + (i % 2) * 20}%`,
                        left: `${10 + i * 7}%`,
                        opacity: 0.3,
                        filter: "drop-shadow(0 0 6px #00fff5)",
                    }}
                />
            ))}
            {[...Array(12)].map((_, i) => (
                <div
                    key={i}
                    ref={addDotRef}
                    className="absolute w-4 h-4 bg-green-400 rounded-full blur-sm pointer-events-none"
                    style={{
                        top: `${10 + (i % 2) * 20}%`,
                        left: `${10 + i * 7}%`,
                        opacity: 0.3,
                        filter: "drop-shadow(0 0 6px #00fff5)",
                    }}
                />
            ))}

            {/* النص والمحتوى المتحرك */}
            <div
                ref={trackRef}
                className="flex h-full items-center z-10 relative gap-10 max-sm:gap-96"
                style={{ willChange: "transform" }}
            >
                <section className="flex-shrink-0 w-screen h-full flex flex-col items-center justify-center">
                    <h1 className="text-[15vw] max-md:text-[35vw] font-bold leading-none mb-4 whitespace-nowrap">
                        What is
                    </h1>
                </section>

                <section className="flex-shrink-0 w-screen h-full gap-10 flex flex-col items-center justify-center">
                    <h1 className="text-[15vw] max-md:text-[35vw] font-extrabold font-serif leading-none text-center flex flex-row items-center justify-center">
                        <span className="text-[#BE1E2D] drop-shadow-[0_0_10px_#BE1E2D]">Med</span>
                        <span
                            ref={roots25Ref}
                            className="text-[#196B40] pl-15 relative inline-block transition-transform duration-300 drop-shadow-[0_0_10px_#196B40]"
                        >
                            Roots<sub className="text-[#BE1E2D] text-[8vw] max-md:text-[19vw] align-sub ml-1">25</sub>?
                        </span>
                    </h1>
                </section>
            </div>
        </div>
    );
}
