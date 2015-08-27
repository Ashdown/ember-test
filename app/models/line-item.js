import Model, {belongsTo} from "ember-data/model";

export default Model.extend({
	order: belongsTo('order')
});