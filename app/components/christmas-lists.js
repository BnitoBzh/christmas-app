import Component from '@ember/component';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  name: '',
  isSaving: false,

  actions: {
    onEnter: function() {
      const name = this.get('name');
      if (!isEmpty(name)) {
        let christmasList = {
          name
        };

        this.set('isSaving', true);
        this.get('addList')(christmasList).then(() => {
          this.setProperties({
            name: '',
            isSaving: false
          })
        });
      }
    }
  }
});
