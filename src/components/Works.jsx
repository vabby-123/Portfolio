import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const projects = [
  // Data Engineering Projects
  {
    name: "Flights Data Ingestion",
    description: "Built a data pipeline to ingest and process daily flight data into S3, Hive, and Redshift using AWS EventBridge, Glue, and SNS",
    tags: [
      { name: "AWS", color: "text-orange-400" },
      { name: "Glue", color: "text-blue-400" },
      { name: "Redshift", color: "text-purple-400" },
    ],
    image: "/sample-data.jpg"
  },
  {
    name: "Azure SQL Database Ingestion",
    description: "ETL pipeline using Azure Data Factory and Databricks to ingest GitHub data into Delta Lake following Medallion Architecture",
    tags: [
      { name: "Azure", color: "text-blue-400" },
      { name: "Databricks", color: "text-green-400" },
      { name: "Delta Lake", color: "text-yellow-400" },
    ],
    image: "/sample-azure.jpg"
  },
  {
    name: "Superstore Data Analysis",
    description: "Analyzed Superstore data using AWS IAM, S3, Glue, Athena, and QuickSight to generate business insights",
    tags: [
      { name: "QuickSight", color: "text-pink-400" },
      { name: "Athena", color: "text-purple-400" },
      { name: "Data Visualization", color: "text-blue-400" },
    ],
    image: "/sample-analytics.jpg"
  },
  {
    name: "ETL Pipeline with Airflow",
    description: "Created pipeline to fetch and store data engineering books from API into PostgreSQL using Apache Airflow and Docker",
    tags: [
      { name: "Airflow", color: "text-green-400" },
      { name: "PostgreSQL", color: "text-yellow-400" },
      { name: "Docker", color: "text-orange-400" },
    ],
    image: "/sample-etl.jpg"
  },
  {
    name: "ELT Pipeline with dbt",
    description: "Implemented ELT pipeline using dbt and Snowflake to transform and test data, deployed with Apache Airflow",
    tags: [
      { name: "dbt", color: "text-blue-400" },
      { name: "Snowflake", color: "text-purple-400" },
      { name: "ELT", color: "text-pink-400" },
    ],
    image: "/sample-snowflake.jpg"
  },
  {
    name: "Dockerized Data Workflow",
    description: "End-to-end pipeline using Airflow, Kafka and Spark to process API data and store in Cassandra",
    tags: [
      { name: "Kafka", color: "text-green-400" },
      { name: "Spark", color: "text-yellow-400" },
      { name: "Cassandra", color: "text-blue-400" },
    ],
    image: "/sample-workflow.jpg"
  },
  {
    name: "ETL Pipeline Using Astro",
    description: "Built ETL pipelines using Apache Airflow and Astro to extract weather data from API, transform and load into PostgreSQL",
    tags: [
      { name: "Astro", color: "text-purple-400" },
      { name: "DAG", color: "text-orange-400" },
      { name: "AWS", color: "text-pink-400" },
    ],
    image: "/sample-astro.jpg"
  },

  // Application Development Projects
  {
    name: "Upkaar Crowdfunding Platform",
    description: "Blockchain-based crowdfunding website for sportspersons using ThreeJs, React, and Solidity",
    tags: [
      { name: "Blockchain", color: "text-blue-400" },
      { name: "Solidity", color: "text-green-400" },
      { name: "Web3", color: "text-yellow-400" },
    ],
    image: "/sample-blockchain.jpg"
  },
  {
    name: "SSD Saarthi",
    description: "Flutter mobile app with UPI payments, rental marketplace, government schemes listing, and OCR receipt scanning",
    tags: [
      { name: "Flutter", color: "text-purple-400" },
      { name: "UPI", color: "text-orange-400" },
      { name: "OCR", color: "text-pink-400" },
    ],
    image: "/sample-flutter.jpg"
  },
  {
    name: "Language Learning Game",
    description: "Interactive web platform for language learning with user registration, authentication, and multi-language support",
    tags: [
      { name: "Web App", color: "text-blue-400" },
      { name: "Authentication", color: "text-green-400" },
      { name: "Education", color: "text-yellow-400" },
    ],
    image: "/sample-education.jpg"
  },
  {
    name: "Get2Gather",
    description: "Social media website with post creation, friend connections, and reactions built with MERN stack",
    tags: [
      { name: "MERN", color: "text-purple-400" },
      { name: "MongoDB", color: "text-orange-400" },
      { name: "Social Media", color: "text-pink-400" },
    ],
    image: "/sample-social.jpg"
  },
  {
    name: "Covid Tracker",
    description: "SpringBoot website tracking live COVID-19 cases worldwide with country-wise statistics",
    tags: [
      { name: "SpringBoot", color: "text-blue-400" },
      { name: "API", color: "text-green-400" },
      { name: "Dashboard", color: "text-yellow-400" },
    ],
    image: "/sample-covid.jpg"
  }
];

const ProjectCard = ({ index, name, description, tags, image }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full sm:w-[360px]">
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl h-full flex flex-col"
    >
      <div className="relative w-full h-[180px]">
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open("https://github.com/vabby-123", "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="GitHub" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex-grow">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[12px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional & Academic</p>
        <h2 className={styles.sectionHeadText}>Project Portfolio.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          A comprehensive showcase of my data engineering and full-stack development projects,
          demonstrating expertise across cloud platforms, big data technologies, and web/mobile development.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, i) => (
          <ProjectCard key={`project-${i}`} index={i} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");