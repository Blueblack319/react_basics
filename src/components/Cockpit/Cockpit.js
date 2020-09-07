import React, { useEffect } from "react";

import classes from "./Cockpit.module.css";

const Cockpit = (props) => {
  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    alert("First rendering");
    return () => console.log("[Cockpit.js] cleanup work in useEffect");
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    // HTTP request...
    setTimeout(() => {
      alert("Save user to cloud");
    }, 1000);
    return () => console.log("[Cockpit.js] 2nd cleanup work in useEffect");
  }, [props.persons]);

  console.log("[Cockpit.js] rendering...");
  const assignClasses = [];
  let btnClass = null;

  if (props.persons.length <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignClasses.push(classes.bold);
  }

  if (props.showUsers) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>This is really Working!!</p>
      <button className={btnClass} onClick={props.clicked}>
        Show Users
      </button>
    </div>
  );
};

export default Cockpit;
