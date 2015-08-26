import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: '/ember-test/'
});

Router.map(function() {
	this.route('sample');
	this.route('action-demo');
	this.route('helper-demo');
	this.route('custom-helper-demo');
	this.route('photos');
	this.route('component-demo');
});

export default Router;
