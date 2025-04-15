import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="devanuragshroff@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+977 9820210742 / +91 78709 45247 " Image={FiPhone} />
      <SingleInfo text="Remote" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
