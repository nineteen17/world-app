import React, { useState, useEffect } from "react";
// REMEMBER to INSTALL AXIOS lol
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Countries = () => {
  const [countries, setCountries] = useState([{}]);
  //useEffect allows the city data to render when the page loads
  useEffect(() => {
    // this FUnction fetches the data
    const getCountries = async () => {
      try {
        const response = await axios.get("http://localhost:4000/server/country");
        //the setCountries allows us to store the data from the database into a useState variable
        setCountries(response.data); // note we must use data as its a feature in axios
      } catch (error) {
        if (error.response) {
          console.error("Server response data:", error.response.data);
        }
      }
    };
    //call the FUNCTION!!
    getCountries();
  }, []);


    let navigate = useNavigate()
    let handleSwitchToCity = () => {
      navigate("/");
  };


  return (
    <div>
        <button onClick={handleSwitchToCity}>Switch to cities ?</button>
        <br/>
      <h3>Countries in order of population</h3>
      <div>
        {/* Map to display the data REMEMBER cities is the state that holds the DB data */}
        {countries.map((country, index) => (
          <div key={index}> <p>{index + 1} {country.Name}: {country.Population}</p> </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;


  // let navigate = useNavigate();

  // let handleAddCity = () => {
  //   navigate("/add-city");
  // };


  // <button onClick={handleAddCity}>want to add a new city ?</button>