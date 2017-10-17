import Component from '@ember/component';
import { isEmpty } from '@ember/utils';

export default Component.extend({
  name: '',

  actions: {
    onEnter: function() {
      const name = this.get('name');
      if (!isEmpty(name)) {
        let christmasList = {
          name
        };
        this.get('addList')(christmasList);
        this.set('name', '');
      }
    }
  }
});
