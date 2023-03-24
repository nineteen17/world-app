//Routes is where we store our paths
const express = require('express');
const {country, city, addCity } = require('../controller/worldCont.js');

const router = express.Router();


router.get('/country', country);
router.get('/city', city);

module.exports = router;

