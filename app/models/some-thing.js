export default Ember.Object.extend({
  foo: 'bar',

  computedFoo: Ember.computed('foo', function() {
    return 'computed ' + this.get('foo');
  })
});