import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['thumb-container'],

  // Properties passed to component in template
  photoTitle: null,
  photoFarm: null,
  photoServer: null,
  photoId: null,
  photoSecret: null,

  click() {
    // open a modal
  }
});
