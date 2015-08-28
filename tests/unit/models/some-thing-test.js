import SomeThing from 'ember-test/models/some-thing';

test('computedFoo correctly concats foo', function(assert) {
  var someThing = SomeThing.create({});

  someThing.set('foo', 'baz');

  assert.equal(someThing.get('computedFoo'), 'computed baz');
});