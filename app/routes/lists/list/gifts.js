import Route from '@ember/routing/route';

export default Route.extend({
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
    addGift(name) {
      const controller = this.controllerFor('lists.list.gifts');
      const list = this.modelFor('lists.list');
      this.get('store').createRecord('gift', {
        name,
        list
      });
      controller.setProperties({
        name: '',
        showForm: false
      });
    },
    updateGift(gift) {

      gift.save();
    }
  }
});
