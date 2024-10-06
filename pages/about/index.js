import Image from "next/image";
import YEARSOFEXPERIENCE from "../../assets/YEARSOFEXPERIENCE.png";
import circaldot from "../../assets/circal_dot.png";
import rishabh from "../../assets/rishabh.png";
import square from "../../assets/xyz.png";
import ExperienceCarousel from "../../components/About/ExperienceCarousel";

const About = () => {
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
                                  m-0 p-0 w-full flex flex-col justify-center"
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start
            p-[20px] 
            gap-2"
            >
              <h2 className="headding_two ">About Me</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <div className="relative">
              <div
                className="absolute right_absolute
                 dot-animation top-0 right-[-28px] w-16 h-16 z-0"
              >
                <Image
                  src={circaldot}
                  alt="image"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </div>
              <div
                className="bg-blue1/20 flex flex-col justify-center 
                            backdrop-blur-sm
                              glass_box 
                              shadow-lg p-[20px] relative z-10"
              >
                <h3 className="headding_three mb-2 text-cyan1">Who I’m</h3>
                <p className="paragraph text-white/95">
                  Experienced web developer and trainer with passion for
                  creating attractive and interactive websites meeting customer
                  needs and exceeding expectations. Well-versed in developing
                  React js and Next.js based websites. Excels in HTML, CSS, and
                  JavaScript development.
                </p>
              </div>
            </div>

            <div
              className="p-[20px] w-full flex justify-center xl:justify-start
            lg:justify-start"
            >
              <div
                className="bg-blue1/30 flex items-center justify-center
            backdrop-blur-md  border-[3px] rounded-full cursor-pointer
            border-cyan1/30 shadow-lg btn_home px-[20px] py-[3px]"
              >
                hire me
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full">
          <div
            className="col-span-12 lg:col-span-4 gap-4
          m-0 p-0 w-full flex flex-col justify-center
          "
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start gap-2 "
            >
              <h2 className="headding_two ">My Experience</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <p className="paragraph text-white/95">
              Well-versed in developing React js and Next.js based websites.
              Excels in HTML, CSS, and JavaScript development.
            </p>

            <div className="">
              <ExperienceCarousel />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

{
  /* <div class="info-list p-[20px] mt-10">
<ul className="pt-[20px]">
  <li className="text-white/95">
    <strong className="text-cyan1">Age :</strong> 24
  </li>
  <li className="text-white/95">
    <strong className="text-cyan1">Residence :</strong> USA
  </li>
  <li className="text-white/95">
    <strong className="text-cyan1">Freelance :</strong> Available
  </li>
  <li className="text-white/95">
    <strong className="text-cyan1">Address :</strong> San
    Francisco
  </li>
  <li className="text-white/95">
    <strong className="text-cyan1">Phone :</strong> +1 256 254 84
    56
  </li>
  <li className="text-white/95">
    <strong className="text-cyan1">E-mail:</strong>{" "}
    alejandroa@gmail.com
  </li>
</ul>
</div> */
}
