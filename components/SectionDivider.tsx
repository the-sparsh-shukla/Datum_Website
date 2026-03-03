import React from "react";

interface DividerProps {
  flip?: boolean;
  dark?: boolean;
}

const SectionDivider: React.FC<DividerProps> = ({ flip, dark }) => {
  return (
    <div className={`relative w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 120"
        className={`w-full h-24 ${dark ? "fill-slate-950" : "fill-slate-50 dark:fill-slate-900"}`}
        preserveAspectRatio="none"
      >
        <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64V120H0Z" />
      </svg>
    </div>
  );
};

export default SectionDivider;