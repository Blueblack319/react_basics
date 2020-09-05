import React from "react";

const person = (props) => {
  return (
    <p>
      I'm {props.name} and I am {props.age} years old.
    </p>
    // But if you use props in class-based components, you should code like {this.props.name}.
  );
};

export default person;
