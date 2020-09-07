import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alt ? "red" : "green")};
  border: 1px solid blue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 10px 10px -11px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alt ? "salmon" : "lightgreen")};
    color: white;
    font-weight: 600;
  }
`;

export default StyledButton;
