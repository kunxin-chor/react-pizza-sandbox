import React from "react";
import "./styles.css";
import Counter from "./Counter.js";
import "bulma/css/bulma.min.css";
import guitar from "./acoustic_guitar.jpg";

const inlineStyle = {
  color: "red",
  border: "1px black solid"
};

export default function App() {
  return (
    <div className="container is-fluid">
      <h1 className="title">Hello CodeSandbox</h1>
      <Counter />
      <h2>Start editing to see some magic happen!</h2>
      <div style={inlineStyle}>Say Hello Again</div>
      <div style={{ color: "green", fontFamily: "Verdana" }}>
        Hello World Once More
      </div>
      <img src={require("./band.jpg")} alt="band" />
      <img src={guitar} alt="guitar" />
    </div>
  );
}
