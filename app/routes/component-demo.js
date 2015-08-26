var presidents = [{
	title: 'Grant',
	body: 'Had a drinking problem'
},
{
	title: 'Taft',
	body: 'Ohio native'
}];

export default Ember.Route.extend({
	model() {
		return presidents;
	}
})