import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Zap, ArrowRight, X, Calendar, MapPin, Clock, ChevronDown, ExternalLink, Users, Sparkles } from 'lucide-react'
import { UPCOMING_EVENTS, PAST_EVENTS } from '../constants'
import { Event } from '../types'
import Reveal from '../components/Reveal'
import { createPortal } from 'react-dom'

type EventCategory = 'All' | 'Workshop' | 'Project' | 'Networking' | 'Competition'

const LEGACY_EVENTS = [
  { title: "Workshop on Convolutional Neural Network", date: "February 26, 2022", description: "Hands-on workshop focused on building CNN models and understanding deep learning fundamentals.", tag: "Workshop" },
  { title: "Project-X – Face Recognition Workshop", date: "April 21, 2023", description: "Students built a real-time face recognition system using machine learning.", tag: "Project" },
  { title: "Hands-on Workshop – GenAI + IoT", date: "October 19, 2024", description: "Practical workshop combining Generative AI with real-world IoT applications.", tag: "Workshop" },
  { title: "Crack the Code – Placement Experience Initiative", date: "November 22, 2024", description: "Placement simulation with mock assessments and interviews.", tag: "Networking" },
  { title: "Hack & Viz 2.0 – 30 Hours Hackathon", date: "April 19–20, 2025", description: "30-hour coding hackathon focused on innovative solutions.", tag: "Competition" },
  { title: "Internal Smart India Hackathon", date: "August 29–31, 2025", description: "Students developed solutions for national-level problem statements.", tag: "Competition" },
  { title: "W3M AI Meetup", date: "September 15, 2025", description: "AI tools, Web3 discussions, internship guidance and project mentorship.", tag: "Networking" },
  { title: "Devi@thon 2025 – National Hackathon", date: "October 9–11, 2025", description: "National-level hackathon with ₹5L+ prize pool and industry mentorship.", tag: "Competition" },
  { title: "Own Your Identity in WEB3 Workshop", date: "November 11, 2025", description: "Workshop on digital identity and Web3 technologies.", tag: "Workshop" },
  { title: "AI Battle Arena – Technavaya", date: "January 30–31, 2026", description: "AI competition where teams built high-performance AI models.", tag: "Competition" }
]

const tagColors: Record<string, string> = {
  Workshop: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Project: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  Networking: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Competition: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
}

const DataParticle: React.FC<{ style: React.CSSProperties; char: string }> = ({ style, char }) => (
  <span
    className="absolute font-mono text-indigo-400/20 dark:text-indigo-400/10 select-none pointer-events-none animate-float"
    style={style}
  >
    {char}
  </span>
)

