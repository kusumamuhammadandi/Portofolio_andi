import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motions";
import { educations } from "../constants";
import GlowCard from "./GlowCard";

const EducationCard = ({
  index,
  degree,
  school,
  description,
  year,
  location,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    initial="hidden"
    animate="show"
  >
    <GlowCard card={{ review: description }} index={index}>
      {/* Logo besar di tengah */}
      {/* Logo besar di tengah */}
      <div className="flex justify-center items-center mb-5">
        <img
          src={image}
          alt={`education-${school}`}
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Info sekolah */}
      <div className="flex flex-col items-center text-center gap-1">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">{degree}</span>
        </p>
        <p className="mt-1 text-white font-semibold text-[14px]">{school}</p>
        <p className="mt-1 text-secondary text-[12px] whitespace-nowrap">
          {location} · {year}
        </p>
      </div>
    </GlowCard>
  </motion.div>
);

const Education = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Academic Journey</p>
          <h2 className={styles.sectionHeadText}>Pendidikan</h2>
        </motion.div>
      </div>
      <div
        className={`${styles.paddingX} -mt-20 pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7`}
      >
        {educations.map((education, index) => (
          <EducationCard key={education.school} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "education");
