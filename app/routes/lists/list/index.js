import Route from '@ember/routing/route';
import { isEmpty } from '@ember/utils';

export default Route.extend({
  beforeModel() {
    const list = this.modelFor('lists.list');
    const description = list.get('description');
    if(isEmpty(description)) {
      return this.transitionTo('lists.list.gifts', list);
    }
    return this.transitionTo('lists.list.details', list);
  }
});
