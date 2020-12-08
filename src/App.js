import React, { useState } from "react";
import "./styles.css";
import emojiDictionary from "./emoji";

export default function App() {
  function formatString(s) {
    var string = s.substring(1, s.length - 1);
    return string.replace(/_/g, " ");
  }

  const [emojiMeaning, setEmojiMeaning] = useState("Meaning");
  // var emojiList = Object.keys(emojiDictionary);
  var emojiList = ["⚜", "⚛", "☸", "☯"];
  function changeHandler(e) {
    var userInput = e.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = " Sorry!!! We dont have this emoji in our database ";
    }
    setEmojiMeaning(formatString(meaning));
  }
  function clickHandler(emoji) {
    var clickedEmoji = emoji;
    var meaning = emojiDictionary[clickedEmoji];
    setEmojiMeaning(formatString(meaning));
  }
  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      <div className="content">
        <input onChange={changeHandler} placeholder="Enter any Emoji"></input>
        <h4 className="meaning">{emojiMeaning}</h4>
        <div>Click on the emojis to know their meaning</div>
        <h3>
          <div>
            {emojiList.map(function (emoji) {
              return (
                <span
                  onClick={() => clickHandler(emoji)}
                  key={emoji}
                  style={{
                    fontSize: "2rem",
                    padding: "1rem 2rem",
                    cursor: "pointer"
                  }}
                >
                  {emoji}
                </span>
              );
            })}
          </div>
        </h3>
      </div>
      <div className="about">
        <h2>About</h2>
        <p className="about-text">
          A simple Emoji Dictionary. You can either enter the emoji and get the
          meaning or <br />
          you can click on any one of the emojis above and get its meaning.
        </p>
      </div>
    </div>
  );
}
