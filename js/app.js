(function() {
	'use strict';

	var defaultLocations = ['New York, NY', 'San Francisco, CA'];

	window.WeatherApp = Ember.Application.create();

	WeatherApp.ApplicationAdapter = DS.LSAdapter.extend({
		namespace: 'locations-emberjs'
	});

	WeatherApp.Router.map(function() {
		// put your routes here
		this.resource('locations', { path: '/' }, function() {
			
		});
	});

	WeatherApp.LocationsRoute = Ember.Route.extend({
		model: function() {
			return this.store.find('location');
		}
	});

	WeatherApp.LocationsIndexRoute = Ember.Route.extend({
		setupController: function() {
			this.controllerFor('locations').set('locations', this.modelFor('locations'));
		}
	});

	WeatherApp.Location = DS.Model.extend({
		name: DS.attr('string')
	});

	WeatherApp.LocationsController = Ember.ArrayController.extend({
		actions: {
			addLocation: function() {
				var name = this.get('locationName');

				this.store.createRecord('location', {
					name: name
				});

				this.set('locationName', '');
			},

			selectedLocation: function() {

			}
		},
		city: function() {
			return this.get('id').split('_')[0];
		}.property('id'),

		state: function() {
			return this.get('id').split('_')[1];
		}.property('id'),

		name: function() {
			return city + ", " + state;
		}.property('city', 'state'),

		loadData: function() {

		}
	});

	// WeatherApp.LocationDetailController = Ember.

	WeatherApp.HourlyEntryController = Ember.ObjectController.extend({

	});

	WeatherApp.TenDayEntryController = Ember.ObjectController.extend({

	});

	

})();