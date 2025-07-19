'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./hero.module.css"
import Link from "next/link";
import ParticleBackground from './ParticleBackground';
import DnaWave from './DnaWave';



export default function Herosec() {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        const countdownDate = new Date("September 13, 2025 00:00:00").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            if (distance < 0) {
                clearInterval(interval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: String(days).padStart(2, '0'),
                hours: String(hours).padStart(2, '0'),
                minutes: String(minutes).padStart(2, '0'),
                seconds: String(seconds).padStart(2, '0'),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);





    return (
        <div id='home' className="bg-gradient-to-b from-red-900 to-gray-950 to-90% top-0 h-full" 
        style={{  fontFamily: "'Interceptor', sans-serif"}}
        >
           
            


           
           <div className='relative z-10'>
            <ParticleBackground />

          
           
            <div className="flex justify-center items-center gap-20 px-4 py-18 ">
                <h1 className={`${styles.medroots}  text-5xl text-shadow-lg/300 ml-88 max-md:hidden mt-56 whitespace-nowrap`}
                    style={{
                        textShadow: "3px 3px 3px red",
                    }}>
                    MEDROOTS
                </h1>

                <Image
                    src="/Icon logo_11zon.webp"
                    alt="tree"
                    width={340}
                    height={350}
                    className={`${styles.tree} absolute max-md:relative`}
                    style={{
                        filter: "drop-shadow(2px 2px 10px #ffffff)",
                    }}
                />

                <h1 className={`${styles.summit}  text-5xl mr-80  max-md:hidden  mt-56 whitespace-nowrap`}
                    style={{
                        textShadow: "3px 3px 3px green",
                    }}>
                    SUMMIT 25
                </h1>
            </div>
 <div className="flex justify-center items-center ">

            <h1 className="text-5xl pt-7 pb-3 text-center font-bold ">Conference Day</h1>
</div>

            <div className="flex transform-3d justify-around flex-wrap-reverse max-lg:gap-20 items-center pt-10 pb-6">
                <div className="flex justify-around items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.1"
                        width="30"
                        height="30"
                        viewBox="0 0 256 256"
                        className="inline-block"
                    >
                        <g
                            style={{
                                stroke: 'none',
                                strokeWidth: 0,
                                fill: 'none',
                                fillRule: 'nonzero',
                                opacity: 1,
                            }}
                            transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                        >
                            <path d="M 64.654 14.951 H 25.345 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 39.309 c 1.657 0 3 1.343 3 3 S 66.312 14.951 64.654 14.951 z" fill="rgb(255,0,0)" />
                            <path d="M 87 31.837 H 3 c -1.657 0 -3 -1.343 -3 -3 v -8.87 C 0 13.893 4.942 8.951 11.016 8.951 h 6.398 c 1.657 0 3 1.343 3 3 s -1.343 3 -3 3 h -6.398 C 8.25 14.951 6 17.201 6 19.967 v 5.87 h 78 v -5.87 c 0 -2.766 -2.25 -5.017 -5.017 -5.017 h -6.397 c -1.657 0 -3 -1.343 -3 -3 s 1.343 -3 3 -3 h 6.397 C 85.058 8.951 90 13.893 90 19.967 v 8.87 C 90 30.494 88.657 31.837 87 31.837 z" fill="rgb(255,0,0)" />
                            <path d="M 78.983 89.123 H 11.016 C 4.942 89.123 0 84.181 0 78.106 V 28.837 c 0 -1.657 1.343 -3 3 -3 h 84 c 1.657 0 3 1.343 3 3 v 49.269 C 90 84.181 85.058 89.123 78.983 89.123 z M 6 31.837 v 46.269 c 0 2.767 2.25 5.017 5.016 5.017 h 67.967 c 2.767 0 5.017 -2.25 5.017 -5.017 V 31.837 H 6 z" fill="rgb(255,0,0)" />
                            <path d="M 23.761 51.483 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 26.372 50.313 25.203 51.483 23.761 51.483 z" fill="rgb(255,0,0)" />
                            <path d="M 47.381 51.483 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 49.993 50.313 48.824 51.483 47.381 51.483 z" fill="rgb(255,0,0)" />
                            <path d="M 71.001 51.483 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 73.613 50.313 72.444 51.483 71.001 51.483 z" fill="rgb(255,0,0)" />
                            <path d="M 23.761 72.022 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 26.372 70.853 25.203 72.022 23.761 72.022 z" fill="rgb(255,0,0)" />
                            <path d="M 47.381 72.022 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 49.993 70.853 48.824 72.022 47.381 72.022 z" fill="rgb(255,0,0)" />
                            <path d="M 71.001 72.022 h -4.762 c -1.442 0 -2.612 -1.169 -2.612 -2.612 v -4.762 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 4.762 c 1.442 0 2.612 1.169 2.612 2.612 v 4.762 C 73.613 70.853 72.444 72.022 71.001 72.022 z" fill="rgb(255,0,0)" />
                            <path d="M 22.734 20.025 h -2.708 c -1.442 0 -2.612 -1.169 -2.612 -2.612 V 6.489 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 2.708 c 1.442 0 2.612 1.169 2.612 2.612 v 10.924 C 25.345 18.855 24.176 20.025 22.734 20.025 z" fill="rgb(255,0,0)" />
                            <path d="M 69.975 20.025 h -2.708 c -1.442 0 -2.612 -1.169 -2.612 -2.612 V 6.489 c 0 -1.442 1.169 -2.612 2.612 -2.612 h 2.708 c 1.442 0 2.612 1.169 2.612 2.612 v 10.924 C 72.586 18.855 71.417 20.025 69.975 20.025 z" fill="rgb(255,0,0)" />
                        </g>
                    </svg>

                    <p className="text-white text-xl ml-2 inline-block font-bold">
                        September 13 - 14, 2025
                    </p>
                </div>


                <div className='max-sm:mx-10'>

                    <div className="col-lg-6 text-center">
                        <div className="w-full">
                            <div className="flex flex-wrap justify-center gap-[25px] border-4 border-t-[#196B40] border-l-[#196B40] border-r-[#BE1E2D] border-b-[#BE1E2D] backdrop-blur-[50px] text-white shadow-[2px_2px_10px_white] px-4 py-4 pb-6 rounded-[30px] text-center">

                                <div className="bla mx-[20px]">
                                    <p id="days" className="text-[40px] mb-[-14px]">{timeLeft.days}</p>
                                    <span>Days</span>
                                </div>

                                <div className="bla mx-[20px]">
                                    <p id="hours" className="text-[40px] mb-[-14px]">{timeLeft.hours}</p>
                                    <span>Hours</span>
                                </div>

                                <div className="bla mx-[20px]">
                                    <p id="minutes" className="text-[40px] mb-[-14px]">{timeLeft.minutes}</p>
                                    <span>Minutes</span>
                                </div>

                                <div className="bla mx-[20px] border-r-0">
                                    <p id="seconds" className="text-[40px] mb-[-14px]">{timeLeft.seconds}</p>
                                    <span>Seconds</span>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>


                <div className="col-lg-3 blockcc1">
                    <div className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            width="30"
                            height="30"
                            viewBox="0 0 256 256"
                            className="inline-block"
                        >
                            <g
                                style={{
                                    stroke: 'none',
                                    strokeWidth: 0,
                                    fill: 'none',
                                    fillRule: 'nonzero',
                                    opacity: 1,
                                }}
                                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                            >
                                <path
                                    d="M 45 0 C 27.395 0 13.123 14.272 13.123 31.877 c 0 7.86 2.858 15.043 7.573 20.6 L 45 81.101 l 24.304 -28.624 c 4.716 -5.558 7.573 -12.741 7.573 -20.6 C 76.877 14.272 62.605 0 45 0 z M 45 43.889 c -7.24 0 -13.11 -5.869 -13.11 -13.11 c 0 -7.24 5.869 -13.11 13.11 -13.11 s 13.11 5.869 13.11 13.11 C 58.11 38.02 52.24 43.889 45 43.889 z"
                                    fill="rgb(255,0,0)"
                                />
                                <path
                                    d="M 58.958 71.559 L 45 82.839 L 31.057 71.556 c -9.329 1.65 -15.682 4.901 -15.682 8.645 c 0 5.412 13.263 9.8 29.625 9.8 c 16.361 0 29.625 -4.388 29.625 -9.8 C 74.625 76.458 68.278 73.209 58.958 71.559 z"
                                    fill="rgb(255,0,0)"
                                />
                            </g>
                        </svg>

                        <a
                            href="https://www.google.com/maps/place/Four+Seasons+Hotel+Amman/@31.9616282,35.8810368,1478m/data=!3m2!1e3!4b1!4m9!3m8!1s0x151ca05772da5d9d:0x80a84e21ae4f7d59!5m2!4m1!1i2!8m2!3d31.9616282!4d35.8810368!16s%2Fg%2F11b6_cgfrf?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl ml-2 inline-block hover:text-red-300 transition font-bold"
                        >
                           Sygnia by Hilton Amman
                        </a>
                    </div>
                </div>


            </div>

            <div className='flex justify-around items-center'>
                <Link href="#TICKETS" >

                    <div className="px-[57px] m-5  cursor-pointer select-none text-white border-3 border-t-[#196B40] border-l-[#196B40] border-r-[#BE1E2D] border-b-[#BE1E2D] backdrop-blur-[50px] py-2 text-[26px] rounded-[30px] transition-all duration-300 ease-in-out shadow-[2px_2px_5px_white] flex justify-center items-center gap-2 hover:scale-110 hover:text-white hover:px-[57px] hover:py-[3px] hover:text-[28px]">
                        <h3 className="flex justify-between items-center gap-2 p-4 font-bold max-md:text-2xl">
                            Get your ticket
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.1"
                                width="20"
                                height="20"
                                viewBox="0 0 256 256"
                                className="fill-white"
                            >
                                <g
                                    style={{
                                        stroke: "none",
                                        strokeWidth: 0,
                                        strokeDasharray: "none",
                                        strokeLinecap: "butt",
                                        strokeLinejoin: "miter",
                                        strokeMiterlimit: 10,
                                        fill: "none",
                                        fillRule: "nonzero",
                                        opacity: 1,
                                    }}
                                    transform="translate(48.582 8.813) scale(2.29 2.29)"
                                >
                                    <path
                                        d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
                                        strokeLinecap="round"
                                        fill="#fff"
                                    />
                                </g>
                            </svg>
                        </h3>
                    </div>

                </Link>

            </div>
 </div>



        </div>
    );
}
