import { Achievement, Event } from './types';
import {
  Code2,
  Users,
  TrendingUp,
  BookOpen
} from 'lucide-react';

/* ================= TEAM INTERFACE ================= */

export interface TeamMember {
  id: number; // ✅ Must be number to match Team.tsx
  name: string;
  role: string;
  photoUrl: string;
  linkedin: string;
  github: string;
  bio: string;
  skills: string[];
}

/* ================= TEAM MEMBERS ================= */

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Om Lakshkar',
    role: 'Technical Head',
    photoUrl:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Dedicated to building scalable systems and fostering technical excellence.',
    skills: ['React', 'System Design', 'Cloud', 'Leadership']
  },
  {
    id: 2,
    name: 'Raj Mayank',
    role: 'Full Stack Developer',
    photoUrl:
      'https://images.unsplash.com/photo-1601233749202-95d04d5b3c00?q=80&w=1438&auto=format&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Expert in machine learning pipelines and mentoring students.',
    skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science']
  },
  {
    id: 3,
    name: 'Sparsh Shukla',
    role: 'AI Specialist',
    photoUrl:
      'https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=687&auto=format&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Exploring deep learning and AI research.',
    skills: ['Deep Learning', 'PyTorch', 'NLP', 'Research']
  },
  {
    id: 4,
    name: 'Dev Thakur',
    role: 'Frontend Developer',
    photoUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    bio: 'Connecting students with industry leaders.',
    skills: ['Communication', 'Event Management', 'Public Speaking', 'Networking']
  }
];

/* ================= ACHIEVEMENTS ================= */

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    year: '2023',
    title: '500+ Active Members',
    description: 'Reached half a thousand community members.'
  },
  {
    id: '2',
    year: '2024',
    title: 'Industry Collaboration',
    description: 'Partnered with tech firms for mentorship.'
  }
];

/* ================= FEATURES (ABOUT PAGE) ================= */

export const FEATURES = [
  {
    icon: <Code2 className="w-6 h-6 text-indigo-400" />,
    title: 'Hands-on Projects',
    description: 'Work on real-world datasets and industry-level problems.'
  },
  {
    icon: <BookOpen className="w-6 h-6 text-blue-400" />,
    title: 'Expert Workshops',
    description: 'Learn directly from professionals and mentors.'
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-400" />,
    title: 'Strong Community',
    description: 'Grow together with like-minded learners.'
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-rose-400" />,
    title: 'Career Growth',
    description: 'Build skills that make your profile stand out.'
  }
];

/* ================= PAST EVENTS ================= */

export const PAST_EVENTS: Event[]  = [
  {
    id: 'p1',
    title:"AI Battle Arena",
    category:"Competition",
    date:"Jan 30–31, 2026",
    imageUrl:"https://images.unsplash.com/photo-1677442136019-21780ecad995",
    description:"High-intensity AI competition where teams built powerful AI solutions evaluated automatically."
  },

  {
    id: 'p2',
    title:"Own Your Identity in Web3",
    category:"Workshop",
    date:"Nov 11, 2025",
    imageUrl:"https://images.unsplash.com/photo-1639322537228-f710d846310a",
    description:"Workshop on digital identity, Web3 ecosystem and decentralized technologies."
  },

  {
    id: 'p3',
    title:"Devi@thon 2025 National Hackathon",
    category:"Competition",
    date:"Oct 9–11, 2025",
    imageUrl:"https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    description:"National hackathon where students solved real-world problems with ₹5L+ prize pool."
  },

  {
    id: 'p4',
    title:"W3M AI Meetup",
    category:"Networking",
    date:"Sept 15, 2025",
    imageUrl:"\W3M_AI_Meetup.jpeg",
    description:"AI tools, Web3 discussions, internship insights and project mentorship."
  },

  {
    id: 'p5',
    title:"Smart India Hackathon Internal",
    category:"Competition",
    date:"Aug 29–31, 2025",
    imageUrl:"https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    description:"Students ideated and built solutions for national scale problems."
  },

  {
    id: 'p6',
    title:"Hack & Viz 2.0 – 30 Hour Hackathon",
    category:"Competition",
    date:"Apr 19–20, 2025",
    imageUrl:"https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    description:"30 hour coding marathon where teams built innovative products."
  },

  {
    id: 'p7',
    title:"Crack the Code – Placement Experience",
    category:"Workshop",
    date:"Nov 22, 2024",
    imageUrl:"https://images.unsplash.com/photo-1581093588401-22d0a1a3e8d5",
    description:"Placement simulation including mock tests and technical interviews."
  },

  {
    id: 'p8',
    title:"GenAI + IoT Workshop",
    category:"Workshop",
    date:"Oct 19, 2024",
    imageUrl:"\GenAI+IOT.jpeg",
    description:"Hands-on workshop integrating Generative AI with IoT systems."
  },

  {
    id: 'p9',
    title:"Project-X Face Recognition Workshop",
    category:"Workshop",
    date:"Apr 21, 2023",
    imageUrl:"\PROJECTX.jpeg",
    description:"Students built a real-time face recognition system using machine learning."
  },

  {
    id: 'p10',
    title:"CNN Deep Learning Workshop",
    category:"Workshop",
    date:"Feb 26, 2022",
    imageUrl:"\CNNWorkshop.jpeg",
    description:"Workshop focused on Convolutional Neural Networks and computer vision."
  }

]

/* ================= UPCOMING EVENTS ================= */

export const UPCOMING_EVENTS: Event[] = [
  {
    id: 'u1',
    title: 'Advanced LLM Fine-tuning Sprint',
    date: 'March 22, 2025 • 10:00 AM',
    category: 'Workshop',
    description: 'Learn LoRA and QLoRA techniques for efficient LLM fine-tuning.',
    imageUrl:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'u2',
    title: 'Spring Networking Mixer',
    date: 'April 10, 2025 • 6:00 PM',
    category: 'Networking',
    description: 'Meet data scientists and industry professionals.',
    imageUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop'
  }
];
