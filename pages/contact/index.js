import Image from "next/image";
import addressData from "../../data/addressData";
import { ContactFrom } from "../../components/contact";
import rishabhdata from "../../data/rishabhdata";
import Head from "next/head";

const Contact = () => {
  return (
    <>
    <Head>
        <title>Rishabh Tiwari | Front-End Developer Portfolio</title>
        <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"></meta>
        <link rel="icon" type="image/png" sizes="192x192" href="/favicon.ico.png" />
      </Head>
      <div className="container mt-[80px] ">

        <div className="grid grid-cols-12 w-full">
          <div className="col-span-12 lg:col-span-7 flex items-center justify-end relative whatdo_padding">
            <div
              className="relative w-full h-0 pb-[56.25%]
             rounded-xl border-[3px] border-white/50 shadow-lg"
            >
              {" "}
              {/* 16:9 Aspect Ratio */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43913.715973117054!2d81.11968047280232!3d24.451073754896676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3984680ece1ea289%3A0x14f7061a21830b72!2sMahudar%2C%20Madhya%20Pradesh%20485115!5e0!3m2!1sen!2sin!4v1728229583412!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="absolute inset-0 w-full h-full rounded-xl"
              />
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-5 p-0 w-full
          flex flex-col justify-center gap-2 content_margintop"
          >
            <div
              className="flex items-center flex-col lg:flex-row xl:flex-row
            justify-center lg:justify-start xl:justify-start gap-2"
            >
              <h2 className="headding_two ">Get In Touch</h2>
              <div className="bg-gradient-to-r from-white/70 to-blue1/70 h-1 w-14 rounded-xl" />
            </div>

            <p className="paragraph text-white/95">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 mt-[80px] gap-4">
          {addressData.map(({ id, title, paragraph, img, link }) => (
            <div
              key={id}
              className="col-span-12 lg:col-span-4 md:col-span-6 bg-blue1/40
              flex items-center justify-center 
              backdrop-blur-sm border-[3px] rounded-xl text-white/95
              border-white/50 shadow-lg p-[20px] relative z-10 glass_home"
            >
              <div className="grid grid-cols-12 gap-4">

                <div className="col-span-12 lg:col-span-3 w-full m-0 p-0 flex items-center justify-center ">
                  <div className="w-[100px]">
                    <Image
                      src={img}
                      alt={title}
                      width={500}
                      height={300}
                      className=" w-full "
                    />
                  </div>
                </div>

                <div className="col-span-12 lg:col-span-9 w-full m-0 p-0">
                  <h3 className="headding_three mb-2 text-cyan1 left_center_text
                  ">{title}</h3>
                  <a
                    href={link}
                    className="no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p className="text-white/95 left_center_paragraph w-auto">{paragraph}</p>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 w-full mt-[80px]">

          <div
            className="col-span-12 lg:col-span-4"
          >

            <h1
              className="headding mb-0 flex 
                     xl:justify-start
                     lg:justify-start
                     justify-center
                    "
            >
              rishabh tiwari
            </h1>

            <h3 className="headding_three mb-2 text-cyan1">frontend developer</h3>

            <div class="info-list mt-6 padding_right_li">
              <ul className="pt-[20px] ">

                {rishabhdata.map(({ id, title, paragraph }) => (
                  <li className="text-white/95 " key={id} >
                    <strong className="text-cyan1">{title} :</strong> {paragraph}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div
            className="col-span-12 lg:col-span-8 p-0 w-full
          flex flex-col justify-center gap-2 content_margintop"
          >
            <ContactFrom />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
