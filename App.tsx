import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Team from './pages/Team';
import Gallery from './components/Gallery';
import Admin from './components/Admin';
import CareerPlanner from "./pages/CareerPlanner";
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";
import ParticleBackground from "./components/ParticleBackground";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
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

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header theme={theme} onToggleTheme={toggleTheme} />

        <main className="flex-grow">
          <AnimatedRoutes />
        </main>

        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;
