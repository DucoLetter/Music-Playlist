import React from "react";
import SongItem from "./SongItem";

const List = (props) => {
  const list = props.songs.map((item) => (
    <SongItem item={item} deleteSong={props.deleteSong} />
  ));
  return <>{list}</>;
};

export default List;
