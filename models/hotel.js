// const db = new Sequelize('postgres://localhost:5432/tripPlanner');
const db = require('./__db.js').db;
const Sequelize = require('sequelize');

const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars : {
		type: Sequelize.INTEGER,
		min: 1,
		max: 5,
		allowNull: false
	},
	amenities : {
		type: Sequelize.STRING,
		allowNull: false
	}
})

module.exports = { Hotel };
