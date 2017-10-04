const Activity = require('./activity.js').Activity;
const Restaurant = require('./restaurant.js').Restaurant;
const Hotel = require('./hotel.js').Hotel;
const Place = require('./place.js').Place;

Activity.belongsTo(Place);
Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
	Activity,
	Restaurant,
	Hotel,
	Place
}
