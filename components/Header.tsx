import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import NotificationBell from "./NotificationBell";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", section: "hero" },
    { name: "About", path: "/about", section: "about" },
    { name: "Team", path: "/team", section: "team" },
    { name: "Events", path: "/events", section: "events" },
    { name: "Career Planner", path: "/career-planner", section: "planner" },
    { name: "Gallery", path: "/gallery", section: "gallery" }
  ];

  const isActive = (path: string, section: string) =>
    location.pathname === path || activeSection === section;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;
        if (top <= 150) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              DATUM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isActive(link.path, link.section);

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-bold transition-all duration-300 ${
                    active
                      ? "text-indigo-600"
                      : "text-slate-500 dark:text-slate-400 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-600 rounded-full" />
                  )}
                </Link>
              );
            })}

            <NotificationBell />

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900"
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-500 dark:text-slate-400"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-base font-bold rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;