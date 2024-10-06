import Image from "next/image";
import addressData from "../../data/addressData";

const Contact = () => {
  return (
    <>
      <div className="container mt-[80px]">
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
            className="col-span-12 lg:col-span-5 m-0 p-0 w-full
          flex flex-col justify-center gap-2"
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

        <div className="grid grid-cols-12 w-ful lg:mt-[80px] mt-[40px] gap-4">
          {addressData.map(({ id, title, paragraph, img, link }) => (
            <div
              key={id} // Moved key to the correct element
              className="col-span-12 lg:col-span-4 md:col-span-6 bg-blue1/10 
              flex items-center justify-center 
              backdrop-blur-sm border-[3px] rounded-xl text-white/95
              border-white/30 shadow-lg p-[20px] relative z-10 glass_home"
            >
              <div className="w-[25%]">
                <Image
                  src={img}
                  alt={title}
                  width={500}
                  height={300}
                  className=""
                />
              </div>

              <div className="ml-6 w-[75%]">
                <h3 className="headding_three mb-2 text-cyan1">{title}</h3>
                <a
                  href={link}
                  className="no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="paragraph text-white/95">{paragraph}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 w-full lg:mt-[80px] mt-[40px]">
          <div
            className="col-span-12 lg:col-span-5 
          flex items-center justify-end relative whatdo_padding"
          >
            <div
              className="bg-blue1/20 flex items-center 
                  backdrop-blur-sm border-[3px] rounded-xl paragraph text-white/95
                   border-white/30 shadow-lg p-[20px] mt-6 relative z-10 glass_home"
            >
              Experienced web developer and trainer with passion for creating
              attractive and interactive websites meeting customer needs and
              exceeding expectations. Well-versed in developing React js and
              Next.js based websites. Excels in HTML, CSS, and JavaScript
              development.
            </div>
          </div>

          <div
            className="col-span-12 lg:col-span-7 m-0 p-0 w-full
          flex flex-col justify-center gap-2"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
