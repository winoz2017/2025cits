import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function SliderComp() {
  return (
    <div className="mb-3">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ height: "300px" }}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "skyblue",
              backgroundImage: "url(./image/pc01.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              color: "white",
            }}
          >
            <h2>COMPANY</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "pink",
            }}
          >
            <h2>슬라이드 2</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "skyblue",
            }}
          >
            <h2>슬라이드 3</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SliderComp;
