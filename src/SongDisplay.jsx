import React, { useState } from "react";
import "./Song.css"; // Import CSS file for styling

export default function SongDisplay({
  index,
  songOne,
  songTwo,
  handlePreference,
  artist,
})
{
  let randomNumber = Math.random();
  console.log(randomNumber);
  let arrow = "<=";

  let songDiv = (
    <div className="song-display-container">
      <div className="song-item">{songOne}</div>
      <button onClick={handlePreference(index, "llama")}>
        {arrow}Prefer Song One
      </button>
      <div className="song-item">{songTwo}</div>
      <button onClick={handlePreference(index, "lyre")}> {arrow} Prefer Song Two</button>
    </div>
  )
  if (randomNumber < 0.5) {
    songDiv = <div className="song-display-container">
    <div className="song-item">{songTwo}</div>
    <button onClick={handlePreference(index, "lyre")}> {arrow} Prefer Song Two</button>
    <div className="song-item">{songOne}</div>
    <button onClick={handlePreference(index, "llama")}>
      {arrow}Prefer Song One
    </button>
  </div>
  }

  return (
    <>
    <div className="main-container"> Both songwriters were asked to write a song in da style of {artist}. </div>
    {songDiv}
  </>
  );
}
