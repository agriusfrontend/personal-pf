import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated in Computer Science",
    location: "Virtual University of Pakistan",
    description:
      "Completed my degree in Computer Science, which laid the foundation for my career in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Aims Soft, Pakistan",
    description:
      "Worked as a front-end developer contributing to 3+ ERP solutions. Focused on building responsive and high-performance applications using Angular and related technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Lead Front-End Developer",
    location: "Code Agrius, Pakistan",
    description:
      "Currently leading front-end development for OREIUS ERP. Building scalable modules such as CRM, Approval Hierarchy, and Contract Management using Angular, TypeScript, Tailwind, and .NET Core integration.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "OREIUS ERP",
    description:
      "Contributed to multiple ERP modules including CRM, Approval Hierarchy, and Contract Management. Focused on building scalable, user-friendly, and high-performance solutions.",
    tags: ["Angular", "TypeScript", "Tailwind", "NgRx", ".NET Core"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Guest House Management System",
    description:
      "Developed a booking and reservation system with real-time revenue reporting, billing, and KOT (Kitchen Order Ticket) generation.",
    tags: ["Angular & React", "TypeScript", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Inventory Management System",
    description:
      "Built real-time asset tracking and department-wise stock management. Integrated the system with the Guest House Management System for streamlined resource allocation.",
    tags: ["Angular", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "School Management System",
    description:
      "Led development of the Exam Module including scheduling, date sheet creation, and grading. Designed report card generation with detailed calculations.",
    tags: ["Angular", "TypeScript"],
    imageUrl: wordanalyticsImg,
  },
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
