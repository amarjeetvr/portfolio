import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion"; // Make sure motion is imported

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import amar_img from "../assets/amar_img.jpg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* Changed div to motion.div */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black`}>Overview</h2>
      </motion.div>
      <div className="flex items-center min-[1000px]:flex-row flex-col-reverse">
        {/* Changed p to motion.p */}
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        My name is Amarjeet, and I am currently pursuing a Bachelor’s degree in Computer Science from RGPV University, Bhopal. I completed my 10th and 12th from Govt. Excellence School, Chhindwara.

As a passionate Full-Stack Developer and DevOps Enthusiast, I specialize in the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern development tools suchs as Tailwind CSS, Material UI, and WebSockets.

I’ve completed internships in Web Development & DevOps, where I gained hands-on experience in building scalable, secure, and high-performance applications. My portfolio includes a resume builder, an MCQ platform with Word/PDF extraction, and several interactive React.js projects with animations using Framer Motion.

Alongside development, I work with DevOps tools and practices like CI/CD pipelines, Git & GitHub workflows, Docker, and deployment platforms like Vercel and Render. I follow Agile methodologies and manage tasks using tools such as Jira.

I’m also diving into AI agents and automation workflows using platforms like n8n, Zapier, and LangChain, helping to automate tasks and integrate APIs across services.

Additionally, I’m exploring networking and cybersecurity fundamentals including ACLs, firewalls, ZPF, encryption, and cloud security.

I’m currently improving my communication skills to confidently participate in discussions and interviews. With a strong problem-solving mindset, I strive to build impactful, efficient, and future-ready software solutions.
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=av457508@gmail.com&su=Hiring%20Opportunity%20for%20Full-Stack%20Developer&body=Hi%20Amarjeet%2C%0A%0AWe%20came%20across%20your%20profile%20and%20are%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you.%0APlease%20let%20us%20know%20your%20availability%20for%20a%20quick%20call.%0A%0ABest%20regards%2C%0A[Your%20Company%20Name]"
    target="_blank"
    rel="noopener noreferrer"
    className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black"
  >
    av457508@gmail.com
  </a>


{" "}
          I'm always open to new opportunities and collaborations!{" "}
        </motion.p> {/* Changed p to motion.p */}
        <Tilt className="xs:w-[350px] xs:h-[350px] w-full h-full m-auto max-[1000px]:my-14">
          {/* Changed div to motion.div */}
          <motion.div
            variants={fadeIn("", "", 0.5, 1)}
            className="xs:w-[350px] w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{ max: 45, scale: 1, speed: 450 }}
              className="bg-tertiary rounded-[20px] min-h-[250px] flex justify-evenly items-center flex-col overflow-hidden"
            >
              <img
                src={amar_img}
                alt="up"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div> {/* Changed div to motion.div */}
        </Tilt>
      </div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");