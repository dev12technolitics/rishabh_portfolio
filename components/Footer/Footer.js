import { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { SiWhatsapp } from "react-icons/si";
import socialMediaData from "../../data/socialMediaData";

const Footer = () => {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    setSocialMedia(socialMediaData);
  }, []);

  const iconMap = {
    FaFacebookF: <FaFacebookF className="text-white/90 text-xl" />,
    SiWhatsapp: <SiWhatsapp className="text-white/90 text-xl" />,
    MdOutlineMail: <MdOutlineMail className="text-white/90 text-xl" />,
    GrInstagram: <GrInstagram className="text-white/90 text-xl" />,
  };

  return (
    <div
      className="flex flex-col items-center
   justify-center lg:mt-[55px] mt-[20px] pb-[20px]"
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

        {socialMedia.map((media) => (
          <a
            key={media?.name}
            href={media?.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="bg-blue1/40 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-white/30 shadow-lg p-[10px] h-12 w-12"
            >
              {iconMap[media?.icon]}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
