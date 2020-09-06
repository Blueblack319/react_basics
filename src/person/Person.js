import React from "react";

const person = (props) => {
  return (
    <div onClick={props.click}>
      <p>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
    </div>
    // But if you use props in class-based components, you should code like {this.props.name}.
  );
};

export default person;
