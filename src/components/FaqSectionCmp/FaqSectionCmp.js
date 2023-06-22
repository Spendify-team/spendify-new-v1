import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CounterCmp from "../CounterCmp/CounterCmp";
import LineCmp from "../LineCmp/LineCmp";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

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

const ContentHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 649px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
  }
`;

const Left = styled.div`
  max-width: 520px;
  width: 100%;
  text-align: left;

  @media only screen and (max-width: 649px) {
    text-align: center;
  }
`;

const FaqTitle = styled.h2`
  font-family: "Gilroy900";
  font-size: 40px;
  color: #0f172a;
  margin: 0;

  @media only screen and (max-width: 767px) {
    font-size: 28px;
  }
`;

const FaqDesc = styled.p`
  margin: 0;
  padding: 15px 0;
  font-family: "Gilroy500";
  font-size: 16px;
  opacity: 0.7;
`;

const CountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 367px;
  width: 100%;

  @media only screen and (max-width: 767px) {
    max-width: 250px;
  }

  @media only screen and (max-width: 649px) {
    margin: 0 auto;
    max-width: 300px;
  }
`;

const EachCounterWraper = styled.div``;

const SmallCounterText = styled.p`
  margin: 0;
  font-family: "Gilroy600";
  font-size: 14px;
  color: #0f172a;
  opacity: 0.8;
`;

const Right = styled.div`
  max-width: 550px;
  width: 100%;

  &.right-wrapper .spendify-accordion .accordion__item {
    background-color: #fff;
    padding: 1rem;
    /* box-shadow: 0px 4px 60px rgba(15, 23, 42, 0.06);
    border-radius: 10px; */

    @media only screen and (max-width: 649px) {
      max-width: 370px;
      width: 100%;
      margin: 0 auto;
    }
  }

  &.right-wrapper .spendify-accordion .accordion__item:not(:has([hidden])) {
    box-shadow: 0px 4px 60px rgba(15, 23, 42, 0.06);
    border-radius: 10px;
  }

  &.right-wrapper
    .spendify-accordion
    .accordion__item
    .accordion__heading
    .accordion__button {
    font-family: "Gilroy700";
    font-size: 18px;
    color: #0f172a;
    text-align: left;
  }

  &.right-wrapper .spendify-accordion .accordion__item .accordion__panel {
    font-family: "Gilroy400";
    font-size: 14px;
    color: #0f172a;
    opacity: 0.7;
    margin-top: 1rem;
    text-align: left;
  }
`;

const FaqSectionCmp = ({ bgColor }) => {
  return (
    <>
      <ContainerDiv bgColor={bgColor} fluid>
        <Wrapper>
          <ContentHolder>
            <Left>
              <FaqTitle>Frequently asked questions</FaqTitle>
              <FaqDesc>Most Asked Question about Spendify.</FaqDesc>
              <CountWrapper>
                <EachCounterWraper>
                  <CounterCmp
                    suffix="K+"
                    textColor={"#5E075F"}
                    count={8}
                    duration={8}
                  />
                  <SmallCounterText>Trusted Users</SmallCounterText>
                </EachCounterWraper>
                <LineCmp color="#042552" width="50px" rotation="90deg" />
                <EachCounterWraper>
                  <CounterCmp
                    suffix="+"
                    textColor={"#FF1181"}
                    count={100}
                    duration={6}
                  />
                  <SmallCounterText>5 Star Ratings</SmallCounterText>
                </EachCounterWraper>
              </CountWrapper>
            </Left>
            <Right className="right-wrapper">
              <Accordion
                className="spendify-accordion"
                preExpanded={[0]}
                // onChange={(uuid) => {
                //   setUuid(uuid[0]);
                // }}
              >
                {[
                  {
                    question: "Why do I need Spendify Mobile App?",
                    answer:
                      "Our finance management app focuses on guiding you to make better use of your money. It analyses users’ financial situation based on available personal financial transactions information that you stored manually, automatically through our AI (OLA)  integrated on your WhatsApp mobile phone. We provide AI-based options for you to make simple and effective financial decisions.",
                  },
                  {
                    question: "How do I start using OLA?",
                    answer:
                      "To begin using the OLA, all you need to do is open the chat interface and start typing your questions. The chatbot will provide you with relevant information and suggestions.",
                  },
                  {
                    question:
                      "How easily can I recover my lost information or data?",
                    answer:
                      "To access your information and continue using Spendify, simply log in with your details on the Spendify web version.",
                  },
                ].map((v, i) => {
                  return (
                    <AccordionItem uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Q. {v.question}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>{v.answer}</p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Right>
          </ContentHolder>
        </Wrapper>
      </ContainerDiv>
    </>
  );
};

export default FaqSectionCmp;
