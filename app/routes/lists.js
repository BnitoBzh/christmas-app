import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('list');
  },

  actions: {
    addList: function(listData) {
      this.modelFor('lists').pushObject(
        this.get('store').createRecord('list', listData)
      );
    }
  }
});
