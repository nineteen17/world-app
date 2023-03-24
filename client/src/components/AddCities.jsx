import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCities = () => {
  const [cityInput, setCityInput] = useState([]);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  let handleChange = (e) => {
    setCityInput(e.target.name);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const newCity = { name: cityInput };

      const response = await axios.post(
        "http://localhost:4000/server/add-city",
        newCity
      );

      navigate("/");
    } catch (err) {
      setError(" Failed to add new city");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label></label>
        <input
          type="text"
          name="name"
          placeholder="enter city name"
          onChange={handleChange}
        />
        <button type="submit">Add City</button>
        {error}
      </form>
    </div>
  );
};

export default AddCities;
