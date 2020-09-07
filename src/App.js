import React, { Component } from "react";
import "./App.css";
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
    this.setState({ showUsers: !doesShow }); // setState is not replace all states but Update certain state!!
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
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ["red"]
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ["red", "bold"]
      console.log(classes.join(" "));
    }

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p className={classes.join(" ")}>This is really Working!!</p>
        <button style={style} onClick={this.handleToggleUsers}>
          Show Users
        </button>
        {persons}
      </div>
      // <h1>Me too</h1>  => Don't do that because React should use one root elements
    );
  }
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi! I'm in App")
  // );
}

export default App;

// handleClicked = () => {
//   // Don't Do that: this.state.persons[0].name = "Jae Hoon Yang";
//   this.setState({
//     persons: [
//       { name: "Jae Hoon Yang", age: 24 },
//       { name: "Crazybirdz", age: 23 },
//       { name: "CrazyEagle", age: 24 },
//       { name: "CrazyCrow", age: 25 },
//     ],
//   });
//   console.log(this.state.otherState);
// };
