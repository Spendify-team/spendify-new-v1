import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Title = styled.h2`
  margin: 0;
  font-family: "Gilroy700";
  font-size: 60px;
  color: ${(props) => (props.textColor ? props.textColor : "#5e075f")};

  @media only screen and (max-width: 767px) {
    font-size: 40px;
  }
`;

function CounterCmp({ count, textColor, suffix, duration }) {
  return (
    <>
      <Title textColor={textColor}>
        <CountUp
          duration={duration || 2}
          end={count}
          enableScrollSpy
          scrollSpyOnce={true}
          suffix={suffix}
        />
      </Title>
    </>
  );
}

export default CounterCmp;
