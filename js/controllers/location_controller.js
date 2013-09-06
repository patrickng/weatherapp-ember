'use strict';

WeatherApp.LocationController = Ember.ObjectController.extend({
	actions: {
		removeLocation: function() {
			var location = this.get('model');

			location.deleteRecord();
			location.save();
		}
	}
});