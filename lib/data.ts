import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Code2,
  Server,
  Palette,
  Rocket,
  Briefcase,
  Sparkles,
  TrendingUp,
  Users,
  Trophy,
  Award,
  Facebook,
} from "lucide-react";

export const profile = {
  name: "Mushfikus Salehin Mahi",
  firstName: "Mushfik",
  lastName: "Mahi",
  initials: "MM",
  role: "Full-Stack Developer & Entrepreneur",
  location: "Chittagong, Bangladesh",
  email: "mushfikussalehin@gmail.com",
  phone: "+880 1408-000789",
  tagline:
    "I design, build, and scale premium digital products — from the first line of code to the first million users.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/MushfikMahi", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/musfikus-salehin",
    icon: Linkedin,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/mushfik.mahi.52",
    icon: Facebook,
  },
  { label: "Email", href: "mailto:mushfikussalehin@gmail.com", icon: Mail },
];

export const aboutStats = [
  { label: "Projects shipped", value: "5+" },
  { label: "Years building", value: "2+" },
  { label: "Technologies", value: "10+" },
];

export const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    description: "Crafting fast, responsive and beautiful user interfaces.",
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "HTML & CSS",
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    description: "Building resilient APIs and scalable server infrastructure.",
    skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "Firebase"],
  },
  {
    title: "Business & Product",
    icon: Rocket,
    description: "From idea to market — strategy, branding, and execution.",
    skills: [
      "E-commerce",
      "Product Strategy",
      "SEO Optimization",
      "Go-to-Market",
      "Supabase",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: Palette,
    description: "The tools that power my day-to-day development workflow.",
    skills: ["GitHub", "Vercel", "Cloudinary", "Figma", "Responsive Design"],
  },
];

export const marqueeItems = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "JavaScript",
  "Firebase",
  "Supabase",
  "PostgreSQL",
];

export const projects = [
  {
    id: "fragranttouch",
    year: "2025",
    name: "Fragrant Touch",
    role: "Founder & Full-Stack Developer",
    description:
      "A premium luxury e-commerce platform for fragrances, attars, and oudh. Features a full admin panel, product & order management, Bluetooth receipt printing, Cloudinary image uploads, OTP password reset, review system, WhatsApp integration, and SEO optimization.",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Vercel"],
    metric: { label: "Features Shipped", value: "14+" },
    image: "/fragranttouch.png",
    liveUrl: "https://fragranttouchbd.com",
    repoUrl: "https://github.com/MushfikMahi",
  },
  {
    id: "artistri",
    year: "2024",
    name: "Artistry in Glass & Paper",
    role: "Full-Stack Developer",
    description:
      "An online platform for showcasing and managing glass and paper crafts. Users can browse a curated gallery, upload their creations, and manage listings — built with React.js, Node.js, Express.js, and MongoDB.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    metric: { label: "Live Platform", value: "✓" },
    image: "/artistri.png",
    liveUrl: "https://artistry-in-glass-and-paper.web.app/",
    repoUrl:
      "https://github.com/MushfikMahi/artistry-in-glass-and-paper-client",
  },
  {
    id: "studybuddy",
    year: "2024",
    name: "StudyBuddy Circle",
    role: "Full-Stack Developer",
    description:
      "A collaborative learning platform where friends can create and share assignments, provide real-time feedback, share study materials, and track academic progress together in organized study groups.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    metric: { label: "Live Platform", value: "✓" },
    image: "/studybuddy.png",
    liveUrl: "https://study-buddy-circle.web.app",
    repoUrl: "https://github.com/MushfikMahi/Study-Buddy-Circle-client",
  },
  {
    id: "swifttasker",
    year: "2024",
    name: "SwiftTasker",
    role: "Full-Stack Developer",
    description:
      "A micro-tasking platform enabling users to complete small tasks for rewards. Features distinct role-based access for Workers, Task Creators, and Admins — with secure transactions and a built-in reward system.",
    tags: ["React.js", "Node.js", "Firebase", "MongoDB"],
    metric: { label: "User Roles", value: "3" },
    image: "/swifttasker.png",
    liveUrl: "https://swift-tasker.web.app",
    repoUrl: "https://github.com/MushfikMahi/Swift-Tasker-client",
  },
];

export const experience = [
  {
    period: "2025 — Present",
    role: "Founder & Full-Stack Developer",
    org: "Fragrant Touch",
    description:
      "Founded and built fragranttouchbd.com — a full-featured luxury fragrance e-commerce store with admin panel, order management, Bluetooth receipt printing, SEO optimization, and Supabase PostgreSQL backend. Deployed on Vercel.",
  },
  {
    period: "2024 — Present",
    role: "Full-Stack Developer",
    org: "Freelance & Personal Projects",
    description:
      "Designed and shipped multiple MERN stack projects end-to-end — including a craft e-commerce platform, a collaborative study app, and a micro-tasking platform. Mastered RESTful API design, Firebase Auth, and responsive UI.",
  },
  {
    period: "Jan 2024 — Jun 2024",
    role: "Web Development Student",
    org: "Programming Hero",
    description:
      "Completed an intensive full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. Built real-world projects throughout the course.",
  },
  {
    period: "Present",
    role: "Student",
    org: "Govt. Haji Mohammad Mohsin College, Chittagong",
    description:
      "Currently pursuing a Bachelor's degree in Management. Balancing academic studies with active software development and entrepreneurship.",
  },
];

export const achievements = [
  {
    icon: TrendingUp,
    value: 14,
    suffix: "+",
    label: "Features in Fragrant Touch",
  },
  { icon: Users, value: 5, suffix: "+", label: "Live projects shipped" },
  { icon: Briefcase, value: 10, suffix: "+", label: "Technologies mastered" },
  { icon: Sparkles, value: 2, suffix: "+", label: "Years of building" },
];

export const recognitions = [
  {
    icon: Trophy,
    title: "Programming Hero Graduate",
    org: "Programming Hero, 2024",
    description:
      "Completed a rigorous 6-month full-stack web development course covering the entire MERN stack.",
  },
  {
    icon: Award,
    title: "Founder — Fragrant Touch",
    org: "fragranttouchbd.com, 2025",
    description:
      "Built and launched a full luxury e-commerce platform from scratch, handling everything from design to deployment.",
  },
  {
    icon: Sparkles,
    title: "Open Source Contributor",
    org: "GitHub · MushfikMahi",
    description:
      "Maintains all project source code publicly on GitHub, contributing to the developer community.",
  },
];
