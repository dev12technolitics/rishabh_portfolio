import Image from "next/image";
import YEARSOFEXPERIENCE from "../../assets/YEARSOFEXPERIENCE.png";
import circaldot from "../../assets/circal_dot.png";

import rishabh from "../../assets/rishabh.png";
import square from "../../assets/xyz.png";
import ExperienceCarousel from "../../components/About/ExperienceCarousel";
import experienceData from "../../data/experienceData";
import whatdoData from "../../data/whatdoData";

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
            px-[20px] pb-[1.5rem]
            gap-2"
            >
              <h2 className="headding_two content_margintop">About Me</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <div className="relative">
              <div
                className="absolute right_absolute
                 dot-animation top-0 right-[-11px] w-16 h-16 z-0"
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
                className="bg-blue1/40
                flex flex-col justify-center 
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
              className="pt-[1.5rem] px-[20px] w-full flex justify-center xl:justify-start
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

        <div className="grid grid-cols-12 w-full mt-[80px] ">
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

          <div
            className="col-span-12 lg:col-span-8 gap-4
          w-full flex flex-col justify-center padding_cv_exp "
          >
            {experienceData.map((experience) => (
              <div
                className="cv_exp_box rounded-xl backdrop-blur-sm bg-blue1/40 
                 px-[30px] py-[20px]"
                key={experience.id}
              >
                <h3 className="headding_three text-white/95">
                  0{experience.id}
                </h3>

                <div className="cv_exp_com">
                  <span className="">
                    <p className="cv_exp_text text-white/95">
                      {experience.designation}
                    </p>
                    <p className="cv_exp_text text-cyan1">
                      {experience.company}
                    </p>
                  </span>
                  <p className="cv_exp_text m-0 p-0 text-white/95">
                    ({experience.start_date} - {experience.end_date})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 w-full mt-[80px] ">
          <div
            className="col-span-12 lg:col-span-8 
          w-full flex justify-center whatdo_padding"
          >
            <div
              className="grid grid-cols-12 w-full gap-4 
              order-2 lg:order-1 xl:order-1"
            >
              {whatdoData.map((experience) => (
                <div className="col-span-12 md:col-span-6" key={experience.id}>
                  <div
                    className="bg-blue1/40 flex  flex-col items-center 
                  backdrop-blur-sm border-[3px] rounded-xl paragraph text-white/95
                   border-white/50 shadow-lg p-[20px] relative z-10 glass_home"
                  >
                    <div className="w-1/5">
                      <Image
                        src={experience.img}
                        alt="image"
                        width={500}
                        height={300}
                        className="object-cover"
                      />
                    </div>

                    <h3 className="headding_three text-cyan1 mb-3">
                      {experience?.title}
                    </h3>
                    <p className="paragraph text-center text-white/95">
                      {experience?.paragraph}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-4
           p-0 w-full flex flex-col justify-center
          order-1 lg:order-2 xl:order-2 content_margintop"
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start gap-2 "
            >
              <h2 className="headding_two ">What I Do</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <p className="paragraph text-white/95">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
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
