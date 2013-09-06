'use strict';

WeatherApp.Location = DS.Model.extend({
	name: DS.attr('string'),
	locationDidChange: function () {
		Ember.run.once(this, 'save');
	}.observes('name')
});