import { useState } from "react";
import "./App.css";

export default function App() {
  const [test, setLikeCounter] = useState(0);

  function add() {
    var test1 = test + 1;
    setLikeCounter(test1);
  }
  function clr() {
    setLikeCounter(0);
  }

  const emojiData = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": " Grinning Squinting Face",
    "😅": " Grinning Face with Sweat",
    "🤣": " Rolling on the Floor Laughing",
    "😂": " Face with Tears of Joy",
    "🙂": " Slightly Smiling Face",
    "🙃": " Upside-Down Face",
    "😉": " Winking Face",
    "😊": " Smiling Face with Smiling Eyes",
    "😇": " Smiling Face with Halo",
    "🥰": " Smiling Face with Hearts",
    "😍": " Smiling Face with Heart-Eyes",
    "🤩": " Star-Struck",
    "😘": " Face Blowing a Kiss",
    "😗": " Kissing Face",
    "😚": " Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
  };

  var emoji = Object.keys(emojiData);
  var headingText = "Emoji Interpreter";
  var color = "blue";

  var [userInput, setUserInput] = useState("");
  function dmo(event) {
    var meaning = emojiData[event.target.value];
    if (meaning === undefined) {
      console.log("undefined");
      meaning = "We don't have this emoji in our database";
    }
    setUserInput(meaning);
  }

  function emojiClickHandler(i) {
    var meaning = emojiData[i];
    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color, font: "100px" }}>🙂 {headingText}</h1>

      <input
        style={{
          padding: "2rem",
          width: "90%",
          border: "solid",
          borderRadius: "1rem",
          textAlign: "center",
          fontSize: "1.3rem",
        }}
        onChange={dmo}
        placeholder="Enter Emoji"
      ></input>
      <h2>{userInput}</h2>

      <h1>Emoji we know</h1>
      {emoji.map((i) => {
        return (
          <span
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={i}
            onClick={() => emojiClickHandler(i)}
          >
            {i}
          </span>
        );
      })}
    </div>
  );
}
