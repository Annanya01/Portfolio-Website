import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination, Navigation, Scrollbar, Ally } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Prabhat Sir",
    review:
      "Brilliant student with great learning ability",
  },
  {
    avatar: AVTR2,
    name: "Dr. Shankar Choudhary",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia, veritatis magni culpa voluptatibus itaque! Veniam, tenetur quasi! Excepturi, iste.",
  },
  {
    avatar: AVTR3,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia, veritatis magni culpa voluptatibus itaque! Veniam, tenetur quasi! Excepturi, iste.",
  },
  {
    avatar: AVTR4,
    name: "Tina Snow",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod officia, veritatis magni culpa voluptatibus itaque! Veniam, tenetur quasi! Excepturi, iste.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonial">
      <h5>Referals</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        //install swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        scrollbar = {{draggable: true}}
        pagination={true}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
               {/*<img src={avatar} alt={name} />*/}
              </div>
              <h5>{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
