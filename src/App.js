import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [isPDisplayed, setIsPDisplayed] = useState(false);
  const [isToggleAllowed, setIsToggleAllowed] = useState(false);

  console.log("APP RUNNING");

  // const togglePDisplay = () => {
  // setIsPDisplayed((prevValue) => !prevValue);
  // };
  const togglePDisplay = React.useCallback(() => {
    if (isToggleAllowed) {
      setIsPDisplayed((prevValue) => !prevValue);
    }
  }, [isToggleAllowed]);

  const allowToggle = () => {
    setIsToggleAllowed((prevValue) => !prevValue);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* Toggle onDisplay: isPDisplayed/false */}
      <DemoOutput onDisplay={isPDisplayed} />
      <Button onClick={allowToggle}>
        {!isToggleAllowed ? "Allow" : "Prevent"} Toggle
      </Button>
      <br />
      <br />
      <Button onClick={togglePDisplay}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
