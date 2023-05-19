import React from "react";
import { Container } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import SpendifyMockupImage from "../../assets/SpendifyAppHeroImg.svg";
import GooglePlayImage from "../../assets/Play.svg";
import AppleStoreImage from "../../assets/Apple.svg";
import SpendifyWebImage from "../../assets/spendify-web.svg";

const ContainerDiv = styled(Container)`
  margin: ${(props) => props.margin && props.margin};
  padding: 5rem 3rem 2rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 768px) {
    padding: 5rem 1rem 2rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 4rem 1rem 1rem;
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

  @media only screen and (max-width: 767px) {
    font-size: 50px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 45px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 34px;
  }

  @media only screen and (max-width: 460px) {
    font-size: 30px;
  }
`;

const Span = styled.span`
  color: #5e075f;
`;

// const Span2 = styled.span`
//   font-family: "Gilroy700";
// `;

const Desc = styled.p`
  margin: 0;
  max-width: 780px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #424651;
  font-family: "Gilroy400";
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
  gap: 10px;
`;

const MockupWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  position: relative;
`;

const MockupLazyImg = styled(LazyLoadImage)`
  width: 100%;
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

const StoreImg = styled(LazyLoadImage)`
  margin: 0 0.3rem 0.3rem 0;
  cursor: pointer;
  width: 115px;

  @media only screen and (max-width: 577px) {
    width: 80px;
  }
`;

const SpendifyAppHeroCmp = () => {
  return (
    <ContainerDiv>
      <Wrapper>
        <Particle1></Particle1>
        <Heading>
          Easily budget, track expenses, and control <Span>finances</Span>
        </Heading>
        <Desc>
          We believe that the right step to effective personal finance decisions
          starts with you.
        </Desc>
        <ActionWrapper>
          <StoreImg src={AppleStoreImage} alt="Apple store" />
          <StoreImg src={GooglePlayImage} alt="Playstore" />
          <StoreImg src={SpendifyWebImage} alt="Spendify Web" />
        </ActionWrapper>
        <MockupWrapper>
          <Particle2></Particle2>
          <MockupLazyImg
            src={SpendifyMockupImage}
            alt="Spendify"
            effect="blur"
          />
        </MockupWrapper>
      </Wrapper>
    </ContainerDiv>
  );
};

export default SpendifyAppHeroCmp;
