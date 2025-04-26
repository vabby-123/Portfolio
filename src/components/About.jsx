import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// Service Card
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

// About
const About = () => {
  return (
    <>
      {/* Title */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Body */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="empty-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       I’m a Data Science graduate student and polyglot developer passionate about building intelligent systems that bridge AI, data engineering, and real-world applications. With expertise spanning machine learning (XGBoost, TensorFlow), cloud-native data pipelines (AWS/Azure), and full-stack development (React, Solidity), I thrive on transforming complex problems into scalable solutions. My work on the AutoGen multi-agent system demonstrates this fusion—where I engineered specialized AI bots to automate research and marketing workflows using cutting-edge tools like LangChain and FastAPI.
What sets me apart is my proven ability to deliver measurable impact. At KLLA Services, I designed an e-commerce platform that boosted sales by 28% through data-driven SEO optimizations, while my Airbnb pricing model achieved 19.7% higher accuracy by leveraging ensemble learning and SHAP analysis. I’ve repeatedly validated my skills in competitive environments, winning national hackathons like AYUSH and Navarachna by building Web3 crowdfunding platforms and real-time data systems.
Beyond technical execution, I’m a collaborative leader who’s organized tech events for 700+ participants and mentored peers in software best practices. Whether it’s architecting a Dockerized Kafka-Spark pipeline or researching NLP ambiguity resolution, I approach every challenge with curiosity and rigor. Currently pursuing my MSc at Asia Pacific University, I’m seeking opportunities to push boundaries in generative AI and large-scale data infrastructure.
Let’s build the future—one algorithm at a tim
      </motion.p>

      {/* Service Card */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
