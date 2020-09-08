import React, { Component, Fragment } from "react";

import classes from "./App.module.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
    // this.state = {
    //   persons: [
    //     { id: "reewrw12", name: "Hoon", age: 22 },
    //     { id: "12fdvcxv", name: "Crazybirdz", age: 23 },
    //     { id: "afdf31fdz", name: "CrazyEagle", age: 24 },
    //     { id: "rewfd3fcz", name: "CrazyCrow", age: 25 },
    //   ],
    //   otherState: "Another state",
    //   showUsers: false,
    // };
  }
  state = {
    persons: [
      { id: "reewrw12", name: "Hoon", age: 22 },
      { id: "12fdvcxv", name: "Crazybirdz", age: 23 },
      { id: "afdf31fdz", name: "CrazyEagle", age: 24 },
      { id: "rewfd3fcz", name: "CrazyCrow", age: 25 },
    ],
    otherState: "Another state",
    showUsers: false,
    showCockpit: true,
    changeCounter: 0,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  handleChangeName = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return { persons, changeCounter: prevState.changeCounter + 1 };
    });
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
    console.log("[App.js] render");
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
      <Fragment>
        <button onClick={() => this.setState({ showCockpit: false })}>
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            personsLength={this.state.persons.length}
            clicked={this.handleToggleUsers}
            showUsers={this.state.showUsers}
          />
        ) : null}
        {persons}
      </Fragment>
    );
  }
}

export default withClass(App, classes.App);
