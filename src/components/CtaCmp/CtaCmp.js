import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import CtaSvg from "../../assets/cta-svg.svg";
import {Fade, Zoom} from "react-awesome-reveal";
import SolidButton from "../../components/Buttons/SolidButton";
import Particle1 from "../../assets/particle-1.svg";
import Particle2 from "../../assets/particle-2.svg";

const CtaContainer = styled(Container)`
  padding: 2rem 2rem 5rem;
  background-color: #fff;
  margin: ${(props) => props.containerMargin && props.containerMargin};

  @media only screen and (max-width: 500px) {
    padding: 4rem 1rem 3rem;
  }
`;

const CtaWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: 800px; */
  max-width: calc(1100px + 3rem);
  margin: 0 auto;
  border-radius: 24px;
  padding: 6rem 1.5rem;
  background: url(${CtaSvg}), #fff4fd no-repeat;
  background-size: cover;

  @media only screen and (max-width: 500px) {
    padding: 3rem 1rem;
  }
`;

const ContentHolder = styled.div`
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-family: "Gilroy900";
  font-size: 43.185px;
  text-align: center;
  color: #0f172a;

  @media only screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

const ActionWrapper = styled.div`
  display: flex;
  padding-top: 2rem;
  justify-content: center;

  @media only screen and (max-width: 500px) {
    padding-top: 1rem;
  }
`;

const Particle1Img = styled.img`
  position: absolute;
  right: 80px;
  top: 10px;

  transition: transform 2s ease-in-out;

  @keyframes bobble1 {
    0% {
      transform: translate3d(50px, 40px, 30px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(40px, 50px, 40px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(50px, 40px, 20px);
    }
  }

  animation: bobble1 2s infinite;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Particle2Img = styled.img`
  position: absolute;
  left: 30px;
  bottom: 80px;
  transition: transform 0.2s ease-in-out;

  @keyframes bobble2 {
    0% {
      transform: translate3d(50px, 40px, 30px);
      animation-timing-function: ease-in;
    }
    50% {
      transform: translate3d(40px, 50px, 40px);
      animation-timing-function: ease-out;
    }
    100% {
      transform: translate3d(50px, 40px, 60px);
    }
  }

  animation: bobble2 2s infinite;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const CtaCmp = ({containerMargin, ctaText, btnText}) => {
    return (
        <>
            <CtaContainer fluid containerMargin={containerMargin}>
                <CtaWrapper>
                    <ContentHolder>
                        <Fade cascade direction="up" triggerOnce>
                            <CtaTitle>{ctaText || "We’re Trusted by thousands."}</CtaTitle>
                        </Fade>
                        <Zoom triggerOnce={true}>
                            <ActionWrapper>
                                <SolidButton
                                    onClick={() => window.location.href = "https://wa.me/+16475602110"}
                                    text={btnText || "Chat here"}
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
                        </Zoom>
                        <Particle1Img src={Particle1} alt="Particle1"/>
                        <Particle2Img src={Particle2} alt="Particle2"/>
                    </ContentHolder>
                </CtaWrapper>
            </CtaContainer>
        </>
    );
};

export default CtaCmp;
