import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
    // <h1>Me too</h1>  => Don't do that
  );

  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("h1", null, "Hi! I'm in App")
  // );
}

export default App;
