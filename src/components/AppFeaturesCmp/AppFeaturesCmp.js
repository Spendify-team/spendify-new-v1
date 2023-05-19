import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./AppFeaturesCmp.css";
import Img1 from "../../assets/01.png";
import Img2 from "../../assets/02.png";
import Img3 from "../../assets/03.png";
import Img4 from "../../assets/04.png";
import Img5 from "../../assets/05.png";
import Img6 from "../../assets/06.png";
import Img7 from "../../assets/07.png";

const ContainerDiv = styled(Container)`
  padding: 4rem 3rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 500px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: calc(1100px + 3rem);
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Gilroy600";
  font-size: 40px;
  color: #0f172a;
  font-family: "Gilroy700";

  @media only screen and (max-width: 599px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  margin: 0 auto;
  font-family: "Gilroy400";
  font-size: 20px;
  text-align: center;
  color: #424651;
  padding: 12px 0;
  max-width: 673px;

  @media only screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const AppSliderWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 1.5rem;
  width: calc(100vw - 20px);
  margin-left: calc(-50vw + 50% + 10px);

  --swiper-image-ratio: 33.3%; /* ratio 16:9 = 56.25% */

  --swiper-width: 300px;
  --swiper-inactive-scale: 0.85; /* makes the other slide smaller */

  /* responsive settings */
  --swiper-mobile-width: 90%;
  --swiper-mobile-inactive-scale: 0.95;

  & > .app-slider {
    position: relative;
    width: 100%;
    height: calc(var(--swiper-width) * var(--swiper-image-ratio) / 100%);
    overflow: hidden;
  }

  & > .app-slider .swiper-slide {
    position: relative;
    width: var(--swiper-width);
    opacity: 0.5;
    transform: scale(0.84);
    transition: all 0.3s ease-in-out;
    overflow: hidden;
    border-radius: 0.4285rem;
  }

  & > .app-slider .swiper-backface-hidden .swiper-slide {
    transform: scale(0.84) translateZ(0);
  }

  & > .app-slider .swiper-slide.swiper-slide-active {
    transform: scale(1) !important;
    opacity: 1 !important;
  }

  & > .app-slider .swiper-backface-hidden .swiper-slide.swiper-slide-active {
    transform: scale(1) translateZ(0) !important;
  }

  & > .app-slider .swiper-image {
    position: relative;
    width: 100%;
    padding-top: var(--swiper-image-ratio);
  }
`;

const AppImage = styled.img`
  width: 275px;
`;

const AppPagination = styled.div`
  padding-top: 1rem;
`;

const AppFeaturesCmp = ({ bgColor }) => {
  return (
    <>
      <ContainerDiv bgColor={bgColor} fluid>
        <Wrapper>
          <Title>App Features</Title>
          <Desc>
            The simple, intuitive, and powerful expense tracker and budget app
            to manage your financial life. See screenshots
          </Desc>
          <AppSliderWrapper>
            <Swiper
              className="app-slider"
              loop={true}
              modules={[Autoplay, Pagination]}
              slidesPerView={"auto"}
              autoplay={{ disableOnInteraction: true, delay: 5000 }}
              centeredSlides={true}
              pagination={{
                clickable: true,
                el: ".app-pagination",
              }}
            >
              {[
                { image: Img1 },
                { image: Img2 },
                { image: Img3 },
                { image: Img4 },
                { image: Img5 },
                { image: Img6 },
                { image: Img7 },
              ].map((v, i) => {
                return (
                  <SwiperSlide key={i}>
                    <AppImage src={v.image} alt="spendify" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </AppSliderWrapper>
          <AppPagination className="app-pagination"></AppPagination>
        </Wrapper>
      </ContainerDiv>
    </>
  );
};

export default AppFeaturesCmp;
