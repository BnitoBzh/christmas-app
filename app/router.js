import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lists', function() {
    this.route('list', {path: '/:id'}, function() {
      this.route('gifts');
      this.route('details');
    });
  });
});

export default Router;
