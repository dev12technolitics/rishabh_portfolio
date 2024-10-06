// import Image from "next/image";
// import carouselData from "../../data/carouselData";

// const ExperienceCarousel = () => {
//   return (
//     <div className="owl-carousel owl-theme">
//       {carouselData.map((item) => (
//         <div
//           key={item.name}
//           className="bg-blue-500/40 flex items-center justify-center
//           backdrop-blur-sm border-3 rounded-full
//           border-white/30 shadow-lg p-2 h-24 w-24"
//         >
//           <div className="w-3/5">
//             <Image
//               src={item?.img}
//               alt={item?.name}
//               width={500}
//               height={300}
//               className="object-cover"
//             />
//             {item.name}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ExperienceCarousel;

// components/ExperienceCarousel.js
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import carouselData from "../../data/carouselData";

const ExperienceCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      slidesPerView={3}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {carouselData.map((item) => (
        <SwiperSlide key={item?.name}>
          <div
            className="bg-blue1/40 flex items-center justify-center 
          backdrop-blur-sm border-3 rounded-full border-white/70 shadow-lg p-2 h-24 w-24"
          >
            <div className="w-3/5 flex flex-col items-center">
              <Image
                src={item?.img}
                alt={item?.name}
                width={500}
                height={300}
                className="object-cover rounded-full"
              />
            </div>
          </div>
          <span className="text-center">{item.name}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ExperienceCarousel;
