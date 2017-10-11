import Ember from 'ember';
import List from 'todos-app/models/list';
import Gift from 'todos-app/models/gift';

export default Ember.Route.extend({
  model: function() {
    let list1 = List.create({
        name: 'Jeux vidéo',
        gifts: [
          Gift.create({
            name: 'Destiny 2',
            isBought: true
          }),
          Gift.create({
            name: 'Star Wars Battlefront II'
          })
        ]
      }),
      list2 = List.create({
        name: 'Bluray'
      });
    return [list1, list2];
  },

  actions: {
    addList: function(list) {
      const listObject = List.create(list);
      this.modelFor('lists').pushObject(listObject);
    }
  }
});
