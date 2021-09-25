import emojipedia from "./VarList";

export default function Search(props) {
  let changeHandler = (e) => {
    console.log(e.target.value);
    var inputEmoji = e.target.value;
    if (inputEmoji === "") {
      props.setMeaning("");
    } else if (emojipedia[inputEmoji] === undefined) {
      props.setMeaning("Emoji not in the database");
    } else {
      props.setMeaning(emojipedia[inputEmoji]);
    }
  };
  return (
    <div>
      <input
        className="search"
        placeholder="search.."
        onChange={changeHandler}
      />
      <h2> {props.meaning} </h2>
    </div>
  );
}
