import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CommonCarousel.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Card from "react-bootstrap/Card";

import Carousel1 from "../images/carousel1.png";

function CommonCarousel(props) {
  const { breakpoints, slides } = props;
  return (
    <div className="Common_Carousel">
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        loop={false}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index}>
            <Card style={{ border: "none" }}>
              <Card.Img variant="top" src={slide.logo} />
              <Card.Body>
                <Card.Title className="card_title smallFont">
                  {slide.title}
                </Card.Title>
                <Card.Text className="card_text extraSmallFont">
                  {slide.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CommonCarousel;
