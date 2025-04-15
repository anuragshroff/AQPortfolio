import SingleSkill from "./SingleSkill";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiRedux, SiNextdotjs, SiPhp, SiLaravel } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// Define skills with proper icons and colors
const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
    color: "text-orange-600",
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
    color: "text-yellow-400",
  },
  {
    skill: "ReactJS",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    skill: "React Native",
    icon: FaReact,
    color: "text-blue-400",
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
    color: "text-teal-500",
  },
  {
    skill: "PHP",
    icon: SiPhp,
    color: "text-purple-600",
  },
  {
    skill: "Laravel",
    icon: SiLaravel,
    color: "text-red-500",
  },
];

// Enhanced SingleSkill wrapper component with animation
const AnimatedSkill = ({ text, imgSvg, color, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", `0.${index}`)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className="transition-all duration-300 hover:-translate-y-2"
    >
      <SingleSkill 
        text={text} 
        imgSvg={imgSvg} 
        color={color}
      />
    </motion.div>
  );
};

const AllSkills = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 max-w-[1200px] mx-auto">
        {skills.map((item, index) => (
          <AnimatedSkill
            key={index}
            text={item.skill}
            imgSvg={<item.icon className={`${item.color}`} />}
            color={item.color}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default AllSkills;