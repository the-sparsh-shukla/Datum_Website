import { Achievement, Event } from './types';
import {
  Code2,
  Users,
  TrendingUp,
  BookOpen
} from 'lucide-react';

/* ================= TEAM INTERFACE ================= */


export type TeamMember = {
  id: number;
  name: string;
  role: string;
  team: string;
  isHead: boolean; 
  bio: string;
  skills: string[];
  photoUrl: string;
  github: string;
  linkedin: string;
  year: string;
};

export const TEAMS = [
  "Tech Team",
  "Event Management",
  "Media and Video Editing",
  "Design Team",
  "PR Team",
] as const;

export type Leader = {
  id: number;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  photoUrl: string;
  github: string;
  linkedin: string;
};
 
export const LEADERS: Leader[] = [
  {
    id: 101,
    name: "President",
    role: "President",
    bio: "Leading DATUM with vision and purpose — driving innovation, fostering collaboration, and building a community where every member thrives.",
    skills: ["Leadership", "Strategy", "Public Speaking", "Community Building"],
    photoUrl: "https://ui-avatars.com/api/?name=President&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
  },
  {
    id: 102,
    name: "Vice President",
    role: "Vice President",
    bio: "Supporting the club's vision and operations — bridging teams, enabling execution, and ensuring DATUM continues to grow and inspire.",
    skills: ["Leadership", "Operations", "Team Management", "Networking"],
    photoUrl: "https://ui-avatars.com/api/?name=Vice+President&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
  },
  {
    id: 103,
    name: "General Manager",
    role: "General Manager",
    bio: "Overseeing all teams and club activities — keeping things organised, efficient, and aligned with DATUM's mission.",
    skills: ["Management", "Planning", "Communication", "Problem Solving"],
    photoUrl: "https://ui-avatars.com/api/?name=General+Manager&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  // ─────────────────────────────────────────
  //  TECH TEAM
  // ─────────────────────────────────────────
  {
    id: 1,
    name: "Harsh Chaudhary",
    role: "Head, Tech Team",
    team: "Tech Team",
    isHead: true,
    bio: "AIML student and full-stack developer passionate about building scalable web applications and intelligent systems. Always exploring backend architecture, AI solutions, and impactful tech innovation.",
    skills: ["Web Development", "Backend Development", "AI / Machine Learning"],
    photoUrl: "/team/harsh-chaudhary.jpeg",
    github: "https://github.com/HARSHCHAUDHARY04",
    linkedin: "https://www.linkedin.com/in/harsh-chaudhary-0aa420316/",
    year: "2nd",
  },
  {
    id: 2,
    name: "Priya Shukla",            
    role: "Co-Head, Tech Team",
    team: "Tech Team",
    isHead: true,
    bio: "Tech-driven learner focused on building scalable web applications using Python, Flask, and MySQL. Strong in logic building, backend development, and turning ideas into clean, functional solutions.",
    skills: ["Web Development", "Backend Development", "UI/UX Design", "AI / Machine Learning"],
    photoUrl: "/team/priya-shukla.jpg",
    github: "https://github.com/PriyaShukla3694",
    linkedin: "https://www.linkedin.com/in/priya-shukla-37b79333a",
    year: "2nd",
  },
  {
    id: 3,
    name: "Krishna Upadhyay",
    role: "Tech Team Member",
    team: "Tech Team",
    isHead: false,
    bio: "Frontend developer and UI/UX enthusiast who loves turning static design mockups into fully responsive, interactive sites that look great and work smoothly.",
    skills: ["Frontend Development", "UI/UX Design"],
    photoUrl: "/team/krishna-upadhyay.jpg",
    github: "https://github.com/k98-lang",
    linkedin: "https://www.linkedin.com/in/krishna-upadhyay-829113384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    year: "1st",
  },
  {
    id: 4,
    name: "Kritika Kanchan",
    role: "Tech Team Member",
    team: "Tech Team",
    isHead: false,
    bio: "Aspiring full-stack developer with a passion for AI-powered solutions. Driven by learning, innovation, and making technology meaningful.",
    skills: ["Web Development", "Backend Development", "Frontend Development"],
    photoUrl: "/team/kritika-kanchan.jpg",
    github: "https://github.com/Kritika-Kanchan-dev",
    linkedin: "https://www.linkedin.com/in/kritika-kanchan",
    year: "2nd",
  },
  {
    id: 5,
    name: "Tech Member",
    role: "Tech Team Member",
    team: "Tech Team",
    isHead: false,
    bio: "Tech-driven learner focused on building scalable web applications using Python, Flask, and MySQL. Strong in logic building, backend development, and turning ideas into clean, functional solutions.",
    skills: ["Web Development", "Backend Development", "UI/UX Design", "AI / Machine Learning"],
    photoUrl: "https://lh3.googleusercontent.com/d/1kohQoXjI9ahctPsVU7bWRGXtjtGf8OPC",
    github: "#",
    linkedin: "#",
    year: "2nd",
  },

  // ─────────────────────────────────────────
  //  EVENT MANAGEMENT
  // ─────────────────────────────────────────
  {
    id: 6,
    name: "Keshav Jha",
    role: "Co-Head, Event Team",
    team: "Event Management",
    isHead: true,
    bio: "Event Team Co-Head at DATUM. Skilled in web development, video editing, and content writing — bringing creativity and energy to every event.",
    skills: ["Web Development", "Video Editing", "Content Writing"],
    photoUrl: "/team/keshav-jha.jpg",
    github: "https://github.com/keshav979",
    linkedin: "https://www.linkedin.com/in/keshav-jha-8203a234b",
    year: "2nd",
  },
  {
    id: 7,
    name: "Kritika Saxena",
    role: "Co-Head, Event Team",
    team: "Event Management",
    isHead: true,
    bio: "Enthusiastic AI student with a strong interest in public speaking and web development. Believes in teamwork, leadership, and continuous learning.",
    skills: ["Frontend Development", "Public Speaking", "AI / Machine Learning"],
    photoUrl: "/team/kritika-saxena.png",
    github: "https://github.com/kritika-26",
    linkedin: "https://www.linkedin.com/in/kritika-saxena-509335335",
    year: "2nd",
  },
  {
    id: 8,
    name: "Ronit Goswami",
    role: "Event Team Member",
    team: "Event Management",
    isHead: false,
    bio: "Building the web. Solving with logic. Growing every day. Full-Stack Developer focused on clean architecture and problem solving.",
    skills: ["Web Development", "Backend Development", "Frontend Development", "Content Writing"],
    photoUrl: "/team/ronit-goswami.jpeg",
    github: "https://github.com/ronit-a11y",
    linkedin: "https://www.linkedin.com/in/ronit-goswami-ba764432",
    year: "2nd",
  },
  {
    id: 9,
    name: "Pradyumn Rana",
    role: "Event Team Member",
    team: "Event Management",
    isHead: false,
    bio: "Driven CS (AI & ML) student passionate about building impactful, real-world tech solutions. Focused on data, innovation, and continuous growth.",
    skills: ["Frontend Development", "UI/UX Design", "AI / Machine Learning"],
    photoUrl: "/team/pradyumn-rana.jpeg",
    github: "https://github.com/pradyumn2304",
    linkedin: "https://www.linkedin.com/in/pradyumn-rana-81b886383",
    year: "1st",
  },
  {
    id: 10,
    name: "Suhani Saxena",
    role: "Event Team Member",
    team: "Event Management",
    isHead: false,
    bio: "BCA (Data Science) student passionate about technology and innovation. Focused on developing strong analytical and problem-solving skills.",
    skills: ["Frontend Development", "Graphic Design"],
    photoUrl: "/team/suhani-saxena.jpeg",
    github: "https://github.com/saxenasuhani1709-ks",
    linkedin: "https://www.linkedin.com/in/suhani-saxena-291086384",
    year: "1st",
  },
  {
    id: 11,
    name: "Mradul Khandelwal",
    role: "Event Team Member",
    team: "Event Management",
    isHead: false,
    bio: "Building my path, one smart move at a time. Dream big. Work smart. Stay real.",
    skills: ["Backend Development", "Frontend Development", "AI / Machine Learning"],
    photoUrl: "/team/mradul-khandelwal.jpg",
    github: "https://github.com/MK-2822/",
    linkedin: "https://www.linkedin.com/in/mradul-khandelwal05/",
    year: "2nd",
  },

  // ─────────────────────────────────────────
  //  MEDIA AND VIDEO EDITING
  // ─────────────────────────────────────────
  {
    id: 12,
    name: "Media Head",           
    role: "Head, Media & Video Editing",
    team: "Media and Video Editing",
    isHead: true,
    bio: "Leading DATUM's media presence — crafting compelling visual stories and managing brand communications.",
    skills: ["Video Editing", "Content Writing", "Graphic Design"],
    photoUrl: "https://ui-avatars.com/api/?name=Media+Head&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
    year: "3rd",
  },
  {
    id: 13,
    name: "Aarav Srivastava",
    role: "Co-Head, Media & Video Editing",
    team: "Media and Video Editing",
    isHead: true,
    bio: "B.Tech CSE student at GLA University with a passion for coding, AI, and creative tech. Enjoys building intelligent systems and turning ideas into impactful digital solutions.",
    skills: ["Web Development", "Frontend Development", "Video Editing", "AI / Machine Learning"],
    photoUrl: "team/Aarav-srivastava.HEIC",
    github: "https://github.com/Aarav-bit",
    linkedin: "https://www.linkedin.com/in/aarav-srivastava-98b1262",
    year: "1st",
  },
  {
    id: 14,
    name: "Yash Singh",
    role: "Media Team Member",
    team: "Media and Video Editing",
    isHead: false,
    bio: "BTech CSE (AI & ML) student with a passion for video editing and visual storytelling. Always learning and refining the craft.",
    skills: ["Video Editing"],
    photoUrl: "team/yash-singh.jpg",
    github: "https://github.com/yshthakur01",
    linkedin: "https://www.linkedin.com/in/yash-singh-b45681383",
    year: "1st",
  },

  // ─────────────────────────────────────────
  //  DESIGN TEAM
  // ─────────────────────────────────────────
  {
    id: 15,
    name: "Design Head",       
    role: "Head, Design Team",
    team: "Design Team",
    isHead: true,
    bio: "Steering DATUM's visual identity — from brand guidelines to stunning UI/UX experiences that delight users.",
    skills: ["UI/UX Design", "Graphic Design", "Branding"],
    photoUrl: "https://ui-avatars.com/api/?name=Design+Head&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
    year: "3rd",
  },
  {
    id: 16,
    name: "Vanshika Agrawal",
    role: "Co-Head, Design Team",
    team: "Design Team",
    isHead: true,
    bio: "Design Co-Head at DATUM GLA. Passionate about frontend development and bringing beautiful, intelligent interfaces to life.",
    skills: ["Frontend Development", "AI / Machine Learning"],
    photoUrl: "team/vanshika-agrawal.jpg",
    github: "https://github.com/vanshii2441",
    linkedin: "https://www.linkedin.com/in/vanshika-agrawal-8b8a64",
    year: "2nd",
  },
  {
    id: 17,
    name: "Nancy Gupta",
    role: "Design Team Member",
    team: "Design Team",
    isHead: false,
    bio: "1st year CSE (AIML) student with a keen interest in frontend development. Has hands-on experience with HTML, CSS, JavaScript, and Python, and has built projects combining all three.",
    skills: ["Frontend Development", "UI/UX Design", "Graphic Design", "AI / Machine Learning"],
    photoUrl: "https://ui-avatars.com/api/?name=PR+Head&background=6366f1&color=fff&size=200",
    github: "https://github.com/Nancy-ux07",
    linkedin: "https://www.linkedin.com/in/nancy-gupta-56834737a",
    year: "1st",
  },

  // ─────────────────────────────────────────
  //  PR TEAM  (DACC)
  // ─────────────────────────────────────────
  {
    id: 18,
    name: "PR Head",             
    role: "Head, PR Team",
    team: "PR Team",
    isHead: true,
    bio: "Leading DATUM's public relations and alumni corporate connect — bridging the gap between students and industry.",
    skills: ["Public Speaking", "Leadership", "Networking"],
    photoUrl: "https://ui-avatars.com/api/?name=PR+Head&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
    year: "3rd",
  },
  {
    id: 19,
    name: "Shresth Soni",
    role: "Co-Head, PR Team (DACC)",
    team: "PR Team",
    isHead: true,
    bio: "2nd-year B.Tech CS student passionate about technology, AI, and building impactful projects. Loves turning ideas into real-world solutions and levelling up his skills.",
    skills: ["Backend Development", "Frontend Development", "UI/UX Design", "Public Speaking"],
    photoUrl: "team/shresth-soni.jpg",
    github: "https://github.com/shresth-soni",
    linkedin: "https://in.linkedin.com/in/shresth-soni-965910326",
    year: "2nd",
  },
  {
    id: 20,
    name: "PR Member",           
    role: "PR Team Member",
    team: "PR Team",
    isHead: false,
    bio: "Enthusiastic team player contributing to DATUM's outreach and corporate connect initiatives.",
    skills: ["Content Writing", "Public Speaking", "Networking"],
    photoUrl: "https://ui-avatars.com/api/?name=PR+Member&background=6366f1&color=fff&size=200",
    github: "#",
    linkedin: "#",
    year: "1st",
  },
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
    imageUrl:"https://images.unsplash.com/photo-1556761175-4b46a572b786",
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
    imageUrl:"https://images.unsplash.com/photo-1555255707-c07966088b7b",
    description:"Hands-on workshop integrating Generative AI with IoT systems."
  },

  {
    id: 'p9',
    title:"Project-X Face Recognition Workshop",
    category:"Workshop",
    date:"Apr 21, 2023",
    imageUrl:"https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    description:"Students built a real-time face recognition system using machine learning."
  },

  {
    id: 'p10',
    title:"CNN Deep Learning Workshop",
    category:"Workshop",
    date:"Feb 26, 2022",
    imageUrl:"https://images.unsplash.com/photo-1518770660439-4636190af475",
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
