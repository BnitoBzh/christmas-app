import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ['filter', 'sortField', 'sortDirection'],
  filter: 'all',
  sortField: 'name',
  sortDirection: 'asc',
  sortProperties: computed('sortField', 'sortDirection', function() {
    const { sortField, sortDirection } = this.getProperties('sortField', 'sortDirection');
    let sortProperties = [`${sortField}:${sortDirection}`];
    if (sortField === 'priority') {
      sortProperties.push('name:asc');
    }
    return sortProperties;
  }),

  gifts: computed.filterBy('model', 'isNew', false),
  hasGifts: computed.gt('gifts.length', 0),
  filteredGifts: computed('gifts.@each.{isBought}', 'filter', function(){
    const { filter, gifts } = this.getProperties('filter', 'gifts');
    switch (filter) {
      case 'bought':
        return gifts.filterBy('isBought', true);
      case 'available':
        return gifts.filterBy('isBought', false);
      default:
        return gifts;
    }
  }),
  sortedGifts: computed.sort('filteredGifts', 'sortProperties'),


  showEditForm: false,
  canAddGift: computed.or('hasGifts', 'showEditForm'),

  isAdding: false,

  actions: {
    updateGiftStatus(gift, status) {
      gift.set('isBought', status);
      this.send('updateGift', gift);
    }
  }
});
