import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.get('store').findAll('list');
  },

  actions: {
    addList: function(listData) {
      const newList = this.get('store').createRecord('list', listData);
      return newList.save().then(list => {
        this.transitionTo('lists.list', list.get('id'));
      });
    }
  }
});
