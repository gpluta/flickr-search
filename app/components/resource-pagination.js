import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['resource-pagination'],

  // Props passed to the component in the template
  nextLink: null,
  prevLink: null,
  currentPage: null,
  totalPages: null,
  totalElements: null,

  prevLinkActive: Ember.computed('nextLink', function() {
    //
  }),

  nextLinkActive: Ember.computed('prevLink', function() {
    //
  }),
});
