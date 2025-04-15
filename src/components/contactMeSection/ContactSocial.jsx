import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/anurag-shroff-8b571b2ab/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/anuragshroff" Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/anurag_shroff_/" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
