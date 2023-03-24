//Controller is where we handle the functions which contain our http request logic and queries 

const pool = require("../pool.js");

//select all from the country table and order by population descending
const country = async (req, res) => {
  const q = `SELECT * FROM WORLD.COUNTRY ORDER BY Population DESC`;
  pool.query(q, (error, result) => {
    res.send(result);
  });
};

//select the name column from city table where name starts with a
const city = async (req, res) => {
  const q = `SELECT name FROM world.city WHERE name LIKE 'a%' LIMIT 10`;
  pool.query(q, (error, result) => {
    if (error) {
      console.error(error);
      res.status(400).send("Error from the server.");
      res.status(500).send("Error retrieving data from the database.");
    } else {
      //convert the name values into an array
      const cityNames = result.map((cityObject) => cityObject.name);
      res.send(cityNames);
    }
  });
};


//Exports
module.exports = {
  country,
  city,
};




