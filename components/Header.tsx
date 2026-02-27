import React, { useState, useEffect } from "react";
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
    { name: "Gallery", path: "/gallery", section: "gallery" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 150) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-2xl transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-lg border border-slate-200 dark:border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="px-6">
        <div className="flex justify-between items-center h-20">

          <Link to="/" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              DATUM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => {
              const active =
                isActiveRoute(link.path) || activeSection === link.section;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-bold transition-colors ${
                    active
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-slate-500 dark:text-slate-400 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-600 rounded-full" />
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
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;