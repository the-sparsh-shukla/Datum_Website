import React, { useState } from "react";
import { Linkedin, Github, Users, History } from "lucide-react";
import { TEAM_MEMBERS, TEAMS, LEADERS } from "../constants";
import Reveal from "../components/Reveal";

/* ─── Static past members data ─── */
const PAST_MEMBERS = [
  {
    id: 101, name: "Aryan Sharma", role: "Ex Co-Head, Tech Team",
    bio: "Former tech lead who built the foundation of DATUM's digital infrastructure. Now working at a top tech firm.",
    skills: ["Web Development", "Backend Development", "System Design"],
    photoUrl: "https://ui-avatars.com/api/?name=Aryan+Sharma&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 102, name: "Sneha Verma", role: "Ex Head, Design Team",
    bio: "Creative visionary who defined DATUM's visual identity. Currently pursuing her passion for product design.",
    skills: ["UI/UX Design", "Graphic Design", "Branding"],
    photoUrl: "https://ui-avatars.com/api/?name=Sneha+Verma&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 103, name: "Rohit Mishra", role: "Ex Head, Event Management",
    bio: "Organized DATUM's biggest events and hackathons. A natural leader who inspired the whole team.",
    skills: ["Event Planning", "Leadership", "Public Speaking"],
    photoUrl: "https://ui-avatars.com/api/?name=Rohit+Mishra&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 104, name: "Priya Tiwari", role: "Ex Co-Head, Media Team",
    bio: "Brought DATUM's story to life through compelling video content and social media strategy.",
    skills: ["Video Editing", "Content Writing", "Social Media"],
    photoUrl: "https://ui-avatars.com/api/?name=Priya+Tiwari&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 105, name: "Ankit Gupta", role: "Ex Member, Tech Team",
    bio: "Full-stack developer who contributed to multiple DATUM projects and mentored juniors.",
    skills: ["Frontend Development", "React", "Node.js"],
    photoUrl: "https://ui-avatars.com/api/?name=Ankit+Gupta&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 106, name: "Divya Singh", role: "Ex Member, PR Team",
    bio: "Managed DATUM's corporate relationships and alumni network with grace and professionalism.",
    skills: ["Networking", "Communication", "Public Relations"],
    photoUrl: "https://ui-avatars.com/api/?name=Divya+Singh&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 107, name: "Kartik Joshi", role: "Ex President",
    bio: "Founded DATUM and led it through its most formative years. His vision continues to guide the club.",
    skills: ["Leadership", "Strategy", "Community Building"],
    photoUrl: "https://ui-avatars.com/api/?name=Kartik+Joshi&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
  {
    id: 108, name: "Meera Patel", role: "Ex Vice President",
    bio: "Supported the club's operations and built the systems that DATUM still runs on today.",
    skills: ["Operations", "Planning", "Team Management"],
    photoUrl: "https://ui-avatars.com/api/?name=Meera+Patel&background=6366f1&color=fff&size=200",
    github: "#", linkedin: "#",
  },
];

/* ─── Dot data — static, outside component ─── */
const DOT_DATA = [
  { id:0,  w:8,  l:"4%",  t:"8%",  dur:"12s", del:"0s",   x:40,  y:30  },
  { id:1,  w:4,  l:"12%", t:"22%", dur:"9s",  del:"1.2s", x:-25, y:45  },
  { id:2,  w:6,  l:"23%", t:"60%", dur:"14s", del:"0.5s", x:35,  y:-40 },
  { id:3,  w:3,  l:"35%", t:"15%", dur:"10s", del:"2s",   x:-30, y:20  },
  { id:4,  w:9,  l:"48%", t:"75%", dur:"16s", del:"0s",   x:20,  y:-50 },
  { id:5,  w:4,  l:"58%", t:"35%", dur:"11s", del:"3s",   x:-40, y:35  },
  { id:6,  w:6,  l:"70%", t:"55%", dur:"13s", del:"1s",   x:30,  y:40  },
  { id:7,  w:3,  l:"82%", t:"20%", dur:"8s",  del:"2.5s", x:-20, y:-30 },
  { id:8,  w:7,  l:"90%", t:"80%", dur:"15s", del:"0.8s", x:25,  y:-25 },
  { id:9,  w:4,  l:"6%",  t:"45%", dur:"10s", del:"1.5s", x:50,  y:20  },
  { id:10, w:5,  l:"18%", t:"85%", dur:"12s", del:"3.5s", x:-35, y:-45 },
  { id:11, w:3,  l:"30%", t:"40%", dur:"9s",  del:"0.3s", x:20,  y:55  },
  { id:12, w:8,  l:"42%", t:"10%", dur:"17s", del:"2.2s", x:-45, y:30  },
  { id:13, w:4,  l:"55%", t:"90%", dur:"11s", del:"1s",   x:30,  y:-35 },
  { id:14, w:6,  l:"65%", t:"25%", dur:"13s", del:"4s",   x:-25, y:45  },
  { id:15, w:3,  l:"75%", t:"70%", dur:"10s", del:"0.7s", x:40,  y:-20 },
  { id:16, w:9,  l:"88%", t:"45%", dur:"14s", del:"2s",   x:-30, y:35  },
  { id:17, w:4,  l:"50%", t:"50%", dur:"8s",  del:"1.8s", x:25,  y:25  },
  { id:18, w:5,  l:"95%", t:"15%", dur:"11s", del:"3s",   x:-20, y:-40 },
  { id:19, w:3,  l:"2%",  t:"70%", dur:"9s",  del:"0.4s", x:45,  y:30  },
  { id:20, w:7,  l:"38%", t:"95%", dur:"15s", del:"1.3s", x:-40, y:-30 },
  { id:21, w:4,  l:"62%", t:"5%",  dur:"12s", del:"2.8s", x:30,  y:50  },
  { id:22, w:5,  l:"78%", t:"88%", dur:"10s", del:"0.6s", x:-35, y:20  },
  { id:23, w:3,  l:"15%", t:"50%", dur:"13s", del:"3.2s", x:20,  y:-45 },
  { id:24, w:6,  l:"45%", t:"30%", dur:"9s",  del:"1.7s", x:-25, y:35  },
];

const FloatingDots: React.FC = () => (
  <div style={{ position:"absolute", inset:0, overflow:"hidden", pointerEvents:"none", zIndex:0 }}>
    {DOT_DATA.map((d) => (
      <div key={d.id} style={{
        position: "absolute",
        width: d.w,
        height: d.w,
        left: d.l,
        top: d.t,
        borderRadius: "50%",
        background: "#818cf8",
        opacity: d.w >= 8 ? 0.55 : d.w >= 6 ? 0.4 : d.w >= 4 ? 0.28 : 0.18,
        animation: `dot${d.id} ${d.dur} ${d.del} ease-in-out infinite alternate`,
      }} />
    ))}
    <style>{DOT_DATA.map((d) =>
      `@keyframes dot${d.id}{0%{transform:translate(0,0)}100%{transform:translate(${d.x}px,${d.y}px)}}`
    ).join("")}</style>
  </div>
);

/* ─── Main component ─── */
const Team: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [showPast, setShowPast] = useState(false);

  const toggleCard = (id: number) => {
    setActiveCard((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* ── Hero header — ORIGINAL, UNTOUCHED ── */}
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

      {/* ── Everything below hero ── */}
      <div className="relative">
        <FloatingDots />

        {/* ── Leadership ── */}
        <Reveal>
          <section className="relative py-20 bg-slate-50 dark:bg-slate-900" style={{ zIndex: 1 }}>
            <div className="max-w-7xl mx-auto px-4">

              <div className="text-center mb-14">
                <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  Leadership
                </h2>
                <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {LEADERS.map((leader) => (
                  <div
                    key={leader.id}
                    className="bg-white dark:bg-slate-800 rounded-3xl shadow-lg p-6 
                    flex flex-col items-center text-center w-full max-w-[260px]"
                  >
                    <img
                      src={leader.photoUrl}
                      alt={leader.name}
                      className="w-28 h-28 rounded-xl object-cover shadow mb-4"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(leader.name)}&background=6366f1&color=fff&size=200`;
                      }}
                    />
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      {leader.name}
                    </h3>
                    <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">
                      {leader.role}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                      {leader.bio}
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                      <a href={leader.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition text-slate-400 hover:text-indigo-500">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={leader.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition text-slate-400 hover:text-indigo-500">
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        </Reveal>

        {/* ── Teams sections ── */}
        {TEAMS.map((teamName) => {
          const heads = TEAM_MEMBERS.filter(
            (m) => m.team === teamName && m.isHead
          );
          const members = TEAM_MEMBERS.filter(
            (m) => m.team === teamName && !m.isHead
          );

          return (
            <Reveal key={teamName}>
              <section className="relative py-20 odd:bg-white even:bg-slate-50 dark:odd:bg-slate-950 dark:even:bg-slate-900" style={{ zIndex: 1 }}>
                <div className="max-w-7xl mx-auto px-4">

                  <div className="text-center mb-14">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {teamName}
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
                  </div>

                  {heads.length > 0 && (
                    <>
                      <p className="text-center text-xs font-bold uppercase tracking-widest text-indigo-500 mb-6">
                        Head &amp; Co‑Head
                      </p>
                      <div className={`flex flex-wrap justify-center gap-8 mb-12 ${heads.length === 1 ? "max-w-xs mx-auto" : ""}`}>
                        {heads.map((member) => (
                          <MemberCard key={member.id} member={member} active={activeCard === member.id} onToggle={toggleCard} />
                        ))}
                      </div>
                    </>
                  )}

                  {members.length > 0 && (
                    <>
                      <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
                        Members
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((member) => (
                          <MemberCard key={member.id} member={member} active={activeCard === member.id} onToggle={toggleCard} />
                        ))}
                      </div>
                    </>
                  )}

                </div>
              </section>
            </Reveal>
          );
        })}

        {/* ── Past Members Button ── */}
        <Reveal>
          <section className="relative py-16 bg-slate-50 dark:bg-slate-900" style={{ zIndex: 1 }}>
            <div className="max-w-7xl mx-auto px-4">

              {/* Button + tagline */}
              {!showPast && (
                <div className="flex flex-col items-center gap-4">
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Those who built DATUM before us — the legends who started it all.
                  </p>
                  <button
                    onClick={() => setShowPast(true)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                    bg-white dark:bg-slate-800
                    border border-indigo-200 dark:border-indigo-700
                    text-indigo-600 dark:text-indigo-400
                    text-sm font-bold shadow-sm
                    hover:bg-indigo-50 dark:hover:bg-indigo-950
                    hover:border-indigo-400 dark:hover:border-indigo-500
                    hover:shadow-md transition-all duration-200"
                  >
                    <History className="w-4 h-4" />
                    View Past Members
                  </button>
                </div>
              )}

              {/* Past members grid */}
              {showPast && (
                <>
                  <div className="text-center mb-14">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      Past Members
                    </h2>
                    <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-indigo-500" />
                    <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm">
                      Those who built DATUM before us — the legends who started it all.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {PAST_MEMBERS.map((member) => (
                      <MemberCard
                        key={member.id}
                        member={member}
                        active={activeCard === member.id}
                        onToggle={toggleCard}
                      />
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setShowPast(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full
                      bg-white dark:bg-slate-800
                      border border-slate-200 dark:border-slate-700
                      text-slate-500 dark:text-slate-400
                      text-sm font-bold shadow-sm
                      hover:bg-slate-50 dark:hover:bg-slate-700
                      transition-all duration-200"
                    >
                      Hide Past Members
                    </button>
                  </div>
                </>
              )}

            </div>
          </section>
        </Reveal>

      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MemberCard — ORIGINAL, UNTOUCHED
───────────────────────────────────────── */
type MemberCardProps = {
  member: (typeof TEAM_MEMBERS)[number] | (typeof PAST_MEMBERS)[number];
  active: boolean;
  onToggle: (id: number) => void;
};

const MemberCard: React.FC<MemberCardProps> = ({ member, active, onToggle }) => (
  <div
    className={`flip-card perspective cursor-pointer w-full max-w-[260px] ${active ? "active" : ""}`}
    onClick={() => onToggle(member.id)}
  >
    <div className="flip-inner relative h-[420px]">

      {/* Front */}
      <div className="flip-front absolute inset-0 bg-white dark:bg-slate-800 
      rounded-3xl shadow-lg p-6 flex flex-col items-center text-center">
        <img
          src={member.photoUrl}
          alt={member.name}
          className="w-28 h-28 rounded-xl object-cover shadow mb-4"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=6366f1&color=fff&size=200`;
          }}
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

      {/* Back */}
      <div className="flip-back absolute inset-0 bg-indigo-600 
      text-white rounded-3xl shadow-lg p-6 flex flex-col justify-center text-center">
        <h3 className="font-bold mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {member.skills.map((skill: string, i: number) => (
            <span key={i} className="bg-white/20 px-3 py-1 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <Linkedin />
          </a>
          <a href={member.github} target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <Github />
          </a>
        </div>
      </div>

    </div>
  </div>
);

export default Team;