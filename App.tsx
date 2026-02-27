import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
=======
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ScrollProgress from './components/ScrollProgress';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Gallery from './components/Gallery';
import Admin from './components/Admin';
import CareerPlanner from "./pages/CareerPlanner";
<<<<<<< HEAD
=======
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";
import ParticleBackground from "./components/ParticleBackground";
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1]
        }}
        className="flex-grow pt-36"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career-planner" element={<CareerPlanner />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-event" element={<AddEvent />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  function AnimatedRoutes() {
    const location = useLocation();

    return (
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/career-planner" element={<PageTransition><CareerPlanner /></PageTransition>} />
          <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
          <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    );
  }

  return (
    <Router>
      <GlobalBackground />
      <ScrollToTop />

<<<<<<< HEAD
      <div className="flex flex-col min-h-screen transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-200">

        <ScrollProgress />

        <Header theme={theme} onToggleTheme={toggleTheme} />

        <AnimatedRoutes />
=======
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

        <Footer />
        <ChatWidget />

      </div>
    </Router>
  );
};

export default App;