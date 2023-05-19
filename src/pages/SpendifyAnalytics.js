import React from "react";
import CtaCmp from "../components/CtaCmp/CtaCmp";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import LeftImgCmp from "../components/LeftImgCmp/LeftImgCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import SpendifyAnalyticsHeroCmp from "../components/SpendifyAnalyticsHeroCmp/SpendifyAnalyticsHeroCmp";
import InsightImg from "../assets/insight.svg";
import styled from "styled-components";
import VerticalLineImg from "../assets/vertical-arrow.svg";
import RealTimeAnalyticsCmp from "../components/RealtimeAnalyticsCmp/RealTimeAnalyticsCmp";

const VerticalArrowImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 26px;
  height: 174px;
`;

const SpendifyAnalytics = () => {
  return (
    <>
      <NavbarCmp />
      <SpendifyAnalyticsHeroCmp />
      <VerticalArrowImg
        className="unanimate animate-down"
        src={VerticalLineImg}
        alt="arrow"
      />
      <RealTimeAnalyticsCmp />
      <LeftImgCmp
        mobilePadding={"2rem 1rem"}
        bgColor="#ffff"
        bigTitle={
          <>
            <span style={{ fontFamily: "Gilroy700" }}>
              Insights for Business Success
            </span>
          </>
        }
        desc={
          "Our commitment is to provide a good data infrastructure and insights to businesses, enabling them to outperform competitors in today's changing marketplace."
        }
        imgAlt="All in one"
        imgSrc={InsightImg}
        btnTextColor={"#fff"}
        btnBackColor={"#A93691"}
        borderColor="transparent"
        btnText="Login"
        flexDirection={"row"}
      />
      <CtaCmp btnText="Subscribe" ctaText={"We’re Trusted by Our Partners"} />
      <FooterCmp />
    </>
  );
};

export default SpendifyAnalytics;
