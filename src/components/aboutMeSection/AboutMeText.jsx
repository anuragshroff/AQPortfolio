import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I’m Anurag Shroff, a passionate and dedicated Web Developer with a knack for creating modern, user-focused websites that deliver exceptional value.
      With a strong foundation in front-end and back-end development, I transform ideas into fully functional digital experiences that are both visually stunning and highly efficient.
      My expertise lies in crafting responsive, cross-browser compatible websites that are optimized for speed and performance.
      I am constantly seeking opportunities to learn and grow, and I am excited to bring my skills and creativity to new projects.
      If you’re looking for a Web Developer who is passionate about creating exceptional digital experiences, I would love to hear from you.
      
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
