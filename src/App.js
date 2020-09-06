import React, { Component } from "react";
import "./App.css";
import Person from "./person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Hoon", age: 22 },
      { name: "Crazybirdz", age: 23 },
      { name: "CrazyEagle", age: 24 },
      { name: "CrazyCrow", age: 25 },
    ],
    otherState: "The other state",
  };

  handleClicked = () => {
    // Don't Do that: this.state.persons[0].name = "Jae Hoon Yang";
    this.setState({
      persons: [
        { name: "Jae Hoon Yang", age: 24 },
        { name: "Crazybirdz", age: 23 },
        { name: "CrazyEagle", age: 24 },
        { name: "CrazyCrow", age: 25 },
      ],
    });
    console.log(this.state.otherState);
  };

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button onClick={this.handleClicked}>Change Name</button>
        <p>Paragraph 1</p>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        >
          Hobby is traveling to foriegn that have beatiful landscape!
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
      // <h1>Me too</h1>  => Don't do that because React should use one root elements
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi! I'm in App")
    // );
  }
}

export default App;
