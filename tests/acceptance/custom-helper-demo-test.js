import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | Custom Helper Demo page', {
  beforeEach: function() {
    this.application = startApp();
    visit('/custom-helper-demo');
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('can view page', function(assert) {
  andThen(function() {
    assert.equal(currentURL(), '/custom-helper-demo');
  });
});

test('can navigate to homepage', function(assert) {
  click('.homepage-link');
  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});
