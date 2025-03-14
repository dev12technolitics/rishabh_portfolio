import Head from "next/head";
import Image from "next/image";
import { CarouselProgress } from "../../components/Resume";
import educationData from "../../data/educationData";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Rishabh Tiwari | Front-End Developer Portfolio</title>
        <meta
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          name="viewport"
        ></meta>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon.ico.png"
        />
      </Head>

      <div className="container mt-[80px]">
        <div className="grid grid-cols-12">
          <div
            className="col-span-12 lg:col-span-4 lg:order-2 flex flex-col justify-center gap-2 
          content_marginbottom"
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start gap-2"
            >
              <h2 className="headding_two ">Education</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <h3 className="headding_three text-cyan1">Studied at</h3>

            <p className="paragraph text-white/95">
              Building my expertise from solid academic foundations, I’ve
              continuously expanded my skills.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 lg:order-1 Education_padding">
            <div className="grid grid-cols-12 w-full gap-2 w-full">
              {educationData.map((experience) => (
                <div className="col-span-12 md:col-span-4" key={experience.id}>
                  <div
                    className="bg-blue1/40 flex  flex-col items-center justify-center
                  backdrop-blur-sm border-[3px] rounded-xl paragraph text-white/95
                   border-white/50 shadow-lg p-[15px] relative_box h-full w-full relative z-10 "
                  >
                    <div class="absolute z-10 left-4 right-0 top-1/2 transform -translate-x-1/2 rotate-90 ">
                      {experience?.location}
                    </div>

                    <h3 className="headding_three text-cyan1 text-center ">
                      {experience?.institution}
                    </h3>

                    <div className="relative flex w-full items-center justify-center my-3">
                      <div
                        className="absolute top-1/2 left-1/2
                          transform -translate-x-1/2 
                         -translate-y-1/2 
                          bg-gradient-to-r from-blue1 to-cyan1 p-[1px]
                          backdrop-blur-lg  rounded-full
                          w-full"
                      />
                      <div
                        className="bg-blue1/40
                       flex items-center justify-center
                backdrop-blur-sm  border-[1px] rounded-full 
        border-white/70 shadow-lg py-0 px-3 "
                      >
                        {experience?.graduationDate}
                      </div>
                    </div>

                    <p className="paragraph text-white/95 text-center ">
                      {experience?.degree}
                    </p>

                    <div class="overlay">
                      <div class="overlay_text ">
                        <Image
                          src={experience?.img}
                          alt="image"
                          width={500}
                          height={300}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 w-full mt-[80px] ">
          <div
            className="col-span-12 lg:col-span-4 w-full
          flex flex-col justify-center gap-2"
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start gap-2"
            >
              <h2 className="headding_two ">Skills</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <h3 className="headding_three text-cyan1">
              Creative ability/Developing on
            </h3>

            <p className="paragraph text-white/95">
              Equipped with a range of technical skills, I’m proficient in tools
              and technologies that drive impactful solutions.
            </p>
          </div>

          <div
            className="col-span-12 lg:col-span-8 gap-4
          w-full flex flex-col justify-center padding_cv_exp"
          >
            <div className="">
              <CarouselProgress />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
