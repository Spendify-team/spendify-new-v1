import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {Fade} from "react-awesome-reveal";
import GooglePlayImage from "../../assets/Play.svg";
import AppleStoreImage from "../../assets/Apple.svg";
import CtaImage from "../../assets/cta-mockup.svg";
import {LazyLoadImage} from "react-lazy-load-image-component";
import SpendifyWebImage from "../../assets/spendify-web.svg";

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
  padding: 3rem 3rem;
  background-color: #fff4fd;

  @media only screen and (max-width: 500px) {
    padding: 1.5rem 1rem;
  }
`;

const ContentHolder = styled.div`
  max-width: 600px;
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 1070px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 996px) {
    max-width: 450px;
  }

  @media only screen and (max-width: 860px) {
    text-align: center;
    margin: 0 auto;
    max-width: 600px;
  }
`;

const CtaTitle = styled.h2`
  font-family: "Gilroy700";
  font-size: 43.185px;
  color: #0f172a;
  margin: 0;

  @media only screen and (max-width: 1070px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 580px) {
    font-size: 28px;
  }
`;

const Span = styled.span`
  color: rgba(94, 7, 95, 1);
`;

const Desc = styled.p`
  padding: 1rem 0;
  font-family: "Gilroy500";
  font-size: 16px;
  color: #424651;
  opacity: 0.7;
`;

const StoreWrapper = styled.div`
  display: flex;
  gap: 5px;

  @media only screen and (max-width: 860px) {
    justify-content: center;
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

const CtaImg = styled.img`
  max-width: 350px;
  position: absolute;
  bottom: 0;
  right: 50px;

  @media only screen and (max-width: 1065px) {
    max-width: 300px;
  }

  @media only screen and (max-width: 860px) {
    display: none;
  }
`;

const CtaCmp2 = ({containerMargin}) => {
    return (
        <>
            <CtaContainer fluid containerMargin={containerMargin}>
                <CtaWrapper>
                    <ContentHolder>
                        <Fade cascade direction="up" triggerOnce>
                            <CtaTitle>
                                Experience a user-friendly, secure, and personal{" "}
                                <Span>finance solution.</Span>
                            </CtaTitle>
                        </Fade>
                        <Desc>
                            Our app offers a budget manager to handle your daily transactions
                        </Desc>
                        <StoreWrapper>
                            <StoreImg src={GooglePlayImage} alt="Playstore"
                                      onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite'}/>
                            <StoreImg src={AppleStoreImage} alt="Apple store"
                                      onClick={() => window.location.href = 'https://apps.apple.com/us/app/spendify-mobile/id1629340357'}/>
                            <StoreImg src={SpendifyWebImage} alt="Spendify Web" onClick={() => window.location.href = 'https://personal.spendify.ca'}/>
                        </StoreWrapper>
                    </ContentHolder>
                    <CtaImg src={CtaImage} alt="CTA"/>
                </CtaWrapper>
            </CtaContainer>
        </>
    );
};

export default CtaCmp2;
