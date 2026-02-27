import React from "react";
import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import { FEATURES } from "../constants";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      <div className="pt-28">
        <Hero />
      </div>

      <SectionDivider />

      <Reveal>
        <section className="py-28 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white">
                Why Join Datum?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
                Everything you need to accelerate your journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {FEATURES.map((feature, i) => (
                <div
                  key={i}
                  className="p-10 rounded-3xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition"
                >
                  {feature.icon}
                  <h3 className="font-black mt-6 text-lg text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-3">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      <SectionDivider flip />

      <Reveal>
        <section className="py-28 bg-white dark:bg-slate-950">
          <AboutSummary />
        </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <section className="py-32 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to transform your data career?
            </h2>
            <p className="text-indigo-100 text-xl mb-10">
              Join the fastest growing student data community.
            </p>
            <button className="px-10 py-5 bg-white text-indigo-600 font-black rounded-2xl hover:scale-105 transition">
              Join Community
            </button>
          </div>
        </section>
      </Reveal>

    </div>
  );
};

export default Home;