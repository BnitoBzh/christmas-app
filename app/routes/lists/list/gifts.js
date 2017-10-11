import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    const list = this.modelFor('lists.list');
    return list.get('gifts');
  },

  resetController: function(controller) {
    this._super(...arguments);
    controller.setProperties({
      name: '',
      showEditForm: false
    });
  },

  actions: {
    addGift: function(name) {
      const list = this.modelFor('lists.list');
      const gift = Gift.create({
        name
      });
      list.get('gifts').pushObject(gift);
      this.controllerFor('lists.list.gifts').set('name', '');
    }
  }
});
