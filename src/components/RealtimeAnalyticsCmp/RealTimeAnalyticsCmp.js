import { ShieldCheckmark } from "@styled-icons/ionicons-outline";
import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const ContainerDiv = styled(Container)`
  padding: 3rem 3rem 2rem;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};

  @media only screen and (max-width: 500px) {
    padding: 3rem 1rem 1rem;
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
  font-size: 40px;
  color: #0f172a;
  font-family: "Gilroy700";

  @media only screen and (max-width: 599px) {
    font-size: 30px;
  }
`;

const Desc = styled.p`
  margin: 0 auto;
  font-family: "Gilroy400";
  font-size: 20px;
  text-align: center;
  color: #424651;
  padding: 12px 0;
  max-width: 640px;

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
  text-align: center;
  border: 1px solid rgba(196, 215, 233, 0.7);
  border-radius: 7px;

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
  margin: 0 auto;
`;

const TextInBox = styled.h2`
  margin: 0;
  font-family: "Gilroy700";
  font-size: 20px;
  color: ${(props) => (props.textColor ? props.textColor : "#fff")};
`;

const CardTitle = styled.h2`
  font-family: "Gilroy700";
  font-size: 17px;
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
  align-items: center;

  @media only screen and (max-width: 1050px) {
    justify-content: center;
    gap: 20px;
  }
`;

const Separator = styled.div`
  background: #5e075f;
  border-radius: 5px;
  width: 4px;
  height: 80px;
  rotate: 90deg;

  @media only screen and (max-width: 1050px) {
    display: none;
  }

  @media only screen and (max-width: 590px) {
    display: unset;
    rotate: 0deg;
  }
`;

const RealTimeAnalyticsCmp = ({ bgColor }) => {
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
    <ContainerDiv bgColor={bgColor} fluid>
      <Wrapper>
        <Title>Real-Time Analytics</Title>
        <Desc>
          For precise and concise expense analytics of people in different
          geographical location
        </Desc>

        <CardWrapper>
          {[
            {
              textInBox: <ShieldCheckmark color="#A93691" size={22} />,
              textColor: "#5E075F",
              boxBgColor: "rgba(169, 54, 145, 0.1)",
              smallTitle: "User-friendly Data Analytics Platform",
              desc: "Simplicity for seamless business decision-making process.",
            },
            {
              textInBox: <ShieldCheckmark color="#A93691" size={22} />,
              textColor: "#5E075F",
              boxBgColor: "rgba(169, 54, 145, 0.1)",
              smallTitle: "Competitive Advantage in the Marketplace",
              desc: "Insightful data analysis enhances business performance.",
            },
            {
              textInBox: <ShieldCheckmark color="#A93691" size={22} />,
              textColor: "#5E075F",
              boxBgColor: "rgba(169, 54, 145, 0.1)",
              smallTitle: "Real-Time Analysis of Personal Financial Data ",
              desc: "Identifying patterns for formal and informed financial decisions.",
            },
          ].map((v, i) => {
            return (
              <>
                <StepCard
                  key={i}
                  textInBox={v.textInBox}
                  textColor={v.textColor}
                  boxBgColor={v.boxBgColor}
                  smallTitle={v.smallTitle}
                  desc={v.desc}
                />
                {i !== 2 && <Separator />}
              </>
            );
          })}
        </CardWrapper>
      </Wrapper>
    </ContainerDiv>
  );
};

export default RealTimeAnalyticsCmp;
