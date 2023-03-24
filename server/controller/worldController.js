//Controller is where we handle the functions which contain MYSQL queries

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


//This COde WOnt Work because

// The error message indicates that there is a foreign key constraint on the CountryCode column in the city table. When you try to insert a new city, you also need to provide a valid CountryCode that exists in the country table.

// To fix this issue, you should update your addCity function to include the CountryCode. First, update the addCity function in your backend code:

// const addCity = async (req, res) => {
//   const q = "INSERT INTO world.city (name) VALUES (?);";
//   const values = [req.body.name];

//   try {
//     await pool.query(q, values);
//     res.status(200).send("Data inserted successfully.");
//   } catch (error) {
//     console.error(error);
//     if (error.code === "ER_PARSE_ERROR") {
//       res.status(400).send("SQL syntax error.");
//     } else {
//       res.status(500).send("Error inserting data into the database.");
//     }
//   }
// };
