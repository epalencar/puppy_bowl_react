import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./pageStyles/CreatePlayer.css";

function CreatePlayer() {
  const navigate = useNavigate();
  const [newPlayer, setNewPlayer] = useState({
    status: "bench",
    imageUrl:
      "https://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg",
  });

  const handleInput = (e) => {
    setNewPlayer({ ...newPlayer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      `${import.meta.env.VITE_API_URL}/players`,
      newPlayer
    );
    console.log(data);
    if (data.data.success) {
      alert("Player added successfully!");
      navigate("/");
    }
  };

  console.log(newPlayer);
  return (
    <div>
      <form className="add-player-form" onSubmit={handleSubmit}>
        <label>
          Player Name
          <input type="text" name="name" onChange={handleInput} />
        </label>
        <label>
          Player Breed
          <input type="text" name="breed" onChange={handleInput} />
        </label>

        <label>
          Image URL
          <input type="text" name="imageUrl" onChange={handleInput} />
        </label>
        <label>
          <select name="status" onChange={handleInput}>
            <option value="field">Field</option>
            <option value="bench" defaultValue="bench">
              Bench
            </option>
          </select>
        </label>
        <button>Add New Player</button>
      </form>
    </div>
  );
}

export default CreatePlayer;