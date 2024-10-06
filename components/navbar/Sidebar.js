import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaDownload, FaFacebookF } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";
import linkNav from "../../data/linksNav";
import socialMediaData from "../../data/socialMediaData";

const Sidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    setSocialMedia(socialMediaData);
  }, []);

  const iconMap = {
    FaFacebookF: <FaFacebookF className="text-blue1 text-xl" />,
    SiWhatsapp: <SiWhatsapp className="text-blue1 text-xl" />,
    MdOutlineMail: <MdOutlineMail className="text-blue1 text-xl" />,
    GrInstagram: <GrInstagram className="text-blue1 text-xl" />,
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="container">
        <div
          className="w-full flex items-center 
        justify-end xl:justify-end lg:justify-end md:justify-center 
        relative top-[30px]"
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden nav_link cursor-pointer 
            bg-blue1/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full h-12 w-12
            border-white/80 shadow-lg "
          >
            <RiMenu4Fill className="text-2xl text-white" />
          </div>

          <div
            className="bg-blue1/30 hidden md:flex items-center 
           backdrop-blur-md  border-[3px] rounded-full 
            border-white/50 shadow-lg py-[10px] px-[2rem]"
          >
            <ul
              className="hidden md:flex items-center justify-center 
            m-0 list-none p-0 gap-x-4"
            >
              {linkNav.map((element) => (
                <Link
                  key={element?.name}
                  href={element?.link}
                  className={`no-underline nav_link_sm uppercase py-1 px-3   
                  ${
                    router.pathname === element?.link
                      ? "bg-blue1/40 border-[2px] border-white/50 nav_link_sm py-1 px-3  rounded-full"
                      : ""
                  }`}
                >
                  {element?.name}
                </Link>
              ))}

              <a
                href="/cv.pdf"
                download
                className="no-underline nav_link_sm li_nav uppercase gap-x-[5px] py-1 px-3 
               hover:bg-blue1/40 hover:border-[2px] hover:border-white/50 rounded-full"
              >
                Download CV
                <FaDownload />
              </a>
            </ul>
          </div>
        </div>
      </div>

      {/* md:hidden flex  */}
      {isOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden flex  flex-col
         bg-gradient-to-b from-cyan1  to-blue1 backdrop-blur-sm"
        >
          <div className="container">
            <div
              className="w-full flex items-center justify-end
                relative top-[30px]"
            >
              <div
                onClick={() => setIsOpen(!isOpen)}
                className=" cursor-pointer 
            bg-white/30 flex items-center justify-center
             border-[3px] rounded-full h-12 w-12
            border-blue1 shadow-lg "
              >
                <GiTireIronCross
                  style={{
                    color: "#101626",
                    fontSize: "17px",
                  }}
                />
              </div>
            </div>

            <ul className="flex flex-col items-start justify-start m-0 list-none py-20 px-2 gap-y-3">
              {linkNav.map((element) => (
                <Link
                  key={element?.name}
                  href={element?.link}
                  className="no-underline nav_link_sm"
                  onClick={handleLinkClick}
                >
                  {element?.name}
                </Link>
              ))}

              <a href="/cv.pdf" download className="no-underline nav_link">
                <li className="li_nav gap-x-[5px]">
                  Download CV
                  <FaDownload />
                </li>
              </a>
            </ul>

            <div
              className="flex flex-col items-center
             justify-center"
            >
              <h2 className="middle_hedding mb-3">Follow Me</h2>

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
                      className="bg-white/30 flex items-center justify-center
        backdrop-blur-sm  border-[3px] rounded-full 
        border-blue1/30 shadow-lg p-[10px] h-12 w-12"
                    >
                      {iconMap[media?.icon]}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
