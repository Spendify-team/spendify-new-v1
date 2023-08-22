import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import { Element } from 'react-scroll';
import FaqOlaSectionCmp from "../components/FaqOlaSectionCmp/FaqOlaSectionCmp";

const Home = () => {
  return (
    <>
      <NavbarCmp />
        <Element name="faq" className="element">
            <FaqOlaSectionCmp bgColor="#ffff" id="faq"/>
        </Element>

      <FooterCmp />
    </>
  );
};

export default Home;
