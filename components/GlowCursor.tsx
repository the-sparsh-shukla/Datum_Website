import React, { useEffect, useState } from "react";

const GlowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    window.addEventListener("mousemove", move);

    // observe theme change
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed w-40 h-40 rounded-full pointer-events-none
      blur-3xl -z-10 transition-all duration-150"
      style={{
        left: position.x - 80,
        top: position.y - 80,
        background: isDark
          ? "rgba(99,102,241,0.2)"
          : "rgba(79,70,229,0.15)"
      }}
    />
  );
};

export default GlowCursor;