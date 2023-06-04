import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Flag from "react-world-flags";
import { Autoplay } from "swiper";
import "swiper/css";

const Wrapper = styled(Container)`
  background-color: #5e075f;
  padding: 2rem;

  @media only screen and (max-width: 500px) {
    padding: 2rem 1rem;
  }
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;

  @media only screen and (max-width: 730px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Gilroy700";
  font-size: 36px;
  color: #ffffff;
  max-width: 507px;
  width: 100%;

  @media only screen and (max-width: 890px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 730px) {
    text-align: center;
  }

  @media only screen and (max-width: 500px) {
    font-size: 22px;
  }
`;

const FlagWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlagImg = styled.div`
  width: 20px;
  /* height: auto; */
  /* aspect-ratio: 29/21; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const FlagSliderWrapper = styled.div`
  display: flex;
  gap: 12px;
  max-width: 300px;
  width: 100%;
  justify-content: space-between;
`;

const UseSpendifyCmp = () => {
  const FlagIcon = ({ icon, name }) => {
    return (
      <FlagWrapper>
        <FlagImg>{icon}</FlagImg>
      </FlagWrapper>
    );
  };
  return (
    <Wrapper fluid>
      <Holder>
        <Title>Thousands of people across the world use Spendify</Title>
        <FlagSliderWrapper>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={6}
            autoplay={{
              delay: 2000,
            }}
            speed={1000}
            style={{ width: "100%" }}
            loop={true}
          >
            {[
              { name: "United States of America", icon: <Flag code={"US"} /> },
              { name: "Lithuania", icon: <Flag code={"LT"} /> },
              { name: "Europe", icon: <Flag code={"EU"} /> },
              { name: "Jamaica", icon: <Flag code={"JM"} /> },
              { name: "Portugal", icon: <Flag code={"PT"} /> },
              { name: "Nigeria", icon: <Flag code={"NG"} /> },
              { name: "United States of America", icon: <Flag code={"US"} /> },
              { name: "Lithuania", icon: <Flag code={"LT"} /> },
              { name: "Europe", icon: <Flag code={"EU"} /> },
              { name: "Jamaica", icon: <Flag code={"JM"} /> },
              { name: "Portugal", icon: <Flag code={"PT"} /> },
              { name: "Nigeria", icon: <Flag code={"NG"} /> },
              { name: "Canada", icon: <Flag code={"CA"} /> },
            ].map((v, i) => {
              return (
                <SwiperSlide key={i}>
                  <FlagIcon icon={v.icon} name={v.name} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </FlagSliderWrapper>
      </Holder>
    </Wrapper>
  );
};

export default UseSpendifyCmp;
