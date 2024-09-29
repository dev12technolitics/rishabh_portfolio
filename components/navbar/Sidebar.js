import Link from "next/link";
import { useState } from "react";
import { FaDownload, FaFacebookF } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { RiMenu4Fill } from "react-icons/ri";
import { SiWhatsapp } from "react-icons/si";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            bg-white/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full h-12 w-12
            border-white/20 shadow-lg "
          >
            <RiMenu4Fill />
          </div>

          <div
            className="bg-white/30 hidden md:flex items-center 
           backdrop-blur-md  border-[3px] rounded-full 
            border-white/20 shadow-lg py-[10px] px-[2rem]"
          >
            <ul
              className="hidden md:flex items-center justify-center 
            m-0 list-none p-0 gap-x-10"
            >
              <Link href="/about" className="no-underline nav_link">
                <li className="li_nav gap-x-[5px]">
                  Home
                  <IoIosArrowDown />
                </li>
              </Link>

              <Link href="/about" className="no-underline nav_link">
                <li>about</li>
              </Link>

              <Link href="/resume" className="no-underline nav_link">
                <li>resume</li>
              </Link>

              <Link href="/contact" className="no-underline nav_link">
                <li>contact</li>
              </Link>

              <Link href="/contact" className="no-underline nav_link">
                <li className="li_nav gap-x-[5px]">
                  download cv
                  <FaDownload />
                </li>
              </Link>
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
              <Link href="/about" className="no-underline nav_link_sm">
                <li className="li_nav gap-x-[5px]">
                  Home
                  <IoIosArrowDown />
                </li>
              </Link>

              <Link href="/about" className="no-underline nav_link_sm">
                <li>about</li>
              </Link>

              <Link href="/resume" className="no-underline nav_link_sm">
                <li>resume</li>
              </Link>

              <Link href="/contact" className="no-underline nav_link_sm">
                <li>contact</li>
              </Link>

              <Link href="/contact" className="no-underline nav_link_sm">
                <li className="li_nav gap-x-[5px]">
                  download cv
                  <FaDownload />
                </li>
              </Link>
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
                <a
                  href="https://wa.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Sidebar;
