import React, { useState } from "react";
import "./App.css";
import Person from "./person/Person";

const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Hoon", age: 22 },
      { name: "Crazybirdz", age: 23 },
      { name: "CrazyEagle", age: 24 },
      { name: "CrazyCrow", age: 25 },
    ],
  });

  const [otherState, setOtherState] = useState("The other state");

  const handleClicked = () => {
    setPersonsState({
      persons: [
        { name: "Jae Hoon Yang", age: 28 },
        { name: "Crazybirdz", age: 23 },
        { name: "CrazyEagle", age: 24 },
        { name: "CrazyCrow", age: 25 },
      ],
    });
    console.log(personsState, otherState);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <button onClick={handleClicked}>Change Name</button>
      <p>Paragraph 1</p>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        Hobby is traveling to foriegn that have beatiful landscape!
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      />
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
      <Person
        name={personsState.persons[3].name}
        age={personsState.persons[3].age}
      />
    </div>
    // <h1>Me too</h1>  => Don't do that because React should use one root elements
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi! I'm in App")
  // );
};

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
