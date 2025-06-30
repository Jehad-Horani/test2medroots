"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import styles from "./Story.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function StorySec() {
    useEffect(() => {
        const rows = document.querySelectorAll(`.${styles.row}`);




        rows.forEach((row) => {
            const cardLeft = row.querySelector(`.${styles.card1}`);
            const cardRight = row.querySelector(`.${styles.card2}`);

            console.log("cardLeft:", cardRight);

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
            },
        });

        gsap.to(`.${styles.line} p`, {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: `.${styles.main}`,
                start: "top 15%",
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    const generateRows = () => {
        const imagePairs = [
            ["/img-1.jpg", "/img-2.jpg"],
            ["/img-3.jpg", "/img-4.jpg"]
            // أضف المزيد هنا إذا أردت:
            // ["/img-5.jpg", "/img-6.jpg"]
        ];

        return imagePairs.map(([leftImg, rightImg], index) => (
            <div className={styles.row} key={index}>
                <div className={`${styles.card1} ${styles.cardRight}`}>
                    <img src={rightImg} alt={`Image ${2 * index + 2}`} className={styles.img} />
                </div>
                <div className={`${styles.card2} ${styles.cardLeft}`}>
                    <img src={leftImg} alt={`Image ${2 * index + 1}`} className={styles.img} />
                </div>
            </div>
        ));
    };

    return (
        <ReactLenis root>
            <section className={`${styles.main} overflow-hidden pb-35  bg-radial-[at_50%_75%] from-red-950 via-gray-950 to-black to-100% `}>
                <div className={`${styles.mainContent} flex items-center justify-center flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-20`}>
                    <div className={styles.logo}>
                        <img src="/Icon logo_11zon.webp" alt="logo" className={styles.img} />
                    </div>

                    <div className={styles.copy}>
                        <div className={styles.line}><p>The revolution begins now</p></div>
                      
                    </div>
                </div>

                {generateRows()}
            </section>
        </ReactLenis>
    );
}
