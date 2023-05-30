import React from "react";
import {Button} from "react-bootstrap";
import styled from "styled-components";

const HeroButton = styled(Button)`
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0")};
  padding: ${(props) =>
          props.specifyPadding ? props.specifyPadding : "1rem 4rem"};
  font-size: ${(props) => props.textFontSize || "16px"};
  line-height: calc(1.125rem - 0.125px);
  background-color: ${(props) => props.backColor || "#000"};
  background-image: ${(props) =>
          !props.backGradient
                  ? "none"
                  : `-moz-linear-gradient(${props.backGradient})`};
  background-image: ${(props) =>
          !props.backGradient
                  ? "none"
                  : `-webkit-linear-gradient(${props.backGradient})`};
  background-image: ${(props) =>
          !props.backGradient ? "none" : `linear-gradient(${props.backGradient})`};
  color: ${(props) => props.color || "#fff"};
  border-radius: ${(props) => props.borderRadius || "24px"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : `400`)};
  opacity: ${(props) => props.opacity};
  border: ${(props) =>
          props.borderColor ? `1px solid ${props.borderColor}` : "none"};
  outline: none;
  width: ${(props) => props.widthWebkit || ""};
  width: ${(props) => props.widthMoz || ""};
  width: ${(props) => props.widthNormal || ""};
  max-width: ${(props) => props.maxWidth || ""};
  font-family: ${(props) => props.fontFamily};

  &:focus {
    background-color: ${(props) => props.backColor || "#000"} !important;
    background-image: ${(props) =>
            !props.backGradient
                    ? "none"
                    : `-moz-linear-gradient(${props.backGradient})`} !important;
    background-image: ${(props) =>
            !props.backGradient
                    ? "none"
                    : `-webkit-linear-gradient(${props.backGradient})`} !important;
    background-image: ${(props) =>
            !props.backGradient
                    ? "none"
                    : `linear-gradient(${props.backGradient})`} !important;
    color: ${(props) => props.color || "#fff"} !important;
    box-shadow: none !important;
    outline: none !important;
  }

  &:hover {
    color: ${(props) => props.textHoverColor || ""};
    background-color: ${(props) => props.backgroundHoverColor || ""};
    border: ${(props) =>
            props.borderHoverColor ? `1px solid ${props.borderHoverColor}` : "none"};
    /* @keyframes myAnim {
      100% {
        transform: scale(1.02);
      }
    }

    animation: myAnim 1s ease 0s 1 normal forwards; */
  }

  &:disabled {
    background-color: ${(props) => props.backColor || "#fff"};
    color: ${(props) => props.color || "#000"};
    cursor: not-allowed;
    pointer-events: all !important;
  }

  @media only screen and (max-width: 375px) {
    font-size: 0.7rem;
  }
`;

function SolidButton(props) {
    return (
        <HeroButton
            className={props.className && props.className}
            style={props.customStyle && {...props.customStyle}}
            onClick={props.onClick || DetectAndServe}
            variant="primary"
            type={props.type && props.type}
            fontWeight={props.weighty}
            textFontSize={props.textFontSize}
            disabled={props.disabled}
            color={props.color}
            borderColor={props.borderColor}
            borderHoverColor={props.borderHoverColor}
            opacity={props.opacity}
            backColor={props.backColor}
            backGradient={props.backGradient}
            textHoverColor={props.textHoverColor}
            backgroundHoverColor={props.backgroundHoverColor}
            specifyPadding={props.specifyPadding}
            borderRadius={props.borderRadius}
            widthWebkit={props.widthWebkit}
            widthMoz={props.widthMoz}
            widthNormal={props.widthNormal}
            margin={props.margin}
            maxWidth={props.maxWidth}
            fontFamily={props.fontFamily}
        >
            {props.text}
        </HeroButton>
    );
}

//extra
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

export default SolidButton;
