import React from "react";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <img src={player.imageUrl} alt={player.name} />
      <h3>{player.name}</h3>
      <Link to={`/details/${player.id}`} className="player-link">
        See Details
      </Link>
    </div>
  );
}

export default PlayerCard;