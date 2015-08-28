import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | user can navigate to homepage', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting customer helper demo page', function(assert) {
  visit('/custom-helper-demo');

  andThen(function() {
    assert.equal(currentURL(), '/custom-helper-demo');
  });
});
