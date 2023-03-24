import React, { useState, useEffect } from "react";
// REMEMBER to INSTALL AXIOS lol
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cities = () => {
  const [cities, setCities] = useState([]);
  //useEffect allows the city data to render when the page loads
  useEffect(() => {
    // this FUnction fetches the data
    const getCities = async () => {
      try {
        const response = await axios.get("http://localhost:4000/server/city");
        //the setCities allows us to store the data from the database into a useState variable
        setCities(response.data); // note we must use data as its a feature in axios
      } catch (error) {
        if (error.response) {
          console.error("Server response data:", error.response.data);
        }
      }
    };
    //call the FUNCTION!!
    getCities();
  }, []);

  let navigate = useNavigate();

  let handleSwitchToCountries = () => {
    navigate("/countries");
  };


  return (
    <div>
      <button onClick={handleSwitchToCountries}>Switch to countries ?</button>
      <br />
      <h3>Cities starting with the letter A</h3>
      <div>
        {/* Map to display the data REMEMBER cities is the state that holds the DB data */}
        {cities.map((city, index) => (
          <div key={index}> <p>{city}</p> </div>
        ))}
      </div>
    </div>
  );
};

export default Cities;



  