App = Ember.Application.create();

// router

App.Router.map(function() {
  // put your routes here
  this.route("/");
});

// routes

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

//models

App.Location = DS.Model.extend({
	name: DS.attr('string')
});