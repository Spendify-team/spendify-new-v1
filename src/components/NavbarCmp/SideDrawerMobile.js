import Dropdown from "rc-dropdown";
import React from "react";
import {useState} from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import {Close} from "@styled-icons/evil/Close";
import {ArrowDropDown} from "@styled-icons/remix-fill/ArrowDropDown";
import styled from "styled-components";
import LogoImg from "../../assets/logo.svg";
// import NigeriaSvg from "../../assets/nigeria.svg";
import DropdownCmp from "../DropdownCmp/DropdownCmp";
import SpendifyAppImg from "../../assets/spendify-app.svg";
import SpendifyAnalyticsImg from "../../assets/spendify-analytics.svg";
import {useNavigate} from "react-router-dom";
import {Link, animateScroll as scroll} from 'react-scroll';


const MenuWrapper = styled.div`
  padding: 2rem 1rem;
`;

const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img``;

const ButtonFlagHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

// const FlagImage = styled.img``;

const CloseIcon = styled(Close)``;

const GroupLink1 = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  padding-top: 2rem;
`;

const MenuLink = styled.p`
  margin: 0;
  font-family: "Gilroy600";
  font-size: 16px;
  color: #0f172a;
  cursor: pointer;
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
`;

const AboutDropdownIcon = styled.img``;

const ToggleAboutDropdownIcon = styled(ArrowDropDown)`
  transform: ${(props) => props.visible === true && "rotate(180deg)"};
`;

const SideDrawerMobile = ({isOpen, onClose}) => {
    const [aboutVisible, setAboutVisible] = useState();
    const navigate = useNavigate();
    return (
        <>
            <Drawer
                open={isOpen}
                onClose={onClose}
                direction="left"
                size={"320px"}
                zIndex={1001}
            >
                <MenuWrapper>
                    <TopSection>
                        <Logo src={LogoImg} alt="Spendify"/>
                        <ButtonFlagHolder>
                            {/* <FlagImage src={NigeriaSvg} alt="Nigeria" /> */}
                            <CloseIcon color="#1E293B" size={"20px"} onClick={onClose}/>
                        </ButtonFlagHolder>
                    </TopSection>
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
                                                alt="Spendify AI"
                                            />
                                            <span
                                                onClick={() => {
                                                    navigate("/");
                                                }}
                                            >
                                                Spendify AI
                                                </span>
                                        </AboutDropdownItem>
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
                                // bottom: "-10px",
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
                        <MenuLink
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            <Link
                                to="faq"
                                smooth={true}
                                duration={500}
                                offset={-50}
                                spy={true}
                                exact="true"
                                onClick={onClose}
                            >F.A.Q</Link></MenuLink>
                        {/* <MenuLink>Learn</MenuLink> */}
                        <MenuLink style={{color: "#A93691"}}
                                  onClick={() => window.location.href = 'https://personal.spendify.ca/'}>Sign
                            In</MenuLink>
                    </GroupLink1>
                </MenuWrapper>
            </Drawer>
        </>
    );
};

export default SideDrawerMobile;
