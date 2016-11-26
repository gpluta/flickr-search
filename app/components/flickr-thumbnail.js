import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['thumb-container'],

  // Parameters passed to component
  photoTitle: null,
  photoFarm: null,
  photoServer: null,
  photoId: null,
  photoSecret: null,

  click() {
    // open a modal
  }
});
