import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";
import ScrollProgress from "./components/ScrollProgress";
import GlobalBackground from "./components/GlobalBackground";
import PageTransition from "./components/PageTransition";

import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Team from "./pages/Team";
import Gallery from "./components/Gallery";
import Admin from "./components/Admin";
import AddEvent from "./components/AddEvent";
import CareerPlanner from "./pages/CareerPlanner";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />

        <Route path="/about" element={
          <PageTransition>
            <About />
          </PageTransition>
        } />

        <Route path="/team" element={
          <PageTransition>
            <Team />
          </PageTransition>
        } />

        <Route path="/events" element={
          <PageTransition>
            <Events />
          </PageTransition>
        } />

        <Route path="/gallery" element={
          <PageTransition>
            <Gallery />
          </PageTransition>
        } />

        <Route path="/career-planner" element={
          <PageTransition>
            <CareerPlanner />
          </PageTransition>
        } />

        <Route path="/admin" element={
          <PageTransition>
            <Admin />
          </PageTransition>
        } />

        <Route path="/admin/add-event" element={
          <PageTransition>
            <AddEvent />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <GlobalBackground />
      <ScrollToTop />

      <div className="relative flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
        <ScrollProgress />
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <AnimatedRoutes />
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
};

export default App;