import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.modelFor('lists.list');
  },
  actions: {
    save() {
      const controller = this.controllerFor('lists.list.details');
      const model = this.modelFor('lists.list.details');
      return model.save().then(() => controller.set('isEditing', false));
    }
  }
});
