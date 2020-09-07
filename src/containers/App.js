import React, { Component } from "react";

import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
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
          <Persons
            persons={this.state.persons}
            clicked={this.handleDeleteUser}
            changed={this.handleChangeName}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          clicked={this.handleToggleUsers}
          showUsers={this.state.showUsers}
        />
        {persons}
      </div>
    );
  }
}

export default App;
