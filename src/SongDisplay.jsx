import React, { useState } from "react";
import "./Song.css"; // Import CSS file for styling

export default function SongDisplay({
  index,
  songOne,
  songTwo,
  handlePreference,
  prompt,
}) {
  return (
    <div className="song-display-container">
      <div>{prompt}</div>
      <div className="song-item">{songOne}</div>
      <button onClick={handlePreference(index, "llama")}>
        Prefer Song One
      </button>
      <div className="song-item">{songTwo}</div>
      <button onClick={handlePreference(index, "lyre")}>Prefer Song Two</button>
    </div>
  );
}
