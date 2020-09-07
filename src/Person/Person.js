import React from "react";
import styled from "styled-components";

// import "./Person.css";

const person = (props) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    padding: 10px 0px;
    border: 1px solid #eee;
    box-shadow: 0px 10px 20px -11px rgba(0, 0, 0, 0.75);

    @media (min-width: 700px) {
      width: 650px;
    }
  `;

  return (
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </StyledDiv>
    // But if you use props in class-based components, you should code like {this.props.name}.
  );
};

export default person;
