import { useRef } from "react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const MagneticButton = ({ children, onClick }: Props) => {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`; // 👈 stronger effect
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "translate(0px, 0px)";
    }
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      className="relative z-10 px-10 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg shadow-indigo-600/30 transition-transform duration-200"
    >
      {children}
    </button>
  );
};

export default MagneticButton;