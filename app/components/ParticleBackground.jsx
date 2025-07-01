"use client";
import Particles from "react-tsparticles";
import { useCallback, useRef } from "react";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particleRef = useRef(null);
  if (!particleRef.current) {
    particleRef.current = (
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0 pointer-events-none"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          detectRetina: true,
          particles: {
            number: { value: 100, density: { enable: true, area: 900 }},
            color: { value: ["#BE1E2D", "#196B40"] },
            shape: { type: "circle" },
            opacity: { value: 0.4, random: true, anim: { enable: true, speed: 0.6, opacity_min: 0.1, sync: false }},
            size: { value: 5, random: true },
            links: { enable: true, distance: 130, color: "#ffffff", opacity: 0.2, width: 0.8 },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" }
            },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "grab" }, resize: true },
            modes: { grab: { distance: 140, line_linked: { opacity: 0.9 } } }
          },
        }}
      />
    );
  }

  return particleRef.current;
}
