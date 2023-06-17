import React from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
    InstagramAlt,
    Facebook,
    Linkedin,
    Twitter,
    Tiktok,
} from "@styled-icons/boxicons-logos";
import {Link as LinkR} from "react-router-dom";
import GooglePlayImage from "../../assets/Play.svg";
import AppleStoreImage from "../../assets/Apple.svg";
import LogoImg from "../../assets/logo.svg";

const FooterContainer = styled(Container)`
  padding: 2rem 4rem 0rem;
  background: #ffffff;
  border-top: 0.5px solid #cbd5e1;

  @media only screen and (max-width: 596px) {
    padding: 2rem 3rem 0rem;
  }

  @media only screen and (max-width: 500px) {
    padding: 1rem 1rem 0rem;
  }
`;

const FooterWrapper = styled.div`
  max-width: calc(1100px + 3rem);
  margin: 0 auto;
`;

const ColDiv = styled.div`
  flex: 25%;
  max-width: 250px;

  @media only screen and (max-width: 1114px) {
    max-width: 500px;
  }

  @media only screen and (max-width: 939px) {
    max-width: 300px;
    flex: 33%;
    padding-bottom: 2rem;
  }

  @media only screen and (max-width: 625px) {
    flex: 50%;
  }

  @media only screen and (max-width: 596px) {
    flex: 100%;
    max-width: 250px;
  }

  @media only screen and (max-width: 450px) {
    max-width: 200px;
    flex: 100%;
  }
`;

const ColDivTitle = styled.h2`
  font-family: "Gilroy700";
  font-size: 16px;
  color: #a93691;
  padding-bottom: 1rem;

  @media only screen and (max-width: 420px) {
    max-width: 160px;
  }
`;

const ItemWrapper = styled.div``;

const ItemList = styled.li`
  list-style-type: none;
  padding: 0 0 1rem;
`;

const ItemLink = styled.a`
  text-decoration: none;
  color: #1d1e2c;
  cursor: pointer;
  font-family: "Gilroy400";
  font-size: 14px;
  color: #1e293b;
  opacity: 0.7;

  &:hover {
    color: #1d1e2c;
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 0 4rem;

  @media only screen and (max-width: 625px) {
    padding: 1rem 0 0rem;
  }
`;

const CopyrightFooter = styled.p`
  border-top: 0.9px solid rgba(4, 37, 82, 0.1);
  text-align: center;
  font-family: "Gilroy400";
  font-size: 12.6px;
  color: #042552;
  opacity: 0.9;
  padding: 1.5rem 0;
`;

const SocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const StoreWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 1rem;
  gap: 1px;
`;

const StoreImg = styled(LazyLoadImage)`
  margin: 0 0.3rem 0.3rem 0;
  cursor: pointer;
  width: 115px;

  @media only screen and (max-width: 577px) {
    width: 80px;
  }
`;

const IconContainer = styled.div`
  width: 27px;
  height: 27px;
  border-radius: 50%;
  border: 1px solid #5e075f;
  background-color: #5e075f;
  cursor: pointer;
  margin: 0 0.3rem 0.3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled(LazyLoadImage)``;

function FooterCmp() {
    const openLink = (link) => {
        return window.open(link, "_blank");
    };

    //   const navigate = useNavigate();
    return (
        <>
            <FooterContainer fluid>
                <FooterWrapper>
                    <FirstRow>
                        <ColDiv>
                            <LogoImage src={LogoImg} alt="Spendify" effect="blur"/>
                        </ColDiv>
                        <ColDiv>
                            <ColDivTitle>About us</ColDivTitle>
                            <ItemWrapper>
                                <ItemList>
                                    <ItemLink as={LinkR} to="/">
                                        Spendify AI
                                    </ItemLink>
                                </ItemList>
                                <ItemList>
                                    <ItemLink as={LinkR} to="/spendify-app">
                                        Spendify Mobile App
                                    </ItemLink>
                                </ItemList>
                                <ItemList>
                                    <ItemLink as={LinkR} to="/spendify-analytics">
                                        Spendify Analytics
                                    </ItemLink>
                                </ItemList>
                            </ItemWrapper>
                        </ColDiv>
                        <ColDiv>
                            <ColDivTitle>Transparency</ColDivTitle>
                            <ItemWrapper>
                                <ItemList>
                                    <ItemLink as={LinkR} to="https://spendify.ca/policies/terms">
                                        Terms and conditions
                                    </ItemLink>
                                </ItemList>
                                <ItemList>
                                    <ItemLink as={LinkR} to="https://spendify.ca/policies/privacy">
                                        Privacy
                                    </ItemLink>
                                </ItemList>
                                <ItemList>
                                    <ItemLink as={LinkR} to="mailto:info@spendify.ca">
                                        Contact us
                                    </ItemLink>
                                </ItemList>
                            </ItemWrapper>
                        </ColDiv>
                        <ColDiv>
                            <ColDivTitle>Contact us</ColDivTitle>
                            <ItemWrapper>
                                <SocialWrapper>
                                    <IconContainer
                                        onClick={() => {
                                            openLink("https://www.instagram.com/myspendify/");
                                        }}
                                    >
                                        <InstagramAlt size={18} color="#fff"/>
                                    </IconContainer>
                                    <IconContainer
                                        onClick={() => {
                                            openLink("https://www.linkedin.com/company/spendify-ng/");
                                        }}
                                    >
                                        <Linkedin size={18} color="#fff"/>
                                    </IconContainer>
                                    <IconContainer
                                        onClick={() => {
                                            openLink("#");
                                        }}
                                    >
                                        <Facebook size={18} color="#fff"/>
                                    </IconContainer>
                                    <IconContainer
                                        onClick={() => {
                                            openLink("https://twitter.com/spendify_ng");
                                        }}
                                    >
                                        <Twitter size={18} color="#fff"/>
                                    </IconContainer>
                                    <IconContainer
                                        onClick={() => {
                                            openLink("#");
                                        }}
                                    >
                                        <Tiktok size={18} color="#fff"/>
                                    </IconContainer>
                                </SocialWrapper>
                                <StoreWrapper>
                                    <StoreImg src={GooglePlayImage} alt="Playstore"
                                              onClick={() => window.location.href = 'https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite'}/>
                                    <StoreImg src={AppleStoreImage} alt="Apple store"
                                              onClick={() => window.location.href = 'https://apps.apple.com/us/app/spendify-mobile/id1629340357'}/>
                                </StoreWrapper>
                            </ItemWrapper>
                        </ColDiv>
                    </FirstRow>
                    <CopyrightFooter>
                        © 2023 Spendify Technologies All Rights Reserved.
                    </CopyrightFooter>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
}

export default FooterCmp;
