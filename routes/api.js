const express = require('express');
const router = express.Router();
//const Promise = requ
// our data

const db = require("../models/__db.js").db;
const Place = require("../models/index.js").Place;
const Hotel = require("../models/index.js").Hotel;
const Restaurant = require("../models/index.js").Restaurant;
const Activity = require("../models/index.js").Activity;

router.get('/', (req, res, next) => {
    let allAttractions = {};
    let requests = [Hotel.findAll({ include: [ Place ] }), Restaurant.findAll({ include: [ Place ] }), Activity.findAll({ include: [ Place ] })]
    Promise.all(requests)
    .then((array) => {
        allAttractions.activity = array[2]
        allAttractions.restaurant = array[1]
        allAttractions.hotel = array[0];
        res.json(allAttractions);
    })
    .catch(next);
});

// router.get('/attractions', (req, res, next) => {
//     let allAttractions = {};
//     let requests = [Hotel.findAll({ include: [ Place ] }), Restaurant.findAll({ include: [ Place ] }), Activity.findAll({ include: [ Place ] })]
//     Promise.all(requests)
//     .then((array) => {
//         allAttractions.activity = array[2]
//         allAttractions.restaurant = array[1]
//         allAttractions.hotel = array[0];
//     })
//     .catch(next);
// });

module.exports = router;
