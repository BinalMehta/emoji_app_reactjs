import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "⛰️": "Mountains",
  "🏝️": "Desert",
  "🏡": "garden house",
  "🗽": "statue of liberty",
  "⛲": "fountain",
  "🛕": "temple",
  "🗾": "map of japan"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    // processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }

    // console.log(meaning)

    setMeaning(meaning); // react call to show output
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); // react call to show output
  }
  return (
    <div className="App">
      <h1>inside outt!</h1>

      <input onChange={emojiInputHandler} />

      <h2> {meaning} </h2>
      {/* Actual output set by react using useState */}

      <h3> emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}

/**Things to notice:
 * class --> className
 * style --> takes an object instead of ""
 */
