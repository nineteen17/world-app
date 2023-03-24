//Imports
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv").config(); // Load environment variables from .env file

//Middleware
app.use(express.json());
app.use(cors());

//Import Routes
const userRoute = require('./routes/worldRoute.js');

//Use Routes
app.use('/server', userRoute); // note userRoutes will contain multiple routes


//listen port
const PORT = process.env.PORT
app.listen(PORT);
