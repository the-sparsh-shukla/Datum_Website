import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="h-32 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-950" />

      <footer className="relative bg-slate-950 pt-24 pb-14 overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.6),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">

            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-4 mb-8 group">
                <div className="w-14 h-14 bg-white p-2 rounded-2xl shadow-2xl group-hover:rotate-6 transition-transform duration-300">
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

                <span className="text-4xl font-black text-white tracking-tight">
                  DATUM
                </span>
              </Link>

              <p className="text-slate-400 max-w-lg mb-10 leading-relaxed text-lg">
                The leading student-driven data hub bridging academia and the real-world data industry through innovation, collaboration, and hands-on learning.
              </p>

              <div className="flex gap-5">
                {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="p-3 bg-slate-900 rounded-2xl hover:bg-indigo-600 transition-all duration-300 text-slate-500 hover:text-white hover:-translate-y-1 shadow-lg ring-1 ring-slate-800"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[11px] opacity-40">
                Resources
              </h4>

              <ul className="space-y-5 text-slate-400 font-semibold">
                <li>
                  <Link to="/" className="hover:text-indigo-400 transition-colors">
                    Platform
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-indigo-400 transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="hover:text-indigo-400 transition-colors">
                    Events Calendar
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    Community Hub
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black mb-8 uppercase tracking-widest text-[11px] opacity-40">
                Contact
              </h4>

              <ul className="space-y-6 text-slate-400 font-semibold">
                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-slate-600 tracking-tight">
                    Support
                  </span>
                  <span className="hover:text-white transition-colors">
                    hello@datum.org
                  </span>
                </li>

                <li className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase text-slate-600 tracking-tight">
                    Partnerships
                  </span>
                  <span className="hover:text-white transition-colors">
                    partner@datum.org
                  </span>
                </li>
              </ul>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">

            <p className="text-slate-600 text-xs font-black tracking-widest uppercase text-center md:text-left">
              © {year} DATUM COLLECTIVE. ALL RIGHTS RESERVED.
            </p>

            <div className="flex gap-10 text-slate-600 text-[10px] font-black tracking-[0.25em] uppercase">
              <a href="#" className="hover:text-slate-400 transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                Ethics
              </a>
              <a href="#" className="hover:text-slate-400 transition-colors">
                Conduct
              </a>
            </div>

          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer;