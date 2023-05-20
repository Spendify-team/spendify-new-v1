import React, {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
import SpendifyAppImg from "../../assets/spendify-app.svg";
import SpendifyAnalyticsImg from "../../assets/spendify-analytics.svg";
import SolidButton from "../Buttons/SolidButton";
// import NigeriaSvg from "../../assets/nigeria.svg";
import SideDrawerMobile from "./SideDrawerMobile";
import {Menu} from "@styled-icons/evaicons-solid/Menu";
import {ArrowDropDown} from "@styled-icons/remix-fill/ArrowDropDown";
import Dropdown from "rc-dropdown";
import DropdownCmp from "../DropdownCmp/DropdownCmp";
import "rc-dropdown/assets/index.css";
import {useNavigate} from "react-router-dom";

const NavbarContainer = styled.div`
  background: #fff;
  height: 80px;
  /* margin-top: -80px; */
  display: flex;
  align-items: center;
  padding: 0 3rem;
  border-bottom: 1px solid #e2e8f0;

  /* position: relative; */
  position: sticky;
  top: 0;
  z-index: 10;
  transition: 0.8s all ease;

  @media only screen and (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const NavbarWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(1100px + 3rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media only screen and (max-width: 500px) {
    max-width: calc(1000px + 1rem);
  }
`;

const LogoAndMenuHolder = styled.div`
  display: flex;
  gap: 70px;
  align-items: center;
`;

const Logo = styled(LazyLoadImage)`
  cursor: pointer;
`;

const GroupLink1 = styled.div`
  display: flex;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuLink = styled.p`
  margin: 0;
  font-family: "Gilroy600";
  font-size: 16px;
  color: #0f172a;
  cursor: pointer;

  &:hover {
    color: rgb(169, 54, 145);
  }
`;

const MenuAndButtonHolder = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const ButtonFlagHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media only screen and (max-width: 768px) {
    gap: 15px;
  }
`;

// const FlagImage = styled.img`
//   @media only screen and (max-width: 920px) {
//     display: none;
//   }

//   @media only screen and (max-width: 768px) {
//     display: unset;
//   }
// `;

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 880px) {
    display: none;
  }
`;

const HamburgerMenu = styled(Menu)`
  display: none;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    display: unset;
  }
`;

const AboutDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const AboutDropdownItem = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: rgb(169, 54, 145);
  }
`;

const AboutDropdownIcon = styled.img``;

const ToggleAboutDropdownIcon = styled(ArrowDropDown)`
  transform: ${(props) => props.visible === true && "rotate(180deg)"};

  ${MenuLink}:hover & {
    color: rgb(169, 54, 145);
  }
`;

const NavbarCmp = () => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const navigate = useNavigate();

    const [aboutVisible, setAboutVisible] = useState();

    return (
        <>
            <NavbarContainer>
                <NavbarWrapper>
                    <LogoAndMenuHolder>
                        <Logo
                            src={LogoImg}
                            alt="Spendify"
                            onClick={() => {
                                navigate("/");
                            }}
                        />
                        <GroupLink1>
                            <MenuLink
                                onClick={() => {
                                    navigate("/");
                                }}
                            >
                                Home
                            </MenuLink>
                            <Dropdown
                                trigger={["click"]}
                                overlay={
                                    <DropdownCmp maxWidth={"239px"} minWidth="220px">
                                        <AboutDropdownWrapper>
                                            <AboutDropdownItem>
                                                <AboutDropdownIcon
                                                    src={SpendifyAppImg}
                                                    alt="Spendify App"
                                                />
                                                <span
                                                    onClick={() => {
                                                        navigate("/spendify-app");
                                                    }}
                                                >
                          Spendify App
                        </span>
                                            </AboutDropdownItem>
                                            <AboutDropdownItem>
                                                <AboutDropdownIcon
                                                    src={SpendifyAnalyticsImg}
                                                    alt="Spendify Analytics"
                                                />
                                                <span
                                                    onClick={() => {
                                                        navigate("/spendify-analytics");
                                                    }}
                                                >
                          Spendify Analytics
                        </span>
                                            </AboutDropdownItem>
                                        </AboutDropdownWrapper>
                                    </DropdownCmp>
                                }
                                animation="slide-up"
                                overlayStyle={{
                                    fontFamily: "Gilroy600",
                                    fontSize: "16px",
                                    zIndex: "2000",
                                    width: "fit-content",
                                    // top: "75px",
                                }}
                                onVisibleChange={(visible) => {
                                    setAboutVisible(visible);
                                }}
                            >
                                <MenuLink>
                                    About us{" "}
                                    <span>
                    <ToggleAboutDropdownIcon
                        size={30}
                        color="#0F172A"
                        visible={aboutVisible}
                    />
                  </span>
                                </MenuLink>
                            </Dropdown>
                            <MenuLink>F.A.Q</MenuLink>
                        </GroupLink1>
                    </LogoAndMenuHolder>
                    <MenuAndButtonHolder>
                        <GroupLink1>
                            {/* <MenuLink>Learn</MenuLink> */}
                            <MenuLink style={{color: "#A93691"}}
                                      onClick={() => window.location.href = 'https://personal.spendify.ca/'}>Sign
                                In</MenuLink>
                        </GroupLink1>
                        <ButtonFlagHolder>
                            <ButtonWrapper>
                                <SolidButton
                                    onClick={() => {
                                        window.location.href = 'https://onelink.to/mzbpwd'
                                    }}
                                    text={"Download"}
                                    type="submit"
                                    weighty="600"
                                    textFontSize="16px"
                                    specifyPadding="1rem"
                                    color="#A93691"
                                    borderRadius="5px"
                                    backColor="rgba(169, 54, 145, 0.15)"
                                    backgroundHoverColor="rgba(169, 54, 145, 0.15)"
                                    textHoverColor="#A93691"
                                    widthWebkit="165px"
                                    widthMoz="165px"
                                    widthNormal="165px"
                                    fontFamily="Gilroy600"
                                />
                            </ButtonWrapper>
                            {/* <FlagImage src={NigeriaSvg} alt="Nigeria" /> */}
                            <HamburgerMenu
                                color="#1D1E2C"
                                size={"20px"}
                                onClick={() => {
                                    setOpenMobileMenu(true);
                                }}
                            />
                        </ButtonFlagHolder>
                    </MenuAndButtonHolder>
                </NavbarWrapper>
            </NavbarContainer>
            <SideDrawerMobile
                isOpen={openMobileMenu}
                onClose={() => {
                    setOpenMobileMenu(false);
                }}
            />
        </>
    );
};

export default NavbarCmp;
