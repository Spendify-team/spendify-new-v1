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

const Home = () => {
  return (
    <>
      <NavbarCmp />
        <Element name="faq" className="element">
            <FaqSectionCmp bgColor="#ffff" id="faq"/>
        </Element>

      <FooterCmp />
    </>
  );
};

export default Home;
