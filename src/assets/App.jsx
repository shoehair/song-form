import React, { useState, useEffect } from "react";
import SongDisplay from "./SongDisplay.jsx";
import { data } from "./data/data.js";

export default function App() {
  const [randomSample, setRandomSample] = useState([]);
  const [done, setDone] = useState(false);
  const [currSongs, setCurrSongs] = useState([
    "wait...",
    "wait...",
    -1,
    -1,
    -1,
  ]);
  const [preferences, setPreferences] = useState({});

  let endForm = currSongs[4] == 9;

  const submitData = () => {
    console.log("submitting..");
    fetch(
      "https://hidden-chamber-86726-d7f9acdfb41d.herokuapp.com/https://simple-server-0ac476df4b54.herokuapp.com/submit-json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preferences),
      },
    )
      .then((res) => res.json)
      .then((res) => console.log(res));
  };

  const sampleSongs = function (list, num) {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const handlePreference = (index, model) => () => {
    setPreferences({ ...preferences, [index]: model });
    let i = currSongs[3];
    if (i < 9) {
      setCurrSongs([
        randomSample[i + 1]["llama_response"],
        randomSample[i + 1]["lyre_response"],
        randomSample[i + 1]["id"],
        i + 1,
        randomSample[i + 1]["prompt"],
      ]);
    } else {
      setDone(true);
      console.log("DONE");
      console.log(preferences);
      //submit data
      submitData();
    }
  };

  useEffect(() => {
    const sampledSongs = sampleSongs(data, 10);
    setRandomSample([...sampledSongs]);
    setCurrSongs([
      sampledSongs[0]["llama_response"],
      sampledSongs[0]["lyre_response"],
      sampledSongs[0]["id"],
      0,
      sampledSongs[0]["prompt"],
    ]);
  }, []);

  return (
    <div>
      {!done ? (
        <SongDisplay
          index={currSongs[2]}
          songOne={currSongs[0]}
          songTwo={currSongs[1]}
          handlePreference={handlePreference}
          prompt={currSongs[3]}
        />
      ) : (
        <div>Thanks for helping us advance the future of LLM's.</div>
      )}
    </div>
  );
}
