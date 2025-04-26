import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Experience data matching your resume
const experiences = [
  {
    title: "R&D Intern",
    company_name: "CTI, Asia Pacific University",
    icon: "src/assets/apu-logo.png", // Replace with actual icon path
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Developing AI-powered enterprise solutions using Joget, Voiceflow, and ViteJS",
      "Creating in-house software to optimize university research processes",
      "Implementing chatbot solutions using Botpress APIs"
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "KLLA Services Inc.",
    icon: "/klla-icon.png", // Replace with actual icon path
    iconBg: "#E6DEDD",
    date: "Sep 2023 - Jul 2024",
    points: [
      "Developed high-traffic e-commerce platform handling 10k+ daily users",
      "Implemented SEO strategies and business analytics, increasing sales by 28%",
      "Optimized platform performance through data-driven improvements"
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company_name: "Hireexpert.online",
    icon: "src/assets/hireexpert-logo.jpg", 
    iconBg: "#383E56",
    date: "Nov 2022 - Sep 2023",
    points: [
      "Built React Native features with Spring Boot backend integration",
      "Improved application efficiency by 7% using Redux and RTK Query",
      "Containerized and deployed microservices using Docker on AWS ECS",
      "Developed multiple applications including Tkinter image tool and MERN social network",
      "Enhanced billing system with automated GST calculations",
      "Mentored junior interns and collaborated with QA teams"
    ],
  },

  {
    title: "Software Development Intern",
    company_name: "SocioClub",
    icon: "src/assets/socioclub-logo.png", // Replace with actual icon path
    iconBg: "#383E56",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Implemented GridFS MongoDB solution for large file storage",
      "Developed video handling features using Embedded JavaScript templating",
      "Optimized media delivery performance"
    ],
  }
];

// Experience Card Component
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, i) => (
        <li
          key={`experience-point-${i}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Experience Component
const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Professional Journey</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, i) => (
            <ExperienceCard key={`exp-${i}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");