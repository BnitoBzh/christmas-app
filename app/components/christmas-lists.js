import Ember from 'ember';

export default Ember.Component.extend({
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
