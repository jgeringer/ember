import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'}); //this is not necessary, but helps explain routing
  
  //this.route('orders'); //if the path is the same as the route name, then you can omit the path.
  //this.route('order', {path: '/orders/:order_id'}); //creates a single order detail page (":" is a dynamic segment)

  this.route('orders', function(){
    this.route('order', { path: '/:order_id' });
  });
  
});

export default Router;
