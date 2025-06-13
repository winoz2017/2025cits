import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider2Comp = () => {
  const cards = [
    { id: 1, title: "카드 1", content: "내용 1" },
    { id: 2, title: "카드 2", content: "내용 2" },
    { id: 3, title: "카드 3", content: "내용 3" },
    { id: 4, title: "카드 4", content: "내용 4" },
    { id: 5, title: "카드 5", content: "내용 5" },
    { id: 6, title: "카드 6", content: "내용 6" },
    { id: 7, title: "카드 7", content: "내용 7" },
    { id: 8, title: "카드 8", content: "내용 8" },
    { id: 9, title: "카드 9", content: "내용 9" },
    { id: 10, title: "카드 10", content: "내용 10" },
  ];

  return (
    <div className="container my-5">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        // pagination={{ clickable: true }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 4,
          },
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider2Comp;
