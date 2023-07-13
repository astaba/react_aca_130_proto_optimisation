import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [isPDisplayed, setIsPDisplayed] = useState(false);

  console.log("APP RUNNING");

  const togglePDisplay = () => {
    setIsPDisplayed((prevValue) => !prevValue);
  };
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {isPDisplayed && <p>This is new!</p>}
      <Button onClick={togglePDisplay}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
