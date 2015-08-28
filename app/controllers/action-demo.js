export default Ember.Controller.extend({
	intro: 'This is the intro',
	body: 'This is the body',

	isExpanded: true,
	linkClicked: false,

	actions: {
		expand() {
			this.set('isExpanded', true);
		},
		contract() {
			this.set('isExpanded', false);
		},
		googleLink(){
			this.set('linkClicked', true);
		}

	}
});