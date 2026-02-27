import React from "react";
import Reveal from "../components/Reveal";
import StatsChart from "../components/StatsChart";
import {
  Award,
  Zap,
  Users,
  FolderKanban,
  Calendar
} from "lucide-react";
import { FEATURES } from "../constants";
import CountUp from "react-countup";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

/* ================= DATA ================= */

const memberGrowth = [
  { year: "2022", members: 40 },
  { year: "2023", members: 85 },
  { year: "2024", members: 120 }
];

const projectStats = [
  { year: "2022", projects: 12 },
  { year: "2023", projects: 22 },
  { year: "2024", projects: 35 }
];

const About: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-200 transition-colors duration-300">

      {/* ================= HERO ================= */}
      <Reveal>
        <section className="py-24 text-center max-w-7xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
          bg-indigo-100 dark:bg-indigo-500/10 
          text-indigo-600 dark:text-indigo-400 
          text-xs font-bold mb-6">
            <Zap className="w-3 h-3" />
            Our Foundation
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 
          bg-gradient-to-r from-indigo-600 to-blue-500 
          bg-clip-text text-transparent">
            About DATUM
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-slate-600 dark:text-slate-300">
            DATUM is a student-driven data science community focused on innovation,
            real-world learning, and building future-ready professionals.
          </p>
        </section>
      </Reveal>

      {/* ================= STATS ================= */}
      <Reveal>
        <section className="py-20 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-500 text-white p-8 rounded-2xl shadow-xl">
            <Users className="mb-3 opacity-80" />
            <h3 className="text-4xl font-black">
              <CountUp end={120} duration={2} />+
            </h3>
            <p className="opacity-90 text-sm">Active Members</p>
          </div>

          <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
            <FolderKanban className="mb-3 text-indigo-400" />
            <h3 className="text-4xl font-black">
              <CountUp end={35} duration={2} />+
            </h3>
            <p className="text-slate-400 text-sm">Live Projects</p>
          </div>

          <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl shadow-xl">
            <Calendar className="mb-3 text-indigo-400" />
            <h3 className="text-4xl font-black">
              <CountUp end={15} duration={2} />+
            </h3>
            <p className="text-slate-400 text-sm">Events Hosted</p>
          </div>
        </section>
      </Reveal>

      {/* ================= MINI DASHBOARD ================= */}
      <Reveal>
        <section className="py-20 bg-slate-100 dark:bg-slate-900/40">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <StatsChart />

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-xl">
              <p className="text-xs uppercase text-slate-400">
                Project Activity
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Live Velocity
              </h3>

              <div className="h-[120px] flex items-center justify-center 
              text-indigo-500 font-semibold">
                System Running Smooth ⚡
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= ANALYTICS ================= */}
      <Reveal>
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Community Growth Analytics
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold mb-4">Members Growth</h3>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={memberGrowth}>
                  <CartesianGrid strokeDasharray="2 6" opacity={0.2} />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="members"
                    stroke="#6366f1"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold mb-4">Projects Per Year</h3>

              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={projectStats}>
                  <CartesianGrid strokeDasharray="2 6" opacity={0.2} />
                  <XAxis dataKey="year" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Bar
                    dataKey="projects"
                    fill="#6366f1"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ================= WHY DATUM ================= */}
      <Reveal>
        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <Award className="text-indigo-500" />
            <h2 className="text-3xl font-bold">
              Why DATUM?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow hover:scale-105 transition"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </Reveal>

    </div>
  );
};

export default About;