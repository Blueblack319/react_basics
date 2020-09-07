import React, { Component } from "react";
import "./App.css";
import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "reewrw12", name: "Hoon", age: 22 },
      { id: "12fdvcxv", name: "Crazybirdz", age: 23 },
      { id: "afdf31fdz", name: "CrazyEagle", age: 24 },
      { id: "rewfd3fcz", name: "CrazyCrow", age: 25 },
    ],
    otherState: "Another state",
    showUsers: false,
  };

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  };

  handleToggleUsers = () => {
    const doesShow = this.state.showUsers;
    this.setState({ showUsers: !doesShow });
  };

  handleDeleteUser = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      border: "1px solid blue",
      borderRadius: "10px",
      padding: "10px",
      boxShadow: "0px 10px 10px -11px rgba(0, 0, 0, 0.75)",
      cursor: "pointer",
      ":hover": {
        color: "blue",
        fontWeight: "600",
      },
    };

    let persons = null;

    if (this.state.showUsers) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.handleDeleteUser.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changeName={(event) => this.handleChangeName(event, person.id)}
              />
            );
          })}
        </div>
      );
      style.backgroundColor = "#55efc4";
      style[":hover"] = {
        backgroundColor: "#81ecec",
        color: "white",
      };
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello World</h1>
          <p className={classes.join(" ")}>This is really Working!!</p>
          <button style={style} onClick={this.handleToggleUsers}>
            Show Users
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
