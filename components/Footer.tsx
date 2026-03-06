import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Slim gradient bridge — was h-32, now just h-px of actual gradient */}
      <div className="h-12 bg-gradient-to-b from-transparent to-slate-100 dark:to-slate-950" />

      <footer className="relative bg-slate-100 dark:bg-slate-950 pt-16 pb-10 overflow-hidden transition-colors duration-300">

        {/* Subtle background glow */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.6),transparent_60%)] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">

            {/* Brand */}
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-4 mb-6 group">
                <div className="w-12 h-12 bg-white p-1.5 rounded-2xl shadow-lg group-hover:rotate-6 transition-transform duration-300">
                  <img
                    src="logo_datum.png"
                    alt="Datum Logo"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/datum-logo.png';
                    }}
                  />
                </div>
                <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  DATUM
                </span>
              </Link>

              <p className="text-slate-500 dark:text-slate-400 max-w-lg mb-8 leading-relaxed text-base">
                The leading student-driven data hub bridging academia and the real-world data industry through innovation, collaboration, and hands-on learning.
              </p>

              <div className="flex gap-4">
                {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-white dark:bg-slate-900 rounded-2xl hover:bg-indigo-600 dark:hover:bg-indigo-600 transition-all duration-300 text-slate-400 dark:text-slate-500 hover:text-white dark:hover:text-white hover:-translate-y-1 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-slate-400 dark:text-slate-600 font-black mb-6 uppercase tracking-widest text-[11px]">
                Resources
              </h4>
              <ul className="space-y-4 font-semibold">
                <li>
                  <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Events Calendar
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    Community Hub
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-slate-400 dark:text-slate-600 font-black mb-6 uppercase tracking-widest text-[11px]">
                Contact
              </h4>
              <ul className="space-y-5 font-semibold">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-slate-400 dark:text-slate-600 tracking-widest">
                    Support
                  </span>
                  <a href="mailto:hello@datum.org" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    hello@datum.org
                  </a>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-slate-400 dark:text-slate-600 tracking-widest">
                    Partnerships
                  </span>
                  <a href="mailto:partner@datum.org" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    partner@datum.org
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 dark:text-slate-600 text-xs font-black tracking-widest uppercase text-center md:text-left">
              © {year} DATUM COLLECTIVE. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
              {['Privacy', 'Ethics', 'Conduct'].map(label => (
                <a
                  key={label}
                  href="#"
                  className="text-slate-400 dark:text-slate-600 hover:text-indigo-600 dark:hover:text-slate-400 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;