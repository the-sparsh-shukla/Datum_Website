import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import NotificationBell from "./NotificationBell";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY <= 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Career Planner", path: "/career-planner" },
    { name: "Gallery", path: "/gallery" }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: showHeader ? 0 : -100 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-full h-16 z-[100] backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">

          {/* LOGO (Image + Text) */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo_datum.png"
              alt="DATUM Logo"
              className="h-8 w-auto"
            />
            <span className="text-xl font-black bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              DATUM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold transition-all duration-300 ${
                    active
                      ? "text-indigo-600"
                      : "text-slate-600 dark:text-slate-400 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <NotificationBell />

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-800/40 backdrop-blur-md"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5 text-white" />
              ) : (
                <Sun className="w-5 h-5 text-white" />
              )}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 dark:text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold text-slate-300 hover:bg-slate-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

    </motion.header>
  );
};

export default Header;