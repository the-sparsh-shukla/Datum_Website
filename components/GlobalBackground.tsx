import React, { useEffect, useState } from "react";
import ParticlesBackground from "./ParticleBackground";

const GlobalBackground = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* 1️⃣ Base Gradient (Lowest Layer) */}
      <div className="fixed inset-0 -z-50 bg-gradient-to-br from-[#0f0c29] via-[#1b1f3b] to-[#0f0c29]" />

      {/* 2️⃣ Floating Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[600px] h-[600px] bg-violet-700/50 rounded-full blur-[160px] animate-blob -z-40" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-700/50 rounded-full blur-[160px] animate-blob animation-delay-2000 -z-40" />

      {/* 3️⃣ Particles (Above blobs) */}
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* 4️⃣ Cursor Glow (Above particles but below content) */}
      <div
        className="pointer-events-none fixed w-[350px] h-[350px] rounded-full bg-purple-500/25 blur-[180px] -z-20"
        style={{
          left: mouse.x - 175,
          top: mouse.y - 175,
        }}
      />
    </>
  );
};

export default GlobalBackground;
