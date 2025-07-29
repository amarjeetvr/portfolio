
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";

const FeedbackCard = ({
  index,
  branch,
  marks,
  name,
  degree,
  year,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="group bg-[#1a1a1d] border border-transparent hover:border-[#6a5acd] hover:shadow-[0_0_25px_#6a5acd] transition-all duration-300 p-6 rounded-2xl w-full sm:w-[320px] flex flex-col items-center cursor-pointer"
  >
    <img
      src={image}
      alt={`profile-${name}`}
      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
    />

    <div className="text-center mt-4">
      <h3 className="text-white text-xl font-semibold group-hover:text-[#6a5acd] transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-400">{year}</p>
    </div>

    <p className="text-white text-4xl font-black mt-2 group-hover:scale-110 transition-transform">"</p>

    <div className="text-center mt-3 space-y-2">
      <p className="text-white text-base font-medium">{degree}</p>
      <p className="text-sm text-blue-400 font-semibold">{branch}</p>
      <p className="text-sm text-green-400 font-semibold">{marks}</p>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-3xl">
      {/* Header Section */}
      <div className={`bg-tertiary rounded-t-3xl ${styles.padding} min-h-[250px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Education Details...</p>
         
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className={`-mt-16 pb-16 px-5 sm:px-10 flex flex-wrap justify-center gap-10`}>
        {educations.map((education, index) => (
          <FeedbackCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");

