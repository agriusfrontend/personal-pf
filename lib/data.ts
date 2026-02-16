import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import leaderboardImg from "@/public/leaderboard.png";
import oreiuserpImg from "@/public/oreius-erp.png";
import bitcyImg from "@/public/bitcyllionaire.png";
import guestHouseImg from "@/public/gh-dashboard.png";
import abfoodsImg from "@/public/abfoods.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BS Computer Science",
    location: "Virtual University of Pakistan, Islamabad",
    description:
      "Completed Bachelor’s degree in Computer Science (2019 – 2023), building a strong foundation in software engineering, data structures, databases, and modern web technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Junior Frontend Developer (Angular)",
    location: "Aims Soft, Islamabad",
    description:
      "Led front-end development of ERP solutions using Angular 17. Migrated legacy applications from Angular 13 to 17, improved performance, and enhanced UI/UX with Angular Material. Integrated finance, inventory, reporting, and booking modules while applying best practices in TypeScript, RxJS, and Git.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Jan 2025",
  },
  {
    title: "Frontend Developer (React)",
    location: "Eziline Software House Pvt Ltd",
    description:
      "Built and optimized high-quality websites, design systems, and cross-platform digital experiences using React, JavaScript (ES6+), and modern CSS. Focused on performance optimization and responsive UI implementation.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 - Dec 2022",
  },
  {
    title: "Frontend Engineer (Angular + React)",
    location: "Code Agrius | Agrius IT, Islamabad",
    description:
      "Leading front-end architecture for enterprise ERP systems using Angular 19 and React/Next.js 14. Developed scalable CRM dashboards, HR modules, reporting systems, and reusable component libraries. Collaborating with backend teams for API integration and delivering enterprise-grade solutions for 200+ users.",
    icon: React.createElement(FaReact),
    date: "Jan 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Oreius Enterprise ERP Platform",
    description:
      "Led development of 6 core ERP modules (CRM, HR, Inventory, Sales, Reporting, Admin). Migrated Angular 13 → 19, reduced bundle size by 30%, and improved performance scores significantly.",
    tags: [
      "Angular 19",
      "TypeScript",
      "Nx",
      "PrimeNG",
      "RxJS",
      "NgRx",
      "Tailwind CSS",
      "Echarts",
    ],
    imageUrl: oreiuserpImg,
    anchor: "https://domain.oreiuserp.com/auth/intro",
  },
  // {
  //   title: "Finance, FMIS & Payroll System",
  //   description:
  //     "Built and integrated finance and payroll modules with ERP systems, enabling automated salary processing and accurate enterprise-level reporting.",
  //   tags: [
  //     "Angular 17",
  //     "TypeScript",
  //     "Finance Systems",
  //     "Reporting",
  //     "Enterprise Integration",
  //     "SCSS",
  //   ],
  //   imageUrl: corpcommentImg,
  // },
  {
    title: "Hotel & Guest House Management System",
    description:
      "Developed real-time booking and billing system with KOT generation, revenue dashboards, and dynamic pricing. Reduced check-in time and billing errors significantly.",
    tags: ["Angular", "TypeScript", "Echarts", "Chart.js", "RxJS", "SCSS"],
    imageUrl: guestHouseImg,
    anchor: "",
  },
  // {
  //   title: "School Management System",
  //   description:
  //     "Built exam scheduling, grading, and report card modules. Contributed to fee management and financial workflow integration.",
  //   tags: [
  //     "Angular",
  //     "TypeScript",
  //     "Angular Material",
  //     "NgCharts",
  //     "Enterprise Workflows",
  //   ],
  //   imageUrl: wordanalyticsImg,
  // },
  // {
  //   title: "Real-Time Voting Platform",
  //   description:
  //     "Built full-stack voting platform with live vote counting, real-time charts, admin panel, and scalable REST APIs using Socket.io and MongoDB.",
  //   tags: [
  //     "React",
  //     "Express.js",
  //     "Socket.io",
  //     "MongoDB",
  //     "REST API",
  //     "Custom Hooks",
  //   ],
  //   imageUrl: "",
  // },
  {
    title: "Bitcyllionaire – Crypto Portfolio Tracker",
    description:
      "Developed crypto portfolio tracker with real-time GraphQL subscriptions, Stripe integration, Zustand state management, and animated UI.",
    tags: [
      "React",
      "GraphQL",
      "Apollo Client",
      "Zustand",
      "Stripe",
      "Framer Motion",
    ],
    imageUrl: bitcyImg,
    anchor: "https://www.bitcyllionaire.com/",
  },
  {
    title: "Bitcy Club – Crypto Community Platform",
    description:
      "Built community platform with authentication, real-time crypto data, and scalable frontend using Vue/Nuxt and Firebase.",
    tags: [
      "Vue.js",
      "Nuxt 2",
      "Firebase",
      "GraphQL",
      "Vuetify",
      "Tailwind CSS",
    ],
    imageUrl: leaderboardImg,
    anchor: "https://bitcy.club/",
  },
  {
    title: "TheABFoods – Marketing Website",
    description:
      "Created responsive marketing website with smooth animations and optimized builds using Vite and React.",
    tags: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    imageUrl: abfoodsImg,
    anchor: "https://theabfoods.com/",
  },
  // {
  //   title: "Client Websites & Digital Experiences (Eziline)",
  //   description:
  //     "Built and optimized responsive websites and digital experiences using React and modern JavaScript.",
  //   tags: ["React", "JavaScript", "CSS", "Responsive Design", "UI/UX"],
  //   imageUrl: rmtdevImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Angular",
  "React",
  "Next.js",
  "Tailwind CSS",
  "RxJS",
  "NgRx",
  "Node.js",
  "Express.js",
  "PHP",
  "MySQL",
  "MongoDB",
  "Git",
  "Firebase",
  "Chart.js",
  "ApexCharts",
] as const;
