import Particles from "@tsparticles/react";
import { useMemo } from "react";

const ParticlesBackground = () => {

  const options = useMemo(() => ({
    fullScreen: {
      enable: true,
      zIndex: -1,
    },

    background: {
      color: "transparent",
    },

    particles: {
      number: {
        value: 90,
        density: {
          enable: true,
          area: 800,
        },
      },

      color: {
        value: "#a78bfa",
      },

      links: {
        enable: true,
        color: "#818cf8",
        distance: 150,
        opacity: 0.4,
        width: 1,
      },

      move: {
        enable: true,
        speed: 1.2,
        direction: "none",
        outModes: {
          default: "out",
        },
      },

      size: {
        value: { min: 2, max: 4 },
      },

      opacity: {
        value: 0.6,
      },
    },

    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },

      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },

    detectRetina: true,
  }), []);

  return <Particles id="tsparticles" options={options} />;
};

export default ParticlesBackground;
