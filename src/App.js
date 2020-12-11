import React, { useState } from "react";
import "./styles.css";

var emojidata = {
  "💘": "Heart with Arrow",
  "💝": "Heart with Ribbon",
  "💖": "Sparkling Heart",
  "💗": "Growing Heart",
  "💓": "Beating Heart",
  "💞": "Revolving Hearts",
  "💕": "Two Hearts",
  "💟": "Heart Decoration",
  "❣️": "Heart Exclamation",
  "💔": "Broken Heart",
  "❤️": "Red Heart"
};

var emojiarray = Object.keys(emojidata);

export default function App() {
  const [input, setinput] = useState(" ");

  function inputhandler(event) {
    var userinput = event.target.value;
    var input = emojidata[userinput];
    if (input === undefined) {
      input = "Sorry!! This emoji is not available in our system";
    }
    setinput(input);
  }

  function clickhandler(emoji) {
    var input = emojidata[emoji];
    setinput(input);
  }

  return (
    <div className="App">
      <h1>Heart Emoji interpreter</h1>
      <hr></hr>
      <h2>Put your emoji below</h2>

      <input
        onChange={inputhandler}
        placeholder="enter your emoji here"
        style={{
          width: "50%",
          height: "5vh",
          padding: "1rem",
          fontSize: "20px",
          borderRadius: "10px",
          margin: "10px"
        }}
      ></input>
      <h3>Show your result below</h3>

      <div
        style={{
          border: "2px solid black",
          padding: "2rem",
          width: "43%",
          margin: "auto",
          borderRadius: "10px",
          backgroundColor: "white"
        }}
      >
        {input}
      </div>

      <h2>click on emoji</h2>

      {emojiarray.map(function (emoji) {
        return (
          <span
            onClick={() => clickhandler(emoji)}
            style={{ cursor: "pointer", fontSize: "40px" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
