import React from "react";
import InputField from "./InputField";
import List from "./List";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          title: "The Git Up",
          artist: "Blanco Brown",
          genre: "Country",
          rating: "5",
        },
      ],
    };
    this.addSong = this.addSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  addSong(song) {
    song.preventDefault();
    const titleSong = song.target;
    console.log(titleSong);
    this.setState((prevState) => {
      const update = prevState.songs;
      update.push({
        title: titleSong.title.value,
        artist: titleSong.artist.value,
        genre: titleSong.genre.value,
        rating: titleSong.rating.value,
      });
      return {
        songs: update,
      };
    });
  }

  deleteSong(song) {
    const deleteSongTitle = song.title;
    this.setState((prevState) => {
      const update = prevState.songs;
      update.splice(
        update.findIndex((i) => i.title === deleteSongTitle),
        1
      );
      return { songs: update };
    });
  }

  render() {
    return (
      <div>
        <InputField addSong={this.addSong} />
        <table style={{ width: "100%" }}>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item">Delete</th>
          </tr>
          <List songs={this.state.songs} deleteSong={this.deleteSong} />
        </table>
      </div>
    );
  }
}

export default SongOverview;
