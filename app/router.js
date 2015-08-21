import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route('sample');
	this.route('action-demo');
	this.route('helper-demo');
});

export default Router;
