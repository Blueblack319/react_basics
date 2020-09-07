import React from "react";
import personClasses from "./Person.module.css";

// import "./Person.css";

const person = (props) => {
  console.log("[App.js] rendering...");
  return (
    <div className={personClasses.Person}>
      <p onClick={props.click}>
        I'm {props.name} and I am {props.age} years old.
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeName} value={props.name} />
    </div>
    // But if you use props in class-based components, you should code like {this.props.name}.
  );
};

export default person;
