"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import styles from "./Story.module.css";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

export default function StorySec() {
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
                    opacity: 0.5,
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
                    opacity: 0.5,
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
                start: "top 35%",
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
                start: "top 35%",
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
            <div className={styles.row} key={index}>
                <div className={`${styles.card1} ${styles.cardRight}`}>
                    <Image src={rightImg} alt={`Image ${2 * index + 2}`} width={400} height={400} className={styles.img} />



                </div>
                <div className={`${styles.card2} ${styles.cardLeft}`}>
                    <Image src={leftImg} alt={`Image ${2 * index + 1}`} width={400} height={400} className={styles.img} />
                </div>
            </div>
        ));
    };

    return (
        <ReactLenis root>
            <section className={`${styles.main} overflow-hidden pb-35  bg-radial-[at_50%_50%] from-red-950 via-gray-950 to-black to-100% `}>
                <div className={`${styles.mainContent} flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-20`}>
                    <div className={styles.logo}>
                        <img src="/Icon logo_11zon.webp" alt="logo" className={styles.img} />
                    </div>

                    <div className={styles.copy}>
                        <div className={`${styles.line} max-md:text-5xl pb-7`}><p>The revolution begins now</p></div>

                    </div>
                </div>

                {generateRows()}







            </section>
            <section className=" p-[10px] flex flex-wrap justify-around items-center gap-20 bg-radial-[at_50%_50%] from-black via-gray-900 text-xl to-black to-100% ">
                <div className="p-10 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black] text-white text-[3em] w-fit"
                    style={{
                        textshadow: "2px 2px 10px black;",

                    }}
                    data-aos="fade-up"
                >
                    <h1
                        className="text-center text-7xl max-md:text-5xl font-bold aos-init aos-animate"

                    >
                        What is{" "}
                        <span className="text-[#BE1E2D] font-[Interceptor]">Med</span>
                        <span className="text-[#196B40] font-[Interceptor]">
                            Roots<sub>25</sub>?
                        </span>
                    </h1>
                </div>

                <div className="mx-10 backdrop-blur-3xl rounded-[25px] px-[30px] py-[20px] shadow-[2px_2px_10px_black] text-white text-[1em] w-fit space-y-5"
                    style={{
                        textshadow: "2px 2px 10px black;",

                    }}
                >

                    <div className="text-white text-lg leading-8 space-y-5">
                        <p>
                            <strong>MedRoots Summit 25</strong> is an international IEEE SIGHT Conference held for the first time in Jordan.
                            It highlights the country's growing role in technology, biomedical engineering, and sustainability across the MENA region.
                        </p>

                        <p>
                            Under the theme
                            <em>“Empowering the Future through Environmental Development, EcoGenomics, AI, Innovation, Medical Fields, and Engineering”.</em>
                            
                        </p>

                        <p>The event includes:</p>
                        <ul className="list-disc list-inside ml-6 space-y-1">
                            <li>Workshops and keynote speeches</li>
                            <li>Panel discussions and innovation challenges</li>
                            <li>Exhibitions on AI, environment, and healthcare</li>
                        </ul>

                        <p>
                            <strong>MedRoots 25</strong> marks a turning point in Jordan’s biomedical engineering journey, driving research, youth innovation,
                            and regional leadership in science and technology.
                        </p>
                    </div>


                </div>


            </section>
        </ReactLenis>
    );
}
