import React from "react";

const InputField = (props) => {
  return (
    <form onSubmit={props.addSong}>
      <input
        id="title"
        type={"text"}
        name="song"
        className="inputSelect"
        placeholder="Fill in song title"
      />
      <input
        id="artist"
        type={"text"}
        name="artist"
        className="inputSelect"
        placeholder="Fill in name of artist"
      />

      <select value={props.genre} name="genre" className="inputSelect">
        <option value="" disabled selected hidden>
          Genre
        </option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Pop">Pop</option>
        <option value="Country">Country</option>
        <option value="Soul">Soul</option>
      </select>

      <select value={props.rating} name="rating" className="inputSelect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input className="button-primary" type="submit" value="Add Song" />
    </form>
  );
};

export default InputField;
