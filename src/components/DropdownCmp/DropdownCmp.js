import React from "react";
import styled from "styled-components";

const DropdownWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "200px")};
  min-width: ${(props) => (props.minWidth ? props.minWidth : "200px")};
  width: 100%;
  padding: 2rem 1.5rem;
  box-shadow: 0px 3px 45px rgba(169, 54, 145, 0.05);
`;

const DropdownCmp = ({ children, maxWidth, minWidth }) => {
  return (
    <>
      <DropdownWrapper maxWidth={maxWidth} minWidth={minWidth}>
        {children}
      </DropdownWrapper>
    </>
  );
};

export default DropdownCmp;
