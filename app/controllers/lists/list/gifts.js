import Ember from 'ember';

export default Ember.Controller.extend({
  hasGifts: Ember.computed.gt('model.length', 0),
  showEditForm: false,
  canAddGift: Ember.computed.or('hasGifts', 'showEditForm')
});
