import React from "react";

const SongItem = (props) => {
  return (
    <tr>
      <td>{props.item.title}</td>
      <td>{props.item.artist}</td>
      <td>{props.item.genre}</td>
      <td>{props.item.rating}</td>
      <td>
        <button
          className="button"
          onClick={() => props.deleteSong(props.item)}
          name={props.item.title}
        >
          Delete Song
        </button>
      </td>
    </tr>
  );
};

export default SongItem;
