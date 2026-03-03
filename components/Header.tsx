import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import NotificationBell from "./NotificationBell";

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Team", path: "/team" },
    { name: "Events", path: "/events" },
    { name: "Career Planner", path: "/career-planner" },
    { name: "Gallery", path: "/gallery" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-16 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              DATUM
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-sm font-bold transition-all duration-300 ${
                    active
                      ? "text-indigo-600"
                      : "text-slate-400 hover:text-indigo-600"
                  }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-indigo-600 rounded-full" />
                  )}
                </Link>
              );
            })}

            {/* ✅ Admin Button */}
            <Link
              to="/admin"
              className="px-5 py-2 rounded-xl text-sm font-bold text-white 
                         bg-gradient-to-r from-indigo-600 to-purple-600 
                         hover:opacity-90 transition-all duration-300"
            >
              Admin
            </Link>

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
              className="p-2 text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-950">
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

            {/* ✅ Admin in Mobile */}
            <Link
              to="/admin"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-base font-bold text-white 
                         bg-gradient-to-r from-indigo-600 to-purple-600 
                         rounded-lg"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;