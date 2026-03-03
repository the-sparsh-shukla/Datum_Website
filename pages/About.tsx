import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";
import NeuralBackground from "../components/NeuralBackground";
import GlowCursor from "../components/GlowCursor";

/* ================= 3D DATA SPHERE ================= */

const DataSphere = () => {
  const points = random.inSphere(new Float32Array(6000), { radius: 1.5 });

  return (
    <Points positions={points} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.015}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
};

/* ================= ABOUT PAGE ================= */

const About: React.FC = () => {
  return (
    <>
      <NeuralBackground />
      <GlowCursor />

      <div className="bg-slate-950 text-white overflow-hidden">

        {/* ================= HERO ================= */}

        <section className="relative h-screen flex items-center justify-center">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
              <DataSphere />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
            </Suspense>
          </Canvas>

          <div className="absolute text-center px-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              About DATUM
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-slate-300 text-lg">
              The official Data Analytics & Data Science society of
              GLA University, empowering students to build the future with data.
            </p>
          </div>
        </section>

        {/* ================= WHO WE ARE ================= */}

        <section className="py-28 max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold mb-10 text-indigo-400"
          >
            Who We Are
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-slate-300 text-lg leading-relaxed max-w-4xl mx-auto"
          >
            DATUM is the technical wing of the Computer Society ABACUS
            under the Department of Computer Engineering & Applications at
            GLA University, Mathura. Founded in 2017, DATUM is dedicated to
            fostering excellence in Data Analytics and Data Science.
          </motion.p>
        </section>

        {/* ================= OBJECTIVES ================= */}

        <section className="py-28 bg-slate-900 px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
            Our Objectives
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

            {[
              {
                title: "Career Awareness",
                desc: "Organizing workshops, seminars and events to introduce students to exciting careers in Data Science & Analytics."
              },
              {
                title: "Practical & Research Exposure",
                desc: "Providing structured guidance, study paths and real-world experience in solving socio-economic and health-based models."
              },
              {
                title: "Skill Development",
                desc: "Enhancing hands-on expertise in Data Mining, Data Wrangling, Visualization and Machine Learning."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10
                p-10 rounded-2xl shadow-xl"
              >
                <h3 className="text-xl font-bold mb-4 text-indigo-400">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= CORE DOMAINS ================= */}

        <section className="py-28 px-6 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-indigo-400">
            Core Domains
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              "Data Mining",
              "Data Wrangling",
              "Data Visualization",
              "Machine Learning"
            ].map((domain, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/5 backdrop-blur-lg border border-white/10
                p-8 rounded-xl"
              >
                <p className="text-lg font-semibold text-slate-200">
                  {domain}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= TIMELINE ================= */}

        <section className="py-28 px-6 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-indigo-400">
            Our Journey
          </h2>

          <div className="space-y-20 border-l border-indigo-500/30 pl-10">

            {[
              {
                year: "2017",
                title: "Foundation of DATUM",
                text: "Established as the Data Science society under Computer Society ABACUS at GLA University, Mathura."
              },
              {
                year: "2017 – Present",
                title: "Workshops & Technical Events",
                text: "Conducting seminars, hands-on sessions and collaborative projects to prepare students for real-world data challenges."
              },
              {
                year: "2026",
                title: "AI Battle Arena",
                text: "Organized AI Battle Arena during Annual Tech Fest — a one-day AI competition focused on automated evaluation, model accuracy and performance."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-12 top-2 w-5 h-5 bg-indigo-500 rounded-full shadow-lg shadow-indigo-500/40" />

                <h3 className="text-2xl font-bold text-indigo-400">
                  {item.year}
                </h3>

                <h4 className="text-lg font-semibold mt-2 mb-3">
                  {item.title}
                </h4>

                <p className="text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </section>

        {/* ================= CTA ================= */}

        <section className="py-28 text-center bg-slate-900">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Join The Data Revolution
          </h2>

          <p className="text-slate-400 mb-8">
            Be a part of DATUM and build the future of data-driven innovation.
          </p>

          <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 rounded-xl font-bold transition">
            Become a Member
          </button>
        </section>

      </div>
    </>
  );
};

export default About;