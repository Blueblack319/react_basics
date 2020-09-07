import React, { Component } from "react";
import "./App.css";
import StyledButton from "./Buttons/StyledButton";
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
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p className={classes.join(" ")}>This is really Working!!</p>
        <StyledButton
          onClick={this.handleToggleUsers}
          alt={this.state.showUsers}
        >
          Show Users
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default App;
