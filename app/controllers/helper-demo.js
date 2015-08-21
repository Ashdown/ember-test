export default Ember.Controller.extend({

	updating: false,
	isCheckboxChecked: false,

	actions: {
		updatingTextField() {
			this.set('updating', true);
		}
	}
	
});