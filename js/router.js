'use strict';

WeatherApp.Router.map(function() {
	// put your routes here
	this.resource('locations', { path: '/' });
	this.resource('location', { path: '/location/:location_name' });
});

WeatherApp.LocationsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('location');
	},

	setupController: function() {
		this.controllerFor('locations').set('locations', this.modelFor('locations'));
	}
});

WeatherApp.LocationRoute = Ember.Route.extend({
	model: function(params) {
		// console.log(params);
		var location = this.store.query('location', params.location_name);
		// return this.store.find('location', params.location_id);
		return location;
	}
});