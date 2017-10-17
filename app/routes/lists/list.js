import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('list', params.id, {reload: true, include: 'gifts'});
  },

  resetController(controller) {
    this._super(...arguments);
    controller.set('showDeleteConfirmationModal', false);
  },

  actions: {
    deleteList(list) {
      list.deleteRecord();
      return list.save().then(() => this.transitionTo('lists'));
    }
  }
});
