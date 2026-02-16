"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After earning my degree in{" "}
        <span className="font-medium">Computer Science</span>, I began my
        journey as a frontend developer working on large-scale{" "}
        <span className="font-medium">ERP systems</span> and gradually grew into
        a <span className="font-medium">Full-Stack JavaScript Engineer</span>.{" "}
        <span className="italic">What excites me most about programming</span>{" "}
        is solving complex business problems and transforming them into
        scalable, high-performance solutions. I’ve led development of enterprise
        modules serving 200+ users, migrated legacy Angular applications (13 →
        19), and built real-time applications from scratch. My core stack
        includes{" "}
        <span className="font-medium">
          Angular 17/19, React (Next.js 14), Node.js/Express, and MongoDB
        </span>
        , with strong experience in{" "}
        <span className="font-medium">
          TypeScript, MySQL, and modern UI systems
        </span>
        . I continuously focus on performance optimization, reusable
        architecture, and clean code practices. Currently, I’m seeking a{" "}
        <span className="font-medium">
          challenging full-time software engineering role
        </span>{" "}
        where I can build impactful, scalable products.
      </p>

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
