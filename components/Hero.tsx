import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { ArrowRight, BrainCircuit, MousePointer2 } from "lucide-react";

const ParticleNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }[] = [];

    const particleCount = 80;
    const connectionDistance = 150;

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
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(79,70,229,0.4)";
      ctx.strokeStyle = "rgba(79,70,229,0.15)";

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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-4 bg-white dark:bg-slate-950">
      <ParticleNetwork />

      {/* Glow Effects */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-indigo-600/20 blur-[160px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500/20 blur-[160px] rounded-full animate-pulse delay-700"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/10 border border-indigo-600/30 text-indigo-600 text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Neural Network Active</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 leading-[0.9] text-slate-900 dark:text-white"
        >
          THE <br />
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(79,70,229,0.6)]">
            AI GENERATION
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          Datum is a student-powered lab where data science theory meets real-world impact.
          Join 500+ peers building the future.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <button className="group px-10 py-5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg transition-all duration-300 active:scale-95 flex items-center gap-2">
              JOIN DATUM
              <MousePointer2 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </MagneticButton>

          <Link
            to="/events"
            className="px-10 py-5 bg-transparent hover:bg-slate-800/40 text-white font-bold text-lg rounded-2xl border border-slate-700 transition-all active:scale-95 flex items-center gap-2"
          >
            EXPLORE PROJECTS
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;