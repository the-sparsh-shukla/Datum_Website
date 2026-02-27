import { motion } from "framer-motion";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;