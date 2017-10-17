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
      const lists = this.modelFor('lists');
      let next = lists.filterBy('isDeleted', false).get('firstObject');

      return list.save().then(() => {
        if(next) {
          return this.transitionTo('lists.list', next.get('id'));
        }
        return this.transitionTo('lists');
      });
    }
  }
});
