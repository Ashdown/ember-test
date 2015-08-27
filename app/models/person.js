import Model, { attr } from "ember-data/model";

export default Model.extend({
	firstName: attr('string'),
	birthday: attr('date')
});