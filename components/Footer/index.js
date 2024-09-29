import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SiSkypeforbusiness, SiWhatsapp } from "react-icons/si";

const Footer = () => {
  return (
    <div
      className="flex flex-col items-center
   justify-center mt-[60px]"
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

        <div
          className="bg-white/30 flex items-center 
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px]"
        >
          <FaFacebookF className="text-blue1" />
        </div>

        <div
          className="bg-white/30 flex items-center 
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px]"
        >
          <SiWhatsapp className="text-blue1" />
        </div>
        <div
          className="bg-white/30 flex items-center 
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px]"
        >
          <SiSkypeforbusiness className="text-blue1" />
        </div>

        <div
          className="bg-white/30 flex items-center 
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px]"
        >
          <GrInstagram className="text-blue1" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
