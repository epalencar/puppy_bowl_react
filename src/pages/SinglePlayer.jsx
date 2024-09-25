import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./pageStyles/SinglePlayer.css";

function SinglePlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/players/${id}`)
      .then((data) => {
        console.log(data.data.data.player);
        setPlayer(data.data.data.player);
      })
      .catch((err) => console.log(err));
  }, []);

  const removePlayer = async (playerId) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/players/${playerId}`
      );
      console.log(response.data.success);
      if (response.data.success) {
        alert("Player removed successfully!");
        navigate("/");
      }
    } catch (err) {
      setError("Sorry something went wrong");
    }
  };

  return (
    <div className="single-player-container">
      <h2>{player?.name}</h2>
      <img src={player?.imageUrl} alt={player?.name} height="600" />
      <p>Player ID: {player?.id}</p>
      {player?.team?.name ? `Team: ${player?.team.name}` : "No team assigned"}
      {error && <p className="error-message">Error:{error}</p>}
      <button onClick={() => removePlayer(player?.id)}>
        Remove From Roster
      </button>
    </div>
  );
}

export default SinglePlayer;