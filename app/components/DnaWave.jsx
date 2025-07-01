"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function DnaWave({ side = "center" }) {
  const leftDots = useRef([]);
  const rightDots = useRef([]);
  const centerLines = useRef([]);
  const redLines = useRef([]);
  const greenLines = useRef([]);

  useEffect(() => {
    const total = 25;
    const amplitude = 70;
    const spacing = 30;

    let xCenter = 300;
    if (side === "left") xCenter = -250;
    if (side === "right") xCenter = 850;

    const update = () => {
      const time = Date.now() * 0.002;

      for (let i = 0; i < total; i++) {
        const angle = time + i * 0.3;
        const y = i * spacing;
        const xLeft = xCenter + Math.sin(angle) * amplitude;
        const xRight = xCenter + Math.sin(angle + Math.PI) * amplitude;

        // Update red dots
        leftDots.current[i]?.setAttribute("cx", xLeft);
        leftDots.current[i]?.setAttribute("cy", y);

        // Update green dots
        rightDots.current[i]?.setAttribute("cx", xRight);
        rightDots.current[i]?.setAttribute("cy", y);

        // Update center white line between red and green
        centerLines.current[i]?.setAttribute("x1", xLeft);
        centerLines.current[i]?.setAttribute("y1", y);
        centerLines.current[i]?.setAttribute("x2", xRight);
        centerLines.current[i]?.setAttribute("y2", y);

        // Update red-to-red lines
        if (i < total - 1) {
          const nextAngle = time + (i + 1) * 0.3;
          const yNext = (i + 1) * spacing;
          const xLeftNext = xCenter + Math.sin(nextAngle) * amplitude;
          redLines.current[i]?.setAttribute("x1", xLeft);
          redLines.current[i]?.setAttribute("y1", y);
          redLines.current[i]?.setAttribute("x2", xLeftNext);
          redLines.current[i]?.setAttribute("y2", yNext);

          const xRightNext = xCenter + Math.sin(nextAngle + Math.PI) * amplitude;
          greenLines.current[i]?.setAttribute("x1", xRight);
          greenLines.current[i]?.setAttribute("y1", y);
          greenLines.current[i]?.setAttribute("x2", xRightNext);
          greenLines.current[i]?.setAttribute("y2", yNext);
        }
      }
    };

    const animation = gsap.to({}, {
      duration: 100,
      repeat: -1,
      onUpdate: update,
    });

    update();

    return () => animation.kill();
  }, [side]);

  return (
    <div className="absolute w-full h-[600px] pointer-events-none">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        width="100%"
        height="600"
        viewBox="0 0 600 600"
      >
        {[...Array(25)].map((_, i) => (
          <g key={`main-${i}`}>
            {/* الخط الأبيض بين كل دائرة حمراء وخضراء */}
            <line
              ref={(el) => (centerLines.current[i] = el)}
              stroke="#ffffff"
              strokeWidth="2.5"
            />

            {/* نقاط الدي إن إيه */}
            <circle
              ref={(el) => (leftDots.current[i] = el)}
              r="4"
              fill="#BE1E2D"
            />
            <circle
              ref={(el) => (rightDots.current[i] = el)}
              r="4"
              fill="#196B40"
            />
          </g>
        ))}

        {/* الخطوط بين الحمراء والحمراء */}
        {[...Array(24)].map((_, i) => (
          <line
            key={`red-${i}`}
            ref={(el) => (redLines.current[i] = el)}
            stroke="#BE1E2D"
            strokeWidth="1.5"
          />
        ))}

        {/* الخطوط بين الخضراء والخضراء */}
        {[...Array(24)].map((_, i) => (
          <line
            key={`green-${i}`}
            ref={(el) => (greenLines.current[i] = el)}
            stroke="#196B40"
            strokeWidth="1.5"
          />
        ))}
      </svg>
    </div>
  );
}
