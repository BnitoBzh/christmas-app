import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';

export default Controller.extend({
  lists: computed.filterBy('model', 'isNew', false),
  errorMessage: null,
  _clearErrorMessage: function() {
    run.later(() => {
      if(!this.get('isDestroyed')) {
        this.set('errorMessage', null);
      }
    }, 3000);
  }.observes('errorMessage')
});
