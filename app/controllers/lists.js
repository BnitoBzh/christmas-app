import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  lists: computed.filterBy('model', 'isNew', false)
});
