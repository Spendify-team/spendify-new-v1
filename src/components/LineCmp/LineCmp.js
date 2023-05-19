import styled from "styled-components";

const Line = styled.hr`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: 1px;
  color: ${(props) => (props.color ? props.color : "#5e075f")};
  border-top: ${(props) =>
    props.color ? `1px solid ${props.color}` : "1px solid #5e075f"};
  rotate: ${(props) => (props.rotation ? props.rotation : "0deg")};
`;

const LineCmp = ({ color, width, rotation }) => {
  return <Line color={color} width={width} rotation={rotation} />;
};

export default LineCmp;
