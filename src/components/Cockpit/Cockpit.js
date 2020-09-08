import React, { useEffect, useRef, useContext } from "react";

import classes from "./Cockpit.module.css";

import AuthContext from "../../context/auth-context";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    alert("First rendering");
    toggleBtnRef.current.click();
    return () => console.log("[Cockpit.js] cleanup work in useEffect");
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    // HTTP request...
    // setTimeout(() => {
    //   alert("Save user to cloud");
    // }, 1000);
    return () => console.log("[Cockpit.js] 2nd cleanup work in useEffect");
  });

  console.log("[Cockpit.js] rendering...");
  const assignClasses = [];
  let btnClass = null;

  if (props.personsLength <= 2) {
    assignClasses.push(classes.red);
  }
  if (props.personsLength <= 1) {
    assignClasses.push(classes.bold);
  }

  if (props.showUsers) {
    btnClass = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(" ")}>This is really Working!!</p>
      <button className={btnClass} onClick={authContext.login}>
        Log in
      </button>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Show Users
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
