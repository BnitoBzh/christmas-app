import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  hasGifts: computed.gt('model.length', 0),
  showEditForm: false,
  canAddGift: computed.or('hasGifts', 'showEditForm'),

  actions: {
    updateGiftStatus(gift, status) {
      gift.set('isBought', status);
      this.send('updateGift', gift);
    }
  }
});
