<<<<<<< HEAD
import React from "react";
import Hero from "../components/Hero";
import AboutSummary from "../components/AboutSummary";
import { FEATURES } from "../constants";
import Reveal from "../components/Reveal";
import SectionDivider from "../components/SectionDivider";
=======

import React from 'react';
import Hero from '../components/Hero';
import AboutSummary from '../components/AboutSummary';
import { FEATURES } from '../constants';
import Reveal from "../components/Reveal";
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
<<<<<<< HEAD

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
=======
      <Hero />
      <Reveal>
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 dark:text-white">Why Join Datum?</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
            Everything you need to accelerate your journey from student to data professional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, i) => (
            <div key={i} className="group p-8 rounded-[2.5rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:border-indigo-500/50 shadow-sm hover:shadow-xl dark:hover:shadow-indigo-500/10 transition-all hover:-translate-y-2">
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl w-fit mb-6 shadow-inner ring-1 ring-slate-100 dark:ring-transparent group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-white">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      </Reveal>
      <AboutSummary />
>>>>>>> 74af6f8d92de15326b18b5f1d72a01c7588a0358

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