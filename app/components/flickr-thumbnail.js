import Ember from 'ember';

export default Ember.Component.extend({
  modal: Ember.inject.service('modal-image'),

  classNames: ['thumb-container'],

  // Properties passed to component in template
  photoTitle: null,
  photoFarm: null,
  photoServer: null,
  photoId: null,
  photoSecret: null,

  photoThumbnailUrl: Ember.computed('photoFarm', 'photoServer', 'photoId', 'photoSecret', function() {
    return `https://farm${this.get('photoFarm')}.staticflickr.com/${this.get('photoServer')}/${this.get('photoId')}_${this.get('photoSecret')}_n.jpg`;
  }),

  photoFullUrl: Ember.computed('photoFarm', 'photoServer', 'photoId', 'photoSecret', function() {
    return `https://farm${this.get('photoFarm')}.staticflickr.com/${this.get('photoServer')}/${this.get('photoId')}_${this.get('photoSecret')}_b.jpg`;
  }),

  click() {
    this.get('modal').showModal(this.get('photoFullUrl'), this.get('photoTitle'));
  }
});
