'use strict';

WeatherApp.LocationsController = Ember.ArrayController.extend({
	actions: {
		addLocation: function() {
			var name = this.get('locationName');

			this.store.createRecord('location', {
				name: name
			});

			this.set('locationName', '');
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

	name_id: function() {
		return city + "_" + state;
	}.property('city', 'state')
});