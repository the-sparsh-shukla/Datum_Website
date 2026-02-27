<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import NotificationBell from "./NotificationBell";
=======
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import NotificationBell from './NotificationBell';
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

interface HeaderProps {
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, onToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const [showHeader, setShowHeader] = useState(true);

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 80) setShowHeader(true);
      else setShowHeader(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header
<<<<<<< HEAD
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
=======
      className={`fixed top-0 left-0 z-50 w-full 
      backdrop-blur-2xl 
      bg-white/10 dark:bg-slate-950/60
      border-b border-white/10 dark:border-slate-800/50
      transition-transform duration-700 ease-in-out
      shadow-[0_8px_30px_rgba(79,70,229,0.08)]
      ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-white p-1.5 shadow-md shadow-indigo-500/20 group-hover:rotate-12 transition-transform duration-500 ring-1 ring-slate-200 dark:ring-slate-700">
              <img
                src="logo_datum.png"
                alt="Datum Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-[#4f46e5] to-[#a78bfa] bg-clip-text text-transparent">
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
              DATUM
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
<<<<<<< HEAD

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

=======

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm font-bold tracking-wide transition-all duration-300
                ${
                  isActive(link.path)
                    ? 'text-[#4f46e5]'
                    : 'text-slate-500 dark:text-slate-400 hover:text-[#4f46e5]'
                }`}
              >
                {link.name}

                {/* Active underline animation */}
                {isActive(link.path) && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-[#4f46e5] rounded-full"></span>
                )}
              </Link>
            ))}

>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
            <NotificationBell />

            <button
              onClick={onToggleTheme}
<<<<<<< HEAD
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900"
=======
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-[#4f46e5] dark:hover:text-white transition-all border border-slate-200 dark:border-slate-800"
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
<<<<<<< HEAD

=======
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
          </nav>

          <div className="md:hidden flex items-center gap-2">
<<<<<<< HEAD
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X /> : <Menu />}
=======

            <NotificationBell />

            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-500 dark:text-slate-400 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
            </button>
          </div>

        </div>
      </div>
<<<<<<< HEAD
=======

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-bold rounded-lg transition-all
                ${
                  isActive(link.path)
                    ? 'bg-indigo-50 dark:bg-slate-800 text-[#4f46e5]'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358
    </header>
  );
};

export default Header;