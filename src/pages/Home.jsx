import React, { useEffect, useState } from "react";
import PlayerCardList from "../components/PlayerCardList/PlayerCardList";
import axios from "axios";

function Home() {
  const [players, setPlayers] = useState([]);
  const [playersToShow, setPlayersToShow] = useState([]);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/players`)
      .then((data) => {
        console.log(data.data.data.players);
        setPlayers(data.data.data.players);
        setPlayersToShow(data.data.data.players);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(players);

  const findPlayers = (e) => {
    console.log(e.target.value);
    const results = players.filter((player) =>
      player.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    console.log(results);
    setPlayersToShow(results);
  };
  return (
    <div>
      <label>
        <p>Search Players:</p>
        <input type="text" onChange={findPlayers} />
      </label>
      <PlayerCardList players={playersToShow} />
    </div>
  );
}

export default Home;

//VITE_API_URL = https://fsa-puppy-bowl.herokuapp.com/api/2406-CRA-ET-WEB-AM