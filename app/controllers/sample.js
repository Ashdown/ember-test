export default Ember.Controller.extend({
	firstName: 'Grover',
	lastName: 'Cleaveland'
});

Ember.LinkComponent.reopen({
  attributeBindings: ['data-toggle']
});