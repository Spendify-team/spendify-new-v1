import React from "react";
import CtaCmp from "../components/CtaCmp/CtaCmp";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import HeroCmp from "../components/HeroCmp/HeroCmp";
import LeftImgCmp from "../components/LeftImgCmp/LeftImgCmp";
import SpendifyMobileImg from "../assets/spendify-mobile-mockup.svg";
import SelectPlanCmp from "../components/SelectPlanCmp/SelectPlanCmp";
import FaqSectionCmp from "../components/FaqSectionCmp/FaqSectionCmp";
import ReviewCmp from "../components/ReviewCmp/ReviewCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import { Element } from 'react-scroll';

const Home = ({country}) => {
  return (
    <>
      <NavbarCmp />
      <HeroCmp />
      <LeftImgCmp
        bgColor="#ffff"
        smallBigTitle={"MONEY MANAGER"}
        bigTitle={
          <>
            Our Spendify{" "}
            <span style={{ fontFamily: "Gilroy600" }}>Mobile App</span>
          </>
        }
        desc={
          "Looking for the best personal finance app ? Look no further than Spendify Mobile App! With OLA your finance coach right on your WhatsApp, our app makes budget management and expense tracking a breeze."
        }
        imgAlt="Money manager"
        imgSrc={SpendifyMobileImg}
      />
      <SelectPlanCmp bgColor="#ffff" country={country} />

        <Element name="faq" className="element">
            <FaqSectionCmp bgColor="#ffff" id="faq"/>
        </Element>

      <ReviewCmp bgColor="#ffff" />
      <CtaCmp />
      <FooterCmp />
    </>
  );
};

export default Home;