const AnimatedNumber: React.FC<{ value: number; suffix?: string }> = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0
        const step = Math.ceil(value / 40)
        const timer = setInterval(() => {
          start += step
          if (start >= value) { setCount(value); clearInterval(timer) }
          else setCount(start)
        }, 30)
        observer.disconnect()
      }
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])
  return <span ref={ref}>{count}{suffix}</span>
}

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory>('All')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [registeringEvent, setRegisteringEvent] = useState<Event | null>(null)
  const [regName, setRegName] = useState('')
  const [regEmail, setRegEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [pastVisible, setPastVisible] = useState(6)
  const [activeTimeline, setActiveTimeline] = useState<number | null>(null)

  useEffect(() => {
    const isOpen = !!(selectedEvent || registeringEvent)
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedEvent, registeringEvent])

  const categories: EventCategory[] = ['All', 'Workshop', 'Project', 'Networking', 'Competition']

  const filteredUpcomingEvents = useMemo(() => {
    if (selectedCategory === 'All') return UPCOMING_EVENTS
    return UPCOMING_EVENTS.filter(e => e.category === selectedCategory)
  }, [selectedCategory])

  const visiblePastEvents = PAST_EVENTS.slice(0, pastVisible)
  const hasMore = pastVisible < PAST_EVENTS.length

  const closeModal = () => {
    setSelectedEvent(null)
    setRegisteringEvent(null)
    setRegName('')
    setRegEmail('')
  }

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      closeModal()
      alert(`Successfully registered for ${registeringEvent?.title}!`)
    }, 800)
  }

  const particles = useMemo(() => {
    const chars = ['01', '∑', 'λ', '∂', 'π', 'σ', '∞', 'df', 'AI', 'ML', '{}', '[]']
    return Array.from({ length: 18 }, (_, i) => ({
      char: chars[i % chars.length],
      style: {
        left: `${(i * 17 + 5) % 95}%`,
        top: `${(i * 23 + 8) % 85}%`,
        fontSize: `${10 + (i % 4) * 4}px`,
        animationDelay: `${i * 0.4}s`,
        animationDuration: `${6 + (i % 4)}s`,
      }
    }))
  }, [])

  // Set of upcoming event IDs for quick lookup
  const upcomingEventIds = useMemo(() => new Set(UPCOMING_EVENTS.map(e => e.id)), [])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-20px) rotate(5deg); opacity: 0.8; }
        }
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-float { animation: float linear infinite; }
        .animate-slide-up { animation: slide-up 0.5s ease forwards; }
        .shimmer-text {
          background: linear-gradient(90deg, #6366f1, #818cf8, #a5b4fc, #6366f1);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .card-hover {
          transition: transform 0.3s cubic-bezier(.175,.885,.32,1.275), box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px) scale(1.012);
          box-shadow: 0 24px 48px -12px rgba(99,102,241,0.25);
        }
        .dark .card-hover:hover {
          box-shadow: 0 24px 48px -12px rgba(99,102,241,0.35);
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .dark .grid-bg {
          background-image:
            linear-gradient(rgba(99,102,241,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.1) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .glow-border {
          position: relative;
        }
        .glow-border::before {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          background: linear-gradient(135deg, #6366f1, #818cf8, transparent, transparent);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        .glow-border:hover::before {
          opacity: 1;
        }
        .modal-enter {
          animation: slide-up 0.35s cubic-bezier(.175,.885,.32,1.275) forwards;
        }
        .category-pill {
          position: relative;
          overflow: hidden;
        }
        .category-pill::after {
          content: '';
          position: absolute;
          inset: 0;
          background: white;
          opacity: 0;
          transition: opacity 0.2s;
          border-radius: inherit;
        }
        .category-pill:hover::after { opacity: 0.08; }
        .past-card-img {
          overflow: hidden;
        }
        .past-card-img img {
          transition: transform 0.5s ease;
        }
        .past-card-img:hover img {
          transform: scale(1.06);
        }
      `}</style>

      {/* ═══════════ HERO ═══════════ */}
      <Reveal>
        <section className="relative py-28 overflow-hidden grid-bg">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 blur-[100px] rounded-full -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-violet-500/10 dark:bg-violet-500/10 blur-[80px] rounded-full pointer-events-none" />
          {particles.map((p, i) => (
            <DataParticle key={i} char={p.char} style={p.style} />
          ))}
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200/60 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-8 shadow-sm">
              <Zap className="w-3 h-3 fill-current" />
              <span>Datum Experience</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9] mb-6">
              Where Data<br />
              <span className="shimmer-text">Meets Action</span>
            </h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto mb-10 font-light leading-relaxed">
              Workshops. Hackathons. Networking. The full-spectrum data science experience — engineered for the curious.
            </p>
            <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-white/70 dark:bg-slate-900/70 backdrop-blur border border-slate-200/60 dark:border-slate-800/60 shadow-lg">
              {[
                { label: 'Events Hosted', value: LEGACY_EVENTS.length, suffix: '+' },
                { label: 'Attendees', value: 1200, suffix: '+' },
                { label: 'Years Running', value: 4, suffix: '' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">
                    <AnimatedNumber value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ═══════════ UPCOMING EVENTS ═══════════ */}
      <Reveal>
        <section className="py-24 bg-slate-50 dark:bg-slate-900/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-indigo-950/20 dark:to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-14">
                <div>
                  <p className="text-indigo-500 text-xs font-black tracking-widest uppercase mb-2 flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-indigo-500 inline-block" />
                    Live & Upcoming
                  </p>
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                    Upcoming Sprints
                  </h2>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`category-pill px-4 py-2 rounded-xl text-xs font-black transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 scale-105'
                          : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:border-indigo-300 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {filteredUpcomingEvents.map((event, i) => (
                  <div
                    key={event.id}
                    className="card-hover glow-border bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col sm:flex-row group"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="relative w-full sm:w-2/5 h-52 sm:h-auto overflow-hidden flex-shrink-0">
                      <img
                        src={event.imageUrl}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/40 to-transparent" />
                      <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${tagColors[event.category] || tagColors.Workshop}`}>
                        {event.category}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                          {event.title}
                        </h3>
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                            <span>{event.date}</span>
                          </div>
                          {(event as any).time && (
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <Clock className="w-3.5 h-3.5 text-indigo-400" />
                              <span>{(event as any).time}</span>
                            </div>
                          )}
                          {(event as any).location && (
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                              <span>{(event as any).location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                        <button
                          onClick={() => setSelectedEvent(event)}
                          className="flex items-center gap-1.5 text-slate-600 dark:text-slate-300 text-xs font-bold hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          DETAILS
                        </button>
                        <button
                          onClick={() => setRegisteringEvent(event)}
                          className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-black rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95"
                        >
                          REGISTER ME
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Empty state when no events match filter */}
              {filteredUpcomingEvents.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 flex items-center justify-center mb-5">
                    <Calendar className="w-7 h-7 text-indigo-400" />
                  </div>
                  <h3 className="text-lg font-black text-slate-700 dark:text-slate-200 mb-2">
                    Nothing on the radar just yet
                  </h3>
                  <p className="text-sm text-slate-400 dark:text-slate-500 max-w-xs">
                    No upcoming events right now — check back soon or watch this space for the next sprint.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-xs text-indigo-500 font-bold animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 inline-block" />
                    Something's brewing...
                  </div>
                </div>
              )}
            </div>
          </section>
        </Reveal>

      {/* ═══════════ PAST EVENTS ═══════════ */}
      <Reveal>
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-14">
              <p className="text-indigo-500 text-xs font-black tracking-widest uppercase mb-2 flex items-center gap-2">
                <span className="w-6 h-[2px] bg-indigo-500 inline-block" />
                Archived
              </p>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Past Events
              </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {visiblePastEvents.map((event, i) => (
                <div
                  key={event.id}
                  className="card-hover group bg-white dark:bg-slate-900 rounded-3xl shadow-md border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col animate-slide-up"
                  style={{ animationDelay: `${(i % 6) * 0.07}s` }}
                >
                  {/* Image with overlay */}
                  <div className="past-card-img relative h-48 overflow-hidden">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${tagColors[event.category] || tagColors.Workshop}`}>
                      {event.category}
                    </span>
                    {/* Hover reveal */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="w-full text-center text-white text-xs font-bold py-2 rounded-xl bg-white/20 backdrop-blur hover:bg-white/30 transition border border-white/30"
                      >
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-3">
                        <Calendar className="w-3 h-3" />
                        <span>{event.date}</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    {/* Details only — no Register for past events */}
                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 text-xs font-bold hover:underline transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Show more / Show less */}
            {PAST_EVENTS.length > 6 && (
              <div className="text-center mt-14">
                {hasMore ? (
                  <button
                    onClick={() => setPastVisible(v => v + 6)}
                    className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-indigo-500/40 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 text-sm font-black rounded-2xl hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-200 hover:border-indigo-500 hover:scale-105 group"
                  >
                    <span>SHOW MORE</span>
                    <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    <span className="text-xs opacity-60">({PAST_EVENTS.length - pastVisible} remaining)</span>
                  </button>
                ) : (
                  <button
                    onClick={() => setPastVisible(6)}
                    className="inline-flex items-center gap-3 px-8 py-3.5 border-2 border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm font-black rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200"
                  >
                    SHOW LESS ↑
                  </button>
                )}
              </div>
            )}
          </div>
        </section>
      </Reveal>

      {/* ═══════════ OUR LEGACY ═══════════ */}
      <Reveal>
        <section className="py-28 bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="text-center mb-20">
              <p className="text-indigo-500 text-xs font-black tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
                <Sparkles className="w-3 h-3" />
                Our Journey
                <Sparkles className="w-3 h-3" />
              </p>
              <h2 className="text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
                Our Legacy
              </h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                A trail of milestones — from first workshops to national hackathons
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full mx-auto mt-6" />
            </div>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-b from-indigo-500 via-violet-400 to-indigo-300 rounded-full" />
              </div>
              <div className="space-y-12">
                {LEGACY_EVENTS.map((event, index) => {
                  const isLeft = index % 2 === 0
                  const isActive = activeTimeline === index
                  return (
                    <div
                      key={index}
                      className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'} relative`}
                    >
                      <div
                        className="relative w-[44%] cursor-pointer group"
                        onClick={() => setActiveTimeline(isActive ? null : index)}
                      >
                        <div className={`
                          bg-white dark:bg-slate-900 rounded-2xl p-5
                          border transition-all duration-300 shadow-sm
                          ${isActive
                            ? 'border-indigo-500 shadow-xl shadow-indigo-500/20 scale-[1.03]'
                            : 'border-slate-100 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02]'
                          }
                        `}>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest mb-3 ${tagColors[event.tag] || tagColors.Workshop}`}>
                            {event.tag}
                          </span>
                          <p className="text-indigo-500 dark:text-indigo-400 text-[11px] font-bold mb-1 flex items-center gap-1.5">
                            <Calendar className="w-3 h-3" />
                            {event.date}
                          </p>
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug mb-2">
                            {event.title}
                          </h3>
                          <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1 border-t border-slate-100 dark:border-slate-800 mt-2">
                              {event.description}
                            </p>
                          </div>
                          <div className={`mt-2 text-[10px] font-bold transition-colors ${isActive ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-600 group-hover:text-indigo-400'}`}>
                            {isActive ? '▲ LESS' : '▼ MORE'}
                          </div>
                          <div className={`absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r ${
                            isLeft
                              ? 'right-0 translate-x-full from-indigo-400 to-indigo-200'
                              : 'left-0 -translate-x-full from-indigo-200 to-indigo-400'
                          } ${isActive ? 'opacity-100' : 'opacity-40'} transition-opacity`} />
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 z-10">
                        <div className={`relative w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 shadow-lg transition-all duration-300 ${
                          isActive
                            ? 'bg-violet-500 scale-125 shadow-violet-500/50'
                            : 'bg-indigo-500 hover:scale-110'
                        }`}>
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-violet-500 animate-ping opacity-60" />
                          )}
                        </div>
                      </div>
                      {(index === 0 || LEGACY_EVENTS[index - 1].date.split(', ')[1] !== event.date.split(', ')[1]) && (
                        <div className="absolute left-1/2 -translate-x-1/2 -top-7 z-20">
                          <span className="px-3 py-1 rounded-full bg-indigo-600 text-white text-[9px] font-black tracking-widest shadow-lg">
                            {event.date.split(', ')[1] || event.date.split(' ').pop()}
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <div className="flex justify-center mt-16">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 shadow-lg shadow-indigo-500/30" />
                  <p className="text-xs text-slate-400 font-medium">The story continues...</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ═══════════ EVENT DETAILS MODAL ═══════════ */}
      {selectedEvent && createPortal(
        <>
          <div
            className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal-enter bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden w-full max-w-lg max-h-[90vh] overflow-y-auto"
            >
              {selectedEvent.imageUrl && (
                <div className="relative h-52 overflow-hidden">
                  <img src={selectedEvent.imageUrl} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/40 hover:bg-black/60 rounded-full flex items-center justify-center text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              <div className="p-7">
                <h2 className="text-xl font-black text-slate-900 dark:text-white mb-4">
                  {selectedEvent.title}
                </h2>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <Calendar className="w-4 h-4" />
                  {selectedEvent.date}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                  {selectedEvent.description}
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={closeModal}
                    className="flex-1 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-bold hover:border-slate-400 transition"
                  >
                    Close
                  </button>
                  {/* Register button only appears for upcoming events */}
                  {upcomingEventIds.has(selectedEvent.id) && (
                    <button
                      onClick={() => {
                        setSelectedEvent(null)
                        setRegisteringEvent(selectedEvent)
                      }}
                      className="flex-1 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold flex items-center justify-center gap-2 transition"
                    >
                      Register <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )}

      {/* ═══════════ REGISTER MODAL ═══════════ */}
      {registeringEvent && createPortal(
        <>
          <div
            className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="modal-enter bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <div className="px-7 pt-7 pb-5 border-b border-slate-100 dark:border-slate-800">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-xs text-indigo-500 font-black uppercase tracking-widest mb-1">Register Now</p>
                    <h2 className="text-lg font-black text-slate-900 dark:text-white leading-snug pr-8">
                      {registeringEvent.title}
                    </h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                  >
                    <X className="w-4 h-4 text-slate-400" />
                  </button>
                </div>
              </div>
              <form onSubmit={handleRegisterSubmit} className="p-7 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={regName}
                    onChange={e => setRegName(e.target.value)}
                    placeholder="Your name"
                    className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">Email Address</label>
                  <input
                    type="email"
                    value={regEmail}
                    onChange={e => setRegEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white font-black rounded-2xl flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-[1.01] active:scale-[0.99] mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>Confirm Registration <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </div>
          </div>
        </>,
        document.body
      )}

    </div>
  )
}

export default Events