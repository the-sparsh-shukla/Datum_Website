import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

const ParticleNetwork = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: any[] = [];
    const particleCount = 60;
    const connectionDistance = 140;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(99,102,241,0.4)";
      ctx.strokeStyle = "rgba(99,102,241,0.15)";

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < connectionDistance) {
            ctx.lineWidth = 1 - dist / connectionDistance;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    createParticles();
    draw();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-40 pointer-events-none"
    />
  );
};

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [10, -10]);
  const rotateY = useTransform(x, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    x.set(mouseX);
    y.set(mouseY);
  };

  return (
    <>
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center -mt-16 overflow-hidden bg-white dark:bg-slate-950 px-6"
      >
        <ParticleNetwork />

        <div className="max-w-7xl mt-12 mx-auto grid md:grid-cols-2 items-center gap-16 w-full">

          {/* LEFT */}
          <div className="space-y-8 text-left">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-black leading-[1.05]"
            >
              <span className="block text-slate-900 dark:text-white">
                Exploring the Science
              </span>

              <span className="block bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-400 bg-[length:200%_200%] animate-gradient bg-clip-text text-transparent">
                behind Data and AI
              </span>
            </motion.h1>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl">
              DATUM is where visionary students design AI systems,
              explore deep data science, and build technology that shapes tomorrow.
            </p>

            <MagneticButton onClick={() => setOpen(true)}>
              Join Community
            </MagneticButton>

          </div>

          {/* RIGHT */}
          <div
            ref={ref}
            className="relative flex justify-center items-center perspective-1000"
          >
            <motion.div
              style={{ x, y }}
              className="absolute w-[350px] h-[350px] bg-indigo-600/30 rounded-full blur-[120px]"
            />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-full blur-[140px]"
            />

            <motion.img
              src="/botcircle.png"
              alt="AI Bot"
              style={{ rotateX, rotateY }}
              animate={{ y: [0, -15, 0] }}
              transition={{ y: { duration: 5, repeat: Infinity } }}
              className="relative w-80 md:w-[420px]"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;