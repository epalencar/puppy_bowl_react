import React from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import "./PlayerCardList.css";

function PlayerCardList({ players }) {
  return (
    <div className="player-card-list">
      {players.map((player) => (
        <PlayerCard player={player} key={player?.id} />
      ))}
    </div>
  );
}

export default PlayerCardList;