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

    return (
        <>
            <NavbarCmp/>
            <SpendifyAppHeroCmp/>
            <UseSpendifyCmp/>
            <LeftImgCmp
                onClick={() => window.location.href = 'https://link-to.app/WPHJlfutpT'}
                mobilePadding={"2rem 1rem"}
                bgColor="#ffff"
                bigTitle={
                    <>
                        <span style={{fontFamily: "Gilroy700"}}>All in One!</span>
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
                onClick={() => window.location.href = 'https://link-to.app/WPHJlfutpT'}
                mobilePadding={"2rem 1rem"}
                bgColor="#ffff"
                bigTitle={
                    <>
                        <span style={{fontFamily: "Gilroy700"}}>Periodic report</span>
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
            <SimpleStepsCmp bgColor={"rgba(255, 244, 253, 0.5)"}/>
            <AppFeaturesCmp bgColor={"#fff"}/>
            <CtaCmp2/>
            <FooterCmp/>
        </>
    );
};

export default SpendifyApp;
