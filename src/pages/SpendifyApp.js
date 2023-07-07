import React from "react";
import FooterCmp from "../components/FooterCmp/FooterCmp";
import LeftImgCmp from "../components/LeftImgCmp/LeftImgCmp";
import NavbarCmp from "../components/NavbarCmp/NavbarCmp";
import PeriodicReportImg from "../assets/periodic-report.svg";
import AllInOneImg from "../assets/all-in-one.svg";
import SpendifyAppHeroCmp from "../components/SpendifyAppHeroCmp/SpendifyAppHeroCmp";
import UseSpendifyCmp from "../components/UseSpendifyCmp/UseSpendifyCmp";
import SimpleStepsCmp from "../components/SimpleStepsCmp/SimpleStepsCmp";
import CtaCmp2 from "../components/CtaCmp2/CtaCmp2";
import AppFeaturesCmp from "../components/AppFeaturesCmp/AppFeaturesCmp";

const SpendifyApp = () => {
    function getMobileOperatingSystem() {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return "Windows Phone";
        }

        if (/android/i.test(userAgent)) {
            return "Android";
        }

        if (/iPad|iPhone|iPod/i.test(userAgent) && !window.MSStream) {
            return "iOS";
        }

        return "unknown";
    }

    function DetectAndServe() {
        let os = getMobileOperatingSystem();
        if (os === "Android") {
            window.location.href = "https://play.google.com/store/apps/details?id=com.rscbyte.spendifylite";
        } else if (os === "iOS") {
            window.location.href = "https://apps.apple.com/us/app/spendify-mobile/id1629340357";
        } else if (os === "Windows Phone") {
            window.location.href = "https://personal.spendify.ca/";
        } else {
            window.location.href = "https://personal.spendify.ca/";
        }
    }
  return (
    <>
      <NavbarCmp />
      <SpendifyAppHeroCmp />
      <UseSpendifyCmp />
      <LeftImgCmp
          onClick={DetectAndServe}
        mobilePadding={"2rem 1rem"}
        bgColor="#ffff"
        bigTitle={
          <>
            <span style={{ fontFamily: "Gilroy700" }}>All in One!</span>
          </>
        }
        desc={
          "Comprehensive personal financial management, with all-in-one features."
        }
        imgAlt="All in one"
        imgSrc={AllInOneImg}
        btnTextColor={"#fff"}
        btnBackColor={"#A93691"}
        borderColor="transparent"
        btnText="Get Started"
        flexDirection={"row"}
      />
      <LeftImgCmp
          onClick={DetectAndServe}
        mobilePadding={"2rem 1rem"}
        bgColor="#ffff"
        bigTitle={
          <>
            <span style={{ fontFamily: "Gilroy700" }}>Periodic report</span>
          </>
        }
        desc={
          "Easily assess your personal financial health with a periodic report on various simple charts."
        }
        imgAlt="Period Report"
        imgSrc={PeriodicReportImg}
        btnTextColor={"#fff"}
        btnBackColor={"#A93691"}
        borderColor="transparent"
        btnText="Download Now!"
      />
      <SimpleStepsCmp bgColor={"rgba(255, 244, 253, 0.5)"} />
      <AppFeaturesCmp bgColor={"#fff"} />
      <CtaCmp2 />
      <FooterCmp />
    </>
  );
};

export default SpendifyApp;
