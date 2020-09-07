import React, { Component } from "react";
import personClasses from "./Person.module.css";

// import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <div className={personClasses.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changeName}
          value={this.props.name}
        />
      </div>
      // But if you use props in class-based components, you should code like {this.props.name}.
    );
  }
}

export default Person;
