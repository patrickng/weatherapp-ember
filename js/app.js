'use strict';

// var defaultLocations = ['New York, NY', 'San Francisco, CA'];

window.WeatherApp = Ember.Application.create();

WeatherApp.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'locations-emberjs'
});

// WeatherApp.LocationDetailController = Ember.

// WeatherApp.HourlyEntryController = Ember.ObjectController.extend({

// });

// WeatherApp.TenDayEntryController = Ember.ObjectController.extend({

// });