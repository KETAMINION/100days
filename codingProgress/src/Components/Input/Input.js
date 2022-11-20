import React from "react";

function Input(props) {
  return (
    <div>
      <label for={props.label} />
      <input type="text" />
    </div>
  );
}
export default Input;
