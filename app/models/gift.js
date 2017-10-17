import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr(),
  priority: attr('number'),
  isBought: attr('boolean', {
    defaultValue() {
      return false;
    }
  }),
  list: belongsTo('list')
});
