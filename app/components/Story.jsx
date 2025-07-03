"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import styles from "./Story.module.css";
import Image from "next/image";
import ScrollRevealContent from "./ScrollRevealContent";
import MedRootsScroll from "./MedRootsScroll";
import { useMemo } from "react";



gsap.registerPlugin(ScrollTrigger);

export default function StorySec() {

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

    useEffect(() => {
        const rows = document.querySelectorAll(`.${styles.row}`);




        rows.forEach((row) => {
            const cardLeft = row.querySelector(`.${styles.card1}`);
            const cardRight = row.querySelector(`.${styles.card2}`);


            if (!cardRight) return;

            gsap.fromTo(
                cardRight,
                { x: 0, y: 0, rotate: 0, opacity: 1 },
                {
                    x: 200,
                    y: 100,
                    rotate: 10,
                    opacity: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 60%",
                        end: "bottom 30%",
                        scrub: true,
                    },
                }
            );



            gsap.fromTo(
                cardLeft,
                { x: 0, y: 0, rotate: 0, opacity: 1 },
                {
                    x: -200,
                    y: 100,
                    rotate: -10,
                    opacity: 0.3,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 60%",
                        end: "bottom 30%",
                        scrub: true,
                    },
                }
            );

        });




        gsap.to(`.${styles.logo}`, {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: `.${styles.main}`,
                start: "top 55%",
                toggleActions: "play reverse play reverse",
            },
        });


        gsap.to(`.${styles.line} `, {
            scale: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: `.${styles.main}`,
                start: "top 15%",
                toggleActions: "play reverse play reverse",
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    const generateRows = () => {
        const imagePairs = [
            ["/img-1(1).jpg", "/img-2.png"],
            ["/img-3(3).jpg", "/img-4(4).jpg"]
            // أضف المزيد هنا إذا أردت:
            // ["/img-5.jpg", "/img-6.jpg"]
        ];

        return imagePairs.map(([leftImg, rightImg], index) => (
            <div className={`${styles.row} flex justify-center gap-[1em] relative w-fit mb-[1.5em] mt-10`} key={index}>
                <div className={`${styles.card1} ${styles.cardRight}`}>
                    <Image src={rightImg} alt={`Image ${2 * index + 2}`} width={400} height={400} className={`w-[100%] h-[100%] object-cover`} />



                </div>
                <div className={`${styles.card2} ${styles.cardLeft}`}>
                    <Image src={leftImg} alt={`Image ${2 * index + 1}`} width={400} height={400} className={`w-[100%] h-[100%] object-cover`} />
                </div>
            </div>
        ));
    };



    return (
        <section id="story">
        <ReactLenis root >
            <section style={{ fontFamily: "'Interceptor', sans-serif" }}
                className={`relative flex-col flex items-center justify-center overflow-hidden pb-35 bg-radial-[at_50%_50%] from-red-950 via-gray-900 to-gray-950 to-100% `}>

                <svg
                    className="absolute top-0 left-0 w-full h-full opacity-10 z-0 pointer-events-none"
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

                <div className={`${styles.mainContent} flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-20`}>
                    <div className={styles.logo}>
                        <img src="/Icon logo_11zon.webp" alt="logo" className={`w-[100%] h-[100%] object-cover`} />
                    </div>

                    <div className={styles.copy}>
                        <div className={`${styles.line} max-md:text-5xl pb-7`}><p>The revolution begins now</p></div>

                    </div>
                </div>

                {generateRows()}







            </section>
            <section         style={{  fontFamily: "'Interceptor', sans-serif"}}
 className=" bg-gray-900 flex flex-col justify-between   items-center gap-20  ">



                <MedRootsScroll />

                <div className="h-[590vh] max-sm:h-[150vh] max-lg:h-[200vh]"></div>

                <div className="mx-20 min-h-fit max-md:mx-2 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black] text-white text-[1em] w-fit space-y-5"
                    style={{
                        textshadow: "2px 2px 10px black;",

                    }}
                >

                    <ScrollRevealContent />
                </div>



            </section>
        </ReactLenis>
        </section>
    );
}
