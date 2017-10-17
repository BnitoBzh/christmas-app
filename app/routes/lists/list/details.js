import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('lists.list');
  },

  resetController(controller) {
    this._super(...arguments);
    controller.setProperties({
      isEditing: false
    });
  },

  actions: {
    save() {
      const controller = this.controllerFor('lists.list.details');
      const model = this.modelFor('lists.list.details');
      model.set('description', controller.get('description'));
      return model.save().then(() => controller.set('isEditing', false));
    }
  }
});
