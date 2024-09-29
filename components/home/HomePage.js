import Image from "next/image";
import React from "react";
import starone from "../../assets/half-star.png";
import hii from "../../assets/hello.png";
import rishabh from "../../assets/rishabh.png";
import { AnimatedText } from "../Animate";

const texts = [
  "rishabh tiwari",
  "frontend developer",
  "ui/ux developer",
  "web developer",
];

const HomePage = () => {
  return (
    <>
      <div className="container mt-[80px] w-full flex items-center justify-center">
        <div className="grid grid-cols-12 gap-4 w-full relative">
          <div
            className="absolute h-12 w-12 opacity-35 star-animation
          xl:top-[-80px] lg:top-[-80px] sm:top-[-80px] md:top-[0px] top-[-80px]
           sm:left-[-20px] left-0 "
          >
            <Image
              src={starone}
              alt="image"
              width={500}
              height={300}
              className=""
            />
          </div>

          <div
            className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-5 
           flex items-center lg:justify-start xl:justify-start justify-center"
          >
            <div
              className="bg-gradient-to-b from-white to-blue1/20 
            p-[3px] flex items-center justify-center rounded-xl relative"
            >
              {/* <div className="absolute right-[-20px] h-1/3 w-1/3">
                <Image
                  src={curly}
                  alt="image"
                  width={500}
                  height={300}
                  className="rounded-xl"
                />
              </div> */}

              <div className="image-container rounded-xl">
                <Image
                  src={rishabh}
                  alt="image"
                  width={500}
                  height={300}
                  className="rounded-xl image-hover"
                />
              </div>
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-7
           flex items-center"
          >
            <div
              className="px-0 flex flex-col content_box 
            lg:items-start xl:items-start items-center"
            >
              <div
                className="bg-blue1/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full
            border-cyan1/30 shadow-lg btn_home px-[20px] py-[3px]"
              >
                frontend developer
              </div>

              <div className="py-4">
                <h1
                  className="headding mb-0 flex 
                  xl:justify-start
                  lg:justify-start
                  justify-center
                 
                 "
                >
                  Hello!{" "}
                  <div className="h-14 w-14 px-2 flex items-center justify-center">
                    {" "}
                    <Image
                      src={hii}
                      alt="Description of image"
                      width={500}
                      height={300}
                      className="hello-hand"
                    />
                  </div>
                  I Am
                </h1>

                <AnimatedText
                  texts={texts}
                  typingSpeed={150}
                  deletingSpeed={75}
                />
              </div>

              <div
                className="bg-blue1/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full
            border-cyan1/30 shadow-lg btn_home px-[20px] py-[3px]"
              >
                hire me
              </div>

              <div
                className="bg-white/50 flex items-center 
           backdrop-blur-md  border-[3px] rounded-xl paragraph
            border-blue1/50 shadow-lg p-[20px] my-6"
              >
                Experienced web developer and trainer with passion for creating
                attractive and interactive websites meeting customer needs and
                exceeding expectations. Well-versed in developing React js and
                Next.js based websites. Excels in HTML, CSS, and JavaScript
                development.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          width: 250px;
          height: 100%;
          z-index: 1000;
          padding: 15px;
          transition: transform 0.3s ease-in-out;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
      `}</style> */}
    </>
  );
};

export default HomePage;
