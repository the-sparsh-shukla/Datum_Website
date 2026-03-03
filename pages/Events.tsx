import React, { useState, useMemo } from 'react';
import {
  Calendar,
  MapPin,
  ArrowRight,
  History,
  Zap,
  Filter,
  X,
  Info,
  User,
  Mail,
  BellRing
} from 'lucide-react';
import { UPCOMING_EVENTS, PAST_EVENTS } from '../constants';
import { Event } from '../types';
import Reveal from '../components/Reveal';

type EventCategory =
  | 'All'
  | 'Workshop'
  | 'Project'
  | 'Networking'
  | 'Competition';

const Events: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<EventCategory>('All');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [registeringEvent, setRegisteringEvent] =
    useState<Event | null>(null);

  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories: EventCategory[] = [
    'All',
    'Workshop',
    'Project',
    'Networking',
    'Competition'
  ];

  const filteredUpcomingEvents = useMemo(() => {
    if (selectedCategory === 'All') return UPCOMING_EVENTS;
    return UPCOMING_EVENTS.filter(
      event => event.category === selectedCategory
    );
  }, [selectedCategory]);

  const closeModal = () => {
    setSelectedEvent(null);
    setRegisteringEvent(null);
    setRegName('');
    setRegEmail('');
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      closeModal();
      alert(
        `Successfully registered for ${registeringEvent?.title}!`
      );
    }, 800);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500">

      {/* ================= HEADER ================= */}
      <Reveal>
        <section className="relative py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-indigo-500/5 dark:bg-indigo-600/10 blur-3xl rounded-full translate-x-1/2"></div>

          <div className="max-w-7xl mx-auto px-4 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black tracking-widest uppercase mb-6">
              <Zap className="w-3 h-3" />
              <span>Datum Experience</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter mb-8">
              Join the <br />
              <span className="text-indigo-600 dark:text-indigo-500">
                Events Collective
              </span>
            </h1>
          </div>
        </section>
      </Reveal>

      {/* ================= UPCOMING EVENTS ================= */}
      <Reveal>
        <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">

            <div className="flex justify-between items-center mb-12 flex-wrap gap-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                Upcoming Sprints
              </h2>

              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs font-black transition ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              {filteredUpcomingEvents.map(event => (
                <div
                  key={event.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row"
                >
                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full sm:w-1/3 h-48 object-cover"
                  />

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-2">
                        {event.category}
                      </p>
                      <h3 className="text-xl font-bold mb-2">
                        {event.title}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {event.date}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="text-indigo-600 dark:text-indigo-400 text-sm font-bold"
                      >
                        DETAILS
                      </button>

                      <button
                        onClick={() => setRegisteringEvent(event)}
                        className="text-indigo-600 dark:text-indigo-400 flex items-center gap-1 text-sm font-bold"
                      >
                        REGISTER
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* ================= TIMELINE ================= */}
      <Reveal>
        <section className="py-24">
          <div className="max-w-5xl mx-auto px-4">

            <h2 className="text-3xl font-black text-center mb-16">
              Our Legacy
            </h2>

            <div className="space-y-12">
              {PAST_EVENTS.map(event => (
                <div
                  key={event.id}
                  className="bg-slate-50 dark:bg-slate-900 p-6 rounded-3xl shadow"
                >
                  <h4 className="font-bold mb-2">
                    {event.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {event.date}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>
      </Reveal>

      {/* ================= MODALS (UNCHANGED) ================= */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl max-w-lg w-full">
            <button onClick={closeModal} className="float-right">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">
              {selectedEvent.title}
            </h2>
            <p>{selectedEvent.description}</p>
          </div>
        </div>
      )}

      {registeringEvent && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl max-w-lg w-full">
            <button onClick={closeModal} className="float-right">
              <X />
            </button>

            <form onSubmit={handleRegisterSubmit}>
              <input
                type="text"
                value={regName}
                onChange={e => setRegName(e.target.value)}
                placeholder="Name"
                className="w-full mb-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-800"
                required
              />
              <input
                type="email"
                value={regEmail}
                onChange={e => setRegEmail(e.target.value)}
                placeholder="Email"
                className="w-full mb-4 p-3 rounded-xl bg-slate-100 dark:bg-slate-800"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl"
              >
                {isSubmitting ? 'Submitting...' : 'Confirm'}
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default Events;