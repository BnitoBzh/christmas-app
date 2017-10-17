import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['priority-panel'],

  gift: null,
  priority: computed.oneWay('gift.priority'),
  maxPriority: 5,
  onUpdate: null,

  stars: computed('priority', 'maxPriority', function() {
    const fullStars = this.starRange(1, this.get('priority'), 'full');
    const emptyStars = this.starRange(this.get('priority') + 1, this.get('maxPriority'), 'empty');
    return fullStars.concat(emptyStars);
  }),

  starRange(start, end, type) {
    let starsData = [];
    for(let i = start; i <= end; i++) {
      starsData.push({
        priority: i,
        full: type === 'full'
      })
    }
    return starsData;
  },

  actions: {
    setPriority(priority) {
      const gift = this.get('gift');
      const newPriority = priority == gift.get('priority') ? 0 : priority;
      gift.set('priority', newPriority);
      this.get('onUpdate')(gift);
    }
  }
});
