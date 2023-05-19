import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ContainerDiv = styled(Container)`
  padding: 4rem 3rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 500px) {
    padding: 4rem 1rem 2rem;
  }
`;

const Wrapper = styled.div`
  max-width: calc(1100px + 3rem);
  width: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-family: "Gilroy600";
  font-size: 48px;
  color: #0f172a;
  font-family: "Gilroy700";

  @media only screen and (max-width: 599px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  margin: 0;
  font-family: "Gilroy400";
  font-size: 20px;
  text-align: center;
  color: #424651;
  padding: 12px 0;

  @media only screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const StepCardWrapper = styled.div`
  /* max-width: 300px;
  width: 100%; */
  flex-basis: 24%;
  width: 24%;
  height: 258px;
  padding: 2rem 1.5rem;
  background-color: #fff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
  text-align: left;
  border-radius: 7.87049px;

  @media only screen and (max-width: 1050px) {
    flex-basis: 45%;
    width: 45%;
  }

  @media only screen and (max-width: 590px) {
    flex-basis: 100%;
    width: 100%;
  }
`;

const Box = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 11.8057px;
  background-color: ${(props) =>
    props.boxBgColor ? props.boxBgColor : "#fff"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextInBox = styled.h2`
  margin: 0;
  font-family: "Gilroy700";
  font-size: 20px;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
`;

const CardTitle = styled.h2`
  font-family: "Gilroy700";
  font-size: 18.8892px;
  color: #0f172a;
  padding: 18px 0 14px;
  margin: 0;
`;

const CardDesc = styled.p`
  font-family: "Gilroy400";
  font-size: 15px;
  color: #0f172a;
`;

const CardWrapper = styled.div`
  padding-top: 2rem;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;

  @media only screen and (max-width: 1050px) {
    justify-content: center;
    gap: 20px;
  }
`;

const SimpleStepsCmp = ({ bgColor }) => {
  const StepCard = ({ textInBox, textColor, boxBgColor, smallTitle, desc }) => {
    return (
      <>
        <StepCardWrapper>
          <Box boxBgColor={boxBgColor}>
            <TextInBox textColor={textColor}>{textInBox}</TextInBox>
          </Box>
          <CardTitle>{smallTitle}</CardTitle>
          <CardDesc>{desc}</CardDesc>
        </StepCardWrapper>
      </>
    );
  };
  return (
    <>
      <ContainerDiv bgColor={bgColor} fluid>
        <Wrapper>
          <Title>Simple steps to use Spendify</Title>
          <Desc>Sign Up Free for Your Best Money Manager Solution!</Desc>

          <CardWrapper>
            {[
              {
                textInBox: 1,
                textColor: "#5E075F",
                boxBgColor: "rgba(169, 54, 145, 0.1)",
                smallTitle: "Get app",
                desc: "Download Spendify Mobile App from the app store or play store, or signup via our web app.",
              },
              {
                textInBox: 2,
                textColor: "#42D77E",
                boxBgColor: "rgba(66, 215, 126, 0.1)",
                smallTitle: "Get started",
                desc: "Create a free Spendify  account on mobile or the web. To get started.",
              },
              {
                textInBox: 3,
                textColor: "#0F172",
                boxBgColor: "rgba(15, 23, 42, 0.1)",
                smallTitle: "Chat with OLA",
                desc: "Connect with OLA for easy  financial management and chat on WhatsApp.",
              },
              {
                textInBox: 4,
                textColor: "#5E075F",
                boxBgColor: "rgba(169, 54, 145, 0.1)",
                smallTitle: "Friendly features",
                desc: "Use our amazing  features to budget and be a money manager.",
              },
            ].map((v, i) => {
              return (
                <StepCard
                  key={i}
                  textInBox={v.textInBox}
                  textColor={v.textColor}
                  boxBgColor={v.boxBgColor}
                  smallTitle={v.smallTitle}
                  desc={v.desc}
                />
              );
            })}
          </CardWrapper>
        </Wrapper>
      </ContainerDiv>
    </>
  );
};

export default SimpleStepsCmp;
