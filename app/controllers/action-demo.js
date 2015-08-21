export default Ember.Controller.extend({
	intro: 'This is the intro',
	body: 'This is the body',

	isExpanded: true,

	actions: {
		expand() {
			this.set('isExpanded', true);
		},
		contract() {
			this.set('isExpanded', false);
		}
	}
})