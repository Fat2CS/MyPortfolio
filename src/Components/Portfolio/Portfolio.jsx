import React, { useContext } from "react";
import "./Portfolio.css";
import SwiperCore, { Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Scrollbars } from "react-custom-scrollbars";
import "swiper/swiper.css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css";
import { themeContext } from "../../Context";
import { useTranslation } from "react-i18next";
// import "swiper/components/scrollbar/scrollbar.css";
// import "./CustomScrollBar.css";

// image
import Balance from "../../img/balance.png";
// import Marvel from "../../img/marvel.png";
import Vinted from "../../img/Vinted.png";
import Defi from "../../img/Defilady.png";
import Netflix from "../../img/netflix.png";
import Jeu from "../../img/jeu.png";
import Mokup from "../../img/mokup.png";
import Liberaux from "../../img/liberaux.png";
import chat from "../../img/chat1.png";
import PortfolioImg from "../../img/Fatoucs.png";
import Swapsilk from "../../img/swapsilk.png";
import Equinterim from "../../img/equinterim.png";
import Gratien from "../../img/gratien.png";
import fcsdeveloper from "../../img/fcsdeveloper.png";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  SwiperCore.use([Scrollbar]);
  const { t } = useTranslation();
  return (
    <div className="portfolio">
      {/* /entête */}
      <span style={{ color: darkMode ? "white" : "" }}>
        {t("Portfolio.title")}
      </span>
      <span> {t("Portfolio.subtitle")}</span>
      <p> {t("Portfolio.description")}</p>

      <Swiper
        scrollbar={{ hide: false }}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <a
            href="https://fatoucsdeveloper.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={fcsdeveloper} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://equiterimapp.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Equinterim} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://swapsilk.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Swapsilk} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://efficiencegratienbercetche.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Gratien} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://curious-creponne-4f442d.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={chat} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://liberauxbot.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Liberaux} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://github.com/Fat2CS/ChatWithMyVirtualFriend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Mokup} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://balancetongossip.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Balance} alt="" />
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a
            href="https://fatoucsdeveloper.com/index.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={PortfolioImg} alt="" />
          </a>
        </SwiperSlide>

        {/* <SwiperSlide>
          <a
            href="https://fatouclonenetflix.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Netflix} alt="" />
          </a>
        </SwiperSlide> */}

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
            href="https://defilady.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Defi} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://fantastic-donut-9c4b7e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Jeu} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
