import Component from '@ember/component';

export default Component.extend({
  name: '',

  actions: {
    onEnter: function() {
      const name = this.get('name');
      if (!Ember.isEmpty(name)) {
        let christmasList = {
          name
        };
        this.get('addList')(christmasList);
        this.set('name', '');
      }
    }
  }
});
