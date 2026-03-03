import React, { useState } from "react";
import { Linkedin, Github, Users } from "lucide-react";
import { TEAM_MEMBERS } from "../constants";
import Reveal from "../components/Reveal";

const Team: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      <Reveal>
        <section className="py-24 text-center border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4">

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
            bg-indigo-100 dark:bg-indigo-500/10 
            text-indigo-600 dark:text-indigo-400 
            text-xs font-bold mb-6">
              <Users className="w-3 h-3" />
              Core Collective
            </div>

            <h1 className="text-5xl font-black text-slate-900 dark:text-white mb-4">
              Meet The DATUM Team
            </h1>

            <p className="text-slate-600 dark:text-slate-300">
              The innovators, builders and community leaders behind DATUM.
            </p>

          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {TEAM_MEMBERS.map((member) => (

              <div
                key={member.id}
                className={`flip-card perspective cursor-pointer ${
                  activeCard === member.id ? "active" : ""
                }`}
                onClick={() => toggleCard(member.id)}
              >
                <div className="flip-inner relative h-[420px]">

                  <div className="flip-front absolute inset-0 bg-white dark:bg-slate-800 
                  rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">

                    <img
                      src={member.photoUrl}
                      alt={member.name}
                      className="w-28 h-28 rounded-xl object-cover shadow mb-4"
                    />

                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {member.name}
                    </h3>

                    <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">
                      {member.role}
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {member.bio}
                    </p>

                    <span className="text-xs mt-auto text-slate-400">
                      Tap / Hover to flip
                    </span>

                  </div>

                  <div className="flip-back absolute inset-0 bg-indigo-600 
                  text-white rounded-3xl shadow-lg p-6 flex flex-col justify-center text-center">

                    <h3 className="font-bold mb-4">Skills</h3>

                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill: string, i: number) => (
                        <span
                          key={i}
                          className="bg-white/20 px-3 py-1 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition"
                      >
                        <Linkedin />
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:scale-110 transition"
                      >
                        <Github />
                      </a>
                    </div>

                  </div>

                </div>
              </div>

            ))}

          </div>
        </section>
      </Reveal>

    </div>
  );
};

export default Team;