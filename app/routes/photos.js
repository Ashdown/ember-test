export default Ember.route.extend({
	model(){
		return[{
			title: 'Cleaveland',
			url: "http://www.google.com/cleaveland"
		}, {
			title: 'Buchanan',
			url: "http://www.google.com/buchanan"
		}];
	}
});