import React, { Component } from "react";
import classes from "./Person.module.css";
import Aux from "../../../hoc/Aux";

// import "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old.
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changeName}
          value={this.props.name}
        />
      </Aux>
    );
    // return[
    //   <p onClick={this.props.click}>
    //       I'm {this.props.name} and I am {this.props.age} years old.
    //     </p>,
    //     <p>{this.props.children}</p>,
    //     <input
    //       type="text"
    //       onChange={this.props.changeName}
    //       value={this.props.name}
    //     />
    // ]
  }
}

export default Person;
