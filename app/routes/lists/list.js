import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    const lists = this.modelFor('lists');
    return lists.findBy('slug', params.slug);
  }
});
