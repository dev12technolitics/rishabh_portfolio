import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import skillsData from "../../data/skillsData";
import ProgressCircleSkill from "./ProgressCircleSkill";

const CarouselProgress = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 3,
        },
      }}
    >
      {skillsData.map(({ id, progress, skill, paragraph }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col items-center justify-center ">
            <ProgressCircleSkill progress={progress} uniqueId={id} />

            <h3 className="headding_three my-2 text-cyan1 text-center whitespace-nowrap">
              {skill}
            </h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselProgress;

{
  /* <div className="grid grid-cols-12">
<div className="col-span-12 order-2 lg:col-span-8 lg:order-1">
  <div className="p-4 bg-blue-500 text-white">Section One</div>
</div>

<div className="col-span-12 order-1 lg:col-span-4 lg:order-2">
  <div className="p-4 bg-green-500 text-white">Section Two</div>
</div>
</div> */
}
