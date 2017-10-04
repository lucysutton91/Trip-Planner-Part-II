const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripPlanner', {logging: false});

const Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city : {
		type: Sequelize.STRING,
		allowNull: false
	},
	state : {
		type: Sequelize.STRING,
		allowNull: false
	},
	phoneNumber : {
		type: Sequelize.STRING,
		allowNull: false
	},
	location : {
		type: Sequelize.ARRAY(Sequelize.DECIMAL),
		allowNull: false
	}
})

module.exports = {Place};