const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripPlanner', {logging: false});

const Activity = require('./activity.js').Activity;
const Restaurant = require('./restaurant.js');
const Hotel = require('./hotel.js');
const Place = require('./place.js');

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	db,
	Activity,
	Restaurant,
	Hotel,
	Place
}


