import React from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import SolidButton from "../Buttons/SolidButton";
import SpendifyMockupImage from "../../assets/spendify-mockup.svg";
import Feature1Image from "../../assets/feature-1.svg";
import Feature2Image from "../../assets/feature-2.svg";
import Feature3Image from "../../assets/feature-3.svg";
import PatternImage from "../../assets/pattern1.svg";

const ContainerDiv = styled(Container)`
  margin: ${(props) => props.margin && props.margin};
  padding: 5rem 3rem 4rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 768px) {
    padding: 7rem 1rem 4rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 6rem 1rem 3rem;
  }
`;

const Wrapper = styled.div`
  max-width: calc(1100px + 3rem);
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
`;

const Heading = styled.h2`
  font-family: "Gilroy900";
  font-size: 60px;
  text-align: center;
  color: #0f172a;

  @media only screen and (max-width: 650px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 36px;
  }

  @media only screen and (max-width: 340px) {
    font-size: 32px;
  }
`;

const Span = styled.span`
  color: #5e075f;
`;

const Span2 = styled.span`
  font-family: "Gilroy700";
`;

const Desc = styled.p`
  margin: 0;
  max-width: 640px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #424651;
  font-family: "Gilroy500";
  margin: 0 auto;
  padding: 14px 0;

  @media only screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
`;

const MockupWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  position: relative;
`;

const MockupLazyImg = styled(LazyLoadImage)``;

const Feature1Img = styled.img`
  position: absolute;
  left: -100%;
  top: 40%;

  @media only screen and (max-width: 767px) {
    width: 200px;
    left: -60%;
  }

  @media only screen and (max-width: 599px) {
    width: 140px;
    left: -12%;
  }
`;

const Feature2Img = styled.img`
  position: absolute;
  right: -100%;
  top: 10%;

  @media only screen and (max-width: 767px) {
    width: 250px;
    right: -60%;
  }

  @media only screen and (max-width: 599px) {
    width: 140px;
    right: -20%;
    top: 25%;
  }

  @media only screen and (max-width: 325px) {
    width: 140px;
    right: -9%;
    top: 25%;
  }
`;

const Feature3Img = styled.img`
  position: absolute;
  right: -80%;
  bottom: 10%;

  @media only screen and (max-width: 767px) {
    width: 220px;
    right: -50%;
  }

  @media only screen and (max-width: 599px) {
    width: 120px;
    right: -15%;
    bottom: 25%;
  }

  @media only screen and (max-width: 325px) {
    width: 120px;
    right: -4%;
    bottom: 25%;
  }
`;

const Particle1 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #a93691;
  left: -60px;
  top: 30px;

  transition: transform 0.2s ease-in-out;

  @keyframes bobble {
    0% {
      transform: translate3d(50px, 40px, 30px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(90px, 50px, 40px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(50px, 40px, 60px);
    }
  }

  animation: bobble 20s infinite;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Particle2 = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(169, 54, 145, 0.5);
  right: 30px;
  top: 30px;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const PatternBg = styled.img`
  display: none;

  @media only screen and (max-width: 500px) {
    display: unset;
    position: absolute;
    left: 0;
    top: -15px;
  }
`;

const HeroCmp = () => {
  return (
    <ContainerDiv>
      <Wrapper>
        <Particle1></Particle1>
        <Heading>
          Chat with Ola your <Span>Spendify</Span> <Span2>Buddy</Span2>
        </Heading>
        <Desc>
          Connecting with OLA on your WhatsApp goes beyond basic financial
          tracking and budgeting.
        </Desc>
        <ActionWrapper>
          <SolidButton
            text={"Chat here"}
            type="submit"
            weighty="600"
            textFontSize="16px"
            specifyPadding="0.8rem"
            color="#F8FAFC"
            borderRadius="5px"
            backColor="#A93691"
            backgroundHoverColor="#A93691"
            textHoverColor="#fff"
            widthWebkit="178px"
            widthMoz="178px"
            widthNormal="178px"
            margin="0"
            fontFamily="Gilroy600"
          />
        </ActionWrapper>
        <MockupWrapper>
          <Particle2></Particle2>
          <PatternBg src={PatternImage} alt="Pattern" />
          <div style={{ position: "relative" }}>
            <MockupLazyImg
              src={SpendifyMockupImage}
              alt="Spendify"
              effect="blur"
            />
            <Feature1Img
              src={Feature1Image}
              alt="Personalized insights"
              className={"unanimate animate-up"}
            />
            <Feature2Img
              src={Feature2Image}
              alt="Real-time financial insights"
              className={"unanimate animate-down"}
            />
            <Feature3Img
              src={Feature3Image}
              alt="Finance coach"
              className={"unanimate animate-down"}
            />
          </div>
        </MockupWrapper>
      </Wrapper>
    </ContainerDiv>
  );
};

export default HeroCmp;
