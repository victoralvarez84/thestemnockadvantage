import Backbone from 'backbone';

class Router extends Backbone.Router {

  get routes() {
    return {
      ''       : 'splash',
      'about'     : 'about',
      'key'     : 'key',
      'consulting'   : 'consulting',
      'speaking'     : 'speaking',
      'contact'     : 'contact',

    }
  }

  splash() {
    this.current = 'splash';
  }
  about() {
    this.current = 'about';
  }
  key() {
    this.current = 'key';
  }
  consulting() {
    this.current = 'consulting';
  }
  speaking() {
    this.current = 'speaking';
  }
  contact() {
    this.current = 'contact';
  }
  initialize() {
    Backbone.history.start();
  }
}

export default Router;
