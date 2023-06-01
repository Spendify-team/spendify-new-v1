import React from "react";
import {Container} from "react-bootstrap";
import styled from "styled-components";
import {CheckboxCircle} from "@styled-icons/remix-line";
import SolidButton from "../Buttons/SolidButton";

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

  @media only screen and (max-width: 599px) {
    font-size: 30px;
  }
`;

const Span = styled.span`
  font-family: "Gilroy900";
`;

const Desc = styled.p`
  margin: 0;
  font-family: "Gilroy500";
  font-size: 20px;
  text-align: center;
  color: #424651;
  padding: 12px 0;

  @media only screen and (max-width: 599px) {
    font-size: 18px;
  }
`;

const PlanWrapper = styled.div`
  background-color: #f7fafc;
  border: 1.62096px solid #cbd5e1;
  border-radius: 9.50996px;
  max-width: 430px;
  width: 100%;
  padding: 1rem 0.7rem;
`;

const TopPlanSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PlanName = styled.h2`
  font-family: "Gilroy700";
  font-size: 20px;
  color: #262a36;
  margin: 0;

  @media only screen and (max-width: 599px) {
    font-size: 16px;
  }
`;

const Price = styled.h2`
  font-family: "Gilroy700";
  font-size: 16px;
  color: #262a36;
  margin: 0;
  text-align: right;

  @media only screen and (max-width: 599px) {
    font-size: 14px;
  }
`;

const PriceSpan = styled.span`
  color: #5e075f;
`;

const MonthlySpan = styled.span`
  font-family: "Gilroy500";
`;

const MiddlePlanSection = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const FeatureItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const FeatureText = styled.p`
  margin: 0;
  font-family: "Gilroy400";
  font-size: 18px;
  color: #262a36;
  text-align: left;

  @media only screen and (max-width: 599px) {
    font-size: 16px;
  }
`;

const BottomPlanSection = styled.div`
  width: 95%;
  margin: 0 auto;
`;

const PlanDisplayWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-top: 1.2rem;

  @media only screen and (max-width: 599px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SelectPlanCmp = ({bgColor}) => {
    const PlanCmp = ({planName, featureList, btnText}) => {
        return (
            <>
                <PlanWrapper>
                    <TopPlanSection>
                        <PlanName>{planName}</PlanName>
                        {planName !== "Free Plan" && (
                            <Price>
                                <PriceSpan>$5.99</PriceSpan>{" "}
                                <MonthlySpan>/month</MonthlySpan>
                                <PriceSpan> | $50</PriceSpan>{" "}
                                <MonthlySpan>/year (save 30%)</MonthlySpan>
                            </Price>
                        )}
                    </TopPlanSection>
                    <MiddlePlanSection>
                        {featureList.map((v) => {
                            return (
                                <FeatureItemWrapper>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <CheckboxCircle
                                            color={
                                                planName === "Free Plan"
                                                    ? "rgba(148, 163, 184, 0.5)"
                                                    : "#A93691"
                                            }
                                            size={18}
                                        />
                                    </div>

                                    <FeatureText>{v}</FeatureText>
                                </FeatureItemWrapper>
                            );
                        })}
                    </MiddlePlanSection>
                    <BottomPlanSection>
                        <SolidButton
                            text={btnText}
                            onClick={() => planName === "Free Plan" ? window.location.href = "https://wa.me/+16475602110" : '/'}
                            type="submit"
                            weighty="600"
                            textFontSize="16px"
                            specifyPadding="0.8rem"
                            color="#fff"
                            borderRadius="5px"
                            backColor={
                                planName === "Free Plan"
                                    ? "rgba(148, 163, 184, 0.3)"
                                    : "#A93691"
                            }
                            backgroundHoverColor={
                                planName === "Free Plan"
                                    ? "rgba(148, 163, 184, 0.3)"
                                    : "#A93691"
                            }
                            textHoverColor="#fff"
                            widthWebkit="100%"
                            widthMoz="100%"
                            widthNormal="100%"
                            margin="0"
                            fontFamily="Gilroy600"
                        />
                    </BottomPlanSection>
                </PlanWrapper>
            </>
        );
    };
    return (
        <>
            <ContainerDiv bgColor={bgColor} fluid>
                <Wrapper>
                    <Title>
                        Choose the right <Span>plan for you</Span>
                    </Title>
                    <Desc>Check out our pricing plans!</Desc>
                    <PlanDisplayWrapper>
                        <PlanCmp
                            planName={"Free Plan"}
                            featureList={[
                                "Free Spendify Mobile download",
                                "Full access to Spendify Mobile features ",
                                "Chat features-2 day free trial",
                                "AI features - 2 day free trial",
                                "Regular model update",
                            ]}
                            btnText="Your current plan"
                        />
                        <PlanCmp
                            planName={"Pro Plan"}
                            featureList={[
                                "Free Spendify Mobile download",
                                "Full access to Spendify Mobile features ",
                                "Full access to chat features",
                                "Full access to AI features",
                                "Priority model update to new features"
                            ]}
                            btnText="Upgrade to pro"
                        />
                    </PlanDisplayWrapper>
                </Wrapper>
            </ContainerDiv>
        </>
    );
};

export default SelectPlanCmp;
