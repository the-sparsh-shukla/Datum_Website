import { motion } from "framer-motion";
import React from "react";
import MagneticButton from "../MagneticButton";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
  magnetic?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  magnetic = false,
}) => {
  const baseStyle =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40",
    outline:
      "border border-indigo-500 text-indigo-400 hover:bg-indigo-500/10",
    ghost:
      "text-slate-300 hover:bg-white/5",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );

  if (magnetic) {
    return <MagneticButton>{content}</MagneticButton>;
  }

  return content;
};

export default Button;
