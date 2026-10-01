import React, { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { View as ViewTwo } from "./components/view/view";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this;
  }
  plusPlusHandler() {}
  render() {
    return (
      <>
        <h1 className="absolute top-1/6 text-3xl italic font-bold text-gray-100">count Project </h1>
        <ViewTwo className="w-full h-full" {...this.state} />
      </>

      // <h2>salam</h2>
    );
  }
}

export default App;
