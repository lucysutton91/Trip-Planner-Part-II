// const db = new Sequelize('postgres://localhost:5432/tripPlanner', {logging: false});
const Sequelize = require('sequelize');
const db = require('./__db.js').db;


const Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	age_range : {
		type: Sequelize.STRING
	}
})

module.exports = {Activity};