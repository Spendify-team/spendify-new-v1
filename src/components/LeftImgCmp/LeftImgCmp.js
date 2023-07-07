import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Fade} from "react-awesome-reveal";
import SolidButton from "../Buttons/SolidButton";
import {useNavigate} from "react-router-dom";

const ContainerDiv = styled(Container)`
  padding: 4rem 3rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 500px) {
    padding: ${(props) =>
            props.mobilePadding ? props.mobilePadding : "0rem 1rem"};
  }
`;

const Wrapper = styled.div`
  max-width: calc(1100px + 3rem);
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const ContentImgHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  /* gap: 60px; */
  flex-direction: ${(props) =>
          props.flexDirection ? props.flexDirection : "row-everse"};

  @media only screen and (max-width: 1220px) {
    gap: 40px;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    gap: 60px;
    justify-content: center;
  }
`;

const LeftSection = styled.div`
  max-width: 535px;
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 767px) {
    text-align: center;
    max-width: unset;
  }
`;

const SmallBigTitle = styled.h2`
  font-size: 16px;
  color: #5e075f;
  font-family: "Gilroy900";
  margin: 0;
  padding-bottom: 12px;
`;

const BigTitle = styled.h2`
  max-width: 495px;
  width: 100%;
  font-family: "Gilroy900";
  font-size: 48px;
  color: #0f172a;

  @media only screen and (max-width: 767px) {
    max-width: unset;
  }

  @media only screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 40px;
  }
`;

const Desc = styled.p`
  max-width: 500px;
  width: 100%;
  font-family: "Gilroy400";
  font-size: 20px;
  line-height: 32px;
  color: #424651;
  padding: 10px 0;

  @media only screen and (max-width: 767px) {
    max-width: unset;
    font-size: 18px;
  }
`;

const LearnMoreWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  font-weight: 700;
  color: #01525f;
  cursor: pointer;
  font-size: 17px;

  @media only screen and (max-width: 767px) {
    justify-content: center;
  }
`;

const RightImg = styled(LazyLoadImage)`
  width: 100%;
  max-width: 550px;
  @media only screen and (max-width: 1200px) {
    max-width: 600px;
  }

  @media only screen and (max-width: 767px) {
    flex-wrap: wrap;
    gap: 15px;
  }
`;

const LeftImgCmp = ({
                        bigTitle,
                        desc,
                        imgAlt,
                        imgSrc,
                        bgColor,
                        smallBigTitle,
                        btnText,
                        btnTextColor,
                        btnBackColor,
                        btnWidth,
                        borderColor,
                        flexDirection,
                        mobilePadding,
                        onClick
                    }) => {
    const navigate = useNavigate();

    return (
        <>
            <ContainerDiv bgColor={bgColor} mobilePadding={mobilePadding} fluid>
                <Wrapper>
                    <ContentImgHolder flexDirection={flexDirection}>
                        <LeftSection>
                            {smallBigTitle && <SmallBigTitle>{smallBigTitle}</SmallBigTitle>}
                            <BigTitle>{bigTitle}</BigTitle>
                            <Fade cascade direction="down" triggerOnce>
                                <Desc>{desc}</Desc>
                                <LearnMoreWrapper>
                                    <SolidButton
                                        text={btnText || "Learn more"}
                                        onClick={onClick || (() => navigate("/spendify-app"))}
                                        type="submit"
                                        weighty="700"
                                        textFontSize="16px"
                                        specifyPadding="0.8rem"
                                        color={btnTextColor || "#A93691"}
                                        borderRadius="5px"
                                        backColor={btnBackColor || "transparent"}
                                        backgroundHoverColor={btnBackColor || "transparent"}
                                        textHoverColor={btnTextColor || "#A93691"}
                                        widthWebkit={btnWidth || "178px"}
                                        widthMoz={btnWidth || "178px"}
                                        widthNormal={btnWidth || "178px"}
                                        margin="0"
                                        fontFamily="Gilroy700"
                                        borderColor={borderColor || "#A93691"}
                                        borderHoverColor={borderColor || "#A93691"}
                                    />
                                </LearnMoreWrapper>
                            </Fade>
                        </LeftSection>
                        <RightImg src={imgSrc} alt={imgAlt} effect="blur" onClick={DetectAndServe}/>
                    </ContentImgHolder>
                </Wrapper>
            </ContainerDiv>
        </>
    );
};

function getMobileOperatingSystem() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function DetectAndServe() {
    let os = getMobileOperatingSystem();
    if (os == "Android") {
        window.location.href = "https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite";
    } else if (os == "iOS") {
        window.location.href = "https://apps.apple.com/us/app/spendify-mobile/id1629340357";
    } else if (os == "Windows Phone") {
        window.location.href = "https://personal.spendify.ca/";
    } else {
        window.location.href = "https://personal.spendify.ca/";
    }
}

export default LeftImgCmp;
