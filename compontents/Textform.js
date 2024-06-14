import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter the text here");
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonChange = (event) => {
    console.log("On change");
    setText(event.target.value)
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleonChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-outline-dark mx-3" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-outline-dark  mx-3" onClick={handleLowClick}>
        Convert to lowercase
      </button>
    </div>
  );
}
