import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";

import { SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center
   justify-center lg:mt-[60px] mt-[20px]"
    >
      <div className="relative flex w-full items-center justify-center gap-x-2">
        <div
          className="absolute top-1/2 left-1/2
       transform -translate-x-1/2 
       -translate-y-1/2 
       bg-gradient-to-r from-blue1 to-cyan1 p-[1px]
       backdrop-blur-lg  rounded-full
        w-full"
        />
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bg-white/30 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px] h-12 w-12"
          >
            <FaFacebookF className="text-blue1 text-xl" />
          </div>
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <div
            className="bg-white/30 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px] h-12 w-12"
          >
            <SiWhatsapp className="text-blue1 text-xl" />
          </div>
        </a>
        <a href="mailto:youremail@example.com">
          <div
            className="bg-white/30 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px] h-12 w-12"
          >
            <MdOutlineMail className="text-blue1 text-xl" />
          </div>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bg-white/30 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px] h-12 w-12"
          >
            <GrInstagram className="text-blue1 text-xl" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
