import Model, { hasMany } from "ember-data/model";

export default Model.extend({
	lineItems: hasMany('line-item')
});