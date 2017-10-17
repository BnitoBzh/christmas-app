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
      let newGift = this.get('store').createRecord('gift', {
        name,
        list
      });
      controller.set('isAdding', true);
      return newGift.save().then(function() {
        controller.setProperties({
          name: '',
          showForm: false,
          isAdding: false
        });
      });
    },
    updateGift(gift) {
      gift.save();
    }
  }
});
