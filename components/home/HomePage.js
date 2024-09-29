import Image from "next/image";
import React from "react";
import circaldot from "../../assets/circal_dot.png";
import dubblestar from "../../assets/dubblestar.png";
import starone from "../../assets/half-star.png";
import hii from "../../assets/hello.png";
import multistar from "../../assets/multistar.png";
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
                  className="rounded-xl image-hover  object-cover"
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

              <div className="relative w-full">
                <div
                  className="absolute circular-animation
                  top-0 right-0 w-20 h-20 z-0 opacity-50"
                >
                  <Image
                    src={multistar}
                    alt="image"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>

                <div className="py-4 ">
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
              </div>

              <div
                className="bg-blue1/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full
            border-cyan1/30 shadow-lg btn_home px-[20px] py-[3px]"
              >
                hire me
              </div>

              <div className="relative">
                <div
                  className="absolute right_absolute
                 dot-animation top-0 right-[-28px] w-16 h-16 z-0"
                >
                  <Image
                    src={dubblestar}
                    alt="image"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>

                <div
                  className="bg-white/20 flex items-center 
                  backdrop-blur-sm  border-[3px] rounded-xl paragraph
                  border-blue1/50 shadow-lg p-[20px] my-6 relative z-10"
                >
                  Experienced web developer and trainer with passion for
                  creating attractive and interactive websites meeting customer
                  needs and exceeding expectations. Well-versed in developing
                  React js and Next.js based websites. Excels in HTML, CSS, and
                  JavaScript development.
                </div>

                <div
                  className="absolute dot-animation left_absolute
                bottom-0 left-[-28px] w-16 h-16 z-0"
                >
                  <Image
                    src={circaldot}
                    alt="image"
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
