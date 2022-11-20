import React from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import Input from "../Input/Input";

function App() {
  return (
    <div>
      <Input label="day" />
      <Input label="subj" />
      <Button />
      <Button />
      <Button />
      <Display />
    </div>
  );
}

export default App;
