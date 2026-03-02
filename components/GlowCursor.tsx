import React, { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-40 h-40 rounded-full pointer-events-none
      bg-indigo-500/20 blur-3xl -z-10 transition-all duration-150"
      style={{
        left: position.x - 80,
        top: position.y - 80
      }}
    />
  );
};

export default GlowCursor;