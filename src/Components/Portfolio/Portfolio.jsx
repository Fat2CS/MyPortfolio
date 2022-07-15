import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// image
import Marvel from "../../img/marvel.png";
import Vinted from "../../img/Vinted.png";
import Defi from "../../img/Defilady.png";
import ecom from "../../img/ecommerce.png";
import { Link } from "react-scroll";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* /entête */}
      <span> Mes Projets</span>
      <span> Portfolio</span>
      {/* //carroussel */}
      <Swiper slidesPerView={3} grabCursor={true} className="portfolio-slider">
        <SwiperSlide>
          <a
            href="https://vintedfrontend.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Vinted} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://marvelprocess.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Marvel} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://defilady.netlify.app/Link.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Defi} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://vintedfrontend.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Vinted} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
