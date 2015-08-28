import { moduleForComponent, test } from 'ember-qunit';

moduleForComponent('pretty-color', {
  // specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
});

test('changing colors', function(assert) {
	assert.expect(2);

	var component = this.subject({name: 'red'});

	this.render();

	assert.equal(this.$().attr('style'), 'color: red;');

	Ember.run(function() {
		component.set('name', 'green');
	});

	assert.equal(this.$().attr('style'), 'color: green;');
});