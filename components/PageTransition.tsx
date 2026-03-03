import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const PageTransition: React.FC<Props> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1], // cinematic easing
      }}
      className="min-h-screen will-change-transform"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;