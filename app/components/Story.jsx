"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ReactLenis } from "lenis/react";
import styles from "./Story.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function StorySec() {
    useEffect(() => {
        const leftXValues = [-800, -900, -400];
        const rightXValues = [800, 900, 400];
        const leftRotationValues = [-30, -20, -35];
        const rightRotationValues = [30, 20, 35];
        const yValues = [100, -150, -400];

        gsap.utils.toArray(`.${styles.row}`).forEach((row, index) => {
            const cardLeft = row.querySelector(`.${styles.card}.${styles.cardLeft}`);
            const cardRight = row.querySelector(`.${styles.card}.${styles.cardRight}`);

            if (!cardLeft || !cardRight) return;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            tl.to(cardLeft, {
                x: -200,
                y: -50,
                rotate: -10,
                ease: "power2.out",
            });

            tl.to(cardRight, {
                x: 200,
                y: 50,
                rotate: 10,
                ease: "power2.out",
            }, "<"); // "<" معناها يبدأ بنفس توقيت العنصر السابق
        });


        gsap.to(`.${styles.logo}`, {
            scale: 1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: `.${styles.main}`,
                start: "top 25%",
            },
        });

        gsap.to(`.${styles.line} p`, {
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
                trigger: `.${styles.main}`,
                start: "top 25%",
            },
        });

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);

    const generateRows = () => {
        const rows = [];
        for (let i = 1; i <= 3; i++) {
            rows.push(
                <div className={styles.row} key={i}>
                    <div className={`${styles.card} ${styles.cardLeft}`}>
                        <img src={`/img-${2 * i - 1}.jpg`} alt="" className={styles.img} />
                    </div>
                    <div className={`${styles.card} ${styles.cardRight}`}>
                        <img src={`/img-${2 * i}.jpg`} alt="" className={styles.img} />
                    </div>
                </div>
            );
        }
        return rows;
    };

    return (
        <ReactLenis root>
            <section className={`${styles.main} overflow-hidden overflow-x-hidden`}> {/* Fix right scroll */}
                <div className={`${styles.mainContent} flex items-center flex-col absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] px-20`}>
                    <div className={styles.logo}>
                        <img src="/Icon logo_11zon.webp" alt="logo" className={styles.img} />
                    </div>

                    <div className={styles.copy}>
                        <div className={styles.line}><p>Lorem ipsum dolor sit amet consectetur...</p></div>
                        <div className={styles.line}><p>Lorem ipsum dolor sit amet consectetur...</p></div>
                        <div className={styles.line}><p>Lorem ipsum dolor sit amet consectetur...</p></div>
                    </div>
                </div>

                {generateRows()}
            </section>
        </ReactLenis>
    );
}
