import Image from "next/image";
import React from "react";
import hii from "../../assets/hello.png";
import rishabh from "../../assets/rishabh.png";

const HomePage = () => {
  return (
    <>
      <div className="container mt-[80px] w-full flex items-center justify-center">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div
            className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-5 
           flex items-center lg:justify-start xl:justify-start justify-center"
          >
            <div
              className="bg-gradient-to-b from-white to-blue1/20 
            p-[3px] flex items-center justify-center rounded-xl"
            >
              <Image
                src={rishabh}
                alt="Description of image"
                width={500}
                height={300}
                className="rounded-xl"
              />
            </div>
          </div>

          <div
            className="col-span-12 md:col-span-12 lg:col-span-6 xl:col-span-7
           flex items-center"
          >
            <div
              className="px-4 flex flex-col 
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
                <h1 className="headding mb-0 flex text-center xl:text-left lg:text-left">
                  Hello!{" "}
                  <div className="h-14 w-14 px-2 flex items-center justify-center">
                    {" "}
                    <Image
                      src={hii}
                      alt="Description of image"
                      width={500}
                      height={300}
                      className=""
                    />
                  </div>
                  I Am
                </h1>
                <h1 className="headding mb-0 text-center xl:text-left lg:text-left">
                  {" "}
                  rishabh tiwari
                </h1>
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
            border-blue1/50 shadow-lg p-[20px] my-6 
            text-center xl:text-left lg:text-left"
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
