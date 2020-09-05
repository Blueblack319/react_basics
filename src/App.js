import React from "react";
import "./App.css";
import Person from "./person/Person";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Paragraph 1</p>
      <Person />
    </div>
    // <h1>Me too</h1>  => Don't do that because React should use one root elements
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi! I'm in App")
  // );
}

export default App;
