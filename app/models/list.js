import Ember from 'ember';

export default Ember.Object.extend({
  name: null,
  description: null,
  slug: Ember.computed('name', function() {
    return this.get('name').dasherize();
  }),
  gifts: []
});
