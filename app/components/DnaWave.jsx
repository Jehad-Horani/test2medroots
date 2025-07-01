"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DnaWave({ side = "center" }) {
  const leftDots = useRef([]);
  const rightDots = useRef([]);
  const lines = useRef([]);

  useEffect(() => {
    const total = 20;
    const amplitude = 60;
    const spacing = 30;

    let xCenter = 300;
    if (side === "left") xCenter = -250;
    if (side === "right") xCenter = 850;

    let animation = gsap.to({}, {
      duration: 100,
      repeat: -1,
      onUpdate: () => {
        const time = Date.now() * 0.002;
        for (let i = 0; i < total; i++) {
          const angle = time + i * 0.3;
          const y = i * spacing;
          const xLeft = xCenter + Math.sin(angle) * amplitude;
          const xRight = xCenter + Math.sin(angle + Math.PI) * amplitude;

          leftDots.current[i]?.setAttribute("cx", xLeft);
          leftDots.current[i]?.setAttribute("cy", y);
          rightDots.current[i]?.setAttribute("cx", xRight);
          rightDots.current[i]?.setAttribute("cy", y);
          lines.current[i]?.setAttribute("x1", xLeft);
          lines.current[i]?.setAttribute("y1", y);
          lines.current[i]?.setAttribute("x2", xRight);
          lines.current[i]?.setAttribute("y2", y);
        }
      },
    });

    return () => animation.kill();
  }, [side]);

  return (
    <div className="absolute w-full h-[600px]">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="100%"
        height="600"
        viewBox="0 0 600 600"
      >
        <defs>
          <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#BE1E2D" />
            <stop offset="100%" stopColor="#196B40" />
          </linearGradient>
        </defs>

        {[...Array(20)].map((_, i) => (
          <g key={i}>
            <circle ref={(el) => (leftDots.current[i] = el)} r="4" fill="#BE1E2D" />
            <circle ref={(el) => (rightDots.current[i] = el)} r="4" fill="#196B40" />
            <line ref={(el) => (lines.current[i] = el)} stroke="url(#dnaGradient)" strokeWidth="2" />
          </g>
        ))}
      </svg>
    </div>
  );
}
