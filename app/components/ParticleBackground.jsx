// components/ParticleBackground.jsx
"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
 const particlesInit = useCallback(async (engine) => {
  await loadSlim(engine);
}, []);


  return (
    <Particles
  id="tsparticles"
  init={particlesInit}
  className="absolute inset-0 z-0 [filter:drop-shadow(0_0_4px_rgba(255,255,255,0.15))]"
  options={{
    fullScreen: { enable: false },
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          area: 900,
        },
      },
      color: {
        value: ["#BE1E2D", "#196B40"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.4,
        random: true,
        anim: {
          enable: true,
          speed: 0.6,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 6,
        random: true,
      },
      links: {
        enable: true,
        distance: 130,
        color: "#ffffff",
        opacity: 0.25,
        width: 0.8,
      },
      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "bounce",
        },
        attract: {
          enable: false,
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 180,
          line_linked: {
            opacity: 0.7,
          },
        },
      },
    },
    detectRetina: true,
  }}
/>


  );
}
