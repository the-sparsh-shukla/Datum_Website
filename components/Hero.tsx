import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import { typography, gradients } from "../components/styles/designSystem";

import {
  ArrowRight,
  Users,
  BrainCircuit,
  Database,
  Terminal,
  MousePointer2,
} from "lucide-react";

/* ================= PARTICLE NETWORK ================= */

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
      ctx.fillStyle = "rgba(79, 70, 229, 0.4)";
      ctx.strokeStyle = "rgba(79, 70, 229, 0.15)";

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

/* ================= HERO ================= */

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20 bg-white dark:bg-slate-950">

      <ParticleNetwork />

      {/* Royal Glow */}
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#4f46e5]/20 blur-[160px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#6366f1]/20 blur-[160px] rounded-full animate-pulse delay-700"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-7xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4f46e5]/10 border border-[#4f46e5]/30 text-[#4f46e5] text-[10px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
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
          <span className="bg-gradient-to-r from-[#4f46e5] via-[#6366f1] to-[#a78bfa] bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(79,70,229,0.6)]">
            AI GENERATION
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed mb-12"
        >
          Datum is a student-powered lab where data science theory meets real-world impact. Join 500+ peers building the future.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
          
          <MagneticButton>
            <button className="group px-8 py-4 rounded-2xl bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] transition-all duration-300 active:scale-95 flex items-center gap-2">
              JOIN DATUM
              <MousePointer2 className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </MagneticButton>

          <Link
            to="/events"
            className="px-8 py-4 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-xl border border-slate-200 dark:border-slate-800 transition-all active:scale-95 shadow-md flex items-center gap-2"
          >
            EXPLORE PROJECTS
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div className="flex flex-wrap justify-center gap-10 md:gap-20 border-t border-slate-100 dark:border-slate-800/50 pt-12">
          {[
            { label: "ACTIVE MEMBERS", val: "500+", icon: Users },
            { label: "PROJECTS BUILT", val: "120+", icon: Terminal },
            { label: "WORKSHOPS", val: "45+", icon: Database },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <stat.icon className="w-5 h-5 text-[#4f46e5] mb-2 opacity-60" />
              <span className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                {stat.val}
              </span>
              <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
