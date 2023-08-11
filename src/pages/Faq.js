import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import FaqSectionCmp from "../components/FaqSectionCmp/FaqSectionCmp";
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
