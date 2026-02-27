import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (height > 0) {
        setProgress((scrollTop / height) * 100);
      }
    };

    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[60] w-full h-[3px]">
      <div
        className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-emerald-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;