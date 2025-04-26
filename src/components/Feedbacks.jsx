import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const accomplishments = [
  // Awards & Achievements
  {
    type: "achievement",
    title: "Memento of Honor",
    description: "Highest recognition for Technology & Innovation at SRMU (Top 2 awards in 10 years)",
    icon: "/icons/trophy.png",
    year: "2023",
    highlight: true
  },
  {
    type: "achievement",
    title: "AYUSH Hackathon Winner",
    description: "1st Prize in National Level hackathon for AI healthcare solutions",
    icon: "/icons/ai.png",
    year: "2022"
  },
  {
    type: "achievement",
    title: "Navarachna Hackathon",
    description: "1st Prize for blockchain crowdfunding platform at SVVV Indore",
    icon: "/icons/blockchain.png",
    year: "2022"
  },
  {
    type: "achievement",
    title: "Smart India Finalist",
    description: "Selected among top teams in national hackathon (Govt. of India)",
    icon: "/icons/government.png",
    year: "2022"
  },

  // Leadership Positions
  {
    type: "leadership",
    title: "Technical Lead - Yoga Summit 2024",
    description: "Managed website development & analytics for international event in Kuala Lumpur",
    icon: "/icons/leadership.png",
    year: "2024",
    link: "https://yogasummit.example.com" // Add actual link
  },
  {
    type: "leadership",
    title: "Tech Fusion Club Coordinator",
    description: "Organized hackathons and tech sessions for 700+ students",
    icon: "/icons/tech-club.png",
    year: "2022-2023"
  },
  {
    type: "leadership",
    title: "TEDx SRMU Anchor",
    description: "Hosted premier innovation talk event at university",
    icon: "/icons/tedx.png",
    year: "2021"
  },

  // Certifications
  {
    type: "certification",
    title: "Data Structures & Algorithms",
    description: "Log2Base2 Certified",
    icon: "/icons/fullstack.png",
    year: "2021",
    link: "https://drive.google.com/drive/folders/1RQyExTUe4WYfTjiDaFYtmNTINfg6L7b2"
  },

  {
    type: "certification",
    title: "IBM Data Professional",
    description: "5 certifications including Data Analysis, Python, and Hadoop",
    icon: "/icons/ibm.png",
    year: "2022",
    link: "https://drive.google.com/drive/folders/1RQyExTUe4WYfTjiDaFYtmNTINfg6L7b2"
  },
  {
    type: "certification",
    title: "Full Stack Development",
    description: "CertyBox certified with React, Node.js, and Spring Boot",
    icon: "/icons/fullstack.png",
    year: "2023",
    link: "https://drive.google.com/drive/folders/1RQyExTUe4WYfTjiDaFYtmNTINfg6L7b2"
  }

];

const AccomplishmentCard = ({ item, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.3, 0.75)}
    className={`bg-black-200 p-6 rounded-3xl w-full ${
      item.highlight ? "border-l-4 border-purple-500" : "border-l-2 border-gray-700"
    }`}
  >
    <div className="flex items-start gap-4">
      <img src={item.icon} alt={item.title} className="w-10 h-10 mt-1 object-contain" />
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-white font-bold text-[18px]">{item.title}</h3>
          <span className="text-secondary text-[12px] bg-black-300 px-2 py-1 rounded-full">
            {item.year}
          </span>
        </div>
        
        <p className="text-gray-300 text-[14px] mt-2">{item.description}</p>
        
        {item.link && (
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-3 text-purple-300 text-[12px] hover:underline"
          >
            {item.type === 'certification' ? 'View Certificates' : 'View Details'}
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Accomplishments = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] overflow-hidden">
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Proof of Excellence</p>
          <h2 className={styles.sectionHeadText}>Achievements & Leadership.</h2>
        </motion.div>
        
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Recognized through national competitions, technical leadership roles, and professional certifications demonstrating multidisciplinary expertise.
        </motion.p>
      </div>

      <div className={`${styles.paddingX} -mt-10 pb-14`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Achievements Column */}
          <div>
            <h3 className="text-white text-[22px] font-bold mb-6 pl-2 border-b border-gray-800 pb-2">
              Awards & Hackathons
            </h3>
            <div className="space-y-6">
              {accomplishments
                .filter(item => item.type === "achievement")
                .map((item, i) => (
                  <AccomplishmentCard key={i} item={item} index={i} />
                ))}
            </div>
          </div>

          {/* Leadership & Certifications Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white text-[22px] font-bold mb-6 pl-2 border-b border-gray-800 pb-2">
                Leadership
              </h3>
              <div className="space-y-6">
                {accomplishments
                  .filter(item => item.type === "leadership")
                  .map((item, i) => (
                    <AccomplishmentCard key={i} item={item} index={i} />
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-white text-[22px] font-bold mb-6 pl-2 border-b border-gray-800 pb-2">
                Certifications
              </h3>
              <div className="space-y-6">
                {accomplishments
                  .filter(item => item.type === "certification")
                  .map((item, i) => (
                    <AccomplishmentCard key={i} item={item} index={i} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Accomplishments, "achievements");