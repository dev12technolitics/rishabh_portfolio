import Image from "next/image";
import YEARSOFEXPERIENCE from "../../assets/YEARSOFEXPERIENCE.png";
import rishabh from "../../assets/rishabh.png";
import square from "../../assets/xyz.png";

const Resume = () => {
  return (
    <>
      <div className="container mt-[80px]">
        <div className="grid grid-cols-12 w-full">
          <div
            className="col-span-12 lg:col-span-6 
                                 flex items-center justify-end relative"
          >
            <div
              className="bg-gradient-to-b from-white to-blue1/20
                             md:w-[60%] lg:w-3/4 xl:w-3/4 w-3/4
                             p-[3px] rounded-xl"
            >
              <div
                className="absolute
                                 left-0 bottom-0 z-0 
                                 md:w-[50%] lg:w-4/6 xl:w-4/6  w-4/6
                                "
              >
                <Image src={square} alt="image" width={500} height={300} />
              </div>

              <div className=" relative z-10">
                <div
                  className="absolute
                                    bottom-16 sm:bottom-32
                                    w-4/6 sm:w-3/6
                                  left-[-70px] sm:left-[-130px] lg:left-[-110px] xl:left-[-130px] md:left-[-130px]
                                   z-20
                                    "
                >
                  <Image
                    src={YEARSOFEXPERIENCE}
                    alt="image"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="image-container rounded-xl">
                  <Image
                    src={rishabh}
                    alt="image"
                    width={500}
                    height={300}
                    className="rounded-xl image-hover object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-6
                                  m-0 p-0 w-full"
          >
            <div
              className="bg-blue1/20 flex items-center 
                                  backdrop-blur-sm
                              glass_box paragraph text-white/95
                              shadow-lg p-[20px] mt-10 relative z-10"
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
    </>
  );
};

export default Resume;
