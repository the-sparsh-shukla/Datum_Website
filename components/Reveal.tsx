import { motion } from "framer-motion";
<<<<<<< HEAD
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
=======

const Reveal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
    >
      {children}
    </motion.div>
  );
};

<<<<<<< HEAD
export default Reveal;
=======
export default Reveal;
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
