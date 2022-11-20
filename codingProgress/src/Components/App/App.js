import React from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import Input from "../Input/Input";

function App() {
  return (
    <div>
      <h1>100 Days of Code!</h1>
      <p>Edit Your progress here:</p>
      <Input label="day" />
      <Input label="subject" />
      <Button />
      <Button />
      <Button />
      <Display />
    </div>
  );
}

export default App;
