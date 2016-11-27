import Ember from 'ember';

export default Ember.Component.extend({
  // Inject the modal service
  modal: Ember.inject.service('modal-image'),

  classNames: ['thumb-container'],

  // Properties passed to component in template
  photoTitle: null,
  photoFarm: null,
  photoServer: null,
  photoId: null,
  photoSecret: null,


  /**
   * A CP returning a thumbnail url
   */
  photoThumbnailUrl: Ember.computed('photoFarm', 'photoServer', 'photoId', 'photoSecret', function() {
    return `https://farm${this.get('photoFarm')}.staticflickr.com/${this.get('photoServer')}/${this.get('photoId')}_${this.get('photoSecret')}_n.jpg`;
  }),

  /**
   * A CP returning a full image url
   */
  photoFullUrl: Ember.computed('photoFarm', 'photoServer', 'photoId', 'photoSecret', function() {
    return `https://farm${this.get('photoFarm')}.staticflickr.com/${this.get('photoServer')}/${this.get('photoId')}_${this.get('photoSecret')}_b.jpg`;
  }),

  /**
   * Method for showing the modal (using the injected services' method)
   */
  click() {
    this.get('modal').showModal(this.get('photoFullUrl'));
  }
});
