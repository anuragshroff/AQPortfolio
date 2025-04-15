import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux, SiNextdotjs, SiPhp, SiLaravel } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { useState } from "react";

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
    icon: SiPhp, // Corrected icon
    color: "text-purple-600",
  },
  {
    skill: "Laravel",
    icon: SiLaravel, // Corrected icon
    color: "text-red-500",
  },

  //{
  //  skill: "wordpress",
  //  icon: Siwordpreass, // Corrected icon
  //  color: "text-red-500",
  //}
];

const SkillCard = ({ skill, icon: Icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`flex flex-col items-center p-6 rounded-lg transition-all duration-300 ${
        isHovered ? "transform -translate-y-2 shadow-lg bg-gray-50 dark:bg-gray-800" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        animationDelay: `${index * 0.1}s` 
      }}
      data-aos="fade-up"
    >
      <Icon className={`text-6xl ${color} transition-all duration-300 ${isHovered ? "text-7xl" : ""}`} />
      <p className="text-center mt-4 font-medium">{skill}</p>
    </div>
  );
};

const AllSkillsSM = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 md:gap-8">
        {skills.map((item, index) => (
          <SkillCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default AllSkillsSM;