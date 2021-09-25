import { useState } from "react";
import Emojipedia from "./components/VarList";
import Search from "./components/Search";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  let clickHandler = (e) => {
    setMeaning(Emojipedia[e.target.innerText]);
  };
  let emojiList = Object.keys(Emojipedia);
  let emojiButtons = emojiList.map((currEle) => {
    return (
      <span className="emojis" onClick={clickHandler}>
        {currEle}
      </span>
    );
  });
  console.log(emojiList);
  return (
    <div className="App">
      <h1>Emojipedia</h1>
      <Search meaning={meaning} setMeaning={setMeaning} />
      {emojiButtons}
    </div>
  );
}
