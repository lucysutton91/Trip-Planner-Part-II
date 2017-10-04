const mapboxgl = require("mapbox-gl");
const { Map } = mapboxgl;
const buildMarker = require('./marker.js');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g';

const map = new Map({
	container: 'map',
	center : [-74.009, 40.705], // FullStack coordinates
	zoom: 15,
	style: "mapbox://styles/mapbox/streets-v10"
})

const marker = buildMarker('hotels', [-74.009, 40.705])
marker.addTo(map)

let restaurantChoices = document.getElementById('restaurants-choices');
let hotelChoices = document.getElementById('hotels-choices');
let activityChoices = document.getElementById('activities-choices');
let activities;
let restaurants;
let hotels;



fetch('/api')
.then(content => {
	console.log("res", content)
	return content.json()
})
.then(parsedContent => {
	// console.log('parsed', parsedContent)
	// lets add the parsedContent to the select fields on the DOM
	hotels = parsedContent.hotel;
	restaurants = parsedContent.restaurant;
	activities = parsedContent.activity;
	hotels.forEach(hotel => {
		let hotelOption = document.createElement('option')
		hotelOption.innerHTML = hotel.name;
		hotelChoices.appendChild(hotelOption)
	})

	restaurants.forEach(restaurant => {
		let restaurantOption = document.createElement('option')
		restaurantOption.innerHTML = restaurant.name;
		restaurantChoices.appendChild(restaurantOption)
	})

	activities.forEach(activity => {
		let activityOption = document.createElement('option')
		activityOption.innerHTML = activity.name;
		activityChoices.appendChild(activityOption)
	})
});

let hotelList = document.getElementById('hotels-list');
let activityList = document.getElementById('activities-list');
let restaurantList = document.getElementById('restaurants-list');


document.getElementById('hotels-add').addEventListener('click',  () => {
	const select = document.getElementById('hotels-choices');
	// use `.value` to get the currently selected value
	const selectedId = select.value;
	let newHotel = document.createElement('li');
	newHotel.innerHTML = selectedId;
	hotelList.appendChild(newHotel);
	// buildMarker('hotel',)
	for (let i  = 0; i < hotels.length; i ++){
		if (hotels[i].name === selectedId) {
			let marker = buildMarker('hotels', hotels[i].place.location);
			marker.addTo(map);
		}
	}
});

document.getElementById('restaurants-add').addEventListener('click',  () => {
	const select = document.getElementById('restaurants-choices');
	// use `.value` to get the currently selected value
	const selectedId = select.value;
	let newRestaurant = document.createElement('li');
	newRestaurant.innerHTML = selectedId;
	restaurantList.appendChild(newRestaurant);
	// console.log(selectedId);
});

document.getElementById('activities-add').addEventListener('click',  () => {
	const select = document.getElementById('activities-choices');
	// use `.value` to get the currently selected value
	const selectedId = select.value;
	let newActivity = document.createElement('li');
	newActivity.innerHTML = selectedId;
	activityList.appendChild(newActivity);
	// console.log(selectedId);
});
