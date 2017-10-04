// const Sequelize = require('sequelize');
//const db = new Sequelize('postgres://localhost:5432/tripPlanner', {logging: false});
const db = require('./__db.js').db;
const Sequelize = require('sequelize');


const Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine : {
		type: Sequelize.STRING
	}, 
	price: {
		type: Sequelize.INTEGER,
		min: 1,
		max: 5
	}
})

		module.exports = { Restaurant };